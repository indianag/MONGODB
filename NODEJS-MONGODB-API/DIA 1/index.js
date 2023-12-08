const express = require('express');
const User = require('./userMDB')
const mongoose = require('mongoose');
const userRoutes = require('./routes/user')

const app = express();
const port = process.env.PORT || 3000;

// //middleware
// app.use('/api', )




// mongodb connection
mongoose.connect('mongodb+srv://IndianaG:oddiDavid@atlascluster.gjwvwex.mongodb.net/codenotch',
                   {useNewUrlParser: false, useUnifiedTopology: false});


 


// let userDocument = new User({
//     name: "Maikel",
//     email: "info@maikeBlanco.com",
//     role: "Proyectista",
//     verified: "true"
// });

// userDocument.save()
// .then((data) => 
// {
//     console.log(data);
// })
// .catch((err) => 
// {
//     console.log(err)
// })

// let userDocument = new User({
   
// name: "Diego",
// email: "info@diego.com",
// role: "Programador",
// verified: "true"
// });

// userDocument.save()
// .then((data) => 
// {
//     console.log(data);
// })
// .catch((err) => 
// {
//     console.log(err)
// })

// let userDocument = new User({
//     name: "Pedro",
//     email: "info@pedro.com",
//     role: "Desarrollador web",
//     verified: "true"
// });
    
//     userDocument.save()
//     .then((data) => 
//     {
//         console.log(data);
//     })
//     .catch((err) => 
//     {
//         console.log(err)
//     })


// let userDocument = new User({
//     name: "Isaac",
//     email: "info@isaac.com",
//     role: "Bailarin",
//     verified: "false"
// });
    
//     userDocument.save()
//     .then((data) => 
//     {
//         console.log(data);
//     })
//     .catch((err) => 
//     {
//         console.log(err)
//     })

let userDocument = new User({
    name: "Erika",
    email: "info@erika.com",
    role: "Administradora",
    verified: "false"
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