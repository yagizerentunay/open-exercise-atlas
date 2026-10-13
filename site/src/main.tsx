import React, { useEffect, useMemo, useState } from 'react'
import { createRoot } from 'react-dom/client'
import type { Exercise, Locale, ResolvedExercise } from '../../src/types.ts'
import { filterExercises, localize, type Filters } from '../../src/catalog.ts'
import enLabels from '../../data/translations/en.json'
import trLabels from '../../data/translations/tr.json'
import './style.css'

const labels = { en: enLabels, tr: trLabels }
const copy = {
  en: { subtitle: 'A structured, reusable exercise library', search: 'Search exercises', muscle: 'Muscle', equipment: 'Equipment', difficulty: 'Difficulty', category: 'Category', pattern: 'Movement pattern', all: 'All', none: 'No exercises match these filters.', loading: 'Loading exercises…', back: 'Back to library', steps: 'Instructions', alternatives: 'Alternatives', media: 'Visual guide pending rights review', review: 'Technique review pending', error: 'Could not load the exercise data.' },
  tr: { subtitle: 'Yapılandırılmış, yeniden kullanılabilir egzersiz kütüphanesi', search: 'Egzersiz ara', muscle: 'Kas', equipment: 'Ekipman', difficulty: 'Zorluk', category: 'Kategori', pattern: 'Hareket paterni', all: 'Tümü', none: 'Bu filtrelere uyan egzersiz yok.', loading: 'Egzersizler yükleniyor…', back: 'Kütüphaneye dön', steps: 'Uygulama adımları', alternatives: 'Alternatifler', media: 'Görsel hak incelemesini bekliyor', review: 'Teknik inceleme bekliyor', error: 'Egzersiz verisi yüklenemedi.' },
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
  const t = copy[locale]
  const facet = labels[locale]
  const update = (key: keyof Filters, value: string) => { setFilters((current) => ({ ...current, [key]: value })); setSelected('') }
  function select(label: string, key: keyof Filters, values: string[], map: Record<string, string>) {
    return <label>{label}<select value={filters[key] ?? ''} onChange={(event) => update(key, event.target.value)}><option value="">{t.all}</option>{values.map((value) => <option key={value} value={value}>{map[value] ?? value}</option>)}</select></label>
  }
  function card(ex: ResolvedExercise) {
    return <button className="card" key={ex.id} onClick={() => { setSelected(ex.id); window.scrollTo(0, 0) }}><span className="tag">{ex.movementPattern}</span><h2>{ex.name}</h2><p>{ex.description}</p><div className="card-foot"><span>{ex.primaryMuscles.map((m) => facet.muscles[m]).join(' · ')}</span><span>↗</span></div></button>
  }
  return <><header><div className="brand"><span className="brand-icon" aria-hidden="true">◎</span><span>OPEN EXERCISE <strong>ATLAS</strong></span></div><label className="language">Language <select aria-label="Language" value={locale} onChange={(event) => setLocale(event.target.value as Locale)}><option value="en">English</option><option value="tr">Türkçe</option></select></label></header><main><div className="hero"><p className="eyebrow">OPEN DATA / HUMAN MOVEMENT</p><h1>Find your<br/><em>next move.</em></h1><p>{t.subtitle}</p><div className="stat">{records?.length ?? '—'} <span>EXERCISES</span></div></div>{error ? <p role="alert">{t.error}</p> : !records ? <p role="status">{t.loading}</p> : detail ? <section className="detail"><button className="back" onClick={() => setSelected('')}>← {t.back}</button><p className="eyebrow">{detail.movementPattern} / {detail.difficulty}</p><h2>{detail.name}</h2><p>{detail.description}</p><div className="detail-grid"><div><h3>{t.steps}</h3><ol>{detail.instructions.map((step, index) => <li key={index}>{step}</li>)}</ol><p className="notice">{t.review}</p></div><div><div className="media">{detail.media?.length ? detail.media.map((asset) => <img key={asset.path} src={`${import.meta.env.BASE_URL}${asset.path}`} alt={asset.alt[locale] ?? asset.alt.en} loading="lazy" />) : t.media}</div><h3>{t.alternatives}</h3>{(detail.alternatives ?? []).length ? detail.alternatives?.map((id) => { const alternative = localized.find((item) => item.id === id); return alternative ? <button className="link" key={id} onClick={() => setSelected(id)}>{alternative.name} ↗</button> : null }) : <p>—</p>}</div></div></section> : <section className="library"><div className="toolbar"><label className="search">{t.search}<input type="search" value={filters.query ?? ''} onChange={(event) => update('query', event.target.value)} placeholder={t.search}/></label>{select(t.muscle, 'muscle', Object.keys(facet.muscles), facet.muscles)}{select(t.equipment, 'equipment', Object.keys(facet.equipment), facet.equipment)}{select(t.difficulty, 'difficulty', ['beginner','intermediate','advanced'], {})}{select(t.category, 'category', ['strength','mobility','cardio'], {})}{select(t.pattern, 'movementPattern', Object.keys(facet.movementPatterns), facet.movementPatterns)}</div><p className="count">{visible.length} / {records.length}</p>{visible.length ? <div className="grid">{visible.map(card)}</div> : <p role="status" className="empty">{t.none}</p>}</section>}</main><footer>Open Exercise Atlas · CC0 data drafts · MIT code</footer></>
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)
