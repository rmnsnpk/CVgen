import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { updateBreadcrumbsAction } from 'src/app/ngrx/actions/breadcrumbs.actions';
import { EMPLOYEES_ADD_BREADCRUMB } from 'src/app/shared/constants/breadcrumbs.consts';

@Component({
  selector: 'cvg-add-employee-page',
  templateUrl: './add-employee-page.component.html',
  styleUrls: ['./add-employee-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddEmployeePageComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(updateBreadcrumbsAction({ breadcrumbsUpdate: EMPLOYEES_ADD_BREADCRUMB }));
  }
}
