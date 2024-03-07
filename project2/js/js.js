// 제이쿼리방식으로 시작할지 
// 라이브러리를 사용하지않고 사용할지를 결정하세요



$(function(){



$('.btn li').click(function(){

    let i = $(this).index()
    $('.btn li').removeClass('on')
    $(this).addClass('on')

    
    });

    $('.btn li').click(function(){

        var i = $(this).index()
        console.log(i);
        $('.txtBox li').removeClass('on')
        $(this).addClass('on')
    
        
        });

    $('.btn li').click(function(){

        var i = $(this).index()
        console.log(i);
        $('.imgBox li').fadeOut()
        $('.imgBox li').eq(i).fadeIn()
    });

    $('.btn li').click(function(){

        var i = $(this).index()
        console.log(i);
        $('.txtBox li').fadeOut()
        $('.txtBox li').eq(i).fadeIn()
        
        
    });



    $('.menubtn').mouseenter(function(){

        console.log(i);

    
        $('.menuA').addClass('no')
    
    });
    $('.menuA').mouseleave(function(){
    
        
    
        
        $('.menuA').removeClass('no')
    
    });


    $('.globe').mouseenter(function(){

    

    
        $('.menuB').addClass('no')
    
    });
    $('.menuB').mouseleave(function(){
    
        
    
        
        $('.menuB').removeClass('no')
    
    });




    $('.box1').mouseenter(function(){
    

// var url = "img/box1_bg2.jpg";
 

    $(".box1").css({
    "background-image": `url(img/box1_bg2.jpg)`
    
    });



});

$('.box1').mouseleave(function(){
    

    // var url = "img/box1_bg1.jpg";
 

    $(".box1").css({
    "background-image": `url(img/box1_bg1.jpg)`
    
    });
});









// var imgs='';
//     for(var a = 0; a<200; a++){

//         imgs +="<img src=img/toto"+a+".jpg>"
//         console.log(imgs)

//     }





    $('body').mousemove(function(e){

        var X = e.pageX
        var wd = $(window).width()
        var xNum = Math.floor((X/wd)*258)
        $('.box7>h1').text(xNum)

        $('.topvid>img').attr({'src':'img/toto'+xNum+'.jpg'})

    });


    $('.Magpie img').click(function(){

        let i = $(this).index()
        $('.menu1').removeClass('oon')
        $('.menu1').addClass('oon')
    
        
        });

        $('.menu1').click(function(){

            let i = $(this).index()
            $('.menu1').removeClass('oon')
            
        
            
            });
    





            $('.ARUM').click(function(){

                let i = $(this).index()
                $('.menu2').removeClass('oon')
                $('.menu2').addClass('oon')
            
                
                });
        
                $('.menu2').click(function(){
        
                    let i = $(this).index()
                    $('.menu2').removeClass('oon')
                    
                
                    
                    });





                    $('.EDITION').click(function(){

                        let i = $(this).index()
                        $('.menu3').removeClass('oon')
                        $('.menu3').addClass('oon')
                    
                        
                        });
                
                        $('.menu3').click(function(){
                
                            let i = $(this).index()
                            $('.menu3').removeClass('oon')
                            
                        
                            
                            });



                            
                            $('.GORILLA img').click(function(){

                                let i = $(this).index()
                                $('.menu4').removeClass('oon')
                                $('.menu4').addClass('oon')
                            
                                
                                });
                        
                                $('.menu4').click(function(){
                        
                                    let i = $(this).index()
                                    $('.menu4').removeClass('oon')
                                    
                                
                                    
                                    });
                                    






        

        $('.btnn').click(function(){

            let i = $(this).index()
            $('.vida').removeClass('no')
            $('.vida').addClass('no')


    
            });
                                
                $('.vida').click(function(){
                                
                let i = $(this).index()
                $('.vida').removeClass('no')


            
            });


        

            $('.alcs li').hover(function(){

                let i = $(this).index()
                $('.bar21 img').removeClass('yo')
                $('.bar21 img').addClass('yo')
            },1000);


                $('.alcs li').hover(function(){

                    var i = $(this).index()
                    console.log(i);
                    $('.bar21 img').stop().fadeOut()
                    $('.bar21 img').eq(i).stop().fadeIn()
                },1000);
    


                $('.alcs li').hover(function(){

                    let i = $(this).index()
                    $('.list1 li').removeClass('yo')
                    $('.list1 li').addClass('yo')
                },1000);

                $('.alcs li').hover(function(){

                    var i = $(this).index()
                    console.log(i);
                    $('.list1 li').stop().fadeOut()
                    $('.list1 li').eq(i).stop().fadeIn()
                },1000);
        




                $('.img1 p').click(function(){

                    let i = $(this).index()
                    $('.sonbi').removeClass('oon')
                    $('.sonbi').addClass('oon')
                
                    
                    });
            
                    $('.botlogo img').click(function(){
            
                        let i = $(this).index()
                        $('.sonbi').removeClass('oon')
                        
                    
                        
                        });



            // $('.topbar li:nth-child(1)').hover(function(){

            //     let i = $(this).index()
            //     // $('.menuA').removeClass('yo')
            //     $('.menuA').addClass('yo')
            // });


            // $('.box1').hover(function(){
            
            //     let i = $(this).index()
            //     $('.menuA').removeClass('yo')
                
            
                
            //     });



            // $(document).ready(function() {
            //     // 출력할 메시지를 변수에 저장
            //     var message = "판매가 : "+i+"원";
                
            //     // 메시지를 #output 요소에 추가
            //     $(".sell2").text(message);
            // });

            let i = 0; 


            // var ml = $('#ml1').val();
            // console.log(ml);

            // var nub = $('#nub1').val();
            // // $("#nub option:eq(0)").prop("selected", true); 
            // // $("#nub option:selected").text();
            // console.log(nub); 
            

            // var max = ml*nub;
            // console.log(max); 

            $('.shop').find('li').click(function(e){
    
                e.preventDefault()
    
    
            ++i;
            
                console.log(i)
    

                // 화이트
                var ml = $('#ml1').val();
                console.log(ml);
    
                var nub = $('#nub1').val();
                // $("#nub option:eq(0)").prop("selected", true); 
                // $("#nub option:selected").text();
                console.log(nub); 
                
    
                var max = ml*nub;
    
                // var sell = //첫번째 option 선택
            
    
                var message = "판매가 : "+max+"원";
                
                // 메시지를 #output 요소에 추가
                $(".sell1").text(message)

                    
            //     window.ReactionButtonType = 'reaction';
            //   window.ReactionApiUrl = '//yjcorp.tistory.com/reaction';
            //   window.ReactionReqBody = {
            //       entryId: 11
            //   }
              
            //   출처: https://yjcorp.tistory.com/11 [yj factory:티스토리]
                // console.log(sell);  

                // var max = nub


                // $('.bgu').find('span').text(max)


                // 블랙
                var ml1 = $('#ml2').val();
                // console.log(ml);

                var nub1 = $('#nub2').val();

                console.log(nub1); 
                

                var max1 = ml1*nub1;

                // var sell = //첫번째 option 선택
            

                var message = "판매가 : "+max1+"원";
                
                // 메시지를 #output 요소에 추가
                $(".sell2").text(message);


                // 골드
                var ml2 = $('#ml3').val();
                // console.log(ml);

                var nub2 = $('#nub3').val();

                console.log(nub2); 
                

                var max2 = ml2*nub2;

                // var sell = //첫번째 option 선택
            

                var message = "판매가 : "+max2+"원";
                
                // 메시지를 #output 요소에 추가
                $(".sell3").text(message);




                // 선비진
                var ml3 = $('#ml4').val();
                // console.log(ml);

                var nub3 = $('#nub4').val();

                console.log(nub3); 
                

                var max3 = ml3*nub3;

                // var sell = //첫번째 option 선택
            

                var message = "판매가 : "+max3+"원";
                
                // 메시지를 #output 요소에 추가
                $(".sell4").text(message);


                // 보드카
                var ml4 = $('#ml5').val();
                // console.log(ml);

                var nub4 = $('#nub5').val();

                console.log(nub4); 
                

                var max4 = ml4*nub4;

                // var sell = //첫번째 option 선택
            

                var message = "판매가 : "+max4+"원";
                
                // 메시지를 #output 요소에 추가
                $(".sell5").text(message);




                var ml5 = $('#ml6').val();
                // console.log(ml);

                var nub5 = $('#nub6').val();

                console.log(nub5); 
                

                var max5 = ml5*nub5;

                // var sell = //첫번째 option 선택
            

                var message = "판매가 : "+max5+"원";
                
                // 메시지를 #output 요소에 추가
                $(".sell6").text(message);




                var all = max+max1+max2+max3+max4+max5






                $('.tokki1').find('span').text(i)
                let txt = $(this).parents('li').find('a').html()
                console.log(txt)
                // alert(txt)
    
    
                $('.car').find('span').text(all)
                $('.car').find('.imgs').append(txt)
    
    
    
    
    
            });


            $('#nub1').click(function(){

                 var ml = $('#ml1').val();
                  console.log(ml);
    
                 var nub = $('#nub1').val();
                // $("#nub option:eq(0)").prop("selected", true); 
                // $("#nub option:selected").text();
                  console.log(nub); 
                
    
                 var max = ml*nub;
    
                // var sell = //첫번째 option 선택
                console.log(max); 
    
                var message = "판매가 : "+max+"원";
                
                // 메시지를 #output 요소에 추가
                $(".sell1").text(message)

                // $('.tokki1').find('span').text(i)
                // let txt = $(this).parents('li').find('a').html()
                // console.log(txt)
                // $('.car').find('.imgs').append(txt)

            });

            $('#nub2').click(function(){


                var ml1 = $('#ml2').val();
                // console.log(ml);

                var nub1 = $('#nub2').val();

                console.log(nub1); 
                

                var max1 = ml1*nub1;

                // var sell = //첫번째 option 선택
            

                var message = "판매가 : "+max1+"원";
                
                // 메시지를 #output 요소에 추가
                $(".sell2").text(message);
            });

            $('#nub3').click(function(){

                var ml2 = $('#ml3').val();
                // console.log(ml);

                var nub2 = $('#nub3').val();

                console.log(nub2); 
                

                var max2 = ml2*nub2;

                // var sell = //첫번째 option 선택
            

                var message = "판매가 : "+max2+"원";
                
                // 메시지를 #output 요소에 추가
                $(".sell3").text(message);

            });


            $('#nub4').click(function(){

                var ml3 = $('#ml4').val();
                // console.log(ml);

                var nub3 = $('#nub4').val();

                console.log(nub3); 
                

                var max3 = ml3*nub3;

                // var sell = //첫번째 option 선택
            

                var message = "판매가 : "+max3+"원";
                
                // 메시지를 #output 요소에 추가
                $(".sell4").text(message);

            });


            $('#nub5').click(function(){

                var ml4 = $('#ml5').val();
                // console.log(ml);

                var nub4 = $('#nub5').val();

                console.log(nub4); 
                

                var max4 = ml4*nub4;

                // var sell = //첫번째 option 선택
            

                var message = "판매가 : "+max4+"원";
                
                // 메시지를 #output 요소에 추가
                $(".sell5").text(message);

            });
            

            $('#nub6').click(function(){

                var ml5 = $('#ml6').val();
                // console.log(ml);

                var nub5 = $('#nub6').val();

                console.log(nub5); 
                

                var max5 = ml5*nub5;

                // var sell = //첫번째 option 선택
            

                var message = "판매가 : "+max5+"원";
                
                // 메시지를 #output 요소에 추가
                $(".sell6").text(message);

            });

    
    
            // .util에 있는 li중 첫번째 클릭시 , .shop이 보여라
    
            $('.shop li').click(function(){
    
                $('.car').css({'display':'block'})
    
    
            });
    
    
            // reset을 클릭했을때 shop이 사라져라
            $('.reset').click(function(){
    
                $('.car').css({'display':'none'})
            });



            $('.empty').click(function(){
                i=0;
                $('.car').find('span').text(i)
                // $('.util').find('span').text(i)
                // $('.shop section').find('div').html('')
                $('.car').find('.imgs').empty()
                

                var message = "판매가 : "+i+"원";
                
                // 메시지를 #output 요소에 추가
                $(".sell1").text(message);
                $(".sell2").text(message);
                $(".sell3").text(message);
                $(".sell4").text(message);
                $(".sell5").text(message);
                $(".sell6").text(message);
                
                $('#nub1').val('');
                $('#nub2').val('');
                $('#nub3').val('');
                $('#nub4').val('');
                $('#nub5').val('');
                $('#nub6').val('');
            })

            // $('.iogin').click(function(){

            //     $('.car').find('img').remove()
            //     $('.car').find('span').text('00')
            //     let i = $(this).return()
            //     // $('.util').find('span').text('0')
            // });
    

            // $(document).ready(function() {
            //     // 출력할 메시지를 변수에 저장
            //     var message = "판매가 : "+max+"원";
                
            //     // 메시지를 #output 요소에 추가
            //     $(".sell1").text(message);
            // });





})

// function count(type)  {
//    // 결과를 표시할 element
//    const resultElement = document.getElementById('result');
  
//    // 현재 화면에 표시된 값
//    let number = resultElement.innerText;
  
//    // 더하기/빼기
//    if(type === 'plus') {
//      number = parseInt(number) + 1;
//    }else if(type === 'minus')  {
//      number = parseInt(number) - 1;
//   }
  

//    // 결과 출력
//    resultElement.innerText = number;
//  }