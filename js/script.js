document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("themeBtn");

    if (!button) return;

    button.addEventListener("click", () => {
        document.body.classList.toggle("light");

        localStorage.setItem(
            "theme",
            document.body.classList.contains("light") ? "light" : "dark"
        );
    });

    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light");
    }
});
