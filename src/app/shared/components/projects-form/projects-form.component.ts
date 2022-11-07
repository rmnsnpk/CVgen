import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, forwardRef, Input, OnInit } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NgControl,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
  ValidationErrors,
  Validator,
  Validators,
} from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadProjectRoles } from 'src/app/ngrx/actions/project-roles.actions';
import { loadResponsibilities } from 'src/app/ngrx/actions/responsibilities.actions';
import { loadSpecializations } from 'src/app/ngrx/actions/specializations.actions';
import { allProjectRolesSelector } from 'src/app/ngrx/selectors/project-roles.selectors';
import { allResponsibilitiesSelector } from 'src/app/ngrx/selectors/responsibilities.selectors';
import { allSpecializationsSelector } from 'src/app/ngrx/selectors/specializations.selectors';
import { IListingData } from '../../interfaces/listing-data';
import { IProject } from '../../interfaces/projects.interface';
import { markAllAsDirty } from '../../utils/mark-all-as-dirty';
import { DatePickerControlComponent } from '../date-piker-control/date-piker-control.component';
import { InputControlComponent } from '../input-control/input-control.component';
import { MultiSelectControlComponent } from '../multi-select-control/multi-select-control.component';
import { NumInputControlComponent } from '../num-input-control/num-input-control.component';
import { SelectControlComponent } from '../select-control/select-control.component';
import { TextAreaControlComponent } from '../text-area-control/text-area-control.component';

@Component({
  selector: 'cvg-projects-form',
  templateUrl: './projects-form.component.html',
  styleUrls: ['./projects-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputControlComponent,
    DatePickerControlComponent,
    MultiSelectControlComponent,
    NumInputControlComponent,
    SelectControlComponent,
    TextAreaControlComponent,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ProjectsFormComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => ProjectsFormComponent),
      multi: true,
    },
    {
      provide: NgControl,
      useExisting: forwardRef(() => ProjectsFormComponent),
      multi: true,
    },
  ],
})
@UntilDestroy()
export class ProjectsFormComponent implements OnInit, DoCheck, ControlValueAccessor, Validator {
  @Input() projectsFromFields: IProject;

  public projectsForm: FormGroup;

  public specializations$: Observable<IListingData[]>;

  public projectRoles$: Observable<IListingData[]>;

  public responsibilities$: Observable<IListingData[]>;

  public ngControl: FormControl;

  constructor(private store: Store, private cdR: ChangeDetectorRef) {}

  ngDoCheck(): void {
    if (this.ngControl?.touched) {
      markAllAsDirty(this.projectsForm);
      this.cdR.markForCheck();
    }
  }

  ngOnInit(): void {
    this.store.dispatch(loadSpecializations());
    this.store.dispatch(loadProjectRoles());
    this.store.dispatch(loadResponsibilities());

    this.specializations$ = this.store.select(allSpecializationsSelector);
    this.projectRoles$ = this.store.select(allProjectRolesSelector);
    this.responsibilities$ = this.store.select(allResponsibilitiesSelector);

    this.projectsForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      secondName: new FormControl('', [Validators.required]),
      teamSize: new FormControl('', [Validators.required]),
      startDate: new FormControl('', [Validators.required]),
      endDate: new FormControl('', [Validators.required]),
      projectRoles: new FormControl([], [Validators.required]),
      specializations: new FormControl([], [Validators.required]),
      responsibilities: new FormControl([], [Validators.required]),
      description: new FormControl('', [Validators.required]),
      tasksPerformed: new FormControl('', [Validators.required]),
    });
    this.projectsForm.valueChanges.pipe(untilDestroyed(this)).subscribe((value) => {
      this.onChange(value);
    });
  }

  public onTouched = (): void => undefined;

  public onChange = (value: IProject): any => value;

  public writeValue(val: any): void {
    if (val) {
      this.projectsForm.patchValue(val, { emitEvent: true });
    }
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  public validate(control: FormControl): ValidationErrors | null {
    if (!this.ngControl) {
      this.ngControl = control;
    }
    return this.projectsForm.valid ? null : { invalidForm: { valid: false, message: 'Please specify the form' } };
  }
}
