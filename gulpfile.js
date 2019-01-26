var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('server', function(){
	browserSync.init({
		server: { baseDir: './app/'}
	});
	gulp.watch('app/**/*.html').on('change', browserSync.reload);
});

