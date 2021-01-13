import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  authors : string[];
  constructor(){
    this.authors = ['authors1', 'authors2', 'authors3']
  }

  getAuthors(){
    return this.authors
  }
}
