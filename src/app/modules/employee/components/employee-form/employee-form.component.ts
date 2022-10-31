import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Store } from '@ngrx/store';
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
export class EmployeeFormComponent {
  @ViewChild(EmployeeFormInfoComponent) InfoForm: EmployeeFormInfoComponent;

  @ViewChild(EmployeeFormCvComponent) CvForm: EmployeeFormCvComponent;

  private mergedForm: any;

  public roles: any;

  constructor(
    private employeeApiService: EmployeeApiService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store,
    private cdr: ChangeDetectorRef,
  ) {}

  public submitFormValue() {
    if (this.InfoForm.employeeForm.valid) {
      this.mergedForm = this.InfoForm.employeeForm.getRawValue();

      this.employeeApiService.postEmployee(this.mergedForm);
    }
  }

  public cancelFormSubmit() {
    this.router.navigate([EMPLOYEE_PATH.path]);
  }
}
