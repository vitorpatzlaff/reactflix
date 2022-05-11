'use strict'

import { ADD_VIDEO, REMOVE_VIDEO } from './actions'
import { videosInit } from 'config/firebase'
import { update, child, onValue, remove } from 'firebase/database'

const videos = videosInit()

export const registerVideo = ({ id, title }) => async (dispatch) => {
  await update(child(videos, id), {
    id,
    title
  })

  dispatch(addVideo({ id, title }))
}

export const addVideo = ({ id, title }) => ({
  type: ADD_VIDEO,
  payload: { id, title }
})

export const unregisterVideo = ({ id }) => async (dispatch) => {
  await remove(child(videos, String(id)))

  dispatch(removeVideo({ id }))
}

export const removeVideo = ({ id }) => ({
  type: REMOVE_VIDEO,
  payload: { id }
})

export const fetchVideos = () => (dispatch) => {
  onValue(videos, (snapshot) => {
    const videos = snapshot.val()
    Object.keys(videos)
      .sort((a, b) => videos[a].title < videos[b].title ? -1 : 1)
      .forEach((id) => dispatch(addVideo({
        id,
        title: videos[id].title
      })))
  })
}
