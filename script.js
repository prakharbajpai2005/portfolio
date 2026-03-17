var typed = new Typed("#typing", {
    strings: [
        "Developer",
        "Cybersecurity Enthusiast",
        "Problem Solver",
        "Tech Learner"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true
});
const skillSection = document.querySelector("#skills");
const skillBars = document.querySelectorAll(".skill-level");

function showSkills(){
    const sectionTop = skillSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight - 100;

    if(sectionTop < screenPosition){
        skillBars.forEach(bar => {
            bar.style.width = bar.getAttribute("data-width");
        });
    }
}

window.addEventListener("scroll", showSkills);
const toggleButton = document.getElementById("dark-mode-toggle");

toggleButton.addEventListener("click", () => {
document.body.classList.toggle("dark-mode");
});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight){
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }
    });
});

const projectContainer = document.getElementById("github-projects");

fetch("https://api.github.com/users/prakharbajpai2005/repos")
.then(response => response.json())
.then(data => {

    data.forEach(repo => {

        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");

        projectCard.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description ? repo.description : "No description available"}</p>
            <a href="${repo.html_url}" target="_blank" class="project-btn">
                View Code
            </a>
        `;

        projectContainer.appendChild(projectCard);
    });

});