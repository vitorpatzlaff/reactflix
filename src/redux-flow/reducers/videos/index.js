'use strict'

import createReducer from '../create-reducer'
import { ADD_VIDEO, REMOVE_VIDEO } from './actions'

const initialState = {}

const videos = createReducer(initialState, {
  [ADD_VIDEO]: (state, action) => ({
    ...state,
    [action.payload.id]: {
      id: action.payload.id,
      title: action.payload.title
    }
  }),

  [REMOVE_VIDEO]: (state, action) => {
    const newState = { ...state }
    delete newState[action.payload.id]
    return newState
  }
})

export default videos
