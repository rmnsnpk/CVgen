import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { breadcrumbsSelector } from 'src/app/ngrx/selectors/breadcrumbs.selector';
import { Breadcrumb } from 'src/app/shared/interfaces/breadcrumbs';

@Component({
  selector: 'cvg-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubheaderComponent implements OnInit {
  currentBreadcrumbs: Observable<Breadcrumb[]>;

  constructor(private router: Router, private store: Store, private cdR: ChangeDetectorRef) {}

  ngOnInit() {
    this.currentBreadcrumbs = this.store.select(breadcrumbsSelector);
  }

  redirect(url: string) {
    if (url) {
      this.router.navigateByUrl(url);
    }
  }
}
