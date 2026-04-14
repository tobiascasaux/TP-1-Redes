const express = require('express');
const router = express.Router(); 
const validarObjeto = require('../middlewares/validarObjeto')

let dispositivos = [ // array de objetos
    { // este valor esta hardcodeado, si quiere lo puede borrar lo borra
        id: 1,
        nombre: "PC-Oficina",
        ip: "192.168.0.10",
        estado: "activo",
        tipo: "pc"
    }
]
// Uso Router en vez de app para separar las rutas en archivos distintos, 
// manteniendo el servidor organizado por "temas".
router.get('/', (req, res) => { // endPoint que trae todos los dispositivos
    res.status(200).json(dispositivos);
});

router.get('/:id', (req, res) => { //endPoint quue trae 1 dispositivo por id
    const id = req.params.id;

    const dispositivo = dispositivos.find(objArray => objArray.id == id); // con el find busca en la objArray que id de DISPOSITIVOS coinside con el id del BUSCADOR

    if (!dispositivo) {
        return res.status(404).json({ error: 'Dispositivo no Encontrado'});
    }
    
    res.status(200).json(dispositivo)
})

router.post('/', validarObjeto, (req, res) => { // endPoint que genera un dispositivo al final del array de objetos
    const {nombre, ip, estado, tipo} = req.body


    const nuevoDispositivo = {// nuevo objeto a agregar
        id: dispositivos.length + 1,
        nombre,
        ip,
        estado: estado || 'activo',
        tipo
    }

    dispositivos.push(nuevoDispositivo) // pusheo el nuevo objeto a la array

    res.status(201).json(nuevoDispositivo) 
})

router.put('/:id', validarObjeto, (req, res) => { // endPoint que actualiza un dispositivo 
    const id = parseInt(req.params.id);// extraemos y convertimos en numerico la id de la URL 

    const index = dispositivos.findIndex(objArray => objArray.id === id); // devuelve la pocicion del objeto en el array

    if (index === -1) { // verificamos que exista el pocicion del objeto
        return res.status(404).json({ error: 'Dispositivo no encontrado' });
    }

    const { nombre, ip, estado, tipo } = req.body; // ingresar valores en el body

    dispositivos[index] = {
        ...dispositivos[index],
        nombre,
        ip,
        estado: estado || dispositivos[index].estado,
        tipo
    };

    res.status(200).json(dispositivos[index]);
})

router.delete('/:id', (req, res) => { // endPoint que elimina dispositivo por id
    const id = parseInt(req.params.id);

    const index = dispositivos.findIndex(objArray => objArray.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'Dispositivo no encontrado' });
    }

    const eliminado = dispositivos.splice(index, 1); // cortamos el objeto del array dispositivos y lo guardamos en eliminado

    res.status(200).json(eliminado); // mostrar el objeto cortado de la array dispositivos
});



module.exports = router;