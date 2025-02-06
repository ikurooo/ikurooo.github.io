document.getElementById("resume").addEventListener("click", function () {
    window.location.href = "pdf/resume.pdf"
});

document.getElementById("aboutme").addEventListener("click", function () {
    document.getElementById("about-section").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("projects").addEventListener("click", function () {
    window.location.href = "projects.html"
});
