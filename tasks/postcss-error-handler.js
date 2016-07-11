const notify = require('gulp-notify')
const chalk = require('chalk')

// keep pipe context
module.exports = function (error) {
  notify.onError({
    title: 'PostCSS Error!',
    message: 'Check your terminal for more information.'
  })(error)

  console.log(chalk.cyan('Message: ') + chalk.red(error.message))

  this.emit('end')
}
