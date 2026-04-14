//verificamos que la ip este bien ingresada
const validarIP = (ip) => {
    const partes = ip.split('.');//separamos por partes tomando en cuenta el .

    if (partes.length !== 4) return false;//verifica que se aya dividido en 4 partes


    for (let parte of partes) {
        const num = Number(parte);

        if (isNaN(num) || num < 0 || num > 255) { //verificamos si no es un numero, que sea menor que 0 o mayor a 255
            return false;
        }
    }

    return true;
};

module.exports = (req, res, next) => {
    const { nombre, ip, tipo } = req.body;

    if (!nombre || nombre.trim() === '') { //verificamos si se ingreso un nombre
        return res.status(400).json({ error: 'Nombre inválido' });
    }

    if (!ip || !validarIP(ip)) { //verificamos si se ingreso un ip o verificamos con la funcion validarIP
        return res.status(400).json({ error: 'IP inválida' });
    }

    if (!tipo) {//verificamos si se ingreso un tipo
        return res.status(400).json({ error: 'Tipo obligatorio' });
    }

    next();
};