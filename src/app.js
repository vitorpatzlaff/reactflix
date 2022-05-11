'use strict'

import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import styled, { createGlobalStyle } from 'styled-components'
import Footer from 'components/footer'
import Header from 'components/header'
import VideosList from 'components/videos-list'
import VideoSingle from 'components/video-single'
import RegisterVideo from 'components/register-video'
import { headerHeight, footerHeight } from 'utils/constants'
import { fetchVideos } from 'reducers/videos/action-creators'

import 'normalize.css'
import 'milligram'

class App extends PureComponent {
  componentDidMount () {
    this.props.fetchVideos()
  }

  render () {
    const { isRegisterVideoFormOpened, videoSingleId, videos } = this.props

    return (
      <Container>
        <Header />

        <Main>
          {isRegisterVideoFormOpened && <RegisterVideo />}
          {videos[videoSingleId] && <VideoSingle id={videoSingleId} title={videos[videoSingleId].title} />}
          <VideosList />
        </Main>

        <Footer />
        <GlobalStyle />
      </Container>
    )
  }
}

const GlobalStyle = createGlobalStyle`
  html, body, div[data-js="app"] {
    height: 100%;
  }
`

const Container = styled.div`
  height: 100%;
`

const Main = styled.main`
  min-height: calc(100% - ${headerHeight} - ${footerHeight});
`

const mapStateToProps = (state) => ({
  isRegisterVideoFormOpened: state.ui.isRegisterVideoFormOpened,
  videoSingleId: state.videoSingle,
  videos: state.videos
})

const mapDispatchToProps = {
  fetchVideos
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
