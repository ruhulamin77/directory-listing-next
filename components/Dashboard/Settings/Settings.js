import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import DashboardNav from '../DashboardNav/DashboardNav';


const Settings = () => {
    const [data, setData] = useState({})
    
    const [typo, setTypo] = useState('')
    const [hColor, setHColor] = useState('')
    
   
    const [fColor, setFColor] = useState([]);
  
    // typo
    const handleTypo = (value) => {
        setTypo(value)
     }
    // title 2
    const handleHColor = (value) => {
        setHColor(value)
     }
    
    
     // handle Country Name
     const handleFColor = (value) => {
       setFColor(value)
    }
    
  

    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault()
        const newData = {
             typo,  hColor, fColor,
        }

        setData(newData)
        console.log(data,);
    }
    return (
        <div >
             <DashboardNav title="Settings" />
                <div className="bg-white m-2 rounded-3 p-3 shadow-sm">
            <Form>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label className="mb-2 fw-bold">Typography</Form.Label>
    <Form.Control type="text" placeholder="Enter Font Family" onChange={e=>handleTypo(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                       
                        
                        
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
   
   {/* title 2 */}
                        <Form.Label className="mb-2  fw-bold">Color For Header</Form.Label>
    <Form.Control type="text" placeholder="Enter Hex Color Code" onChange={e=>handleHColor(e.target.value)} />
  </Form.Group>         
                    <Form.Group className="pb-3 border-bottom" controlId="exampleForm.ControlInput1">
    <Form.Label className="mb-2 fw-bold ">Color for Footer </Form.Label>
    <Form.Control type="text" placeholder="Enter Hex Color Code" onChange={e=>handleFColor(e.target.value)} />
                    </Form.Group>    

                          
                    <Button onClick={handleSubmit} variant="primary" type="submit">
          Submit
        </Button>                  
            </Form>
            
            </div>
        </div>
    );
};

export default Settings;