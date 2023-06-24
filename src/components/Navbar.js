import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (
      <div className='navbar'>
          <div style={{marginLeft:"50px"}}>
            DIVINE
          </div>
          <div style={{marginRight:"0px"}}>
          <Link to='/Story' style={{textDecoration:'none', color:'white'}}>Join Us</Link>
          </div>
          <div style={{marginRight:'20px' , textDecoration:"none",color:'white'}}>
            <Link to='/Story' style={{textDecoration:'none', color:'white'}}>
           Our Story 
            </Link>
          </div>
      </div>
  )
}

export default Navbar ; 