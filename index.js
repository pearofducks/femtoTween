import { easeInOutQuart } from './ease.js'

/**
 * @callback tweenCallback
 * @param {number} v - the current value of the tween
 * @returns {void}
 */

/**
 * change a number over time
 * @arg {number} from - the number to start at
 * @arg {number} to - the number to finish at
 * @arg {tweenCallback} cb - function called as tween progresses
 * @arg {object} [opts] - options
 * @arg {number} [opts.time = 400] - how long the tween should last
 * @arg {function} [opts.done] - function called when tweening is finished
 * @arg {function} [opts.ease] - function used for easing the tween
 * @arg {Number} [opts.delay] - Delays the tweened
 * @returns {function} - callback that can stop a tween in progress
 */
export function tween(from, to, cb, { time = 400, done, ease = easeInOutQuart, delay } = {}) {
  const windowExists = (typeof window !== 'undefined')
  let stopped = false
  const stop = () => stopped = true
  const diff = from - to
  let start = null
  /**
   * Step function
   * @arg {Number} timestamp - the time elsaped since the animation started
   */
  function step(timestamp) {
    setTimeout(() => {
      if (stopped) return
      if (!start) start = timestamp
      const progress = timestamp - start
      const percentage = Math.min(progress / time, 1)
      cb(from - ease(percentage) * diff)
      if (progress < time) {
        window.requestAnimationFrame(step)
      } else {
        cb(to)
        done && done()
      }
    }, delay ?? 0)
  }
  windowExists && window.requestAnimationFrame(step)
  return stop
}

export * from './ease.js'
