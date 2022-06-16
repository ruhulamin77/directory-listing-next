import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import DashboardNav from '../DashboardNav/DashboardNav';
import FooterImages from './FooterImages';

const FooterDetails = () => {
    const [data, setData] = useState({})
    
    const [title1, setTitle1] = useState('')
    const [title2, setTitle2] = useState('')
    const [title3, setTitle3] = useState('')
    const [countryName, setCountryName] = useState('')

    const [images, setImages] = useState([]);
    const [facebookUrl, setFacebookUrl] = useState([]);
  
    // title 1
    const handleTitle1 = (value) => {
        setTitle1(value)
     }
    // title 2
    const handleTitle2 = (value) => {
        setTitle2(value)
     }
    // title 3
    const handleTitle3 = (value) => {
        setTitle3(value)
    }
    
     // handle Country Name
     const handleFacebookUrl = (value) => {
       setFacebookUrl(value)
    }
    
    // handle Country Name
    const handleCountryName = (value) => {
        setCountryName(value)
     }

    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault()
        const newData = {
            title1,images, title2,facebookUrl, title3,countryName
        }

        setData(newData)
        console.log(data,);
    }
    return (
        <div >
             <DashboardNav title="Control Footer Details" />
                <div className="bg-white m-2 rounded-3 p-3 shadow-sm">
            <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label className="mb-2 fw-bold">Title 1</Form.Label>
    <Form.Control type="text" placeholder="Download Our App" onChange={e=>handleTitle1(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <FooterImages images={images} setImages={setImages}></FooterImages>
                        
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
   
   {/* title 2 */}
                        <Form.Label className="mb-2  fw-bold">Title 2</Form.Label>
    <Form.Control type="text" placeholder="Connect with" onChange={e=>handleTitle2(e.target.value)} />
  </Form.Group>         
                    <Form.Group className="pb-3 border-bottom" controlId="exampleForm.ControlInput1">
    <Form.Label className="mb-2 fw-bold ">Like Us on Facebook</Form.Label>
    <Form.Control type="text" placeholder="Facebook URL" onChange={e=>handleFacebookUrl(e.target.value)} />
                    </Form.Group>    

                    {/* title 3 */}
               <Form.Group className="py-3 " controlId="exampleForm.ControlInput1">
    <Form.Label className="mb-2 fw-bold">Title 3</Form.Label>
    <Form.Control type="text" placeholder="Other countries" onChange={e=>handleTitle3(e.target.value)} />
  </Form.Group>         
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label className="mb-2 fw-bold">Country Name</Form.Label>
    <Form.Control type="text" placeholder="Sri Lanka" onChange={e=>handleCountryName(e.target.value)} />
                    </Form.Group>        
                    <Button onClick={handleSubmit} variant="primary" type="submit">
          Submit
        </Button>                  
            </Form>
            
            </div>
        </div>
    );
};

export default FooterDetails;