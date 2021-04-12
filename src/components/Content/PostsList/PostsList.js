import React, { useContext } from 'react'
import Context from '../../../context'
import Item from './Item'
import styles from './styles'

const PostsList = () => {
  const { posts } = useContext(Context)
  return (
    <div style={styles.wrapper}>
      {posts.map((post, key) => {
        return <Item title={post.title} body={post.body} key={key} />
      })}
    </div>
  )
}

export default PostsList
