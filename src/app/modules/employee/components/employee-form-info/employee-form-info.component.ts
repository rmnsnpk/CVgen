import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { loadLanguages } from 'src/app/ngrx/actions/languages.actions';
import { loadRoles } from 'src/app/ngrx/actions/roles.action';
import { loadSkills } from 'src/app/ngrx/actions/skills.actions';
import { getSelectedEmployeeSelector } from 'src/app/ngrx/selectors/employee.selectors';
import { allLanguagesSelector } from 'src/app/ngrx/selectors/languages.selectors';
import { allRolesSelector } from 'src/app/ngrx/selectors/roles.selectors';
import { allSkillsSelector } from 'src/app/ngrx/selectors/skills.selectors';
import { IEmployee, IEmployeeDataLanguage, IEmployeeDataRoles, IEmployeeDataSkills } from 'src/app/shared/interfaces/employees.interface';
import { LanguagesApiService } from 'src/app/shared/services/api/languages-api.service';
import { SkillsApiService } from 'src/app/shared/services/api/skills.api.service';
import { markAllAsDirty } from 'src/app/shared/utils/mark-all-as-dirty';

@UntilDestroy()
@Component({
  selector: 'cvg-employee-form-info',
  templateUrl: './employee-form-info.component.html',
  styleUrls: ['./employee-form-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormInfoComponent implements OnInit, OnChanges {
  @Input() selectedEmployee: IEmployee;

  public employeeForm!: FormGroup;

  public languages: [];

  public skills: [];

  public roles: [];

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private skillsApi: SkillsApiService,
    private languageApi: LanguagesApiService,
    public cdr: ChangeDetectorRef,
  ) {}

  ngOnInit() {
    this.store.dispatch(loadLanguages());

    this.store.dispatch(loadSkills());

    this.store.dispatch(loadRoles());

    this.store
      .select(allLanguagesSelector)
      .pipe(untilDestroyed(this))
      .subscribe((languages) => {
        this.cdr.markForCheck();
        this.languages = languages.map((item: IEmployeeDataLanguage) => item);
      });

    this.store
      .select(allSkillsSelector)
      .pipe(untilDestroyed(this))
      .subscribe((skills) => {
        this.cdr.markForCheck();
        this.skills = skills.map((item: IEmployeeDataSkills) => item);
      });

    this.store
      .select(allRolesSelector)
      .pipe(untilDestroyed(this))
      .subscribe((roles) => {
        this.cdr.markForCheck();
        this.roles = roles.map((item: IEmployeeDataRoles) => item);
      });

    this.employeeForm = this.fb.group({
      password: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      department: ['', Validators.required],
      skills: [[], Validators.required],
      languages: [[], Validators.required],
      institution: ['', Validators.required],
      diplomaProfession: ['', Validators.required],
      role: ['', Validators.required],
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['selectedEmployee'] && changes['selectedEmployee'].currentValue && this.employeeForm) {
      this.store.select(getSelectedEmployeeSelector).subscribe((data) => this.employeeForm.patchValue(data));
      this.cdr.markForCheck();
    }
  }

  public markFormAsDirty() {
    markAllAsDirty(this.employeeForm);
    this.cdr.markForCheck();
  }
}
