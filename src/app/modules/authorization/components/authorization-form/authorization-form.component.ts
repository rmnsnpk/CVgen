import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { TokenService } from 'src/app/shared/services/token.service';
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

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.authForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  authSubmit() {
    console.log(this.authForm);
  }
}
