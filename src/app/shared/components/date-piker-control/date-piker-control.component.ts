import { CommonModule, registerLocaleData } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import en from '@angular/common/locales/en';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { BaseControl } from '../../classes/base-control';
import { ControlErrorsPipe } from '../../pipes/control-errors.pipe';
registerLocaleData(en);

@Component({
  selector: 'cvg-date-piker-control',
  standalone: true,
  templateUrl: './date-piker-control.component.html',
  styleUrls: ['./date-piker-control.component.scss'],
  providers: [NzI18nService],

  imports: [
    NzDatePickerModule,
    ReactiveFormsModule,
    CommonModule,
    ControlErrorsPipe,
  ],
})
export class DatePikerControlComponent extends BaseControl {}
