import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { spinnerSelector } from 'src/app/ngrx/selectors/spinner.selector';

@Component({
  selector: 'cvg-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  public requestsCount: Observable<Number>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.requestsCount = this.store.select(spinnerSelector);
  }
}
