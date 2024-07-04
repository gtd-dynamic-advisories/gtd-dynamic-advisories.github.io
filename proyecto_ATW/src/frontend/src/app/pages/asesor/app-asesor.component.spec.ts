import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAsesorComponent  } from './app-asesor.component';

describe('AppPersonasComponent', () => {
  let component: AppAsesorComponent ;
  let fixture: ComponentFixture<AppAsesorComponent >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAsesorComponent ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppAsesorComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
