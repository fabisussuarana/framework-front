import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraComandosComponent } from './barra-comandos.component';

describe('BarraComandosComponent', () => {
  let component: BarraComandosComponent;
  let fixture: ComponentFixture<BarraComandosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarraComandosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraComandosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
