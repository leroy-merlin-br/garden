'use strict';

import {exec} from 'child_process';

export default (done) => {
  return exec('./node_modules/.bin/metalsmith', () => done());
}
