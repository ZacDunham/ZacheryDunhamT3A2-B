const orderRoutes = require("./routes/orderRoutes");
app.use("/api/orders", orderRoutes);const menuRoutes = require("./routes/menuRoutes");
app.use("/api/menu", menuRoutes);const authRoutes = require("./routes/authRoutes");
app.use("/api/auth", authRoutes);require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.get("/", (req, res) => {
  res.send("Cafe Connect API is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const { errorHandler } = require("./middleware/errorMiddleware");
app.use(errorHandler);
