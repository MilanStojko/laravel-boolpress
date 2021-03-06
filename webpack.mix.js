const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js("resources/js/admin/app.js", "public/js").sass(
    "resources/sass/admin/app.scss",
    "public/css"
);

mix.js("resources/js/guest/front.js", "public/js").sass(
    "resources/sass/guest/front.scss",
    "public/css"
);
