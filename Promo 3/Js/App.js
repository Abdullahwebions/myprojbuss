const NavBarLinks = document.querySelectorAll('.NavBtn');

NavBarLinks.forEach(btn => {
    btn.addEventListener('click', () => {
        NavBarLinks.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});

const Filters = document.querySelectorAll('.FilterBtn');

Filters.forEach(btn => {
    btn.addEventListener('click', () => {
        Filters.forEach(b => b.classList.remove('active'));

        btn.classList.add('active');
    });
});