const {Router} = require ("express")
const router = Router()
const photoCtrl = require ("../controller/photo.controller")

router.post('/photos', photoCtrl.subirFoto);

router.get('/photos', photoCtrl.obtenerFotosPorUsuario);

router.put('/photos', photoCtrl.modificarDescripcionFoto);

router.delete('/photos', photoCtrl.eliminarFoto);

router.delete('/photos/all', photoCtrl.eliminarTodasLasFotos)






module.exports = router;