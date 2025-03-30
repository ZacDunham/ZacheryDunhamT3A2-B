import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const userId = "USER_ID_HERE"; // Replace with dynamic user ID from AuthContext

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/orders/${userId}`)
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Your Orders</h2>
        <ul>
          {orders.map(order => (
            <li key={order._id} className="border p-4 mb-2">
              Order Total: ${order.total} - Status: {order.status}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Orders;
