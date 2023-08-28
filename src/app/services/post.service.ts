import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private post={
    title:"Post Title",
    content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
  }

  constructor() { }

  getPost(){
    return this.post;
  }
}
