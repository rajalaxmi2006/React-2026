import React from 'react'

const ErrorMessage = ({message}) => {
  return (
    <div className='error-box' role='alert'>
        <span className='error-icon'>&#9888;</span>
        <p>{message} </p>
    </div>
  )
}

export default ErrorMessage 
