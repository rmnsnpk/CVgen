import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { NzTabPosition } from 'ng-zorro-antd/tabs';
import { loadLanguages } from 'src/app/ngrx/actions/languages.actions';
import { loadSkills } from 'src/app/ngrx/actions/skills.actions';
import { allLanguagesSelector } from 'src/app/ngrx/selectors/languages.selectors';
import { allSkillsSelector } from 'src/app/ngrx/selectors/skills.selectors';
import { IEmployeeDataLanguage, IEmployeeDataSkills } from 'src/app/shared/interfaces/employees.interface';

@UntilDestroy()
@Component({
  selector: 'cvg-employee-form-cv',
  templateUrl: './employee-form-cv.component.html',
  styleUrls: ['./employee-form-cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormCvComponent implements OnInit {
  tabs = ['Tab 1', 'Tab 2'];

  tabPosition: NzTabPosition = 'left';

  selectedIndex = 0;

  public languages: IEmployeeDataLanguage[];

  public skills: IEmployeeDataSkills[];

  cvForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store, private cdr: ChangeDetectorRef) {
    this.cvForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      department: ['', Validators.required],
      institution: ['', Validators.required],
      skills: [[], Validators.required],
      languages: [[], Validators.required],
      diplomaProfession: ['', Validators.required],
      id: [''],
    });
  }

  closeTab({ index }: { index: number }): void {
    this.tabs.splice(index, 1);
  }

  newTab(): void {
    this.tabs.push('New Tab');
    this.selectedIndex = this.tabs.length;
  }

  ngOnInit() {
    this.store.dispatch(loadLanguages());

    this.store.dispatch(loadSkills());

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
  }
}
