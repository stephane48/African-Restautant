const express = require('express');
const router = express.Router();

router.get('/', (req, res) =>{
    res.render('home');
});

router.get('/products', (req, res) =>{
    res.render('products');
});

router.get('/register', (req, res) =>{
    res.render('register');
});

router.get('/login', (req, res) =>{
    res.render('login');
});


router.post('/register', (req,res) => {

    const { firstName, lastName, email, password } = req.body
    
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SEND_GRID_API_KEY);
    const msg = {
      to: `sessegnon.stephane48@gmail.com`,
      from: `${email}`,
      subject: 'Email verification',
      html: `<strong> You have successfully signed up ${firstName} ${lastName}</br>
            Email: ${email} ! and Password: ${password}
            </strong>`,
    };   

    sgMail.send(msg);
    
    sgMail.send(msg)
    .then(()=> {
        res.redirect("/");
    })
    
    .catch(err => {
        console.log(`Error ${err}`);
    })

    const err1 = [];
    const err2 = [];
    const err3 = [];
    const err4 = [];

    if(req.body.firstName == "") {
        err1.push("This field must be filled in!");
    }

    if(req.body.lastName == "") {
        err2.push("This field must be filled in!");
    }

    if(req.body.email == "") {
        err3.push("This field must be filled in!");
    }

    if(req.body.password == "") {
        err4.push("This field must be filled in!");
    }

    if(err1.length > 0) {
        res.render('register', { 
            title: 'Create account',
            errorMessages: err1 
        });
        return;
    }

    if(err2.length > 0) {
        res.render('register', { 
            title: 'Create account',
            errorMessages: err2
        });
        return;
    }

    if(err3.length > 0) {
        res.render('register', { 
            title: 'Create account',
            errorMessages: err3
        });
        return;
    }

    if(err4.length > 0) {
        res.render('register', { 
            title: 'Create account',
            errorMessages: err4
        });
        return;
    }
});   

module.exports = router;