const Photo = require('./photoModels');

// /// Subir foto
// async function subirFoto(userName, photoUrl, title, description) {
//   try {
//     const nuevaFoto = new Photo({
//       userName,
//       photoUrl,
//       title,
//       description,
//     });
//     await nuevaFoto.save();
//     console.log('Foto subida con éxito');
//   } catch (error) {
//     console.error('Error al subir la foto');
//   }
// }

// // Obtener todas las fotos de un usuario
// async function obtenerFotosPorUsuario(userName) {
//   try {
//     const fotos = await Photo.find({ userName });
//     console.log('Fotos del usuario:', fotos);
//   } catch (error) {
//     console.error('Error al obtener las fotos');
//   }
// }

// // Modificar descripción de una foto
// async function modificarDescripcionFoto(title, nuevaDescripcion) {
//   try {
//     await Photo.findOneAndUpdate({ title }, { $set: { description: nuevaDescripcion } });
//     console.log('Descripción de la foto modificada con éxito');
//   } catch (error) {
//     console.error('Error al modificar la descripción de la foto');
//   }
// }

// // Eliminar una foto por usuario y título
// async function eliminarFoto(userName, title) {
//   try {
//     await Photo.findOneAndDelete({ userName, title });
//     console.log('Foto eliminada con éxito');
//   } catch (error) {
//     console.error('Error al eliminar la foto');
//   }
// }

// Eliminar todas las fotos de un usuario
// async function eliminarTodasLasFotos(userName) {
//   try {
//     await Photo.deleteMany({ userName });
//     console.log('Todas las fotos del usuario eliminadas con éxito');
//   } catch (error) {
//     console.error('Error al eliminar todas las fotos del usuario');
//   }
// }

module.exports = {
//   subirFoto,
//   obtenerFotosPorUsuario,
//   modificarDescripcionFoto,
//    eliminarFoto,
//   eliminarTodasLasFotos,
};




























































































// const express = require('express');
// const mongoose = require('mongoose');
// const Photo = require('./photoModels');
// const User = require('../src/userMDB');

 

// const subirFoto = async (name, photoUrl, title, description) => {
// try {
//     // Busca el usuario por el nombre
//     const user = await User.findOne({ name });

//     if (!user) {
//     console.error('Usuario no encontrado');
//     return;
//     }

//     // Crea una nueva foto asociada al usuario
//     const nuevaFoto = new Photo({
//     user: user._id,
//     photoUrl,
//     title,
//     description,
//     });

//     await nuevaFoto.save();
//     console.log('Foto subida correctamente');
// } catch (error) {
//     console.error('Error al subir la foto:', error);
// }
// };


// const obtenerFotosPorUsuario = async (name) => {
//     try {
//       // Busca el usuario por el nombre
//       const user = await User.findOne({ name });
  
//       if (!user) {
//         console.error('Usuario no encontrado');
//         return [];
//       }
  
//       // Obtiene todas las fotos asociadas al usuario
//       const fotos = await Photo.find({ user: user._id });
//       console.log(`Fotos de ${name}:`, fotos);
//       return fotos;
//     } catch (error) {
//       console.error('Error al obtener las fotos del usuario:', error);
//       return [];
//     }
//   };


//   module.exports = {
//     subirFoto,
//     obtenerFotosPorUsuario,
//   };
  
