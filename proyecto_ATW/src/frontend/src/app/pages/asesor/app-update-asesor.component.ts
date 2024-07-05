import { Component, inject } from "@angular/core";
import { MatFormField, MatHint, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ActivatedRoute } from "@angular/router";

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
export class AppUpdateAsesor{
    id: number = -1;
    nombre: string;
    rut: string;
    telefono: string;
    correo: string;
    private activatedRoute = inject(ActivatedRoute);

    constructor(){
        const snapshot = this.activatedRoute.snapshot;
        if (!snapshot.params['id']){
            console.error("NO HAY ID");
            
        }
        this.id = snapshot.params["id"];
        fetch(`http://127.0.0.1:8000/Pyme_Asesors/${this.id}}`)
        .then((response) => {
            const data = response.json()
                .then((d) => {
                    console.warn("EEEEEEEEEE", d);
                    
                    this.nombre = d['nombre'];
                    this.rut = d['rut'];
                    this.telefono = d['telefono'];
                    this.correo = d['correo'];
                });

        }).catch((e) => console.error(e));
        
    }
}
