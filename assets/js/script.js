// loader
window.setTimeout(function () {
    $('.pf-loader').addClass('remove');
}, 2500);

window.setTimeout(function () {
    $('.pf-home').addClass('show');
}, 3000);

document.getElementsByTagName("body")[0].addEventListener("mousemove", function (n) {
    t.style.left = n.clientX + "px",
        t.style.top = n.clientY + "px",
        e.style.left = n.clientX + "px",
        e.style.top = n.clientY + "px",
        i.style.left = n.clientX + "px",
        i.style.top = n.clientY + "px"
});
var t = document.getElementById("cursor"),
    e = document.getElementById("cursor2");
function n(t) {
    e.classList.add("hover")
}
function s(t) {
    e.classList.remove("hover")
}
s();
for (var r = document.querySelectorAll(".hover-link"), a = r.length - 1; a >= 0; a--) {
    o(r[a])
}
function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
}
//Color change on scroll

$('.section-div:nth-child(1)').on('mouseover', function (event) {
    $('body').addClass('color-white');
});
$('.section-div:nth-child(1)').on('mouseout', function (event) {
    $('body').removeClass('color-white');
});
$('.hover-link.buffer').on('mouseover', function (event) {
    $('body').addClass('color-white');
});
$('.hover-link.buffer').on('mouseout', function (event) {
    $('body').removeClass('color-white');
});

$('.pf-hero-sec__head').on('mouseover', function (event) {
    $('body').addClass('preload1');
});
$('.pf-hero-sec__head').on('mouseout', function (event) {
    $('body').removeClass('preload1');
});

$('.section-div:nth-child(4)').on('mouseover', function (event) {
    $('body').addClass('color-blue');
});
$('.section-div:nth-child(4)').on('mouseout', function (event) {
    $('body').removeClass('color-blue');
});

$('.section-div:nth-child(5)').on('mouseover', function (event) {
    $('body').addClass('color-yellow');
});
$('.section-div:nth-child(5)').on('mouseout', function (event) {
    $('body').removeClass('color-yellow');
});

$('.section-div:nth-child(6)').on('mouseover', function (event) {
    $('body').addClass('color-violet');
});
$('.section-div:nth-child(6)').on('mouseout', function (event) {
    $('body').removeClass('color-violet');
});

// $('.section-div .buffer').on('mouseover', function (event) {
//     $('body').addClass('preload');
// });
// $('.section-div .buffer').on('mouseout', function (event) {
//     $('body').removeClass('preload');
// });

$('.section-div:nth-child(8)').on('mouseover', function (event) {
    $('body').addClass('preload1');
});
$('.section-div:nth-child(8)').on('mouseout', function (event) {
    $('body').removeClass('preload1');
});

$('.section-div:nth-child(9)').on('mouseover', function (event) {
    $('body').addClass('preload2');
});
$('.section-div:nth-child(9)').on('mouseout', function (event) {
    $('body').removeClass('preload2');
});

$('.section-div:nth-child(10)').on('mouseover', function (event) {
    $('body').addClass('bars');
});
$('.section-div:nth-child(10)').on('mouseout', function (event) {
    $('body').removeClass('bars');
});



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

//

