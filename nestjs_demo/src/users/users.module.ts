import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userScheme} from './users.model';
import { UsersService } from './users.services';
import { UsersController } from './users.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
        {name:'user', schema:userScheme}
    ])
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
