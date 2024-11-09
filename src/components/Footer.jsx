import { faFacebook, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div className='container-fluid p-4'>
      <div className='row'>
        <div className="col-md-4">
           <h5 className='text-warning'><FontAwesomeIcon icon={faVideo} className='me-3'/>Media Player</h5>
           <p className='mt-3' style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque unde sit debitis veritatis nulla animi similique corrupti? Obcaecati minima aspernatur mollitia similique illum incidunt, deleniti, nemo enim sequi, nesciunt id. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea atque .</p>
        </div>
        <div className="col-md-2 d-md-flex justify-content-center">
         <div>
            <h5>Links</h5>
            <Link to={'/'}><p className='mt-4'>Landing Page</p></Link>
            <Link to={'/home'}><p>Home Page</p></Link>
           <Link to={'/watchHistory'}> <p>Watch History</p></Link>
         </div>
        </div>
        <div className="col-md-2 d-md-flex justify-content-center">
        <div>
            <h5>Guides</h5>
            <p className='mt-4'> React</p>
            <p>React Bootstrap</p>
            <p>Bootswatch</p>
         </div>
        </div>
        <div className="col-md-4 px-md-5">
            <h5>Contact Us</h5>
            <div className='d-flex mt-4'>
                <input type="text" placeholder='E-mail Id'  className='form-control'/>
                <button className='btn btn-warning ms-3'>Subscribe</button>

            </div>
            <div className='d-flex justify-content-between mt-4'>
            <FontAwesomeIcon icon={faInstagram} className='fa-2x'/>
            <FontAwesomeIcon icon={faFacebook} className='fa-2x'/>
            <FontAwesomeIcon icon={faTwitter} className='fa-2x'/>
            <FontAwesomeIcon icon={faLinkedin} className='fa-2x'/>
            <FontAwesomeIcon icon={faWhatsapp} className='fa-2x'/>


            </div>
        </div>


      </div>


    </div>
  )
}

export default Footer