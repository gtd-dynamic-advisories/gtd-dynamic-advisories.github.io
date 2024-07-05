import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { MatFormField, MatHint, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
    templateUrl: './app-create-pymeAsesor.component.html',
    imports: [
        MatFormField,
        MatLabel,
        MatHint,
        MatInputModule,
    ],
    standalone: true,
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppCreatePymeAsesorComponent{
    readonly BUTTON_NAME = "Añadir Pyme";
    pyme: number;
    asesor: number;
    fecha_contratacion: string;
    departamento: string;
    modalidad_de_contratacion: string;

    constructor(){
        this.pyme =  0;
        this.asesor = 0;
        this.fecha_contratacion = "";
        this.departamento = "";
        this.modalidad_de_contratacion = "";
    }

    updatePyme(event: any){
        this.pyme = Number.parseInt(event.target.value) 
    }

    updateAsesor(event: any){
        this.asesor = Number.parseInt(event.target.value)
    }

    updateFechaContratacion(event: any){
        this.fecha_contratacion = event.target.value
    }

    updateDepartamento(event: any){
        this.departamento = event.target.value
    }
    
    updateModalidadContratacion(event: any){
        this.modalidad_de_contratacion = event.target.value
    }

    async createPymeAsesor(){
        let data  = {
            id_pyme: this.pyme,
            id_asesor: this.asesor,
            fecha_contratacion: this.fecha_contratacion,
            departamento: this.departamento, 
            modalidad_contratacion: this.modalidad_de_contratacion, 
        }
        

        let response = await fetch("http://127.0.0.1:8000/Pyme_Asesors/",
            {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        );

        if (response.ok){
            console.log("TAWENO");  
        }
    }
}
