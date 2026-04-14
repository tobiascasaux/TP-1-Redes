module.exports = (req, res, next) => { // middleware que muestra en consola informacion como metodo ruta y el tiempo cuando entro a la ruta
    const metodo = req.method; // extraemos el metodo
    const ruta = req.originalUrl; // extraemos la ruta
    const timestamp = new Date().toISOString(); // extraemos el tiempo 

    console.log(`[${metodo}] ${ruta} - ${timestamp}`);

    next();
};