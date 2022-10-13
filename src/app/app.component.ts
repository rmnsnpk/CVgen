import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'cvg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
// , DoCheck
export class AppComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      inputName: ['', [Validators.required]],
      inputNumber: [null, [Validators.required]],
      select: ['', [Validators.required]],
      multiSelect: [null, [Validators.required]],
      datePicker: ['', [Validators.required]],
    });
  }
}
