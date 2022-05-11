'use strict'

import { initializeApp } from 'firebase/app'
import { getDatabase, ref } from 'firebase/database'

const init = () => {
  const firebaseConfig = {
    apiKey: 'AIzaSyBZNip3O_F357LpD4CXufSbkhYYFWJNLJ4',
    authDomain: 'reactflix-12577.firebaseapp.com',
    databaseURL: 'https://reactflix-12577-default-rtdb.firebaseio.com',
    projectId: 'reactflix-12577',
    storageBucket: 'reactflix-12577.appspot.com',
    messagingSenderId: '131171521343',
    appId: '1:131171521343:web:76d098c486dfa22efef98a'
  }

  initializeApp(firebaseConfig)
}

export const videosInit = () => {
  init()
  return ref(getDatabase(), 'videos')
}
