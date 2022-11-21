import { Component, OnInit } from '@angular/core';
import {  FormArray, FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {
  
  miFormulario: FormGroup =this.fb.group({
    nombre:     [ '', [Validators.required, Validators.minLength(3) ]],   
    favoritos:  this.fb.array( [
                  ['Metal Gear'],
                  [ 'TFT']
                ], Validators.required)
  });
  nuevoFavorito: FormControl = this.fb.control('', Validators.required)
  get  favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }
  constructor( private fb: FormBuilder) { }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);

  }
  
  campoEsValido( campo: string){
    return this.miFormulario.controls[campo].errors &&
           this.miFormulario.controls[campo].touched
  }
  agregar(){
    if (this.nuevoFavorito.invalid){
      return;
    }
    this.favoritosArr.push( new FormControl(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }

  borrar( index:number){
    
    this.favoritosArr.removeAt(index)
    
  }
  
}
