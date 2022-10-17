import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumInputControlComponent } from './num-input-control.component';

describe('NumInputControlComponent', () => {
  let component: NumInputControlComponent;
  let fixture: ComponentFixture<NumInputControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumInputControlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NumInputControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
