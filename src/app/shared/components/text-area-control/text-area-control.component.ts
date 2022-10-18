import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BaseControl } from '../../classes/base-control';

import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ControlErrorsPipe } from '../../pipes/control-errors.pipe';

@Component({
  selector: 'cvg-text-area-control',
  standalone: true,
  imports: [
    CommonModule,
    NzInputModule,
    ReactiveFormsModule,
    ControlErrorsPipe,
  ],
  templateUrl: './text-area-control.component.html',
  styleUrls: ['./text-area-control.component.scss'],
})
export class TextAreaControlComponent extends BaseControl {}
