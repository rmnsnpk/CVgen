import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateBreadcrumbsAction } from 'src/app/ngrx/actions/breadcrumbs.actions';
import { EMPLOYEES_BREADCRUMB } from 'src/app/shared/constants/breadcrumbs.consts';
@Component({
  selector: 'cvg-employee.page',
  templateUrl: './employee.page.component.html',
  styleUrls: ['./employee.page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeePageComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(updateBreadcrumbsAction({ breadcrumbsUpdate: EMPLOYEES_BREADCRUMB }));
  }
}
