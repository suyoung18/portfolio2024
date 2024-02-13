$(function(){

    $(".main1 img").click(function() {
        // 이미지를 중앙부터 사라지게 하는 애니메이션을 추가할 수 있습니다.
        $(".main1").fadeOut(500, function() {
          // 애니메이션이 완료된 후의 동작을 추가할 수 있습니다.
          // 예를 들면 다른 동작을 실행하거나 요소를 숨기는 등의 작업을 수행할 수 있습니다.
        });

        $(".main2").css({'opacity': 1})

      });

    $(".profilebtn").click(function() {
         // 이미지를 중앙부터 사라지게 하는 애니메이션을 추가할 수 있습니다.
    $(".profile").css({'left': '0%', 'top': '0%'})

        $(".main2").css({'transform': 'translate(-100%, -100%)'})

        });

        $(".profilebtn1").click(function() {
          // 이미지를 중앙부터 사라지게 하는 애니메이션을 추가할 수 있습니다.
      $(".profile").css({'left': '0%', 'top': '0%'})
          
          $(".main2").css({'transform': 'translate(-100%, -100%)'})
          
          $(".design1").css({'left': '-100%', 'top': '-100%'})
          // $(".main2").css({'transform': 'translate(0%, 0%)'})
          $(".design").css({'right': '-100%', 'top': '-100%'})
          $(".designMain2").css({'opacity': '0','z-index': '0'})
          // $(".design").css({'right': '-100%', 'top': '-100%'})
          $(".design1").removeClass('on')

          });


          $(".profilebtn2").click(function() {
            // 이미지를 중앙부터 사라지게 하는 애니메이션을 추가할 수 있습니다.
        $(".profile").css({'left': '0%', 'top': '0%'})
            
            $(".main2").css({'transform': 'translate(-100%, -100%)'})
            
            $(".design2").css({'left': '-100%', 'top': '-100%'})
            // $(".main2").css({'transform': 'translate(0%, 0%)'})
            $(".design").css({'right': '-100%', 'top': '-100%'})
            $(".designMain2").css({'opacity': '0','z-index': '0'})
            // $(".design").css({'right': '-100%', 'top': '-100%'})
            $(".design2").removeClass('on')
  
            });



        $(".profilebtn3").click(function() {
          // 이미지를 중앙부터 사라지게 하는 애니메이션을 추가할 수 있습니다.
      $(".profile").css({'left': '0%', 'top': '0%'})
          
          $(".main2").css({'transform': 'translate(-100%, -100%)'})
          
          $(".design3").css({'left': '-100%', 'top': '-100%'})
          // $(".main2").css({'transform': 'translate(0%, 0%)'})
          $(".design").css({'right': '-100%', 'top': '-100%'})
          $(".designMain2").css({'opacity': '0','z-index': '0'})
          // $(".design").css({'right': '-100%', 'top': '-100%'})
          $(".design3").removeClass('on')

          });

          $(".profilebtn4").click(function() {
            // 이미지를 중앙부터 사라지게 하는 애니메이션을 추가할 수 있습니다.
        $(".profile").css({'left': '0%', 'top': '0%'})
            
            $(".main2").css({'transform': 'translate(-100%, -100%)'})
            
            $(".design4").css({'left': '-100%', 'top': '-100%'})
            // $(".main2").css({'transform': 'translate(0%, 0%)'})
            $(".design").css({'right': '-100%', 'top': '-100%'})
            $(".designMain2").css({'opacity': '0','z-index': '0'})
            // $(".design").css({'right': '-100%', 'top': '-100%'})
            $(".design4").removeClass('on')
  
            });

            


    $(".homebtn").click(function() {
        // 이미지를 중앙부터 사라지게 하는 애니메이션을 추가할 수 있습니다.
        $(".main2").css({'transform': 'translate(0%, 0%)'})

        $(".profile").css({'left': '-100%', 'top': '-100%'})
        $(".profile").animate({'scrollTop':0},1200)

        });

        $(".homebtn1").click(function() {
          // 이미지를 중앙부터 사라지게 하는 애니메이션을 추가할 수 있습니다.
          $(".main2").css({'transform': 'translate(0%, 0%)'})
  
          $(".design").css({'right': '-100%', 'top': '-100%'})
          $(".design").css({'opacity': '0'})
          });

          $(".resetbtn").click(function() {
            // 이미지를 중앙부터 사라지게 하는 애니메이션을 추가할 수 있습니다.
            
    
            
            $(".designMain").fadeOut(500, function() {

            });
            $(".designMain2").css({'opacity': '1'})

            });


        $(".designbtn").click(function() {
          // 이미지를 중앙부터 사라지게 하는 애니메이션을 추가할 수 있습니다.
          $(".design").css({'right': '0%', 'top': '0%'})

          $(".main2").css({'transform': 'translate(-100%, -100%)'})
          $(".design").css({'opacity': '1'})
          $(".design>article").css({'opacity': '1'})
          });

          $(".designbtn1").click(function() {
            // 이미지를 중앙부터 사라지게 하는 애니메이션을 추가할 수 있습니다.
            $(".design").css({'right': '0%', 'top': '0%'})
            // $(".main").css({'transform': 'translate(-100%, -100%)'})
            $(".profile").css({'left': '-100%', 'top': '-100%'})
            $(".design").css({'opacity': '1'})
            $(".design>article").css({'opacity': '1'})
            });
  


          $(".design1Btn").click(function() {

          $(".design1").removeClass('on')
          // 이미지를 중앙부터 사라지게 하는 애니메이션을 추가할 수 있습니다.
          $(".design1").css({'left': '0%', 'top': '0%'})

          $(".design>article").css({'opacity': '0'})
          // $(".design").css({'right': '-100%', 'top': '-100%'})
          $(".design1").addClass('on')
          });

          $(".design2Btn").click(function() {

            $(".design2").removeClass('on')
            // 이미지를 중앙부터 사라지게 하는 애니메이션을 추가할 수 있습니다.
            $(".design2").css({'left': '0%', 'top': '0%'})
  
            $(".design>article").css({'opacity': '0'})
            // $(".design").css({'right': '-100%', 'top': '-100%'})
            $(".design2").addClass('on')
            });


            $(".design3Btn").click(function() {

              $(".design3").removeClass('on')
              // 이미지를 중앙부터 사라지게 하는 애니메이션을 추가할 수 있습니다.
              $(".design3").css({'left': '0%', 'top': '0%'})
    
              $(".design>article").css({'opacity': '0'})
              // $(".design").css({'right': '-100%', 'top': '-100%'})
              $(".design3").addClass('on')
              });


              $(".design4Btn").click(function() {

                $(".design4").removeClass('on')
                // 이미지를 중앙부터 사라지게 하는 애니메이션을 추가할 수 있습니다.
                $(".design4").css({'left': '0%', 'top': '0%'})
      
                $(".design>article").css({'opacity': '0'})
                // $(".design").css({'right': '-100%', 'top': '-100%'})
                $(".design4").addClass('on')
                });




                $('.design1Btn').mouseenter(function(){
    
                  $('.design1Btn').attr({'src':'img/img1_04.png'})
                
                  });
                  
                  $('.design1Btn').mouseleave(function(){
                      
                      $('.design1Btn').attr({'src':'img/img1_03.png'})
                  });


                $('.design2Btn').mouseenter(function(){
    
                  $('.design2Btn').attr({'src':'img/img2_04.png'})
                
                  });
                  
                  $('.design2Btn').mouseleave(function(){
                      
                      $('.design2Btn').attr({'src':'img/img2_03.png'})
                  });


                  $('.design3Btn').mouseenter(function(){
    
                    $('.design3Btn').attr({'src':'img/img3_04.png'})
                  
                    });
                    
                    $('.design3Btn').mouseleave(function(){
                        
                        $('.design3Btn').attr({'src':'img/img3_03.png'})
                    });

                    $('.design4Btn').mouseenter(function(){
    
                      $('.design4Btn').attr({'src':'img/img31.png'})
                    
                      });
                      
                      $('.design4Btn').mouseleave(function(){
                          
                          $('.design4Btn').attr({'src':'img/img30.png'})
                      });


                      $('.homebtn1').mouseenter(function(){
    
                        $('.homebtn1>img:nth-child(1)').attr({'src':'img/img48.png'})
                        $('.homebtn1>img:nth-child(2)').attr({'src':'img/img45_01.png'})
                      
                        });
                        
                        $('.homebtn1').mouseleave(function(){
                            
                          $('.homebtn1>img:nth-child(1)').attr({'src':'img/img47.png'})
                          $('.homebtn1>img:nth-child(2)').attr({'src':'img/img45.png'})
                        });


                        let qr= 1
                        var timer=setInterval(function(){
 
                          qr++
                        if(qr>6)qr=1 
          
          
                          // console.log(qr)
                              $('.btnbg').attr({'src':'img/blob'+qr+'.png'})

                              $('.profilebtn').mouseenter(function(){

                                $(".btnbg").css({'opacity': '1'})
                                $('.profilebtn').attr({'src':'img/img24_01.png'})

                                });


                                $('.profilebtn').mouseleave(function(){
  
                                  $(".btnbg").css({'opacity': '0'})
                                  $('.profilebtn').attr({'src':'img/img24.png'})

                                  });


                              // $('.mainbg2>img').attr({'src':'img/blob'+qr+'.png'})

                              $('.designbtn').mouseenter(function(){
    
                                $(".btnbg1").css({'opacity': '1'})
                                $('.designbtn').attr({'src':'img/img45.png'})
    
                                  });
    
    
                                  $('.designbtn').mouseleave(function(){
      
                                  $(".btnbg1").css({'opacity': '0'})
                                  $('.designbtn').attr({'src':'img/img23.png'})

                                  });
          
          
                      },400)



                      





          $(".design_homebtn1").click(function() {

                    
            // 이미지를 중앙부터 사라지게 하는 애니메이션을 추가할 수 있습니다.
            $(".design1").css({'left': '-100%', 'top': '-100%'})
  
            $(".designMain2").css({'opacity': '1'})
            // $(".design").css({'right': '-100%', 'top': '-100%'})
            $(".design1").removeClass('on')
            });


            $(".design_homebtn2").click(function() {

                    
              // 이미지를 중앙부터 사라지게 하는 애니메이션을 추가할 수 있습니다.
              $(".design2").css({'left': '-100%', 'top': '-100%'})
    
              $(".designMain2").css({'opacity': '1'})
              // $(".design").css({'right': '-100%', 'top': '-100%'})
              $(".design2").removeClass('on')
              });


              $(".design_homebtn3").click(function() {

                    
                // 이미지를 중앙부터 사라지게 하는 애니메이션을 추가할 수 있습니다.
                $(".design3").css({'left': '-100%', 'top': '-100%'})
      
                $(".designMain2").css({'opacity': '1'})
                // $(".design").css({'right': '-100%', 'top': '-100%'})
                $(".design3").removeClass('on')
                });


                $(".design_homebtn4").click(function() {

                    
                  // 이미지를 중앙부터 사라지게 하는 애니메이션을 추가할 수 있습니다.
                  $(".design4").css({'left': '-100%', 'top': '-100%'})
        
                  $(".designMain2").css({'opacity': '1'})
                  // $(".design").css({'right': '-100%', 'top': '-100%'})
                  $(".design4").removeClass('on')
                  });

                  // const $slides = $('.slider');
                  // const $prevBtn = $('.left');
                  // const $nextBtn = $('.right');
                  // const slideWidth = $('.slider>div').outerWidth();
                  // let currentIndex = 0;
                
                  // $prevBtn.on('click', function() {
                  //   currentIndex = (currentIndex - 1 + 3) % 3;
                  //   updateSlider();
                  // });
                
                  // $nextBtn.on('click', function() {
                  //   currentIndex = (currentIndex + 1) % 3;
                  //   updateSlider();
                  // });
                
                  // function updateSlider() {
                  //   $slides.css('transform', 'translateX(' + (-currentIndex * slideWidth) + 'px)');
                  // }
                  const slides = document.querySelector('.slider');
                  const prevBtn = document.querySelector('.left');
                  const nextBtn = document.querySelector('.right');
                  
                  let currentIndex = 0;
                  
                  prevBtn.addEventListener('click', function() {
                    currentIndex = (currentIndex - 1 + 3) % 3;
                    updateSlider();
                  });
                  
                  nextBtn.addEventListener('click', function() {
                    currentIndex = (currentIndex + 1) % 3;
                    updateSlider();
                  });
                  
                  function updateSlider() {
                    const slideWidthPercentage = 300 / slides.children.length;
                    slides.style.transform = `translateX(${-currentIndex * slideWidthPercentage}%)`;
                  }
                  


                  
        $(".popUpbtn").click(function(){
          $(".popUp").css({'display': 'flex'})
          $(".popup1").css({'opacity': '1', 'z-index': '10'})
          $(".popup2").css({'opacity': '0', 'z-index': '0'})
          $(".popup3").css({'opacity': '0', 'z-index': '0'})
        });

        $(".popUpbtn2").click(function(){
          $(".popUp").css({'display': 'flex'})
          $(".popup1").css({'opacity': '0', 'z-index': '0'})
          $(".popup2").css({'opacity': '1', 'z-index': '10'})
          $(".popup3").css({'opacity': '0', 'z-index': '0'})
        });

        $(".popUpbtn3").click(function(){
          $(".popUp").css({'display': 'flex'})
          $(".popup1").css({'opacity': '0', 'z-index': '0'})
          $(".popup2").css({'opacity': '0', 'z-index': '0'})
          $(".popup3").css({'opacity': '1', 'z-index': '10'})
        });

        $(".popbtn>a").click(function(){

          $(".popUp").css({'display': 'none'})

        });


        // const boxA = document.querySelector('.resetbtn');
        // const boxB = document.querySelector('.div56');
        
        // boxA.addEventListener('mouseover', function() {
        //     // A박스를 호버할 때 B박스에 애니메이션을 적용하기 위해 opacity를 1로 변경
        //     // boxB.style.opacity = 1;
        //     boxB.classList.add('ani3Animation');
        // });
        
        // boxA.addEventListener('mouseout', function() {
        //     // A박스 호버가 끝날 때 B박스를 다시 투명하게 만듦
        //     // boxB.style.opacity = 0;
        //     boxB.classList.remove('ani3Animation');
        // });

        $(".div56").mouseover(function(){

          $(".div56").css({'animation': 'ani3 3s linear 1','opacity': '0', 'z-index': '-10' })

        });

        
        


    })







