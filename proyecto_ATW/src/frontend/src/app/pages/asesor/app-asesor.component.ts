import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from "@angular/material/button"
import {MatIconModule} from "@angular/material/icon"
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-asesor',
  templateUrl: './app-asesor.component.html',
  styleUrl: './app-asesor.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
})
export class AppAsesorComponent {

  displayedColumns = ['id', 'rut', 'nombre', 'telefono','correo', 'edit'];
  dataSource: any[];

  constructor(){
    this.dataSource = [];
    this.getAsesors();
  }

  async getAsesors(){
    const result = await fetch('http://127.0.0.1:8000/Asesors/');

    const response = (await result.json()) as any[];
    this.dataSource = response;
    console.warn(this.dataSource)
  }


  deleteAsesor(asesor: any){
    Swal.fire({
      title: '¡Precaución!',
      text: `¿Está seguro que desea eliminar a ${asesor.nombre}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      confirmButtonColor: 'crimson',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.value) {

        const response = await fetch(`http://127.0.0.1:8000/Asesors/${asesor.id}/`,
          {
            method: 'DELETE',
          });


    
        if(response.status >= 200 && response.status <= 205){
          Swal.fire({
            title: "Eliminado",
            text: `${asesor.nombre} se a eliminado de los registros`,
            icon: 'success'
          }).then((ok)=>{
            if(ok.value){
              this.getAsesors();
            }

          });
        }
        else{
          Swal.fire({
            title: "Error",
            text: `No se pudo eliminar a ${asesor.nombre}`,
            icon: 'error'
          });
    
        }
      } 
    });      
    
  }
  
  editAsesor(asesor: any){
    
    console.error("Method not implemented")
  }
}

