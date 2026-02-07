import React from 'react'
import { Link } from 'react-router-dom'

const Order = () => {
  return (
    <div className='order'>
        <div className="no-orders">
            <p>You have no orders today</p>
            <Link to="/" className='btn'>get started</Link> 
        </div>
      
    </div>
  )
}

export default React.memo(Order)
