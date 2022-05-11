'use strict'

import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import ui from './index'
import { OPEN_REGISTER_VIDEO, CLOSE_REGISTER_VIDEO  } from './actions'

test('should OPEN_REGISTER_VIDEO open the register video', () => {
  const before = deepFreeze({})
  const type = deepFreeze({ type: OPEN_REGISTER_VIDEO })
  const after = { isRegisterVideoFormOpened: true }

  expect(ui(before, type)).to.be.deep.equal(after)
})

test('should CLOSE_REGISTER_VIDEO close the register video', () => {
  const before = deepFreeze({ isRegisterVideoFormOpened: true })
  const type = deepFreeze({ type: CLOSE_REGISTER_VIDEO })
  const after = { isRegisterVideoFormOpened: false }

  expect(ui(before, type)).to.be.deep.equal(after)
})