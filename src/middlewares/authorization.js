module.exports = (req, res, next) => {
    const token = req.headers['authorization'] // extrae el header authorization

    if (token !== '1234') { // verifica que el token sea correcto
        return res.status(401).json({ error: 'No autorizado' })
    }

    next() // si el token es correcto, sigue el curso
}