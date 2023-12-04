import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userScheme, userInterface } from './users.model';
import { UsersService } from './users.services';

@Module({
  imports: [
    MongooseModule.forFeature({})
  ],
  controllers: [],
  providers: [UsersService],
})
export class AppModule {}
