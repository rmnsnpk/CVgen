import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { EMPLOYEE_PATH } from 'src/app/shared/constants/routing-paths.consts';
import { AuthApiService } from 'src/app/shared/services/api/auth.api.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { markAllAsDirty } from 'src/app/shared/utils/mark-all-as-dirty';

@Component({
  selector: 'cvg-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizationPageComponent {
  public authForm!: FormGroup;

  public isWrongAccount = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authApiService: AuthApiService,
    private authService: AuthService,
    private cdR: ChangeDetectorRef,
  ) {}

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  public ngOnInit(): void {
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public authSubmit(): void {
    if (this.authForm.invalid) {
      markAllAsDirty(this.authForm);
      return;
    }
    this.authApiService
      .login(this.authForm.getRawValue())
      .pipe(
        catchError((error) => {
          this.isWrongAccount = true;
          this.cdR.markForCheck();
          return of(error);
        }),
      )
      .subscribe((data) => {
        this.authService.setToken(data.accessToken, +data.expiresIn);
        this.router.navigate([`${EMPLOYEE_PATH.fullpath}`]);
      });
  }
}
