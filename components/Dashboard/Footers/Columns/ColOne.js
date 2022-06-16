import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import DashboardNav from '../../DashboardNav/DashboardNav';

const ColOne = () => {
    const {col} = useParams()
    console.log(col);
    return (
        <div>
             <DashboardNav title="Columns" />
             <div className="bg-white p-4 ">
            <h4>{col}</h4>
            <Form>
              <div className="mb-3">
                <Form.Check
                  id="header checkbox 1 "
                  label="page 1 "
                ></Form.Check>
                <Form.Check
                  id=" header checkbox 2 "
                  label="page 2 "
                ></Form.Check>
                    </div>
                    <Button>Submit</Button>
                </Form>
                </div>
        </div>
    );
};

export default ColOne;