import {Router} from 'express'   
import authorization from '../middleware/authorization.js'
import {patientBooking} from '../controllers/bookingControllers.js' 


const bookingRouter = Router() 
bookingRouter.get('/', authorization, patientBooking) 

export default bookingRouter