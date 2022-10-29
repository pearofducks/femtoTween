import 'abdomen/setup'
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import { waitRAF, waitTimeout } from './helpers.js'
import { tween } from '../index.js'

test('tween tweens', async () => {
  let tweened
  tween(0, 1, (v) => { tweened = v }, { time: 1 })
  await waitRAF()
  assert.is(tweened, 1)
})

test('tween tweens with 1000ms delay', async () => {
  let tweened
  tween(0, 1, (v) => { tweened = v }, { time: 1, delay: 1000 })
  await waitRAF()
  await waitTimeout(1000)
  assert.is(tweened, 1)
})

test.run()
