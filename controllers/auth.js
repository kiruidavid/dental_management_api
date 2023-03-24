import Patients from "../models/patientsModel.js"; 
import bcrypt from 'bcryptjs' 
import {jwtTokens} from '../utils/jwt-helpers.js'

export const register = (req, res) => { 
    const {first_name, last_name,  email,  phone_number, gender, dateOfBirth,  password} = req.body 
    Patients.findOne({ where: { phone_number: phone_number}}).then((phoneNo) => {
        if (phoneNo){ 
            res.json({message: "User with that number exists"})

        } else { 
            const salt = bcrypt.genSaltSync(10) 
            const hash = bcrypt.hashSync(password, salt) 
            Patients.create({
                first_name, 
                last_name, 
                email, 
                phone_number, 
                gender, 
                dateOfBirth, 
                password: hash
            }).then((data) => {
                res.json({message: "Patient added succesfully"})
            }).catch((error) => {
                res.json({message: error})
            })

        }
    })
  
} 

export const login = async(req,res) => { 
    const {phone_number, password} = req.body
    let patient =  await Patients.findOne({ where: { phone_number: phone_number}}) 
    if(!patient) res.json({message: "Patient does not exist with that phone number"}) 
    bcrypt.compare(password, patient.password).then((match) => {
        if(!match){
            res.json({message: "Phone number and password do not match"})
        } else { 
            let tokens = jwtTokens(patient) 
            res.cookie('refresh_token', tokens.refreshToken, {httpOnly: true})
            res.json(tokens)
        } 
        

    }).catch((error) => {
        res.json({message: error.message})
    })

    
}