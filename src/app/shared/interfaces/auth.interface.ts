export interface IAuthRequest {
  email: 'string';
  password: 'string';
}

export interface IAuthResponse {
  email: 'string';
  lastName: 'string';
  firstName: 'string';

  expiresIn: 'string';
  accessToken: 'string';
}
