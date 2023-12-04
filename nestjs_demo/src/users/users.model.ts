import * as mongoose from 'mongoose'

export const  userScheme = new mongoose.Schema({
    name: {type:String, requires:true},
    email: {type:String, requires:true},
    password: {type:String, requires:true},
});

export interface userInterface{
    id:string,
    name:string,
    email:string,
    password:string
}