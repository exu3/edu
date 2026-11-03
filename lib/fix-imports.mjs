// lib/fix-imports.mjs
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const walk = d =>
  readdirSync(d, { withFileTypes: true }).flatMap(e =>
    e.isDirectory() ? walk(join(d, e.name)) : [join(d, e.name)],
  )

for (const f of walk('.contentlayer/generated').filter(f =>
  f.endsWith('.mjs'),
)) {
  const s = readFileSync(f, 'utf8')
  writeFileSync(
    f,
    s.replaceAll("assert { type: 'json' }", "with { type: 'json' }"),
  )
}
