import { easeInOutQuart } from './ease'

interface tweenOptions {
  time?: number,
  done?: Function,
  easeFunc?: Function
}

export function tween(from, to, cb, { time, done, easeFunc }: tweenOptions = {}) {
  const ease = easeFunc || easeInOutQuart
  const diff = from - to
  const targetTime = time || 400
  let start = null
  function step(timestamp) {
    if (!start) start = timestamp
    let progress = timestamp - start
    let percentage = progress / targetTime
    if (percentage < 1) cb(from - ease(percentage) * diff)
    if (progress < targetTime) {
      window && window.requestAnimationFrame(step)
    } else {
      cb(to)
      done && done()
    }
  }
  window && window.requestAnimationFrame(step)
}

export * from './ease'
