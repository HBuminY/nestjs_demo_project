import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { userInterface, userScheme } from './users.model';
import { Model } from 'mongoose';
import { ifError } from 'assert';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('user') private userModel:Model<userInterface>
    ){}

    async createUser(name:string, email:string, password:string){
        try{
            const newUser = new this.userModel({name, email, password});
            const createdUser = await newUser.save();
            return createdUser; //causes return to be a promise in createUser() !!!
        }catch(err){
            return err;
        }
        
    }
}
