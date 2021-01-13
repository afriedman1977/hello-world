import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categories = [
    {id: 1, name: 'Development'},
    {id: 2, name: 'Art'},
    {id: 3, name: 'Languages'}
  ]

  log(x){
    console.log(x);
  }

  submit(x){
    console.log(x);
  }

  categorySelected(category){
    console.log(category);
  }

  guaranteeChanged(f){
    console.log(f);
  }

  validateForm(f){
    return f.pristine || f.invalid;
  }
}
