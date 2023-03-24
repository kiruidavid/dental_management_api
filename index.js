import express from "express" 
import cors from 'cors'
import dotenv from 'dotenv' 
import db from './config/db.js' 
import authRouter from "./routes/authRoutes.js" 
import bookingRouter from "./routes/bookingRoutes.js"



dotenv.config() 
import('./middleware/authorization.js')

const app = express() 

db.authenticate().then(() => {
    console.log('database is connected')
}).catch((error) => {
    console.log(error)
}) 
db.sync({alter:true}).then(() => {
    console.log('database is synced and up to date')
}).catch((error) => {
    console.log(error.message)
}) 
app.use(cors())
app.use(express.json()) 


const PORT = process.env.PORT  

app.use('/api/patients', authRouter) 
app.use('/api/bookings', bookingRouter)


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})