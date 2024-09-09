



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

    $('.toggle').click(function(){
      $(this).toggleClass('active');
      $('.hamburger').toggleClass('is-active')
      $(".toggle_modal").fadeToggle();
    });
    $(".toggle_menu_list_modal a").click(function() {
      $(this).parent('li').addClass('active')
    })
    $('.toggle_menu_list_modal .link-contact').click(function() {
      $(this).addClass('active');
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
    speed: 1500,
    autoplay: {
      delay: 7000,           
      disableOnInteraction: false, 
    },
    on: {
      slideChangeTransitionStart: function() {
        resetProgressBar();
        reseteveryAni();
        resetGifAnimation(); 
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
    $gif.attr('src', '');         
    $gif.attr('src', src);       
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



  const snsSlide = new Swiper('.snsSlide', {
    slidesPerView: 'auto', 
    spaceBetween: 13, 
    speed: 600,
  });




  // 자몽랩 소개 이미지
    $('.aniEffect-maintit').addClass('click');
    setTimeout(function() {
      $('.aniEffect-sh').addClass('click');
    }, 500);
    




  ScrollTrigger.matchMedia({
    "(min-width: 769px)": function() {
      // 소개페이지
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
      // sc-comp 텍스트
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '.sc-ident .inner',  // 공통 트리거 설정
          start: "bottom 90%",  
          end: "top 0%", 
          scrub: true, 
          scroller: '.lenis-wrap',
        }
      });
      
      // .aniEffect-main 애니메이션
      gsap.utils.toArray('.aniEffect-main').forEach(effect => {
        tl.fromTo(effect, 
          {
            opacity: 0,
            y: 100
          }, 
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },'mainTxt'
        );
      });
      
      // .aniEffect-tit 애니메이션
      gsap.utils.toArray('.comp .aniEffect-tit').forEach(effect => {
        tl.fromTo(effect, 
          {
            opacity: 0,
            y: 100
          }, 
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out"
          },'mainTxt'
        );
      });

      gsap.from(".sc-mission .aniEffect-left", {
        scrollTrigger: {
          trigger: ".sc-mission", 
          start: "10% 80%",       
          end: "top 20%",         
          scrub: true,
          scroller: '.lenis-wrap', 
        },
        x: -50,                 
        opacity: 0,              
        duration: 1              
      }, 'mission');
    
      gsap.fromTo(".sc-mission .aniEffect-right", {
          opacity: 0,
          y: 150
        }, 
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".sc-mission", 
            start: "10% 80%",       
            end: "top 20%",      
            scrub: true,
            scroller: '.lenis-wrap', 
          }
        }, 'mission'
      );
    

      gsap.fromTo(".sc-vision .aniEffect-left", {
        opacity: 0,
        y: 150
      }, 
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".sc-vision", 
          start: "10% 50%",      
          end: "top 0%",    
          scrub: true,
          scroller: '.lenis-wrap', 
        }
      }, 'vision'
    );

      gsap.from(".sc-vision .aniEffect-right", {
        scrollTrigger: {
          trigger: ".sc-vision", 
          start: "20% 90%",    
          end: "top 10%",         
          scrub: true,
          scroller: '.lenis-wrap', 
        },
        x: 50,                 
        opacity: 0,    
        duration: 1              
      }, 'vision'
    );

    


      // 서브페이지
      gsap.utils.toArray('.sub section').forEach(section => {
        let aniEffects = section.querySelectorAll('.aniEffect');  // 해당 섹션 내의 .aniEffect 요소들 선택
      
        aniEffects.forEach(effect => {
          gsap.fromTo(effect, 
            {
              opacity: 0,
              y: 600
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
              y: 600
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


