export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/img");
    eleventyConfig.addPassthroughCopy("404.ejs");
}