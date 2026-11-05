import React, { useEffect, useMemo, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import type { Exercise, Locale, Muscle, ResolvedExercise } from '../../src/types.ts'
import { NO_EQUIPMENT, filterExercises, localize, pickIllustration, type Filters } from '../../src/catalog.ts'
import { muscleTiles } from '../../src/muscleGallery.ts'
import exerciseDataUrl from '../../dist/exercises.min.json?url'
import enLabels from '../../data/translations/en.json'
import trLabels from '../../data/translations/tr.json'
import './style.css'

const labels = { en: enLabels, tr: trLabels }
// Bump when the muscle PNG set changes so browsers do not reuse old cached illustrations.
const muscleArtworkRevision = 'ec348d9'
const difficultyLabels = { en: { beginner: 'Beginner', intermediate: 'Intermediate', advanced: 'Advanced' }, tr: { beginner: 'Başlangıç', intermediate: 'Orta', advanced: 'İleri' } }
const categoryLabels = { en: { strength: 'Strength', mobility: 'Mobility', cardio: 'Cardio' }, tr: { strength: 'Kuvvet', mobility: 'Hareketlilik', cardio: 'Kardiyo' } }
const copy = {
  en: { exercises: 'Exercises', unit: 'exercises', language: 'Language', search: 'Search exercises', filters: 'Filters', clearFilters: 'Clear filters', muscle: 'Muscle', equipment: 'Equipment', difficulty: 'Difficulty', category: 'Category', pattern: 'Movement pattern', all: 'All', none: 'No exercises match these filters.', loading: 'Loading exercises…', back: 'Back to library', steps: 'Instructions', formCues: 'Form cues', commonMistakes: 'Common mistakes', alternatives: 'Alternatives', media: 'No visual guide available', visualGuide: 'Visual guide', fallback: 'Some exercise text is shown in English because a translation is not available.', start: 'Start', finish: 'Finish', animation: 'Animation', reference: 'Reference', noEquipment: 'No equipment', noIllustration: 'No illustration yet', error: 'Could not load the exercise data.', muscleAtlas: 'Browse by muscle', muscleAtlasHint: 'Choose a highlighted muscle to filter exercises.', primaryNav: 'Main navigation', breadcrumb: 'Breadcrumb', view: 'View', gridView: 'Grid view', listView: 'List view', github: 'Source on GitHub' },
  tr: { exercises: 'Egzersizler', unit: 'egzersiz', language: 'Dil', search: 'Egzersiz ara', filters: 'Filtreler', clearFilters: 'Filtreleri temizle', muscle: 'Kas', equipment: 'Ekipman', difficulty: 'Zorluk', category: 'Kategori', pattern: 'Hareket paterni', all: 'Tümü', none: 'Bu filtrelere uyan egzersiz yok.', loading: 'Egzersizler yükleniyor…', back: 'Kütüphaneye dön', steps: 'Uygulama adımları', formCues: 'Form ipuçları', commonMistakes: 'Sık yapılan hatalar', alternatives: 'Alternatifler', media: 'Görsel rehber mevcut değil', visualGuide: 'Görsel rehber', fallback: 'Çevirisi bulunmayan egzersiz metinleri İngilizce gösteriliyor.', start: 'Başlangıç', finish: 'Bitiş', animation: 'Animasyon', reference: 'Referans', noEquipment: 'Ekipmansız', noIllustration: 'Henüz çizim yok', error: 'Egzersiz verisi yüklenemedi.', muscleAtlas: 'Kasa göre keşfet', muscleAtlasHint: 'Egzersizleri filtrelemek için vurgulanan kası seç.', primaryNav: 'Ana gezinme', breadcrumb: 'Gezinti yolu', view: 'Görünüm', gridView: 'Izgara görünümü', listView: 'Liste görünümü', github: 'GitHub kaynağı' },
}
const params = new URLSearchParams(location.search)
const initialLocale: Locale = params.get('lang') === 'tr' ? 'tr' : 'en'
const initialView = params.get('view') === 'list' ? 'list' : 'grid'
const initialFilters: Filters = { query: params.get('q') ?? '', muscle: params.get('muscle') ?? '', equipment: params.get('equipment') ?? '', difficulty: params.get('difficulty') ?? '', category: params.get('category') ?? '', movementPattern: params.get('pattern') ?? '' }
const repositoryUrl = 'https://github.com/yagizerentunay/open-exercise-atlas'

const iconProps = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true, focusable: false } as const
const BrandMark = () => <svg className="brand-mark" width="32" height="32" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><circle cx="16" cy="16" r="13" fill="none" stroke="#6c8c35" strokeWidth="4" /><circle cx="16" cy="16" r="7" fill="none" stroke="#c9ed6b" strokeWidth="4" /><circle cx="16" cy="16" r="2.5" fill="#6c8c35" /></svg>
const SearchIcon = () => <svg {...iconProps}><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4.5 4.5" /></svg>
const GlobeIcon = () => <svg {...iconProps}><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.6 2.7 3.9 5.7 3.9 9s-1.3 6.3-3.9 9c-2.6-2.7-3.9-5.7-3.9-9S9.400 5.700 12 3Z" /></svg>
const GithubIcon = () => <svg {...iconProps} fill="currentColor" stroke="none"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" /></svg>
const GridIcon = () => <svg {...iconProps}><rect x="4" y="4" width="6.500" height="6.500" rx="1.500" /><rect x="13.500" y="4" width="6.500" height="6.500" rx="1.500" /><rect x="4" y="13.500" width="6.500" height="6.500" rx="1.500" /><rect x="13.500" y="13.500" width="6.500" height="6.500" rx="1.500" /></svg>
const ListIcon = () => <svg {...iconProps}><path d="M9 6.500h11M9 12h11M9 17.500h11" /><circle cx="4.800" cy="6.500" r=".6" /><circle cx="4.800" cy="12" r=".6" /><circle cx="4.800" cy="17.500" r=".6" /></svg>
const ImageIcon = () => <svg {...iconProps} width={16} height={16}><rect x="3.500" y="4.500" width="17" height="15" rx="2.500" /><circle cx="9" cy="10" r="1.700" /><path d="m4 17 5-4.500 3.500 3 3-2.500L20 16" /></svg>

function App() {
  const [locale, setLocale] = useState<Locale>(initialLocale)
  const [filters, setFilters] = useState<Filters>(initialFilters)
  const [selected, setSelected] = useState(params.get('exercise') ?? '')
  const [view, setView] = useState<'grid' | 'list'>(initialView)
  const [atlasOpen, setAtlasOpen] = useState(false)
  const [records, setRecords] = useState<Exercise[] | null>(null)
  const [error, setError] = useState(false)
  const focusOpenedDetail = useRef(false)
  useEffect(() => {
    fetch(exerciseDataUrl)
      .then((response) => {
        if (!response.ok) throw new Error('Could not load exercise data')
        return response.json() as Promise<Exercise[]>
      })
      .then(setRecords)
      .catch(() => setError(true))
  }, [])
  useEffect(() => {
    document.documentElement.lang = locale
    const query = new URLSearchParams()
    if (locale !== 'en') query.set('lang', locale)
    for (const [key, value] of Object.entries({ q: filters.query, muscle: filters.muscle, equipment: filters.equipment, difficulty: filters.difficulty, category: filters.category, pattern: filters.movementPattern, view: view === 'list' ? view : '', exercise: selected })) if (value) query.set(key, value)
    history.replaceState(null, '', `${location.pathname}${query.size ? '?' + query : ''}`)
  }, [filters, locale, selected, view])
  const localized = useMemo(() => (records ?? []).map((item) => localize(item, locale)), [records, locale])
  const visible = useMemo(() => filterExercises(localized, filters), [localized, filters])
  const detail = localized.find((item) => item.id === selected)
  const detailSource = records?.find((item) => item.id === selected)
  const hasEnglishFallback = locale === 'tr' && detailSource && (!detailSource.name.tr || !detailSource.description.tr || !detailSource.instructions.tr)
  useEffect(() => { if (records && selected && !detail) setSelected('') }, [records, selected, detail])
  useEffect(() => { if (detail && focusOpenedDetail.current) { document.getElementById('exercise-title')?.focus(); focusOpenedDetail.current = false } }, [detail?.id])
  const t = copy[locale]
  const facet = labels[locale]
  const update = (key: keyof Filters, value: string) => { setFilters((current) => ({ ...current, [key]: value })); setSelected('') }
  const clearFilters = () => { setFilters({}); setSelected('') }
  const openExercise = (id: string) => { focusOpenedDetail.current = true; setSelected(id); window.scrollTo(0, 0) }
  const backToLibrary = () => { setSelected(''); requestAnimationFrame(() => document.getElementById('exercise-search')?.focus()) }
  const openMuscleAtlas = () => { setSelected(''); setAtlasOpen(true); requestAnimationFrame(() => { const summary = document.getElementById('muscle-atlas-summary'); summary?.scrollIntoView({ block: 'start' }); summary?.focus({ preventScroll: true }) }) }
  function select(label: string, key: keyof Filters, values: string[], map: Record<string, string>) {
    return <label className="filter"><span className="filter-label">{label}</span><select value={filters[key] ?? ''} onChange={(event) => update(key, event.target.value)}><option value="">{t.all}</option>{values.map((value) => <option key={value} value={value}>{map[value] ?? value}</option>)}</select></label>
  }
  function card(ex: ResolvedExercise) {
    const cover = pickIllustration(ex.media)
    const muscles = ex.primaryMuscles.map((m) => facet.muscles[m]).join(' · ')
    const equipment = ex.equipment.length ? ex.equipment.map((item) => facet.equipment[item]).join(' · ') : t.noEquipment
    return <article className="card" key={ex.id}>
      <span className="card-image">{cover ? <img src={`${import.meta.env.BASE_URL}${cover.path}`} alt="" loading="lazy" decoding="async" /> : <BrandMark />}</span>
      <div className="card-body">
        <span className="card-kicker">{facet.movementPatterns[ex.movementPattern]}</span>
        <h2 className="card-title"><button className="card-open" onClick={() => openExercise(ex.id)}>{ex.name}</button></h2>
        <p className="chips"><span className="chip">{muscles}</span><span className="chip">{equipment}</span></p>
        <p className="card-description">{ex.description}</p>
      </div>
      <span className="card-arrow" aria-hidden="true">›</span>
    </article>
  }
  return <>
    <header className="site-header"><div className="header-inner">
      <button className="brand" onClick={backToLibrary}><BrandMark /><span>OPEN EXERCISE <strong>ATLAS</strong></span></button>
      <nav className="nav" aria-label={t.primaryNav}>
        <button className="nav-link" onClick={backToLibrary} aria-current={!atlasOpen || selected ? 'page' : undefined}>{t.exercises}</button>
        <button className="nav-link" onClick={openMuscleAtlas} aria-current={atlasOpen && !selected ? 'page' : undefined}>{t.muscleAtlas}</button>
      </nav>
      <div className="header-actions">
        <label className="language"><GlobeIcon /><span className="visually-hidden">{t.language}</span><select value={locale} onChange={(event) => setLocale(event.target.value as Locale)}><option value="en">English</option><option value="tr">Türkçe</option></select></label>
        <a className="icon-link" href={repositoryUrl} aria-label={t.github} title={t.github}><GithubIcon /></a>
      </div>
    </div></header>
    <main>
      {error ? <p role="alert">{t.error}</p> : !records ? <p role="status">{t.loading}</p> : detail ? <section className="detail">
        <nav className="breadcrumb" aria-label={t.breadcrumb}><button className="crumb" onClick={backToLibrary} aria-label={t.back}>{t.exercises}</button><span className="crumb-sep" aria-hidden="true">›</span><span className="crumb-current" aria-current="page">{detail.name}</span></nav>
        <div className="detail-layout">
          <div className="detail-media">
            <div className="media">{detail.media?.length ? detail.media.map((asset) => <figure key={asset.path}><img src={`${import.meta.env.BASE_URL}${asset.path}`} alt={asset.alt[locale] ?? asset.alt.en} />{detail.media!.length > 1 && <figcaption>{t[asset.role]}</figcaption>}</figure>) : <p>{t.media}</p>}</div>
            {detail.media?.length ? <span className="media-badge"><ImageIcon />{t.visualGuide}</span> : null}
          </div>
          <div className="detail-content">
            <p className="detail-kicker">{facet.movementPatterns[detail.movementPattern]} · {difficultyLabels[locale][detail.difficulty]}</p>
            <h1 id="exercise-title" tabIndex={-1}>{detail.name}</h1>
            <p className="chips"><span className="chip">{detail.primaryMuscles.map((muscle) => facet.muscles[muscle]).join(' · ')}</span><span className="chip">{detail.equipment.length ? detail.equipment.map((item) => facet.equipment[item]).join(' · ') : t.noEquipment}</span></p>
            <p className="detail-description">{detail.description}</p>
            {hasEnglishFallback && <p className="translation-note">{t.fallback}</p>}
            <h2>{t.steps}</h2>
            <ol>{detail.instructions.map((step, index) => <li key={index}>{step}</li>)}</ol>
            {detail.formCues?.length ? <><h2>{t.formCues}</h2><ul className="technique-list">{detail.formCues.map((cue, index) => <li key={index}>{cue}</li>)}</ul></> : null}
            {detail.commonMistakes?.length ? <><h2>{t.commonMistakes}</h2><ul className="technique-list">{detail.commonMistakes.map((mistake, index) => <li key={index}>{mistake}</li>)}</ul></> : null}
            <h2>{t.alternatives}</h2>
            {(detail.alternatives ?? []).length ? detail.alternatives?.map((id) => { const alternative = localized.find((item) => item.id === id); return alternative ? <button className="link" key={id} onClick={() => openExercise(id)}>{alternative.name} ›</button> : null }) : <p className="muted">—</p>}
          </div>
        </div>
      </section> : <section className="library">
        <h1 className="page-title">{t.exercises}</h1>
        <label className="search"><SearchIcon /><input id="exercise-search" type="search" aria-label={t.search} value={filters.query ?? ''} onChange={(event) => update('query', event.target.value)} placeholder={t.search} /></label>
        <div className="filters" role="group" aria-label={t.filters}>{select(t.muscle, 'muscle', Object.keys(facet.muscles), facet.muscles)}{select(t.equipment, 'equipment', [NO_EQUIPMENT, ...Object.keys(facet.equipment)], { [NO_EQUIPMENT]: t.noEquipment, ...facet.equipment })}{select(t.difficulty, 'difficulty', ['beginner', 'intermediate', 'advanced'], difficultyLabels[locale])}{select(t.category, 'category', ['strength', 'mobility', 'cardio'], categoryLabels[locale])}{select(t.pattern, 'movementPattern', Object.keys(facet.movementPatterns), facet.movementPatterns)}</div>
        <details className="muscle-atlas" id="muscle-atlas" open={atlasOpen} onToggle={(event) => setAtlasOpen(event.currentTarget.open)}><summary id="muscle-atlas-summary">{t.muscleAtlas}<span>{t.muscleAtlasHint}</span></summary><div className="muscle-grid">{muscleTiles(Object.keys(facet.muscles) as Muscle[], __MUSCLE_ILLUSTRATIONS__).map(({ muscle, illustration }) => { const name = facet.muscles[muscle]; return <button className="muscle-tile" key={muscle} onClick={() => update('muscle', muscle)} aria-pressed={filters.muscle === muscle}>{illustration ? <img src={`${import.meta.env.BASE_URL}${illustration}?v=${muscleArtworkRevision}`} alt={locale === 'tr' ? `${name} kası kırmızıyla vurgulanmış anatomik çizim` : `Anatomical illustration highlighting the ${name.toLowerCase()} muscle in red`} loading="lazy" decoding="async" /> : <span className="muscle-placeholder">{t.noIllustration}</span>}<span>{name}</span></button> })}</div></details>
        <div className="results-bar">
          <p className="count" role="status"><strong>{visible.length === records.length ? records.length : `${visible.length} / ${records.length}`}</strong> {t.unit}</p>
          {Object.values(filters).some(Boolean) && <button className="clear-filters" onClick={clearFilters}>{t.clearFilters}</button>}
          <div className="view-toggle" role="group" aria-label={t.view}><button aria-pressed={view === 'grid'} aria-label={t.gridView} title={t.gridView} onClick={() => setView('grid')}><GridIcon /></button><button aria-pressed={view === 'list'} aria-label={t.listView} title={t.listView} onClick={() => setView('list')}><ListIcon /></button></div>
        </div>
        {locale === 'tr' && records.some((item) => !item.description.tr) && <p className="translation-note library-translation-note">{t.fallback}</p>}
        {visible.length ? <div className={`grid ${view}`}>{visible.map(card)}</div> : <p role="status" className="empty">{t.none}</p>}
      </section>}
    </main><footer>Open Exercise Atlas · CC0 data drafts · MIT code · <a href={repositoryUrl}>GitHub</a></footer>
  </>
}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>)
