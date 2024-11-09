import { faCloudArrowUp, faFilm } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AddVideoApi } from '../services/allApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Add({setAddVideoStatus}) {
  // object destructuring

  const [videoDetails,setVideoDetails]= useState({
    caption:"",
    imageUrl:"",
    emdedLink:""
  })
    const [show, setShow] = useState(false);

    console.log(videoDetails);
    

    const handleClose = () => {setShow(false);
      handleCancel()
    }
    const handleShow = () => setShow(true);

   

    const handleCancel=()=>{
      setVideoDetails({
      caption:"",
      imageUrl:"",
      emdedLink:""
    })}

    const handleAdd = async()=>{
       const {caption,imageUrl,emdedLink} = videoDetails

       if(!caption , !imageUrl ,!emdedLink){
        toast.info('Please fill the form completely')
       }
       else{
        if(videoDetails.emdedLink.startsWith('https://youtu.be/')){
          const embedL = `https://www.youtube.com/embed/${videoDetails.emdedLink.slice(17,28)}`
          //setVideoDetails({...videoDetails,emdedLink:embedL})

          const result = await AddVideoApi({...videoDetails,emdedLink:embedL})
          console.log(result);

          if(result.status>=200 && result.status<300){
            toast.success('Video uploaded successfully')
            handleClose()
            setAddVideoStatus(result.data)
          }
          else{
            toast.error('Something went wrong')
            handleClose()
          }
          
        }
        else{
          const embedL = `https://www.youtube.com/embed/${videoDetails.emdedLink.slice(-11)}`
          //setVideoDetails({...videoDetails,emdedLink:embedL})

          const result = await AddVideoApi({...videoDetails,emdedLink:embedL})
          console.log(result);

          if(result.status>=200 && result.status<300){
            toast.success('Video uploaded successfully')
            handleClose()
            setAddVideoStatus(result.data)
          }
          else{
            toast.error('Something went wrong')
            handleClose()
          }
          
        }
       }
      
    }

    // https://www.youtube.com/watch?v=B2UBMTA57JI  --slice (-11) from backwards
    //https://youtu.be/B2UBMTA57JI?si=ifx2p2k46hRyIdwm  --slice (17,28)
    //<iframe width="853" height="480" src="https://www.youtube.com/embed/B2UBMTA57JI" title="Kiliye (Malayalam) |ARM | Tovino Thomas |Krithi Shetty |Jithin Laal |Dhibu Ninan Thomas|Magic Frames" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  return (
    <>
    <div className='d-flex align-items-center'>
   <h6 className='d-none d-md-inline'>Upload new video</h6>
   <button className='btn pb-3' onClick={handleShow}><FontAwesomeIcon icon={faCloudArrowUp} className='fs-6'/></button>
    </div>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} className=' me-2'/>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the following details</p>
          <form className='p-3 border border-dark rounded mt-3'>
            <div className='mb-3'>
              <input type="text" placeholder='Video Caption' className='form-control' value={videoDetails.caption} onChange={(e)=>setVideoDetails({...videoDetails,caption:e.target.value})}/>
            </div>
            <div className='mb-3'>
            <input type="text" placeholder='Video Image' className='form-control'value={videoDetails.imageUrl} onChange={(e)=>setVideoDetails({...videoDetails,imageUrl:e.target.value})}/>
            </div>
            <div className='mb-3'>
            <input type="text" placeholder='Video Url' className='form-control'value={videoDetails.emdedLink
            } onChange={(e)=>setVideoDetails({...videoDetails,emdedLink:e.target.value})}/>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer position='top-center' autoClose={2000} theme='coloured'/>
    </>
  )
}

export default Add