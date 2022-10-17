import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { EMPLOYEE_PATH } from 'src/app/shared/constants/routing-paths.consts';
import { AuthApiService } from 'src/app/shared/services/api/auth.api.service';

import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'cvg-authorization-form',
  templateUrl: './authorization-form.component.html',
  styleUrls: ['./authorization-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizationFormComponent implements OnInit {
  authForm!: FormGroup;

  isSubmitted = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private aRoute: ActivatedRoute,
    private authService: AuthService,
    private authApiService: AuthApiService,
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
    this.authApiService.logIn(this.authForm.value).subscribe(() => {
      this.router.navigate([`${EMPLOYEE_PATH.fullpath}`], { relativeTo: this.aRoute });
    });
  }
}
