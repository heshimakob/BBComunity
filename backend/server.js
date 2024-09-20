// const express=require("express");
// const dotenv=require('dotenv')
// const connectDB=require('./config/config');
// const cors = require('cors');
// require("colors");
// const morgan=require("morgan");



// dotenv.config()


// connectDB()

// const app=express()



// app.use(cors());
// app.use(express.json());
// app.use(morgan("dev"));
 

//  app.use('/api/cours', require('./routes/coursRoutes'));
// app.use('/api/users', require('./routes/userRoutes'));

// app.use('/api/candidate', require('./routes/candidateRoutes'));
// app.use('/api/blogs', require('./routes/blogRoutes'));
// app.use('/api/notifications', require('./routes/notificationRoutes'));
// app.use('/api/event', require('./routes/eventRoutes'));
// app.use('/api/company', require('./routes/companyRoutes'));

// app.get('/',(req,res)=>{
//     res.send("<h1>Hello from our server nodemon</h1>");
// });

// const port =process.env.PORT || 8080

// app.listen(port,()=>{
//     console.log(`Server running  on ${process.env.NODE_ENV} mode on ${process.env.PORT} `.bgGreen.white);
// });

const express = require("express");
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const connectDB = require('./config/config');
const cors = require('cors');
require("colors");
const morgan = require("morgan");

dotenv.config()


connectDB()

const app = express()
// app.use(cors({
//   origin: 'http://localhost:5173', // Remplacez par l'origine de votre front-end
//   credentials: true, // Si vous utilisez des cookies ou des informations d'identification
// }));

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

app.use('/api/cours', require('./routes/coursRoutes'));
app.use('/api/users', require('./routes/userRoutes'));



app.use('/api/candidate', require('./routes/candidateRoutes'));
app.use('/api/chapitre', require('./routes/chapitreRoutes'));
app.use('/api/blogs', require('./routes/blogRoutes'));
app.use('/api/notifications', require('./routes/notificationRoutes'));
app.use('/api/event', require('./routes/eventRoutes'));
app.use('/api/company', require('./routes/companyRoutes'));

app.use('/api/chat', require('./routes/chatRoutes'));


app.use("/uploads", express.static("uploads"))

app.get('/', (req, res) => {
  res.send("<h1>Hello from our server nodemon</h1>");
});

const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`Server running  on ${process.env.NODE_ENV} mode on ${process.env.PORT} `.bgGreen.white);
});