'use strict';

import {exec} from 'child_process';

export default function(done) {
  return exec('./node_modules/.bin/metalsmith', () => done());
}
