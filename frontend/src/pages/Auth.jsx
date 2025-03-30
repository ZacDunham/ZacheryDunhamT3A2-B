import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/auth/login`, { email, password });
      console.log("Login success:", res.data);
    } catch (err) {
      console.error("Login error", err.response.data);
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center p-6">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <input type="email" placeholder="Email" className="border p-2 mb-2" value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="border p-2 mb-2" value={password} onChange={e => setPassword(e.target.value)} />
        <button className="bg-blue-500 text-white p-2" onClick={handleLogin}>Login</button>
      </div>
    </>
  );
};

export default Auth;
