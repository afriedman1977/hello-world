import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html'
})
export class FavoriteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  favorite = false;

  input: string;

  setFavorite(){
    this.favorite = !this.favorite;
  }

}
