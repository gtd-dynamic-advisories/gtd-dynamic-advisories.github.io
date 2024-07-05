import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { MatFormField, MatHint, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@Component({
    templateUrl: "./app-create-pyme.component.html",
    imports: [
        MatFormField,
        MatLabel,
        MatHint,
        MatInputModule,
    ],
    standalone: true
})
export class AppCreatePymeComponent{
    readonly BUTTON_NAME = "Añadir Pyme";
    nombre: string;
    rut: string;
    direccion: string;
    telefono: string;
    correo: string;

    constructor(){
        this.nombre = "";
        this.rut ="";
        this.direccion ="";
        this.telefono = "";
        this.correo = "";
    }

    updateNombre(event: any){
        this.nombre = event.target.value
    }

    updateRut(event: any){
        this.rut = event.target.value
    }

    updateDireccion(event: any){
        this.direccion = event.target.value
    }

    updateTelefono(event: any){
        this.telefono = event.target.value
    }

    updateCorreo(event: any){
        this.correo = event.target.value
    }

    async createPyme(){
        let data  = {
            nombre:this.nombre,
            rut: this.rut,
            direccion:this.direccion,
            telefono: this.telefono,
            correo: this.correo 
        }

        let response = await fetch("http://127.0.0.1:8000/Pymes/",
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
