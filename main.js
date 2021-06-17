let body = $('body');
// Calculating the middle position of the page
let windowCenter = $(window).width() - $('.logo').width();

let logoAnim = anime({
    targets: '#logo',
    duration: 1500,
    translateX: windowCenter / 2,
    easing: 'easeInOutExpo'
});

let logo = $('#logo');
$('#logo').hide()
$('#logo').fadeIn(1300);

$(document).ready(function() {
    $('#logo').show();
    logo = logoAnim;
    setTimeout(function() {
        $('#logo').fadeOut(500);
    }, 1300)
    setTimeout(function() {
        $('.fullscreen__wrapper').fadeOut(700);
    }, 2000)
});

$('.website_container').fadeOut();

$(document).ready(function() {
    setTimeout(function() {
        $('body').addClass('scrolling__blocking');
        $('.website_container').fadeIn(500)
    },2700)
});