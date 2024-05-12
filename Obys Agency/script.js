function loadingAnimation() {
    let h5timer = document.querySelector(".line1-part1 h5");

    gsap.from(".line h1", {
        y: 150,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5,
    })

    gsap.from(".line h2", {
        y: 150,
        stagger: 0.25,
        duration: 0.6,
        delay: 0.5,
    })

    let tl = gsap.timeline();
    tl.from(".line1-part1", {
        opacity: 0,
        onStart: function () {
            let grow = 0;
            setInterval(() => {
                if (grow < 100) {
                    h5timer.textContent = grow++;
                } else {
                    h5timer.textContent = grow;
                }
            }, 35);
        },
    })

    tl.to(".line h2", {
        animationName: "nowanime",
        opacity: 1,
    })

    tl.to("#loader", {
        opacity: 0,
        duration: 0.2,
        delay: 0,
    })

    tl.from("#page1", {
        delay: 1,
        y: 1600,
        opacity: 0,
        duration: 0.5,
        ease: Power4,
    })

    tl.to("#loader", {
        display: "none",
    })

    tl.from("#nav", {
        opacity:0,
    })

    tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1,#hero3 h3", {
        y:120,
        stagger:0.2,
    })
}
function cursorAnimation() {
    let crsr = document.querySelector(".crsr")

    document.addEventListener("mousemove", function (details) {
        gsap.to(crsr, {
            left: details.x,
            top: details.y,
        })
    })

    Shery.makeMagnet("#nav-part2 h4");
}
loadingAnimation();
cursorAnimation();