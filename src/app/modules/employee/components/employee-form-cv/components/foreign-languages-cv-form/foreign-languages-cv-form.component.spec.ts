import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeignLanguagesCvFormComponent } from './foreign-languages-cv-form.component';

describe('ForeignLanguagesCvFormComponent', () => {
  let component: ForeignLanguagesCvFormComponent;
  let fixture: ComponentFixture<ForeignLanguagesCvFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForeignLanguagesCvFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ForeignLanguagesCvFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
