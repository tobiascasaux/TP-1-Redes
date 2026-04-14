# Registro de Dispositivos

Este proyecto consiste en el desarrollo de una API REST utilizando Node.js y Express.
El sistema permite registrar, consultar, actualizar y eliminar distintos dispositivos.

---

### Tecnologías utilizadas:

- Node.js  
- Express  
- Nodemon  

---

### Cómo ejecutar el proyecto

Aclaracion: este proyecto se uso el manager de node pnpm

Instalar dependencias:

pnpm install / npm install

Ejecutar el servidor:

pnpm run dev / npm run dev

El servidor se levanta segun el PORT del .env (yo lo corri en 3000):

http://localhost:3000

---

### Endpoints

**Obtener todos los dispositivos**  
GET /dispositivos

**Obtener un dispositivo por ID**  
GET /dispositivos/:id

**Crear un dispositivo**  
POST /dispositivos

Ejemplo de body:

```json
{
  "nombre": "PC-1234",
  "ip": "192.168.0.1",
  "estado": "activo", (por defecto el estado es "activo")
  "tipo": "router"
}
```

**Actualizar un dispositivo**  
PUT /dispositivos/:id

Ejemplo de body:

```json
{
  "nombre": "PC-1234",
  "ip": "192.168.0.1",
  "estado": "fuera de linea",
  "tipo": "router"
}
```

**Eliminar un dispositivo**  
DELETE /dispositivos/:id

---

### Middlewares

Se implementaron dos middlewares:

- logs: muestra en consola el método, la ruta y el momento en que se realiza cada request.  
- validarObjeto: valida los datos recibidos en POST y PUT (nombre, IP y tipo).  

---

### Validaciones

- El nombre no puede estar vacío  
- La IP debe tener un formato válido  
- El tipo es obligatorio  

---

Los datos se almacenan en un array en memoria.

---

### Decisiones de diseño

- Se utilizó express.Router() para organizar las rutas.  
- Se separaron las validaciones en un middleware para mantener el código ordenado.  
- Se asigna el estado "activo" por defecto en caso de no enviarse en la creación.