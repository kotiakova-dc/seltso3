import $ from "jquery";

const cowOneAnimation = new TimelineMax({ repeat: -1 });
const cowTwoAnimation = new TimelineMax({ repeat: -1 });
const cowThreeAnimation = new TimelineMax({ repeat: -1 });
const cowFourAnimation = new TimelineMax({ repeat: -1 });
const cowSmAnimation = new TimelineMax({ repeat: -1 });
const cowFiveAnimation = new TimelineMax({paused:true});

cowOneAnimation
  // head
  .to(".cow-head-1", 2, {
    rotation: -30,
  })
  .to(".cow-head-1", 2, {
    rotation: 0,
    delay: 2,
  })
  .to(
    ".cow-tail-1",
    2,
    {
      rotation: 45,
      transformOrigin: "left top",
    },
    "-=4"
  )
  //left ear
  .to(
    ".cow-ear-left-1",
    3,
    {
      rotation: -40,
      y: 30,
      x: 7,
      transformOrigin: "left bottom",
    },
    "-=6"
  )
  .to(
    ".cow-ear-left-1",
    3,
    {
      rotation: 0,
      y: 0,
      x: 0,
    },
    "-=2"
  )
  // right ear
  .to(
    ".cow-ear-right-1",
    3,
    {
      rotation: -30,

      transformOrigin: "left bottom",
    },
    "-=7"
  )
  .to(
    ".cow-ear-right-1",
    3,
    {
      rotation: 0,

      transformOrigin: "left bottom",
    },
    "-=3"
  )
  // tail
  .to(
    ".cow-tail-1",
    2,
    {
      rotation: 0,
      transformOrigin: "left top",
    },
    "-=3"
  );

cowTwoAnimation

  .to(".cow-leg-2", 2, {
    rotation: -27,
    y: 7,
    x: 2,
    //delay: 4,
    transformOrigin: "left top",
  })
  .to(".cow-leg-2", 0.5, {
    rotation: 0,
    y: 0,
    x: 0,
  })
  .to(".cow-head-2", 2, {
    rotation: 10,
    x: 10,
    transformOrigin: "top top",
  })
  .to(
    ".cow-ear-left-2",
    2,
    {
      rotation: 15,

      transformOrigin: "right bottom",
    },
    "-=2"
  )
  .to(
    ".cow-ear-right-2",
    2,
    {
      rotation: -5,
      x: 2,
      y: -2,

      transformOrigin: "left bottom",
    },
    "-=2"
  )
  .to(
    ".cow-head-2",
    2,
    {
      rotation: 0,
      x: 0,
      delay: 5,
    },
    "-=4"
  )
  .to(".cow-ear-left-2", 2, {
    rotation: 0,
    delay: 4,
  })
  .to(
    ".cow-ear-right-2",
    2,
    {
      rotation: 0,
      x: 0,
      y: 0,
    },
    "-=2"
  )
  .to(
    ".cow-tail-2",
    2,
    {
      rotation: 10,
      transformOrigin: "right top",
    },
    "-=2"
  )
  .to(".cow-tail-2", 2, {
    rotation: 0,
    transformOrigin: "right top",
  });

cowThreeAnimation
  .to(".cow-head-3", 1, {
    rotation: 20,
    x: 18,
    y: 5,
    delay: 1.5,
    transformOrigin: "right top",
  })
  .to(".cow-head-3", 1, {
    rotation: 0,
    x: 0,
    y: 0,
    delay: 3,
    transformOrigin: "right top",
  });

cowFourAnimation
  .to(".cow-head-4", 1, {
    rotation: -30,
    x: -14,
    y: 5,
    delay: 3,
    transformOrigin: "left top",
  })
  .to(".cow-head-4", 1, {
    rotation: 0,
    x: 0,
    y: 0,
    delay: 1,
  });

cowSmAnimation

  .to(".cows-head-sm1", 1, {
    rotation: -10,
    x: -3,
    //delay: 3,
    transformOrigin: "left top",
  })
  .to(".cows-head-sm1", 1, {
    rotation: 0,
    x: 0,
    y: 0,
  })
  .to(
    ".cows-head-sm2",
    1,
    {
      rotation: -2,
      x: -2,
      y: -1,
      //delay: 3,
      transformOrigin: "right top",
    },
    "-=1.9"
  )
  .to(".cows-head-sm2", 1, {
    rotation: 0,
    x: 0,
    y: 0,
    //delay: 1,
  });
cowFiveAnimation
// .to(".cow-5", 1, {
// xPercent:120,delay:3
// })
  .to(".cow-head-cont-5", 1, {
    rotation: -35,
    y: 43,
    transformOrigin: "right top",
    delay: 3,
  })

  .to(
    ".cow-ear-right-5",
    0.5,
    {
      rotation: 35,
      y: -23,
      x: -30,
      transformOrigin: "left bottom",
      delay: 2,
    },
    "-=0.4"
  )
  .to(
    ".cow-ear-left-5",
    0.5,
    {
      rotation: -30,
      y: -43,
      transformOrigin: "right bottom",
    },
    "-=0.4"
  )
  .to(".cow-eyes-5", 0.2, {
    opacity: 0,
  })
  .to(
    ".cow-eyes-close-5",
    {
      opacity: 1,
    },
    "-=0.1"
  )
  .to(".cow-eyes-5", {
    opacity: 1,
  })
  .to(".cow-eyes-close-5", {
    opacity: 0,
  })

  .to(
    ".cow-ear-right-5",
    0.2,
    {
      rotation: 0,
      y: 0,
      x: 0,
      transformOrigin: "left bottom",
    },
    "-=0.2"
  )
  .to(
    ".cow-ear-left-5",
    0.2,
    {
      rotation: 0,
      y: 0,
      transformOrigin: "right bottom",
    },
    "-=0.2"
  )
  .to(
    ".cow-head-cont-5",
    0.5,
    {
      rotation: 0,
      y: 0,
      delay: 1,
    },
    "-=1.3"
  );

///////////////
const grassAnimatedOne = new TimelineMax({ repeat: -1 });
const grassAnimatedTwo = new TimelineMax({ repeat: -1 });
const grassAnimatedThree = new TimelineMax({ repeat: -1 });
const grassAnimatedFour = new TimelineMax({ repeat: -1 });
const grassAnimatedFive = new TimelineMax({ repeat: -1 });
const grassAnimatedSix = new TimelineMax({ repeat: -1 });
const grassAnimatedSeven = new TimelineMax({ repeat: -1 });

grassAnimatedOne
  .to(".grass-anim1", 4, {
    rotation: -10,
    x: -14,
    y: 5,
    transformOrigin: "bottom",
  })
  .to(".grass-anim1", 4, {
    rotation: 0,
    x: 0,
    y: 0,
  });

grassAnimatedTwo
  .to(".grass-anim2", 6, {
    rotation: 20,
    x: -14,
    y: 5,
    transformOrigin: "bottom",
  })
  .to(".grass-anim2", 6, {
    rotation: 0,
    x: 0,
    y: 0,
  });

grassAnimatedThree
  .to(".grass-anim3", 6, {
    rotation: 20,
    x: -14,
    y: 5,
    transformOrigin: "bottom",
  })
  .to(".grass-anim3", 6, {
    rotation: 0,
    x: 0,
    y: 0,
  });

grassAnimatedFour
  .to(".grass-anim4", 6, {
    rotation: -10,
    x: -14,
    y: 5,
    transformOrigin: "bottom",
  })
  .to(".grass-anim4", 6, {
    rotation: 0,
    x: 0,
    y: 0,
  });

grassAnimatedFive
  .to(".grass-anim5", 6, {
    rotation: -7,
    x: -14,
    y: 5,
    delay: 2,
    transformOrigin: "bottom",
  })
  .to(".grass-anim5", 6, {
    rotation: 0,
    x: 0,
    y: 0,
  });

grassAnimatedSix
  .to(".grass-anim6", 4, {
    rotation: 6,

    transformOrigin: "bottom",
  })
  .to(".grass-anim6", 4, {
    rotation: 0,
  });
grassAnimatedSeven
  .to(".grass-anim7", 6, {
    rotation: -10,
    x: -14,
    y: 5,
    transformOrigin: "bottom",
  })
  .to(".grass-anim7", 6, {
    rotation: 0,
    x: 0,
    y: 0,
  });
//////////////
const herbCircleAnimation = new TimelineMax({ repeat: -1 });
herbCircleAnimation

  .to(".herb-circle--animated", 0.6, {
    background: "#CCD390",
    border: "6px solid #fff",
    ease: "power1.out",
  })
  .to(".herb-circle--animated", 0.6, {
    background: "#31264F",
    border: "10px solid #fff",
    ease: "power1.out",
  })
  .to(".herb-circle--animated", 0.6, {
    background: "#CCD390",
    border: "6px solid #fff",
    ease: "power1.out",
  });
//  =========================  xxxxx  ==========================

gsap.set(".hero-slider__dots", { autoAlpha: 1, xPercent: -50, yPercent: -50 });

gsap.set(".hero-slide", { autoAlpha: 0, xPercent: 0 });
gsap.set(".hero-slide.active", { autoAlpha: 1, xPercent: 0 });
gsap.set(".go", { autoAlpha: 1, yPercent: -50 });
gsap.set(".scene3", { opacity: 0 });
//gsap.set(".scene4", { opacity: 0, scale: 1 });
//gsap.set(".scene5", { opacity: 0, scale: 0.4 });
gsap.set(".cow-5", { xPercent:240 });

//transform: scale(0.09) translate(-198px, 413px);
var slides = $(".hero-slide"),
  activeSlide = $(".slide.active"),
  next = $(".go-next"),
  prev = $(".go-prev"),
  moveSlideTL = gsap.timeline(),
  lines = $("h1");

// Animaciones individuales para cada slider ======

const allSlides = [].slice.call(slides);
let animations = [];

for (let [i] of allSlides.entries()) {
  animations[i] = gsap.timeline({});
}

animations[0]

 .reverse()
 

animations[1]
  // changes

  ////
  .to(
    "#slide01 .grass1",
    {
      yPercent: 100,
    }
  )

  .to(
    ".scene1",
    {
      scale: 3,
      y: 100,
    },"-=0.9"
  )
  .to(
    ".cows-container",
    {
      scale: 2,
      y: 100,
    },"-=0.9"
  )
  .to(
    ".grass-container-2",
    {
      y: -813,
    },"-=0.9"
  )
  .to(
    ".grass-animated2",
    {
      y: 0,
    }
  )

  .to(".hero__overlay", {
    autoAlpha: 1,
  })
  .to(".hero__herbs-container", {
    autoAlpha: 1,
  })

  .reverse();

animations[2]
 
  .to(".scene2", {
    scale: 6,
yPercent:-70,duration:0.6

  })   .to(".scene3", {
 

    opacity:1,delay:0.1

  })
 


  .reverse();

animations[3]

  .to(
    ".scene33",


    {
   
      scale:7,
 xPercent:11,yPercent:-43,
   duration:1
    }
  )

  /// scale(10.5, 10.5) translate(31px, -50px)
  .to(
    ".scene4",

    {
      opacity: 1,
      scale: 1,delay:0.3
    }
  )

  .reverse();

animations[4]
  .to(
    ".scene4",

    {
      scale: 14,
      opacity: 1,
    }
  )  .to(
    ".scene5",

    {
      scale: 1,
      opacity: 1,
    },"-=0.4"
  )
//translate(11%, -42%) scale(11)
  .reverse();

animations[5]
  .from("#slide06 .lines", {
    scale: 0.2,
    transformOrigin: "center",
    duration: 2,
  })
  .reverse();

function onMouseWheel(event) {
  //Normalize event wheel delta

  var delta =
    event.originalEvent.wheelDelta / 30 || -event.originalEvent.detail;

  if (delta < -1) {
    //scrolling down -> next slide

    if (!moveSlideTL.isActive()) {

        // check again in a second
  
      
      var slideFrom = $(".hero-slide.active");
      var sectionToIndex = slides.index(slideFrom);
      /// conditions
      console.log(sectionToIndex);

      if (sectionToIndex === 0 && !animations[1].isActive()) {
       // setTimeout(onMouseWheel, 2000);
        animations[1].reverse();
        var slideTo = slides.eq(sectionToIndex + 1);
        moveToSlide(slideFrom, slideTo);
      }
      if (sectionToIndex === 1 && !animations[1].isActive()) {
         animations[1].reverse();
          
        setTimeout(function(){
           slideTo = slides.eq(sectionToIndex + 1);
        moveToSlide(slideFrom, slideTo);
        }, 4000);
        

        
        
   
      //  cowFiveAnimation.play()
      }
      // go to 4 slide
      if (sectionToIndex === 2 && !animations[2].isActive()) {
        
        // animations[3].reverse(0).kill();
      
            animations[3].play();
      }
         // go to 5 slide
         if (sectionToIndex === 3 && !animations[3].isActive()) {
          // animations[3].reverse(0).kill();
          animations[4].play();
          var slideTo = slides.eq(sectionToIndex + 1);
          moveToSlide(slideFrom, slideTo);
        }
      // if (sectionToIndex !== slides.length - 1) {
      //   slideTo = slides.eq(sectionToIndex + 1);
      //   moveToSlide(slideFrom, slideTo);
      // }
    }
  } else if (delta > 1) {
    // animations[1].reverse();
    // animations[2].reverse();
    // -> prev

    if (!moveSlideTL.isActive()) {
      if (!moveSlideTL.isActive()) {
        var slideFrom = $(".hero-slide.active"),
          sectionToIndex = slides.index(slideFrom);
        // if (sectionToIndex === 1) {
        //  animations[1].reverse(1);
        //console.log(sectionToIndex);
        // }
        console.log(sectionToIndex);
        if (sectionToIndex === 1 && !animations[1].isActive()) {
          animations[1].reverse();
          setTimeout(function(){
            slideTo = slides.eq(sectionToIndex - 1);
            moveToSlide(slideFrom, slideTo);
            }, 4000);
         // setTimeout(onMouseWheel, 2000);
        //  
        //  
        //  moveToSlide(slideFrom, slideTo);
        } else if (
          sectionToIndex === 2 &&
          !animations[1].isActive() &&
          !animations[2].isActive()
        ) {
          animations[2].reverse(0);     
          setTimeout(function(){
            slideTo = slides.eq(sectionToIndex - 1);
            moveToSlide(slideFrom, slideTo);
            }, 1000);
           
          // setTimeout(onMouseWheel, 2000);
          // 
          // 
          // slideTo = slides.eq(sectionToIndex - 1);
          // moveToSlide(slideFrom, slideTo);
        } else if (sectionToIndex === 3) {
         // setTimeout(onMouseWheel, 2000);
     animations[3].reverse();
  

         setTimeout(function(){
          slideTo = slides.eq(sectionToIndex - 1);
          moveToSlide(slideFrom, slideTo);
               animations[2].reverse(0).kill();
          }, 1000);
        } // back to 4 slide
         else if (sectionToIndex === 4) {
          animations[4].reverse();
            // animations[2].reverse(0).kill();
   
             var slideTo = slides.eq(sectionToIndex - 1);
             moveToSlide(slideFrom, slideTo);
           }
        // if (sectionToIndex != 0) {
        //   slideTo = slides.eq(sectionToIndex - 1);
        //   moveToSlide(slideFrom, slideTo);
        // }
      }
    }
  }
  //event.preventDefault();
}

// ============================
function dotClick() {
  var slideFrom = $(".hero-slide.active"),
    sectionToIndex = $(this).index(),
    sectionToIndex = $(this).index(),
    slideTo = slides.eq(sectionToIndex);

  var indexFrom = slideFrom.index();

  // console.log(
  //   slideFrom,
  //   "from: " + indexFrom,
  //   "to: " + sectionToIndex,
  //   "slideTo: " + slideTo
  // );

  //if(slideFrom !== slideTo && !moveSlideTL.isActive()) {  // not working

  if (indexFrom !== sectionToIndex && !moveSlideTL.isActive()) {
    moveToSlide(slideFrom, slideTo);
  }
}

// =============================
function nextClick() {
  if (!moveSlideTL.isActive()) {
    var slideFrom = $(".hero-slide.active"),
      sectionToIndex = slides.index(slideFrom);

    if (sectionToIndex !== slides.length - 1) {
      slideTo = slides.eq(sectionToIndex + 1);
      moveToSlide(slideFrom, slideTo);
    }
  }
}

function prevClick() {
  if (!moveSlideTL.isActive()) {
    var slideFrom = $(".hero-slide.active"),
      sectionToIndex = slides.index(slideFrom);

    if (sectionToIndex != 0) {
      slideTo = slides.eq(sectionToIndex - 1);
      moveToSlide(slideFrom, slideTo);
    }
  }
}

// ==============================
function moveToSlide(slideFrom, slideTo) {
  gsap.set(".go", { autoAlpha: 0 }); // ????

  if (slides.index(slideFrom) < slides.index(slideTo)) {
    // vorwärts

    moveSlideTL = gsap
      .timeline({
        onComplete: setActiveSlide,
        onCompleteParams: [slideTo, slideFrom],
      })
      .to(slideTo, {
        xPercent: 0,
autoAlpha:1,
        className: "hero-slide active",
      })
      .to(slideFrom, { xPercent: 0,autoAlpha:0, duration: 1, className: "hero-slide" })
      .set(slideFrom, { xPercent: 0,autoAlpha:1, });
  } else {
    moveSlideTL = gsap
      .timeline({
        onComplete: setActiveSlide,
        onCompleteParams: [slideTo, slideFrom],
      })
      .set(slideTo, { xPercent: 0, autoAlpha:1,className: "hero-slide active" })
      .to(slideTo, { xPercent: 0, duration: 1, autoAlpha:1,})
      .to(slideFrom, { xPercent: 0, duration: 1, autoAlpha:0,className: "hero-slide" });
  }
}

function setActiveSlide(active, last) {
  var currentSlideIndex = slides.index(active);
  var lastSlideIndex = slides.index(last);

  animations[currentSlideIndex].reversed(false);
  animations[lastSlideIndex].progress(0).reversed(true);

  gsap.to(".hero-slider__dot.active", {});
  $(".hero-slider__dot.active").removeClass("active");
  $(".hero-slider__dot").eq(currentSlideIndex).addClass("active");
  gsap.to(".hero-slider__dot.active", {});

  if (currentSlideIndex == 0) {
    gsap.set(".go-prev", { autoAlpha: 0 });
  } else {
    gsap.set(".go-prev", { autoAlpha: 1 });
  }
  if (currentSlideIndex == slides.length - 1) {
    gsap.set(".go-next", { autoAlpha: 0 });
  } else {
    gsap.set(".go-next", { autoAlpha: 1 });
  }
}

// ================================
function init() {
  for (var i = 0; i < slides.length; i++) {
    var navDots = $("<div></div>")
      .addClass("hero-slider__dot")
      .appendTo(".hero-slider__dots");
    gsap.set(".hero-slider__dot:first-child", {
      className: "hero-slider__dot active",

      transformOrigin: "center",
    });
    navDots.on("click", dotClick);
  }

  if (slides[0]) {
    gsap.set(".go-prev", { autoAlpha: 0 });
  }

  next.on("click", nextClick);
  prev.on("click", prevClick);

  $(window).on("mousewheel DOMMouseScroll", onMouseWheel);
  //$(window).on("touchmove", onMouseWheel);

  gsap.set(".hero-slide.active", { xPercent: 0 });
 animations[0].play()
}

init();
$(document).ready(function () {
  var slide01 = $("#slide01");
  if (slide01.hasClass("active")) {
  animations[0].reverse()
    animations[1].reverse(-3).kill()
  }
});
