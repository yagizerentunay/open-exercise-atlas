import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import type { Exercise, Locale, ResolvedExercise } from '../../src/types.ts'
import { filterExercises, localize, type Filters } from '../../src/catalog.ts'
import enLabels from '../../data/translations/en.json'
import trLabels from '../../data/translations/tr.json'
import './style.css'

const labels = { en: enLabels, tr: trLabels }
const difficultyLabels = { en: { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' }, tr: { beginner: 'Başlangıç', intermediate: 'Orta', advanced: 'İleri' } }
const categoryLabels = { en: { strength: 'Strength', mobility: 'Mobility', cardio: 'Cardio' }, tr: { strength: 'Kuvvet', mobility: 'Hareketlilik', cardio: 'Kardiyo' } }
const copy = {
  en: { subtitle: 'A structured, reusable exercise library', eyebrow: 'OPEN DATA / HUMAN MOVEMENT', hero: 'Find your next move.', exercises: 'Exercises', language: 'Language', search: 'Search exercises', muscle: 'Muscle', equipment: 'Equipment', difficulty: 'Difficulty', category: 'Category', pattern: 'Movement pattern', all: 'All', none: 'No exercises match these filters.', loading: 'Loading exercises…', back: 'Back to library', steps: 'Instructions', alternatives: 'Alternatives', media: 'No visual guide available', review: 'Technique review pending', reviewed: 'Technique reviewed', fallback: 'Some exercise text is shown in English because a translation is not available.', start: 'Start', finish: 'Finish', animation: 'Animation', error: 'Could not load the exercise data.', muscleAtlas: 'Browse by muscle', muscleAtlasHint: 'Choose a highlighted muscle to filter exercises.' },
  tr: { subtitle: 'Yapılandırılmış, yeniden kullanılabilir egzersiz kütüphanesi', eyebrow: 'AÇIK VERİ / İNSAN HAREKETİ', hero: 'Sıradaki hareketini bul.', exercises: 'Egzersiz', language: 'Dil', search: 'Egzersiz ara', muscle: 'Kas', equipment: 'Ekipman', difficulty: 'Zorluk', category: 'Kategori', pattern: 'Hareket paterni', all: 'Tümü', none: 'Bu filtrelere uyan egzersiz yok.', loading: 'Egzersizler yükleniyor…', back: 'Kütüphaneye dön', steps: 'Uygulama adımları', alternatives: 'Alternatifler', media: 'Görsel rehber mevcut değil', review: 'Teknik inceleme bekliyor', reviewed: 'Teknik inceleme tamamlandı', fallback: 'Çevirisi bulunmayan egzersiz metinleri İngilizce gösteriliyor.', start: 'Başlangıç', finish: 'Bitiş', animation: 'Animasyon', error: 'Egzersiz verisi yüklenemedi.', muscleAtlas: 'Kasa göre keşfet', muscleAtlasHint: 'Egzersizleri filtrelemek için vurgulanan kası seç.' },
}
const params = new URLSearchParams(location.search)
const initialLocale: Locale = params.get('lang') === 'tr' ? 'tr' : 'en'
const initialFilters: Filters = { query: params.get('q') ?? '', muscle: params.get('muscle') ?? '', equipment: params.get('equipment') ?? '', difficulty: params.get('difficulty') ?? '', category: params.get('category') ?? '', movementPattern: params.get('pattern') ?? '' }

function App() {
  const [locale, setLocale] = useState<Locale>(initialLocale)
  const [filters, setFilters] = useState<Filters>(initialFilters)
  const [selected, setSelected] = useState(params.get('exercise') ?? '')
  const [records, setRecords] = useState<Exercise[] | null>(null)
  const [error, setError] = useState(false)
  const focusOpenedDetail = useRef(false)
  useEffect(() => { import('../../dist/exercises.json').then((module) => setRecords(module.default as Exercise[])).catch(() => setError(true)) }, [])
  useEffect(() => {
    document.documentElement.lang = locale
    const query = new URLSearchParams()
    if (locale !== 'en') query.set('lang', locale)
    for (const [key, value] of Object.entries({ q: filters.query, muscle: filters.muscle, equipment: filters.equipment, difficulty: filters.difficulty, category: filters.category, pattern: filters.movementPattern, exercise: selected })) if (value) query.set(key, value)
    history.replaceState(null, '', `${location.pathname}${query.size ? '?' + query : ''}`)
  }, [filters, locale, selected])
  const localized = useMemo(() => (records ?? []).map((item) => localize(item, locale)), [records, locale])
  const visible = useMemo(() => filterExercises(localized, filters), [localized, filters])
  const detail = localized.find((item) => item.id === selected)
  const detailSource = records?.find((item) => item.id === selected)
  const hasEnglishFallback = locale === 'tr' && detailSource && (!detailSource.name.tr || !detailSource.description.tr || !detailSource.instructions.tr)
  useEffect(() => { if (detail && focusOpenedDetail.current) { document.getElementById('exercise-title')?.focus(); focusOpenedDetail.current = false } }, [detail?.id])
  const t = copy[locale]
  const facet = labels[locale]
  const update = (key: keyof Filters, value: string) => { setFilters((current) => ({ ...current, [key]: value })); setSelected('') }
  const openExercise = (id: string) => { focusOpenedDetail.current = true; setSelected(id); window.scrollTo(0, 0) }
  const backToLibrary = () => { setSelected(''); requestAnimationFrame(() => document.getElementById('exercise-search')?.focus()) }
  function select(label: string, key: keyof Filters, values: string[], map: Record<string, string>) {
    return <label>{label}<select value={filters[key] ?? ''} onChange={(event) => update(key, event.target.value)}><option value="">{t.all}</option>{values.map((value) => <option key={value} value={value}>{map[value] ?? value}</option>)}</select></label>
  }
  function card(ex: ResolvedExercise) {
    const cover = ex.media?.find((asset) => asset.role === 'finish' || asset.role === 'start')
    return <article className="card" key={ex.id}>
      <span className="tag">{facet.movementPatterns[ex.movementPattern]}</span>
      <h2 className="card-title"><button className="card-open" onClick={() => openExercise(ex.id)}>{ex.name}</button></h2><p className="card-description">{ex.description}</p>
      <div className="card-foot"><span>{ex.primaryMuscles.map((m) => facet.muscles[m]).join(' · ')}</span>{cover && <span className="card-image"><img src={`${import.meta.env.BASE_URL}${cover.path}`} alt="" loading="lazy" decoding="async" /></span>}<span className="card-arrow" aria-hidden="true">↗</span></div>
    </article>
  }
  return <>
    <header><div className="brand"><span className="brand-icon" aria-hidden="true">◎</span><span>OPEN EXERCISE <strong>ATLAS</strong></span></div><label className="language">{t.language}<select aria-label={t.language} value={locale} onChange={(event) => setLocale(event.target.value as Locale)}><option value="en">English</option><option value="tr">Türkçe</option></select></label></header>
    <main>
      {!selected && <div className="hero"><p className="eyebrow">{t.eyebrow}</p><h1>{t.hero}</h1><p>{t.subtitle}</p><div className="stat">{records?.length ?? '—'} <span>{t.exercises}</span></div></div>}
      {error ? <p role="alert">{t.error}</p> : !records ? <p role="status">{t.loading}</p> : detail ? <section className="detail">
        <button className="back" onClick={backToLibrary}>← {t.back}</button>
        <div className="detail-heading"><p className="eyebrow">{facet.movementPatterns[detail.movementPattern]} / {difficultyLabels[locale][detail.difficulty]}</p><h1 id="exercise-title" tabIndex={-1}>{detail.name}</h1><p className="detail-description">{detail.description}</p><div className="detail-meta"><span>{detail.primaryMuscles.map((muscle) => facet.muscles[muscle]).join(' · ')}</span><span>{detail.equipment.map((item) => facet.equipment[item]).join(' · ')}</span></div><p className="notice" role="status">{detail.reviewStatus === 'reviewed' ? t.reviewed : t.review}</p>{hasEnglishFallback && <p className="translation-note">{t.fallback}</p>}</div>
        <div className="detail-grid"><div><h2>{t.steps}</h2><ol>{detail.instructions.map((step, index) => <li key={index}>{step}</li>)}</ol></div><div><div className="media">{detail.media?.length ? detail.media.map((asset) => <figure key={asset.path}><img src={`${import.meta.env.BASE_URL}${asset.path}`} alt={asset.alt[locale] ?? asset.alt.en} /><figcaption>{t[asset.role]}</figcaption></figure>) : t.media}</div><h2>{t.alternatives}</h2>{(detail.alternatives ?? []).length ? detail.alternatives?.map((id) => { const alternative = localized.find((item) => item.id === id); return alternative ? <button className="link" key={id} onClick={() => openExercise(id)}>{alternative.name} ↗</button> : null }) : <p>—</p>}</div></div>
      </section> : <section className="library"><div className="toolbar"><label className="search">{t.search}<input id="exercise-search" type="search" value={filters.query ?? ''} onChange={(event) => update('query', event.target.value)} placeholder={t.search}/></label>{select(t.muscle, 'muscle', Object.keys(facet.muscles), facet.muscles)}{select(t.equipment, 'equipment', Object.keys(facet.equipment), facet.equipment)}{select(t.difficulty, 'difficulty', ['beginner','intermediate','advanced'], difficultyLabels[locale])}{select(t.category, 'category', ['strength','mobility','cardio'], categoryLabels[locale])}{select(t.pattern, 'movementPattern', Object.keys(facet.movementPatterns), facet.movementPatterns)}</div><details className="muscle-atlas"><summary>{t.muscleAtlas}<span>{t.muscleAtlasHint}</span></summary><div className="muscle-grid">{Object.entries(facet.muscles).map(([muscle, name]) => <button className="muscle-tile" key={muscle} onClick={() => update('muscle', muscle)} aria-pressed={filters.muscle === muscle}><img src={`${import.meta.env.BASE_URL}media/muscles/${muscle}.png`} alt={locale === 'tr' ? `${name} kası kırmızıyla vurgulanmış anatomik çizim` : `Anatomical illustration highlighting the ${name.toLowerCase()} muscle in red`} loading="lazy" decoding="async"/><span>{name}</span></button>)}</div></details><p className="count">{visible.length} / {records.length}</p>{locale === 'tr' && records.some((item) => !item.description.tr) && <p className="translation-note library-translation-note">{t.fallback}</p>}{visible.length ? <div className="grid">{visible.map(card)}</div> : <p role="status" className="empty">{t.none}</p>}</section>}
    </main><footer>Open Exercise Atlas · CC0 data drafts · MIT code</footer>
  </>
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)
