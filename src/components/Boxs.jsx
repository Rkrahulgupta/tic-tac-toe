import React from 'react'

const Boxs = (props) => {
  return (
    <div className='box' onClick={props.onClick}>

          <h3>{props.value}</h3>
    </div>
  )
}

export default Boxs