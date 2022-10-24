import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cvg-spinner',
  standalone: true,
  imports: [CommonModule, NzSpinModule],
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {}
