import Patients from "../models/patientsModel.js"; 
import bcrypt from 'bcryptjs'

export const register = (req, res) => { 
    const {first_name, last_name,  email,  phone_number, gender, dateOfBirth,  password} = req.body 
    Patients.findOne({ where: { phone_number: phone_number}}).then((phoneNo) => {
        if (phoneNo){ 
            res.json({message: "User with that number exists"})

        } else { 
            bcrypt.hash(password, 10).then((hash) => {
                Patients.create({
                    first_name: first_name, 
                    last_name: last_name, 
                    email: email, 
                    phone_number: phone_number, 
                    gender:gender, 
                    dateOfBirth: dateOfBirth, 
                    password: hash
                }) 
                res.json({message: "User sucessfully created"})
            }).catch((error) => res.json({message: error})) 

        }
    })
  
   

   

}