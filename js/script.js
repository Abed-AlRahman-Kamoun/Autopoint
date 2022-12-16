const open_btn = document.querySelector('.open-btn');
const close_btn = document.querySelector('.close-btn');
const nav = document.querySelectorAll('.nav');
const link = document.querySelectorAll('.link');

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'));
});

close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'));
});

for (let i = 0; i < link.length; i++) {
    link[i].addEventListener("click", function() {
        nav.forEach(nav_el => nav_el.classList.remove('visible'));
    });
}