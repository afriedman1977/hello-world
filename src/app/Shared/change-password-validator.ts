import { AbstractControl, FormControl, FormGroup, ValidationErrors } from "@angular/forms";

export class changePasswordValidator{
    static oldPasswordCorrect(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) =>{
            if(control.value != "1234"){
                resolve({oldPasswordNotCorrect : true});
            }
            else resolve(null);   
        })
    }

    static cantMatchOldPassword(group: FormGroup) : ValidationErrors | null{
        if(group.controls.newPassword.value == "1234")
        return { cantMatchOldPassword: true };
        else return null;
    }

    static passwordsMatch(group: FormGroup) : ValidationErrors | null{
        if(group.controls.newPassword.value && group.controls.confirmPassword.value && group.controls.newPassword.value != group.controls.confirmPassword.value){
            return {passwordsDontMatch: true};
        }
        return null;
    }
}