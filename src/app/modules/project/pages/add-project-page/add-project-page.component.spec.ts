import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule } from '@ngx-translate/core';

import { AddProjectPageComponent } from './add-project-page.component';

describe('AddProjectPageComponent', () => {
  let component: AddProjectPageComponent;
  let fixture: ComponentFixture<AddProjectPageComponent>;
  let actions: Actions;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      declarations: [AddProjectPageComponent],
      providers: [provideMockStore({}), RouterTestingModule, provideMockActions(() => actions)],
    }).compileComponents();

    fixture = TestBed.createComponent(AddProjectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
