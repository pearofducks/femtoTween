import test from 'ava'
import * as sinon from 'sinon'
import * as Window from 'window'
import { sleep } from './helpers'
import raf from './raf'
import { tween } from '../index'

(global as any).window = new Window()
window.requestAnimationFrame = raf

test('tween tweens', async(t) => {
	t.plan(1)
	let tweened
  tween(0, 1, (v) => { tweened = v }, { time: 16 * 4 })
  await sleep(16 * 5)
  t.is(tweened, 1)
})