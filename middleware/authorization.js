import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'  

dotenv.config()

const authorization =  (req,res,next) => {
    try{
     const jwtToken = req.header("token") 
     if(!jwtToken){
        return res.status(403).json("Not Authorize")
     } 
     const payload = jwt.verify(jwtToken, process.env.REFRESH_TOKEN) 
     req.user = payload.user
    } catch(error){ 
        return res.json({message: error})

    } 
    next()
} 
export default authorization