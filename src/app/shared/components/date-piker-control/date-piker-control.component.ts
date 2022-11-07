import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { TranslateModule } from '@ngx-translate/core';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { BaseControl } from '../../classes/base-control';
import { ControlErrorsPipe } from '../../pipes/control-errors.pipe';

@Component({
  selector: 'cvg-date-picker-control',
  standalone: true,
  templateUrl: './date-piker-control.component.html',
  styleUrls: ['./date-piker-control.component.scss'],
  imports: [NzDatePickerModule, ReactiveFormsModule, CommonModule, ControlErrorsPipe, TranslateModule],
})
export class DatePickerControlComponent extends BaseControl {}
