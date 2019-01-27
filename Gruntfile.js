module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        webdriver: {
            tests: {
                configFile: './openweathermaptest/config/suite.cucumber.conf.js'

            },

        },
    });


    grunt.loadNpmTasks('grunt-webdriver');

};
