import {Sequelize, DataTypes} from 'sequelize' 
import db from '../config/db.js' 

const Patients = db.define('patients', {
    first_name: {
        type: DataTypes.STRING, 
        allowNull: false
    },  
    last_name: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    email: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    phone_number: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
   gender: {
        type: DataTypes.STRING, 
        allowNull: false
    }, 
    dateOfBirth: {
        type: DataTypes.DATE, 
        allowNull: false
    }, 
    password: {
        type: DataTypes.STRING, 
        allowNull: false
    }

}, {
    freezeTableName: true, 
    timestamps: false
})  

export default Patients