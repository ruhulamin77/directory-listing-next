import React from 'react';
import { Col, Row } from 'react-bootstrap';
import DashboardNav from '../DashboardNav/DashboardNav';
import AdminAccount from './AdminAccount';
import AdminDetails from './AdminDetails';

const AdminProfile = () => {
    return (
        <div>
            <DashboardNav title="User Profile" />
           
            <div className='bg-white m-2 rounded-3 p-3 shadow-sm"'>
                <Row  xs={1} lg={2} className="g-4">
                    <Col> <AdminAccount></AdminAccount>
                    </Col>
                    <Col><AdminDetails></AdminDetails></Col>
               </Row>
            </div>
        </div>
    );
};

export default AdminProfile;