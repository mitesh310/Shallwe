import React, { useState, useEffect } from 'react';
import './dashboard.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Dashboard() {
  const [orders, setOrders] = useState();
  const [selectedStatus, setSelectedStatus] = useState('');

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost/shallwe/viewallorders.php`);
      const jsonData = await response.json();
      setOrders(jsonData.data);
      // console.log(jsonData.data[0].useraddress[0].full_name)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const handleStatusChange = async (orderId) => {
    try {
      const response = await fetch(`http://localhost/shallwe/approvestatus.php?order_id=${orderId}&type=${selectedStatus}`, {

      });
      if (response.ok) {
        toast.success(`status updated`, {
          position: "top-right",
          autoClose: 1200,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        fetchData();
      } else {
        console.error('Failed to update status');
      }
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div className='dashboard'>
      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h2>Order Details</h2>
      <table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Status</th>
            <th>Sub Total</th>
            <th>Shipping charge</th>
            <th>Order Value</th>
            <th>order placed</th>
            <th>User Cart</th>
            <th>User Address</th>
          </tr>
        </thead>
        <tbody >
          {orders && orders.map(order => (
            <tr key={order.id} className='eachrow' >
              <td>{order.id}</td>
              <td  className='shipping'>
                 <span style={{fontSize:"larger",margin:"17px 0px"}}>{order.status}</span>
                <br />
                <select value="select" onChange={(e) => setSelectedStatus(e.target.value)}>
                  <option value="">Select Status</option>
                  <option value="approved">Approved</option>
                  <option value="shipping">Shipping</option>
                  <option value="delivered">Delivered</option>
                  <option value="reject">Reject</option>
                </select>
                <button className='update-btn' onClick={() => handleStatusChange(order.id)}>Update Status</button>
              </td>
              <td>₹{order.sub_total}</td>
              <td>₹{order.shipping_amount}</td>
              <td>{order.total}</td>
              <td>{order.created_at}</td>
              <td>
                <div >
                  {order.orderProducts.map(product => (
                    <ul key={product.id} className='orderitems'>
                      <li> Product Name: {product.product_name}</li>
                      <li> Quantity: {product.quantity}</li>
                      <li> Price: {product.price}</li>
                    </ul>
                  ))}
                </div>
              </td>
              <td>
                <p>Full Name: {order.useraddress[0].full_name}</p>
                <p>Country: {order.useraddress[0].country}</p>
                <p>Address: {order.useraddress[0].address}</p>
                <p>Mobile Number: {order.useraddress[0].mobileNumber}</p>
                <p>State: {order.useraddress[0].state}</p>
                <p>City: {order.useraddress[0].city}</p>
                <p>Pin Code: {order.useraddress[0].pin_code}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
