let duration = 60 * 10; 

window.onload = ()=>{
    $('.start').css('display','flex')
    $('.menu-start').hide()
    $('.menu-on').hide()
    $('#frequency').mask('000')

    $('.start').click(()=>{
        $('.start').fadeOut(500)

        setTimeout(() => {
            $('.menu-start').fadeIn(200)
        }, 600);
    })

    $('#start-pager').click(()=>{
        if($('#frequency')[0].value > 0 || $('#frequency')[0].value < 1000 ){
            startTimer(duration); 
            $('.frequency-select').html(`${$('#frequency')[0].value}`)
            $('.menu-start').fadeOut(500)

            setTimeout(() => {
                $('.menu-on').fadeIn(200)
            }, 600);
        }
    })

}

function startTimer(duration) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        $('#timer').html(`${minutes + ":" + seconds}`)
        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}