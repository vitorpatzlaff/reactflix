'use strict'

import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { unregisterVideo } from 'reducers/videos/action-creators'

const VideoSingle = ({ id, title, onRemoveVideo }) => (
  <Container>
    <Iframe width='560' height='480' src={`https://www.youtube-nocookie.com/embed/${id}`} title='YouTube video player' frameBorder='0' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen />
    <Title>{title}</Title>
    <Button onClick={onRemoveVideo(id)}>Remove Video</Button>
  </Container>
)

const Container = styled.div`
  align-items: center;
  background: #333;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Iframe = styled.iframe`
  background: #000;
  border: 0;
  border-bottom: 1px solid #999;
  width: 100%;
`

const Title = styled.h2`
  color: white;
  font-size: 20px;
  padding: 15px 10px;
  margin-bottom: 0;
`

const Button = styled.button`
  position: relative;
  right: 10px;
  margin-bottom: 0;
`

const mapDispatchToProps = (dispatch) => ({
  onRemoveVideo: (id) => async () => {
    await dispatch(unregisterVideo({ id }))
  }
})

export default connect(null, mapDispatchToProps)(VideoSingle)
