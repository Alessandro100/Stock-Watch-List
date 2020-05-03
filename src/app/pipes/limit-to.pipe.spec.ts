import { LimitToPipe } from './limit-to.pipe';

describe('LimitToPipe', () => {
  it('create an instance', () => {
    const pipe = new LimitToPipe();
    expect(pipe).toBeTruthy();
  });

  it('limit the array', () => {
    const pipe = new LimitToPipe();
    let testArray = [1,2,3,4,5]
    expect(pipe.transform(testArray, 2).length).toEqual(2)
  })
});
