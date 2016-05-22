module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jsdoc: {
      doc: {
        src: ['index.js'],
        options: {
          destination: 'doc/',
          readme : 'README.md',
          template : 'node_modules/ink-docstrap/template',
          configure : 'conf.json'
        }
      }
    },
    shell: {
      update_doc: "git subtree push --prefix doc origin gh-pages"
    }
  });

  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('default', ['jsdoc:doc'])
  grunt.registerTask('update_doc', ['shell:update_doc']);
}
