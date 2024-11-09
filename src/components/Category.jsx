import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import VideoCard from './VideoCard';
import { addCategoryApi, addVideotoCatApi, deleteCategoryApi, getAllCategoryApi } from '../services/allApi';
import { toast } from 'react-toastify';



function Category() {
  const [show, setShow] = useState(false);
  const [categoryName, setCategoryName] = useState("")
  const [allCategory,setAllCategory] = useState([])
  const [addCategoryStatus,setAddCategoryStatus] = useState({})
  const [deleteCategoryStatus,setDeleteCategoryStatus] = useState({})
  const [videoCategoryStatus,setVideoCategoryStatus] = useState({})

  console.log(categoryName);


  const handleClose = () => {
    setShow(false);
    handleCancel()
  }
  const handleShow = () => setShow(true);

  const handleCancel = () => {
    setCategoryName("")
  }

  const handleAdd = async () => {
    if (categoryName) {
      const reqBody = {
        category: categoryName,
        allvideos:[]
      }

      const result = await addCategoryApi(reqBody)
      console.log(result);
      if (result.status >= 200 && result.status < 300) {
        toast.success('Category added successfully')
        handleClose()
        setAddCategoryStatus(result.data)
      }
      else {
        toast.error('Something went wrong')
        handleClose()
      }
    }
    else {
      toast.info('Please add a category name')
    }

  }

  const getCategory = async()=>{
    const result = await getAllCategoryApi()
    setAllCategory(result.data);
    
  }
  console.log(allCategory);
  

  const handleDelete = async(id)=>{
    const result = await deleteCategoryApi(id)
    console.log(result);
    if(result.status>=200 && result.status<300){
      setDeleteCategoryStatus(result.data)
    }
    
  }

  const ondrag=(e)=>{
      e.preventDefault() //prevents the data lose
  }
  const videoDrop = async (e,categoryDetails)=>{
       console.log(categoryDetails);

       const videoDetails =JSON.parse( e.dataTransfer.getData("videoDetails"))
       console.log(videoDetails);

       if(categoryDetails.allvideos.find((item)=>item.id==videoDetails.id)){
        toast.error('Video already present in the category')
       }
       else{
        categoryDetails.allvideos.push(videoDetails)

        console.log(categoryDetails);
       
       const result = await addVideotoCatApi(categoryDetails.id,categoryDetails)

       if(result.status>=200 && result.status<300){
        toast.success('Video added')
        setVideoCategoryStatus(result.data)
       }
       else{
        toast.error('Something went wrong')
       }
       
       }
    }

    const videoDrag =(e, video , category)=>{
      console.log(video);
      console.log(category);

      const dataShare ={
        category,
        video
      }
      
      e.dataTransfer.setData("dataShare",JSON.stringify(dataShare))
      
    }

  useEffect(()=>{
    getCategory()
  },[addCategoryStatus,deleteCategoryStatus,videoCategoryStatus])

  return (
    <>
      <h5>Category</h5>
      <button className='btn btn-warning w-100 mt-4' onClick={handleShow}>Add Category</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='p-3 border border-secondary border-2 rounded'>
            <input type="text" placeholder='Category name' className='form-control' value={categoryName} onChange={(e) => setCategoryName(e.target.value)} />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="warning" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>

      {allCategory?.length>0  &&

      allCategory?.map((item)=>(
        <div className='border border-secondary border-2 p-3 rounded mt-4' droppable onDragOver={(e)=>ondrag(e)} onDrop={(e)=>videoDrop(e,item)}>
        <div className="d-flex justify-content-between mb-3">
          <h6>{item?.category}</h6>
          <button className='btn btn-danger' onClick={()=>handleDelete(item?.id)}><FontAwesomeIcon icon={faTrash} /></button>
        </div>

       {item?.allvideos?.length>0 &&
       item?.allvideos?.map((video)=>(
        <div draggable onDragStart={(e)=>videoDrag(e,video,item)}>
          <VideoCard video={video} isPresent={true}/>
        </div>
       ))
        }


      </div>
      ))
        
      }
    </>
  )
}

export default Category