import 'abdomen/setup'
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import sinon from 'sinon'
import { waitRAF } from './helpers.js'
import { tween } from '../index.js'

const cb = sinon.spy()
const done = sinon.spy()
const ease = sinon.spy()

test('tween is sane', async () => {
  tween(0, 1, cb, { time: 1, done, ease })
  await waitRAF()
  assert.ok(cb.called)
  assert.ok(ease.called)
  assert.ok(done.called)
})

test.run()
