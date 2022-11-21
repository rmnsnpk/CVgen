import { AUTH_PATH } from '../constants/routing-paths.consts';
import { TokenExpireGuard } from './token-expire.guard';

let guard: TokenExpireGuard;
let fakeAuthSetvice = jasmine.createSpyObj('AuthService', ['isLogged', 'isExpiredToken', 'logOut']);
let routerSpy = jasmine.createSpyObj('Router', ['navigate']);

describe('TokenExpireGuard', () => {
  beforeEach(() => {
    guard = new TokenExpireGuard(fakeAuthSetvice, routerSpy);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
  it('should return true if not logged', () => {
    fakeAuthSetvice.isLogged.and.returnValue(false);
    fakeAuthSetvice.isExpiredToken.and.returnValue(false);
    expect(guard.canActivate()).toBeTrue();
  });
  it('should return true if token expired', () => {
    fakeAuthSetvice.isLogged.and.returnValue(true);
    fakeAuthSetvice.isExpiredToken.and.returnValue(false);
    expect(guard.canActivate()).toBeTrue();
  });
  it('should navigate if logged and token expired', () => {
    fakeAuthSetvice.isLogged.and.returnValue(true);
    fakeAuthSetvice.isExpiredToken.and.returnValue(true);
    guard.canActivate();
    expect(routerSpy.navigate).toHaveBeenCalledWith([`${AUTH_PATH.fullpath}`]);
  });
  it('should return false if logged and token expired', () => {
    fakeAuthSetvice.isLogged.and.returnValue(true);
    fakeAuthSetvice.isExpiredToken.and.returnValue(true);
    expect(guard.canActivate()).toBeFalse();
  });
});
