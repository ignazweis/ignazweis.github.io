export default function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("js");
    eleventyConfig.addFilter("formatDate", (value) => {
        const [year, month, day] = value.toISOString().split("T")[0].split("-");
        return `${day}/${month}/${year}`;
    });
}
