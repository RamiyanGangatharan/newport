import plugin from'./11ty/plugins.js';
import passthru from './11ty/passthroughs.js';
import globals from './11ty/globalData.js';
import cleanup from './11ty/cleanup.js';

export default function(eleventyConfig) {
    const OUTPUT = "dist";
    const INPUT = "src";

    plugin(eleventyConfig);
    passthru(eleventyConfig);
    globals(eleventyConfig);
    cleanup(eleventyConfig, OUTPUT);
    
    return { dir: { output: OUTPUT, input: INPUT }};
}