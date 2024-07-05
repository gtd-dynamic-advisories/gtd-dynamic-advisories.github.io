import { Component, ElementRef, inject, ViewChild } from "@angular/core";
import { MatFormField, MatHint, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    templateUrl: "./app-create-asesor.component.html",
    imports: [
        MatFormField,
        MatLabel,
        MatHint,
        MatInputModule,
    ],
    standalone: true,
    styles: `
    mat-form-field {
        width: 50%;
    }
    `
})
export class AppUpdateAsesor{
    readonly BUTTON_NAME = "Actualizar Asesor";
    id: number = -1;
    nombre: string = "";
    rut: string = "";
    telefono: string = "";
    correo: string = "";
    
    private activatedRoute = inject(ActivatedRoute);

    @ViewChild('nombre') nombreInput!: ElementRef;
    @ViewChild('rut') rutInput!: ElementRef;
    @ViewChild('telefono') telefonoInput!: ElementRef;
    @ViewChild('correo') correoInput!: ElementRef;

    constructor(private router: Router){
        const snapshot = this.activatedRoute.snapshot;
        if (!snapshot.params['id']){
            console.error("NO HAY ID");
            
        }
        this.id = snapshot.params["id"];
        fetch(`http://127.0.0.1:8000/Asesors/${this.id}`,
            {
                method:"GET"
            }
        )
        .then((response) => {
            
            response.json()
                .then((d) => {
                    this.nombre = d['nombre'];
                    this.rut = d['rut'];
                    this.telefono = d['telefono'];
                    this.correo = d['correo'];

                    this.bulkFields();
                });

        }).catch((e) => console.error(e));
        
    }

    bulkFields(){
        this.nombreInput.nativeElement.value = this.nombre;
        this.rutInput.nativeElement.value = this.rut
        this.telefonoInput.nativeElement.value = this.telefono
        this.correoInput.nativeElement.value = this.correo
        
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
        

        let response = await fetch(`http://127.0.0.1:8000/Asesors/${this.id}/`,
            {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        );

        if (response.ok){
            this.router.navigate(["Asesors/"])
        }
        else{
            alert("No se ha podido actualizar el Asesor")
        }
    }
}
