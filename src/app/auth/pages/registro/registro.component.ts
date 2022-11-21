import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ValidatorService } from '../../../shared/validator/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit { 
  

  miFormulario: FormGroup =this.fb.group({
    nombre:[ '', [Validators.required, Validators.pattern(this.validatorService.namepattern)]],
    email:[ '', [Validators.required,Validators.email ,Validators.pattern(this.validatorService.emailPattern)]],
    userName:[ '', [Validators.required , this.validatorService.noPuedeSerZegreo]],
    password:[ '', [Validators.required, Validators.minLength(6) ]],
    confirmarpasswd:[ '', [Validators.required, ]]

  },{
    validator: [this.validatorService.camposIguales('password','confirmarpasswd')]
  })
  constructor( private fb: FormBuilder, private validatorService: ValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Ruben Montes',
      email: 'test1@test1.com',
      userName: 'Zeta',
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
