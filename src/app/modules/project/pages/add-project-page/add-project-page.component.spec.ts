import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';
import { of } from 'rxjs';
import { AddProjectPageComponent } from './add-project-page.component';

describe('AddProjectPageComponent', () => {
  let component: AddProjectPageComponent;
  let fixture: ComponentFixture<AddProjectPageComponent>;
  let actions = of({ type: '[PROJECTS] Create Projects Success' });
  let routerSpy = { navigate: jasmine.createSpy('navigate') };
  let validFormValue = {
    name: 'oleg',
    secondName: 'ol',
    teamSize: 5,
    startDate: new Date(),
    endDate: new Date(),
    projectRoles: ['fakeRole'],
    specializations: ['fakeSpecialization'],
    responsibilities: ['fakeResponsibility'],
    description: 'descr',
    tasksPerformed: 'tasks',
  };
  const fakeActivatedRoute = {
    snapshot: { data: {} },
  };
  let store: MockStore;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot(), RouterModule],
      declarations: [AddProjectPageComponent],
      providers: [
        provideMockStore({}),
        RouterTestingModule,
        provideMockActions(() => actions),
        { provide: ActivatedRoute, useValue: fakeActivatedRoute },
        { provide: Router, useValue: routerSpy },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(AddProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should mark form as touched on save', () => {
    component.projectsForm.setErrors({ a: 'a' });
    component.save();
    expect(component.projectsForm.touched).toBeTrue();
  });

  it('should dispatch createProject action', () => {
    let dispatchSpy = spyOn(store, 'dispatch').and.callThrough();
    component.projectsForm.patchValue(validFormValue);
    component.save();
    fixture.detectChanges();
    expect(dispatchSpy).toHaveBeenCalled();
  });
});
