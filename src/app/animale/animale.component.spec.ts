import { ComponentFixture, TestBed } from '@angular/core/testing';

import { animaleComponent } from './animale.component';

describe('animaleComponent', () => {
  let component:animaleComponent;
  let fixture: ComponentFixture<animaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ animaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(animaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});