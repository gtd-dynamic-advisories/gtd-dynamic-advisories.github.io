import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatFormField, MatHint, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
    templateUrl: "./app-create-asesor.component.html",
    imports: [
        MatFormField,
        MatLabel,
        MatHint,
        MatInputModule,
    ],
    standalone: true
})
export class AppCreateAsesorComponent{
    nombre: string;
    rut: string;
    telefono: string;
    correo: string;

    constructor(){
        this.nombre = "";
        this.rut ="";
        this.telefono = "";
        this.correo = "";
    }

    updateNombre(event: any){
        this.nombre = event.target.value
    }

    updateRut(event: any){
        this.rut = event.target.value
    }
    updateTelefono(event: any){
        this.telefono = event.target.value
    }
    updateCorreo(event: any){
        this.correo = event.target.value
    }

    async createAsesor(){
        let data  = {
            nombre: this.nombre,
            rut: this.rut,
            telefono: this.telefono,
            correo: this.correo 
        }
        

        let response = await fetch("http://127.0.0.1:8000/Asesors/",
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


    logs(){
        console.log(this.nombre, this.rut, this.telefono, this.correo);
    }

}
