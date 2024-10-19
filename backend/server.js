

const express = require("express");
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/config');
const path = require('path');

const cors = require('cors');
require("colors");
const morgan = require("morgan");




dotenv.config()


connectDB()

const app = express()
app.use(cors({
  origin: 'http://localhost:5173', // Votre frontend
  credentials: true,
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

// CORS configuration
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});


app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use('/api/cours', require('./routes/coursRoutes'));
app.use('/api/users', require('./routes/userRoutes'));


app.use('/api/chat', require('./routes/chatRoutes'));
app.use('/api/message', require('./routes/messageRoutes'));
app.use('/api/candidate', require('./routes/candidateRoutes'));
app.use('/api/chapitre', require('./routes/chapitreRoutes'));
app.use('/api/blogs', require('./routes/blogRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes'));
app.use('/api/event', require('./routes/eventRoutes'));
app.use('/api/company', require('./routes/companyRoutes'));



app.use("/uploads", express.static("uploads"))

app.get('/', (req, res) => {
  res.send("<h1>Hello from our server nodemon</h1>");
});

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Server running  on ${process.env.NODE_ENV} mode on ${process.env.PORT} `.bgGreen.white);
});