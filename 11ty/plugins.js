import ejsPlugin from "@11ty/eleventy-plugin-ejs";
export default function(eleventyConfig) {
    eleventyConfig.addPlugin(ejsPlugin);
    eleventyConfig.setTemplateFormats(["md", "ejs", "njk"]);
}