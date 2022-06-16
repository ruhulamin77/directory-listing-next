import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import DashboardNav from '../DashboardNav/DashboardNav';

const SubFooter = () => {
    const [data, setData] = useState({})
    
    const [copyright, setCopyright] = useState('')
    const [owner, setOwner] = useState('')
      
    const [ownerURL, setOwnerUrl] = useState([]);
  
    //Copyright
    const handleCopyright = (value) => {
        setCopyright(value)
     }
    // Owner
    const handleOwner = (value) => {
        setOwner(value)
     }
    
     // handle Owner Url
     const handleOwnerUrl = (value) => {
       setOwnerUrl(value)
    }
    
   
    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault()
        const newData = {
            title1: copyright, title2: owner,facebookUrl: ownerURL, 
        }

        setData(newData)
        console.log(data,);
    }
    return (
        <div>
            <DashboardNav title="Sub Footer" />

            <div className="bg-white m-2 rounded-3 p-3 shadow-sm">
            <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label className="mb-2 fw-bold">Copyrights</Form.Label>
    <Form.Control type="text" placeholder="Copyright © Softfy Technologies" onChange={e=>handleCopyright(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        
                        
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
   
   {/* owner*/}
                        <Form.Label className="mb-2  fw-bold">Owner</Form.Label>
    <Form.Control type="text" placeholder="Bikroy.com" onChange={e=>handleOwner(e.target.value)} />
  </Form.Group>         
                    <Form.Group className="pb-3 border-bottom" controlId="exampleForm.ControlInput1">
    <Form.Label className="mb-2 fw-bold ">Owner URL</Form.Label>
    <Form.Control type="text" placeholder="www.owner.com" onChange={e=>handleOwnerUrl(e.target.value)} />
                    </Form.Group>    

                          
                    <Button onClick={handleSubmit}
                    className="mt-3"    variant="primary" type="submit">
          Submit
        </Button>                  
            </Form>
            
            </div>
        </div>
    );
};

export default SubFooter;