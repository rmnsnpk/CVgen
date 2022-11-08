import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { loadSelectedEmployee } from 'src/app/ngrx/actions/employee.actions';
import { getSelectedEmployeeSelector } from 'src/app/ngrx/selectors/employee.selectors';
import { EMPLOYEE_PATH } from 'src/app/shared/constants/routing-paths.consts';
import { IEmployee, ISelectedEmployee } from 'src/app/shared/interfaces/employees.interface';
import { EmployeeApiService } from 'src/app/shared/services/api/employee.api.service';
import { EmployeeFormCvComponent } from '../employee-form-cv/employee-form-cv.component';
import { EmployeeFormInfoComponent } from '../employee-form-info/employee-form-info.component';

@UntilDestroy()
@Component({
  selector: 'cvg-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFormComponent implements OnInit {
  @ViewChild(EmployeeFormInfoComponent) InfoForm: EmployeeFormInfoComponent;

  @ViewChild(EmployeeFormCvComponent) CvForm: EmployeeFormCvComponent;

  @Input() isEdit: boolean;

  @Output() public employeeSubmit = new EventEmitter<IEmployee>();

  public roles: any;

  public selectedEmployee: ISelectedEmployee | IEmployee | any;

  public employeeId: string;

  constructor(
    private employeeApiService: EmployeeApiService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store,
    private cdr: ChangeDetectorRef,
  ) {}

  public submitFormValue(): void {
    if (this.InfoForm.employeeForm.invalid) {
      this.InfoForm.markFormAsDirty();
      return;
    }

    this.employeeSubmit.emit(this.InfoForm.employeeForm.getRawValue());
  }

  public cancelFormSubmit(): void {
    this.router.navigate([EMPLOYEE_PATH.path]);
  }

  ngOnInit(): void {
    if (this.isEdit) {
      this.employeeId = this.route.snapshot.paramMap.get('id');
      this.store.dispatch(loadSelectedEmployee({ selectedEmployee: this.employeeId }));
      this.store
        .select(getSelectedEmployeeSelector)
        .pipe(untilDestroyed(this))
        .subscribe((data) => {
          this.selectedEmployee = data;
          this.cdr.markForCheck();
        });
    }
  }
}
