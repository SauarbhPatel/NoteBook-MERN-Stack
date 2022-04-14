const dotenv = require('dotenv')
dotenv.config({ path:'./config.env'})
const connectToMongo = require('./src/database/db')
const express = require('express');
const cors = require('cors')
const port =5000;
// Database 
connectToMongo();

const app = express();
// const port = process.env.PORT;

// Midialwhere 
app.use(cors());
app.use(express.json());


// Avilable Routers
app.use('/api/auth',require('./src/router/auth'));
app.use('/api/notes',require('./src/router/notes'));


// Server 
app.listen(port,()=>{
    console.log(`NOTEBOOK backend listening at http://localhost:${port}`);
})
