gsap.to('.px-forest__outer', {
    scrollTrigger: {
        scrub: true
    },
    width: '25%',
})
gsap.to('.navbar-collapse', {
    scrollTrigger: {
        scrub: true,
    },
    display: 'none',
    opacity: 0,
    transitiondelay: '0.6s',
})
gsap.to('.navbar-nav', {
    scrollTrigger: {
        scrub: true,
    },
    display: 'none',
    opacity: 0,
    ease: "power4.in"
},)
gsap.to('.navbar-toggler', {
    scrollTrigger: {
        scrub: true,
    },
    display: 'block',
    transition: '0.6s',
})
gsap.to('.px-forest__title', {
    scrollTrigger: {
        scrub: 0.25,
    },
    fontSize: 35,
}, .05)
gsap.to('.px-forest__btn', {
    scrollTrigger: {
        scrub: 0.25,
    },
    fontSize: 14,
}, .05)
gsap.to('.px-forest__desc', {
    scrollTrigger: {
        scrub: true,
    },
    textAlign: 'center',
    transition: '0.6s',
}, .05)