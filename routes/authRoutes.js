import {Router} from 'express'  
import {register, login, logout} from '../controllers/auth.js'

const authRouter = Router()  
authRouter.post('/register', register) 
authRouter.post('/login', login) 
authRouter.post('/logout', logout)

export default authRouter

