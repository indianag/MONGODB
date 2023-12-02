const express = require('express');
const mongoose = require('mongoose');
const { Credentials, Profile, User } = require('./models');
const userValidation = require('./userMDBValidation');

const app = express();
const port = process.env.PORT || 3000;

// mongodb connection
mongoose.connect('mongodb+srv://IndianaG:oddiDavid@atlascluster.gjwvwex.mongodb.net/codenotch',
                   {useNewUrlParser: true, useUnifiedTopology: true});



(async () => {
const credentials = await userValidation.CredentialsV.create({
    address: 12364568,
    phone: '123456789',
    email: 'correo./@ejemplo.com',
});

const profile = await userValidation.ProfileV.create({
    name: 'Nombre de prueba',
    surname: 'Apellido de prueba',
    dateOfBirth: '01/01/1990',
    comments: 'Comentarios de prueba',
    role: 'Usuario de prueba',
});

const user = await userValidation.UserV.create({
    login: 'nombre_de_usuario_prueba',
    password: 'contraseña_secreta',
    profileId: profile._id,
});

console.log('Usuario creado:', user);
})();








app.listen(port, () => console.log('server listning on porto', port));


//diagrama//
//file:///C:/Users/india/Downloads/Diagrama%20sin%20t%C3%ADtulo.drawio.svg