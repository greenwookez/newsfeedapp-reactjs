import React from 'react'
import styles from './styles'

const Item = (props) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <div style={styles.title}>{props.title}</div>
        <div style={styles.body}>{props.body}</div>
      </div>
    </div>
  )
}

export default Item
