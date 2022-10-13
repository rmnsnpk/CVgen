import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { BaseControl } from '../../classes/base-control';
import { ControlErrorsPipe } from '../../pipes/control-errors.pipe';

@Component({
  selector: 'cvg-select-control',
  standalone: true,
  templateUrl: './select-control.component.html',
  styleUrls: ['./select-control.component.scss'],

  imports: [NzSelectModule, ReactiveFormsModule, CommonModule, ControlErrorsPipe],
})
export class SelectControlComponent extends BaseControl {
  @Input() options: any[];
}
