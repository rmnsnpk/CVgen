import { ControlErrorsPipe } from './control-errors.pipe';

describe('ControlErrorsPipe', () => {
  it('create an instance', () => {
    const pipe = new ControlErrorsPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return error message', () => {
    const pipe = new ControlErrorsPipe();
    expect(pipe.transform({ required: true })).toEqual('CONTROLS.ERRORS.REQUIRED');
  });
});
