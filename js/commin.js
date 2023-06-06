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
    if (downSearch) {
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

// 首页banner
var banner_swiper = new Swiper('.banner_swiper', {
    autoplay: {
        disableOnInteraction: false,
    },
    speed: 600,
    loop: true,
    on: {
        init: function () {
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChange: function () {
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    }
})

// banner下拉菜单
$('.banner_swiper .swiper_nav .down').click(function () {
    let i = $(this).index();

    $('.index .menu_list .item').stop().slideUp();

    // console.log($(this).hasClass('active'));

    if ($(this).hasClass('active')) {
        $('.banner_swiper .swiper_nav .down').removeClass('active');
        $('.banner_swiper .swiper_nav .down .iconfont').removeClass('iconfont_active')
    } else {
        $(this).addClass('active').siblings().removeClass('active');
        $(this).siblings().children('.iconfont').removeClass('iconfont_active');
        $(this).children('.iconfont').addClass('iconfont_active')
    }

    $('.index .menu_list .item').eq(i).stop().slideToggle();
})

// h5 banner下拉菜单
$('.index .menu_list .h5_menu_list .head').click(function () {
    if ($(this).find('.iconfont').hasClass('active')) {
        $(this).find('.iconfont').removeClass('active')
    } else {
        $(this).find('.iconfont').addClass('active').siblings().parents('.nav_li').siblings().find('.iconfont').removeClass('active')
    }

    $(this).parent().siblings().children('.list_content').stop().slideUp()
    $(this).siblings('.list_content').stop().slideToggle();
})

// 更新日程 下拉菜单
$('.index .stay_update .select_wrap .btn_down').click(function () {
    $(this).siblings('.select_list').stop().slideToggle();
})

// 首页新闻swiper
var swiper_news = new Swiper('.swiper_news', {
    autoplay: {
        disableOnInteraction: false,
        delay: 4000,
    }, 
    speed: 1000,
    loop: true,
    on: {
        init: function () {
            swiperAnimateCache(this); //隐藏动画元素
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChange: function () {
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

// 初始化动画
$(function () {
    new WOW().init();
})