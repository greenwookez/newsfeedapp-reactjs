import React, { useState, useEffect } from 'react'
import Context from './context'
import Header from './components/Header'
import Content from './components/Content'
import Loader from './components/Loader'

import generateUri from './utils/generateUri'

const base_url = 'https://jsonplaceholder.typicode.com/'

const App = () => {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(generateUri(base_url, 'posts', { _limit: 15 }))
      .then((response) => response.json())
      .then((posts) => {
        setTimeout(() => {
          setPosts(posts)
          setLoading(false)
        }, 300)
      })
  }, [])

  return (
    <Context.Provider value={{ posts }}>
      <Header />
      {loading ? <Loader /> : <Content />}
    </Context.Provider>
  )
}

export default App
