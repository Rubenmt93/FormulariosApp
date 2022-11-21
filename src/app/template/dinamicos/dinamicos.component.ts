import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}
interface Favorito {
  id: number;
  nombre:string;
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {
  @ViewChild( 'miFormulario') miFormulario!: NgForm
  nuevojuego: string = '';
  persona: Persona ={
    nombre:'Ruben',
    favoritos:[
      { id:0, nombre:"Lol" },
      { id:1, nombre:"TFT" },
    ]
  }
  guardar(){
    console.log("Formulario posteado");
    
  }
  nombreValido(): boolean {
    return this.miFormulario?.controls.nombre?.invalid 
    && this.miFormulario?.controls.nombre?.touched
  }

  agregarJuego(){
    const nuevoFavorito: Favorito= {
      id: this.persona.favoritos.length +1,
      nombre:this.nuevojuego
    }
    this.persona.favoritos.push({...nuevoFavorito})
    this.nuevojuego=''
  }
  eliminar(index:number){
    this.persona.favoritos.splice(index,1)
  }
}
