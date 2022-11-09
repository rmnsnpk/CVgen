import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { BaseControl } from '../../classes/base-control';
import { ControlErrorsPipe } from '../../pipes/control-errors.pipe';
import { GetValueByKeyPipe } from '../../pipes/get-value-by-key.pipe';

@Component({
  selector: 'cvg-multi-select-control',
  standalone: true,
  templateUrl: './multi-select-control.component.html',
  styleUrls: ['./multi-select-control.component.scss'],

  imports: [NzSelectModule, ReactiveFormsModule, CommonModule, ControlErrorsPipe, TranslateModule, GetValueByKeyPipe],
})
export class MultiSelectControlComponent extends BaseControl {
  @Input() options: any[];

  @Input() valueField = 'id';

  @Input() labelField = 'name';
}
