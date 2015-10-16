var gulp = require('gulp');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var precss = require('precss');
var csswring = require('csswring');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var extender = require('gulp-html-extend')

// html extend

gulp.task('extend', function () {
    return gulp.src('./src/*.html')
    .pipe(extender({annotations:true,verbose:false})) // default options
		.pipe(gulp.dest('./'));
});

// 一般的 CSS 轉換

gulp.task('css', function () {

		var processors = [
			precss,
			csswring,
			autoprefixer({browsers: 'last 1 version'})
		];

    return gulp.src('./src/*.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./css'));
});


// 最佳化圖檔

gulp.task('images', function() {
  return gulp.src('./src/img/*')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngquant()]
    }))
    .pipe(gulp.dest('./img'));
});


// 啟動測試

gulp.task('serve', function() {

    browserSync.init({
        server: './'
    });

    gulp.watch('./src/*.css', ['css']).on('change', browserSync.reload);
    gulp.watch('./src/*.html', ['extend']).on('change', browserSync.reload);
    gulp.watch('./src/img/*').on('change', browserSync.reload);

});


// 預設行為

gulp.task('default', ['serve', 'images'], function(){
});