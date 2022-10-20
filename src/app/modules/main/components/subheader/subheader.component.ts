import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { breadcrumbsSelector } from 'src/app/ngrx/selectors/breadcrumbs.selector';
import { Breadcrumbs } from 'src/app/shared/interfaces/breadcrumbs';

@Component({
  selector: 'cvg-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SubheaderComponent implements OnInit {
  currentBreadcrumbs: Breadcrumbs[];

  constructor(private router: Router, private store: Store, private cdR: ChangeDetectorRef) {}

  ngOnInit() {
    this.store.select(breadcrumbsSelector).subscribe((breadcrumbs) => {
      this.cdR.markForCheck();
      this.currentBreadcrumbs = breadcrumbs;
    });
  }

  nav(url: string) {
    if (url) {
      this.router.navigateByUrl(url);
    }
  }
}
