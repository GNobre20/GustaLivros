import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DicionariosComponent } from './dicionarios.component';

describe('DicionariosComponent', () => {
  let component: DicionariosComponent;
  let fixture: ComponentFixture<DicionariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DicionariosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DicionariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
