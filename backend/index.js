import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import shopRoute from './route/shop.route.js'
import cors from 'cors'
import userRoute from './route/user.route.js'

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT =process.env.PORT || 4000;
const URI =process.env.MongoDBURI;

//connect to mongodb
try{
  mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
  });
  console.log("connectedddd");
}catch(error){
console.log("eeeeeeee",error);
}

//routes difining
app.use("/shop",shopRoute);
app.use("/user",userRoute)


app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`)
})