const express = require('express')
const mobileRoutes=require('./routes/MobilePhones.js');
const app = express()
const port = 3000


//middlewares
app.use(express.json());
app.use(express.urlencoded());
app.use((req,res, next)=>{
    console.log(`${req.method}:${req.url}`);
    next();
})
app.use('/mobilePhones',mobileRoutes);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})