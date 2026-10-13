import { loadAndValidate } from './shared.ts'
const records = loadAndValidate()
console.log(`Validated ${records.length} exercises (${records.filter((e) => e.reviewStatus === 'reviewed').length} reviewed).`)
