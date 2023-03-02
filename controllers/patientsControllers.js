import Patients from "../models/patientsModel.js"; 

export const addPatient = (req, res) => {
    Patients.create(req.body)
    .then(res.send({message: 'New patient is added'}))
    .catch((error) => res.send({message: error.message}))
} 

export const getAllPatients = async(req, res) => {
   const patients = await Patients.findAll() 
   res.json(patients)
    
}