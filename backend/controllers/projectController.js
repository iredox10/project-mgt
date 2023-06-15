import Department from "../models/department.js";
import Project from "../models/project.js";
import Year from "../models/year.js";



export const add_department = async (req, res) =>{
    try {
        const department = await Department.create(req.body)
        res.status(201).json(department)
    } catch (err) {
        if(err.code === 11000 && err.keyPattern.shortName){
            res.status(403).json('shortname already exist!!')
            return
        }
        if(err.code === 11000 && err.keyPattern.fullName){
            res.status(403).json('fullname already exist!!')
            return
        }
        // res.json(err)
    }
}

export const get_departments = async(req,res) =>{
    try {
        const departments = await Department.find()
        res.status(200).json(departments)
    } catch (err) {
        res.json(err)
    }
}

export const get_department = async(req,res) =>{
    try {
        const department = await Department.findById(req.params.id).populate('years')
        res.status(200).json(department)
    } catch (err) {
        res.json(err)
    }
}

export const add_year = async (req, res) =>{
    try {
        const year = await Year.create(req.body)
        const department = await Department.findById(req.params.id)
        department.years.push(year)
        department.save()
        res.status(201).json(year)
    } catch (err) {
        res.json(err)
    }
}
export const get_years = async(req,res) =>{
    try {
        const years = await Department.findById(req.params.id).populate('years')
        res.status(200).json(years)
    } catch (err) {
        res.json(err)
    }
}

export const get_year = async(req,res) =>{
    try {
        const year = await Year.findById(req.params.id)
        res.status(200).json(year)
    } catch (err) {
        res.json(err)
    }
}


export const add_project = async (req, res) =>{
    try {
        const project = await Project.create(req.body)
        const year = await Year.findById(req.params.id)
        year.projects.push(project)
        year.save()
        res.status(201).json(project)
    } catch (err) {
        res.json(err)
    }
}
export const get_projects = async(req,res) =>{
    try {
        const projects = await Year.findById(req.params.id).populate('projects')
        res.status(200).json(projects)
    } catch (err) {
        res.json(err)
    }
}

export const get_project = async(req,res) =>{
    try {
        const project = await Project.findById(req.params.id)
        res.status(200).json(project)
    } catch (err) {
        res.json(err)
    }
}