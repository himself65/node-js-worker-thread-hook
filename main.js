import { Worker } from 'node:worker_threads'

new Worker(new URL('worker.js', import.meta.url), {
  execArgv: [
    // '--conditions',
    // 'react-server'
  ]
})
