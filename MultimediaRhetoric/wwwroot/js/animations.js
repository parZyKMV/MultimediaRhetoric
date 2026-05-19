window.portfolioAnimations = {
    animateHero: function () {
        anime({ targets: '.sl-system-tag', opacity: [0, 1], translateY: [16, 0], duration: 600, delay: 300, easing: 'easeOutExpo' });
        anime({ targets: '.sl-title', opacity: [0, 1], translateY: [20, 0], duration: 700, delay: 700, easing: 'easeOutExpo' });
        anime({ targets: '.sl-subtitle', opacity: [0, 1], translateY: [16, 0], duration: 700, delay: 1000, easing: 'easeOutExpo' });
        anime({ targets: '.sl-rank-badge', opacity: [0, 1], translateY: [12, 0], duration: 600, delay: 1300, easing: 'easeOutExpo' });
        anime({ targets: '.sl-stats', opacity: [0, 1], translateY: [12, 0], duration: 600, delay: 1600, easing: 'easeOutExpo' });
        anime({ targets: '.sl-enter-btn', opacity: [0, 1], duration: 600, delay: 2000, easing: 'easeOutExpo' });
    },
    animateSkills: function () {
        anime({
            targets: '.skill-bar-fill',
            width: function (el) { return el.getAttribute('data-width'); },
            duration: 1400,
            delay: anime.stagger(150),
            easing: 'easeInOutQuart'
        });
        anime({ targets: '.skill-card', opacity: [0, 1], translateX: [-20, 0], delay: anime.stagger(100), easing: 'easeOutExpo' });
    },
    animateDungeons: function () {
        anime({
            targets: '.dungeon-card',
            scale: [0.85, 1],
            opacity: [0, 1],
            delay: anime.stagger(120),
            easing: 'easeOutBack',
            duration: 700
        });
    }
};