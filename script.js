//show the navbar container when I click on the nav-button icon
var btn = document.getElementById("fa-button");
btn.addEventListener('click', function () {
    document.getElementById('nav-items').classList.toggle('nav-items-show');
    btn.classList.toggle("fa-times");
});
