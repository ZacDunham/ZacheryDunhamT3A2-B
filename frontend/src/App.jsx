import { Link } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Welcome to Cafe Connect!</h1>
      <p className="text-gray-600">Order coffee and earn rewards.</p>
      <Link to="/menu" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">View Menu</Link>
    </div>
  );
}

export default App;
