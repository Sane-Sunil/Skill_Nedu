let courseLink = document.getElementById("cor");

courseLink.addEventListener("click", function() {
    if (courseLink.innerText === "Course") {
        courseLink.textContent = "Home";
        courseLink.href = "#course-details";
    } else {
        courseLink.textContent = "Course";
        courseLink.href = "#";
    }
});

let navbarToggler = document.getElementById("navbar-toggler");
let navbarMenu = document.getElementById("navbar-menu");

navbarToggler.addEventListener("click", function() {
    if (navbarMenu.style.display === "flex") {
        navbarMenu.style.display = "none";
        navbarToggler.classList.remove("open");
    } else {
        navbarMenu.style.display = "flex";
        navbarToggler.classList.add("open");
    }
});