const Zelixir = require('z-elixir');
const Resource = Zelixir.Resource;
const Task = Zelixir.Task;
const config = Zelixir.config;
const $ = Zelixir.modules;

config.enabledNgAnnotate = true;
config.enabledBabel = true;

Resource('html', Resource.template('html'));
Resource('sass', Resource.template('sass'));
Resource('js', Resource.template('js'));

Task('html', ['html'], Task.template('html'));
Task('sass', ['sass'], Task.template('sass'));
Task('js', ['js'], Task.template('js'));

Task.default();
Task.watch();

const BROWSER = require('browser-sync');
$.gulp.task('s', ['server']);
$.gulp.task('server', ()=> {
  BROWSER({
    server: {baseDir: 'public/'}
  });
});
