import { Component, ElementRef, inject, ViewChild } from "@angular/core";
import { MatFormField, MatHint, MatLabel } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './app-pymeAsesor.component.html',
    imports: [
        MatFormField,
        MatLabel,
        MatHint,
        MatInputModule,
    ],
    standalone: true
})
export class AppUdaptePymeAsesorComponent{
    id: number = -1;
    id_pyme: number = -1;
    id_asesor: number = -1;
    fecha_contratacion: string = "";
    departamento: string = "";
    modalidad_de_contratacion: string = "";
    
    private activatedRoute = inject(ActivatedRoute);

    @ViewChild('pyme') id_pymeInput!: ElementRef;
    @ViewChild('asesor') id_asesorInput!: ElementRef;
    @ViewChild('fecha_contratacion') fecha_contratacionInput!: ElementRef;
    @ViewChild('departamento') departamentoInput!: ElementRef;
    @ViewChild('modalidad_de_contratacion') modalidad_de_contratacionInput!: ElementRef;

    constructor(){
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
            console.warn("AAAAAAA", response);
            
            response.json()
                .then((d) => {
                    console.warn("EEEEEEEEEE", d);
                    this.id_pyme = d['pyme'];
                    this.id_asesor = d['asesor'];
                    this.fecha_contratacion = d['fecha_contratacion'];
                    this.departamento = d['departamento'];
                    this.modalidad_de_contratacion = d['modalidad_de_contratacion'];

                    this.bulkFields();
                });

        }).catch((e) => console.error(e));
        
    }

    bulkFields(){
        this.id_pymeInput.nativeElement.value = this.id_pyme;
        this.id_asesorInput.nativeElement.value = this.id_asesor
        this.fecha_contratacionInput.nativeElement.value = this.fecha_contratacionInput
        this.departamentoInput.nativeElement.value = this.departamento
        this.modalidad_de_contratacionInput.nativeElement.value = this.modalidad_de_contratacion
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
        this.modalidad_de_contratacion = event.target.value
    }

    async createAsesor(){
        let data  = {
            id_pyme : this.id_pyme,
            id_asesor : this.id_asesor,
            fecha_contratacion : this.fecha_contratacion, 
            departamento : this.departamento,
            modalidad_de_contratacion : this.modalidad_de_contratacion,
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
    }
}
