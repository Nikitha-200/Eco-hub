/*
Cross-origin resource sharing (CORS) is an extension of the same-origin policy. You need it for authorized resource sharing with external third parties. 

like frontend will run in one server and backend will run in one server. so inorder to send the requests and share the files between these two servers, the browser blocks the requests defaultly to prevent hacking. So inorder to stop  we use the cors 
*/

const port = 4000;
const express = require("express");
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken'); //for the authentication
const multer = require('multer'); //to add the images which are uploaded using the admin portal directly into the backend directory
const path = require("path") //using the path from the express server , using this we can get access to the backend directory in the express app 

const cors = require('cors');

app.use(express.json()); //with this express.json() what ever request we will get from response that will be automatically passed through json

app.use(cors()); //using this , the reactjs project will connect to express app on 4000

// Database Connection with MongoDB
mongoose.connect("mongodb+srv://praneetha:00170017@cluster0.e7v2ciq.mongodb.net/Eco_Products");

//API Creation
app.get("/",(req,res)=>{
    res.send("Express App is Running")
})


//Image Storage Engine
const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})


//where to upload the images that will be sent by the client 
const upload = multer({storage:storage})

//Multer: Easily upload files with Node.js and Express
//Multer is a middleware package for Express.js that adds support for handling multipart/form-data, which is typically used for file uploads. It acts as a bridge between the client-side form submission and the server-side file storage. Multer provides an easy-to-use API to process file uploads, handle file size limits, define file storage locations, and more.

//(Multer is a Node.js middleware for handling multipart/form-data that makes the otherwise painstaking process of uploading files in Node.js much easier)

//Creating Upload Endpoint for images
app.use('/images',express.static('upload/images')) //what ever images are their in the images folder , wil be getting here at static endpoint.

app.post("/upload",upload.single('product'),(req,res)=>{
    res.json({
        success:1,
        image_url:`http://localhost:${port}/images/${req.file.filename}`
    })
}) //for uploading any image we can use this


//Schema for Creating Products
const Product = mongoose.model("Product",{
    id:{
        type:Number,
        required:true, //if this field is not their then the poroduct is not added into the database
    },
    name:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        reuired:true,
    },
    category:{
        type:String,
        required:true,
    },
    descriptive:{
        type:String,
        required:true,
    },
    // price:{
    //     type:Number,
    //     required:true,
    // },
    date:{
        type:Date,
        default:Date.now,
    },
    availabe:{
        type:Boolean,
        default:true,
    },
})


//addproduct endpoint
//Creating an API for adding the products
app.post('/addproduct',async(req,res)=>{
    //for generating the id automatically in the database we will create a logic for it!!

    let products =  await Product.find({});
    let id;
    if(products.length>0)
    {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    } 
    else{
        id=1;
    }
    //we will get the items in this array named products,so we will create a logic for it

    const product = new Product({
        id:id,
        name:req.body.name,
        image:req.body.image,
        category:req.body.category,
        descriptive:req.body.descriptive,
        descriptive2:req.body.descriptive2,
    });
    console.log(product);
    await product.save(); // to save in the database
    console.log("Saved");
    res.json({
        success:true,
        name:req.body.name,
    })
})


//removeproduct endpoint
//Creating an API for deleting the products
app.post('/removeproduct',async(req,res)=>{
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name,
    })
})


//Allproducts endpoint
//Creating API for getting all products
app.get('/allproducts',async(req,res)=>{
    let products = await Product.find({});
    console.log("All Products Fetched");
    res.send(products);
})


//Schema creating for User Model
const Users = mongoose.model('Users',{
    name:{
        type:String, 
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

//Creating Endpoint for registering the user
app.post('/signup',async(req,res)=>{

    let check = await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"Existing user found with same Email address"})
    }
    let cart = {};
    for(let i=0;i<300;i++){
        cart[i]=0;
    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })

    await user.save();

    //To use the jwt authentication
    const data={
        user:{
            id:user.id
        }
    }
    const token = jwt.sign(data,'secret_ecom'); //using this secret_ecom => our token will not be readable
    res.json({success:true,token})

})


//Creating endpoint for  user login
app.post('/login',async (req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare){
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom');
            res.json({success:true,token})
        }
        else{
            res.json({success:false,errors:"Wrong Password"});
        }
    }
    else{
        res.json({success:false,errors:"Wrong Email Id"})
    }
})


//Schema creating for ContactUs Model
const ContactUs = mongoose.model('ContactUs',{
    firstname:{
        type:String, 
        // required:true,
    },
    lastname:{
        type:String, 
        // required:true,
    },
    email:{
        type:String,
        unique:true,
    },
    subject:{
        type:String,
        // required:true,
    },
    Message:{
        type:String,
        // required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

//Creating Endpoint to store users contactUs details
app.post('/ContactUs',async (req,res)=>{
    let contact_users =  await ContactUs.find({});
    let id;
    if(contact_users.length>0)
    {
        let last_product_array = contact_users.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id+1;
    } 
    else{
        id=1;
    }

    const contact_user = new ContactUs({
        id:id,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        email:req.body.email,
        subject:req.body.subject,
        Message:req.body.Message,
    });
    console.log(contact_user);
    await contact_user.save(); // to save in the database
    console.log("Saved");
    res.json({
        success:true,
        firstname:req.body.firstname,
    })
})


app.listen(port,(error)=>{
    if(!error){
        console.log("Server Running on Port "+port)
    }
    else{
        console.log("Error : "+error)
    }
})
