export const waitRAF = () => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))
