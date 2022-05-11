'use strict'

import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { registerVideo } from 'reducers/videos/action-creators'
import { closeRegisterVideo } from 'reducers/ui/action-creators'

const RegisterVideo = ({ onSubmit, onCloseRegisterVideo }) => (
  <Form onSubmit={onSubmit}>
    <h2>Register Video</h2>

    <label htmlFor='id'>Video Link:</label>
    <input type='text' id='id' name='id' />

    <label htmlFor='title'>Video Title:</label>
    <input type='text' id='title' name='title' />

    <button type='submit'>Register</button>

    <ButtonClose type='button' onClick={onCloseRegisterVideo}>&times;</ButtonClose>
  </Form>
)

const Form = styled.form`
  padding: 10px;
  position: relative;
`

const ButtonClose = styled.button`
  border-radius: 50%;
  font-size: 20px;
  height: 30px;
  line-height: 1;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 30px;
`

const mapDispatchToProps = (dispatch) => ({
  onSubmit: async (e) => {
    e.preventDefault()
    e.persist()

    const {
      id: { value: link },
      title: { value: title }
    } = e.target

    const id = link.match(/watch[?]v=/)
      ? link.match(/watch[?]v=([\s\S]*)$/)[1]
      : link.match(/.be[/]/)
        ? link.match(/.be[/]([\s\S]*)$/)[1]
        : link

    await dispatch(registerVideo({ id, title }))
    e.target.reset()
    e.target[0].focus()
  },

  onCloseRegisterVideo: () => dispatch(closeRegisterVideo())
})

export default connect(null, mapDispatchToProps)(RegisterVideo)
