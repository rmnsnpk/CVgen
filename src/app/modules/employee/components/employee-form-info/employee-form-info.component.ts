import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { loadLanguages } from 'src/app/ngrx/actions/languages.actions';
import { loadSkills } from 'src/app/ngrx/actions/skills.actions';
import { allLanguagesSelector } from 'src/app/ngrx/selectors/languages.selectors';
import { allSkillsSelector } from 'src/app/ngrx/selectors/skills.selectors';
import { IEmployeeDataLanguage, IEmployeeDataSkills } from 'src/app/shared/interfaces/employees.interface';
import { LanguagesApiService } from 'src/app/shared/services/api/languages-api.service';
import { SkillsApiService } from 'src/app/shared/services/api/skills.api.service';

@UntilDestroy()
@Component({
  selector: 'cvg-employee-form-info',
  templateUrl: './employee-form-info.component.html',
  styleUrls: ['./employee-form-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormInfoComponent implements OnInit {
  public employeeForm!: FormGroup;

  public languages: [];

  public skills: [];

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private skillsApi: SkillsApiService,
    private languageApi: LanguagesApiService,
    private cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.store.dispatch(loadLanguages());

    this.store.dispatch(loadSkills());

    this.store
      .select(allLanguagesSelector)
      .pipe(untilDestroyed(this))
      .subscribe((languages) => {
        this.cdr.markForCheck();
        this.languages = languages.map((item: IEmployeeDataLanguage) => item.name);
      });

    this.store
      .select(allSkillsSelector)
      .pipe(untilDestroyed(this))
      .subscribe((skills) => {
        this.cdr.markForCheck();
        this.skills = skills.map((item: IEmployeeDataSkills) => item.name);
      });

    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      department: ['', Validators.required],
      skills: [[], Validators.required],
      languages: [[], Validators.required],
      institution: ['', Validators.required],
      diplomaProfession: ['', Validators.required],
    });
  }
}
