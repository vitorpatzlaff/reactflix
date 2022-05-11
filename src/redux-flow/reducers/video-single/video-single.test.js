'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import videoSingle from './index'
import { SELECT_VIDEO_SINGLE } from './actions'

test('should SELECT_VIDEO_SINGLE select a video', () => {
  const before = ''
  
  const action = deepFreeze({
    type: SELECT_VIDEO_SINGLE,
    payload: {
      id: 'abc123'
    }
  })

  const after = 'abc123'

  expect(videoSingle(before, action)).to.be.deep.equal(after)
})
