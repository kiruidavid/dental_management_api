import {Router} from 'express'   
import passport from 'passport'
import {patientBooking} from '../controllers/bookingControllers.js' 


const bookingRouter = Router() 
bookingRouter.get('/', passport.authenticate('jwt', {session: false}), patientBooking) 

export default bookingRouter