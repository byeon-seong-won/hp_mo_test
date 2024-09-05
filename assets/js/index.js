



  // 구버전으로 돌리기
    // window.onload = function() {
    //   var screenWidth = window.innerWidth;
    //   if (screenWidth < 1680) {
    //       window.location.replace("/v1/index.html");
    //   }
    // };



    // --------------- GSAP 공통 효과 --------------- 
    gsap.registerPlugin(ScrollTrigger);
    gsap.defaults({
      ease:"none"
    })




    $(".hamburger").click(function() {
      $('.hamburger').toggleClass('is-active')
      $(".toggle_modal").fadeToggle();
    })
 
  




    // --------------- 전체 부드러운 스크롤 --------------- 
    const lenis = new Lenis({
      duration: 2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wrapper: document.querySelector('.lenis-wrap'),
      content: document.querySelector('.inner-lenis'),
    })
    lenis.on('scroll', (e) => {
      console.log(e)
    })
    lenis.on('scroll', ScrollTrigger.update)
    gsap.ticker.add((time)=>{
      lenis.raf(time * 700)
    })
    gsap.ticker.lagSmoothing(0)







    




  const mainSlide = new Swiper('.mainSlide', {
    direction: 'horizontal', 
    loop: true,               
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints:{
      768 : {
        allowTouchMove : false,
      },
    },
    allowTouchMove : true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // speed: 1500,
    // autoplay: {
    //   delay: 7000,           
    //   disableOnInteraction: false, 
    // },
    on: {
      slideChangeTransitionStart: function() {
          resetProgressBar();
          reseteveryAni();
      },
      slideChangeTransitionEnd: function() {
          startProgressBar();
          everyAni(); 
          quizAni();
      }
    }
  });




  // everyclick 애니메이션
  function everyAni() {
    $('.thumb-area>img.hand').addClass('effect');
    $('.thumb-area>p.count').addClass('effect');
    $('.thumb-area>img.snsIcon').addClass('effect');
    $('.thumb-area>img.money').addClass('effect');
  }
  function reseteveryAni() {
    $('.thumb-area>img.hand').removeClass('effect');
    $('.thumb-area>p.count').removeClass('effect');
    $('.thumb-area>img.snsIcon').removeClass('effect');
    $('.thumb-area>img.money').removeClass('effect');
  }



  // quizclick 애니메이션
  function resetGifAnimation() {
    const $gif = $('section .thumb-area > div > img.video');
    const src = $gif.attr('src'); 
    gif.attr('src', '');
    $gif.attr('src', src)
  }
  function quizAni() {
    const $gif = $('section .thumb-area > div > img.video');
    $gif.css('display', 'block');
  }

  // reviewclick 애니메이션
  gsap.to(".ico-coin", {
    y: -13, 
    duration: 0.8,
    repeat: -1, 
    yoyo: true, 
    ease: "power1.inOut", 
    scroller: '.lenis-wrap', 
  });





  

  // 하단 prgress-bar
  function startProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.transition = 'width 7s linear';
    progressBar.style.width = '100%';
  }

  function resetProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.transition = 'none';
    progressBar.style.width = '0';
  }

  // startProgressBar();













// ----------------- 에브리클릭 -----------------  

  // // 에브리클릭 - 일상관리
  // const snsSlide = new Swiper('.snsSlide', {
  //   direction: 'horizontal', 
  //   // loop: true,               
  //   allowTouchMove: false,
  //   spaceBetween: 13,
  //   speed: 1000, 
  //   loopAdditionalSlides : 1,
  //   autoplay: {
  //       delay: 0, 
  //       disableOnInteraction: false,
  //   },
  // });


  const snsSlide = new Swiper('.snsSlide', {
    slidesPerView: 'auto', 
    spaceBetween: 13, 
    speed: 600,
  });


  // 홈페이지 바로가기 애니메이션
  // gsap.to(".link-home", {
  //   y: -20, 
  //   duration: 1,
  //   repeat: -1, 
  //   yoyo: true, 
  //   ease: "power4.inOut", 
  //   scroller: '.lenis-wrap', 
  // });






  // 일상관리 progress bar
  // const progressBar = gsap.timeline({
  //   scrollTrigger:{
  //     trigger : '.sc-daily',
  //     start:"50% 70%",
  //     end:"50% 80%",
  //     scrub:1,
  //     ease: "power4.out",
  //     stagger: {
  //       amount: 1
  //     },
  //   },
  // })
  // progressBar.to(".progress-bar .guage-area", 1.8, {
  //   width:'100%',
  //   height:'100%',
  // })









  // 자몽랩 소개 이미지
    $('.aniEffect-maintit').addClass('click');
    setTimeout(function() {
      $('.aniEffect-sh').addClass('click');
    }, 500);
    



  // sc-comp 텍스트
  gsap.utils.toArray('.aniEffect-main').forEach(effect => {
    gsap.fromTo(effect, 
        {
          opacity: 0,
          y: 200
        }, 
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: effect,
            start: "top 80%",  
            end: "bottom 60%", 
            scrub: true, 
            scroller: '.lenis-wrap', 
          }
        }
    );
  });

  // gsap.utils.toArray('.comp .aniEffect-sh').forEach(effect => {
  //   gsap.fromTo(effect, 
  //       {
  //         opacity: 0,
  //         y: 100
  //       }, 
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 1,
  //         ease: "power2.out",
  //         scrollTrigger: {
  //           trigger: effect,
  //           start: "-100% 48%",  
  //           end: "bottom 60%", 
  //           scrub: true, 
  //         }
  //       }, "main"
  //   );
  // });

  gsap.utils.toArray('.comp .aniEffect-tit').forEach(effect => {
    gsap.fromTo(effect, 
        {
          opacity: 0,
          y: 100
        }, 
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: effect,
            start: "-40% 70%",  
            end: "bottom 60%", 
            scrub: true, 
            scroller: '.lenis-wrap', 
          }
        }
    );
  });




  // ScrollTrigger.matchMedia({
  //   "(min-width: 769px)": function() {
      
  //   },
  // });

  // ScrollTrigger.matchMedia({
  //   "(max-width: 768px)": function() {
  //     gsap.utils.toArray('.aniEffect').forEach(effect => {
  //       gsap.fromTo(effect, 
  //         {
  //           opacity: 0,
  //           y: 200
  //         }, 
  //         {
  //           opacity: 1,
  //           y: 0,
  //           duration: 1,
  //           ease: "power2.out",
  //           scrollTrigger: {
  //             trigger: effect,
  //             start: "top 80%",  
  //             end: "bottom 60%", 
  //             scrub: true, 
  //             scroller: '.lenis-wrap', 
  //           }
  //         }, 'scroll'
  //       );
  //     });
  //     gsap.utils.toArray('.gsap').forEach(effect => {
  //       gsap.fromTo(effect, 
  //         {
  //           y: 200
  //         }, 
  //         {
  //           y: 0,
  //           duration: 1,
  //           ease: "power2.out",
  //           scrollTrigger: {
  //             trigger: effect,
  //             start: "top 80%",  
  //             end: "bottom 60%", 
  //             scrub: true, 
  //             scroller: '.lenis-wrap', 
  //           }
  //         }, 'scroll'
  //       );
  //     });
  //   },
  // });



    // "(max-width: 768px)": function() {
    //   const effects = gsap.utils.toArray('.aniEffect, .gsap');
    //     effects.forEach(effect => {
    //       gsap.fromTo(effect, 
    //         {
    //           opacity: 0,
    //           y: 200
    //         }, 
    //         {
    //           opacity: 1,
    //           y: 0,
    //           duration: 1,
    //           ease: "power2.out",
    //           scrollTrigger: {
    //             trigger: effect,
    //             start: "top 80%",  
    //             end: "bottom 60%", 
    //             scrub: true, 
    //             scroller: '.lenis-wrap', 
    //           }
    //         }
    //       );
    //     });
    //   },


  // });







  ScrollTrigger.matchMedia({
    "(min-width: 769px)": function() {
      // 소개페이지
      gsap.from(".sc-mission .aniEffect-left", {
        scrollTrigger: {
          trigger: ".sc-mission .aniEffect-left", 
          start: "10% 80%",       
          end: "top 30%",         
          scrub: true,
          scroller: '.lenis-wrap', 
        },
        x: -300,                 
        opacity: 0,              
        duration: 1              
      });
    
      // sc-mission: 오른쪽에서 왼쪽으로 등장
      gsap.from(".sc-mission .aniEffect-right", {
        scrollTrigger: {
          trigger: ".sc-mission .aniEffect-right", 
          start: "10% 80%",       
          end: "top 30%",         
          scrub: true,
          scroller: '.lenis-wrap', 
        },
        x: 300,                  
        opacity: 0,              
        duration: 1              
      });
    
      // sc-vision: 왼쪽에서 오른쪽으로 등장
      gsap.from(".sc-vision .aniEffect-left", {
        scrollTrigger: {
          trigger: ".sc-vision .aniEffect-left", 
          start: "10% 100%",    
          end: "top 50%",         
          scrub: true,
          scroller: '.lenis-wrap', 
        },
        x: -300,                 
        opacity: 0,    
        duration: 1              
      });
    
      // sc-vision: 오른쪽에서 왼쪽으로 등장
      gsap.from(".sc-vision .aniEffect-right", {
        scrollTrigger: {
          trigger: ".sc-vision .aniEffect-right", 
          start: "10% 100%",      
          end: "top 50%",         
          scrub: true,
          scroller: '.lenis-wrap',              
        },
        x: 300,                
        opacity: 0,        
        duration: 1              
      });

      
      // 서브페이지
      gsap.utils.toArray('.aniEffect').forEach(effect => {
        gsap.fromTo(effect, 
          {
            opacity: 0,
            y: 200
          }, 
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: effect,
              start: "top 80%",  
              end: "bottom 60%", 
              scrub: true, 
              scroller: '.lenis-wrap', 
            }
          }
        );
      });
      gsap.utils.toArray('.gsap').forEach(effect => {
        gsap.fromTo(effect, 
          {
            y: 200
          }, 
          {
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: effect,
              start: "top 80%",  
              end: "bottom 60%", 
              scrub: true, 
              scroller: '.lenis-wrap', 
            }
          }
        );
      });
    },
  });



  ScrollTrigger.matchMedia({
    "(max-width: 768px)": function() {
      console.log('MatchMedia triggered for max-width: 768px');


      gsap.from(".sc-mission .aniEffect-left", {
        scrollTrigger: {
          trigger: ".sc-mission .aniEffect-left", 
          start: "10% 80%",       
          end: "top 30%",         
          scrub: true,
          scroller: '.lenis-wrap', 
        },
        x: -100,                 
        opacity: 0,              
        duration: 1              
      });
    
      // sc-mission: 오른쪽에서 왼쪽으로 등장
      gsap.from(".sc-mission .aniEffect-right", {
        scrollTrigger: {
          trigger: ".sc-mission .aniEffect-right", 
          start: "10% 80%",       
          end: "top 30%",         
          scrub: true,
          scroller: '.lenis-wrap', 
        },
        y: -100,                  
        opacity: 0,              
        duration: 1              
      });
    
      // sc-vision: 왼쪽에서 오른쪽으로 등장
      gsap.from(".sc-vision .aniEffect-left", {
        scrollTrigger: {
          trigger: ".sc-vision .aniEffect-left", 
          start: "10% 100%",    
          end: "top 50%",         
          scrub: true,
          scroller: '.lenis-wrap', 
        },
        x: 100,                 
        opacity: 0,    
        duration: 1              
      });
    
      // sc-vision: 오른쪽에서 왼쪽으로 등장
      gsap.from(".sc-vision .aniEffect-right", {
        scrollTrigger: {
          trigger: ".sc-vision .aniEffect-right", 
          start: "10% 100%",      
          end: "top 50%",         
          scrub: true,
          scroller: '.lenis-wrap',              
        },
        y: -100,                
        opacity: 0,        
        duration: 1              
      });


      // 서브페이지
      gsap.utils.toArray('.sub section').forEach(section => {
        let aniEffects = section.querySelectorAll('.aniEffect');  // 해당 섹션 내의 .aniEffect 요소들 선택
      
        aniEffects.forEach(effect => {
          gsap.fromTo(effect, 
            {
              opacity: 0,
              y: 200
            }, 
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,  // 각 section을 트리거로 설정
                start: "top 80%",  
                end: "bottom 60%", 
                scrub: true, 
                scroller: '.lenis-wrap', 
              }
            }
          );
        });
      });
      
      // 섹션 내부의 .gsap 요소들을 트리거
      gsap.utils.toArray('.sub section').forEach(section => {
        let gsapElements = section.querySelectorAll('.gsap');  // 해당 섹션 내의 .gsap 요소들 선택
      
        gsapElements.forEach(effect => {
          gsap.fromTo(effect, 
            {
              y: 200
            }, 
            {
              y: 0,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,  // 각 section을 트리거로 설정
                start: "top 80%",  
                end: "bottom 60%", 
                scrub: true, 
                scroller: '.lenis-wrap', 
              }
            }
          );
        });
      });
    },
  });




















    // 캐시사용 카드 노출
    // const card = gsap.timeline({
    //   scrollTrigger:{
    //     trigger : '.sc-cash',
    //     start:"10% 50%",
    //     end:"50% 70%",
    //     scrub:1,
    //     ease: "power4.out",
    //     stagger: {
    //       amount: 1
    //     },
    //   },
    // })
    // card.fromTo(".sc-cash .coupon-mo", 
    //   { y: "-30%", opacity: 0 },  
    //   { y: "0%", opacity: 1, duration: 2},  
    //   "coupon"
    // );
    // card.fromTo(".sc-cash .coupon", 
    //   { y: "100%", opacity: 0 },  
    //   { y: "0%", opacity: 1, stagger: 20},  
    //   "coupon +=10"
    // );




















    
// ----------------- 퀴즈클릭 -----------------  
// 기대효과 03
const keySlide = new Swiper('.keySlide', {
  direction : 'vertical',
  autoplay: {
    disableOnInteraction: false,
  },
  centeredSlides: true,
  allowTouchMove: false,
  speed: 200,
});

