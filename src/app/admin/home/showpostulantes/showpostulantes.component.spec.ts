import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowpostulantesComponent } from './showpostulantes.component';

describe('ShowpostulantesComponent', () => {
  let component: ShowpostulantesComponent;
  let fixture: ComponentFixture<ShowpostulantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowpostulantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowpostulantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
