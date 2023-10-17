import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Accord2Component } from './accord2.component';

describe('Accord2Component', () => {
  let component: Accord2Component;
  let fixture: ComponentFixture<Accord2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Accord2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Accord2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
