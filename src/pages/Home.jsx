import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClockRotateLeft } from '@fortawesome/free-solid-svg-icons'
import Allvideos from '../components/Allvideos'
import Category from '../components/Category'


function Home() {
   
  //statelifting - parent
  const [addVideoStatus,setAddVideoStatus] = useState({})
  return (
    <>

      <div className='d-flex p-md-5 p-3 align-items-center'>
        
        {/* sending the function to change the state in add component */}
        <Add setAddVideoStatus={setAddVideoStatus}/>
        <Link to={'/watchHistory'} className='ms-auto' style={{ textDecoration: 'none' }}>
          <h6><span className='d-none d-md-inline'>Watch History</span><FontAwesomeIcon icon={faClockRotateLeft} className='ms-2' /></h6>

        </Link>
      </div>

      <div className="container-fluid p-4">
        <div className="row">
          <div className="col-md-9">

            {/* pass the state to allvideos using props */}
            <Allvideos addVideoStatus={addVideoStatus}/>
          </div>
          <div className="col-md-3">
            <Category/>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home