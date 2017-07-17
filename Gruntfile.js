module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
      dir: {
          src:'src',
          develop:'develop',
          release:'release',
          js: 'js',
          css: 'css',
          img:'img',
          sass:'sass',
          font:'font'
      },
      copy: {
        html: {
          expand: true,
          cwd: '<%= dir.develop %>/',
          src: ['**/*.html'],
          dest: '<%= dir.release %>/'
        },
        css: {
          expand: true,
          cwd: '<%= dir.develop %>/',
          src: ['<%= dir.css %>/*.css'],
          dest: '<%= dir.release %>/'
        },
        images: {
          expand: true,
          cwd: '<%= dir.develop %>/',
          src: ['<%= dir.img %>/**'],
          dest: '<%= dir.release %>/'
        },
        js: {
          expand: true,
          cwd: '<%= dir.develop %>/',
          src: ['<%= dir.js %>/**'],
          dest: '<%= dir.release %>/'
        },
        files: {
          expand: true,
          cwd: '<%= dir.develop %>/',
          src: ['<%= dir.font %>/**'],
          dest: '<%= dir.release %>/',
          filter: 'isFile'
        }
    },
    autoprefixer: {
        target: {
            src :'<%= dir.develop %>/<%= dir.css %>/*.css',
            dest :'<%= dir.develop %>/<%= dir.css %>/*.css',
        }
    },
    cssmin: {
        target: {
            src :'<%= dir.develop %>/<%= dir.css %>/*.css',
            dest :'<%= dir.develop %>/<%= dir.css %>/*.css',
        }
    },
    uglify: {
        target: {
           src: '<%= dir.release %>/<%= dir.js %>/motion.js',
           dest: '<%= dir.release %>/<%= dir.js %>/motion.js',
        }
    },
    imagemin: {
        target: {
            expand: true,
             src: ['<%= dir.develop %>/<%= dir.img %>**'],
            dest: ['<%= dir.release %>/<%= dir.img %>/**']
        }
    },
    compass: {
      dist: {
        options: {
          config: ['<%= dir.develop %>/config.rb'],
          basePath: ['<%= dir.develop %>'],
        }
      }
    },
    browserSync: {
      files: {
        src : [
          '<%= dir.develop %>/**/*.css',
          '<%= dir.develop %>/<%= dir.js %>/**/*.js', //webpackのbuild時に走ってしまうため、jsディレクトリに限定
          '<%= dir.develop %>/**/*.html',
        ]
      },
      options: {
        server: {
          watchTask: true,
          baseDir: "./develop/"
        }
      }
    },
    //ファイルを監視して自動でタスクを実行
    watch: {
        sass: {
            files: ['<%= dir.develop %>/<%= dir.sass %>/*.scss'],
            tasks: ['compass']//対象が変更されると実行されるタスク
        },
        scripts: {
            files: ['<%= dir.develop %>/<%= dir.js %>/**/*.js'],
            tasks: []
        },
        images: {
            files: ['<%= dir.develop %>/<%= dir.img %>/**/*.{png,jpg,gif}'],
            tasks: ['imagemin']
        },
        // html_files: {
        //     files: ['<%= dir.develop %>/**/*.html'],
        //     tasks: []
        // },
    },
  });
  //プラグイン名で読み込む
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('release', ['copy','cssmin','autoprefixer','uglify']);
  grunt.registerTask('default', ['browserSync','watch']);
};