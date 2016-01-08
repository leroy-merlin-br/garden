import {sum} from '../src/js/sample';

describe('sum sample', () => {

  it('should return the sum of two numbers', () => {
    
    expect(sum(1,1)).to.equal(2);
  });
});
