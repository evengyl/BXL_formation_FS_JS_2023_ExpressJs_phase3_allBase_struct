const routerEmployees = require("express").Router()
// same que dans base router but en plus court
//on oublie pas le chainage d'appel de fonctions...
const employeesController = require("../controllers/employees.controller")


/*
    Router dispatch la request au bon endroit
*/


routerEmployees
    .route("/")
        .get(employeesController.getAll)
        .post(employeesController.create)

        //n'oubliez pas ! pas de parenthèse sur les fct appelée
        //car en réalité on lui donne un nom de callback à appeler lors du match routage !!!

routerEmployees
    .route("/:id")
        .get(employeesController.getOne)
        .put(employeesController.update)
        .delete(employeesController.delete)




/*
routerEmployees.get("/", (req, res, next) => {
    res.json({ route : "get all"})
})

routerEmployees.get("/:id", (req, res, next) => {
    res.json({ route : "get one"})
})

routerEmployees.post("/", (req, res, next) => {
    res.json({ route : "create one"})
})

routerEmployees.put("/:id", (req, res, next) => {
    res.json({ route : "update one"})
})

routerEmployees.delete("/:id", (req, res, next) => {
    res.json({ route : "delete one"})
})
*/


module.exports = routerEmployees
