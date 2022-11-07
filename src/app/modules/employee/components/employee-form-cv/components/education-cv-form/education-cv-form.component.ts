import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cvg-education-cv-form',
  templateUrl: './education-cv-form.component.html',
  styleUrls: ['./education-cv-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EducationCvFormComponent {
  educationCvForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.educationCvForm = this.fb.group({
      establishment: ['', Validators.required],
      profession: ['', Validators.required],
      skills: [[], Validators.required],
    });
  }
}
