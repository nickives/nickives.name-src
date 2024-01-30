const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");

module.exports = function(eleventyConfig) {
    eleventyConfig.addPlugin(eleventySass);
    eleventyConfig.setBrowserSyncConfig({
        files: './_site/css/**/*.css'
    });
    eleventyConfig.addPassthroughCopy("assets");
    return {
        dir: {
            input: '_src',
            output: '_site'
        }
    };
};