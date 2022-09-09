// barba.init()

function mainAnimation() {
    gsap.from("#div4 img", {
        duration: 1,
        y: -150,
        x:-150,
        rotate:-10,
        opacity: 0,
    })
    gsap.from("#div2 h3,#div2 h4", {
        y:30,
        opacity:0,
        duration:1,
        rotateX:-90
    })
    gsap.from("#div3 h4", {
        y: "-500px",
        duration: 1,
        opacity: 0
    })
    gsap.from("#div3 h3", {
        // y: "-500px",
        duration: 1,
        ease: Power4.easeIn,
        opacity: 0
    })
    gsap.to("#part3 span",{
        delay:-0.7,
        opacity:1,
        stagger:{
            each:0.2
        }
    })
    gsap.to("#div1 span",{
        delay:-0.8,
        opacity:1,       
        stagger:{
            each:0.2
        }
    })

}

mainAnimation()

function pageTransition() {
    const tl = gsap.timeline()
    tl.to(".header", {
        zIndex: 1
    })
        .to(".page-transition1", {
            height: "100%",
            top: 0,
            duration: 0.5
        })
        .to(".page-transition2", {
            height: "100%",
            bottom: "0%",
            duration: 0.5,
            delay: "-0.5"
        })
        .to(".page-transition1", {
            height: "100%",
            top: "100%",
            duration: 0.5
        })
        .to(".page-transition2", {
            height: "100%",
            bottom: "100%",
            duration: 0.5,
            delay: "-0.5"
        })
        .to(".page-transition1", {
            height: "0%",
            top: "100%",
            duration: 0.5
        })
        .to(".page-transition2", {
            height: "0%",
            bottom: "100%",
            duration: 0.5,
            delay: "-0.5"
        })
        .to(".page-transition1", {
            top: "0%",
            duration: 0.1
        })
        .to(".page-transition2", {
            bottom: "0%",
            duration: 0.1,
            delay: "-0.1"
        })

        .set(".page-transition1", {
            top: "0%",
        })
        .set(".page-transition2", {
            bottom: "0%",
        })
}

// barba.init({
//     sync: true,
//     transitions: [
//         {
//             enter() {
//                 mainAnimation()
//             }
//         }
//     ]
// })

function delay(n) {
    n = n || 2000;
    return new Promise(function (done) {
        setTimeout(() => {
            done()
        }, n);
    })
}

barba.init({
    sync: true,
    transitions: [
        {
            async leave(data) {
                const done = this.async()
                pageTransition();
                await delay(1000)
                done();
            },
            async enter(data) {
                mainAnimation()
            }
        }
    ]
})