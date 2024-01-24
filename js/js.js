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




          $(".design_homebtn1").click(function() {

                    
            // 이미지를 중앙부터 사라지게 하는 애니메이션을 추가할 수 있습니다.
            $(".design1").css({'left': '-100%', 'top': '-100%'})
  
            $(".designMain2").css({'opacity': '1'})
            // $(".design").css({'right': '-100%', 'top': '-100%'})
            $(".design1").removeClass('on')
            });


            $(".design_homebtn2").click(function() {

                    
              // 이미지를 중앙부터 사라지게 하는 애니메이션을 추가할 수 있습니다.
              $(".design2").css({'right': '-100%', 'top': '-100%'})
    
              $(".designMain2").css({'opacity': '1'})
              // $(".design").css({'right': '-100%', 'top': '-100%'})
              $(".design2").removeClass('on')
              });


              $(".design_homebtn3").click(function() {

                    
                // 이미지를 중앙부터 사라지게 하는 애니메이션을 추가할 수 있습니다.
                $(".design3").css({'right': '-100%', 'top': '-100%'})
      
                $(".designMain2").css({'opacity': '1'})
                // $(".design").css({'right': '-100%', 'top': '-100%'})
                $(".design3").removeClass('on')
                });


                $(".design_homebtn4").click(function() {

                    
                  // 이미지를 중앙부터 사라지게 하는 애니메이션을 추가할 수 있습니다.
                  $(".design4").css({'left': '-100%', 'bottom': '-100%'})
        
                  $(".designMain2").css({'opacity': '1'})
                  // $(".design").css({'right': '-100%', 'top': '-100%'})
                  $(".design4").removeClass('on')
                  });

                  const $slides = $('.slider');
                  const $prevBtn = $('.left');
                  const $nextBtn = $('.right');
                  const slideWidth = $('.slider>div').outerWidth();
                  let currentIndex = 0;
                
                  $prevBtn.on('click', function() {
                    currentIndex = (currentIndex - 1 + 3) % 3;
                    updateSlider();
                  });
                
                  $nextBtn.on('click', function() {
                    currentIndex = (currentIndex + 1) % 3;
                    updateSlider();
                  });
                
                  function updateSlider() {
                    $slides.css('transform', 'translateX(' + (-currentIndex * slideWidth) + 'px)');
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



        


    })


