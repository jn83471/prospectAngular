import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePuestoComponent } from './create-puesto.component';

describe('CreatePuestoComponent', () => {
  let component: CreatePuestoComponent;
  let fixture: ComponentFixture<CreatePuestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePuestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
