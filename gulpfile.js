var gulp = require('gulp');
var	browserSync = require('browser-sync');
var	less = require('gulp-less');
var	notify = require('gulp-notify');
var	plumber = require('gulp-plumber');

gulp.task('less', function(){
	return gulp.src('./mypage/less/main.less')
		.pipe(plumber({
			errorHandler: notify.onError(function(err){
				return{
					title: "less",
					sound: false,
					message: err.message
				}
			})
		}))
		.pipe(less())
		.pipe(gulp.dest('./app/css'))
		.pipe(browserSync.stream());
});

gulp.task('server', gulp.series('less', function(){
	browserSync.init({
		server: { baseDir: './mypage/'}
	});
	gulp.watch('mypage/**/*.html').on('change', browserSync.reload);
    gulp.watch('mypage/**/*.js').on('change', browserSync.reload);
	gulp.watch('mypage/less/**/*.less', gulp.series('less'));

}));

gulp.task('default', gulp.series('server'));
