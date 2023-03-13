const employees = require("../datas/employees.json")

const employeesModels = {
    
    getAll : () => {
        return [...employees]
    },

    getOne : (id) => {
        return listEmp[id]
    },

    create : (newEmp) => {
        let uuid = employees.length+1
        newEmp.id = uuid
        employees.push(newEmp)
        //simulation du save db (push) -> on ne retourne pas le newEmp !!! on retourne le newEmp venant de la db !!!
        let empCreated = employees.find(emp => emp.id == uuid)
        return empCreated
    },

    update : (id) => {
        listEmp[id] = "updated emp" + (parseInt(id)+1)
        return [...listEmp]
    },

    delete : (id) => {
        listEmp[id] = "deleted emp" + (parseInt(id)+1)
        return [...listEmp]
    }
}


module.exports = employeesModels