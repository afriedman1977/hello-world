import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { changePasswordValidator } from '../Shared/change-password-validator';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  
form: FormGroup;

  constructor(fb: FormBuilder) { 
    this.form = fb.group({
      oldPassword: ['', [Validators.required], changePasswordValidator.oldPasswordCorrect],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, { validators : [changePasswordValidator.passwordsMatch, changePasswordValidator.cantMatchOldPassword] });
  }

  ngOnInit(): void {
  }

  change(){
    console.log(this.form);
  }

  get oldPassword(){
    return this.form.get('oldPassword')
  }

  get newPassword(){
    return this.form.get("newPassword");
  }

  get confirmPassword(){
    return this.form.get("confirmPassword");
  }

}
