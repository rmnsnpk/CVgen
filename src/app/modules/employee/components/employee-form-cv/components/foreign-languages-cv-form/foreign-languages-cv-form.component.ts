import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { allLanguagesSelector } from 'src/app/ngrx/selectors/languages.selectors';
import { IEmployeeDataLanguage } from 'src/app/shared/interfaces/employees.interface';

@Component({
  selector: 'cvg-foreign-languages-cv-form',
  templateUrl: './foreign-languages-cv-form.component.html',
  styleUrls: ['./foreign-languages-cv-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ForeignLanguagesCvFormComponent implements OnInit {
  foreignLanguagesCvForm: FormArray;

  public languages: IEmployeeDataLanguage[];

  foreignLanguages: any;

  constructor(private fb: FormBuilder, private store: Store) {
    this.foreignLanguagesCvForm = this.fb.array([]);
  }

  addLanguage() {
    this.foreignLanguagesCvForm.push(
      this.fb.group({
        name: 'string',
        everydayReadingLevel: 'string',
        everydayWritingLevel: 'string',
        everydaySpeakingLevel: 'string',
        professionalReadingLevel: 'string',
        professionalWritingLevel: 'string',
        professionalSpeakingLevel: 'string',
      }),
    );
  }

  ngOnInit() {
    this.store.select(allLanguagesSelector).subscribe((lang) => (this.languages = lang));
    console.log(this.languages);
  }
}
