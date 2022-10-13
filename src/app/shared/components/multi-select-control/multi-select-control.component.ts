import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { BaseControl } from '../../classes/base-control';

@Component({
  selector: 'cvg-multi-select-control',
  standalone: true,
  templateUrl: './multi-select-control.component.html',
  styleUrls: ['./multi-select-control.component.scss'],

  imports: [NzSelectModule, ReactiveFormsModule, CommonModule],
})
export class MultiSelectControlComponent extends BaseControl {
  @Input() options: string[];

  multiSelectorControl = this.baseControl;
}
