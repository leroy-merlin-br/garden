import notify from 'gulp-notify';
import chalk from 'chalk';

export default function(error) {
  notify.onError({
    title: 'PostCSS Error!',
    message: 'Check your terminal for more information.'
  })(error);

  console.log(chalk.cyan('Message: ') + chalk.red(error.message));

  this.emit('end');
};
