const express = require('express');
const User = require('./userMDB')
const mongoose = require('mongoose');
const userRoutes = require('./routes/user')

const app = express();
const port = process.env.PORT || 9000;


// //middleware
// app.use('/api', )




// mongodb connection
mongoose.connect('mongodb+srv://IndianaG:oddiDavid@atlascluster.gjwvwex.mongodb.net/',
                   {useNewUrlParser: false, useUnifiedTopology: false});


 


let userDocument = new User({
    name: "Maikel",
    email: "info@maikeBlanco.com",
    role: "Proyectista",
    verified: "true"
});

userDocument.save()
.then((data) => 
{
    console.log(data);
})
.catch((err) => 
{
    console.log(err)
})

app.listen(port, () => console.log('server listning on porto', port));