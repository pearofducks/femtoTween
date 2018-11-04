// linear: no easing, no acceleration
// easeIn*: accelerating from zero velocity
// easeOut*: decelerating to zero velocity
// easeInOut*: acceleration until halfway, then deceleration

const EaseIn = (power) => (t) => Math.pow(t, power)
const EaseOut = (power) => (t) => 1 - Math.abs(Math.pow(t - 1, power))
const EaseInOut = (power) => (t) => t < 0.5 ? EaseIn(power)(t * 2) / 2 : EaseOut(power)(t * 2 - 1) / 2 + 0.5

export const linear = EaseInOut(1)
export const easeInQuad = EaseIn(2)
export const easeOutQuad = EaseOut(2)
export const easeInOutQuad = EaseInOut(2)
export const easeInCubic = EaseIn(3)
export const easeOutCubic = EaseOut(3)
export const easeInOutCubic = EaseInOut(3)
export const easeInQuart = EaseIn(4)
export const easeOutQuart = EaseOut(4)
export const easeInOutQuart = EaseInOut(4)
export const easeInQuint = EaseIn(5)
export const easeOutQuint = EaseOut(5)
export const easeInOutQuint = EaseInOut(5)