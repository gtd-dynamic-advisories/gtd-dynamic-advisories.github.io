import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppPymeComponent  } from './app-pyme.component';

describe('AppPersonasComponent', () => {
  let component:  AppPymeComponent  ;
  let fixture: ComponentFixture< AppPymeComponent  >;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AppPymeComponent  ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent( AppPymeComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
