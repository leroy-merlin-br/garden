const exec = require('child_process').exec

module.exports = (done) => {
  return exec('node metalsmith', (err) => {
    if (err) {
      console.log(err)
    }

    done()
  })
}
