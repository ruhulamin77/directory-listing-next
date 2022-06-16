import React from 'react';
import { FormControl, Table } from 'react-bootstrap';

const PaymentWallet = () => {
    return (
        <div className='p-2 bg-white m-2'>
            <h6 className='my-2'>All Wallet</h6>
            <FormControl
      placeholder="Search..."
     className='my-2'
            />
            <Table striped bordered hover responsive size="sm">
  <thead>
    <tr>
      <th>Payment ID</th>
      <th>User ID</th>
      <th>User Email</th>
      <th>Amount</th>
      <th>Time</th>
      <th>Order Code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto@mdo.com</td>
      <td>30 Points</td>
      <td>2022-05-18</td>
      <td>KLKASF4645</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Mark</td>
      <td>Otto@mdo.com</td>
      <td>30 Points</td>
      <td>2022-05-18</td>
      <td>KLKASF4645</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Mark</td>
      <td>Otto@mdo.com</td>
      <td>30 Points</td>
      <td>2022-05-18</td>
      <td>KLKASF4645</td>
    </tr>
 
  </tbody>
</Table>
        </div>
    );
};

export default PaymentWallet;