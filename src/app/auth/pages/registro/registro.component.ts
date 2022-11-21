import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit { 
  

  miFormulario: FormGroup =this.fb.group({
    nombre:[ '', [Validators.required, Validators.pattern(this.validatorService.namepattern)]],
    email:[ '', [Validators.required,Validators.email ,Validators.pattern(this.validatorService.emailPattern)],[this.emailValidatorService]],
    userName:[ '', [Validators.required , this.validatorService.noPuedeSerZegreo],[this.emailValidatorService]],
    password:[ '', [Validators.required, Validators.minLength(6) ]],
    confirmarpasswd:[ '', [Validators.required, ]]

  },{
    validator: [this.validatorService.camposIguales('password','confirmarpasswd')]
  });
  
  get emailErrorMsg():string {
    const error = this.miFormulario.get('email')?.errors
    if(error?.required){
      return 'El email es obligatorio'
    }else if( error?.pattern){
      return 'El formato es erroneo'
    }else if( error?.emailTomado){
      return 'El email ya esta en uso'
    }
    return''
  }
  constructor( private fb: FormBuilder,
               private validatorService: ValidatorService,
               private emailValidatorService:EmailValidatorService  ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Ruben Montes',
      email: 'test1@test.com',
      userName: 'Zeta',
      password:'123456',
      confirmarpasswd:'123456'
    })
  }
  campoNoValido(campo:string){
    return this.miFormulario.get(campo)?.invalid 
          && this.miFormulario.get(campo)?.touched
  }
 
  submitFormulario(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
    
  }
}
