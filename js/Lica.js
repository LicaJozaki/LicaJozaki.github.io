//$(function(){
//var click_flg = false;
//$(".mod_thumlist a").click(function(){
// if(click_flg == false) {
//		click_flg = true;
//		$(".mod_thumlist_photo_entry").before("<div class=\"mod_thumlist_photo_entry\"><img src='"+$(this).attr("href")+"' alt='"+$(this).attr("title")+"'><p>"+$(this).attr("title")+"</p>");
//		$(".mod_thumlist_photo_entry:last").stop(true, false).fadeOut("fast",function(){
//		 $(this).remove();click_flg = false;});
//			return false;
//	}else{
//		return false;
//	}
//});
//});
$(function(){
	$("img.ChangePhoto").click(function(){
		var ImgSrc = $(this).attr("src");
		var ImgAlt = $(this).attr("alt");
		$("img#MainPhoto").attr({src:ImgSrc,alt:ImgAlt});
		$("img#MainPhoto").hide();
		$("img#MainPhoto").fadeIn("slow");
		return false;
	});
});