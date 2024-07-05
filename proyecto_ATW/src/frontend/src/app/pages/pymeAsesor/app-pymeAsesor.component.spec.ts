import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApppymeAsesorComponent  } from './app-pymeAsesor.component';

describe('AppPersonasComponent', () => {
  let component: ApppymeAsesorComponent ;
  let fixture: ComponentFixture<ApppymeAsesorComponent >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApppymeAsesorComponent ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApppymeAsesorComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
