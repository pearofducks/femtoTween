import 'abdomen/setup'
import { test } from 'uvu'
import * as assert from 'uvu/assert'
import { sleep } from './helpers.js'
import { tween } from '../index.js'

test('tween tweens', async () => {
  let tweened
  tween(0, 1, (v) => { tweened = v }, { time: 16 * 4 })
  await sleep(16 * 8)
  assert.is(tweened, 1)
})

test.run()
