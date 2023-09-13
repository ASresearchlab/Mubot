require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const corsOptions = {
  origin: "https://www.platform.museumbot.eu", // Update this to your production frontend URL
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};




// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors(corsOptions));

// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.get("/",(req, res) => {
    res.send("Welcome")
})

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));
