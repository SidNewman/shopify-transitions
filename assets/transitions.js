!function(){
    const activeTrans = document.querySelector('body').dataset.trans;
    barba.init({
        sync: true,
        debug: true,
        // prevent: ({ el }) => el.classList && el.classList.contains('full-unstyled-link'),
       views: [{
            namespace: 'home',
            beforeEnter(data) {
             
            },
            enter(data) {
                
            },
            once(data) {
                
            },
            afterLeave(data) {
            }
        },
        {
            namespace: 'pdp',
            async beforeEnter(data){
              console.log('pdp');
            }
        }
        ],
        transitions: [{
            async leave() {
                let done = this.async();
                pageTrans();
                pageOut();
                await delay(500);
                done();
            },
            async enter() {
                pageIn();
            },
            async once() {
                pageIn();
            }
        }]
    })

    barba.hooks.enter(function () {
        window.scrollTo(0, 0);
    });
    barba.hooks.leave(function () {
        window.scrollTo(0, 0);
    });
    if (window.document.documentMode){
        barba.destroy();
    }
}();


const delay = (t) => {
    t = t || 1000;
    return new Promise(function(done){
        setTimeout(function() {
            done();
        }, t);
    });
}

const pageIn = (e) => {
    const tl = new TimelineMax({
        ease: Expo.easeInOut
    });
    tl.set(".content", {
        opacity: 1,
    })
        .to(".content", .5, {
            opacity: 1,
        }, .1)
}

const pageTrans = (e) => {
    const tl = new TimelineMax();
    tl.set('.trans-pane', {
        x: '-100%',
        display: 'block'
    })
        .staggerTo('.trans-pane', .3, {
            x: 0,
        }, .1)
        .staggerTo('.trans-pane', .3, {
            x: '100%',
        }, .1)
        .set('.trans-pane', { display: 'none' })
}

const pageOut = (e) => {
    const tl = new TimelineMax({
        ease: Expo.easeInOut
    });
    tl.to(".content", .5, {
        opacity: 0
    })
}