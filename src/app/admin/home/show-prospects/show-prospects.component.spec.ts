import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProspectsComponent } from './show-prospects.component';

describe('ShowProspectsComponent', () => {
  let component: ShowProspectsComponent;
  let fixture: ComponentFixture<ShowProspectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowProspectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProspectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
