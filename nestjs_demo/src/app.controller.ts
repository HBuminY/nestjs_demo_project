import { Controller, Param, Get , Post, Delete, Body, Header} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Content-Type', 'text/html')
  getHome(): string {
    return `[Welcome to my Demo NEST API]<br><br>
      -- [get /api/posts] to view all posts<br>
      -- [get /api/posts/post_name] to view specific posts<br>
      -- [post /api/posts] to create a post => {postName:string, postContent:string}<br>
      -- [DELETE /api/posts] to delete a post => {postName:string}<br>
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
