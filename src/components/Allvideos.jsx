import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { getVideosApi } from '../services/allApi'

function Allvideos({addVideoStatus}) {
    const [allVideos,setAllVideos] = useState([])
    const [deleteVideoStatus,setDeleteVideoStatus] =useState({})
   
  const getAllVideo = async()=>{
    const result = await getVideosApi()
   // console.log(result);
    setAllVideos(result.data)
    
  }
   
  console.log(allVideos);
  

  useEffect(()=>{
    getAllVideo()
  },[addVideoStatus,deleteVideoStatus])

  
  return (
    <div>

      {allVideos.length>0?
        <div className="container">
        <div className="row">

         {allVideos.map((item)=>(
              <div className="col-md-3 p-2">
              <VideoCard video={item} setDeleteVideoStatus={setDeleteVideoStatus}/>
            </div>
         ))
        }
          
        </div>
      </div>

       :
      
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <img src="https://jrdsolar.com/templates/default-new/images/empty-cart.png" alt="no image" className='w-100'/>

            <h5 className='text-ceter text-warning'>No video added yet...</h5>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
      }
    </div>
  )
}

export default Allvideos