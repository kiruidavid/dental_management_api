import {Router} from 'express' 
import {addPatient, getAllPatients} from '../controllers/patientsControllers.js' 
const patientRouter = Router() 

patientRouter.post('/', addPatient) 
patientRouter.get('/', getAllPatients) 

export default patientRouter