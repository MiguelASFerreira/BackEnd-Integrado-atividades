const express = require("express");
const server = express();
server.use(express.json());

let tasks = [
    {
        "id": 1,
        "name": "Comprar leite",
        "description": "Ir no mercado da esquina e comprar leite",
        "isDone": false
    },
    {
        "id": 2,
        "name": "Comprar Ovos",
        "description": "Ir no mercado da esquina e comprar ovos",
        "isDone": false
    },
    {
        "id": 3,
        "name": "Comprar ração",
        "description": "Ir no petshop do centro e comprar ração",
        "isDone": true
    }
]

server.get("/tasks", (req, res) => {
    res.json({
        tasks
    })
})

server.get("/tasks/:id", (req, res) => {
    const id = Number(req.params.id)
    const task = tasks.find((task) => {
        return task.id === id
    })

    res.json({task})
})

server.post("/tasks", (req, res) => {
    const newTasks = {
        id: tasks.length + 1,
        name: req.body.name,
        description: req.body.description,
        isDone: req.body.isDone
    }

    tasks.push(newTasks)
    res.status(201).json({newTasks})
})

server.delete("/tasks/:id", (req, res) => {
    const id = Number(req.params.id);
    tasks = tasks.filter((task) => {
        return task.id !== id;
    });

    res.status(204).send();
});


const port = 3000;
server.listen(port, () => {
    console.log(`Server is running in ${port}`)
})