import jwt from 'jsonwebtoken' 
import dotenv from 'dotenv' 

dotenv.config()

export function jwtTokens({id, name, phone_number}){  
    const patient = {id,name,phone_number}
    
    const accessToken = jwt.sign(patient, process.env.ACCESS_TOKEN, {expiresIn: '20s'}) 
    const refreshToken = jwt.sign(patient, process.env.REFRESH_TOKEN, {expiresIn: '5m'}) 
    return ({accessToken, refreshToken})


}