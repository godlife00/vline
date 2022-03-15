$(document).ready(function () {

    // 해더에서 불러올 js 시작
    function header_Function() {

        console.log("해더js");
        // 상단 검색바
        $('.searchArea form .searchInput').on("focusout", function () {            
            $('.searchArea .AutoComplete').hide();
        });
        $('.searchArea form .searchInput').on("keydown", function () {            
            $('.searchArea .AutoComplete').show();
        });
        $('.searchArea .AutoComplete li').removeClass('_on');
        $('.searchArea .AutoComplete li').on("mouseover", function () {            
            $('.searchArea .AutoComplete li').removeClass('_on')
            $(this).addClass('_on');
        });

        // active
        $('.modal.terms_form .pop_con .agree_area .agree_from .label .label_chk').on('click', function () {
            $(this).toggleClass('active');
        });
        $('.modal.mypage_info .pop_con .mapage_area .mapage_form .agree_area .agree_from .label .label_chk').on('click', function () {
            $(this).toggleClass('active');
        });
        
        $('#header .bgWrap .premium .loginId .login, .comment_attach.login .comment_inbox_text').on('click', function () {
            // 로그인, 댓글입력시 로그인
            $('.login_form').modal({
                fadeDuration: 100
            });
        });

        $('.modal a.open_step02').on('click', function () {
            $('.terms_form').modal({
                fadeDuration: 100
            });
        });
        $('.modal a.open_step03').on('click', function () {
            $('.sign_complete').modal({
                fadeDuration: 100
            });
        });
        $('#header .bgWrap .premium a.join').on('click', function () {
            $('.premium_join').modal({
                fadeDuration: 100
            });
        });
        $('#header .bgWrap .premium a.join').on('click', function () {
            $('.premium_join').modal({
                fadeDuration: 100
            });
        });

        // 밸류라인 프리미엄 가입 - 가입방법 열기
        $('.modal a.open_payment').on('click', function () {
            $('.payment_step.pay01').modal({
                fadeDuration: 100
            });
        });
        $('.modal a.payment_step01').on('click', function () {
            $('.payment_step.pay01').modal({
                fadeDuration: 100
            });
        });
        // 밸류라인 프리미엄 가입 - 결제하기 열기
        $('.modal a.payment_step02').on('click', function () {
            $('.payment_step.pay02').modal({
                fadeDuration: 100
            });
        });
        // 밸류라인 프리미엄 가입 - 결제완료 열기
        $('.modal a.payment_step03').on('click', function () {
            $('.payment_step.pay03').modal({
                fadeDuration: 100
            });
        });

        // 마이페이지
        $('#header .bgWrap .premium .my_info').on('click', function () {
            $('.mypage_info').modal({
                fadeDuration: 100
            });
        });
        // 회원탈퇴
        $('.modal.mypage_info .pop_con .open_withdrawal').on('click', function () {
            $('.withdrawal_sum').modal({
                fadeDuration: 100
            });
        });

        //결제
        $('.serviceStep .step_box').on("click", function () {
            $('.serviceStep .step_box').removeClass("active");
            $(this).addClass("active");
        });

        // 결제동의하기 체크
        $('.payment_note .note_chk .txt').on("click", function () {
            $(this).toggleClass("active");
        });

        //select
        $(function () {
            var selectTarget = $('.selectbox select');

            // focus 가 되었을 때와 focus 를 잃었을 때
            selectTarget.on({
                'focus': function () {
                    $(this).parent().addClass('focus');
                },
                'blur': function () {
                    $(this).parent().removeClass('focus');
                }
            });

            selectTarget.change(function () {
                var select_name = $(this).children('option:selected').text();
                $(this).siblings('label').text(select_name);
                $(this).parent().removeClass('focus');
            });
        });

        // 스크롤 끝 감지해서 스타일 수정
        $(".modal.mypage_info .pop_con .history_area").scroll(function () {
            var scrollTop = $(this).scrollTop();
            var innerHeight = $(this).innerHeight();
            var scrollHeight = $(this).prop('scrollHeight');

            if (scrollTop + innerHeight >= scrollHeight) {
                $(".modal.mypage_info .pop_con .history_area").css('border', 'none');
            } else {
                $(".modal.mypage_info .pop_con .history_area").css('border-bottom', '1px solid #e7eaf2');
            }
        });

        // 내정보 - 회원정보 - 휴대폰 번호 변경
        $('.modal.mypage_info .pop_con .mapage_area .mapage_form .form_table td .mod_btn').on('click', function () {
            $('.modal.mypage_info .pop_con .mapage_area .mapage_form .form_table td .mod_phone').slideDown();
        });
        $(".modal.mypage_info .pop_con .mapage_area .tab_area ul li").on('click', function () {
            $(".modal.mypage_info .pop_con .mapage_area .tab_area ul li").removeClass("active");
            $(this).addClass("active");
            $(".modal.mypage_info .pop_con .tab_content").hide();
            var activeTab = $(this).attr("rel");
            $("#" + activeTab).show();
        });


        $('#header .bgWrap .gnb ul li').on('click', function () {
            $(this).addClass('active');
        });
    }        
    header_Function(); 
    
    // 리스트내 종목 검색
    $('.data_filter .table_search .searchInput').on("focusout", function () {                    
        console.log("포커스");
        $('.data_filter .table_search .AutoComplete_indu').hide();
    });
    $('.data_filter .table_search .searchInput').on("keydown", function () {            
        console.log("키다운");
        $('.data_filter .table_search .AutoComplete_indu').show();
    });
    $('.data_filter .table_search .AutoComplete_indu li').removeClass('_on');
    $('.data_filter .table_search .AutoComplete_indu li').on("mouseover", function () {            
        $('.data_filter .table_search .AutoComplete_indu li').removeClass('_on')
        $(this).addClass('_on');
    });

    // 달력
    $(function () {
        //input을 datepicker로 선언
        $("#datepicker1, #datepicker2 ").datepicker({
            dateFormat: 'yymm' //달력 날짜 형태
            , showOtherMonths: true //빈 공간에 현재월의 앞뒤월의 날짜를 표시
            , showMonthAfterYear: true // 월- 년 순서가아닌 년도 - 월 순서            
            , showOn: "both" //button:버튼을 표시하고,버튼을 눌러야만 달력 표시 ^ both:버튼을 표시하고,버튼을 누르거나 input을 클릭하면 달력 표시  
            , changeMonth: true
            , changeYear: true
            , buttonImage: "/img/datepicker.gif" //버튼 이미지 경로
            , buttonImageOnly: true //버튼 이미지만 깔끔하게 보이게함            
            , yearSuffix: "년" //달력의 년도 부분 뒤 텍스트
            , monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'] // 월의 한글 형식.
            , minDate: "-10Y" //최소 선택일자(-1D:하루전, -1M:한달전, -1Y:일년전)
            , maxDate: "+0Y" //최대 선택일자(+1D:하루후, -1M:한달후, -1Y:일년후)                                      
            , showButtonPanel: true // 캘린더 하단에 버튼 패널을 표시한다. 
            , closeText: '확인'  // 닫기 버튼 패널
            , currentText: '오늘 날짜' , // 오늘 날짜로 이동하는 버튼 패널
            onClose: function(dateText, inst) { 
                $(this).datepicker('setDate', new Date(inst.selectedYear, inst.selectedMonth, 1));
            }
        });

        //초기값을 오늘 날짜로 설정해줘야 합니다.
        $('#datepicker').datepicker('setDate', 'today'); //(-1D:하루전, -1M:한달전, -1Y:일년전), (+1D:하루후, -1M:한달후, -1Y:일년후)            
    });

    // paginate
    $(function () {
        $('.paginate a img').each(function () {        
            if ($(this).children().last().is('img').length == 0) {
                // console.log("페이징에 넘김 없는 경우");                    
            } else {                    
                // 페이징에 넘김 있는 경우
                $(this).parent().css({
                    border : '1px solid #fff',                
                });
            }
        });
    });

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
    // $("#container .M_right .contents .tab_content").hide();
    // $("#container .M_right .contents .tab_content:first").show();
    $("#container .M_right .contents_header .table_filter .term span").on('click', function () {
        $("#container .M_right .contents_header .table_filter .term span").removeClass("active");
        $(this).addClass("active");
        // $("#container .M_right .contents .tab_content").hide();
        // var activeTab = $(this).attr("rel");
        // $("#" + activeTab).show();
    });

    // 업종분석 매트릭스 차트 보이게 하는 버튼            
    // $(function () {        
    //     var loc = window.location.href; // returns the full URL            
    //     if (/keyword/.test(loc)) {
    //         console.log("test");            
    //         $(".table_filter .term span").removeClass("active");
    //         $(".table_filter .term span:nth-child(2)").addClass("active");
    //         $(".tab_content:nth-child(1)").hide();
    //         $(".tab_content:nth-child(2)").fadeIn();
    //     } 
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
        // $('#container .M_right .contents .bic_chartbox .chart_line .con_box .right').toggleClass('hide'); 차트 리사이즈 버튼, 차트js에 넣어서 여기선 주석처리   
    })    
    
    $('#container .M_right .contents_header .table_filter .detail span.simple').resize(function() {
        $('.highcharts-root').append( "<div>Handler for .resize() called.</div>" );
      });


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

    // 댓글 삭제 숨기기,보이기
    $("#container .M_right .contents .inform_area.view .recmtWrap .commentBox .report_set .set_box").hide();
    $('#container .M_right .contents .inform_area.view .recmtWrap .commentBox .report_article .button').on('click', function () {                
        $('#container .M_right .contents .inform_area.view .recmtWrap .commentBox .report_set .set_box').hide();
        $(this).parent().siblings('.report_set').children('.set_box').toggle();        
    });
    $('#container .M_right .contents .inform_area.view .recmtWrap .commentBox .report_set .set_box .set_filter .top .clse img').on('click', function () {
        $('#container .M_right .contents .inform_area.view .recmtWrap .commentBox .report_set .set_box').fadeOut();
    });

    //
    $('#container .M_right .page_drop ul').hide();
    $('#container .M_right .page_drop .select_active').on('click', function () {
        var saleft = $('#container .M_right .page_drop .select_active').position();        
        $('#container .M_right .page_drop ul').slideToggle('fast').css({
            left : saleft.left,
            right : saleft.left,
        });
    });

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
        if (divLeft + oWidth > sWidth) divLeft -= oWidth;
        // if( divTop + oHeight > sHeight ) divTop -= oHeight;

        // 레이어 위치를 바꾸었더니 상단기준점(0,0) 밖으로 벗어난다면 상단기준점(0,0)에 배치하자.
        // if( divLeft < 0 ) divLeft = 0;
        // if( divTop < 0 ) divTop = 0;

        $('.layer_pop').css({
            "top": divTop,
            "left": divLeft,
            "position": "fixed",
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

    // 메인 - 하단 최신 실적 재무데이터
    var swiper = new Swiper('.result_boxswiper', {
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        // autoplay: {
        //     delay: 3500,
        //     disableOnInteraction: false,
        // },
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

    // table 좌측 고정
    $(".fix_table").clone().appendTo('.fix_wrap').addClass('clone');    

    // table 스크롤 위치        
    var agent = navigator.userAgent.toLowerCase();    
    $(".fix_wrap").on("scroll", function () {     
        var positionLeft =  new $(".fix_wrap").scrollLeft();           
        console.log("positionLeft = " + positionLeft);
        $('.clone thead').css({
            'position' : 'relative',            
            'left' : 0 - positionLeft
        });        

        if ( (navigator.appName == 'Netscape' && agent.indexOf('trident') != -1) || (agent.indexOf("msie") != -1)) {
            // ie일 경우
            $('.clone thead .fix').css({
                'left' : 0
            });
        } else{
            // ie가 아닐 경우
            $('.clone thead .fix').css({
                'left' : 0 + positionLeft
            });
        }
        
    });
    $(window).scroll(function () {
        if ($('.table.fix_table').length) {
            var jbOffset = $(".table.fix_table").offset();                                
            var positionTop = $(window).scrollTop() - $(".table.fix_table").offset().top + 42;                                

            if ($(document).scrollTop() >= jbOffset.top - 44) {               
                $('.data_filter .table_search .AutoComplete').hide();         
                $('.clone thead').css({
                    'position' : 'relative',
                    'top': positionTop,
                });
                $('.fix_table.clone thead td').css({
                    'visibility' : 'visible',                
                });
                $('.clone thead th, .clone thead td, .clone thead tr').css({
                    // 'background-color' : '#fff !important',                
                });
            } else {            
                $('.clone thead').css({
                    'position' : 'relative',
                    'top': '0',                
                });
                $('.fix_table.clone thead').css({
                    'visibility' : 'hidden',                
                });
                $('.clone thead th, .clone thead td, .clone thead tr').css({
                    // 'background-color' : '#fff',                
                });
            }
        }        
    });


    // 소수점 체크
    $('#container .M_right .contents_header .table_filter .detail span.table_int').on('click', function () {
        $('.table.fix_table').toggleClass('txtInt');
    });

    
    //가이드 레이어 툴팁
    $('.chart_area.diagnosis .chartData .charm .txt_guide').on("click", function () {        
        $('.guide_layer').css({ 'z-index': 80 });
        $('.guide_box').show(300);
    });
    //가이드 툴팁 clse
    $('.guide_box .clse').on("click", function () {
        $('.guide_layer').css({ 'z-index': -1 });
        $('.guide_box').hide(300);
    });

    // 댓글입력
    function textarealength() {
        $('.comment_inbox_text').keyup(function () {
            let content = $(this).val(); // 글자수
            if (content.length > 300) { // 300자까지만 타이밍 가능
                $(this).val($(this).val().substring(0, 300));
                alert('글자수는 300자까지 입력 가능합니다.');
            };
        });
    }
    textarealength();

    

});