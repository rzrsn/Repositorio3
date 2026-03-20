const express = require("express");
const app = express();

app.use(express.json());

let usuarios = [];
let id = 1;

app.get("/usuarios", (req, res) => {
    res.json(usuarios);
});

app.post("/usuarios", (req, res) => {
    const usuario = {
        id: id++,
        nombre: req.body.nombre
    };
    usuarios.push(usuario);
    res.status(201).json(usuario);
});

app.put("/usuarios/:id", (req, res) => {
    const usuario = usuarios.find(u => u.id == req.params.id);
    if (!usuario) return res.status(404).send("Usuario no encontrado");

    usuario.nombre = req.body.nombre;
    res.json(usuario);
});

app.delete("/usuarios/:id", (req, res) => {
    usuarios = usuarios.filter(u => u.id != req.params.id);
    res.send("Usuario eliminado");
});

app.listen(3000, () => {
    console.log("Servidor ejecutándose en el puerto 3000");
});