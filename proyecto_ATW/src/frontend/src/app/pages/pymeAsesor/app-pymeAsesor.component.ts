import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {MatButtonModule} from "@angular/material/button"
import {MatIconModule} from "@angular/material/icon"
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pymeAsesor',
  templateUrl: './app-pymeAsesor.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [MatTableModule, MatButtonModule, MatIconModule],

})
export class ApppymeAsesorComponent {

  displayedColumns = ['id_Pyme', 'id_asesor', 'fecha_Contratacion', 'departamento','m_contratacion', 'edit'];
  dataSource: any[];

  constructor(){
    this.dataSource = [];
    this.getPymeAsesors();
  }

  async getPymeAsesors(){
    const result = await fetch('http://127.0.0.1:8000/Pyme_Asesors/');

    const response = (await result.json()) as any[];
    this.dataSource = response;
    console.warn(this.dataSource)
  }


  deletePymeAsesor(pymeAsesor: any){
    Swal.fire({
      title: '¡Precaución!',
      text: `¿Está seguro que desea eliminar esta relación?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      confirmButtonColor: 'crimson',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.value) {

        const response = await fetch(`http://127.0.0.1:8000/Pyme_Asesors/${pymeAsesor.id}/`,
          {
            method: 'DELETE',
          });


    
        if(response.status >= 200 && response.status <= 205){
          Swal.fire({
            title: "Eliminado",
            text: `${pymeAsesor.nombre} se a eliminado de los registros`,
            icon: 'success'
          }).then((ok)=>{
            if(ok.value){
              this.getPymeAsesors();
            }

          });
        }
        else{
          Swal.fire({
            title: "Error",
            text: `No se pudo eliminar a ${pymeAsesor.nombre}`,
            icon: 'error'
          });
    
        }
      } 
    });      
  }
  editPymeAsesor(pymeAsesor: any){
  
    console.error("Method not implemented")
  }
}

