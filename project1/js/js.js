// 제이쿼리방식으로 시작할지 
// 라이브러리를 사용하지않고 사용할지를 결정하세요
$(function(){
    $('.ex1').children('li').not('.li02').css({'border-right':'2px solid #747474'});
    
    // 클릭한 나자신에게 색깔변경
$('.btn').children('li').click(function(){

// 실행문
$('.btn').children('li').removeClass('yo')


$(this).addClass('yo')

// $('.btn').children('.yo').not('.box2').css({'background-image': 'url(img/slide3.jpg)'});


});



$('.util').mouseenter(function(){

    

    
    $('.submenu').addClass('no')

});
$('.util').mouseleave(function(){

    

    
    $('.submenu').removeClass('no')

});


// $('.util').click(function(){

//     $('.submenu').removeClass('no')
//     $('.submenu').addClass('no')
    
// });

var ee = 1;    


$('.btn').children('li').click(function(){

    // 실행문
    
    $('.btn').children('li').removeClass('yo')
    $('.slide>div').removeClass('eo')
    var i = $(this).index()
    var qq = i+1
    $('.box2').css({'background-image': 'url(img/slide'+qq+'.jpg)'});
    $(this).addClass('yo')
    $('.slide>div:nth-child('+qq+')').addClass('eo')
    
    
    });

    let interval = setInterval(callback, 3000);


    


    function callback() {
        // console.log('a');
        ee++

    
        if(ee>4)ee=1 
        console.log(ee)
    
            //   var i = $(this).index()
            $('.btn').children('li').removeClass('yo')
            $('.slide>div').removeClass('eo')
    
    
            $('.box2').css({'background-image': 'url(img/slide'+ee+'.jpg)'});
            //   $('.btn li').ep(+ee+).addClass('yo')
            $('.btn>li:nth-child('+ee+')').addClass('yo')
            $('.slide>div:nth-child('+ee+')').addClass('eo');
    }





    // $('.btn li').ep(ee).addClass('yo')

    // var intervalId = setInterval(function() {
    //     // console.log("Hello, World!");

    //     ee++

    
    // if(ee>3)ee=0 
    // console.log(ee)

    //     // var i = $(this).index()
    //     $('.btn').children('li').removeClass('yo')



    //     $('.box2').css({'background-image': 'url(img/slide'+ee+'.jpg)'});
    //     // $(this).addClass('yo')
    //     // $('.btn').children('li').addClass('yo')





    //   }, 1000);





    //    var intervalId = clearInterval(function() {


        // $('.btn1').children('i').click()


    //    })

    // const btnStart = document.getElementsByClassName("noa");
    // const btnStop = document.getElementsByClassName("no");

    // btnStart.onclick = function () {
    //     // 기존에 있던 setInterval 없애고
    //     clearInterval(interval);
      
    //     interval = setInterval(startTimer, 10);
    //   };
      
    //   btnStop.onclick = function () {
    //     clearInterval(interval);
    //   };
      


    $('.btn1 div').eq(0).click(function(){

        $('.btn1').children('div').removeClass('no')
        clearInterval(interval);
        $('.btn1 div').eq(1).addClass('no')

    })

    $('.btn1 div').eq(1).click(function(){

        $('.btn1').children('div').removeClass('no')
        interval = setInterval(callback, 1000);
        $('.btn1 div').eq(0).addClass('no')

    })


//     let interval = setInterval(callback, 1000);

// function callback() {
// 	console.log('a');
// }


    // $('.btn1').click(function(){

    //     $('.btn1').children('a').removeClass('no')

    //     console.log(intervalId);
    //     $('.btn1').eq(0).addClass('no')

    // })


    // clearInterval(intervalId);
    
$('.aww').children('li').not('.arr').css({'border-bottom':'1px solid #000'});





// titleBox 의 li의 순번찾기
$('.titleBox li').click(function(){

// 클릭한나 자신의 순번을 변수로 지정하기

var i = $(this).index()
// 콘솔에 확인하기
console.log(i)
// 찾아낸순번을 listBox안의 div의 순서에 맞게 보이기
$('.box3-2>div').css({'display':'none'})
$('.box3-2>div').eq(i).css({'display':'block'})

$('.titleBox li').removeClass('on')

// 클릭한 나자신에게 클래스'on 값 더하기
$(this).addClass('on')
});

/*


$('.left').children('i').click(function(){

// 실행문
$('.listBox1').children('ul').css({'left':'-416px'})

})



$('.right').children('i').click(function(){

// 실행문
$('.listBox1').children('ul').css({'left':'416px'})
}); */

$( "#datepicker" ).datepicker();




$('#button1').click(function(e){
    e.preventDefault()
    let SelectDate = $( "#datepicker" ).datepicker('getDate');
    // let pep = $('#name').text()
    let pname = $('#people option:selected').text() 
    let selcetMon = SelectDate.getMonth()
    // selceMon +1로 출력
    let selcetday = SelectDate.getDate()

    
    // alert(
    //     '예약날짜'+(selcetMon+1)+'월'+selcetday+'일'+'\n'+ '예약인원'
    //     +pep+'명'+'\n'+'프로그램명 :'+pname
    // )


// $('.fixed article li').eq(0).find('span').text(pep+'님')
$('.fixed article li').eq(1).find('span').text(pname)
$('.fixed article li').eq(2).find('span').text((selcetMon+1)+'월'+selcetday+'일');

$('.fixed').addClass('on')
$('body').addClass('fix1')

});

$('.fixed article p').click(function(){

$('.fixed').removeClass('on')
$('body').removeClass('fix')
})


$('.box7 .img li').click(function(e){
    e.preventDefault()
    
$('.fixed1').addClass('on')
$('body').addClass('fix1')

});

$('.fixed1 article p').click(function(){

$('.fixed1').removeClass('on')
$('body').removeClass('fix1')
})



$('.box7 .img li').eq(0).click(function(){
                
    let i = $(this).index()

    $('.fixed1 .imgda').css({'background-image': 'url(img/g1.jpg)'});
    // $('.txtli li').removeClass('on')
    // $('.txtli li').eq(0).addClass('on')
    
  });

$('.box7 .img li').eq(1).click(function(){
                
    let i = $(this).index()

    $('.fixed1 .imgda').css({'background-image': 'url(img/g2.jpg)'});
    // $('.txtli li').removeClass('on')
    // $('.txtli li').eq(0).addClass('on')
    
  });

  $('.box7 .img li').eq(2).click(function(){
                
    let i = $(this).index()

    $('.fixed1 .imgda').css({'background-image': 'url(img/g3.jpg)'});
    // $('.txtli li').removeClass('on')
    // $('.txtli li').eq(0).addClass('on')
    
  });


  $('.box7 .img li').eq(3).click(function(){
                
    let i = $(this).index()

    $('.fixed1 .imgda').css({'background-image': 'url(img/g4.jpg)'});
    // $('.txtli li').removeClass('on')
    // $('.txtli li').eq(0).addClass('on')
    
  });


var bb=0;

$('.left ').click(function(){

    bb++
    $('.listBox4').css({'left':-414*bb})
    $('.listBox4 li').removeClass('on');
    // console.log(bb)
    $('.listBox4 li').eq(bb+1).addClass('on')
    $('.listBox4 li').eq(bb).clone().appendTo('.listBox4')
})



$('.right ').click(function(){

    bb++
    $('.listBox4').css({'left':-414*bb})
    // $('.listBox4 li').removeClass('on');
    // console.log(bb)
    // $('.listBox4 li').eq(bb+1).addClass('on')
      $('.listBox4 li').eq(bb).clone().appendTo('.listBox4')
})


// $('.right').click(function(){

//     bb++
//     $('.listBox4').css({'left': -414*bb})
//     $('.listBox4 li').removeClass('on');
//     console.log(bb)
//     $('.listBox4 li').eq(bb+1).addClass('on')
//     $('.listBox4 li').eq(bb).clone().appendTo('.listBox4')
// })

// setInterval(function(){
//     $('.left').trigger('click')

//  },2000)



document.getElementById('name2').onsubmit =function(){

    console.log('클릭했습니다.');
    var txt = document.getElementById('name2').list.value;
    console.log(txt);
    alert(txt)
    return false;
}












})

function printName()  {
    const name = document.getElementById('name').value;
    document.getElementById("result").innerText = name;
  }

function good(){

alert('예약이 완료되었습니다.')
    

}

// let playRepeat;
// function startInterval(){
//     playRepeat = setInterval(function(){
    
//     },3000); 
// };


// function endInterval(){
//      clearInterval(playRepeat);
// };