import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/menu`)
      .then(res => setMenu(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Menu</h2>
        <ul>
          {menu.map((item) => (
            <li key={item._id} className="border p-4 mb-2">
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Menu;
