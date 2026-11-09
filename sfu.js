$(".sf-account").remove();
$("footer").remove();
$(".nav.navbar-nav.navbar-right").remove();
$(".live-chat").remove();
$('.sf-hq-page').text('');
$('a[href*="/overview/nacho"]').remove();
$('body').mouseover(function () {
    $(".sf-account").remove();
    $('a[href*="/overview/nacho"]').remove();
    $("footer").remove();
    $(".nav.navbar-nav.navbar-right").remove();
    $(".live-chat").remove();
    $('.sf-hq-page').text('');
    $(".mb-8.hero.hide-on-export").remove();
    $(".region").remove();
});