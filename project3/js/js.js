// 제이쿼리방식으로 시작할지 
// 라이브러리를 사용하지않고 사용할지를 결정하세요

$(function(){ 
    $('.myVideo').bind("ended", true, function() {
        $('.box1 .vida').addClass('on')
})
        
     



$('body').mousemove(function(e){

    var X = e.pageX
    var wd = $(window).width()
    var xNum = Math.floor((X/wd)*30)
    $('.move1>h1').text(xNum)

    $('.move1>img').attr({'src':'img/box_v'+xNum+'.jpg'})

});


$('.btn1 li').click(function(){

    
    let i = $(this).index()
    // console.log(i)

    $('.li1').animate({'scrollLeft':1440*i},200)
    $('.list1').removeClass('on')
    $('.list1').eq(i).addClass('on')

});


$('.btn1').children('li').click(function(){

    // 실행문
    $('.btn1').children('li').removeClass('on')
    $(this).addClass('on')
    });

    

    $('.nav').click(function(e){
        e.preventDefault()

        let i = $(this).index()
        $('.menu').removeClass('on')
        $('.menu').addClass('on')
    
        
        });

        $('.menu p').click(function(){

            let i = $(this).index()
            $('.menu').removeClass('on')
            
        
            
            });



            $('.box3_1 p').click(function(){

                let i = $(this).index()
                $('.more1').removeClass('on')
                $('.more1').addClass('on')
            
                
                });
        
                 $('.more1').click(function(){
        
                     let i = $(this).index()
                     $('.more1').removeClass('on')
                    
                
                    
                     });

                     var ai = 0;
                     $('.box3 .right').click(function(){
                         var liwd = $('.box3').width()
                         if(ai<2) ai++;
                         console.log(ai)
                 
                         $('.box3_1').stop().animate({'left':-(liwd*ai)},1200)
                 
                 
             });
         $('.box3 .left').click(function(){
             var liwd = $('.box3').width()
         if(ai>0)ai--;
         console.log(ai)
             $('.box3_1').stop().animate({'left':-(liwd*ai)},1200)
         });




        //  const slider = document.querySelector('.asd');
        //  const slides = document.querySelectorAll('.box3_1');
        //  const prev = document.querySelector('.left');
        //  const next = document.querySelector('.right');
        //  const slideWidth = slides[0].offsetWidth;
     
        //  let currentIndex = 0;
     
        //  function goToSlide(index) {
        //      slider.style.transform = `translateX(-${index * slideWidth}px)`;
        //      currentIndex = index;
        //  }
     
        //  function slideNext() {
        //      if (currentIndex < slides.length - 1) {
        //          goToSlide(currentIndex + 1);
        //      } else {
        //          goToSlide(0);
        //      }
        //  }
     
        //  function slidePrev() {
        //      if (currentIndex > 0) {
        //          goToSlide(currentIndex - 1);
        //      } else {
        //          goToSlide(slides.length - 1);
        //      }
        //  }
     
        //  next.addEventListener('click', slideNext);
        //  prev.addEventListener('click', slidePrev);



         $('.box4_1 p').click(function(){

            let i = $(this).index()
            $('.more2').removeClass('on')
            $('.more2').addClass('on')
        
            
            });
    
             $('.more2').click(function(){
    
                 let i = $(this).index()
                 $('.more2').removeClass('on')
                
            
                
                 });

                 var ai2 = 0;
                 $('.box4 .right').click(function(){
                     var liwd2 = $('.box4 img').width()
                     if(ai2<2) ai2++;
                     console.log(ai2)
             
                     $('.box4_1').stop().animate({'left':-(liwd2*ai2)},1200)
             
             
         });
     $('.box4 .left').click(function(){
         var liwd2 = $('.box4 img').width()
     if(ai2>0)ai2--;
     console.log(ai2)
         $('.box4_1').stop().animate({'left':-(liwd2*ai2)},1200)
     });





     $('.box5_1 p').click(function(){

        let i = $(this).index()
        $('.more3').removeClass('on')
        $('.more3').addClass('on')
    
        
        });

         $('.more3').click(function(){

             let i = $(this).index()
             $('.more3').removeClass('on')
            
        
            
             });

             var ai = 0;
             $('.box5 .right').click(function(){
                 var liwd = $('.box5 img').width()
                 if(ai<2) ai++;
                 console.log(ai)
         
                 $('.box5_1').stop().animate({'left':-(liwd*ai)},1200)
         
         
     });
 $('.box5 .left').click(function(){
     var liwd = $('.box5 img').width()
 if(ai>0)ai--;
 console.log(ai)
     $('.box5_1').stop().animate({'left':-(liwd*ai)},1200)
 });



 $('body').mousemove(function(e){

    var X = e.pageX
    var wd = $(window).width()
    var xNum = Math.floor((X/wd)*60)
    $('.move2>h1').text(xNum)

    $('.move2>img').attr({'src':'img/box6_A'+xNum+'.jpg'})

});





$('.move2').click(function(){

    let i = $(this).index()
    $('.move2').removeClass('on')
    $('.move2').addClass('on')

    
    });

    $('h1').click(function(){

        let i = $(this).index()
        $('.move2').removeClass('on')
        
    
        
        });


        
    $('move2').click(function(){

        let i = $(this).index()
        $('.footer').removeClass('on')
        
    
        
        });



        // $('body').mousemove(function(e){

        //     var X = e.pageX
        //     var wd = $(window).width()
        //     var xNum = Math.floor((X/wd)*200)
        //     $('.vaq2>h1').text(xNum)
        
        //     $('.vaq2>img').attr({'src':'img/box3_B'+xNum+'.png'})
        
        // });




        // $('nav li').eq(3).click(function(){
            
    
            // })

            // window.scrollTo({left:0, top:2300})

            // document.queryselector(".box3").scrollinfoView();



            // $('.menu2 li').click(function(){

    
                // let i = $(this).index()
                // console.log(i)
            
                // $('section').animate({'scrollTop':953*i},200)
                // $('.list1').removeClass('on')
                // $('.list1').eq(i).addClass('on')
            
            // });
            

            $('.menu2 li').eq(0).click(function(){
                
                $('section').animate({'scrollTop':1906},200)
              });

              $('.menu2 li').eq(1).click(function(){
                
                $('section').animate({'scrollTop':2859},200)
              });

              $('.menu2 li').eq(2).click(function(){
                
                $('section').animate({'scrollTop':3812},200)
              });

              $('.menu2 li').eq(3).click(function(){
                
                $('section').animate({'scrollTop':4765},200)
              });

              $('.menu1 li').eq(0).click(function(){
                
                $('section').animate({'scrollTop':0},200)
              });

              $('.menu1 li').eq(1).click(function(){
                
                $('section').animate({'scrollTop': (".box2") },200)
              });


              // let resizeTimer;
              // let isResize = false;
              // $(window).on('resize', () => {
              //     clearTimeout(resizeTimer);
              //     isResize = true;
              //     resizeTimer = setTimeout(function() {
              //         $fixedBox.css({ 'position': 'absolute', 'top': '0' });
              //         initialTop = $fixedBox.offset().top;
              //         isResize = false;
              //         updatePosition();
              //     }, 100);
              // });



            //   var timer=setInterval(function(){
            //     //변수 시간 데이터 저장
            
            //     var now= new Date();
            //     var hr = now.getHours();
            //     var min= now.getMinutes();
            //     var sec= now.getSeconds();
            
            // if(sec>=10){
            //     SNum =sec}
            //     else{
            
            //     SNum = "0"+sec;}
            
            
            
            
            
            //     $("p span").eq(0).text(hr);
            //     $("p span").eq(1).text(min);
            //     $("p span").eq(2).text(SNum);
            
            // },1000);

            
            function startClock() {}

            
            let qr= -1
            var timer=setInterval(function(){
 
                qr++
              if(qr>29)qr=0 


                // console.log(qr)
                    $('.vaq1 img').attr({'src':'img/box3_A'+qr+'.jpg'})
                    $('.vaq2 img').attr({'src':'img/box3_B'+qr+'.jpg'})
                    $('.vaq3 img').attr({'src':'img/box3_C'+qr+'.jpg'})
                    $('.show1 img').attr({'src':'img/box4_A'+qr+'.jpg'})
                    $('.show2 img').attr({'src':'img/box4_B'+qr+'.jpg'})
                    $('.show3 img').attr({'src':'img/box4_C'+qr+'.jpg'})
                    $('.bio1 img').attr({'src':'img/box5_A'+qr+'.jpg'})
                    $('.bio2 img').attr({'src':'img/box5_B'+qr+'.jpg'})
                    $('.bio3 img').attr({'src':'img/box5_C'+qr+'.jpg'})





            },400)
        

            function stopClock() {

                // timer의 반복실행을 종료한다.
          
                clearInterval(timer);
          



              }

              
              $('.vidli li').eq(0).click(function(){
                
                let i = $(this).index()

                $('.mainvid video').attr({'src':'img/vid2.mp4'})
                $('.txtli li').removeClass('on')
                $('.txtli li').eq(0).addClass('on')
                
              });





              $('.vidli video').eq(1).click(function(){
                
                let i = $(this).index()

                $('.mainvid video').attr({'src':'img/vid3.mp4'})
                $('.txtli li').removeClass('on')
                $('.txtli li').eq(1).addClass('on')
                
            
                
              });



              $('.vidli li').eq(2).click(function(){
                
                let i = $(this).index()

                $('.mainvid video').attr({'src':'img/vid4.mp4'})
                $('.txtli li').removeClass('on')
                $('.txtli li').eq(2).addClass('on')

              });



              $('.vidli li').eq(3).click(function(){
                
                let i = $(this).index()

                $('.mainvid video').attr({'src':'img/vid5.mp4'})
                $('.txtli li').removeClass('on')
                $('.txtli li').eq(3).addClass('on')

                
              });

            // let qe= -1
            // var timer=setInterval(function(){
 
            //     qe++
            //   if(qe>58)qe=0 


            //     console.log(qe)
            //         $('.vaq1 img').attr({'src':'img/box3_A'+qe+'.png'})





            // },400);




            // let qt= -1
            // var timer=setInterval(function(){
 
            //     qt++
            //   if(qt>84)qt=0 


            //     console.log(qt)
            //         $('.vaq3 img').attr({'src':'img/box3_C'+qt+'.png'})





            // },400)












// let aii= -1
//             var timer=setInterval(function(){
 
//                 aii++
//               if(aii>130)aii=0 
//                 // var sec= now.getSeconds();

//                 // if(sec>=130){
//                 //     SNum =sec}
//                 //         else{
                    
//                 //         SNum = "0"+sec;}

// console.log(aii)
//                     $('.show1 img').attr({'src':'img/box4_A'+aii+'.png'})





//             },200);



            // let va= -1
            // var timer=setInterval(function(){
 
            //     va++
            //   if(va>81)va=0 


            //     console.log(va)
            //         $('.show2 img').attr({'src':'img/box4_B'+va+'.png'})





            // },400);

            // let qw= -1
            // var timer=setInterval(function(){
 
            //     qw++
            //   if(qw>116)qw=0 


            //     console.log(qw)
            //         $('.show3 img').attr({'src':'img/box4_C'+qw+'.png'})





            // },400);






            // let qa= -1
            // var timer=setInterval(function(){
 
            //     qa++
            //   if(qa>97)qa=0 


            //     console.log(qa)
            //         $('.bio1 img').attr({'src':'img/box5_A'+qa+'.png'})





            // },400)

            // let qs= -1
            // var timer=setInterval(function(){
 
            //     qs++
            //   if(qs>161)qs=0 


            //     console.log(qs)
            //         $('.bio2 img').attr({'src':'img/box5_B'+qs+'.png'})





            // },400)





            // let qd= -1
            // var timer=setInterval(function(){
 
            //     qd++
            //   if(qd>131)qd=0 


            //     console.log(qd)
            //         $('.bio3 img').attr({'src':'img/box5_C'+qd+'.png'})





            // },400)




             var bb=0;

             $('.divbox1 p').click(function(){
        
                 bb++
                 $('.slide1').css({'left':-350*bb})
                 $('.slide1 li').removeClass('on');
                 console.log(bb)
                 $('.slide1 li').eq(bb+2).addClass('on')
                 $('.slide1 li').eq(bb-2).clone().appendTo('.slide1')
             })
        
             setInterval(function(){
                 $('.divbox1 p').trigger('click')
                 $('.divbox1 h1').stop('hover')
                
              },2000)


            $('.slide1 img').click(function(){
                // $(".slide1 img").stop();
                clearInterval(timer);
            });


            //   var bb=0;

            //   $('.show1').click(function(){
          
                
                // var wd = $(window).width()
                // var xNum = Math.floor((X/wd)*130)
                //   bb++
                  
                //   $('.show1 img').removeClass('on');
                  
            //   })
          
            //   setInterval(function(){
                //   $('show1 img').trigger('click')
          
            //   },2000)
          


            //   $('body').mousemove(function(e){

            //     var X = e.pageX
            //     var wd = $(window).width()
            //     var xNum = Math.floor((X/wd)*200)
            //     $('.vaq2>h1').text(xNum)
            
            //     $('.vaq2>img').attr({'src':'img/box3_B'+xNum+'.png'})
            
            // });



/*  

         let wht= $(window).height()
             $('section').height(wht)
         // 아티클의높이가 다를때 지정 
         $('.menu2 li').eq(0).click(function(){
             let ht0at= $('article').eq(2).offset().top
             console.log(ht0at)
             $('html,section').animate({'scrollTop':ht0at})

         });

         $('.menu2 li').eq(1).click(function(){
             let ht1at= $('article').eq(3).offset().top
             console.log(ht1at)
             $('html,section').animate({'scrollTop':ht1at})

           });

        $('.menu2 li').eq(2).click(function(){
             let ht2at= $('article').eq(4).offset().top
            console.log(ht2at)
            $('html,section').animate({'scrollTop':ht2at})

        });

        $('.menu2 li').eq(3).click(function(){
            let ht3at= $('article').eq(5).offset().top
            console.log(ht3at)
            $('html,section').animate({'scrollTop':ht3at})

         });

*/


        // const menus = document.querySelectorAll(".menu2>li");
        // const boxs = document.querySelectorAll("article");
        // // const oneTop = boxs[0].offsetTop
        // // const twoTop = boxs[1].offsetTop
        // const threeTop = boxs[2].offsetTop
        // const fourTop = boxs[3].offsetTop
        // const fiveTop = boxs[4].offsetTop
        // const sixTop = boxs[5].offsetTop

        // menus[0].onclick = function(e){
        //     e.preventDefault()
        //     console.log(threeTop)
        // $('html,body').stop().animate({'scrollTop':threeTop},500)
        // }   

        // menus[1].onclick = function(e){
        //     e.preventDefault()
        //     window.scroll({top:fourTop, behavior: 'smooth'})
        // }

        // menus[2].onclick = function(e){
        //     e.preventDefault()
        //     window.scroll({top:fiveTop, behavior: 'smooth'})
        // }

        // menus[3].onclick = function(e){
        //     e.preventDefault()
        //     window.scroll({top:sixTop, behavior: 'smooth'})
        // }

//         const rect = document.querySelector('.box2').getBoundingClientRect();
// console.log(rect);




$('.slide2').find('img').click(function(e){
    
    e.preventDefault()


// ++i;

//     console.log(i)

$('.popup1').css({'display':'block'})

// $('.tokki1').find('span').text(i)
let txt = $(this).parents('li').find('a').html()
console.log(txt)
// alert(txt)


// $('.car').find('span').text(all)
$('.popup1').find('.imgz').append(txt)

});




$('.popup1 p').click(function(){

    $('.popup1').css({'display':'none'})
    $('.popup1').find('.imgz').empty()


});

// $('.car').find('.imgs').empty()

// $('.slide2 li').find('img').click(function(){
                
//     let i = $(this).index()

//     $('.popup1 .imgz').css({'background-image': 'url(img/g1.jpg)'});
//     // $('.txtli li').removeClass('on')
//     // $('.txtli li').eq(0).addClass('on')
    
//   });


$('.txtA li').eq(1).click(function(){
                
    $('section').animate({'scrollTop':953},200)
  });

  $('.txtA li').eq(2).click(function(){
    
    $('section').animate({'scrollTop':1903},200)
  });

  $('.txtA li').eq(3).click(function(){
    
    $('section').animate({'scrollTop':2859},200)
  });



//   const $slides = $('.asd');
//   const $prevBtn = $('.left');
//   const $nextBtn = $('.right');
//   const slideWidth = $('.box3_1').outerWidth();
//   let currentIndex = 0;

//   $prevBtn.on('click', function() {
//     currentIndex = (currentIndex - 1 + 3) % 3;
//     updateSlider();
//   });

//   $nextBtn.on('click', function() {
//     currentIndex = (currentIndex + 1) % 3;
//     updateSlider();
//   });

//   function updateSlider() {
//     $slides.css('transform', 'translateX(' + (-currentIndex * slideWidth) + 'px)');
//   }


          });
        