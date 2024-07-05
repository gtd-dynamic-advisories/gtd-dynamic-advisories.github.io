import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from "@angular/material/button"
import {MatIconModule} from "@angular/material/icon"
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pyme',
  templateUrl: './app-pyme.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],
})
export class AppPymeComponent {

  displayedColumns = ['id', 'rut', 'direccion','telefono','nombre','correo', 'edit'];
  dataSource: any[];

  constructor(){
    this.dataSource = [];
    this.getPyme();
  }

  async getPyme(){
    const result = await fetch('http://127.0.0.1:8000/Pymes/');

    const response = (await result.json()) as any[];
    this.dataSource = response;
  }


  deletePyme(pyme: any){
    Swal.fire({
      title: '¡Precaución!',
      text: `¿Está seguro que desea eliminar a ${pyme.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      confirmButtonColor: 'crimson',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.value) {

        const response = await fetch(`http://127.0.0.1:8000/Pymes/${pyme.id}/`,
          {
            method: 'DELETE',
          });

    
        if(response.status >= 200 && response.status <= 205){
          Swal.fire({
            title: "Eliminado",
            text: `${pyme.nombre} se a eliminado de los registros`,
            icon: 'success'
          }).then((ok)=>{
            if(ok.value){
              this.getPyme();
            }

          });
        }
        else{
          Swal.fire({
            title: "Error",
            text: `No se pudo eliminar a ${pyme.nombre}`,
            icon: 'error'
          });
    
        }
      } 
    });      
    
  }
  editPyme(pyme: any){
  
    console.error("Method not implemented")
  }
}

