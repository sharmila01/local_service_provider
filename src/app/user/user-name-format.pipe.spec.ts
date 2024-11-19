import { UserNameFormatPipe } from './user-name-format.pipe';

describe('UserNameFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new UserNameFormatPipe();
    expect(pipe).toBeTruthy();
  });
});
