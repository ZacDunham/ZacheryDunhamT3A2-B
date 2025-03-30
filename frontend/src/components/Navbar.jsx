import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4 flex justify-between">
      <h1 className="text-white text-lg font-bold">Cafe Connect</h1>
      <div>
        <Link to="/" className="text-white px-4">Home</Link>
        <Link to="/menu" className="text-white px-4">Menu</Link>
        <Link to="/orders" className="text-white px-4">Orders</Link>
        <Link to="/auth" className="text-white px-4">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
