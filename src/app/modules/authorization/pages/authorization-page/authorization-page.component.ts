import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { catchError, of } from 'rxjs';
import { EMPLOYEE_PATH } from 'src/app/shared/constants/routing-paths.consts';
import { AuthApiService } from 'src/app/shared/services/api/auth.api.service';
import { AuthService } from 'src/app/shared/services/auth.service';
import { markAllAsDirty } from 'src/app/shared/utils/mark-all-as-dirty';

@UntilDestroy()
@Component({
  selector: 'cvg-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizationPageComponent implements OnInit {
  public authForm!: FormGroup;

  public isWrongAccount = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authApiService: AuthApiService,
    private authService: AuthService,
    private cdR: ChangeDetectorRef,
  ) {}

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
        untilDestroyed(this),
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
