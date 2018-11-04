// quick window.RAF polyfill from https://gist.github.com/paulirish/1579671
let lastTime = 0
function raf (callback) {
	const currTime = window.performance.now()
	const timeToCall = Math.max(0, 16 - (currTime - lastTime))
	const id = window.setTimeout(() => { callback(currTime + timeToCall) }, timeToCall)
	lastTime = currTime + timeToCall
	return id
}

export default raf