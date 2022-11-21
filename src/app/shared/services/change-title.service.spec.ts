import { TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { ChangeTitleService } from './change-title.service';

describe('ChangeTitleService', () => {
  let service: ChangeTitleService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [ChangeTitleService],
    });
    service = TestBed.inject(ChangeTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
