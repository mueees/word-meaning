module.exports = {
    build_dir: 'build',
    compile_dir: 'bin',
    compile_dir_scripts_temp: 'bin/scripts/temp',

    app_files: {
        js: {
            //angular templates
            templates: ['app/scripts/**/*.view.html'],

            //all js unit tests
            jsunit: [ 'app/scripts/**/*.test.js' ],

            // main module (rss)
            app: [
                'app/scripts/app/seed.module.js',
                'app/scripts/app/seed.*.js',
                '!app/scripts/app/*.test.js'
            ],

            // all js application file without main, core and unit test
            pages: [
                'app/scripts/pages/**/*.module.js',
                'app/scripts/pages/**/*.config.js',
                'app/scripts/pages/**/*.route.js',
                'app/scripts/pages/**/*.constant.js',
                'app/scripts/pages/**/*.value.js',
                'app/scripts/pages/**/*.run.js',
                'app/scripts/pages/**/*.service.js',
                'app/scripts/pages/**/*.resource.js',
                'app/scripts/pages/**/*.class.js',
                'app/scripts/pages/**/*.directive.js',
                'app/scripts/pages/**/*.controller.js',
                'app/scripts/pages/**/*.filter.js',
                '!app/scripts/pages/**/*.test.js'
            ],

            core: [
                'app/scripts/core/globals/*.js',
                'app/scripts/core/**/*.module.js',
                'app/scripts/core/**/*.config.js',
                'app/scripts/core/**/*.route.js',
                'app/scripts/core/**/*.constant.js',
                'app/scripts/core/**/*.value.js',
                'app/scripts/core/**/*.run.js',
                'app/scripts/core/**/*.service.js',
                'app/scripts/core/**/*.resource.js',
                'app/scripts/core/**/*.class.js',
                'app/scripts/core/**/*.directive.js',
                'app/scripts/core/**/*.controller.js',
                'app/scripts/core/**/*.filter.js',
                '!app/scripts/core/**/*.test.js'
            ],

            all: [
                'app/scripts/**/*.js',
                '!app/scripts/**/*.test.js'
            ],

            html: [
                'app/index.html'
            ],

            test: [
                'app/vendor/jquery/dist/jquery.js',
                'app/vendor/jasmine-jquery/lib/jasmine-jquery.js'
            ]
        },

        stylus: {
            default: 'app/stylus/default.styl',
            dark: 'app/stylus/dark.styl'
        },

        html: 'app/index.html'
    },

    vendor_files: {
        js: [
            'app/vendor/angular-1.3.15/angular.js',
            'app/vendor/underscore-1.8.2/underscore.js',
            'app/vendor/restangular-1.4.0/restangular.js',
            'app/vendor/angular-growl-0.4.0/angular-growl.js',
            'app/vendor/angular-mocks-1.2.28/angular-mocks.js',
            'app/vendor/angular-sanitize/angular-sanitize.js',
            'app/vendor/angular-touch/angular-touch.min.js',
            'app/vendor/angular-ui-router/release/angular-ui-router.min.js',
            /*'app/vendor/angular-animate/angular-animate.min.js',*/
            'app/vendor/angular-busy/dist/angular-busy.min.js',
            'app/vendor/ngstorage/ngStorage.js'
        ],
        css: [
            'app/vendor/bootstrap/dist/css/bootstrap.css',
            'app/vendor/angular-busy/angular-busy.css'
        ],
        fonts: [
            'app/vendor/bootstrap/fonts/*'
        ],
        assets: []
    }
};