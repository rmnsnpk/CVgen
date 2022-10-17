import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { EMPLOYEE_PATH } from 'src/app/shared/constants/routing-paths.consts';
import { AuthApiService } from 'src/app/shared/services/api/auth.api.service';

@Component({
  selector: 'cvg-authorization-form',
  templateUrl: './authorization-form.component.html',
  styleUrls: ['./authorization-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizationFormComponent implements OnInit {
  authForm!: FormGroup;

  isIncorrect = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private aRoute: ActivatedRoute,
    private authApiService: AuthApiService,
    private cdR: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  authSubmit() {
    if (this.authForm.valid) {
    }
    this.authApiService.logIn(this.authForm.value).subscribe({
      next: () => this.router.navigate([`${EMPLOYEE_PATH.fullpath}`], { relativeTo: this.aRoute }),
      error: () => {
        this.isIncorrect = true;
        this.cdR.markForCheck();
      },
    });
  }
}
