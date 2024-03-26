import React, { useState, useEffect } from 'react';
import './myorder.css'

const Account = () => {
    const [orders, setOrders] = useState();
    const userid = localStorage.getItem('userid')

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost/shallwe/vieworders.php?user_id=${userid}`);
            const jsonData = await response.json();
            setOrders(jsonData.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    return (
        <>
            <div className=''>
                <div className="myorders">
                    <h3 className="py-3">My Orders</h3>
                    <div >
                        {
                            orders ?
                                (
                                    orders.map((order) => {
                                        return (
                                            <div key={order.id} className='ordercontainer'>
                                                <div>
                                                    <h3>Order details</h3>
                                                    <ul>
                                                        <li>Orderid:{order.id}</li>
                                                        <li>Amount:₹{order.sub_total}</li>
                                                        <li>Mode of Payment: {order.order_type}</li>
                                                        <li>Ordered on: {order.created_at}</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3>Shipping Details</h3>
                                                    <ul>
                                                        <li>Recipients name: {order.useraddress[0].full_name}</li>
                                                        <li>Address: {order.useraddress[0].address}</li>
                                                        <li>Pincode: {order.useraddress[0].pin_code}</li>
                                                        <li>Mobile Number: {order.useraddress[0].mobileNumber}</li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <h3>Cart Details</h3>
                                                    {order.orderProducts.map((cartitem) => {
                                                        return (
                                                            <ul key={cartitem.id} style={{background:"white",padding:"0px 10px"}}>
                                                                    <p>product: <b> {cartitem.product_name}</b> </p>
                                                                    <p>Quantity: <b>  {cartitem.quantity}</b> </p>

                                                            </ul>
                                                        )
                                                    })}
                                                  
                                                </div>
                                                <h4 >Status: <span style={{ color: "brown", margin: "10px 0px" }}>{order.status} </span> </h4>
                                            </div>
                                        )
                                    })
                                )
                                :
                                (
                                    <div>Loading....</div>
                                )
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default Account;
