import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-app-pyme',
  templateUrl: './app-app-pyme.html',
  styleUrl: './app-app-pyme.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  standalone: true,
  imports: [MatTableModule],
})
export class AppPymeComponent {

  displayedColumns = ['id', 'Rut', 'Direccion', 'departamento','Telefono','Nombre','Correo', 'edit'];
  dataSource: any[];

  constructor(){
    this.dataSource = [];
    this.getPeople();
  }

  async getPeople(){
    const result = await fetch('http://localhost:8000/api/core/get/list/Persona/');

    const response = (await result.json()) as any[];
    this.dataSource = response;
  }


  deletePerson(person: any){
    Swal.fire({
      title: '¡Precaución!',
      text: `¿Está seguro que desea eliminar a ${person.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      confirmButtonColor: 'crimson',
      cancelButtonText: 'Cancelar',
    }).then(async (result) => {
      if (result.value) {

        const response = await fetch(`http://localhost:8000/api/core/delete/Persona/${person.id}/`,{
          method: 'DELETE',
        });


    
        if(response.status >= 200 && response.status <= 205){
          Swal.fire({
            title: "Eliminado",
            text: `${person.nombre} se a eliminado de los registros`,
            icon: 'success'
          }).then((ok)=>{
            if(ok.value){
              this.getPeople();
            }

          });
        }
        else{
          Swal.fire({
            title: "Error",
            text: `No se pudo eliminar a ${person.nombre}`,
            icon: 'error'
          });
    
        }
      } 
    });      
    
  }
}

