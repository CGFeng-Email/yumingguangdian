// 导航栏切入
$('#navbar .nav .nav_li').hover(function () {
    $(this).children('.menuDown').stop().slideDown();
    $(this).find('.iconfont').addClass('active')
}, function () {
    $(this).children('.menuDown').stop().slideUp();
    $(this).find('.iconfont').removeClass('active');
})

// pc 下拉导航栏 产品图切换
$('.menuDown .left_content .list-group-item').hover(function () {
   let coverImg = $(this).attr('data-cover');
   let coverText = $(this).attr('data-text')
   $('.menuDown .right_cover .cover').attr('src', coverImg);
   $('.menuDown .right_cover .cover').text(coverText);
})

// h5 下拉导航栏 展开
$('#navbar .nav .nav_li_wrap .icon').click(function () {
    $(this).parents('.nav_li').siblings().find('.icon').removeClass('icon_rolate')
    $(this).toggleClass('icon_rolate');
    $(this).parents('.nav_li').siblings().find('.h5_menuDown').slideUp()
    $(this).parent('.nav_li_wrap').siblings('.h5_menuDown').slideToggle('slow');
})

// 搜索栏
let downSearch = false;
$('.navbar .right_function .search').click(function () {
    $('#navbar').removeClass('in')
    if(downSearch) {
        $('.down_search').stop().slideUp();
    } else {
        $('.down_search').stop().slideDown();
    }
    downSearch = !downSearch
})

// 搜索栏关闭
$('.down_search .clone').click(function () {
    downSearch = false;
    $('.down_search').slideUp()
})

