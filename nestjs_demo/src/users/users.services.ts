import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { userInterface, userScheme } from './users.model';
import { Model } from 'mongoose';
import { JwtService } from '@nestjs/jwt/dist';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel('user') private userModel : Model<userInterface>,
        private jwtService : JwtService
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

    async signIn(username:string, email:string, password:string){
        console.log("signing");

        const foundUsers = await this.userModel.find({name:username})
        const foundUser = foundUsers[0];

        if(foundUser?.password !== password || foundUser?.email !== email){
            throw new UnauthorizedException();
        };

        const payload = { sub: foundUser._id}; //jtw payload contains user ID

        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }

    async findUser(searchObject){
        try {
            const foundUsers = await this.userModel.find(searchObject);
            const foundUser = foundUsers[0];

            return foundUser;
        } catch (error) {
            throw error;
        }
    }
}
