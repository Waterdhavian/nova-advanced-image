let mix = require("laravel-mix");
let path = require("path");

require("./mix");

mix.setPublicPath("dist")
    .js("resources/js/field.js", "dist/js/nova-advanced-image.js")
    .vue({ version: 3 })
    .nova("waterdhavian/nova-advanced-image");
