import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <>
      <Container className='d-flex justify-content-center align-items-center py-5 px-4'>
        <Row className='mt-5  d-flex justify-content-center align-items-center' >

          <Col md={6}>
            <h4 className='mt-md-5'>Welcome to <span className='text-warning'>Media Player</span></h4>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est sed ex accusamus expedita vel dignissimos dolorum placeat, alias rerum perspiciatis voluptatibus officia eius facilis blanditiis molestias unde excepturi provident recusandae?Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, consequuntur consequatur error similique aliquid modi voluptates vel iste ut illo nostrum ipsam ex. Ullam eos ea facere ipsum natus officia?</p>
            <Link to={'/home'}><button className='btn btn-warning mt-5'>Get started</button></Link>
          </Col>
          <Col md={1}></Col>
          <Col md={5} className='d-flex justify-content-center mt-5 mt-md-0'>
            <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="no image" className='w-100' />
          </Col>
        </Row>
      </Container>

      <Container className='mt-5'>
        <h4 className='text-center'>Features</h4>
        <Row>
          <Col md={1}></Col>
          <Col md={10}>


            <Row className='mt-5 d-flex justify-content-center align-items-center'>

              <Col md={4} className='p-3'>
                <Card style={{ width: '100%' }}  className='p-3'>
                  <Card.Img variant="top" src="https://i.makeagif.com/media/6-09-2015/V0O8kp.gif"  className='w-100%' height={'200px'}/>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4} className='p-3'>
                <Card style={{ width: '100%' }} className='p-3'>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/be/40/b8/be40b8b5beea51d0f3c4ff2df37e32ae.gif" className='w-100%' height={'200px'}/>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4} className='p-3'>
                <Card style={{ width: '100%' }}  className='p-3'>
                  <Card.Img variant="top" src="https://i.pinimg.com/originals/62/0c/5a/620c5a819f8b8fa2a75575edf1d155ec.gif"className='w-100%' height={'200px'} />
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    
                  </Card.Body>
                </Card>
              </Col>

            </Row>


          </Col>
        </Row>
      </Container>

      <div className="container">
        <div className="row p-md-5 p-3">

           <div className='col border border-light border-2 rounded p-md-5 p-4'>
             <div className="row">
              <div className="col-md-6">
                <h3 className='text-warning'>Simple fast and Powerful</h3>
                <p><span className='fs-4'>Play everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus obcaecati veniam rerum sequi voluptate quis error itaque odio ex? Et, vel dolorum temporibus deserunt consequat </p>
                <p className='mt-2'><span className='fs-4'>Play everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus obcaecati veniam rerum sequi voluptate quis error itaque odio ex? Et, vel dolorum temporibus deserunt consequat </p>
                <p className='mt-2'><span className='fs-4'>Play everything</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus obcaecati veniam rerum sequi voluptate quis error itaque odio ex? Et, vel dolorum temporibus deserunt consequatur assume </p>
              </div>
              <div className="col-md-6">
              <iframe width="100%" height="470" src="https://www.youtube.com/embed/6d5SS0gS5bU" title="Tainu Khabar Nahi - Arijit Singh | Munjya | Sharvari, Abhay Verma| Sachin-Jigar,Amitabh Bhattacharya" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
             </div>
           </div>

        </div> 
      </div>
    </>
  )
}

export default Landing