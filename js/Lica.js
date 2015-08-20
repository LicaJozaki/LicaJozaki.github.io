$(function() {
    $("img.ChangePhoto1").click(function() {
        var ImgSrc = $(this).attr("src");
        var ImgAlt = $(this).attr("alt");
        $("img#MainPhoto1").attr({
            src: ImgSrc,
            alt: ImgAlt
        });
        $("img#MainPhoto1").hide();
        $("img#MainPhoto1").fadeIn("slow");
        return false;
    });
});
$(function() {
    $("img.ChangePhoto2").click(function() {
        var ImgSrc = $(this).attr("src");
        var ImgAlt = $(this).attr("alt");
        $("img#MainPhoto2").attr({
            src: ImgSrc,
            alt: ImgAlt
        });
        $("img#MainPhoto2").hide();
        $("img#MainPhoto2").fadeIn("slow");
        return false;
    });
});
$(function() {
    $("img.ChangePhoto3").click(function() {
        var ImgSrc = $(this).attr("src");
        var ImgAlt = $(this).attr("alt");
        $("img#MainPhoto3").attr({
            src: ImgSrc,
            alt: ImgAlt
        });
        $("img#MainPhoto3").hide();
        $("img#MainPhoto3").fadeIn("slow");
        return false;
    });
});

//ここからwork2
$(document).ready(function() {
//    change_thumb
    $(function() {
        $('.thumb_img a').click(function() {
            var h = $(this).eq(0).attr('rel');
            $('.target_img img').fadeOut(function() {
                ($('.target_img img').attr("src", h)).fadeIn();
            });
            return false;
        })
    });
});
