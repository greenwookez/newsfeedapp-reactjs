import React from 'react'

export default function Loader() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: 150 }}>
      <div className='lds-ripple'>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
