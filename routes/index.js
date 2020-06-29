const { request } = require("express")
const tasks = require("../models/tasks")

module.exports = app =>{

    const Tasks = app.models.tasks

    app.get('/', (request, response) => {
        response.json({status: 'NTask API'})
    })

    app.get('/tasks', (request, response) => {
        Tasks.findAll({}, (tasks) => {
            response.json({
                tasks:tasks
            })
        })
    })
}