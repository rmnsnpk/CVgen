import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { BaseControl } from '../../classes/base-control';
import { ControlErrorsPipe } from '../../pipes/control-errors.pipe';
@Component({
  selector: 'cvg-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.scss'],
  standalone: true,
  imports: [
    NzInputModule,
    ReactiveFormsModule,
    CommonModule,
    ControlErrorsPipe,
  ],
})
export class InputControlComponent extends BaseControl {}
