const fs = require('fs');
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

const configObj = {
    dir: {
        input: "docs"
    }
};

// function escapeHTML(str) {
//     return str.replace(/[&<>'"]/g,
//         tag => ({
//             '&': '&amp;',
//             '<': '&lt;',
//             '>': '&gt;',
//             "'": '&#39;',
//             '"': '&quot;'
//         }[tag]));
// }

function getSourceCode(config, path) {
    // return process.cwd() + '/' + config.dir.input + '/' + path + '.code';
    var fileToProcess = process.cwd() + '/' + config.dir.input + path + '.code';
    // console.log('fileToProcess 1', fileToProcess)
    fileToProcess = fileToProcess.replace('/./', '/');
    // fileToProcess = fileToProcess.replace('/', '\\');
    // console.log('fileToProcess 2', fileToProcess)
    return fs.readFileSync(fileToProcess, 'utf8');
}

module.exports = function(eleventyConfig) {

    eleventyConfig.setUseGitIgnore(false);

    eleventyConfig.addWatchTarget("./dist/elements/");
    eleventyConfig.addWatchTarget("./docs/**/*.code");

    eleventyConfig.addPassthroughCopy({ "./node_modules/@princeton-design/design-system/jazz_fonts.css": "jazz_fonts.css" });
    eleventyConfig.addPassthroughCopy({ "./node_modules/@princeton-design/design-system/jazz_custom.css": "jazz_custom.css" });
    eleventyConfig.addPassthroughCopy({ "./node_modules/@princeton-design/design-system/jazz_curated_icons.css": "jazz_curated_icons.css" });
    eleventyConfig.addPassthroughCopy({ "dist/fonts": "fonts" });
    eleventyConfig.addPassthroughCopy({ "dist/icons": "icons" });
    eleventyConfig.addPassthroughCopy({ "dist/img": "img" });
    eleventyConfig.addPassthroughCopy({ "dist/logos": "logos" });
    eleventyConfig.addPassthroughCopy({ "docs/favicon.ico": "favicon.ico" });
    eleventyConfig.addPassthroughCopy({ "dist/elements/runtime.js": "runtime.js" });
    eleventyConfig.addPassthroughCopy({ "dist/elements/polyfills.js": "polyfills.js" });
    eleventyConfig.addPassthroughCopy({ "dist/elements/main.js": "main.js" });
    eleventyConfig.addPassthroughCopy({ "docs/css/prism-atom-dark.css": "prism-atom-dark.css" });

    eleventyConfig.addNunjucksShortcode("src", function(path) { return getSourceCode(configObj, path); });

    eleventyConfig.addPlugin(syntaxHighlight, {
        lineSeparator: "\n",
    });

    return configObj;
};
