const mongoose = require('mongoose');
const express = require('express')
const { subirFoto, obtenerFotosPorUsuario, modificarDescripcionFoto, eliminarFoto, eliminarTodasLasFotos } = require('./CRUD');

const app = express();
const port = process.env.PORT || 3000;

// mongodb connection
mongoose.connect('mongodb+srv://IndianaG:oddiDavid@atlascluster.gjwvwex.mongodb.net/codenotch',
                   {useNewUrlParser: true, useUnifiedTopology: true});

// Test

// // Añadir fotos para el usuario1
// subirFoto('usuario1', 'https://example.com/photo1.jpg', 'Foto 1', 'Descripción de la foto 1');
// subirFoto('usuario1', 'https://example.com/photo2.jpg', 'Foto 2', 'Descripción de la foto 2');
// subirFoto('usuario1', 'https://example.com/photo3.jpg', 'Foto 3', 'Descripción de la foto 3');


// // Añadir fotos para el usuario2
// subirFoto('usuario2', 'https://example.com/photo4.jpg', 'Foto 4', 'Descripción de la foto 4');
// subirFoto('usuario2', 'https://example.com/photo5.jpg', 'Foto 5', 'Descripción de la foto 5');
// subirFoto('usuario2', 'https://example.com/photo6.jpg', 'Foto 6', 'Descripción de la foto 6');


// obtenerFotosPorUsuario('usuario1');


// modificarDescripcionFoto('Foto 1', 'Nueva descripción de la foto 1');


// eliminarFoto('usuario1', 'Foto 2');

// eliminarTodasLasFotos('usuario1');


app.listen(port, () => console.log('server listning on porto', port));






















































































//   const express = require('express');
// const mongoose = require('mongoose');
// const User = require('../src/userMDB')
// const Photo = require('./photoModels');
// const { subirFoto, obtenerFotosPorUsuario } = require('./CRUD');



// const app = express();
// const port = process.env.PORT || 3000;

// // mongodb connection
// mongoose.connect('mongodb+srv://IndianaG:oddiDavid@atlascluster.gjwvwex.mongodb.net/codenotch',
//                    {useNewUrlParser: true, useUnifiedTopology: true});


// // Crear una nueva foto con el CREATE...y
// const crearFoto = () => {
//     Photo.create({
//       userName: 'NombreUsuario',
//       photoUrl: 'https://ejemplo.com/foto.jpg',
//       title: 'Título de la Foto',
//       description: 'Descripción de la Foto',
//     })
//       .then(() => {
//         console.log('Foto creada correctamente')
//         mongoose.disconnect();
//       })
//       .catch((error) => {
//         console.error('Error al crear la foto:', error);
//       })
//   };
  
//   // Ejecutar la función para crear la foto
//   crearFoto();




//   app.listen(port, () => console.log('server listning on porto', port));