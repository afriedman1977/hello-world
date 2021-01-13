import { Component } from "@angular/core";
import { Like } from "./like";

@Component({
template: ''
})

export class LikeComponent{
    public like: Like;

    setLike(likes?: number){
        this.like = new Like(likes);
    }

    updateLikes(){
        this.like.incrementLike;
        console.log(this.like.like);
        console.log(this.like.selected);
    }
}