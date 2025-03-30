import { useState, useEffect } from "react";
import axios from "axios";

const LoyaltyPoints = ({ userId }) => {
  const [points, setPoints] = useState(0);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/api/auth/user/${userId}`)
      .then(res => setPoints(res.data.points))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4 bg-yellow-100 rounded-md">
      <h2 className="text-lg font-bold">Loyalty Points</h2>
      <p className="text-xl">{points} Points</p>
    </div>
  );
};

export default LoyaltyPoints;
