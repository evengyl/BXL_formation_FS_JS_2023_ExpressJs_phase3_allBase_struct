const employeesService = require("../services/employees.service")



/*
    Controller recois la demande du router 
    contact son service pour travailler la requete
    et renvoi au CLIENT (RES !!!) les données demandées
*/
const employeesController = {

    getAll : (req, res) => {
        let allEmployees = employeesService.getAll()
        //MODEL TO DTO -> Data Transfert Object
        res.json(allEmployees)
    },

    getOne : (req, res) => {
        let id = parseInt(req.params.id)-1

        let oneEmp = employeesService.getOne(id)
        //MODEL TO DTO -> Data Transfert Object
        res.json(oneEmp)
    },

    create : (req, res, next) => {

        if(req.body.name == undefined || req.body.matricul == undefined 
            || req.body.jobTitle == undefined || req.body.salary == undefined
        )
            throw new Error("Les paramètres du body ne sont pas complet !")

        let newEmp = {
            name : req.body.name,
            matricul : req.body.matricul,
            jobTitle : req.body.jobTitle,
            salary : req.body.salary
        }

        let newEmpCreated = employeesService.create(newEmp)
        //MODEL TO DTO -> Data Transfert Object
        res.json(newEmpCreated)
    },

    update : (req, res) => {
        let id = parseInt(req.params.id)-1

        let upEmp = employeesService.update(id)
        //MODEL TO DTO -> Data Transfert Object
        res.json(upEmp)
    },

    delete : (req, res) => {
        let id = parseInt(req.params.id)-1

        let firedEmp = employeesService.delete(id)
        //MODEL TO DTO -> Data Transfert Object
        res.json(firedEmp)
    }

}

//CRUD -> Create Read Update Delete   ( CRRUD ) Create Read All Read One Update Delete



module.exports = employeesController