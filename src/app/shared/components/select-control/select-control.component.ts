import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { BaseControl } from '../../classes/base-control';
import { ControlErrorsPipe } from '../../pipes/control-errors.pipe';
import { ControlOptionsPipe } from '../../pipes/control-options.pipe';

@Component({
  selector: 'cvg-select-control',
  standalone: true,
  templateUrl: './select-control.component.html',
  styleUrls: ['./select-control.component.scss'],

  imports: [NzSelectModule, ReactiveFormsModule, CommonModule, ControlErrorsPipe, ControlOptionsPipe, TranslateModule],
})
export class SelectControlComponent extends BaseControl {
  @Input() options: any[];

  @Input() labelField = 'name';

  @Input() valueField = 'id';
}
