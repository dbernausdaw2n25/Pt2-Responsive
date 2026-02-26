const links = document.querySelectorAll('a[data-region]');
const backgrounds = document.querySelectorAll('.bg');
const mains = document.querySelectorAll('main');

let isAnimating = false;

function changeBackground(region) {
    if (isAnimating) return;

    const currentBg = document.querySelector('.bg.active');
    const targetBg = document.getElementById('bg-' + region);

    const currentMain = document.querySelector('main.active');
    const targetMain = document.querySelector('main.' + region);

    if (currentBg === targetBg) return;

    isAnimating = true;

    targetBg.classList.add('active', 'slide-in');
    currentBg.classList.add('slide-out');

    currentMain.classList.remove('active');
    targetMain.classList.add('active');

    setTimeout(() => {
        currentBg.classList.remove('active', 'slide-out');
        targetBg.classList.remove('slide-in');
        isAnimating = false;
    }, 600);
}

links.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const region = link.dataset.region;
        changeBackground(region);
    });
});