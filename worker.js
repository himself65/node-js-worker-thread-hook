import { register } from 'node:module'

register('./register.js', import.meta.url)

await import('pkg-a')
