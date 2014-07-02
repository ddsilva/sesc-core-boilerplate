module.exports = (grunt) ->

  # These plugins provide necessary tasks.
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-less'

  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    coffee:
      conpile:
        expand : true
        src    : 'public/javascript/app/**/*.coffee'
        dest   : '.'
        ext    : '.js'

    less:
      siplan:
        options : yuicompress: true
        src     : 'public/less/test.less',
        dest    : 'public/stylesheets/test.min.css'

    watch:
      less:
        files   : 'public/less/**/*.less'
        tasks   : 'less'
        options : livereload: true
      coffee:
        files   : 'public/javascript/app/**/*.coffee'
        tasks   : 'coffee'
        options : livereload: true
      html:
        files   : ['index.html', '**/*.html']
        options : livereload: true

  # Default task.
  grunt.registerTask 'default', ['coffee', 'less']