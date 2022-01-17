let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'frontend/js/app.js').sass('resources/scss/app.scss','frontend/css/app.css');