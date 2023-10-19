import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de Usuarios';
  mensaje= "";
  registrado= false;
  nombre="";
  apellido="";
/*  entradas: object=[];*/



 /*constructor() {
   this.entradas[
     {titulo:"Java alcanza la popularidad"},
     {titulo:"Phyton cada día más presente"},
     {titulo:"CSS como lenguaje de marca más exitoso"},
     {titulo:"WordPress se alza con la medalla"},
   ];
 }*/
  registrarUsuario(){
    this.registrado= true;
    this.mensaje= "Usuario registrado con éxito";
  }
}
