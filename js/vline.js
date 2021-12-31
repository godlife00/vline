$(document).ready(function () {

    //상단 GNB 고정                
    
    
    
    //tabs
    $(".new_tabs .tab_content").hide();
    $(".new_tabs .tab_content:first").show();
    $(".new_tabs .tab_area ul li").on('click', function () {        
        $(".new_tabs .tab_area ul li").removeClass("active");        
        $(this).addClass("active");
        $(".new_tabs .tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).show();
    });
    $(".turn_tabs .tab_content").hide();
    $(".turn_tabs .tab_content:first").show();
    $(".turn_tabs .tab_area ul li").on('click', function () {        
        $(".turn_tabs .tab_area ul li").removeClass("active");        
        $(this).addClass("active");
        $(".turn_tabs .tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).show();
    });
    // 메인 상승종목,하락종목
    $(".updown_tabs .tab_content").hide();
    $(".updown_tabs .tab_content:first").show();
    $(".updown_tabs .tab_area ul li").on('click', function () {        
        $(".updown_tabs .tab_area ul li").removeClass("active");        
        $(this).addClass("active");
        $(".updown_tabs .tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).show();
    });
    
    //연환산,연간,분기 테이블 탭
    $("#container .M_right .contents .tab_content").hide();
    $("#container .M_right .contents .tab_content:first").show();
    $("#container .M_right .contents_header .table_filter .term span").on('click', function () {
        $("#container .M_right .contents_header .table_filter .term span").removeClass("active");
        $(this).addClass("active");
        $("#container .M_right .contents .tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).show();
    });

    //좌측 서브네비    
    // $("#container .M_left .sub_nav ul.depth_2 li").eq(0).addClass('active');
    // $("#container .M_left .sub_nav ul.depth_1 li.active ul.depth_2:first li").eq(0).addClass('active');
    // $("#container .M_left .sub_nav ul.depth_2 li").hover(function () {
    //     $("#container .M_left .sub_nav ul.depth_2 li").removeClass('active');
    //     $(this).addClass('active');
    // });
    // $("#container .M_left .sub_nav ul.depth_1 ul.depth_2").hide();
    // $("#container .M_left .sub_nav ul.depth_1 li.active ul.depth_2:first").show();
    // $("#container .M_left .sub_nav ul.depth_1 li .title").on('click', function () {
    //     $("#container .M_left .sub_nav ul.depth_1 ul.depth_2").hide();
    //     $("#container .M_left .sub_nav ul.depth_1 ul.depth_2").removeClass("active");
    //     $(this).addClass("active").next('.depth_2').slideToggle("fast", function () {
    //         $("#container .M_left .sub_nav ul.depth_1 li.active ul.depth_2:first li").eq(0).addClass('active');
    //     });
    // });
    // $("#container .M_left .sub_nav ul.depth_1 li").on('click', function () {
    //     $("#container .M_left .sub_nav ul.depth_1 li").removeClass("active");
    //     $(this).addClass("active")
    // });
    
    // 
    $('#container .M_right .contents_header .data_filter .set_box .set_filter .top .clse img').on('click', function () {
        $('#container .M_right .contents_header .data_filter .set_box').fadeOut();
    });

    //  테이블 상세보기, 소수점, 라인 숨기기
    $('.table tr.hide_line').hide();
    $('#container .M_right .contents_header .table_filter .detail span').on('click', function () {
        $(this).toggleClass('active');
    });
    $('#container .M_right .contents_header .table_filter .detail span.table_view').on('click', function () {
        $('.table tr.hide_line').toggle();
    });
    $('#container .M_right .contents_header .table_filter .detail span.simple').on('click', function () {
        $('#container .M_right .contents .bic_chartbox .chart_line .con_box .right').toggleClass('hide');
    })

    // 자세히보기 열기닫기
    $('#container .M_right .sum_box .more').on('click', function () {
        // div 사이즈는 big, small        
        if ($(this).parent('div').hasClass("small")) {
            $(this).next('p').animate({
                height: '100%'
            }, 0);
            $(this).parent('div').removeClass('small').addClass('big');
            $('#container .M_right .sum_box .more').text("접기 ");

        } else {
            $(this).next('p').animate({
                height: '20px'
            }, 0);
            $(this).parent('div').removeClass('big').addClass('small');
            $('#container .M_right .sum_box .more').text("자세히");
        }
    });

    // 쇼핑리스트 리셋
    $('.form_resetBtn').on('click', function () {
        $("#shopping_form")[0].reset();
    });

    // 테이블 필터링 숨기기,보이기
    $("#container .M_right .contents_header .data_filter .set_box").hide();
    $('#container .M_right .contents_header .data_filter .data .set').on('click', function () {
        $("#container .M_right .contents_header .data_filter .set_box").toggle();        
    });

    //
    $('#container .M_right .page_drop ul').hide();
    $('#container .M_right .page_drop .select_active').on('click', function () {
        $('#container .M_right .page_drop ul').slideToggle('fast');
    });

    // table 좌측 고정
    $(".fix_table").clone(true).appendTo('#table-scroll').addClass('clone');       
    

    // 종목발굴 우량주 정렬 박스
    $('#container .M_right .contents_header .data_filter .set_box .set_filter .mid .sort_box .sort li').on('click', function () {
        $("#container .M_right .contents_header .data_filter .set_box .set_filter .mid .sort_box .sort li").removeClass("active");
        $(this).addClass("active")
    });

    // 마우스 따라 열리는 레이어 팝업
    $('.layer_pop').hide();
    $('.pop_open').on('click', function (e) {

        var sWidth = window.innerWidth;
		var sHeight = window.innerHeight;

		var oWidth = $('.layer_pop').width();
		var oHeight = $('.layer_pop').height();

        var divLeft = e.clientX + 10;
		var divTop = e.clientY + 20;

        console.log("divTop = " + divTop);

        // 레이어가 화면 크기를 벗어나면 위치를 바꾸어 배치한다.
		if( divLeft + oWidth > sWidth ) divLeft -= oWidth;
		// if( divTop + oHeight > sHeight ) divTop -= oHeight;

        // 레이어 위치를 바꾸었더니 상단기준점(0,0) 밖으로 벗어난다면 상단기준점(0,0)에 배치하자.
		// if( divLeft < 0 ) divLeft = 0;
		// if( divTop < 0 ) divTop = 0;

        $('.layer_pop').css({
            "top" : divTop,
            "left" : divLeft,            
            "position" : "fixed",            
        }).toggle();
    });
    $('.layer_pop .pop_top .clse').on('click', function (e) {        
        $('.layer_pop').toggle();
    });

    // 
    $('.stand_from .label .label_chk').on('click', function () {        
        $(this).toggleClass("active");
    });


    //swiper
    // 업종분석 - 업종별 재무비율 테이블
    var swiper = new Swiper('.top_swboxswiper', {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });
    // 메인 - 하단 업종별 재무비율
    var swiper = new Swiper('.ratio_boxboxswiper', {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
    });
    // 메인 - 상단 관심종목
    var swiper = new Swiper(".main_attboxswiper", {
        slidesPerView: 6,
        slidesPerGroup: 3,
        spaceBetween: 30,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    
    
    
});