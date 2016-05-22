module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jsdoc: {
      dist: {
        src: ['index.js'],
        options: {
          destination: './',
          readme : 'README.md',
          template : 'node_modules/ink-docstrap/template',
          configure : 'conf.json'
        }
      }
    },
    shell: {
      'updateDoc': {
        command: [
          'git checkout gh-pages',
          'git merge master'
        ].join('&&')
      }
    }
  });

  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('doc', ['shell:updateDoc','jsdoc']);
}
