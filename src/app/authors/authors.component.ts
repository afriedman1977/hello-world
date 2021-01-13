import { Component, OnInit } from '@angular/core';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  authors: string[];
  authorsCount: number;
  title = 'Angular';

  constructor(authorService: AuthorsService) { 
    this.authors = authorService.getAuthors();
    this.authorsCount = this.authors.length;
  }

  ngOnInit(): void {
  }

}
