import { Controller, Param, Get , Post, Delete, Body, Header} from '@nestjs/common';
import { UsersService } from './users.services';

@Controller('/api/users')
export class UsersController {
    constructor(private readonly userService:UsersService){}

    @Post('/login')
    async loginUser(
        @Body('username') username:string,
        @Body('password') password:string
    ){
        return this.userService.signIn(username, password);
    }
    

    @Post('/register')
    async createUser(
        @Body('name') name:string,
        @Body('email') email:string,
        @Body('password') password:string,
        
    ){
        const createdUser = await this.userService.createUser(name, email, password)
        return createdUser;
    }
}
