const Photo = require('../model/photo');


function subirFoto(request, response)
{
  console.log(request.body);

  let photo = new Photo({userName: request.body.userName,
                        photoUrl: request.body.photoUrl,
                        title: request.body.title,
                        description: request.body.description}) 
  photo.save()
  .then((photo) => 
  {
    console.log("Phto guardada correctamente")
    console.log(photo);
    response.send(photo);
  })
  .catch((error) => 
  {
    console.log(error)
  })
}




function obtenerFotosPorUsuario(request, response)
{
  if(request.query.userName === null)
  {
    Photo.find({})
    .then((photos) => 
    {
      console.log(photos);
      response.send(photos);
    })
    .catch((error) => 
    {
      console.log(error)
      process.exit(-1);
    })
  }
  else{
    Photo.find({userName: request.query.userName})
    .then((photos) => 
    {
      console.log(photos);
      response.send(photos)
    })
    .catch((error) =>
    {
      console.log(error);
      process.exit(-1);
    })
  }
}


function modificarDescripcionFoto(request, response) {
  console.log(request.body);
  const { title, description } = request.body;

  Photo.findOneAndUpdate(
    { title }, // Filtramos por el título
    { $set: { description} }, // Actualizamos la descripción
    { new: true } // Esto es para obtener la foto actualizada en la respuesta
   
  )
    .then((photo) => {
      if (!photo) {
        // Si no se encuentra ninguna foto con el título dado
        console.error('No se encontró ninguna foto con el título proporcionado');
        return response.send({ error: 'No se encontró ninguna foto con el título proporcionado' });
      }
      
      console.log('Descripción de la foto modificada con éxito', photo);
      response.send(photo);
    })
    .catch((error) => {
      console.error('Error al modificar la descripción de la foto', error);
      response.send({ error: 'Error al modificar la descripción de la foto' });
    });
}


function eliminarFoto(request, response)
{
  console.log(request.body);
  const {userName, title} = request.body;

  Photo.findOneAndDelete(
    {userName, title}
  )
  .then((photo) => {
    if(!photo){
      console.error('No se encontró ninguna foto con el nombre de usuario y el título proporcionado');
    }

    console.log('Foto eliminada con exito');
    response.send(photo);
  })
  .catch((error) => {
    console.log(error);

  });
}

function eliminarTodasLasFotos(request, response)
{
  const {userName} = request.body;
  Photo.deleteMany({userName})
  .then((photo) => {
    if(!photo){
      console.error('No se encontró ninguna foto con el nombre de usuario proporcionado');
    }

    console.log('Foto eliminada con exito');
    response.send(photo);
  })
  .catch((error) => {
    console.log(error);

  })
}








  module.exports = {
    subirFoto,
    obtenerFotosPorUsuario,
    modificarDescripcionFoto,
    eliminarFoto,
    eliminarTodasLasFotos,
  };
