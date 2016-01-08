import {sum, product} from '../src/js/sample';

describe('sum sample', () => {

  it('should return the sum of two numbers', () => {

    expect(sum(1, 1)).to.equal(2);
  });

  it('should return the product of two numbers', () => {

    expect(product(2, 2)).to.equal(4);
  });
});
