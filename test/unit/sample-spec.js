import test from 'ava';

import 'babel-core/register';

import sum from '../../src/js/sample';

test('sample', t => {
  t.same(sum(1, 1), 2);
});
