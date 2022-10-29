export const waitRAF = () => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
/**
 * @arg {Number} delay - number of seconds to wait for
 */
export const waitTimeout = (delay) => new Promise(resolve => setTimeout(resolve, delay))
