import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, ViewChild } from "@angular/core";
import { MatFormField, MatHint, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    templateUrl: './app-create-pymeAsesor.component.html',
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
export class AppUpdatePymeAsesorComponent{
    readonly BUTTON_NAME = "Actualizar Pyme";
    id: number = -1;
    id_pyme: number = -1;
    id_asesor: number = -1;
    fecha_contratacion: string = "";
    departamento: string = "";
    modalidad_contratacion: string = "";
    
    private activatedRoute = inject(ActivatedRoute);

    @ViewChild('pyme') id_pymeInput!: ElementRef;
    @ViewChild('asesor') id_asesorInput!: ElementRef;
    @ViewChild('fechaContratacion') fecha_contratacionInput!: ElementRef;
    @ViewChild('departamento') departamentoInput!: ElementRef;
    @ViewChild('modalidadContratacion') modalidad_contratacionInput!: ElementRef;

    constructor(private router: Router){
        const snapshot = this.activatedRoute.snapshot;
        if (!snapshot.params['id']){
            console.error("NO HAY ID");
            
        }
        this.id = snapshot.params["id"];
        fetch(`http://127.0.0.1:8000/Pyme_Asesors/${this.id}`,
            {
                method:"GET"
            }
        )
        .then((response) => {
            
            response.json()
                .then((d) => {
                    this.id_pyme = d['id_pyme'];
                    this.id_asesor = d['id_asesor'];
                    this.fecha_contratacion = (d['fecha_contratacion']);
                    this.departamento = d['departamento'];
                    this.modalidad_contratacion = d['modalidad_contratacion'];

                    this.bulkFields();
                });

        }).catch((e) => console.error(e));
        
    }

    bulkFields(){
        this.id_pymeInput.nativeElement.value = this.id_pyme;
        this.id_asesorInput.nativeElement.value = this.id_asesor
        this.fecha_contratacionInput.nativeElement.value = this.fecha_contratacion
        this.departamentoInput.nativeElement.value = this.departamento
        this.modalidad_contratacionInput.nativeElement.value = this.modalidad_contratacion
    }

    updatePyme(event: any){
        this.id_pyme = event.target.value
    }

    updateAsesor(event: any){
        this.id_asesor = event.target.value
    }
    updateFechaContratacion(event: any){
        this.fecha_contratacion = event.target.value
    }
    updateDepartamento(event: any){
        this.departamento = event.target.value
    }
    updateModalidadContratacion(event: any){
        this.modalidad_contratacion = event.target.value
    }

    async createPymeAsesor(){
        let data  = {
            id_pyme : this.id_pyme,
            id_asesor : this.id_asesor,
            fecha_contratacion : this.fecha_contratacion, 
            departamento : this.departamento,
            modalidad_contratacion : this.modalidad_contratacion,
        }
        

        let response = await fetch(`http://127.0.0.1:8000/Pyme_Asesors/${this.id}/`,
            {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }
        );

        if(response.ok){
            this.router.navigate([`Pyme_Asesors/`]);
        }
        else{
            alert("No se ha podido actualizar el Trabajador")
        }
    }
}
