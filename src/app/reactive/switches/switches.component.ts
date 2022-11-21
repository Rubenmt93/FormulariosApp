import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup= this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    terminos: [false, Validators.requiredTrue]
  })
  persona={
    genero: 'F',
    notificaciones: true,
  }
  

  constructor( private fb:FormBuilder) { }
  ngOnInit(){
    this.miFormulario.reset(
      {...this.persona,
      terminos:true});

      this.miFormulario.valueChanges.subscribe(form => {
        delete form.terminos
        this.persona=form
        
      })
  }

  guardar(){
    const formValue ={... this.miFormulario.value}
    delete formValue.terminos
    console.log(formValue);
    
  }

}
