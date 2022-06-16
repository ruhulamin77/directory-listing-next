/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { Button, Card } from 'react-bootstrap';

const AdminAccount = () => {
    return (
        <div>
            
    <Card.Title className="border-bottom text-center">
      <div className="mb-3 mx-auto">          
        <img
          className="rounded-circle"
          src="https://i.ibb.co/82CVWx0/hero.png"
          alt= "profile image"
          width= "110"
        />
      </div>
      <h4 className="mb-0">Imtiaz Mahmod</h4>
      <p className="fs-6 text-muted d-block mb-2">Web Developer</p>
      <Button variant="outline-primary"   className="mb-3">
        Follow
      </Button>
    </Card.Title>
    
 
        </div>
    );
};

export default AdminAccount;