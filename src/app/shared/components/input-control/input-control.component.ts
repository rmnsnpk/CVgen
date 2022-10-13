import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzInputModule } from 'ng-zorro-antd/input';
import { BaseControl } from '../../classes/base-control';
@Component({
  selector: 'cvg-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.scss'],
  standalone: true,
  imports: [NzInputModule, ReactiveFormsModule, CommonModule],
})
export class InputControlComponent extends BaseControl {
  inputControl = this.baseControl;
}
