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

    $('.box1').mouseenter(function(){
    

var url = "img/box1_bg2.jpg";
 

    $(".box1").css({
    "background-image": `url(${url})`
    
    });



});

$('.box1').mouseleave(function(){
    

    var url = "img/box1_bg1.jpg";
 

    $(".box1").css({
    "background-image": `url(${url})`
    
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







})

