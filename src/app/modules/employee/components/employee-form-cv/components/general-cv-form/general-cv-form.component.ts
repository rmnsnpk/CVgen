import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'cvg-general-cv-form',
  templateUrl: './general-cv-form.component.html',
  styleUrls: ['./general-cv-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneralCvFormComponent {
  generalCvForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.generalCvForm = this.fb.group({
      firstName: '',
      lastName: '',
    });
  }
}
