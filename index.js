import { easeInOutQuart } from './ease'

export function tween(from, to, cb, { time, done, easeFunc } = {}) {
  const windowExists = (typeof window !== 'undefined')
  let stopped = false
  const stop = () => stopped = true
  const ease = easeFunc || easeInOutQuart
  const diff = from - to
  const targetTime = time || 400
  let start = null
  function step(timestamp) {
    if (stopped) return
    if (!start) start = timestamp
    const progress = timestamp - start
    const percentage = Math.min(progress / targetTime, 1)
    cb(from - ease(percentage) * diff)
    if (progress < targetTime) {
      window.requestAnimationFrame(step)
    } else {
      cb(to)
      done && done()
    }
  }
  windowExists && window.requestAnimationFrame(step)
  return stop
}

export * from './ease'
