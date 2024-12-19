import { marked } from 'marked';

async function fetchStrapiData(endpoint, description) {
    try {
        const response = await fetch(`http://localhost:1337/api/${endpoint}?populate=*`);
        if (!response.ok) { throw new Error(`Failed to fetch ${description}: ${response.statusText}`);}
        return (await response.json()).data;
    } 
    catch (error) {console.error(`Error fetching ${description} from Strapi:`, error); return [];}
}

async function fetchAndProcessData(endpoint, description) {
    const data = await fetchStrapiData(endpoint, description);
    const sortedData = data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    return sortedData.map(post => ({ ...post, Content: marked(post.Content) }));
}

export default function(eleventyConfig) {
    eleventyConfig.addGlobalData("bp", async () => await fetchAndProcessData("blogs", "blog posts"));
    eleventyConfig.addGlobalData("labs", async () => await fetchAndProcessData("labs", "lab content"));
    eleventyConfig.addGlobalData("assignments", async () => await fetchAndProcessData("assignments", "assignment content"));
    eleventyConfig.addGlobalData("WDF", async () => await fetchAndProcessData("notes", "WDF note content"));
    eleventyConfig.addGlobalData("CICS", async () => await fetchAndProcessData("mainframes", "CICS content"));
    eleventyConfig.addGlobalData("FP", async () => await fetchAndProcessData("field-placements", "FP content"));
    eleventyConfig.addGlobalData("about", async () => await fetchAndProcessData("aboutmes", "about content"));
}