import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increaseRequestsCount, decreaseRequestsCount } from 'src/app/ngrx/actions/core.actions';
import { spinnerSelector } from 'src/app/ngrx/selectors/core.selectors';

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
    setTimeout(() => {
      this.store.dispatch(increaseRequestsCount());
    }, 5000);
    setTimeout(() => {
      this.store.dispatch(decreaseRequestsCount());
    }, 10000);
    this.requestsCount = this.store.select(spinnerSelector);
  }
}
