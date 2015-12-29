'use strict';

import {exec} from 'child_process';

export default (done) => {
  return exec('node metalsmith', (err) => {
    if (err) {
      console.log(err);
    }

    done();
  });
}
