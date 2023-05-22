// 导航栏切入
$('#navbar .nav .nav_li').hover(function () {
    $(this).children('.menuDown').stop().slideDown();
    $(this).find('.iconfont').addClass('active')

}, function () {
    $(this).children('.menuDown').stop().slideUp();
    $(this).find('.iconfont').removeClass('active');
})

// 下拉导航栏 产品图切换
$('.menuDown .left_content .list-group-item').hover(function () {
   let coverImg = $(this).attr('data-cover');
   let coverText = $(this).attr('data-text')
   $('.menuDown .right_cover .cover').attr('src', coverImg);
   $('.menuDown .right_cover .cover').text(coverText);
})