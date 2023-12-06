import { Controller, Param, Get , Post, Delete, Body, Header, UseGuards} from '@nestjs/common';
import { UsersService } from './users.services';
import { UserDTO } from './users.model';
import { AuthGuard } from "./jwt.strategy";

@Controller('/api/users')
export class UsersController {
    constructor(private readonly userService:UsersService){}

    @Get('/login')
    async loginUser( @Body() LoginBody : UserDTO ){
        const {name, email, password} = LoginBody
        return this.userService.signIn(name, email, password);
    }
    

    @Post('/register')
    async createUser( @Body() RegisterBody : UserDTO ){
        const {name, email, password} = RegisterBody;
        const createdUser = await this.userService.createUser(name, email, password)
        return createdUser;
    }

    @UseGuards(AuthGuard)
    @Get('guarded')
    getGuardedData(){
        return "this data is guarded"
    }
}
