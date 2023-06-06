import express from 'express'
import * as controller from '../controllers/projectController.js'
const route = express.Router()

route.post('/add-department', controller.add_department)
route.get('/get-departments', controller.get_departments)
route.get('/get-department/:id', controller.get_department)

route.post('/add-year/:id', controller.add_year)
route.get('/get-years/:id',controller.get_years)
route.get('/get-year/:id',controller.get_year)

route.post('/add-project/:id', controller.add_project)
route.get('/get-projects/:id',controller.get_projects)
route.get('/get-project/:id',controller.get_project)

export default route