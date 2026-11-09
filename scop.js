$("#mainNav").remove();
$("#userbox").remove();
$("span:contains('Manage Projects')").parent().remove();
$("span:contains('Recent Searches')").parent().remove();
$("#footer").remove();
$(".header-logo").html('<img alt="semscoop-logo" width="180" height="60" src="/vendor/theme/img/SEMScoop-logo-2.png">');
$('a[href$="/#Pricing"]').remove();
$("div:contains('Everything in one place to start your next ')").remove();
$(".word-rotator-title").parent().remove();
$('body').mouseover(function () {
    $("#mainNav").remove();
    $("#userbox").remove();
    $("span:contains('Manage Projects')").parent().remove();
    $("span:contains('Recent Searches')").parent().remove();
    $("#footer").remove();
    $('a[href$="/#Pricing"]').remove();
    $(".word-rotator-title").parent().remove();
    $("div:contains('Everything in one place to start your next ')").remove();
    $(".header-logo").html('<img alt="semscoop-logo" width="180" height="60" src="/vendor/theme/img/SEMScoop-logo-2.png">');
});





