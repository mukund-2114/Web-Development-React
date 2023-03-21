import React from 'react'

export default function Greet(props) {
  return (
    <div className='container'>
    
        <h3>{props.name}</h3>
        <h3>Thank you joining us</h3>
        <h3>Verification has been to sent to {props.email}</h3>
    </div>
  )
}
