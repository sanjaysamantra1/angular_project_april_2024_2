import { OrdinalPipe } from './ordinal.pipe';

describe('OrdinalPipe', () => {
  it('create an instance', () => {
    const pipe = new OrdinalPipe();
    expect(pipe).toBeTruthy();
  });
  it('test transform()', () => {
    const pipe = new OrdinalPipe();
    expect(pipe.transform(31)).toBe('31st')
    expect(pipe.transform(32)).toBe('32nd')
    expect(pipe.transform(33)).toBe('33rd')
    expect(pipe.transform(34)).toBe('34th')
  });
});
