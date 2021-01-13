import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-like-component',
  templateUrl: './like-component.component.html',
  styleUrls: ['./like-component.component.css']
})
export class LikeComponentComponent {

  @Input('like-count') likeCount: number;
  @Input('is-liked') liked: boolean;

  @Output('clicked') click = new EventEmitter();

  likeStatus = false;

  likeClicked(){
    this.likeStatus = !this.likeStatus
    this.click.emit(this.likeStatus);
   
  }

  doAlert() {
    alert('like component like is ' + this.liked + ' like count is ' + this.likeCount);
  }

}
