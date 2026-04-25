export default function (eleventyConfig) {

    eleventyConfig.addFilter("formatDate", (value) => {
        return new Intl.DateTimeFormat("pt-BR", {
            timeZone: "America/Sao_Paulo",
            day: "2-digit",
            month: "2-digit",
            year: "numeric"
        }).format(value);
    });

}
