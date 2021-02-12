import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { AppError } from '../Shared/app-error';
import { NotFoundError } from '../Shared/not-found-error';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts = [];

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
    this.postService.getAll()
      .subscribe(
        (result: []) => {
          this.posts = result; console.log(this.posts);
        }, 
        this.handleError); 
  }

  createPost(post){
    this.postService.create(post)
      .subscribe(response => {
        this.posts.splice(0,0,response)
      }, 
      this.handleError);
  }

  updatePost(post){
    this.postService.update(post)
      .subscribe(result => {
        var index = this.posts.indexOf(post)
        this.posts[index] = result;
      }, 
      this.handleError)
  }

  deletePost(post){
    var index = this.posts.indexOf(post)
    this.posts.splice(index, 1);

    this.postService.delete(post.id)
      .subscribe(result => {
      
      }, 
      err =>{
        this.posts.splice(index, 0, post);
        this.handleError(err)
      }
    )
  }

  private handleError(err: AppError){
    if(err instanceof NotFoundError){
      alert('not found error')
    }
    else {
      alert('error')
    }
  }
}
