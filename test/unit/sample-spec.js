import test from 'tape';

import {sum} from '../../src/js/sample';

test('sample', t => {
  t.equal(sum(1, 1), 2);
  t.end();
});
