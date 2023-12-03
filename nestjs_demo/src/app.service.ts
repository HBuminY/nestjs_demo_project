import { Injectable } from '@nestjs/common';
import { postModel } from './post.model';

const POSTS = [];

@Injectable()
export class AppService {
  getPosts():any[]{
    return POSTS;
  }

  getPost(postName:String){
    for(let i=0; i<POSTS.length; i++){
      let e = POSTS[i];
      if(e.name === postName){return e}
    }
    return 404
  }

  newPost(postName, postContent): Number{
    let newpost = new postModel(postName, postContent)
    //console.log(newpost);
    POSTS.push(newpost);

    return 200 
  }

  removePost(postName): Number{
    POSTS.forEach((e,i)=>{
      if(e.name==postName){
        POSTS.splice(i,1);
      }
    })

    return 200
  }
}
