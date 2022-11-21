import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { TranslateButtonComponent } from './translate-button.component';

xdescribe('TranslateButtonComponent', () => {
  let component: TranslateButtonComponent;
  let fixture: ComponentFixture<TranslateButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateButtonComponent, TranslateModule.forRoot()],
      providers: [NzIconModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TranslateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
