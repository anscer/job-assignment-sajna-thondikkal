const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const stateRoutes = require('./routes/states');
const RoleRoutes = require('./routes/roles');
const UserRoutes = require('./routes/users');


const PORT = process.env.PORT || 3000;
const DB_CONN_STR = process.env.DATABASE_URL;

const app = express();
mongoose.connect(DB_CONN_STR);
const database = mongoose.connection;
database.on('error',(error)=>{
    console.log("DB Error",error);
});
database.once('connected',()=>{
    console.log('db connected successfully');
});


app.use(express.json());
app.use('/api/v1/states',stateRoutes);
app.use('/api/v1/roles',RoleRoutes);
app.use('/api/v1/users',UserRoutes);


app.listen(PORT,()=>{
    console.log(PORT,"Server is waiting for request");
})