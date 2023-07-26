$(document).ready(function () {
    $("#seeMoreButton, #whatImDoing").click(function () {
        document.getElementById("scrollingTarget").scrollIntoView({ behavior: "smooth" })
    })
    $("#skills").click(function () {
        document.getElementById("skillTarget").scrollIntoView({ behavior: "smooth" })
    })
    $("#project").click(function () {
        document.getElementById("projectTarget").scrollIntoView({ behavior: "smooth" })
    })
    $("#aboutMe").click(function () {
        document.getElementById("aboutMeTarget").scrollIntoView({ behavior: "smooth" })
    })

});

window.addEventListener('scroll', function () {
    var navbar = document.querySelector('.float');
    if (window.scrollY > 0) {
        navbar.classList.add('d-block');
        navbar.classList.remove('d-none');
    } else {
        navbar.classList.remove('d-block');
        navbar.classList.add('d-none');
    }
});