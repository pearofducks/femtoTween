import test from 'ava'
import * as sinon from 'sinon'
import * as Window from 'window'
import raf from './raf'
import { tween } from '../index'

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(global as any).window = new Window()

const rafStub = sinon.stub().callsFake(raf)
const cb = sinon.spy()
const done = sinon.spy()
const easeFunc = sinon.spy()
window.requestAnimationFrame = rafStub

test.serial('tween is sane', async(t) => {
	window.requestAnimationFrame = rafStub
	t.plan(4)
  tween(0, 1, cb, { time: 1, done, easeFunc })
  await sleep(16 * 2)
  t.true(rafStub.called)
  t.true(cb.called)
  t.true(easeFunc.called)
  t.true(done.called)
})

test('tween tweens', async(t) => {
	window.requestAnimationFrame = raf
	t.plan(1)
	let tweened
  tween(0, 1, (v) => { tweened = v }, { time: 16 * 4 })
  await sleep(16 * 5)
  t.is(tweened, 1)
})