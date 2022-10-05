import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFormInfoComponent } from './main-form-info.component';

describe('MainFormInfoComponent', () => {
  let component: MainFormInfoComponent;
  let fixture: ComponentFixture<MainFormInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFormInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainFormInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
