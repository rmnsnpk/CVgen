import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';

import { MainPageComponent } from './main-page.component';

xdescribe('MainPageComponent', () => {
  let component: MainPageComponent;
  let fixture: ComponentFixture<MainPageComponent>;
  const fakeActivatedRoute = {
    snapshot: { data: {} },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MainPageComponent],
      providers: [provideMockStore({}), { provide: ActivatedRoute, useValue: fakeActivatedRoute }],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(MainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
