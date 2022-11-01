import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { createEmployee, loadSelectedEmployee } from 'src/app/ngrx/actions/employee.actions';
import { getSelectedEmployeeSelector } from 'src/app/ngrx/selectors/employee.selectors';
import { EMPLOYEE_PATH } from 'src/app/shared/constants/routing-paths.consts';
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

  private mergedForm: any;

  public roles: any;

  public selectedEmployee: Observable<Object>;

  constructor(
    private employeeApiService: EmployeeApiService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store,
    private cdr: ChangeDetectorRef,
  ) {}

  public submitFormValue() {
    if (this.InfoForm.employeeForm.invalid) {
      this.InfoForm.markFormAsDirty();
      return;
    }

    this.mergedForm = this.InfoForm.employeeForm.getRawValue();

    this.store.dispatch(createEmployee(this.mergedForm));
  }

  public saveFormValue() {
    if (this.InfoForm.employeeForm.invalid) {
      this.InfoForm.markFormAsDirty();
      return;
    }
  }

  public cancelFormSubmit() {
    this.router.navigate([EMPLOYEE_PATH.path]);
  }

  ngOnInit() {
    if (this.isEdit) {
      const employeeId = this.route.snapshot.paramMap.get('id');

      this.store.dispatch(loadSelectedEmployee({ selectedEmployee: employeeId }));
      this.selectedEmployee = this.store.select(getSelectedEmployeeSelector);

      // найти способ патчить велью во вьючаелд this.InfoForm.employeeForm.patchValue()
    }
  }
}
