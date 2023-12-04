import * as mongoose from 'mongoose'

export const  userScheme = new mongoose.Schema({
    name: {type:String, required:true},
    email: {type:String, required:true},
    password: {type:String, required:true},
});

export interface userInterface{
    _id:string,
    name:string,
    email:string,
    password:string
}