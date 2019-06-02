import { PowerPipe } from './power.pipe';

fdescribe('PowerPipe', () => {
  it('create an instance', () => {
    const pipe = new PowerPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return power of 2',()=>{
    const pipe = new PowerPipe();
    expect(pipe.transform(2,1)).toBe(2)
  })
});
