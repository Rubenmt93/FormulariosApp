import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {


  @ViewChild( 'miFormulario') miFormulario!: NgForm
  constructor() { }

  ngOnInit(): void {
  }

  initForm={
    producto:"",
    precio:0,
    existecias:0
  }

  guardar(){
    console.log('Submit:', this.miFormulario.value ); 
    console.log("Posteo correcto");
    this.miFormulario.resetForm({
      precio:0,
      existencias:0
    });
       
  }
  nombreValido(): boolean{
    return this.miFormulario?.controls.producto?.invalid &&
           this.miFormulario?.controls.producto?.touched

  }
  precioValido():boolean{
    return this.miFormulario?.controls.precio?.invalid &&
           this.miFormulario?.controls.precio?.touched
  }
  existenciaValido():boolean{
    return this.miFormulario?.controls.existencias?.invalid &&
           this.miFormulario?.controls.existencias?.touched
  }
}

