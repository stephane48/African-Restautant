/**
 * Import dependencies and load Express project
 */
const express = require('express');
const handlebar = require('express-handlebars');
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const { urlencoded } = require('express');
require('dotenv').config({path:"./config/keys.env"});


let db = mongoose.createConnection("mongodb+srv://stephane48:Jatravas48*@senecaweb.uvdbz.mongodb.net/web322_week8?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })

db.on('error', (err)=>{
    console.log("db1 error!");
  });
  
  db.once('open', ()=>{
    console.log("db success!");
  });

/**
 * Set Up Handlebars
 */
app.engine('handlebars', handlebar({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

/**
 * Load static resources
 */
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({
        extended: false}));

app.use(express.json());

const productModel = require('./models/product');
const bestSellerModel = require('./models/bestSeller');
const categoryModel = require('./models/category');
/**
 Routes*/
 
 app.get('/', (req, res) => {
     res.render('home', {
         title: 'Home',
         products: productModel.getAllProducts(),
         bestSeller: bestSellerModel.getAllItems(),
         categories: categoryModel.getAllCategories(),
        });
    });
    
    app.get('/products', (req, res) => {
        res.render('products', {
            title: 'Products',
            products: productModel.getAllProducts(),
        });
    });
    
    app.get('/register', (req, res) => {
        
        res.render('register');
    });
    
    app.get('/login', (req, res) => {
        res.render('login');
    });
    
    app.post('/register', (req, res) => {
        console.log("Got to register post");

       

        const err1=[]

        let firstError,lasterr,emailErro,passErro;
        //const err2 = [];
        if(req.body.firstName == ""){
             firstError=("This field must be filled in!");   
            err1.push("Error");
        }

        if(req.body.lastName == ""){
             lasterr=("This field must be filled in!"); 
            err1.push("Error");  
        }

        if(req.body.email == ""){
             emailErro=("This field must be filled in!");
            err1.push("Error");
        }
        if(req.body.password == ""){
             passErro= ("This field must be filled in!");
            err1.push("Error");
        }
        if(err1.length > 0){
            res.render('register', {
                title: 'Register',
                firstError,
                lasterr,
                emailErro,
                passErro
            
            });
         
        }
     
        
        else{
            res.redirect("/");
        }

    });
    
    
    
    const indexcontroller = require("./controllers/index");
    const registercontroller = require("./controllers/registration");
    const mealPkgcontroller = require("./controllers/MealPkg");
    const logincontroller = require("./controllers/login");
    
    app.use("/", indexcontroller);
    app.use("/registration", registercontroller);
    app.use("/MealPkg", mealPkgcontroller);
    app.use("/login", logincontroller);
    
    app.get('/login', (req, res) => {
        res.render('login', {
            title: 'Login'
        });
    });
    
    app.post('/login', (req,res) => {
        const err1 = [];
        const err2 = [];
        
        if(req.body.email == ""){
        err1.push("This field must be filled in!");
        }
        if(req.body.password == ""){
        err2.push("This field must be filled in!");
        }
        if(err1.length > 0){
        res.render('login', {
            title: 'Login',
            errorMessages: err1
        });
        return;
        }
        else if(err2.length > 0){
        res.render('login',{
            title:'Login',
            errorMessages: err2
        });
        return;
        }
        
        
        else{
            res.redirect("/");
        }
    });
    
    const PORT =process.env.PORT;
    app.listen(PORT,()=>
    {
        console.log("Server is up and running at ", PORT);
    })
    
    