import { IsNotEmpty, IsEmail, IsString, MinLength } from 'class-validator';
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

export class UserDTO{
    @IsNotEmpty()
    @IsString()
    @MinLength(8, {message:'make sure the name is 8+ characters'})
    name:string

    @IsNotEmpty()
    @IsEmail({},{message:"make sure the email is valid"})
    email:string

    @IsNotEmpty()
    @IsString()
    @MinLength(8, {message:'make sure password is 8+ characters'})
    password:string
}