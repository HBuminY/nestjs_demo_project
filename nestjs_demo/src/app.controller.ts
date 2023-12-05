import { Controller, Param, Get , Post, Delete, Body, Header} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type', 'text/html')
  getHome(): string {
    return `[Welcome to my Demo NEST API by Hulusi Bumin Yalçın]<br><br>
      -- [get /api/posts] to view all posts<br>
      -- [get /api/posts/post_name] to view specific posts<br>
      -- [post /api/posts] to create a post => {postName:string, postContent:string}<br>
      -- [DELETE /api/posts] to delete a post => {postName:string}<br>
      (routes above are accessible to unauthorized requests)<br>
      <br>
      <br>
      --[post /api/users/register] to register => {name:string>8, email:email, password:string>8}<br>
      --[get /api/users/login] to login => {name:string>8, email:email, password:string>8}<br>
      (routes above are accessible to unauthorized requests)<br>
    `
  }

  @Get('/api/posts')
  getPosts():any {
    return this.appService.getPosts();
  }

  @Get('api/posts/:postName')
  getPost(@Param('postName') postName:string){
    return this.appService.getPost(postName);
  }

  @Post('/api/posts')
  postPost(@Body('postName') postName:string, @Body('postContent') postContent : string):any {
    return this.appService.newPost(postName, postContent);
  }

  
  @Delete('/api/posts')
  removePost(@Body('postName')postName:string):any {
    return this.appService.removePost(postName);
  }
  
}
