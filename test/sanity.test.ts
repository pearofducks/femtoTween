import test from 'ava'
import * as sinon from 'sinon'
import * as Window from 'window'
import { sleep } from './helpers'
import raf from './raf'
import { tween } from '../index'

(global as any).window = new Window()

const rafStub = sinon.stub().callsFake(raf)
const cb = sinon.spy()
const done = sinon.spy()
const easeFunc = sinon.spy()
window.requestAnimationFrame = rafStub

test('tween is sane', async(t) => {
	t.plan(4)
  tween(0, 1, cb, { time: 1, done, easeFunc })
  await sleep(16 * 2)
  t.true(rafStub.called)
  t.true(cb.called)
  t.true(easeFunc.called)
  t.true(done.called)
})