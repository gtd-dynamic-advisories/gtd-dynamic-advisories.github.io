import { Component, ElementRef, inject, ViewChild } from "@angular/core";
import { MatFormField, MatHint, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ActivatedRoute } from "@angular/router";

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
export class AppUpdatePymeComponent{
    id: number = -1;
    rut: string = "";
    direccion: string = "";
    telefono: string = "";
    nombre: string = "";
    correo: string = "";

    readonly BUTTON_NAME = "Actualizar Trabajador"
    
    private activatedRoute = inject(ActivatedRoute);

    @ViewChild('rut') rutInput!: ElementRef;
    @ViewChild('direccion') direccionInput!: ElementRef;
    @ViewChild('telefono') telefonoInput!: ElementRef;
    @ViewChild('nombre') nombreInput!: ElementRef;
    @ViewChild('correo') correoInput!: ElementRef;

    constructor(){
        const snapshot = this.activatedRoute.snapshot;
        if (!snapshot.params['id']){
            console.error("NO HAY ID");
            
        }
        this.id = snapshot.params["id"];
        fetch(`http://127.0.0.1:8000/Pymes/${this.id}`,
            {
                method:"GET"
            }
        )
        .then((response) => {
            console.warn("AAAAAAA", response);
            
            response.json()
                .then((d) => {
                    console.warn("EEEEEEEEEE", d);
                    this.rut = d['rut'];
                    this.direccion = d['direccion'];
                    this.telefono = d['telefono'];
                    this.nombre = d['nombre'];
                    this.correo = d['correo'];

                    this.bulkFields();
                });

        }).catch((e) => console.error(e));
        
    }

    bulkFields(){
        this.rutInput.nativeElement.value = this.rut;
        this.direccionInput.nativeElement.value = this.direccion
        this.telefonoInput.nativeElement.value = this.telefono
        this.nombreInput.nativeElement.value = this.nombre
        this.correoInput.nativeElement.value = this.correo
        
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

    updateNombre(event: any){
        this.nombre = event.target.value
    }

    updateCorreo(event: any){
        this.correo = event.target.value
    }

    async createPyme(){
        let data  = {
            rut: this.rut,
            direccion: this.direccion,
            telefono: this.telefono,
            nombre: this.nombre,
            correo: this.correo 
        }
        

        let response = await fetch(`http://127.0.0.1:8000/Pymes/${this.id}/`,
            {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        );
    }
}
