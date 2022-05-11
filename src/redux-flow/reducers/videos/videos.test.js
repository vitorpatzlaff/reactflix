'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import videos from './index'
import { ADD_VIDEO } from './actions'

test('should action ADD_VIDEO add a video', () => {
  const before = deepFreeze({})

  const action = deepFreeze({
    type: ADD_VIDEO,
    payload: {
      id: 'abc',
      title: 'JavaScript JS'
    }
  })

  const after = {
    abc: {
      id: 'abc',
      title: 'JavaScript JS'
    }
  }

  expect(videos(before, action)).to.be.deep.equal(after)
})

test('should action ADD_VIDEO keep the previous videos', () => {
  const before = deepFreeze({
    abc: {
      id: 'abc',
      title: 'JavaScript JS'
    }
  })

  const action = deepFreeze({
    type: ADD_VIDEO,
    payload: {
      id: 'def',
      title: 'React JS'
    }
  })

  const after = {
    abc: {
      id: 'abc',
      title: 'JavaScript JS'
    },
    def: {
      id: 'def',
      title: 'React JS'
    }
  }

  expect(videos(before, action)).to.be.deep.equal(after)
})
