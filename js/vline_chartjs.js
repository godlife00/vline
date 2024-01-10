$(document).ready(function () {

    // 가상 선차트
    if ($('#sum_topchart_band').length) {
        var sourceData = [
            113425,
            113373,
            112369,
            113855,
            115918,
            114829,
            117887,
            118085,
            116862,
            113780,
        ];

        var chart_linear = new Highcharts.Chart({
            chart: {
                renderTo: 'sum_topchart_band',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                margin: [0, 0, 0, 0],
                events: {
                    load: function () {
                        setTimeout(() => {                            
                            const series = this.series[0];
                            series.update({
                                dataLabels: {
                                    enabled: true
                                }
                            });
                        }, 500); // 1초 후에 하이차트를 랜더링합니다.                        
                    }
                }
            },
            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            legend: {
                enabled: false,
            },

            tooltip: {
                // shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },

            title: {
                text: null
            },

            credits: {
                enabled: false,
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            colors: ["#ff545b", "#4d6ee4", "#F0CC09"],

            xAxis: [{                
                categories: ['04.03', '04.03', '04.03', '04.03', '04.03', '04.03', '04.03', '04.03', '04.03',],                
            }],

            yAxis: {
                visible: true,
            },

            series: [{
                type: 'spline',
                name: '예상주가',
                zIndex: 3,
                data: sourceData,
                dataLabels: {
                    enabled: false, // 초기에는 데이터 라벨을 숨김
                    y: -5,
                    formatter: function () {
                        if (this.point === this.series.data[this.series.data.length - 1]) {
                            return Highcharts.numberFormat(this.y, 0);
                        }
                        return null;
                    }
                }
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
            },
        });

        /* add regression line dynamically */
        chart_linear.addSeries({
            type: 'line',
            name: '주가추세',                
            color: "#dbdfed",                        
            enableMouseTracking: false,
            /* function returns data for trend-line */
            data: (function () {
                return fitOneDimensionalData(sourceData);
            })(), 
        });

        function fitOneDimensionalData(source_data) {
            var trend_source_data = [];
            for (var i = source_data.length; i-- > 0;) {
                trend_source_data[i] = [i, source_data[i]]
            }
            var regression_data = fitData(trend_source_data).data
            var trend_line_data = [];
            for (var i = regression_data.length; i-- > 0;) {
                trend_line_data[i] = regression_data[i][1];
            }
            return trend_line_data;
        }
    }

    if ($('#test1').length) {
        Highcharts.chart('test1', {

            chart: {
                type: 'line',
                renderTo: 'test1',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            colors: ["#d30000", "#0052ff"],
            title: {
                text: null
            },

            tooltip: {
                // shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f} 달러</b><br/>'
            },
            yAxis: {

            },

            xAxis: [{
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
            }],

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                enabled: false
            },

            series: [
                {
                    name: '상승',
                    type: 'columnrange',
                    data: [[16, 28]],
                }, {
                    name: '하락',
                    type: 'columnrange',
                    data: [[25, 34]],
                },
                {
                    name: '상승',
                    type: 'columnrange',
                    data: [[54, 98]],
                }, {
                    name: '하락',
                    type: 'columnrange',
                    data: [[66, 108]],
                },
                {
                    name: '상승',
                    type: 'columnrange',
                    data: [[76, 138]],
                }, {
                    name: '하락',
                    type: 'columnrange',
                    data: [[66, 108]],
                },
                {
                    name: '상승',
                    type: 'columnrange',
                    data: [[16, 28]],
                }, {
                    name: '하락',
                    type: 'columnrange',
                    data: [[25, 34]],
                },
                {
                    name: '상승',
                    type: 'columnrange',
                    data: [[54, 98]],
                }, {
                    name: '하락',
                    type: 'columnrange',
                    data: [[66, 108]],
                },
                {
                    name: '상승',
                    type: 'columnrange',
                    data: [[76, 138]],
                }, {
                    name: '하락',
                    type: 'columnrange',
                    data: [[66, 108]],
                },
            ],

            plotOptions: {
                series: {
                    label: {
                        connectorAllowed: false
                    },
                    pointStart: null,
                    marker: {
                        enabled: false,
                    },
                },
            },
        });
    }

    //메인 마켓차트 업종
    if ($('#main_treemap01').length) {

        Highcharts.chart('main_treemap01', {

            chart: {
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
            },

            title: {
                text: null
            },

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            series: [{
                type: 'treemap',
                layoutAlgorithm: 'squarified',
                // 단계별 칼라셋 정의, 밸류라인, 인베스팅플러스 공통 적용 23.2.20
                // +3.00% ~ : '#BE2F23';
                // +2.00% ~ 2.99% : #D97B72';
                // +0.1% ~ 1.99% : #F7BDB8';
                // +0.09 ~ -0.09% : #656D7E
                // -0.1% ~ -1.99% : '#C5D6F2';
                // -2.00% ~ -2.99% : #8AB4F7';
                // -3.00%~ : '#475EBF';
                data: [
                    {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">삼성전자 <br> 3% 이상 </a>',
                        value: 3916177,
                        color: '#f3243b',
                        dataLabels: {
                            style: {
                                fontSize: '24px',
                            }
                        }
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/034220">LG에너지솔루션 <br> 0% </a>',
                        value: 1012050,
                        color: '#414654',
                        dataLabels: {
                            style: {
                                fontSize: '24px',
                            }
                        }
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/034220">SK하이닉스 <br> 0% </a>',
                        value: 771683,
                        color: '#414654',
                        dataLabels: {
                            style: {
                                fontSize: '24px',
                            }
                        }
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/034220">삼성바이오로직스 <br> 2% 이상 </a>',
                        value: 591456,
                        color: '#bd3945',
                        dataLabels: {
                            style: {
                                fontSize: '14px',
                            }
                        }
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">삼성전자우 <br> 1% 이상 </a>',
                        value: 490440,
                        color: '#8a414e',
                        dataLabels: {
                            style: {
                                fontSize: '14px',
                            }
                        }
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">NAVER <br> 0% </a>',
                        value: 453596,
                        color: '#414654',
                        dataLabels: {
                            style: {
                                fontSize: '14px',
                            }
                        }
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">LG화학 <br> -3% 이상 </a>',
                        value: 400259,
                        color: '#4b87ff',
                        dataLabels: {
                            style: {
                                fontSize: '14px',
                            }
                        }
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/034220">현대차 <br> -2% 이상</a>',
                        value: 391013,
                        color: '#4675f0',
                        dataLabels: {
                            style: {
                                fontSize: '14px',
                            }
                        }
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">삼성SDI <br> -1% 이상</a>',
                        value: 377517,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">카카오 <br> 3% 이상 </a>',
                        value: 363708,
                        color: '#f3243b',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/034220">기아 <br> 2% 이상 </a>',
                        value: 336857,
                        color: '#bd3945',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">POSCO홀딩스 <br> 1% 이상 </a>',
                        value: 250662,
                        color: '#8a414e',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">KB금융 <br> 0% </a>',
                        value: 235453,
                        color: '#414654',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">셀트리온 <br> -3% 이상 </a>',
                        value: 227340,
                        color: '#4b87ff',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/034220">SK이노베이션 <br> -2% 이상</a>',
                        value: 222380,
                        color: '#4675f0',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">삼성물산 <br> -1% 이상</a>',
                        value: 218658,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">신한지주 <br> -1% 이상</a>',
                        value: 214150,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">현대모비스 <br> -1% 이상</a>',
                        value: 204278,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">카카오뱅크 <br> -1% 이상</a>',
                        value: 190028,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">SK <br> -1% 이상</a>',
                        value: 182037,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">LG전자 <br> -1% 이상</a>',
                        value: 168557,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">한국전력 <br> -1% 이상</a>',
                        value: 148615,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">HMM <br> -1% 이상</a>',
                        value: 147201,
                        color: '#8a414e',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">하나금융지주 <br> -1% 이상</a>',
                        value: 138483,
                        color: '#8a414e',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">크래프톤 <br> -1% 이상</a>',
                        value: 134536,
                        color: '#f3243b',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">S-Oil <br> -1% 이상</a>',
                        value: 133967,
                        color: '#4162c4',
                    },
                ]
            }],

        });

    }
    //메인 마켓차트 상위 100 종목
    if ($('#main_treemapTop100').length) {

        Highcharts.chart('main_treemapTop100', {

            chart: {
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
            },

            title: {
                text: null
            },

            credits: {
                enabled: false,
            },

            legend: {
                enabled: false,
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            series: [{
                type: 'treemap',
                layoutAlgorithm: 'squarified',
                data: [
                    {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">삼성전자 <br> 3% 이상 </a>',
                        value: 3916177,
                        color: '#f3243b',
                        dataLabels: {
                            style: {
                                fontSize: '22px',
                            }
                        }
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/034220">LG에너지솔루션 <br> 0% </a>',
                        value: 1012050,
                        color: '#414654',
                        dataLabels: {
                            style: {
                                fontSize: '22px',
                            }
                        }
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/034220">SK하이닉스 <br> 0% </a>',
                        value: 771683,
                        color: '#414654',
                        dataLabels: {
                            style: {
                                fontSize: '22px',
                            }
                        }
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/034220">삼성바이오로직스 <br> 2% 이상 </a>',
                        value: 591456,
                        color: '#bd3945',
                        dataLabels: {
                            style: {
                                fontSize: '14px',
                            }
                        }
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">삼성전자우 <br> 1% 이상 </a>',
                        value: 490440,
                        color: '#8a414e',
                        dataLabels: {
                            style: {
                                fontSize: '14px',
                            }
                        }
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">NAVER <br> 0% </a>',
                        value: 453596,
                        color: '#414654',
                        dataLabels: {
                            style: {
                                fontSize: '14px',
                            }
                        }
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">LG화학 <br> -3% 이상 </a>',
                        value: 400259,
                        color: '#4b87ff',
                        dataLabels: {
                            style: {
                                fontSize: '14px',
                            }
                        }
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/034220">현대차 <br> -2% 이상</a>',
                        value: 391013,
                        color: '#4675f0',
                        dataLabels: {
                            style: {
                                fontSize: '14px',
                            }
                        }
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">삼성SDI <br> -1% 이상</a>',
                        value: 377517,
                        color: '#4162c4',
                        dataLabels: {
                            style: {
                                fontSize: '14px',
                            }
                        }
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">카카오 <br> 3% 이상 </a>',
                        value: 363708,
                        color: '#f3243b',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/034220">기아 <br> 2% 이상 </a>',
                        value: 336857,
                        color: '#bd3945',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">POSCO홀딩스 <br> 1% 이상 </a>',
                        value: 250662,
                        color: '#8a414e',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">KB금융 <br> 0% </a>',
                        value: 235453,
                        color: '#414654',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">셀트리온 <br> -3% 이상 </a>',
                        value: 227340,
                        color: '#4b87ff',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/034220">SK이노베이션 <br> -2% 이상</a>',
                        value: 222380,
                        color: '#4675f0',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">삼성물산 <br> -1% 이상</a>',
                        value: 218658,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">신한지주 <br> -1% 이상</a>',
                        value: 214150,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">현대모비스 <br> -1% 이상</a>',
                        value: 204278,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">카카오뱅크 <br> -1% 이상</a>',
                        value: 190028,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">SK <br> -1% 이상</a>',
                        value: 182037,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">LG전자 <br> -1% 이상</a>',
                        value: 168557,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">한국전력 <br> -1% 이상</a>',
                        value: 148615,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">HMM <br> -1% 이상</a>',
                        value: 147201,
                        color: '#8a414e',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">하나금융지주 <br> -1% 이상</a>',
                        value: 138483,
                        color: '#8a414e',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">크래프톤 <br> -1% 이상</a>',
                        value: 134536,
                        color: '#f3243b',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">S-Oil <br> -1% 이상</a>',
                        value: 133967,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">카카오 <br> 3% 이상 </a>',
                        value: 363708,
                        color: '#f3243b',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/034220">기아 <br> 2% 이상 </a>',
                        value: 336857,
                        color: '#bd3945',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">POSCO홀딩스 <br> 1% 이상 </a>',
                        value: 250662,
                        color: '#8a414e',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">KB금융 <br> 0% </a>',
                        value: 235453,
                        color: '#414654',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">셀트리온 <br> -3% 이상 </a>',
                        value: 227340,
                        color: '#4b87ff',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/034220">SK이노베이션 <br> -2% 이상</a>',
                        value: 222380,
                        color: '#4675f0',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">삼성전자우 <br> 1% 이상 </a>',
                        value: 490440,
                        color: '#8a414e',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">NAVER <br> 0% </a>',
                        value: 453596,
                        color: '#414654',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">LG화학 <br> -3% 이상 </a>',
                        value: 400259,
                        color: '#4b87ff',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/034220">현대차 <br> -2% 이상</a>',
                        value: 391013,
                        color: '#4675f0',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">삼성SDI <br> -1% 이상</a>',
                        value: 377517,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">카카오 <br> 3% 이상 </a>',
                        value: 363708,
                        color: '#f3243b',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/034220">기아 <br> 2% 이상 </a>',
                        value: 336857,
                        color: '#bd3945',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">POSCO홀딩스 <br> 1% 이상 </a>',
                        value: 250662,
                        color: '#8a414e',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">KB금융 <br> 0% </a>',
                        value: 235453,
                        color: '#414654',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">셀트리온 <br> -3% 이상 </a>',
                        value: 227340,
                        color: '#4b87ff',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">삼성물산 <br> -1% 이상</a>',
                        value: 218658,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">신한지주 <br> -1% 이상</a>',
                        value: 214150,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">현대모비스 <br> -1% 이상</a>',
                        value: 204278,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">카카오뱅크 <br> -1% 이상</a>',
                        value: 190028,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">SK <br> -1% 이상</a>',
                        value: 182037,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">LG전자 <br> -1% 이상</a>',
                        value: 168557,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">한국전력 <br> -1% 이상</a>',
                        value: 148615,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">HMM <br> -1% 이상</a>',
                        value: 147201,
                        color: '#8a414e',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">하나금융지주 <br> -1% 이상</a>',
                        value: 138483,
                        color: '#8a414e',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">크래프톤 <br> -1% 이상</a>',
                        value: 134536,
                        color: '#f3243b',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">S-Oil <br> -1% 이상</a>',
                        value: 133967,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/034220">기아 <br> 2% 이상 </a>',
                        value: 336857,
                        color: '#bd3945',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">POSCO홀딩스 <br> 1% 이상 </a>',
                        value: 250662,
                        color: '#8a414e',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">KB금융 <br> 0% </a>',
                        value: 235453,
                        color: '#414654',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">셀트리온 <br> -3% 이상 </a>',
                        value: 227340,
                        color: '#4b87ff',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">삼성물산 <br> -1% 이상</a>',
                        value: 218658,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">신한지주 <br> -1% 이상</a>',
                        value: 214150,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">현대모비스 <br> -1% 이상</a>',
                        value: 204278,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">카카오뱅크 <br> -1% 이상</a>',
                        value: 190028,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">SK <br> -1% 이상</a>',
                        value: 182037,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">LG전자 <br> -1% 이상</a>',
                        value: 168557,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">한국전력 <br> -1% 이상</a>',
                        value: 148615,
                        color: '#4162c4',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">HMM <br> -1% 이상</a>',
                        value: 147201,
                        color: '#8a414e',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">하나금융지주 <br> -1% 이상</a>',
                        value: 138483,
                        color: '#8a414e',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">크래프톤 <br> -1% 이상</a>',
                        value: 134536,
                        color: '#f3243b',
                    }, {
                        name: '<a href="https://value.choicestock.co.kr/finance/income/005930">S-Oil <br> -1% 이상</a>',
                        value: 133967,
                        color: '#4162c4',
                    }

                ]
            }],

        });

    }

    //메인 스파이더 차트
    if ($('#containercharm').length) {

        Highcharts.chart('containercharm', {
            chart: {
                polar: true,
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
            },
            colors: ["#3c55ce"],
            title: {
                text: null,
            },
            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            pane: {
                startAngle: 0,
                endAngle: 360
            },
            xAxis: {
                categories: ['밸류에이션', '독점력', '성장성', '안전성', '현금창출'],
                tickmarkPlacement: 'on',
                lineWidth: 0,
                max: 5,
                labels: {
                    allowOverlap: true,
                    style: {
                        color: '#b1b9cb',
                        fontSize: '10px',
                    }
                }
            },
            yAxis: {
                gridLineInterpolation: 'polygon',
                minorGridLineColor: '#E0E0E0',
                tickInterval: 1.07,
                min: 0,
                max: 5,
                labels: {
                    enabled: false
                }
            },
            exporting: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false,
            },
            series: [{
                type: 'area',
                name: '데이터1',
                data: [4, 5, 5, 4.5, 5],
                pointPlacement: 'on',
                marker: {
                    enabled: true,
                }
            }],
            plotOptions: {
                series: {
                    lineWidth: 1,
                    fillOpacity: 0.3,
                    marker: {
                        enabled: false,
                    }
                },
            },
        });
    }

    //재무분석 주식MRI 차트, 종목발굴 우량주 주식MRI 차트
    if ($('#MRIchart_analy01').length) {

        Highcharts.chart('MRIchart_analy01', {
            chart: {
                polar: true,
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
            },
            colors: ["#3c55ce"],
            title: {
                text: null,
            },
            tooltip: {
                shared: true,
                useHTML: true,
                formatter: function () {
                    var imgOne = '<img src = "../img/startol_one.png" height="10" width="10"/>'  /* 1점 */
                    var imgZero = '<img src = "../img/startol_zero.png" height="10" width="10"/>'  /* 0점 */
                    var imgHalf = '<img src = "../img/startol_half.png" height="10" width="10"/>'  /* 0.5점 */
                    var s = '<b>' + this.x + '</b>';
                    $.each(this.points, function (i, point) {
                        if (point.y == '5') {
                            s += imgOne + imgOne + imgOne + imgOne + imgOne + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '4.5') {
                            s += imgOne + imgOne + imgOne + imgOne + imgHalf + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '4') {
                            s += imgOne + imgOne + imgOne + imgOne + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '3.5') {
                            s += imgOne + imgOne + imgOne + imgHalf + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '3') {
                            s += imgOne + imgOne + imgOne + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '2.5') {
                            s += imgOne + imgOne + imgHalf + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '2') {
                            s += imgOne + imgOne + imgZero + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '1.5') {
                            s += imgOne + imgHalf + imgZero + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '1') {
                            s += imgOne + imgZero + imgZero + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else if (point.y >= '0.5') {
                            s += imgHalf + imgZero + imgZero + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                        else {
                            s += imgZero + imgZero + imgZero + imgZero + imgZero + '&nbsp;' + point.y;
                        }
                    });
                    return s;
                },
            },
            pane: {
                startAngle: 0,
                endAngle: 360
            },
            xAxis: {
                categories: ['미래성장성', '사업<br>독점력', '현금<br>창출력', '수익<br>성장성', '재무<br>안전성'],
                tickmarkPlacement: 'on',
                lineWidth: 0,
                max: 5,
                labels: {
                    allowOverlap: true,
                    style: {
                        color: '#656d7e',
                        fontSize: '14px',
                    }
                }
            },
            yAxis: {
                gridLineInterpolation: 'polygon',
                minorGridLineColor: '#E0E0E0',
                tickInterval: 1.07,
                min: 0,
                max: 5,
                labels: {
                    enabled: false
                }
            },
            exporting: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false,
            },
            series: [{
                type: 'area',
                name: '데이터1',
                data: [4, 5, 5, 4.5, 5],
                pointPlacement: 'on',
                marker: {
                    enabled: true,
                }
            }],
            plotOptions: {
                series: {
                    lineWidth: 1,
                    fillOpacity: 0.3,
                    marker: {
                        enabled: false,
                    }
                },
            },
        });
    }
    if ($('#MRIchart_analy01_small').length) {

        Highcharts.chart('MRIchart_analy01_small', {
            chart: {
                polar: true,
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                margin: [0, 0, 30, 0],
            },
            colors: ["#3c55ce"],
            title: {
                text: '<a href="https://www.valueline.co.kr/finance/summary/293490">카카오게임즈</a>', // 종목명에 링크
                align: 'center', // 가로 위치를 가운데로 설정
                verticalAlign: 'bottom', // 세로 위치를 하단으로 설정                
            },
            tooltip: {
                enabled: false                
            },
            pane: {
                startAngle: 0,
                endAngle: 360
            },
            xAxis: {
                categories: ['밸류에이션', '미래<br>성장성', '사업<br>독점력', '재무<br>안전성', '현금<br>창출력' ],
                tickmarkPlacement: 'on',
                lineWidth: 0,
                max: 5,
                labels: {
                    enabled: false
                }
            },
            yAxis: {
                gridLineInterpolation: 'polygon',
                minorGridLineColor: '#E0E0E0',
                tickInterval: 0,
                min: 0,
                max: 5,
                labels: {
                    enabled: false
                }
            },
            exporting: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false,
            },
            series: [{
                type: 'area',
                name: '데이터1',
                data: [5, 4, 5, 3.5, 5],
                pointPlacement: 'on',
                marker: {
                    enabled: true,
                }
            }],
            plotOptions: {
                series: {
                    lineWidth: 1,
                    fillOpacity: 0.3,
                    marker: {
                        enabled: false,
                    }
                },
            },
        });
    }
    if ($('#MRIchart_analy02_small').length) {

        Highcharts.chart('MRIchart_analy02_small', {
            chart: {
                polar: true,
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                margin: [0, 0, 30, 0],
            },
            colors: ["#3c55ce"],
            title: {
                text: '<a href="https://www.valueline.co.kr/finance/summary/005930">삼성전자</a>', // 종목명에 링크
                align: 'center', // 가로 위치를 가운데로 설정
                verticalAlign: 'bottom', // 세로 위치를 하단으로 설정                
            },
            tooltip: {
                enabled: false                
            },
            pane: {
                startAngle: 0,
                endAngle: 360
            },
            xAxis: {
                categories: ['밸류에이션', '미래<br>성장성', '사업<br>독점력', '재무<br>안전성', '현금<br>창출력' ],
                tickmarkPlacement: 'on',
                lineWidth: 0,
                max: 5,
                labels: {
                    enabled: false
                }
            },
            yAxis: {
                gridLineInterpolation: 'polygon',
                minorGridLineColor: '#E0E0E0',
                tickInterval: 1.07,
                min: 0,
                max: 5,
                labels: {
                    enabled: false
                }
            },
            exporting: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false,
            },
            series: [{
                type: 'area',
                name: '데이터1',
                data: [3, 2, 3, 1, 4],
                pointPlacement: 'on',
                marker: {
                    enabled: true,
                }
            }],
            plotOptions: {
                series: {
                    lineWidth: 1,
                    fillOpacity: 0.3,
                    marker: {
                        enabled: false,
                    }
                },
            },
        });
    }
    if ($('#MRIchart_analy03_small').length) {

        Highcharts.chart('MRIchart_analy03_small', {
            chart: {
                polar: true,
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                margin: [0, 0, 30, 0],
            },
            colors: ["#3c55ce"],
            title: {
                text: '<a href="https://www.valueline.co.kr/finance/summary/067160">아프리카TV</a>', // 종목명에 링크
                align: 'center', // 가로 위치를 가운데로 설정
                verticalAlign: 'bottom', // 세로 위치를 하단으로 설정                
            },
            tooltip: {
                enabled: false                
            },
            pane: {
                startAngle: 0,
                endAngle: 360
            },
            xAxis: {
                categories: ['밸류에이션', '미래<br>성장성', '사업<br>독점력', '재무<br>안전성', '현금<br>창출력' ],
                tickmarkPlacement: 'on',
                lineWidth: 0,
                max: 5,
                labels: {
                    enabled: false
                }
            },
            yAxis: {
                gridLineInterpolation: 'polygon',
                minorGridLineColor: '#E0E0E0',
                tickInterval: 1.07,
                min: 0,
                max: 5,
                labels: {
                    enabled: false
                }
            },
            exporting: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false,
            },
            series: [{
                type: 'area',
                name: '데이터1',
                data: [5, 5, 0, 5, 4],
                pointPlacement: 'on',
                marker: {
                    enabled: true,
                }
            }],
            plotOptions: {
                series: {
                    lineWidth: 1,
                    fillOpacity: 0.3,
                    marker: {
                        enabled: false,
                    }
                },
            },
        });
    }

    //종목진단 결과 보고서 차트
    if ($('#containerDiagnosis1_1').length) {
        Highcharts.chart('containerDiagnosis1_1', {            
            chart: {                
                type: 'column',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,
                // allButtonsEnabled: true,                
                // selected: 0,                
            },

            legend: {
                enabled: false,
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            rangeSelector: {
                selected: 1
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            title: {
                text: null
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            colors: ["#3655d6", "#656d7e", "#bdc8d8"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            
            xAxis: [{
                categories: ['PER(배)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    },
                }
            }],
            
            yAxis: {
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
                plotLines: [{
                    color: '#edeeef',
                    width: 1,
                    value: 0
                }],
            },

            series: [
                {'name': '종목', 'data': [5.16]},
                {'name': '업종평균', 'data': [2.857059]},
                {'name': '전체평균', 'data': [-11.538237]}
            ],
            
            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    },
                },
                column: {
                    minPointLength: 5,

                    dataLabels: {
                        enabled: true,
                        allowOverlap: true,
                        crop: false,
                        color: '#656d7e',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                        style: {
                            fontWeight: 'normal'
                        },
                    }
                }
            },
        });
    }
    if ($('#containerDiagnosis1_2').length) {
        Highcharts.chart('containerDiagnosis1_2', {            
            chart: {                
                type: 'column',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,
                // allButtonsEnabled: true,                
                // selected: 0,                
            },

            legend: {
                enabled: false,
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            rangeSelector: {
                selected: 1
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            title: {
                text: null
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            colors: ["#3655d6", "#656d7e", "#bdc8d8"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            
            xAxis: [{
                categories: ['PER(배)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    },
                }
            }],
            
            yAxis: {
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
                plotLines: [{
                    color: '#edeeef',
                    width: 1,
                    value: 0
                }],
            },

            series: [
                {'name': '종목', 'data': [1.48]},
                {'name': '업종평균', 'data': [3.629706]},
                {'name': '전체평균', 'data': [8.5296]}
            ],
            
            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    },
                },
                column: {
                    minPointLength: 5,

                    dataLabels: {
                        enabled: true,
                        allowOverlap: true,
                        crop: false,
                        color: '#656d7e',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                        style: {
                            fontWeight: 'normal'
                        },
                    }
                }
            },
        });
    }
    if ($('#containerDiagnosis1_3').length) {
        Highcharts.chart('containerDiagnosis1_3', {            
            chart: {                
                type: 'column',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },                
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,
                // allButtonsEnabled: true,                
                // selected: 0,                
            },

            legend: {
                enabled: false,
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            rangeSelector: {
                selected: 1
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            title: {
                text: null
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            colors: ["#3655d6", "#656d7e", "#bdc8d8"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            
            xAxis: [{
                categories: ['PER(배)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    },
                }
            }],
            
            yAxis: {
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
                plotLines: [{
                    color: '#edeeef',
                    width: 1,
                    value: 0
                }],
            },

            series: [
                {name: '종목', data: [77.988]},
                {name: '업종평균', data: [137.988]},
                {name: '전체평균', data: [97.988]},
            ],
            
            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    },
                },
                column: {
                    minPointLength: 5,

                    dataLabels: {
                        enabled: true,
                        allowOverlap: true,
                        crop: false,
                        color: '#656d7e',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                        style: {
                            fontWeight: 'normal'
                        },
                    }
                }
            },
        });
    }
    if ($('#containerDiagnosis1_4').length) {
        Highcharts.chart('containerDiagnosis1_4', {            
            chart: {                
                type: 'column',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,
                // allButtonsEnabled: true,                
                // selected: 0,                
            },

            legend: {
                enabled: false,
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            rangeSelector: {
                selected: 1
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            title: {
                text: null
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            colors: ["#3655d6", "#656d7e", "#bdc8d8"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            
            xAxis: [{
                categories: ['PER(배)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    },
                }
            }],
            
            yAxis: {
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
                plotLines: [{
                    color: '#edeeef',
                    width: 1,
                    value: 0
                }],
            },

            series: [
                {name: '종목', data: [77.988]},
                {name: '업종평균', data: [137.988]},
                {name: '전체평균', data: [97.988]},
            ],
            
            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    },
                },
                column: {
                    minPointLength: 5,

                    dataLabels: {
                        enabled: true,
                        allowOverlap: true,
                        crop: false,
                        color: '#656d7e',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                        style: {
                            fontWeight: 'normal'
                        },
                    }
                }
            },
        });
    }
    if ($('#containerDiagnosis1_5').length) {
        Highcharts.chart('containerDiagnosis1_5', {            
            chart: {                
                type: 'column',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,
                // allButtonsEnabled: true,                
                // selected: 0,                
            },

            legend: {
                enabled: false,
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            rangeSelector: {
                selected: 1
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            title: {
                text: null
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            colors: ["#3655d6", "#656d7e", "#bdc8d8"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            
            xAxis: [{
                categories: ['PER(배)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    },
                }
            }],
            
            yAxis: {
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
                plotLines: [{
                    color: '#edeeef',
                    width: 1,
                    value: 0
                }],
            },

            series: [
                {name: '종목', data: [77.988]},
                {name: '업종평균', data: [137.988]},
                {name: '전체평균', data: [97.988]},
            ],
            
            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    },
                },
                column: {
                    minPointLength: 5,

                    dataLabels: {
                        enabled: true,
                        allowOverlap: true,
                        crop: false,
                        color: '#656d7e',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                        style: {
                            fontWeight: 'normal'
                        },
                    }
                }
            },
        });
    }
    if ($('#containerDiagnosis2_1').length) {
        Highcharts.chart('containerDiagnosis2_1', {            
            chart: {                
                type: 'column',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,
                // allButtonsEnabled: true,                
                // selected: 0,                
            },

            legend: {
                enabled: false,
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            rangeSelector: {
                selected: 1
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            title: {
                text: null
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            colors: ["#3655d6", "#656d7e", "#bdc8d8"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            
            xAxis: [{
                categories: ['최근매출액성장률(%)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    },
                }
            }],
            
            yAxis: {
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
                plotLines: [{
                    color: '#edeeef',
                    width: 1,
                    value: 0
                }],
            },

            series: [
                {'name': '종목', 'data': [-15.65]},
                {'name': '업종평균', 'data': [124.981373]},
                {'name': '전체평균', 'data': [123.850268]}
            ],
            
            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    },
                },
                column: {
                    minPointLength: 5,

                    dataLabels: {
                        enabled: true,
                        allowOverlap: false,                        
                        color: '#656d7e',
                        crop: false,
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                        style: {
                            fontWeight: 'normal'
                        },
                    }
                }
            },
        });
    }
    if ($('#containerDiagnosis2_2').length) {
        Highcharts.chart('containerDiagnosis2_2', {            
            chart: {                
                type: 'column',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,
                // allButtonsEnabled: true,                
                // selected: 0,                
            },

            legend: {
                enabled: false,
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            rangeSelector: {
                selected: 1
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            title: {
                text: null
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            colors: ["#3655d6", "#656d7e", "#bdc8d8"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            
            xAxis: [{
                categories: ['5년 평균ROE(%)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    },
                }
            }],
            
            yAxis: {
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
                plotLines: [{
                    color: '#edeeef',
                    width: 1,
                    value: 0
                }],
            },

            series: [
                {name: '종목', data: [77.988]},
                {name: '업종평균', data: [137.988]},
                {name: '전체평균', data: [97.988]},
            ],
            
            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    },
                },
                column: {
                    minPointLength: 5,

                    dataLabels: {
                        enabled: true,
                        allowOverlap: true,
                        crop: false,
                        color: '#656d7e',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                        style: {
                            fontWeight: 'normal'
                        },
                    }
                }
            },
        });
    }
    if ($('#containerDiagnosis2_3').length) {
        Highcharts.chart('containerDiagnosis2_3', {            
            chart: {                
                type: 'column',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,
                // allButtonsEnabled: true,                
                // selected: 0,                
            },

            legend: {
                enabled: false,
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            rangeSelector: {
                selected: 1
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            title: {
                text: null
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            colors: ["#3655d6", "#656d7e", "#bdc8d8"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            
            xAxis: [{
                categories: ['PER(배)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    },
                }
            }],
            
            yAxis: {
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
                plotLines: [{
                    color: '#edeeef',
                    width: 1,
                    value: 0
                }],
            },

            series: [
                {name: '종목', data: [77.988]},
                {name: '업종평균', data: [137.988]},
                {name: '전체평균', data: [97.988]},
            ],
            
            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    },
                },
                column: {
                    minPointLength: 5,

                    dataLabels: {
                        enabled: true,
                        allowOverlap: true,
                        crop: false,
                        color: '#656d7e',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                        style: {
                            fontWeight: 'normal'
                        },
                    }
                }
            },
        });
    }
    if ($('#containerDiagnosis2_4').length) {
        Highcharts.chart('containerDiagnosis2_4', {            
            chart: {                
                type: 'column',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,
                // allButtonsEnabled: true,                
                // selected: 0,                
            },

            legend: {
                enabled: false,
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            rangeSelector: {
                selected: 1
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            title: {
                text: null
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            colors: ["#3655d6", "#656d7e", "#bdc8d8"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            
            xAxis: [{
                categories: ['PER(배)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    },
                }
            }],
            
            yAxis: {
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
                plotLines: [{
                    color: '#edeeef',
                    width: 1,
                    value: 0
                }],
            },

            series: [
                {name: '종목', data: [77.988]},
                {name: '업종평균', data: [137.988]},
                {name: '전체평균', data: [97.988]},
            ],
            
            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    },
                },
                column: {
                    minPointLength: 5,

                    dataLabels: {
                        enabled: true,
                        allowOverlap: true,
                        crop: false,
                        color: '#656d7e',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                        style: {
                            fontWeight: 'normal'
                        },
                    }
                }
            },
        });
    }
    if ($('#containerDiagnosis2_5').length) {
        Highcharts.chart('containerDiagnosis2_5', {            
            chart: {                
                type: 'column',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },                
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,
                // allButtonsEnabled: true,                
                // selected: 0,                
            },

            legend: {
                enabled: false,
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            rangeSelector: {
                selected: 1
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            title: {
                text: null
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            colors: ["#3655d6", "#656d7e", "#bdc8d8"],

            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            
            xAxis: [{
                categories: ['PER(배)'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    },
                }
            }],
            
            yAxis: {
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
                plotLines: [{
                    color: '#edeeef',
                    width: 1,
                    value: 0
                }],
            },

            series: [
                {name: '종목', data: [77.988]},
                {name: '업종평균', data: [137.988]},
                {name: '전체평균', data: [97.988]},
            ],
            
            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    },
                },
                column: {
                    minPointLength: 5,

                    dataLabels: {
                        enabled: true,
                        allowOverlap: true,
                        crop: false,
                        color: '#656d7e',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                        style: {
                            fontWeight: 'normal'
                        },
                    }
                }
            },
        });
    }

    //재무분석 BIC 차트 - 매출액과 이익
    if ($('#BICchart_profit01').length) {
        var reflowchart01 = new Highcharts.chart('BICchart_profit01', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                width: 500,
            },

            colors: ["#DBDFED", "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '매출과 이익 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{                
                categories: ['2012.03', '2012.06', '2012.09', '2012.12', '2013.03', '2013.06', '2013.09', '2013.12', '2014.03', '2014.06', '2014.09', '2014.12', '2015.03', '2015.06', '2015.09', '2015.12', '2016.03', '2016.06', '2016.09', '2016.12', '2017.03', '2017.06', '2017.09', '2017.12', '2018.03', '2018.06', '2018.09', '2018.12', '2019.03', '2019.06', '2019.09', '2019.12', '2020.03', '2020.06', '2020.09', '2020.12', '2021.03', '2021.06', '2021.09',],
                type: 'datetime',
                crosshair: true,
                labels: {
					formatter: function () {						
                        var year = this.value.substr(0, 4);
                        if (year !== this.axis.chart.lastDisplayedYear) {
                            this.axis.chart.lastDisplayedYear = year;
                            return year;
                        }						
					},					
					rotation: 0,                        
					align: 'center',
					step : 1	
				},             
            }],

            yAxis: [{// 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}억',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }, {// 2
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}억',
                    style: {
                        color: ["#656d7e"],
                    }
                },
                opposite: true
            }],


            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '매출액(좌)',
                type: 'column',
                data: [1732872.71, 1814453.96, 1923487.01, 2011036.13, 2087011.91, 2185686.6, 2254748.89, 2286926.67, 2294998.98, 2243886.79, 2127524.9, 2062059.87, 1996485.79, 1958328.89, 2000681.51, 2006534.82, 2033178.16, 2057173.97, 2018504.58, 2018667.45, 2026320.19, 2126954.36, 2269287.04, 2395753.76, 2495915.64, 2470736.85, 2504847.77, 2437714.15, 2355932.47, 2332376.93, 2297811.71, 2304008.81, 2333405.13, 2301795.51, 2351402.4, 2368069.88, 2468703.13, 2575757.56, 2645907.83,],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f}억원</b><br/>'
                },
            }, {
                name: '영업이익(우)',
                type: 'line',
                yAxis: 1,
                data: [184854.75, 211053.27, 248073.4, 290493.38, 321921.67, 353293.86, 374996.33, 367850.13, 364943.54, 341509.94, 280479.22, 250250.71, 225156.39, 222262.53, 255591.04, 264134.42, 271098.87, 283559, 261626.16, 292406.72, 324632.21, 383858.18, 477188.88, 536450.38, 593888.47, 601913.35, 632330.41, 588866.69, 494777.81, 412058.11, 314088.38, 277685.09, 279825.72, 295317.99, 341071.45, 359938.76, 389293.99, 433498.52, 468141.45,],
            }, {
                name: '지배지분순이익(우)',
                type: 'line',
                yAxis: 1,
                data: [155288.94, 171209.8, 202456.95, 231853.75, 253013.99, 278273.73, 294520.38, 298212.15, 303289.77, 289304.67, 250163.52, 230824.99, 201171.42, 195673.7, 207380.52, 186946.28, 194388.11, 196382.55, 187409.41, 224156.55, 246406.81, 296144.45, 362454.26, 413445.69, 454678.7, 456494.75, 475771.32, 438908.77, 373865.34, 314695.17, 246071.28, 215050.54, 212871.63, 217115.97, 248733.72, 260908.46, 282940.33, 322557.45, 350461.38,],
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 1,
                        lineColor: null,
                        radius: 3
                    }
                },
            },
        });
    }

    //재무분석 BIC 차트 - 이익률
    if ($('#BICchart_profit02').length) {
        var reflowchart02 = Highcharts.chart('BICchart_profit02', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '이익률 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
                max: 100,
            }],


            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '영업이익률',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });

    }

    if ($('#BICchart_profit03').length) {
        var reflowchart03 = Highcharts.chart('BICchart_profit03', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '원가율 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],


            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '매출원가율(좌)',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '영업비용비율(우)',
                yAxis: 0,
                data: [72, 32, 37, 69, 27, 31, 72, 32, 37, 69, 27, 31],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });

    }

    if ($('#BICchart_profit04').length) {
        var reflowchart04 = Highcharts.chart('BICchart_profit04', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '영업외손익률 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],


            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '영업외손익',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '외환',
                yAxis: 0,
                data: [72, 32, 37, 69, 27, 31, 72, 32, 37, 69, 27, 31],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '파생상품',
                yAxis: 0,
                data: [172, 132, 137, 169, 127, 131, 172, 132, 137, 169, 127, 131],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '금융자산',
                yAxis: 0,
                data: [272, 232, 237, 269, 227, 231, 272, 232, 237, 269, 227, 231],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '자산,투자자산',
                yAxis: 0,
                data: [372, 332, 337, 369, 327, 331, 372, 332, 337, 369, 327, 331],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '이자',
                yAxis: 0,
                data: [472, 432, 437, 469, 427, 431, 472, 432, 437, 469, 427, 431],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_profit05').length) {
        var reflowchart05 = Highcharts.chart('BICchart_profit05', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#DBDFED", "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '연구개발비 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}억',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }, {// 2
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
                opposite: true
            }],


            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '연구개발비(좌)',
                type: 'column',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '연구개발비 비율(우)',
                yAxis: 1,
                data: [72, 32, 37, 69, 27, 31, 72, 32, 37, 69, 27, 31],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_profit06').length) {
        var reflowchart05 = Highcharts.chart('BICchart_profit06', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#DBDFED", "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '예대마진 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}억',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }, {// 2
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}억',
                    style: {
                        color: ["#656d7e"],
                    }
                },
                opposite: true
            }],


            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '예대마진',
                type: 'column',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '이자수익',
                yAxis: 1,
                data: [72, 32, 37, 69, 27, 31, 72, 32, 37, 69, 27, 31],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '이자비용',
                data: [72, 32, 37, 69, 27, 31, 72, 32, 37, 69, 27, 31],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_profit07').length) {
        var reflowchart05 = Highcharts.chart('BICchart_profit07', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '예대마진율 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],


            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '대출이자율',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '수신이자율',
                data: [72, 32, 37, 69, 27, 31, 72, 32, 37, 69, 27, 31],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '예대마진율',
                data: [72, 32, 37, 69, 27, 31, 72, 32, 37, 69, 27, 31],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_profit08').length) {
        var reflowchart05 = Highcharts.chart('BICchart_profit08', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#DBDFED", "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '수입보험료 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}억',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],


            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '수입보험료',
                type: 'column',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_profit09').length) {
        var reflowchart05 = Highcharts.chart('BICchart_profit09', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#DBDFED", "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '사업비율 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}억',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }, { // 2
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
                opposite: true
            }],


            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '사업비(좌)',
                type: 'column',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '사업비율(우)',
                yAxis: 1,
                data: [142, 152, 157, 169, 197, 111, 142, 152, 157, 169, 197, 111],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_profit10').length) {
        var reflowchart05 = Highcharts.chart('BICchart_profit10', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#DBDFED", "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '손해율 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}억',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }, { // 2
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
                opposite: true
            }],


            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '지급보험금(좌)',
                type: 'column',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '손해율(우)',
                yAxis: 1,
                data: [142, 152, 157, 169, 197, 111, 142, 152, 157, 169, 197, 111],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_profit11').length) {
        var reflowchart05 = Highcharts.chart('BICchart_profit11', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '합산비율 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],


            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '합산비율',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '손해율',
                data: [142, 152, 157, 169, 197, 111, 142, 152, 157, 169, 197, 111],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '사업비율',
                data: [242, 252, 257, 269, 297, 211, 242, 252, 257, 269, 297, 211],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_profit12').length) {
        var reflowchart05 = Highcharts.chart('BICchart_profit12', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '매출지수와 순이익지수 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],


            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '매출지수',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f}</b><br/>'
                },
            }, {
                name: '순이익지수',
                data: [142, 152, 157, 169, 197, 111, 142, 152, 157, 169, 197, 111],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f}</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }


    if ($('#BICchart_safety01').length) {
        var reflowchart07 = Highcharts.chart('BICchart_safety01', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '부채비율과 유동비율 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }, {// 2
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
                opposite: true
            }],


            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '부채비율(좌)',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '유동비율(우)',
                yAxis: 1,
                data: [72, 32, 37, 69, 27, 31, 72, 32, 37, 69, 27, 31],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_safety02').length) {
        var reflowchart08 = Highcharts.chart('BICchart_safety02', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#DBDFED", "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '차입금과 차입금 비중 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}억',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }, {// 2
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
                opposite: true
            }],


            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '차입금[좌]',
                type: 'column',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '차입금 비중[우]',
                yAxis: 1,
                data: [72, 32, 37, 69, 27, 31, 72, 32, 37, 69, 27, 31],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_safety03').length) {
        var reflowchart09 = Highcharts.chart('BICchart_safety03', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '영업이익과 이자비용 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}억',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }, {// 2
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}억',
                    style: {
                        color: ["#656d7e"],
                    }
                },
                opposite: true
            }],


            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '영업이익[좌]',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '이자비용[우]',
                yAxis: 1,
                data: [72, 32, 37, 69, 27, 31, 72, 32, 37, 69, 27, 31],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_safety04').length) {
        var reflowchart10 = Highcharts.chart('BICchart_safety04', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '이자보상배수 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}배',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],


            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '이자보상배수',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 배</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_safety05').length) {
        var reflowchart11 = Highcharts.chart('BICchart_safety05', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#DBDFED", "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '차입금과 금융비용 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}억',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }, { // 2
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
                opposite: true
            }],


            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '차입금[좌]',
                type: 'column',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '금융비용[우]',
                yAxis: 1,
                data: [72, 32, 37, 69, 27, 31, 72, 32, 37, 69, 27, 31],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_safety06').length) {
        var reflowchart11 = Highcharts.chart('BICchart_safety06', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '자기자본비율 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],


            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '자기자본비율',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_safety07').length) {
        var reflowchart11 = Highcharts.chart('BICchart_safety07', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '대손비율 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],


            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '대손비율',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_safety08').length) {
        var reflowchart11 = Highcharts.chart('BICchart_safety08', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '순부채 비율 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],


            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '순부채비율',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_safety09').length) {
        var reflowchart11 = Highcharts.chart('BICchart_safety09', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '순부채 대비 운용자산 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],


            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '운용자산/순부채',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }

    if ($('#BICchart_structure01').length) {
        var reflowchart12 = Highcharts.chart('BICchart_structure01', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '자산구조 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}억',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '장기자본',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '자본총계',
                data: [72, 32, 37, 69, 27, 31, 72, 32, 37, 69, 27, 31],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '비유동자산',
                data: [172, 132, 137, 169, 127, 131, 172, 132, 137, 169, 127, 131],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '유형자산',
                data: [272, 232, 237, 269, 227, 231, 272, 232, 237, 269, 227, 231],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '투자자산',
                data: [372, 332, 337, 369, 327, 331, 372, 332, 337, 369, 327, 331],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_structure02').length) {
        var reflowchart13 = Highcharts.chart('BICchart_structure02', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '이익축적 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}억',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '이익잉여금',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '당좌자산',
                data: [72, 32, 37, 69, 27, 31, 72, 32, 37, 69, 27, 31],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '장기투자자산',
                data: [172, 132, 137, 169, 127, 131, 172, 132, 137, 169, 127, 131],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '유형자산',
                data: [272, 232, 237, 269, 227, 231, 272, 232, 237, 269, 227, 231],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_structure03').length) {
        var reflowchart14 = Highcharts.chart('BICchart_structure03', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 110,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '주주자본 구조 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}억',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '자본총계',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '이익잉여금',
                data: [72, 32, 37, 69, 27, 31, 72, 32, 37, 69, 27, 31],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '주주(자본금+자본잉여금)',
                data: [172, 132, 137, 169, 127, 131, 172, 132, 137, 169, 127, 131],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '기타포괄이익',
                data: [272, 232, 237, 269, 227, 231, 272, 232, 237, 269, 227, 231],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '기타자본',
                data: [372, 332, 337, 369, 327, 331, 372, 332, 337, 369, 327, 331],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_structure04').length) {
        var reflowchart15 = Highcharts.chart('BICchart_structure04', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#DBDFED", "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '주당배당금과 배당률 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}원',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }, { // 2
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
                opposite: true
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '주당배당금(좌)',
                type: 'column',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 원</b><br/>'
                },
            }, {
                name: '배당수익률(우)',
                data: [72, 32, 37, 69, 27, 31, 72, 32, 37, 69, 27, 31],
                yAxis: 1,
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_structure05').length) {
        var reflowchart16 = Highcharts.chart('BICchart_structure05', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '배당성향 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }, { // 2
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
                opposite: true
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '배당성향[좌]',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '배당수익률(우)',
                data: [72, 32, 37, 69, 27, 31, 72, 32, 37, 69, 27, 31],
                yAxis: 1,
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_structure06').length) {
        var reflowchart16 = Highcharts.chart('BICchart_structure06', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#DBDFED", "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '자금조달 구조 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '예수금',
                type: 'column',
                data: [42, 52],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '사채',
                type: 'column',
                data: [142, 152],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '차입금',
                type: 'column',
                data: [242, 152],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '자기자본',
                type: 'column',
                data: [342, 352],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '기타',
                type: 'column',
                data: [442, 452],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                },
                column: {
                    stacking: 'normal'
                }
            },
        });
    }
    if ($('#BICchart_structure07').length) {
        var reflowchart16 = Highcharts.chart('BICchart_structure07', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#DBDFED", "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '자금운용 구조 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '대출채권',
                type: 'column',
                yAxis: 0,
                data: [42, 52],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '유가증권',
                type: 'column',
                data: [142, 152],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '현금및예치금',
                type: 'column',
                data: [242, 152],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '유형자산',
                type: 'column',
                data: [342, 352],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '기타',
                type: 'column',
                data: [442, 452],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                },
                column: {
                    stacking: 'normal'
                }
            },
        });
    }
    if ($('#BICchart_structure08').length) {
        var reflowchart16 = Highcharts.chart('BICchart_structure08', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '자산구조 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}억',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '자산총계',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '운용자산',
                data: [142, 152, 157, 169, 197, 111, 142, 152, 157, 169, 197, 111],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '유가증권',
                data: [242, 252, 257, 269, 297, 211, 242, 252, 257, 269, 297, 211],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '대출채권',
                data: [342, 352, 357, 369, 397, 311, 342, 352, 357, 369, 397, 311],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '투자부동산',
                data: [442, 452, 457, 469, 497, 411, 442, 452, 457, 469, 497, 411],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_structure09').length) {
        var reflowchart16 = Highcharts.chart('BICchart_structure09', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '유가증권 투자내역 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}억',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '유가증권',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '주식',
                data: [142, 152, 157, 169, 197, 111, 142, 152, 157, 169, 197, 111],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '국공채',
                data: [242, 252, 257, 269, 297, 211, 242, 252, 257, 269, 297, 211],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '특수채',
                data: [342, 352, 357, 369, 397, 311, 342, 352, 357, 369, 397, 311],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '회사채',
                data: [442, 452, 457, 469, 497, 411, 442, 452, 457, 469, 497, 411],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '수익증권',
                data: [542, 552, 557, 569, 597, 511, 542, 552, 557, 569, 597, 511],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_structure10').length) {
        var reflowchart16 = Highcharts.chart('BICchart_structure10', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#DBDFED", "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '유가증권 투자비율 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '주식',
                type: 'column',
                yAxis: 0,
                data: [42, 52],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '국공채',
                type: 'column',
                data: [142, 152],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '특수채',
                type: 'column',
                data: [242, 252],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '회사채',
                type: 'column',
                data: [342, 352],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '수익증권',
                type: 'column',
                data: [442, 452],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                },
                column: {
                    stacking: 'normal'
                }
            },
        });
    }

    if ($('#BICchart_efficiency01').length) {
        var reflowchart17 = Highcharts.chart('BICchart_efficiency01', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: 'ROE와 PBR <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }, { // 2
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}배',
                    style: {
                        color: ["#656d7e"],
                    }
                },
                opposite: true
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '자기자본이익률(좌)',
                yAxis: 0,
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '주가순자산배수(우)',
                data: [72, 32, 37, 69, 27, 31, 72, 32, 37, 69, 27, 31],
                yAxis: 1,
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 배</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_efficiency02').length) {
        var reflowchart18 = Highcharts.chart('BICchart_efficiency02', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '자기자본이익률(듀퐁분석) <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }, { // 2
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}배',
                    style: {
                        color: ["#656d7e"],
                    }
                },
                opposite: true
            }, { // 3
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}배',
                    style: {
                        color: ["#656d7e"],
                    }
                },
                opposite: true
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '순이익률[좌]',
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '자산회전율[우]',
                data: [72, 32, 37, 69, 27, 31, 72, 32, 37, 69, 27, 31],
                yAxis: 1,
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 배</b><br/>'
                },
            }, {
                name: '재무레버리지[우]',
                data: [172, 132, 137, 169, 127, 131, 172, 132, 137, 169, 127, 131],
                yAxis: 1,
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 배</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_efficiency03').length) {
        var reflowchart19 = Highcharts.chart('BICchart_efficiency03', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: 'ROA & ROE & ROIC <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '총자산이익률',
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '자기자본이익률',
                data: [72, 32, 37, 69, 27, 31, 72, 32, 37, 69, 27, 31],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '투하자본이익률',
                data: [172, 132, 137, 169, 127, 131, 172, 132, 137, 169, 127, 131],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_efficiency04').length) {
        var reflowchart20 = Highcharts.chart('BICchart_efficiency04', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '운전자본 회전일수 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}일',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '매출채권 회전일수',
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 일</b><br/>'
                },
            }, {
                name: '재고자산 회전일수',
                data: [72, 32, 37, 69, 27, 31, 72, 32, 37, 69, 27, 31],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 일</b><br/>'
                },
            }, {
                name: '매입채무 회전일수',
                data: [172, 132, 137, 169, 127, 131, 172, 132, 137, 169, 127, 131],
                tooltip: {
                    pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 일</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_efficiency05').length) {
        var reflowchart21 = Highcharts.chart('BICchart_efficiency05', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '현금회전일수 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}일',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '현금회전일수',
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 일</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_efficiency06').length) {
        var reflowchart21 = Highcharts.chart('BICchart_efficiency06', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '총자산이익률(ROA) <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '총자산이익률',
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }


    if ($('#BICchart_cashflow01').length) {
        var reflowchart22 = Highcharts.chart('BICchart_cashflow01', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '현금흐름표 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}억',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '영업활동 현금흐름',
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '투자활동 현금흐름',
                data: [142, 152, 157, 169, 197, 111, 142, 152, 157, 169, 197, 111],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '재무활동 현금흐름',
                data: [242, 252, 257, 269, 297, 211, 242, 252, 257, 269, 297, 211],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_cashflow02').length) {
        var reflowchart23 = Highcharts.chart('BICchart_cashflow02', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '잉여현금흐름(FCF) & 순이익 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}억',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '잉여현금흐름',
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '지배지분 순이익',
                data: [142, 152, 157, 169, 197, 111, 142, 152, 157, 169, 197, 111],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_cashflow03').length) {
        var reflowchart24 = Highcharts.chart('BICchart_cashflow03', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '잉여현금흐름 비율 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '잉여현금흐름 비율',
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_valuation01').length) {
        var reflowchart25 = Highcharts.chart('BICchart_valuation01', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '주가수익배수(PER) <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}배',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '주가수익배수',
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 배</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_valuation02').length) {
        var reflowchart26 = Highcharts.chart('BICchart_valuation02', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '주가 & 주당순이익 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}원',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }, { // 2
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}원',
                    style: {
                        color: ["#656d7e"],
                    }
                },
                opposite: true
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '주당순이익(좌)',
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 원</b><br/>'
                },
            }, {
                name: '주가(우)',
                data: [121, 12, 157, 169, 197, 111, 142, 152, 157, 169, 197, 111],
                yAxis: 1,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 원</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_valuation03').length) {
        var reflowchart27 = Highcharts.chart('BICchart_valuation03', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '주가순자산배수(PBR) <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}배',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '주가순자산배수',
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 배</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_valuation04').length) {
        var reflowchart28 = Highcharts.chart('BICchart_valuation04', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '주가 & 주당순자산 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}원',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '주당순자산(좌)',
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 원</b><br/>'
                },
            }, {
                name: '주가(우)',
                data: [142, 152, 157, 169, 197, 111, 142, 152, 157, 169, 197, 111],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 원</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_valuation05').length) {
        var reflowchart28 = Highcharts.chart('BICchart_valuation05', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '주가현금흐름배수(PCR) <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}배',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '주가현금흐름배수',
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 배</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_valuation06').length) {
        var reflowchart28 = Highcharts.chart('BICchart_valuation06', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '주가와 주당현금흐름 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}원',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '주당현금흐름(좌)',
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 원</b><br/>'
                },
            }, {
                name: '주가(우)',
                data: [142, 152, 157, 169, 197, 111, 142, 152, 157, 169, 197, 111],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 원</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_valuation07').length) {
        var reflowchart28 = Highcharts.chart('BICchart_valuation07', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '주가매출액배수(PSR) <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['2013.12','2014.03','2014.06','2014.09','2014.12','2015.03','2015.06','2015.09','2015.12','2016.03','2016.06','2016.09','2016.12','2017.03','2017.06','2017.09','2017.12','2018.03','2018.06','2018.09','2018.12','2019.03','2019.06','2019.09','2019.12','2020.03','2020.06','2020.09','2020.12','2021.03','2021.06','2021.09','2021.12','2022.03','2022.06','2022.09','2022.12','2023.03','2023.06',],
                labels: {
                    formatter: function () {
                        var year = this.value.substr(0, 4);
                        var isLastYear = this.value === this.axis.categories[this.axis.categories.length - 1];
                        
                        if (year !== this.axis.chart.lastDisplayedYear || isLastYear) {
                            var count = 0;
                            for (var i = 0; i < this.axis.categories.length; i++) {
                                if (this.axis.categories[i].indexOf(year) === 0) {
                                    count++;
                                }
                            }            
                            // Always display the last year, and if not last year, display if it's repeated 3 or more times
                            if (isLastYear || count >= 3) {
                                this.axis.chart.lastDisplayedYear = year;
                                return year;
                            }
                        }
                    },
                    rotation: 0,                    
                    step: 1
                },
                endOnTick: true,
				showLastLabel: true,
            }],

            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    formatter: function () {
                        if (this.value === 0) {
                            return '0 %';
                        } else if (this.value === 1) {
                            return '1 %';
                        } else if (this.value === 2) {
                            return '2 %';
                        } else if (this.value >= -2 && this.value <= 2) {
                            return this.value.toFixed(2) + ' %';
                        } else {
                            return this.value.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 }) + ' %';
                        }
                    },
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '주가매출액배수',
                type: 'column',
                data: [2286926.67,2294998.98,2243886.79,2127524.9,2062059.87,1996485.79,1958328.89,2000681.51,2006534.82,2033178.16,2057173.97,2018504.58,2018667.45,2026320.19,2126954.36,2269287.04,2395753.76,2495915.64,2470736.85,2504847.77,2437714.15,2355932.47,2332376.93,2297811.71,2304008.81,2333405.13,2301795.51,2351402.4,2368069.88,2468703.13,2575757.56,2645907.83,2796047.99,2919977.94,3055298.16,3083323.09,3022313.6,2881952.33,2709971.59,],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 배</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_valuation08').length) {
        var reflowchart28 = Highcharts.chart('BICchart_valuation08', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '주가와 주당매출액 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}원',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '주당매출액(좌)',
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 원</b><br/>'
                },
            }, {
                name: '주가(우)',
                data: [142, 152, 157, 169, 197, 111, 142, 152, 157, 169, 197, 111],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 원</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_valuation09').length) {
        var reflowchart28 = Highcharts.chart('BICchart_valuation09', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: 'EV/EBITDA <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}배',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: 'EV/EBITDA',
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 배</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_valuation10').length) {
        var reflowchart28 = Highcharts.chart('BICchart_valuation10', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '주가와 대손비율 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}원',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }, { // 2
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}원',
                    style: {
                        color: ["#656d7e"],
                    }
                },
                opposite: true
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '대손비율(좌)',
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 원</b><br/>'
                },
            }, {
                name: '주가(우)',
                data: [142, 152, 157, 169, 197, 111, 142, 152, 157, 169, 197, 111],
                yAxis: 1,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 원</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }

    if ($('#BICchart_valuation11').length) {
        var reflowchart28 = Highcharts.chart('BICchart_valuation11', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '부채비율&재무레버리지 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }, { // 2
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}배',
                    style: {
                        color: ["#656d7e"],
                    }
                },
                opposite: true
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '부채비율(좌)',
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '재무레버리지(우)',
                data: [142, 152, 157, 169, 197, 111, 142, 152, 157, 169, 197, 111],
                yAxis: 1,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 배</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }

    if ($('#BICchart_valuation12').length) {
        var reflowchart28 = Highcharts.chart('BICchart_valuation12', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '자산구조 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}원',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '자산총계',
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 원</b><br/>'
                },
            }, {
                name: '운용자산',
                data: [142, 152, 157, 169, 197, 111, 142, 152, 157, 169, 197, 111],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 원</b><br/>'
                },
            }, {
                name: '유가증권',
                data: [242, 252, 257, 269, 297, 211, 242, 252, 257, 269, 297, 211],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 원</b><br/>'
                },
            }, {
                name: '대출채권',
                data: [342, 352, 357, 369, 397, 311, 342, 352, 357, 369, 397, 311],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 원</b><br/>'
                },
            }, {
                name: '투자부동산',
                data: [442, 452, 457, 469, 497, 411, 442, 452, 457, 469, 497, 411],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 원</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }

    if ($('#BICchart_valuation13').length) {
        var reflowchart28 = Highcharts.chart('BICchart_valuation13', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '유가증권 투자내역 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}원',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '유가증권',
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 원</b><br/>'
                },
            }, {
                name: '주식',
                data: [142, 152, 157, 169, 197, 111, 142, 152, 157, 169, 197, 111],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 원</b><br/>'
                },
            }, {
                name: '국공채',
                data: [242, 252, 257, 269, 297, 211, 242, 252, 257, 269, 297, 211],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 원</b><br/>'
                },
            }, {
                name: '회사채',
                data: [342, 352, 357, 369, 397, 311, 342, 352, 357, 369, 397, 311],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 원</b><br/>'
                },
            }, {
                name: '수익증권',
                data: [442, 452, 457, 469, 497, 411, 442, 452, 457, 469, 497, 411],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 원</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_valuation14').length) {
        var reflowchart28 = Highcharts.chart('BICchart_valuation14', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#DBDFED", "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '유가증권 투자비율 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '주식',
                type: 'column',
                data: [97, 11],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '국공채',
                type: 'column',
                data: [197, 111],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '회사채',
                type: 'column',
                data: [197, 111],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '수익증권',
                type: 'column',
                data: [142, 152],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '기타 유가증권',
                type: 'column',
                data: [142, 152],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                },
                column: {
                    stacking: 'normal'
                }
            },
        });
    }
    if ($('#BICchart_valuation15').length) {
        var reflowchart28 = Highcharts.chart('BICchart_valuation15', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '자금조달 구조 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '예수금',
                type: 'column',
                data: [97, 21],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '차입금',
                type: 'column',
                data: [97, 31],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '자기자본',
                type: 'column',
                data: [97, 31],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '기타',
                type: 'column',
                data: [97, 41],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                },
                column: {
                    stacking: 'normal'
                }
            },
        });
    }
    if ($('#BICchart_valuation16').length) {
        var reflowchart28 = Highcharts.chart('BICchart_valuation16', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '자금조달 구조 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '차입금',
                type: 'column',
                data: [97, 21],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '회사채',
                type: 'column',
                data: [97, 21],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '자기자본',
                type: 'column',
                data: [97, 21],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '기타',
                type: 'column',
                data: [97, 21],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                },
                column: {
                    stacking: 'normal'
                }
            },
        });
    }
    if ($('#BICchart_valuation17').length) {
        var reflowchart28 = Highcharts.chart('BICchart_valuation17', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '자금운용 구조 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '카드자산',
                type: 'column',
                data: [97, 21],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '대출채권',
                type: 'column',
                data: [97, 21],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '유가증권',
                type: 'column',
                data: [97, 21],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '리스자산',
                type: 'column',
                data: [97, 21],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '현금 및 예치금',
                type: 'column',
                data: [97, 21],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '유형자산',
                type: 'column',
                data: [97, 21],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '기타',
                type: 'column',
                data: [97, 21],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                },
                column: {
                    stacking: 'normal'
                }
            },
        });
    }
    if ($('#BICchart_valuation18').length) {
        var reflowchart28 = Highcharts.chart('BICchart_valuation18', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '자금조달 구조 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '부채',
                type: 'column',
                data: [97, 21],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '자본금',
                type: 'column',
                data: [97, 21],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '자본잉여금',
                type: 'column',
                data: [97, 21],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '이익잉여금',
                type: 'column',
                data: [97, 21],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '기타',
                type: 'column',
                data: [97, 21],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                },
                column: {
                    stacking: 'normal'
                }
            },
        });
    }
    if ($('#BICchart_valuation19').length) {
        var reflowchart28 = Highcharts.chart('BICchart_valuation19', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 60,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '자금운용 구조 <span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}%',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '창업투자자산',
                type: 'column',
                data: [97, 21],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '현금성자산',
                type: 'column',
                data: [97, 21],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '유가증권',
                type: 'column',
                data: [97, 21],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '유형자산',
                type: 'column',
                data: [97, 21],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }, {
                name: '기타',
                type: 'column',
                data: [97, 21],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} %</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                },
                column: {
                    stacking: 'normal'
                }
            },
        });
    }

    // 차트 리사이즈 버튼
    $('#container .M_right .contents_header .table_filter .detail span.simple').on('click', function () {
        console.log("차트에서클릭");

        $('.chart_BIC .BICchart_style').toggleClass('simple');
        $('#container .M_right .contents .bic_chartbox .chart_line .con_box .right').toggle(0);
        var LeftWidth = $('#container .M_right .contents .bic_chartbox .chart_line .con_box .left').width();
        var LeftHeight = $('#container .M_right .contents .bic_chartbox .chart_line .con_box .left').height();

        function chartReflow() {
            reflowchart01.setSize(LeftWidth, LeftHeight);
            reflowchart02.setSize(LeftWidth, LeftHeight);
            reflowchart03.setSize(LeftWidth, LeftHeight);
            reflowchart04.setSize(LeftWidth, LeftHeight);
        };
        chartReflow();
    });
    if ($('#container .M_right .contents_header .table_filter .detail span.simple').hasClass('active')) {
        console.log("샘플버튼 활성화 된 상태라면");

        $('#container .M_right .contents .bic_chartbox .chart_line .con_box .right').toggle(0);
        var LeftWidth = $('#container .M_right .contents .bic_chartbox .chart_line .con_box .left').width();
        var LeftHeight = $('#container .M_right .contents .bic_chartbox .chart_line .con_box .left').height();

        function chartReflow() {
            reflowchart01.setSize(LeftWidth, LeftHeight);
            reflowchart02.setSize(LeftWidth, LeftHeight);
            reflowchart03.setSize(LeftWidth, LeftHeight);
            reflowchart04.setSize(LeftWidth, LeftHeight);
        };
        chartReflow();
    }


    //종목발굴 BIC 차트 - 주가 & 순이익지수
    if ($('#BICchart_ptn01').length) {
        Highcharts.chart('BICchart_ptn01', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 90,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '주가 & 순이익지수<br><span>삼성전자 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                type: 'datetime',
                labels: {
                    format: '{value:%y }' + '년',
                },
                showFirstLabel: true,
                showLastLabel: true,
                min: Date.UTC(2018), //차트 시작 년도                
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}원',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }, { // 2
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}',
                    style: {
                        color: ["#656d7e"],
                    }
                },
                opposite: true
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '주가[좌]',
                data: [[Date.UTC(2018, 1, 1), 20000], [Date.UTC(2018, 11, 30), 16600], [Date.UTC(2018, 12, 28), 17200], [Date.UTC(2019, 1, 31), 14500], [Date.UTC(2019, 2, 28), 15000], [Date.UTC(2019, 3, 29), 19250], [Date.UTC(2019, 4, 30), 17450], [Date.UTC(2019, 5, 31), 14550], [Date.UTC(2019, 6, 28), 16750], [Date.UTC(2019, 7, 31), 12950], [Date.UTC(2019, 8, 30), 12200], [Date.UTC(2019, 9, 30), 11350], [Date.UTC(2019, 10, 31), 12150], [Date.UTC(2019, 11, 29), 11300], [Date.UTC(2019, 12, 30), 12400], [Date.UTC(2020, 01, 31), 11200], [Date.UTC(2020, 02, 28), 10050], [Date.UTC(2020, 03, 31), 7750], [Date.UTC(2020, 04, 29), 10650], [Date.UTC(2020, 05, 29), 13350], [Date.UTC(2020, 06, 30), 12200], [Date.UTC(2020, 07, 31), 12850], [Date.UTC(2020, 08, 31), 12700], [Date.UTC(2020, 09, 29), 13200], [Date.UTC(2020, 10, 30), 12600], [Date.UTC(2020, 11, 30), 12000], [Date.UTC(2020, 12, 30), 13750], [Date.UTC(2021, 1, 29), 16500], [Date.UTC(2021, 2, 26), 16600], [Date.UTC(2021, 3, 31), 16350], [Date.UTC(2021, 4, 30), 16600], [Date.UTC(2021, 5, 31), 15850], [Date.UTC(2021, 6, 30), 16200], [Date.UTC(2021, 7, 30), 15700], [Date.UTC(2021, 8, 31), 14700], [Date.UTC(2021, 9, 30), 13500], [Date.UTC(2021, 10, 29), 12750], [Date.UTC(2021, 11, 30), 12100], [Date.UTC(2021, 12, 30), 24700], [Date.UTC(2022, 1, 28), 24300], [Date.UTC(2022, 2, 28), 26000]],
                yAxis: 0,
                tooltip: {
                    headerFormat: '<span style="color:{series.color};">{series.name}</span> : {point.x:%Y-%m-%d}' + '  ',
                    pointFormat: '<strong>{point.y}</strong></span> 점',
                },
            }, {
                name: '순이익지수[우]',
                data: [[Date.UTC(2007, 3), 1000], [Date.UTC(2007, 6), 10000], [Date.UTC(2017, 6), 10000], [Date.UTC(2019, 1, 31), 14500], [Date.UTC(2019, 2, 28), 15000], [Date.UTC(2022, 1, 28), 24300], [Date.UTC(2022, 2, 28), 26000]],
                yAxis: 1,
                tooltip: {
                    headerFormat: '<span style="color:{series.color};">{series.name}</span> : {point.x:%Y-%m-%d}' + '  ',
                    pointFormat: '<strong>{point.y}</strong></span> 점',
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    if ($('#BICchart_ptn02').length) {
        Highcharts.chart('BICchart_ptn02', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 90,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '주가 & 순이익지수<br><span>대신증권 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}원',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }, { // 2
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}',
                    style: {
                        color: ["#656d7e"],
                    }
                },
                opposite: true
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '주가[좌]',
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 원</b><br/>'
                },
            }, {
                name: '순이익지수[우]',
                data: [142, 152, 157, 169, 197, 111, 142, 152, 157, 169, 197, 111],
                yAxis: 1,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f}</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_ptn03').length) {
        Highcharts.chart('BICchart_ptn03', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 90,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '주가 & 순이익지수<br><span>대신증권 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}원',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }, { // 2
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}',
                    style: {
                        color: ["#656d7e"],
                    }
                },
                opposite: true
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '주가[좌]',
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 원</b><br/>'
                },
            }, {
                name: '순이익지수[우]',
                data: [142, 152, 157, 169, 197, 111, 142, 152, 157, 169, 197, 111],
                yAxis: 1,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f}</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_ptn04').length) {
        Highcharts.chart('BICchart_ptn04', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 90,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '주가 & 순이익지수<br><span>대신증권 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}원',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }, { // 2
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}',
                    style: {
                        color: ["#656d7e"],
                    }
                },
                opposite: true
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '주가[좌]',
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 원</b><br/>'
                },
            }, {
                name: '순이익지수[우]',
                data: [142, 152, 157, 169, 197, 111, 142, 152, 157, 169, 197, 111],
                yAxis: 1,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f}</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    //종목발굴 BIC 차트 - 안전마진지수
    if ($('#BICchart_ptngra01').length) {
        Highcharts.chart('BICchart_ptngra01', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 90,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '안전마진지수<br><span>대신증권 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}억',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '순운전',
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '그레이엄매수가',
                data: [142, 152, 157, 169, 197, 111, 142, 152, 157, 169, 197, 111],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '시가총액',
                data: [242, 252, 257, 269, 297, 211, 242, 252, 257, 269, 297, 211],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }
    if ($('#BICchart_ptngra02').length) {
        Highcharts.chart('BICchart_ptngra02', {
            chart: {
                type: 'spline',
                zoomType: 'xy',
                backgroundColor: {
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                marginTop: 90,
                marginBottom: 90,
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: [/*"#DBDFED",*/ "#3655D6", "#37C60C", "#FC4F4F", "#F7C51E", "#AA79E2", "#626262"],

            title: {
                text: '안전마진지수<br><span>현대비앤지스틸 (005930)</span>',
                y: 20,
            },

            tooltip: {
                shared: true,
            },

            xAxis: [{
                categories: ['05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'],
                crosshair: true
            }],


            yAxis: [{ // 1
                title: {
                    text: null,
                },
                labels: {
                    format: '{value}억',
                    style: {
                        color: ["#656d7e"],
                    }
                },
            }],

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '순운전',
                data: [42, 52, 57, 69, 97, 11, 42, 52, 57, 69, 97, 11],
                yAxis: 0,
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '그레이엄매수가',
                data: [142, 152, 157, 169, 197, 111, 142, 152, 157, 169, 197, 111],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }, {
                name: '시가총액',
                data: [242, 252, 257, 269, 297, 211, 242, 252, 257, 269, 297, 211],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
                },
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: true,
                        fillColor: '#FFFFFF',
                        lineWidth: 2,
                        lineColor: null,
                        // symbol: 'circle'
                    }
                }
            },
        });
    }

    //MRI 스파이더 차트 테스트
    if ($('#containerfinancials1_1').length) {
        Highcharts.chart('containerfinancials1_1', {

            chart: {
                chart: {
                    type: 'column'
                },
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                marginTop: 35,
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,
                // allButtonsEnabled: true,                
                // selected: 0,                
            },

            legend: {
                enabled: false,
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            rangeSelector: {
                selected: 1
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            title: {
                text: null
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            xAxis: [{
                categories: ['2018', '2019', '2020', '2021', '2022 <br> <span style="font-size:10px">(추정)</span>'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
                plotLines: [{
                    color: '#edeeef',
                    width: 1,
                    value: 0
                }],
            },

            series: [{
                type: 'column',
                name: '매출액',
                data: [{
                    y: 97.988,
                },
                {
                    y: 45.988,
                },
                {
                    y: 75.988,
                },
                {
                    y: 85.988,
                },
                {
                    y: 95.988,
                    className: 'point_color'
                }]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    },
                    // borderRadius: 3,                    
                    pointWidth: 30,
                },

                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    },

                }
            },

        });
    }
    if ($('#containerfinancials1_2').length) {
        Highcharts.chart('containerfinancials1_2', {

            chart: {
                chart: {
                    type: 'column'
                },
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,
                // allButtonsEnabled: true,                
                // selected: 0,                
            },

            legend: {
                enabled: false,
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            rangeSelector: {
                selected: 1
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            title: {
                text: null
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            xAxis: [{
                categories: ['2018', '2019', '2020', '2021', '2022 <br> <span style="font-size:10px">(추정)</span>'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
                plotLines: [{
                    color: '#edeeef',
                    width: 1,
                    value: 0
                }],
            },

            series: [{
                type: 'column',
                name: '매출액',
                data: [{
                    y: 97.988,
                },
                {
                    y: 45.988,
                },
                {
                    y: 75.988,
                },
                {
                    y: -45.988,
                    className: 'decrease_color'
                },
                {
                    y: 95.988,
                    className: 'point_color'
                }]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    },
                    pointWidth: 30,
                },

                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    },

                }
            },

        });
    }
    if ($('#containerfinancials1_3').length) {
        Highcharts.chart('containerfinancials1_3', {

            chart: {
                chart: {
                    type: 'column'
                },                
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },            
                marginTop: 35,
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,
                // allButtonsEnabled: true,                
                // selected: 0,                
            },

            legend: {
                enabled: false,
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                enabled: false
            },

            rangeSelector: {
                selected: 1
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            title: {
                text: null
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            xAxis: [{
                categories: ['2018', '2019', '2020', '2021', '2022 <br> <span style="font-size:10px">(추정)</span>'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#939393',
                        fontSize: '0.85rem'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
                plotLines: [{
                    color: '#edeeef',
                    width: 1,
                    value: 0
                }],
            },

            series: [{
                type: 'column',
                name: '매출액',                
                data: [{
                    y: 7.40,
                },
                {
                    y: -0.11,
                    className: 'decrease_color'
                },
                {
                    y: 7.05,
                },
                {
                    y: 12.95,
                },
                {
                    y: 18.24,
                    className: 'point_color'
                }]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    },
                    pointWidth: 30,
                },

                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        color: '#939393',
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    },

                }
            },

        });
    }

    // 밴드 차트
    if ($('#containerbandchart').length) {
        // 현재 화면 너비를 가져옵니다.
        var screenWidth = window.innerWidth;
        // Highcharts yAxis 레이블 공통 설정
        var commonLabels = {
            formatter: function() {
                return this.value === 0 ? '' : this.value; // 0인 경우 빈 문자열 반환
            },
        };

        // 모바일 디바이스 설정
        var mobileLabels = Object.assign({}, commonLabels, {
            style: {
                fontSize: 0,
            }
        });
        // PC 웹 디바이스 설정
        var pcLabels = Object.assign({}, commonLabels, {
            style: {
                fontSize: 10,
            }
        });

        var mobileLineWidth = 0;
        var pcLineWidth = 1;

        // 미디어 쿼리 조건을 확인하여 해당 Highcharts 설정을 선택합니다.
        var yAxisLabels;
        if (screenWidth >= 320 && screenWidth <= 768) {
            // 모바일 디바이스인 경우            
            yAxisLabels = mobileLabels;
            mobileLineWidth = 0;
        } else {
            // PC 웹 디바이스인 경우            
            yAxisLabels = pcLabels;
            pcLineWidth = 1;
        }

        
        Highcharts.chart('containerbandchart', {
            chart: {
                
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },                                
            },

            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,
                // allButtonsEnabled: true,                
                // selected: 0,                
            },

            legend: {
                enabled: true, // 기본적으로 레전드 표시                
            },
            
            title: {
                text: null
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            colors: ["#f2333a", "#bec3ed", "#e4e6fc", "#c6c6c6", "#737edd"],

            tooltip: {
                crosshairs: true,
                shared: true,
                valueDecimals: 2,
                style: {                    
                    fontWeight: 'nomal',
                    fontSize: '11px',
                    color: '#8380A0',
                }
            },
            lang: {
                noData: "밸류에이션에 필요한 데이터가 충분하지 않아<br>적정주가를 제시하지 않습니다..",
            },
            noData: {
                style: {
                    fontWeight: 'nomal',
                    fontSize: '1rem',
                    color: '#8380A0',
                    align: 'left'
                }
            },

            xAxis: {
                type: 'year',
                categories: ['22.10/25', '22.10/26', '22.10/27', '22.10/28', '22.10/31', '22.11/01', '22.11/02', '22.11/03', '22.11/04', '22.11/07', '22.11/08', '22.11/09', '22.11/10', '22.11/11', '22.11/14', '22.11/15', '22.11/16', '22.11/17', '22.11/18', '22.11/21', '22.11/22', '22.11/23', '22.11/24', '22.11/25', '22.11/28', '22.11/29', '22.11/30', '22.12/01', '22.12/02', '22.12/05', '22.12/06', '22.12/07', '22.12/08', '22.12/09', '22.12/12', '22.12/13', '22.12/14', '22.12/15', '22.12/16', '22.12/19', '22.12/20', '22.12/21', '22.12/22', '22.12/23', '22.12/26', '22.12/27', '22.12/28', '22.12/29', '23.01/02', '23.01/03', '23.01/04', '23.01/05', '23.01/06', '23.01/09', '23.01/10', '23.01/11', '23.01/12', '23.01/13', '23.01/16', '23.01/17', '23.01/18', '23.01/19', '23.01/20', '23.01/25', '23.01/26', '23.01/27', '23.01/30', '23.01/31', '23.02/01', '23.02/02', '23.02/03', '23.02/06', '23.02/07', '23.02/08', '23.02/09', '23.02/10', '23.02/13', '23.02/14', '23.02/15', '23.02/16', '23.02/17', '23.02/20', '23.02/21', '23.02/22', '23.02/23', '23.02/24', '23.02/27', '23.02/28', '23.03/02', '23.03/03', '23.03/06', '23.03/07', '23.03/08', '23.03/09', '23.03/10', '23.03/13', '23.03/14', '23.03/15', '23.03/16', '23.03/17', '23.03/20', '23.03/21', '23.03/22', '23.03/23', '23.03/24', '23.03/27', '23.03/28', '23.03/29', '23.03/30', '23.03/31', '23.04/03', '23.04/04', '23.04/05', '23.04/06', '23.04/07', '23.04/10', '23.04/11', '23.04/12', '23.04/13', '23.04/14', '23.04/17', '23.04/18', '23.04/19', '23.04/20', '23.04/21', '23.04/24', '23.04/25', '23.04/26', '23.04/27', '23.04/28', '23.05/02', '23.05/03', '23.05/04', '23.05/08', '23.05/09', '23.05/10', '23.05/11', '23.05/12', '23.05/15', '23.05/16', '23.05/17', '23.05/18', '23.05/19', '23.05/22', '23.05/23', '23.05/24', '23.05/25', '23.05/26', '23.05/30', '23.05/31', '23.06/01', '23.06/02', '23.06/05', '23.06/07', '23.06/08', '23.06/09', '23.06/12', '23.06/13', '23.06/14', '23.06/15', '23.06/16', '23.06/19', '23.06/20', '23.06/21', '23.06/22', '23.06/23', '23.06/26', '23.06/27', '23.06/28', '23.06/29', '23.06/30', '23.07/03', '23.07/04', '23.07/05', '23.07/06', '23.07/07', '23.07/10', '23.07/11', '23.07/12', '23.07/13', '23.07/14', '23.07/17', '23.07/18', '23.07/19', '23.07/20', '23.07/21', '23.07/24', '23.07/25', '23.07/26', '23.07/27', '23.07/28', '23.07/31', '23.08/01', '23.08/02', '23.08/03', '23.08/04', '23.08/07', '23.08/08', '23.08/09', '23.08/10', '23.08/11', '23.08/14', '23.08/16', '23.08/17', '23.08/18', '23.08/21', '23.08/22', '23.08/23', '23.08/24', '23.08/25', '23.08/28', '23.08/29', '23.08/30', '23.08/31', '23.09/01', '23.09/04', '23.09/05', '23.09/06', '23.09/07', '23.09/08', '23.09/11', '23.09/12', '23.09/13', '23.09/14', '23.09/15', '23.09/18', '23.09/19', '23.09/20', '23.09/21', '23.09/22', '23.09/25', '23.09/26', '23.09/27', '23.10/04', '23.10/05', '23.10/06', '23.10/10', '23.10/11', '23.10/12', '23.10/13',],

                labels: {
                    formatter: function () {
                       return (this.value.substring(0, 5));
                    },
                    style: {
                        color: ["#333333"],
                    },
                    step: 55,
                },
                crosshair: {                    
                    color: 'rgba(204,214,235,1)',
                    zIndex: 3
                },
                offset: 10,
            },
            yAxis: {
                title: {
                    text: null
                },                
                gridLineWidth: 0,
                labels: yAxisLabels,
                plotLines: [{
                    color: '#edeeef',
                    width: 1,
                    value: 0
                }],
                opposite: true,
            },
            series: [{
                name: '주가',
                data:
                [57700, 59400, 59500, 57300, 59400, 60000, 59600, 59200, 59400, 60200, 61800, 62000, 60400, 62900, 61900, 62400, 62700, 61400, 61800, 61400, 60600, 61000, 61400, 61000, 60100, 60600, 62200, 62600, 60400, 60300, 59200, 58900, 59200, 60400, 59500, 59700, 60500, 59300, 59500, 59500, 58600, 58000, 59100, 58100, 57900, 58100, 56600, 55300, 55500, 55400, 57800, 58200, 59000, 60700, 60400, 60500, 60500, 60800, 61100, 61000, 60400, 61500, 61800, 63400, 63900, 64600, 63300, 61000, 61800, 63500, 63800, 61600, 61900, 63100, 63000, 62800, 62900, 63200, 62200, 63700, 62600, 62700, 62100, 61100, 62000, 61300, 60500, 60600, 60800, 60500, 61500, 60700, 60300, 60100, 59500, 60000, 59000, 59800, 59900, 61300, 60200, 60300, 61100, 62300, 63000, 62100, 62900, 62700, 63200, 64000, 63100, 63600, 63900, 62300, 65000, 65700, 65900, 66000, 66100, 65100, 65300, 65600, 65500, 65300, 65700, 65200, 63600, 64100, 64600, 65500, 65700, 65400, 65100, 65900, 65300, 64600, 64200, 64100, 64500, 65400, 65000, 66200, 68400, 68500, 68400, 68500, 68800, 70300, 72300, 71400, 70900, 72200, 71700, 71000, 70900, 72000, 71000, 72000, 71900, 71500, 71800, 71200, 71400, 70500, 71300, 71600, 72400, 72600, 72700, 72400, 72200, 73000, 73000, 72000, 71600, 69900, 69500, 71500, 71900, 71900, 73400, 73300, 72000, 71700, 71000, 70300, 70400, 70000, 69800, 71700, 70600, 69800, 71100, 69900, 68800, 68300, 68500, 67600, 68900, 68000, 67500, 67300, 67000, 66700, 66300, 66600, 66600, 67100, 68200, 67100, 66800, 66800, 67100, 66900, 71000, 71200, 70700, 70000, 70400, 70300, 70800, 70500, 70900, 71700, 72000, 70200, 69800, 69600, 68900, 68800, 69400, 68600, 68400, 67500, 66700, 66000, 66400, 68200, 68900, 68000,],
                zIndex: 2,
                lineWidth: 2,
                marker: {
                    enabled: false
                }
            }, {
                name: '적정가',
                data:
                [43050, 43050, 43050, 43050, 43050, 43050, 43050, 43050, 43050, 43050, 43050, 43050, 43050, 43050, 43050, 43050, 43050, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 38550, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 45100, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 29900, 19590, 19590, 19590, 19590, 19590, 19590, 19590, 19590, 19590, 19590, 19590, 20950, 20950, 20950, 20950, 20950, 20950, 20950, 20950, 20950, 20950, 20950, 20950, 20950, 20950, 20950, 20950, 20950, 20950, 20950, 19940, 19940, 19940, 19940, 19940, 19940,],
                marker: {
                    enabled: false
                },
                zIndex: 1,
                lineWidth: 2,
            }, {
                name: '저평가-고평가',
                data: [[56000, 94700], [56000, 94700], [56000, 94700], [56000, 94700], [56000, 94700], [56000, 94700], [56000, 94700], [56000, 94700], [56000, 94700], [56000, 94700], [56000, 94700], [56000, 94700], [56000, 94700], [56000, 94700], [56000, 94700], [56000, 94700], [56000, 94700], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [50200, 84800], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [58700, 99200], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [38900, 65700], [25450, 43050], [25450, 43050], [25450, 43050], [25450, 43050], [25450, 43050], [25450, 43050], [25450, 43050], [25450, 43050], [25450, 43050], [25450, 43050], [25450, 43050], [27300, 46150], [27300, 46150], [27300, 46150], [27300, 46150], [27300, 46150], [27300, 46150], [27300, 46150], [27300, 46150], [27300, 46150], [27300, 46150], [27300, 46150], [27300, 46150], [27300, 46150], [27300, 46150], [27300, 46150], [27300, 46150], [27300, 46150], [27300, 46150], [27300, 46150], [25950, 43850], [25950, 43850], [25950, 43850], [25950, 43850], [25950, 43850], [25950, 43850],],
                type: 'arearange',
                lineWidth: 0,
                opacity: 1,
                className: 'label_none',
                marker: {
                    enabled: false
                }
            }, {
                name: '매우저평가',
                data:
                [72800, 72800, 72800, 72800, 72800, 72800, 72800, 72800, 72800, 72800, 72800, 72800, 72800, 72800, 72800, 72800, 72800, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 65200, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 76300, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 50500, 33150, 33150, 33150, 33150, 33150, 33150, 33150, 33150, 33150, 33150, 33150, 35500, 35500, 35500, 35500, 35500, 35500, 35500, 35500, 35500, 35500, 35500, 35500, 35500, 35500, 35500, 35500, 35500, 35500, 35500, 33750, 33750, 33750, 33750, 33750, 33750,],
                // opacity: 0.8,
                zIndex: 1,
                lineWidth: 1,
                dashStyle: 'Dash',
                marker: {
                    enabled: false
                }
            }, {
                name: '매우고평가',
                data:
                [94700, 94700, 94700, 94700, 94700, 94700, 94700, 94700, 94700, 94700, 94700, 94700, 94700, 94700, 94700, 94700, 94700, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 84800, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 99200, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 65700, 43050, 43050, 43050, 43050, 43050, 43050, 43050, 43050, 43050, 43050, 43050, 46150, 46150, 46150, 46150, 46150, 46150, 46150, 46150, 46150, 46150, 46150, 46150, 46150, 46150, 46150, 46150, 46150, 46150, 46150, 43850, 43850, 43850, 43850, 43850, 43850,],
                // opacity: 0.8,
                zIndex: 1,
                lineWidth: 1,
                dashStyle: 'Dash',
                marker: {
                    enabled: false
                }
            }],
            plotOptions: {
                series: {
                    // connectNulls: true,
                    marker: {
                        fillColor: 'white',
                        lineWidth: 1,
                        lineColor: Highcharts.getOptions(),
                    }
                }
            },
            responsive: {
                rules: [{
                    condition: {
                        maxWidth: 500 // 모바일 화면의 최대 너비를 500px로 가정
                    },
                    chartOptions: {
                        chart: {
                            margin: [0, 0, 120, 0] // 상, 우, 하, 좌 여백을 10px로 설정
                        },
                        legend: {
                            enabled: true,
                            floating: true,
                            y: 0 // 모바일 화면에서 레전드의 위치 조정
                        }
                    }
                }]
            }
        });
    }

    //재무분석 개요 탭 캔들 차트    
    if ($('#containeroutline1_2_M3').length) {
        // 현재 화면 너비를 가져옵니다.
        var screenWidth = window.innerWidth;
        // Highcharts yAxis 레이블 공통 설정
        var commonLabels = {
            formatter: function () {
                return this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
            align: 'left'
        };

        // 모바일 디바이스 설정
        var mobileLabels = Object.assign({}, commonLabels, {
            style: {
                fontSize: 0,
            }
        });
        // PC 웹 디바이스 설정
        var pcLabels = Object.assign({}, commonLabels, {
            style: {
                fontSize: 10,
            }
        });

        var mobileLineWidth = 0;
        var pcLineWidth = 1;

        // 미디어 쿼리 조건을 확인하여 해당 Highcharts 설정을 선택합니다.
        var yAxisLabels;
        if (screenWidth >= 320 && screenWidth <= 768) {
            // 모바일 디바이스인 경우            
            yAxisLabels = mobileLabels;
            mobileLineWidth = 0;
        } else {
            // PC 웹 디바이스인 경우            
            yAxisLabels = pcLabels;
            pcLineWidth = 1;
        }

        // Highcharts 차트 설정
        var chartOptions = {
            chart: {
                panning: {
                    enabled: true,
                    type: 'x'
                },
                followTouchMove: true,
                events: {
                    load: function () {
                        // 차트가 로드될 때 실행할 작업
                    }
                },
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false,                
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false,                                      
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,                   
            },

            legend: {
                enabled: true                
            },
			
            title: {
                text: null
            },

            credits: {
                enabled: false
            },    

            lang: {
                noData: "해당 데이터가 없습니다",
            },                   

            exporting: {
                enabled: false,
            },

            tooltip: {
                shadow: false,
                split: false,
                shared: true,
                borderColor: "#98ACD0",
                xDateFormat: '%Y.%m.%d',
                valueSuffix: ' 원',                    
            },

            colors: ["#AA79E2", "#fc4f4f", "#66C33C"],

            xAxis: [{
                // 아래 함수로 정의
            }],
            yAxis: {
                title: null,
                lineColor: '#98ACD0',
                lineWidth: screenWidth <= 768 ? mobileLineWidth : pcLineWidth, // 모바일 및 PC에 따라 lineWidth 조절
                labels: yAxisLabels,
                showFirstLabel: false,
                showLastLabel: true,
            },
            series: [
                {
                    type: 'candlestick',
                    name: '일봉',
                    data: chart_value,
                    showInLegend: false,
                    dataGrouping: {
                        enabled: false
                    },
                    tooltip: {
                        useHTML: true,
                        headerFormat: '<span style="display: block; border-bottom: 1px solid #c8c8c8; padding-bottom: 3px; margin-bottom: 5px;"><b>{point.x:%Y, %m/%d}</b></span> </br>',
                        pointFormat: '<b>시가 : {point.open}<br/>고가 : {point.high}<br/>저가 : {point.low}<br/>종가: {point.close}<br/></b>',
                    },
                    zIndex: 1
                },
                {
                    type: 'line',
                    name: '주가',
                    data: chart_value5,
                    showInLegend: false,
                    dataGrouping: {
                        enabled: false
                    },
                    tooltip: {
                        useHTML: true,
                        headerFormat: '<span style="display: block; border-bottom: 1px solid #c8c8c8; padding-bottom: 3px; margin-bottom: 5px;"><b>{point.x:%Y,%m/%d}</b></span>',
                        pointFormat: '</br><b>{series.name} : {point.y:,.0f} 원</b></span>',
                    },
                }
            ],
            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                        symbol: "circle",
                    },
                    groupPadding: 0.3
                },
            },
        };
        var chart_value = [[1376006400000, 24580, 24820, 24400, 24600], [1376265600000, 24600, 24960, 24500, 24640], [1376352000000, 24880, 25800, 24840, 25800], [1376438400000, 25780, 26000, 25700, 26000], [1376611200000, 25720, 26020, 25640, 25900], [1376870400000, 25720, 25920, 25600, 25720], [1376956800000, 25920, 26100, 25380, 25380], [1377043200000, 25300, 25640, 25120, 25120], [1377129600000, 25000, 25340, 24900, 25100], [1377216000000, 25600, 26000, 25420, 25900], [1377475200000, 26020, 26100, 25920, 26000], [1377561600000, 26140, 26180, 25900, 26080], [1377648000000, 25680, 26200, 25680, 26180], [1377734400000, 26340, 26960, 26280, 26880], [1377820800000, 27200, 27360, 27020, 27360], [1378080000000, 27360, 27420, 27000, 27020], [1378166400000, 27280, 27280, 26520, 26740], [1378252800000, 26600, 27080, 26420, 26800], [1378339200000, 27400, 27420, 27160, 27300], [1378425600000, 27400, 27500, 27160, 27380], [1378684800000, 27420, 27500, 27260, 27460], [1378771200000, 27380, 27920, 27360, 27920], [1378857600000, 27960, 28040, 27700, 28040], [1378944000000, 28100, 28480, 27900, 28200], [1379030400000, 28180, 28200, 27920, 28120], [1379289600000, 28460, 28500, 28220, 28500], [1379376000000, 28400, 28400, 27620, 27720], [1379894400000, 27300, 27620, 27060, 27200], [1379980800000, 26840, 27580, 26760, 27460], [1380067200000, 27340, 27480, 27020, 27280], [1380153600000, 27280, 27440, 27120, 27440], [1380240000000, 27500, 27540, 27260, 27320], [1380499200000, 27320, 27640, 27200, 27340], [1380585600000, 27600, 27660, 27200, 27640], [1380672000000, 27960, 28500, 27800, 28360], [1380844800000, 28760, 28840, 28280, 28360], [1381104000000, 28740, 28740, 28500, 28720], [1381190400000, 28340, 28660, 28340, 28600], [1381363200000, 28420, 28640, 28420, 28600], [1381449600000, 28800, 28940, 28720, 28860], [1381708800000, 28960, 28980, 28760, 28760], [1381795200000, 29000, 29140, 28900, 29140], [1381881600000, 29380, 29380, 28900, 29000], [1381968000000, 29200, 29360, 29080, 29260], [1382054400000, 29440, 29500, 29260, 29440], [1382313600000, 29500, 29780, 29080, 29280], [1382400000000, 29200, 29200, 28680, 29100], [1382486400000, 29280, 29280, 28720, 28840], [1382572800000, 28620, 28980, 28580, 28980], [1382659200000, 29000, 29040, 28660, 28980], [1382918400000, 29300, 29700, 29160, 29640], [1383004800000, 29800, 29800, 29560, 29800], [1383091200000, 29700, 30000, 29680, 30000], [1383177600000, 29960, 30040, 29300, 29300], [1383264000000, 29800, 30000, 29360, 30000], [1383523200000, 29840, 30040, 29780, 29980], [1383609600000, 30040, 30040, 29440, 29700], [1383696000000, 29960, 29960, 28980, 29020], [1383782400000, 29020, 29080, 28500, 28740], [1383868800000, 28220, 28560, 28140, 28200], [1384128000000, 28500, 28680, 28180, 28560], [1384214400000, 28800, 29320, 28720, 29120], [1384300800000, 28900, 28980, 28380, 28380], [1384387200000, 29100, 29100, 28480, 28480], [1384473600000, 28680, 29240, 28640, 29240], [1384732800000, 29400, 29520, 29300, 29480], [1384819200000, 29660, 29780, 29540, 29780], [1384905600000, 29460, 29740, 29280, 29400], [1384992000000, 29440, 29440, 28640, 28800], [1385078400000, 28820, 29120, 28620, 29000], [1385337600000, 29020, 29440, 29020, 29300], [1385424000000, 29160, 29580, 29100, 29580], [1385510400000, 29340, 29520, 29200, 29400], [1385596800000, 29600, 29880, 29580, 29880], [1385683200000, 29980, 29980, 29700, 29880], [1385942400000, 30000, 30060, 29340, 29340], [1386028800000, 29280, 29560, 29140, 29220], [1386115200000, 29000, 29060, 28620, 28640], [1386201600000, 28660, 28920, 28440, 28800], [1386288000000, 29080, 29080, 28560, 28560], [1386547200000, 28800, 29080, 28800, 29080], [1386633600000, 28820, 29020, 28620, 28800], [1386720000000, 28520, 28880, 28320, 28400], [1386806400000, 27920, 28200, 27920, 28200], [1386892800000, 28200, 28220, 27800, 27800], [1387152000000, 27820, 28080, 27660, 28000], [1387238400000, 28340, 28340, 27860, 27900], [1387324800000, 28100, 28200, 27880, 28020], [1387411200000, 28360, 28680, 28360, 28540], [1387497600000, 28260, 28540, 28260, 28540], [1387756800000, 28740, 28760, 28580, 28660], [1387843200000, 28600, 28640, 28300, 28300], [1388016000000, 28160, 28300, 28020, 28160], [1388102400000, 28200, 28220, 27900, 27920], [1388361600000, 27920, 27940, 27200, 27440], [1388620800000, 26960, 27100, 26040, 26180], [1388707200000, 26000, 26220, 25740, 25920], [1388966400000, 26060, 26400, 25920, 26140], [1389052800000, 26000, 26360, 25900, 26080], [1389139200000, 26000, 26080, 25740, 25820], [1389225600000, 26140, 26140, 25500, 25500], [1389312000000, 25500, 25720, 25440, 25440], [1389571200000, 25660, 25940, 25460, 25900], [1389657600000, 25940, 26600, 25800, 26260], [1389744000000, 26600, 26620, 25960, 25980], [1389830400000, 26000, 26200, 25860, 26020], [1389916800000, 26020, 26300, 25840, 25840], [1390176000000, 26100, 26380, 25920, 26320], [1390262400000, 26300, 26540, 26220, 26480], [1390348800000, 26280, 26560, 26240, 26560], [1390435200000, 26320, 26440, 25980, 25980], [1390521600000, 26000, 26360, 25820, 26140], [1390780800000, 25860, 26080, 25700, 25840], [1390867200000, 25460, 25860, 25460, 25660], [1390953600000, 25600, 25760, 25540, 25600], [1391385600000, 25720, 25760, 25420, 25440], [1391472000000, 25260, 25260, 24980, 24980], [1391558400000, 24900, 25100, 24680, 24740], [1391644800000, 24900, 25340, 24800, 25180], [1391731200000, 25500, 25580, 25260, 25500], [1391990400000, 25420, 25620, 25240, 25540], [1392076800000, 25620, 26300, 25440, 26220], [1392163200000, 26620, 26620, 26100, 26140], [1392249600000, 26000, 26400, 25800, 25960], [1392336000000, 25920, 26160, 25840, 26020], [1392595200000, 25840, 26120, 25600, 25700], [1392681600000, 25700, 25980, 25640, 25900], [1392768000000, 26000, 26000, 25600, 25800], [1392854400000, 25800, 25920, 25620, 25720], [1392940800000, 26660, 26660, 26000, 26600], [1393200000000, 26680, 26900, 26420, 26560], [1393286400000, 26640, 26800, 26520, 26680], [1393372800000, 26740, 26860, 26500, 26840], [1393459200000, 26700, 26840, 26600, 26820], [1393545600000, 26740, 26980, 26640, 26980], [1393804800000, 26720, 26800, 26420, 26500], [1393891200000, 26400, 26580, 26300, 26300], [1393977600000, 26700, 26820, 26600, 26600], [1394064000000, 26580, 26580, 26200, 26520], [1394150400000, 26780, 26780, 26580, 26780], [1394409600000, 26400, 26600, 26340, 26400], [1394496000000, 26400, 26540, 26180, 26440], [1394582400000, 26400, 26400, 25860, 25880], [1394668800000, 25880, 26260, 25800, 25800], [1394755200000, 25400, 25700, 25400, 25500], [1395014400000, 25500, 25520, 25160, 25320], [1395100800000, 25400, 25660, 25320, 25560], [1395187200000, 25600, 25700, 25360, 25380], [1395273600000, 25400, 25440, 25240, 25240], [1395360000000, 25380, 25460, 25240, 25460], [1395619200000, 25200, 25480, 25180, 25460], [1395705600000, 25380, 25400, 24820, 24940], [1395792000000, 25380, 25800, 24960, 25700], [1395878400000, 25800, 26660, 25700, 26660], [1395964800000, 26400, 26760, 26400, 26700], [1396224000000, 26900, 26900, 26440, 26860], [1396310400000, 26900, 26900, 26620, 26780], [1396396800000, 27000, 27140, 26860, 27140], [1396483200000, 27020, 27900, 27020, 27800], [1396569600000, 27540, 27940, 27540, 27600], [1396828800000, 27940, 27940, 27480, 27940], [1396915200000, 27740, 27980, 27500, 27880], [1397001600000, 27880, 27900, 27280, 27420], [1397088000000, 27380, 27600, 27200, 27600], [1397174400000, 27240, 27360, 27180, 27300], [1397433600000, 27300, 27720, 27300, 27400], [1397520000000, 27720, 27740, 27380, 27400], [1397606400000, 27400, 27840, 27260, 27600], [1397692800000, 27520, 27600, 27320, 27400], [1397779200000, 27400, 27580, 27400, 27560], [1398038400000, 27580, 27720, 27500, 27600], [1398124800000, 27480, 27680, 27420, 27500], [1398211200000, 27880, 27900, 27640, 27780], [1398297600000, 28180, 28180, 27980, 28140], [1398384000000, 28400, 28560, 27960, 27980], [1398643200000, 28080, 28120, 27640, 27760], [1398729600000, 27780, 27900, 27020, 27200], [1398816000000, 27600, 27620, 26520, 26860], [1398988800000, 27080, 27180, 26880, 26920], [1399420800000, 27000, 27120, 26800, 26880], [1399507200000, 27100, 27100, 26880, 27000], [1399593600000, 27120, 27160, 26520, 26700], [1399852800000, 26720, 27900, 26640, 27760], [1399939200000, 27760, 28500, 27760, 28000], [1400025600000, 28180, 28300, 28020, 28300], [1400112000000, 28280, 28380, 28060, 28200], [1400198400000, 28000, 28740, 27980, 28560], [1400457600000, 28560, 29000, 28160, 28960], [1400544000000, 28900, 29080, 28700, 29020], [1400630400000, 28700, 29000, 28700, 28820], [1400716800000, 28820, 28960, 28520, 28520], [1400803200000, 28100, 28560, 28100, 28560], [1401062400000, 28400, 28640, 28300, 28440], [1401148800000, 28340, 28460, 28060, 28140], [1401235200000, 28380, 28700, 28180, 28660], [1401321600000, 29000, 29300, 28800, 29200], [1401408000000, 29400, 29640, 28860, 28860], [1401667200000, 28860, 29160, 28780, 29100], [1401753600000, 29680, 29900, 29300, 29400], [1401926400000, 29320, 29600, 29000, 29140], [1402272000000, 29400, 29460, 28040, 28180], [1402358400000, 28420, 28760, 28100, 28720], [1402444800000, 28240, 28600, 28240, 28440], [1402531200000, 28600, 28600, 28020, 28260], [1402617600000, 28040, 28080, 27260, 27340], [1402876800000, 27600, 27640, 27240, 27480], [1402963200000, 27200, 27560, 27020, 27480], [1403049600000, 27460, 27520, 27120, 27160], [1403136000000, 26900, 26980, 26400, 26460], [1403222400000, 26600, 26600, 25920, 26020], [1403481600000, 26420, 26640, 26320, 26440], [1403568000000, 26800, 27080, 26640, 26900], [1403654400000, 26600, 26660, 26360, 26400], [1403740800000, 26180, 26860, 26140, 26500], [1403827200000, 26140, 26380, 26120, 26220], [1404086400000, 26200, 26480, 26180, 26440], [1404172800000, 26160, 26280, 26020, 26200], [1404259200000, 26340, 26620, 26120, 26600], [1404345600000, 26720, 26720, 26320, 26360], [1404432000000, 26440, 26520, 26060, 26120], [1404691200000, 25820, 26020, 25800, 25840], [1404777600000, 25880, 26380, 25740, 25900], [1404864000000, 25740, 26160, 25660, 26160], [1404950400000, 26160, 26220, 26040, 26120], [1405036800000, 26000, 26040, 25640, 25680], [1405296000000, 25960, 26000, 25720, 25720], [1405382400000, 26000, 26460, 25940, 26400], [1405468800000, 26260, 26460, 26220, 26420], [1405555200000, 26520, 26700, 26400, 26600], [1405641600000, 26300, 26860, 26280, 26860], [1405900800000, 26980, 27200, 26860, 27060], [1405987200000, 26960, 27160, 26900, 26960], [1406073600000, 27080, 27140, 26700, 26760], [1406160000000, 27000, 27160, 26620, 27100], [1406246400000, 26920, 27100, 26700, 27100], [1406505600000, 27100, 27340, 26880, 27160], [1406592000000, 27100, 27760, 27060, 27720], [1406678400000, 27760, 28160, 27480, 27900], [1406764800000, 27480, 27700, 26720, 26860], [1406851200000, 26100, 26560, 25840, 25840], [1407110400000, 26000, 26340, 25820, 26340], [1407196800000, 26020, 26420, 26000, 26320], [1407283200000, 26120, 26320, 25900, 26000], [1407369600000, 26000, 26040, 25700, 25800], [1407456000000, 25680, 25700, 24960, 25000], [1407715200000, 25500, 25640, 25140, 25400], [1407801600000, 25400, 25880, 25240, 25320], [1407888000000, 25500, 25500, 24960, 25280], [1407974400000, 25480, 25640, 25080, 25220], [1408320000000, 25580, 25600, 25000, 25000], [1408406400000, 25280, 25460, 25060, 25080], [1408492800000, 25280, 25420, 25020, 25220], [1408579200000, 25100, 25220, 24620, 24700], [1408665600000, 24900, 24940, 24700, 24940], [1408924800000, 24620, 24620, 24420, 24560], [1409011200000, 24700, 24700, 24420, 24440], [1409097600000, 24460, 24740, 24440, 24600], [1409184000000, 25160, 25160, 24720, 24840], [1409270400000, 24760, 24760, 24560, 24680], [1409529600000, 24720, 24740, 24480, 24520], [1409616000000, 24420, 24500, 23880, 23880], [1409702400000, 24000, 24000, 23600, 23780], [1409788800000, 24200, 24320, 24040, 24200], [1409875200000, 24300, 24320, 23900, 24020], [1410393600000, 24000, 24140, 23840, 23840], [1410480000000, 24000, 24160, 24000, 24020], [1410739200000, 24140, 24160, 23920, 24000], [1410825600000, 24160, 24300, 24020, 24120], [1410912000000, 24140, 24520, 24140, 24520], [1410998400000, 24600, 24600, 24080, 24200], [1411084800000, 24460, 24460, 24120, 24200], [1411344000000, 24080, 24080, 23600, 23760], [1411430400000, 23560, 23700, 23220, 23220], [1411516800000, 23040, 23220, 22820, 23000], [1411603200000, 23240, 23320, 22940, 23120], [1411689600000, 23040, 23700, 22960, 23700], [1411948800000, 23860, 24000, 23400, 23900], [1412035200000, 23700, 23760, 23300, 23680], [1412121600000, 23480, 23660, 23120, 23120], [1412208000000, 23300, 23300, 22820, 22820], [1412553600000, 22900, 23120, 22760, 23020], [1412640000000, 23240, 23720, 23240, 23240], [1412726400000, 22840, 23020, 22480, 22600], [1412899200000, 22000, 22280, 21980, 22100], [1413158400000, 21640, 22540, 21560, 22160], [1413244800000, 22540, 22920, 22400, 22540], [1413331200000, 22560, 22900, 22400, 22500], [1413417600000, 22320, 22420, 22080, 22300], [1413504000000, 22120, 22300, 21740, 21780], [1413763200000, 22300, 22340, 22020, 22120], [1413849600000, 21880, 22000, 21620, 21660], [1413936000000, 21940, 22080, 21800, 22080], [1414022400000, 22260, 22260, 21800, 21880], [1414108800000, 22060, 22240, 21840, 22240], [1414368000000, 22020, 22220, 21740, 21900], [1414454400000, 21800, 22000, 21720, 21820], [1414540800000, 22000, 22600, 21800, 22600], [1414627200000, 22580, 23660, 22300, 23620], [1414713600000, 23960, 25000, 23700, 24880], [1414972800000, 25000, 25040, 24320, 24700], [1415059200000, 24380, 24840, 24100, 24340], [1415145600000, 24300, 24500, 23880, 24040], [1415232000000, 23960, 24200, 23860, 24080], [1415318400000, 24360, 24360, 23900, 24120], [1415577600000, 24520, 25380, 24440, 25360], [1415664000000, 25100, 25220, 24540, 24620], [1415750400000, 24620, 24680, 24380, 24600], [1415836800000, 24560, 24640, 23980, 24000], [1415923200000, 24020, 24020, 23600, 23880], [1416182400000, 23800, 24400, 23640, 24100], [1416268800000, 24400, 24540, 24300, 24400], [1416355200000, 24760, 24760, 24240, 24360], [1416441600000, 24120, 24400, 24120, 24200], [1416528000000, 24380, 24520, 24340, 24460], [1416787200000, 24940, 24960, 24200, 24400], [1416873600000, 24480, 24480, 23800, 23800], [1416960000000, 23800, 24220, 23640, 24020], [1417046400000, 25460, 26020, 25280, 25280], [1417132800000, 25900, 25920, 25480, 25740], [1417392000000, 25880, 25960, 25740, 25900], [1417478400000, 25900, 25900, 25320, 25900], [1417564800000, 26000, 26020, 25900, 25960], [1417651200000, 26040, 26060, 25960, 26000], [1417737600000, 26280, 26280, 26000, 26040], [1417996800000, 26060, 26420, 26040, 26380], [1418083200000, 26380, 27140, 26380, 26980], [1418169600000, 26920, 26920, 26340, 26340], [1418256000000, 26340, 26380, 25880, 26100], [1418342400000, 26060, 26080, 25480, 25720], [1418601600000, 25600, 25600, 25200, 25460], [1418688000000, 25400, 25780, 25360, 25580], [1418774400000, 25580, 25660, 25060, 25320], [1418860800000, 25320, 25580, 25040, 25320], [1418947200000, 25880, 26560, 25740, 26560], [1419206400000, 26900, 26940, 26360, 26900], [1419292800000, 26920, 26980, 26740, 26780], [1419379200000, 26780, 26860, 26780, 26860], [1419552000000, 26860, 27100, 26860, 27040], [1419811200000, 26900, 26940, 26580, 26580], [1419897600000, 26600, 26700, 26420, 26540], [1420156800000, 26800, 26800, 26540, 26600], [1420416000000, 26720, 26720, 26260, 26660], [1420502400000, 26300, 26340, 25760, 25900], [1420588800000, 25880, 26220, 25640, 26140], [1420675200000, 26780, 26780, 26200, 26280], [1420761600000, 26280, 26440, 26280, 26280], [1421020800000, 26260, 26380, 26020, 26320], [1421107200000, 26280, 26800, 26000, 26780], [1421193600000, 26780, 27100, 26700, 26900], [1421280000000, 26900, 26980, 26580, 26680], [1421366400000, 26680, 26680, 26260, 26320], [1421625600000, 26580, 26980, 26400, 26860], [1421712000000, 27000, 27440, 26900, 27440], [1421798400000, 27340, 27900, 27200, 27900], [1421884800000, 27960, 27980, 27560, 27560], [1421971200000, 28000, 28000, 27540, 27720], [1422230400000, 27500, 27900, 27280, 27780], [1422316800000, 27500, 28000, 27480, 28000], [1422403200000, 27720, 27800, 27480, 27560], [1422489600000, 27360, 27900, 27140, 27200], [1422576000000, 27200, 27540, 27200, 27300], [1422835200000, 27300, 27540, 27120, 27360], [1422921600000, 27600, 27600, 27180, 27320], [1423008000000, 27500, 27620, 27180, 27180], [1423094400000, 27180, 27380, 26920, 27160], [1423180800000, 26920, 27480, 26720, 27440], [1423440000000, 27200, 27980, 27140, 27900], [1423526400000, 28000, 28000, 27540, 27560], [1423612800000, 27480, 27480, 27080, 27100], [1423699200000, 26800, 27160, 26620, 26880], [1423785600000, 27200, 27220, 26900, 27220], [1424044800000, 27360, 27480, 27220, 27480], [1424131200000, 27480, 27540, 27280, 27540], [1424649600000, 27560, 27800, 27320, 27340], [1424736000000, 27700, 27780, 27280, 27340], [1424822400000, 27600, 27700, 27460, 27580], [1424908800000, 27580, 27600, 27360, 27500], [1424995200000, 27500, 27520, 27140, 27140], [1425254400000, 27500, 28460, 27340, 28460], [1425340800000, 28700, 28740, 28120, 28360], [1425427200000, 28220, 28800, 28200, 28740], [1425513600000, 28780, 28860, 28340, 28440], [1425600000000, 28280, 28980, 28120, 28840], [1425859200000, 28800, 28800, 28400, 28400], [1425945600000, 28680, 28860, 28400, 28420], [1426032000000, 28380, 29580, 28360, 29480], [1426118400000, 29200, 29460, 28940, 28940], [1426204800000, 29220, 29580, 29100, 29140], [1426464000000, 29160, 29740, 29100, 29400], [1426550400000, 29400, 30000, 29200, 29940], [1426636800000, 29920, 30120, 29720, 30060], [1426723200000, 30200, 30200, 29400, 29400], [1426809600000, 29500, 29600, 29200, 29280], [1427068800000, 29240, 29480, 29160, 29340], [1427155200000, 29100, 29560, 29100, 29520], [1427241600000, 29740, 29760, 29440, 29700], [1427328000000, 29000, 29120, 28420, 28420], [1427414400000, 28300, 28960, 28300, 28420], [1427673600000, 28500, 28680, 28240, 28560], [1427760000000, 28980, 29040, 28600, 28820], [1427846400000, 28740, 28740, 28400, 28460], [1427932800000, 28680, 28800, 28460, 28680], [1428019200000, 28680, 28800, 28400, 28680], [1428278400000, 28860, 29800, 28700, 29400], [1428364800000, 29560, 29700, 29240, 29240], [1428451200000, 29400, 29700, 29200, 29580], [1428537600000, 29400, 29780, 29400, 29660], [1428624000000, 29600, 29880, 29560, 29800], [1428883200000, 29580, 29820, 29360, 29580], [1428969600000, 29700, 29700, 29300, 29480], [1429056000000, 29200, 29400, 28540, 28920], [1429142400000, 29240, 29540, 28940, 29540], [1429228800000, 29540, 29560, 28940, 29000], [1429488000000, 28920, 28960, 28460, 28600], [1429574400000, 28420, 28900, 28400, 28880], [1429660800000, 28880, 29460, 28720, 29220], [1429747200000, 29400, 29400, 28800, 29020], [1429833600000, 28980, 29100, 28000, 28200], [1430092800000, 28200, 28220, 27500, 27900], [1430179200000, 27800, 28000, 27180, 27320], [1430265600000, 27340, 27880, 27280, 27700], [1430352000000, 27700, 28360, 27580, 28200], [1430697600000, 28140, 28460, 27940, 28000], [1430870400000, 27800, 27820, 27120, 27240], [1430956800000, 27240, 27500, 27080, 27400], [1431043200000, 27320, 27400, 26760, 26760], [1431302400000, 27200, 27200, 26720, 26720], [1431388800000, 26900, 27060, 26480, 26620], [1431475200000, 26980, 26980, 26520, 26660], [1431561600000, 26820, 26860, 26560, 26800], [1431648000000, 27100, 27120, 26420, 26520], [1431907200000, 26700, 26700, 26180, 26400], [1431993600000, 26420, 27100, 26140, 26760], [1432080000000, 26980, 27400, 26820, 27320], [1432166400000, 27420, 27440, 26880, 27040], [1432252800000, 27060, 27060, 26700, 27000], [1432598400000, 27320, 27380, 26720, 27240], [1432684800000, 27200, 27320, 26260, 26280], [1432771200000, 26340, 26420, 26020, 26180], [1432857600000, 26400, 26420, 25940, 26140], [1433116800000, 26000, 26020, 25760, 25820], [1433203200000, 26000, 26060, 25760, 26060], [1433289600000, 26060, 26320, 25300, 25460], [1433376000000, 26300, 26820, 26100, 26740], [1433462400000, 26500, 27100, 26400, 26820], [1433721600000, 26900, 26940, 26260, 26280], [1433808000000, 26000, 26200, 25360, 25640], [1433894400000, 25640, 25880, 25240, 25240], [1433980800000, 25260, 25480, 25060, 25140], [1434067200000, 25560, 25740, 25280, 25540], [1434326400000, 25100, 25480, 25100, 25400], [1434412800000, 25400, 25480, 24900, 25100], [1434499200000, 25000, 25320, 24800, 25080], [1434585600000, 25180, 25580, 25020, 25300], [1434672000000, 25320, 25560, 25200, 25320], [1434931200000, 25820, 25920, 25520, 25620], [1435017600000, 26180, 26560, 25820, 26420], [1435104000000, 26000, 26220, 25820, 26040], [1435190400000, 25800, 26060, 25380, 25380], [1435276800000, 25040, 25800, 25040, 25560], [1435536000000, 25380, 25700, 25120, 25620], [1435622400000, 25520, 25700, 25320, 25360], [1435708800000, 25360, 26040, 25180, 25900], [1435795200000, 25720, 26080, 25700, 25980], [1435881600000, 25740, 25880, 25340, 25360], [1436140800000, 25060, 25200, 24460, 24600], [1436227200000, 24400, 25180, 24400, 24800], [1436313600000, 24800, 25020, 24640, 24780], [1436400000000, 24600, 25300, 24520, 25300], [1436486400000, 25140, 25320, 24960, 25180], [1436745600000, 25000, 25440, 24900, 25320], [1436832000000, 25300, 25400, 24420, 24500], [1436918400000, 24500, 24760, 24480, 24700], [1437004800000, 24460, 25740, 24460, 25640], [1437091200000, 26000, 26220, 25560, 26100], [1437350400000, 25820, 26080, 25460, 25500], [1437436800000, 25500, 25540, 24940, 25260], [1437523200000, 24880, 25200, 24700, 25060], [1437609600000, 24880, 25060, 24680, 24680], [1437696000000, 24540, 24760, 24480, 24580], [1437955200000, 24580, 24940, 24560, 24600], [1438041600000, 24480, 25020, 24380, 24600], [1438128000000, 25000, 25500, 24620, 25260], [1438214400000, 25160, 25200, 24300, 24300], [1438300800000, 24400, 24440, 23500, 23700], [1438560000000, 23680, 23680, 23320, 23500], [1438646400000, 23500, 23740, 23400, 23640], [1438732800000, 23640, 23640, 23160, 23180], [1438819200000, 23100, 23120, 22300, 22300], [1438905600000, 22400, 22740, 22300, 22720], [1439164800000, 22800, 22840, 22600, 22820], [1439251200000, 23020, 23580, 22960, 23140], [1439337600000, 23000, 23280, 22800, 23080], [1439424000000, 23060, 23060, 22760, 22800], [1439769600000, 22800, 22820, 22080, 22080], [1439856000000, 22360, 22820, 22340, 22620], [1439942400000, 23380, 23520, 22820, 23080], [1440028800000, 23260, 23420, 22600, 22780], [1440115200000, 21980, 22560, 21920, 22020], [1440374400000, 21760, 22300, 20660, 21580], [1440460800000, 21580, 22140, 21340, 21580], [1440547200000, 21360, 21480, 21000, 21340], [1440633600000, 21640, 21720, 21260, 21340], [1440720000000, 21720, 21720, 21460, 21620], [1440979200000, 21420, 21780, 21040, 21780], [1441065600000, 21780, 21960, 21620, 21700], [1441152000000, 21380, 21900, 21300, 21800], [1441238400000, 22040, 22460, 21860, 22440], [1441324800000, 22880, 22880, 22360, 22580], [1441584000000, 22580, 22580, 22100, 22240], [1441670400000, 22260, 22720, 22120, 22620], [1441756800000, 22920, 22940, 22720, 22940], [1441843200000, 22600, 22780, 22360, 22680], [1441929600000, 22520, 22660, 22300, 22300], [1442188800000, 22400, 22480, 22200, 22480], [1442275200000, 22280, 22560, 22260, 22460], [1442361600000, 22420, 23140, 22420, 23040], [1442448000000, 23060, 23140, 22880, 23140], [1442534400000, 22900, 23840, 22700, 23800], [1442793600000, 23260, 23460, 23000, 23000], [1442880000000, 22860, 23000, 22600, 22900], [1442966400000, 22880, 22880, 22500, 22620], [1443052800000, 22520, 22700, 22500, 22520], [1443139200000, 22400, 22500, 22180, 22240], [1443571200000, 22000, 22680, 21800, 22680], [1443657600000, 22800, 22900, 22420, 22680], [1443744000000, 22240, 22660, 22240, 22380], [1444003200000, 22380, 22620, 22300, 22300], [1444089600000, 22600, 23100, 22540, 23020], [1444176000000, 23960, 25040, 23720, 25020], [1444262400000, 25000, 25580, 25000, 25400], [1444608000000, 25200, 25260, 24940, 25200], [1444694400000, 25200, 25440, 24960, 25040], [1444780800000, 24960, 25200, 24740, 25080], [1444867200000, 24880, 25640, 24860, 25380], [1444953600000, 25300, 25380, 25180, 25300], [1445212800000, 25140, 25300, 24980, 25120], [1445299200000, 25200, 25460, 25120, 25320], [1445385600000, 25300, 25640, 25180, 25400], [1445472000000, 25600, 25900, 25380, 25600], [1445558400000, 26000, 26000, 25560, 25780], [1445817600000, 25960, 25960, 25440, 25840], [1445904000000, 25640, 25980, 25620, 25960], [1445990400000, 25880, 26160, 25820, 26160], [1446076800000, 26600, 27840, 26480, 26500], [1446163200000, 26900, 27800, 26820, 27440], [1446422400000, 27700, 27860, 27480, 27660], [1446508800000, 27620, 27620, 27000, 27040], [1446595200000, 27040, 27220, 26520, 26600], [1446681600000, 26600, 27080, 26600, 26840], [1446768000000, 26860, 26960, 26600, 26760], [1447027200000, 26760, 26880, 26420, 26880], [1447113600000, 26720, 26820, 26280, 26420], [1447200000000, 26420, 26900, 26420, 26660], [1447286400000, 26660, 26680, 26340, 26340], [1447372800000, 26340, 26340, 26000, 26000], [1447632000000, 25820, 25820, 25260, 25260], [1447718400000, 25500, 25800, 25400, 25400], [1447804800000, 25440, 25800, 25440, 25620], [1447891200000, 25800, 25800, 25420, 25780], [1447977600000, 25780, 25920, 25560, 25700], [1448236800000, 25700, 26040, 25620, 25640], [1448323200000, 25640, 26100, 25640, 25980], [1448409600000, 26000, 26200, 25980, 25980], [1448496000000, 25980, 26800, 25980, 26700], [1448582400000, 26900, 26980, 26540, 26540], [1448841600000, 26500, 26500, 25680, 25680], [1448928000000, 25880, 26440, 25760, 26420], [1449014400000, 26420, 26440, 25880, 26000], [1449100800000, 25900, 25940, 25720, 25800], [1449187200000, 25500, 25600, 25340, 25380], [1449446400000, 25380, 25500, 25240, 25240], [1449532800000, 25240, 25440, 25240, 25240], [1449619200000, 25240, 25500, 25240, 25260], [1449705600000, 25260, 25860, 25260, 25660], [1449792000000, 25660, 25900, 25440, 25680], [1450051200000, 25460, 25460, 25100, 25220], [1450137600000, 25220, 25600, 25200, 25540], [1450224000000, 25560, 26200, 25560, 25980], [1450310400000, 26020, 26160, 25500, 25800], [1450396800000, 25300, 25760, 25280, 25560], [1450656000000, 25560, 25700, 25220, 25600], [1450742400000, 25600, 25840, 25340, 25840], [1450828800000, 25840, 25980, 25640, 25900], [1450915200000, 25900, 26000, 25700, 25700], [1451260800000, 25700, 25780, 25320, 25320], [1451347200000, 25300, 25320, 24820, 25080], [1451433600000, 25200, 25440, 25080, 25200], [1451865600000, 25200, 25200, 24100, 24100], [1451952000000, 24040, 24360, 23720, 24160], [1452038400000, 24160, 24160, 23360, 23500], [1452124800000, 23320, 23660, 23020, 23260], [1452211200000, 23260, 23720, 23260, 23420], [1452470400000, 23120, 23320, 22920, 23040], [1452556800000, 22960, 23320, 22880, 22920], [1452643200000, 23060, 23180, 22960, 22960], [1452729600000, 22620, 22840, 22620, 22760], [1452816000000, 22800, 23040, 22480, 22640], [1453075200000, 21760, 22660, 21760, 22520], [1453161600000, 22560, 23420, 22560, 23420], [1453248000000, 23200, 23200, 22640, 22760], [1453334400000, 22660, 23100, 22500, 22620], [1453420800000, 22900, 23360, 22900, 23360], [1453680000000, 23440, 23520, 23120, 23240], [1453766400000, 23100, 23140, 22720, 22740], [1453852800000, 22520, 23500, 22520, 23500], [1453939200000, 23280, 23360, 22780, 22900], [1454025600000, 22800, 23000, 22320, 23000], [1454284800000, 23040, 23260, 23020, 23260], [1454371200000, 23220, 23320, 22940, 23120], [1454457600000, 23000, 23040, 22740, 22920], [1454544000000, 23000, 23220, 22960, 23120], [1454630400000, 23120, 23380, 23120, 23280], [1455148800000, 22360, 22740, 22360, 22600], [1455235200000, 22600, 23020, 22440, 22600], [1455494400000, 23080, 23200, 22880, 23080], [1455580800000, 23160, 23580, 23140, 23360], [1455667200000, 23580, 24020, 23380, 23700], [1455753600000, 24060, 24060, 23560, 23740], [1455840000000, 23740, 23900, 23480, 23800], [1456099200000, 23800, 23840, 23320, 23500], [1456185600000, 23580, 23780, 23460, 23620], [1456272000000, 23560, 23580, 23220, 23440], [1456358400000, 23440, 23740, 23440, 23580], [1456444800000, 23600, 23740, 23440, 23440], [1456704000000, 23580, 23880, 23520, 23560], [1456876800000, 24000, 24140, 23920, 23940], [1456963200000, 24260, 24400, 24040, 24400], [1457049600000, 24400, 24560, 24040, 24300], [1457308800000, 24400, 24620, 24300, 24460], [1457395200000, 24460, 24480, 23720, 23840], [1457481600000, 23760, 23980, 23540, 23880], [1457568000000, 24160, 24720, 24020, 24500], [1457654400000, 24500, 25060, 24320, 24980], [1457913600000, 25340, 25460, 24980, 25100], [1458000000000, 25100, 25280, 24920, 25060], [1458086400000, 25120, 25260, 25060, 25120], [1458172800000, 25300, 25920, 25140, 25260], [1458259200000, 25560, 25560, 25260, 25460], [1458518400000, 25480, 25580, 25160, 25340], [1458604800000, 25340, 25580, 25240, 25380], [1458691200000, 25380, 25580, 25240, 25580], [1458777600000, 25580, 25800, 25320, 25640], [1458864000000, 25660, 25800, 25560, 25760], [1459123200000, 25760, 26000, 25760, 25880], [1459209600000, 25880, 26000, 25700, 25800], [1459296000000, 26200, 26420, 26040, 26160], [1459382400000, 26120, 26280, 25960, 26240], [1459468800000, 25980, 26180, 25420, 25580], [1459728000000, 25580, 26100, 25580, 26100], [1459814400000, 25980, 25980, 25200, 25200], [1459900800000, 25380, 25820, 25360, 25700], [1459987200000, 26000, 26000, 25160, 25380], [1460073600000, 25380, 25380, 24800, 24920], [1460332800000, 24920, 25420, 24920, 25320], [1460419200000, 25400, 25620, 25320, 25500], [1460592000000, 26000, 26040, 25780, 26000], [1460678400000, 26180, 26200, 25800, 26000], [1460937600000, 25900, 26100, 25840, 25980], [1461024000000, 25880, 25920, 25660, 25760], [1461110400000, 25640, 26000, 25640, 25980], [1461196800000, 26000, 26020, 25760, 25880], [1461283200000, 25880, 25880, 25540, 25600], [1461542400000, 25700, 25700, 25420, 25620], [1461628800000, 25700, 26100, 25660, 25920], [1461715200000, 25880, 26000, 25720, 26000], [1461801600000, 26000, 26000, 25220, 25300], [1461888000000, 25200, 25340, 24840, 24900], [1462147200000, 24940, 25240, 24900, 25000], [1462233600000, 25340, 25400, 25120, 25220], [1462320000000, 25440, 25800, 25240, 25800], [1462752000000, 25800, 26000, 25700, 25980], [1462838400000, 25980, 26000, 25760, 25920], [1462924800000, 25920, 25980, 25740, 25840], [1463011200000, 25840, 25840, 25500, 25620], [1463097600000, 25620, 25620, 25020, 25060], [1463356800000, 25060, 25260, 24940, 24960], [1463443200000, 24980, 25300, 24980, 25280], [1463529600000, 25280, 25420, 25100, 25360], [1463616000000, 25360, 25540, 25320, 25400], [1463702400000, 25400, 25600, 25380, 25380], [1463961600000, 25380, 25720, 25380, 25720], [1464048000000, 25720, 25780, 25360, 25420], [1464134400000, 25660, 25960, 25480, 25900], [1464220800000, 25980, 26060, 25900, 25920], [1464307200000, 26000, 26020, 25460, 25640], [1464566400000, 25940, 25940, 25480, 25600], [1464652800000, 25600, 26000, 25360, 25840], [1464739200000, 25960, 26820, 25900, 26660], [1464825600000, 27000, 27440, 26920, 27300], [1464912000000, 27400, 27580, 27280, 27540], [1465257600000, 27720, 28040, 27600, 27960], [1465344000000, 28380, 28380, 27780, 28120], [1465430400000, 28160, 28600, 28120, 28600], [1465516800000, 28480, 28500, 28080, 28120], [1465776000000, 27920, 27920, 27240, 27420], [1465862400000, 27420, 27720, 27380, 27600], [1465948800000, 27700, 28320, 27660, 28260], [1466035200000, 28260, 28340, 27900, 28180], [1466121600000, 28200, 28700, 28200, 28520], [1466380800000, 28540, 28960, 28520, 28620], [1466467200000, 28640, 28980, 28520, 28960], [1466553600000, 28920, 29000, 28620, 28900], [1466640000000, 28880, 28900, 28540, 28600], [1466726400000, 28900, 28900, 27200, 28000], [1466985600000, 28000, 28100, 27700, 27960], [1467072000000, 27800, 28080, 27580, 27980], [1467158400000, 28160, 28240, 27820, 27920], [1467244800000, 28160, 28900, 27940, 28500], [1467331200000, 28540, 29580, 28540, 29320], [1467590400000, 29280, 29480, 29020, 29320], [1467676800000, 29320, 29500, 29240, 29380], [1467763200000, 28940, 29040, 28240, 28420], [1467849600000, 28420, 29000, 28320, 29000], [1467936000000, 29000, 29500, 28980, 29200], [1468195200000, 29200, 30000, 29200, 29780], [1468281600000, 29980, 30100, 29200, 29280], [1468368000000, 29920, 29920, 29260, 29620], [1468454400000, 29620, 30000, 29520, 30000], [1468540800000, 30000, 30440, 29720, 30360], [1468800000000, 30360, 30660, 30000, 30660], [1468886400000, 30560, 30800, 30440, 30660], [1468972800000, 30660, 30840, 30480, 30800], [1469059200000, 30800, 30940, 30740, 30860], [1469145600000, 30120, 30560, 30120, 30320], [1469404800000, 30000, 30460, 29900, 30040], [1469491200000, 30000, 30620, 29960, 30600], [1469577600000, 30240, 30580, 30240, 30540], [1469664000000, 30660, 30720, 29960, 30140], [1469750400000, 30400, 31140, 30220, 30780], [1470009600000, 31380, 31600, 31200, 31360], [1470096000000, 31360, 31360, 30920, 30960], [1470182400000, 30960, 30960, 30340, 30340], [1470268800000, 30380, 30660, 30340, 30340], [1470355200000, 30580, 31280, 30500, 31220], [1470614400000, 31320, 31500, 31120, 31380], [1470700800000, 31480, 31580, 31140, 31340], [1470787200000, 31340, 31400, 30680, 30820], [1470873600000, 30820, 31180, 30520, 31180], [1470960000000, 31180, 31400, 30880, 30900], [1471305600000, 30900, 31520, 30900, 31360], [1471392000000, 31380, 31400, 31020, 31320], [1471478400000, 31340, 32880, 31320, 32800], [1471564800000, 32760, 33500, 32720, 33500], [1471824000000, 33480, 33840, 33180, 33300], [1471910400000, 33300, 33880, 33140, 33740], [1471996800000, 33600, 33640, 32720, 33060], [1472083200000, 32600, 33180, 32440, 32780], [1472169600000, 32120, 32460, 32060, 32240], [1472428800000, 32040, 32800, 31940, 32800], [1472515200000, 32940, 33420, 32660, 32900], [1472601600000, 32820, 32820, 32220, 32400], [1472688000000, 31660, 31760, 31260, 31740], [1472774400000, 31900, 32260, 31760, 31940], [1473033600000, 31800, 32300, 31700, 32120], [1473120000000, 32140, 32900, 31940, 32860], [1473206400000, 32960, 33040, 32420, 32420], [1473292800000, 32460, 32780, 32280, 32780], [1473379200000, 32220, 32360, 31280, 31500], [1473638400000, 29800, 30120, 29120, 29300], [1473724800000, 30160, 30980, 29900, 30540], [1474243200000, 30760, 31380, 30720, 31160], [1474329600000, 31180, 31760, 31180, 31700], [1474416000000, 31900, 32020, 31520, 31840], [1474502400000, 32000, 32820, 31980, 32360], [1474588800000, 31640, 31960, 31320, 31420], [1474848000000, 31420, 31920, 31280, 31360], [1474934400000, 31000, 31500, 30660, 31380], [1475020800000, 31080, 31460, 31080, 31340], [1475107200000, 31460, 32380, 31440, 32000], [1475193600000, 31800, 32300, 31700, 31960], [1475539200000, 32200, 32480, 32120, 32280], [1475625600000, 32020, 32520, 31940, 32380], [1475712000000, 33920, 34000, 33340, 33820], [1475798400000, 34000, 34320, 33800, 34120], [1476057600000, 33000, 33780, 32560, 33600], [1476144000000, 32000, 32500, 30900, 30900], [1476230400000, 29900, 30900, 29880, 30700], [1476316800000, 31000, 31620, 30900, 31140], [1476403200000, 30960, 31760, 30940, 31540], [1476662400000, 31300, 32040, 30760, 31800], [1476748800000, 31440, 31900, 31440, 31780], [1476835200000, 31580, 32860, 31500, 32500], [1476921600000, 32520, 33020, 32180, 32400], [1477008000000, 32120, 32260, 31760, 31780], [1477267200000, 31860, 32160, 31800, 32160], [1477353600000, 32000, 32080, 31840, 31940], [1477440000000, 31940, 31980, 31240, 31340], [1477526400000, 31420, 32340, 31120, 31460], [1477612800000, 31600, 32280, 31600, 32280], [1477872000000, 32320, 32780, 32220, 32780], [1477958400000, 32600, 33040, 32240, 33040], [1478044800000, 32800, 33040, 32620, 32860], [1478131200000, 32600, 32800, 32120, 32320], [1478217600000, 32100, 32680, 32100, 32540], [1478476800000, 32940, 33000, 32680, 32800], [1478563200000, 32980, 32980, 32700, 32880], [1478649600000, 32920, 33140, 31820, 31920], [1478736000000, 32600, 33000, 32360, 32980], [1478822400000, 31700, 32360, 31700, 31960], [1479081600000, 31900, 31920, 31040, 31060], [1479168000000, 31060, 31620, 30780, 30780], [1479254400000, 30800, 31280, 30800, 31160], [1479340800000, 31100, 31520, 30900, 31360], [1479427200000, 31640, 31760, 31400, 31720], [1479686400000, 31300, 32120, 31300, 31860], [1479772800000, 32140, 32900, 32000, 32800], [1479859200000, 33220, 33220, 32520, 32980], [1479945600000, 32980, 33040, 32660, 33000], [1480032000000, 32820, 33040, 32660, 33000], [1480291200000, 33000, 33620, 32800, 33540], [1480377600000, 33800, 33960, 33380, 33540], [1480464000000, 33540, 34940, 33540, 34920], [1480550400000, 34800, 35060, 34660, 34980], [1480636800000, 34480, 34760, 34140, 34540], [1480896000000, 34340, 34680, 34220, 34360], [1480982400000, 34440, 35200, 34400, 34960], [1481068800000, 35040, 35480, 35040, 35440], [1481155200000, 35980, 36020, 35520, 35800], [1481241600000, 35900, 35900, 35400, 35600], [1481500800000, 34660, 35360, 34660, 35040], [1481587200000, 34620, 35440, 34620, 35320], [1481673600000, 35560, 35680, 35280, 35540], [1481760000000, 34820, 35500, 34820, 35180], [1481846400000, 35300, 36020, 35200, 35860], [1482105600000, 35620, 36380, 35620, 35900], [1482192000000, 35920, 36400, 35840, 36240], [1482278400000, 36360, 36600, 36020, 36100], [1482364800000, 36260, 36300, 35980, 36180], [1482451200000, 36020, 36080, 35600, 35640], [1482710400000, 35600, 36000, 35560, 35960], [1482796800000, 35980, 36200, 35860, 35980], [1482883200000, 35840, 35980, 35600, 35760], [1482969600000, 35420, 36040, 35400, 36040], [1483315200000, 35980, 36240, 35880, 36100], [1483401600000, 36280, 36620, 36020, 36480], [1483488000000, 36500, 36520, 36100, 36160], [1483574400000, 36060, 36060, 35540, 35560], [1483660800000, 36180, 36440, 36040, 36200], [1483920000000, 36600, 37500, 36560, 37220], [1484006400000, 37280, 37400, 37080, 37240], [1484092800000, 37520, 38560, 37420, 38280], [1484179200000, 38000, 38800, 37980, 38800], [1484265600000, 38100, 38320, 37460, 37460], [1484524800000, 36860, 37820, 36320, 36660], [1484611200000, 36580, 37460, 36580, 36960], [1484697600000, 37040, 37500, 36620, 36940], [1484784000000, 37720, 37920, 37020, 37480], [1484870400000, 37120, 37420, 36880, 37200], [1485129600000, 37200, 38060, 37000, 38060], [1485216000000, 38120, 38580, 37880, 38160], [1485302400000, 38340, 39400, 38320, 39400], [1485388800000, 39420, 40000, 39420, 39900], [1485820800000, 39900, 39900, 39460, 39460], [1485907200000, 39540, 39660, 39040, 39120], [1485993600000, 39600, 39660, 39200, 39360], [1486080000000, 39400, 39500, 39180, 39460], [1486339200000, 39580, 39660, 39140, 39560], [1486425600000, 39560, 39580, 38760, 38820], [1486512000000, 38740, 38780, 38200, 38400], [1486598400000, 38780, 38840, 38220, 38400], [1486684800000, 38400, 38760, 38300, 38360], [1486944000000, 37740, 38060, 37720, 37960], [1487030400000, 37960, 38260, 37320, 37580], [1487116800000, 37080, 37960, 37080, 37720], [1487203200000, 37800, 38360, 37780, 38020], [1487289600000, 37560, 38040, 37280, 37860], [1487548800000, 38220, 38780, 38160, 38660], [1487635200000, 38540, 39560, 38420, 38940], [1487721600000, 39000, 39340, 38980, 39300], [1487808000000, 39020, 39440, 39020, 39180], [1487894400000, 38960, 39100, 38060, 38220], [1488153600000, 38020, 38140, 37700, 38060], [1488240000000, 38060, 38760, 37960, 38440], [1488412800000, 38420, 39860, 38420, 39720], [1488499200000, 39340, 39720, 39160, 39620], [1488758400000, 39220, 40220, 39220, 40080], [1488844800000, 39800, 40320, 39800, 40200], [1488931200000, 40200, 40620, 40140, 40200], [1489017600000, 40200, 40300, 40020, 40200], [1489104000000, 39960, 40420, 39860, 40180], [1489363200000, 40040, 40980, 40040, 40600], [1489449600000, 40620, 41540, 40500, 41360], [1489536000000, 40800, 41440, 40800, 41400], [1489622400000, 41800, 42180, 41540, 41840], [1489708800000, 41800, 42500, 41720, 42400], [1489968000000, 42000, 42120, 41740, 41900], [1490054400000, 41780, 42680, 41760, 42560], [1490140800000, 41600, 42460, 41580, 42460], [1490227200000, 42200, 42360, 41700, 41800], [1490313600000, 41600, 41980, 41080, 41500], [1490572800000, 41200, 41880, 41180, 41200], [1490659200000, 41560, 41840, 41380, 41480], [1490745600000, 41740, 41960, 41580, 41780], [1490832000000, 41880, 42440, 41880, 41980], [1490918400000, 41820, 42020, 41200, 41200], [1491177600000, 41400, 41720, 41300, 41440], [1491264000000, 41600, 42180, 41520, 42080], [1491350400000, 41900, 42240, 41700, 42140], [1491436800000, 42000, 42080, 41600, 41840], [1491523200000, 41800, 41820, 41160, 41600], [1491782400000, 41940, 41940, 41500, 41940], [1491868800000, 41940, 41940, 41580, 41600], [1491955200000, 41860, 41940, 41700, 41900], [1492041600000, 41660, 42460, 41660, 42420], [1492128000000, 42160, 42260, 41760, 42020], [1492387200000, 42000, 42080, 41520, 41560], [1492473600000, 41680, 41820, 41280, 41500], [1492560000000, 41300, 41420, 40900, 40900], [1492646400000, 40580, 40800, 40080, 40280], [1492732800000, 40480, 41400, 40480, 40760], [1492992000000, 41260, 41260, 40920, 41240], [1493078400000, 41460, 42740, 41320, 42700], [1493164800000, 42700, 42800, 42520, 42800], [1493251200000, 42700, 44520, 41960, 43840], [1493337600000, 45780, 45800, 44520, 44620], [1493683200000, 45500, 45500, 44760, 44900], [1493856000000, 45700, 45700, 44860, 45520], [1494201600000, 45520, 47020, 45340, 47020], [1494374400000, 46160, 47220, 45600, 45600], [1494460800000, 45420, 46180, 45220, 45500], [1494547200000, 45760, 46160, 45660, 45820], [1494806400000, 45620, 46280, 45620, 46100], [1494892800000, 46660, 46800, 46100, 46380], [1494979200000, 46120, 46640, 46100, 46340], [1495065600000, 45740, 46000, 45540, 45940], [1495152000000, 45640, 45780, 44720, 44720], [1495411200000, 45040, 45380, 44760, 45100], [1495497600000, 45400, 45580, 44900, 44920], [1495584000000, 44860, 45300, 44800, 44880], [1495670400000, 45160, 45680, 44800, 45680], [1495756800000, 45600, 46460, 45540, 46080], [1496016000000, 46220, 46400, 45380, 45620], [1496102400000, 45520, 45660, 44480, 44640], [1496188800000, 44580, 45020, 44400, 44700], [1496275200000, 44860, 44900, 44400, 44680], [1496361600000, 45060, 45960, 45000, 45960], [1496620800000, 46040, 46360, 45720, 45940], [1496793600000, 46500, 46500, 45240, 45300], [1496880000000, 45000, 45580, 45000, 45160], [1496966400000, 45680, 46440, 45600, 46100], [1497225600000, 45420, 45600, 45140, 45380], [1497312000000, 45140, 45620, 45140, 45400], [1497398400000, 45800, 46060, 45240, 45360], [1497484800000, 45680, 45920, 45180, 45680], [1497571200000, 45500, 45940, 45460, 45580], [1497830400000, 45580, 46560, 45560, 46560], [1497916800000, 47240, 48140, 47220, 48140], [1498003200000, 47740, 48120, 47480, 47480], [1498089600000, 47960, 48080, 47720, 47960], [1498176000000, 47600, 47780, 47420, 47620], [1498435200000, 47520, 48360, 47520, 48280], [1498521600000, 48220, 48400, 47900, 48300], [1498608000000, 47600, 48000, 47560, 47700], [1498694400000, 48040, 48320, 47940, 47940], [1498780800000, 47500, 47620, 47100, 47540], [1499040000000, 47500, 47780, 47120, 47220], [1499126400000, 47160, 47400, 46900, 47000], [1499212800000, 46820, 47680, 46780, 47580], [1499299200000, 48000, 48100, 47720, 48060], [1499385600000, 47740, 48120, 47620, 47860], [1499644800000, 48500, 48900, 48320, 48660], [1499731200000, 48640, 49000, 48280, 49000], [1499817600000, 49000, 50000, 48840, 49880], [1499904000000, 50080, 50940, 50040, 50560], [1499990400000, 51000, 51080, 50420, 50480], [1500249600000, 50900, 51020, 50520, 50640], [1500336000000, 50420, 50880, 50360, 50840], [1500422400000, 50620, 50820, 50000, 50740], [1500508800000, 50760, 51320, 50560, 51200], [1500595200000, 50860, 51160, 50520, 51080], [1500854400000, 50700, 51000, 50620, 50860], [1500940800000, 50500, 50760, 49940, 50000], [1501027200000, 49600, 50020, 49300, 49840], [1501113600000, 50000, 50640, 49560, 49800], [1501200000000, 49800, 49800, 47380, 47760], [1501459200000, 47420, 48240, 46920, 48200], [1501545600000, 48000, 48840, 47540, 48600], [1501632000000, 49200, 49340, 48600, 49000], [1501718400000, 49000, 49000, 47120, 47780], [1501804800000, 48160, 48180, 47500, 47700], [1502064000000, 47500, 48080, 47440, 47580], [1502150400000, 47980, 48260, 47480, 47720], [1502236800000, 47400, 47400, 46240, 46280], [1502323200000, 46200, 46320, 45460, 45900], [1502409600000, 45120, 45300, 44220, 44620], [1502668800000, 45120, 45400, 44720, 45000], [1502841600000, 46220, 46380, 46000, 46200], [1502928000000, 46960, 47300, 46740, 47040], [1503014400000, 46760, 47240, 46240, 46900], [1503273600000, 47240, 47240, 46580, 46840], [1503360000000, 46820, 47160, 46700, 47000], [1503446400000, 47780, 47780, 47180, 47480], [1503532800000, 47520, 47660, 47340, 47520], [1503619200000, 47880, 47880, 46720, 47020], [1503878400000, 47020, 47240, 45960, 46100], [1503964800000, 45640, 46080, 45160, 46080], [1504051200000, 46380, 46400, 45960, 46200], [1504137600000, 46220, 46640, 46000, 46320], [1504224000000, 46460, 46640, 46300, 46480], [1504483200000, 45780, 46360, 45500, 46040], [1504569600000, 46240, 46900, 45960, 46760], [1504656000000, 46760, 47180, 46700, 47000], [1504742400000, 47000, 48220, 47000, 48120], [1504828800000, 48700, 49180, 48580, 49080], [1505088000000, 49700, 50180, 49500, 49800], [1505174400000, 50200, 50220, 49140, 49600], [1505260800000, 49820, 50400, 49440, 49620], [1505347200000, 50060, 50320, 49760, 50300], [1505433600000, 50300, 50560, 49860, 50400], [1505692800000, 50540, 52480, 50520, 52480], [1505779200000, 52500, 52640, 51780, 52120], [1505865600000, 52120, 52500, 51840, 52220], [1505952000000, 52220, 52960, 52220, 52800], [1506038400000, 52960, 53600, 52460, 53000], [1506297600000, 53000, 53680, 53000, 53620], [1506384000000, 53020, 53120, 51560, 51660], [1506470400000, 52000, 52200, 51500, 51680], [1506556800000, 52260, 52460, 51260, 51260], [1506643200000, 51180, 51620, 50840, 51280], [1507593600000, 53360, 53640, 52800, 52800], [1507680000000, 53600, 54760, 53340, 54640], [1507766400000, 54840, 55160, 54100, 54800], [1507852800000, 54540, 54840, 53780, 54000], [1508112000000, 53980, 54860, 53760, 53920], [1508198400000, 54020, 55380, 54000, 54800], [1508284800000, 54820, 55240, 54040, 54760], [1508371200000, 54700, 54700, 52980, 52980], [1508457600000, 52800, 54100, 52800, 53840], [1508716800000, 54600, 54640, 54000, 54300], [1508803200000, 54700, 54780, 54040, 54040], [1508889600000, 54040, 54420, 53700, 53900], [1508976000000, 53720, 53900, 52400, 52400], [1509062400000, 52400, 53320, 52140, 53080], [1509321600000, 53780, 54320, 53700, 54040], [1509408000000, 54060, 55440, 53500, 55080], [1509494400000, 57500, 57500, 56180, 57220], [1509580800000, 57500, 57520, 56760, 57060], [1509667200000, 57060, 57140, 55860, 56380], [1509926400000, 56380, 56500, 55340, 56380], [1510012800000, 56380, 56920, 55860, 56100], [1510099200000, 56100, 57060, 55860, 56760], [1510185600000, 56920, 56920, 55900, 56340], [1510272000000, 55800, 56540, 55780, 56400], [1510531200000, 56400, 56800, 56100, 56380], [1510617600000, 56380, 56740, 55920, 55920], [1510704000000, 55920, 56320, 55320, 55340], [1510790400000, 55440, 56000, 55400, 55780], [1510876800000, 56400, 56880, 55820, 55820], [1511136000000, 55900, 55980, 55200, 55200], [1511222400000, 55400, 55840, 55280, 55280], [1511308800000, 55980, 56200, 55620, 55960], [1511395200000, 55960, 55980, 55020, 55300], [1511481600000, 55300, 55500, 55180, 55460], [1511740800000, 55360, 55360, 52640, 52640], [1511827200000, 52700, 53280, 51720, 53280], [1511913600000, 53200, 53240, 52500, 52600], [1512000000000, 50800, 51860, 50200, 50800], [1512086400000, 50800, 51780, 50800, 50840], [1512345600000, 50840, 51340, 50020, 51340], [1512432000000, 50600, 51300, 50280, 51260], [1512518400000, 51260, 51560, 50020, 50020], [1512604800000, 50040, 50980, 50020, 50740], [1512691200000, 51360, 52000, 51040, 52000], [1512950400000, 52000, 52040, 51500, 51780], [1513036800000, 51820, 52100, 51660, 52100], [1513123200000, 52100, 52100, 51100, 51320], [1513209600000, 51320, 52280, 51060, 51060], [1513296000000, 51240, 51480, 50520, 50620], [1513555200000, 50620, 51240, 50620, 51200], [1513641600000, 51540, 52080, 51520, 51560], [1513728000000, 51500, 51760, 50820, 50880], [1513814400000, 51000, 51060, 49100, 49140], [1513900800000, 49400, 49960, 49240, 49700], [1514246400000, 49760, 50100, 48200, 48200], [1514332800000, 48960, 49560, 48460, 49360], [1514419200000, 49560, 50960, 49500, 50960], [1514851200000, 51380, 51400, 50780, 51020], [1514937600000, 52540, 52560, 51420, 51620], [1515024000000, 52120, 52180, 50640, 51080], [1515110400000, 51300, 52120, 51200, 52120], [1515369600000, 52400, 52520, 51500, 52020], [1515456000000, 51460, 51720, 49980, 50400], [1515542400000, 50500, 50520, 48640, 48840], [1515628800000, 48200, 49260, 48020, 48240], [1515715200000, 48240, 48480, 46760, 48200], [1515974400000, 48800, 48980, 47920, 48540], [1516060800000, 48760, 50140, 48620, 50000], [1516147200000, 50020, 50020, 49060, 49620], [1516233600000, 50020, 50640, 49820, 49900], [1516320000000, 50380, 50380, 49040, 49320], [1516579200000, 48640, 48680, 47960, 48240], [1516665600000, 48660, 49160, 48300, 49160], [1516752000000, 48860, 49700, 48560, 49340], [1516838400000, 49220, 50360, 49160, 50260], [1516924800000, 50500, 50780, 49840, 50780], [1517184000000, 51200, 51480, 50900, 51220], [1517270400000, 50440, 50640, 49780, 49800], [1517356800000, 50020, 54140, 49600, 49900], [1517443200000, 50620, 50960, 49720, 49820], [1517529600000, 49380, 49400, 47700, 47700], [1517788800000, 46500, 48320, 46000, 47920], [1517875200000, 46600, 47920, 46580, 47420], [1517961600000, 48240, 48260, 45800, 45800], [1518048000000, 46120, 46620, 45980, 46000], [1518134400000, 44440, 45180, 44420, 44700], [1518393600000, 45100, 46320, 45040, 45720], [1518480000000, 46200, 48060, 46200, 47540], [1518566400000, 48080, 49100, 47940, 49000], [1518998400000, 49800, 49800, 47860, 48380], [1519084800000, 48040, 48160, 47220, 47400], [1519171200000, 47280, 47580, 46840, 47280], [1519257600000, 47260, 47260, 46760, 46760], [1519344000000, 46760, 47800, 46760, 47220], [1519603200000, 47280, 47560, 47080, 47380], [1519689600000, 48360, 48380, 47380, 47380], [1519776000000, 47380, 48100, 47000, 47060], [1519948800000, 46580, 46800, 46000, 46020], [1520208000000, 45820, 46160, 45080, 45200], [1520294400000, 45920, 47100, 45820, 47020], [1520380800000, 48200, 48900, 47220, 48620], [1520467200000, 49200, 49480, 48080, 49200], [1520553600000, 49440, 50540, 49240, 49740], [1520812800000, 50560, 50780, 49580, 49740], [1520899200000, 50760, 51660, 50360, 51660], [1520985600000, 51020, 52000, 51000, 51760], [1521072000000, 52000, 52020, 51020, 51540], [1521158400000, 51220, 51420, 50240, 51140], [1521417600000, 50620, 51340, 50440, 50740], [1521504000000, 50700, 51200, 50100, 51200], [1521590400000, 51780, 51780, 51060, 51060], [1521676800000, 51060, 51780, 51040, 51780], [1521763200000, 50340, 50720, 49600, 49720], [1522022400000, 49420, 50280, 49040, 50280], [1522108800000, 50320, 50460, 49080, 49980], [1522195200000, 49100, 49100, 48340, 48700], [1522281600000, 48700, 49560, 48320, 49040], [1522368000000, 49080, 49900, 49080, 49220], [1522627200000, 49000, 49220, 48500, 48540], [1522713600000, 47880, 48140, 47280, 48120], [1522800000000, 48160, 48260, 46920, 46920], [1522886400000, 47400, 49380, 47340, 48740], [1522972800000, 48000, 48580, 47400, 48400], [1523232000000, 48260, 49440, 48200, 49200], [1523318400000, 48540, 49220, 48040, 48880], [1523404800000, 49900, 49900, 48600, 48860], [1523491200000, 49440, 49440, 48880, 49000], [1523577600000, 49600, 50180, 49400, 49800], [1523836800000, 50320, 50600, 49860, 50340], [1523923200000, 50240, 50540, 49820, 49980], [1524009600000, 51000, 51360, 50580, 51360], [1524096000000, 52000, 52980, 51540, 52780], [1524182400000, 51800, 52260, 51420, 51620], [1524441600000, 51000, 52080, 51000, 51900], [1524528000000, 51840, 51860, 50080, 50460], [1524614400000, 49220, 50500, 49220, 50400], [1524700800000, 50420, 52160, 50400, 52140], [1524787200000, 53380, 53640, 52440, 53000], [1525046400000, 53000, 53000, 53000, 53000], [1525219200000, 53000, 53000, 53000, 53000], [1525305600000, 53000, 53000, 53000, 53000], [1525392000000, 53000, 53900, 51800, 51900], [1525737600000, 52600, 53200, 51900, 52600], [1525824000000, 52600, 52800, 50900, 50900], [1525910400000, 51700, 51700, 50600, 51600], [1525996800000, 52000, 52200, 51200, 51300], [1526256000000, 51000, 51100, 49900, 50100], [1526342400000, 50200, 50400, 49100, 49200], [1526428800000, 49200, 50200, 49150, 49850], [1526515200000, 50300, 50500, 49400, 49400], [1526601600000, 49900, 49900, 49350, 49500], [1526860800000, 49650, 50200, 49100, 50000], [1527033600000, 50600, 52000, 50400, 51800], [1527120000000, 52000, 52000, 51100, 51400], [1527206400000, 51000, 52800, 50800, 52700], [1527465600000, 52500, 53000, 52000, 52300], [1527552000000, 52200, 52500, 51300, 51300], [1527638400000, 51300, 51500, 49100, 49500], [1527724800000, 50400, 50800, 49850, 50700], [1527811200000, 50500, 51700, 49950, 51300], [1528070400000, 50800, 51200, 50700, 51100], [1528156800000, 51100, 51400, 50400, 51300], [1528329600000, 51800, 51800, 50500, 50600], [1528416000000, 50200, 50400, 49600, 49650], [1528675200000, 49750, 50300, 49350, 49900], [1528761600000, 49700, 49800, 49250, 49400], [1528934400000, 49000, 49000, 48200, 48200], [1529020800000, 48500, 48700, 47650, 47650], [1529280000000, 47600, 47650, 46200, 46600], [1529366400000, 47200, 47350, 46500, 47000], [1529452800000, 47450, 47600, 46850, 47000], [1529539200000, 47900, 47900, 47050, 47050], [1529625600000, 47000, 47250, 46200, 47250], [1529884800000, 47050, 47050, 46150, 46650], [1529971200000, 45900, 47300, 45900, 47000], [1530057600000, 47450, 48500, 47000, 47950], [1530144000000, 46850, 47150, 46600, 46800], [1530230400000, 46250, 47150, 46200, 46650], [1530489600000, 46500, 47150, 45500, 45550], [1530576000000, 45750, 46450, 45750, 46150], [1530662400000, 46700, 47050, 46050, 46250], [1530748800000, 46100, 46550, 45600, 45950], [1530835200000, 45500, 45850, 44650, 44900], [1531094400000, 45500, 46100, 45200, 45600], [1531180800000, 46200, 46550, 46100, 46300], [1531267200000, 46400, 46450, 45400, 46000], [1531353600000, 45900, 46250, 45450, 45500], [1531440000000, 45800, 46500, 45750, 46500], [1531699200000, 46800, 46800, 46000, 46050], [1531785600000, 46150, 46200, 45600, 45850], [1531872000000, 46700, 47200, 46450, 46550], [1531958400000, 47050, 47200, 46600, 46900], [1532044800000, 47000, 47600, 46700, 47450], [1532304000000, 47100, 47200, 46150, 46500], [1532390400000, 46350, 46600, 45950, 46150], [1532476800000, 46250, 46550, 45900, 46150], [1532563200000, 46100, 47000, 46000, 46900], [1532649600000, 46450, 47000, 46450, 46900], [1532908800000, 46550, 46800, 46350, 46500], [1532995200000, 46200, 46450, 46000, 46250], [1533081600000, 46050, 46850, 46050, 46550], [1533168000000, 46550, 46800, 45500, 45550], [1533254400000, 45850, 45900, 45450, 45750], [1533513600000, 46150, 46150, 45750, 45800], [1533600000000, 46300, 46750, 45900, 46700], [1533686400000, 47000, 47000, 46550, 46800], [1533772800000, 47000, 47050, 46450, 46900], [1533859200000, 46150, 46400, 44850, 45400], [1534118400000, 44950, 45100, 44650, 45050], [1534204800000, 44850, 45400, 44850, 45150], [1534377600000, 43800, 44650, 43700, 44250], [1534464000000, 44050, 44400, 44050, 44100], [1534723200000, 43500, 44200, 43500, 43850], [1534809600000, 43700, 44900, 43700, 44800], [1534896000000, 45150, 46200, 44900, 46100], [1534982400000, 46150, 46200, 45700, 46200], [1535068800000, 45900, 46400, 45550, 46150], [1535328000000, 46100, 46550, 46000, 46300], [1535414400000, 46800, 46950, 46300, 46550], [1535500800000, 46750, 46800, 46400, 46800], [1535587200000, 46950, 47950, 46700, 47650], [1535673600000, 47100, 48450, 47000, 48450], [1535932800000, 48200, 48300, 47300, 47450], [1536019200000, 47550, 47800, 47200, 47650], [1536105600000, 47300, 47450, 46400, 46600], [1536192000000, 46200, 46400, 45800, 46100], [1536278400000, 44500, 45200, 44400, 44900], [1536537600000, 45450, 45550, 45000, 45500], [1536624000000, 45550, 45900, 45050, 45050], [1536710400000, 44900, 45100, 44500, 44550], [1536796800000, 44550, 44750, 44000, 44050], [1536883200000, 45000, 45850, 44900, 45850], [1537142400000, 45550, 45800, 44900, 45150], [1537228800000, 44950, 45900, 44700, 45500], [1537315200000, 46000, 46200, 45700, 46150], [1537401600000, 46850, 47600, 46400, 47250], [1537488000000, 46550, 47550, 46550, 47400], [1538006400000, 46950, 47500, 46450, 47500], [1538092800000, 47250, 47250, 46300, 46450], [1538352000000, 46450, 46800, 45800, 46350], [1538438400000, 46450, 46700, 45700, 45700], [1538611200000, 45150, 45600, 44700, 44700], [1538697600000, 44800, 45500, 44550, 44700], [1538956800000, 44200, 45200, 44200, 44950], [1539129600000, 45250, 45500, 44500, 45300], [1539216000000, 44000, 44650, 43100, 43100], [1539302400000, 43200, 44650, 43200, 44000], [1539561600000, 44050, 44050, 43350, 43800], [1539648000000, 43700, 44150, 43350, 43600], [1539734400000, 44150, 44500, 44000, 44150], [1539820800000, 43950, 44450, 43700, 44050], [1539907200000, 43900, 44150, 43450, 43900], [1540166400000, 43450, 43950, 43200, 43550], [1540252800000, 43300, 43450, 42550, 43050], [1540339200000, 43050, 43100, 42250, 42550], [1540425600000, 40600, 41550, 40550, 41000], [1540512000000, 41100, 41300, 40400, 41000], [1540771200000, 40850, 41950, 40550, 41400], [1540857600000, 41400, 43000, 41000, 42350], [1540944000000, 42900, 43350, 41700, 42400], [1541030400000, 42450, 42950, 42150, 42150], [1541116800000, 43050, 44250, 42800, 44150], [1541376000000, 43750, 43800, 42900, 43800], [1541462400000, 43750, 43800, 42950, 43750], [1541548800000, 43600, 44500, 43400, 44000], [1541635200000, 44900, 45050, 44050, 44050], [1541721600000, 44450, 44850, 43900, 44300], [1541980800000, 43850, 45250, 43700, 45200], [1542067200000, 43900, 44500, 43400, 44500], [1542153600000, 44500, 44500, 43800, 44100], [1542240000000, 44050, 44350, 43500, 44250], [1542326400000, 44600, 44750, 43700, 44000], [1542585600000, 44050, 44250, 43450, 43650], [1542672000000, 42450, 43000, 42100, 42800], [1542758400000, 41800, 42300, 41800, 42100], [1542844800000, 42000, 42650, 42000, 42450], [1542931200000, 42450, 42600, 41900, 42400], [1543190400000, 42150, 42800, 42100, 42600], [1543276800000, 42900, 43100, 42500, 43050], [1543363200000, 42800, 43200, 42750, 43150], [1543449600000, 43850, 43850, 42900, 43150], [1543536000000, 43450, 44000, 41750, 41850], [1543795200000, 42750, 43400, 42400, 43250], [1543881600000, 42650, 42900, 41900, 42150], [1543968000000, 40900, 41750, 40850, 41450], [1544054400000, 40600, 41100, 40450, 40500], [1544140800000, 40900, 41400, 40850, 40950], [1544400000000, 40450, 40650, 40000, 40200], [1544486400000, 40600, 40700, 40200, 40250], [1544572800000, 40250, 40700, 40150, 40450], [1544659200000, 40650, 40750, 40000, 40000], [1544745600000, 40200, 40200, 38700, 38950], [1545004800000, 38650, 39600, 38650, 39150], [1545091200000, 38300, 39200, 38300, 38900], [1545177600000, 38900, 39350, 38850, 39100], [1545264000000, 38600, 39100, 38500, 38650], [1545350400000, 38200, 38650, 38100, 38650], [1545609600000, 38500, 39050, 38300, 38800], [1545782400000, 38400, 38750, 38300, 38350], [1545868800000, 38700, 38800, 38100, 38250], [1545955200000, 38250, 38900, 38200, 38700], [1546387200000, 39400, 39400, 38550, 38750], [1546473600000, 38300, 38550, 37450, 37600], [1546560000000, 37450, 37600, 36850, 37450], [1546819200000, 38000, 38900, 37800, 38750], [1546905600000, 38000, 39200, 37950, 38100], [1546992000000, 38650, 39600, 38300, 39600], [1547078400000, 40000, 40150, 39600, 39800], [1547164800000, 40350, 40550, 39950, 40500], [1547424000000, 40450, 40700, 39850, 40050], [1547510400000, 40050, 41100, 39850, 41100], [1547596800000, 41150, 41450, 40700, 41450], [1547683200000, 41700, 42100, 41450, 41950], [1547769600000, 42000, 42400, 41950, 42300], [1548028800000, 42700, 42750, 41900, 42750], [1548115200000, 42750, 42850, 41850, 42150], [1548201600000, 41350, 42250, 41350, 42000], [1548288000000, 43050, 43100, 42350, 43050], [1548374400000, 44300, 44750, 43750, 44750], [1548633600000, 45000, 45500, 44600, 45050], [1548720000000, 45050, 45500, 44350, 45500], [1548806400000, 44800, 46400, 44800, 46400], [1548892800000, 46650, 47050, 46150, 46150], [1548979200000, 46650, 46950, 46250, 46350], [1549497600000, 46800, 47100, 46200, 46200], [1549584000000, 45700, 45700, 44650, 44800], [1549843200000, 44500, 45000, 44250, 45000], [1549929600000, 44650, 46250, 44650, 46050], [1550016000000, 46400, 46700, 46000, 46200], [1550102400000, 46600, 47500, 46150, 47500], [1550188800000, 46750, 46850, 45650, 46050], [1550448000000, 46500, 46850, 45850, 46200], [1550534400000, 45850, 46150, 45450, 45950], [1550620800000, 46750, 47100, 46500, 46900], [1550707200000, 46500, 47200, 46200, 46950], [1550793600000, 46500, 47150, 46450, 47150], [1551052800000, 47400, 47550, 47050, 47350], [1551139200000, 47350, 47450, 46500, 46750], [1551225600000, 47000, 47250, 46750, 46750], [1551312000000, 46400, 46500, 45100, 45100], [1551657600000, 46000, 46100, 44800, 44850], [1551744000000, 44600, 45100, 44150, 44250], [1551830400000, 44000, 44300, 43700, 44000], [1551916800000, 43400, 44950, 43400, 44450], [1552003200000, 44450, 44800, 43800, 43800], [1552262400000, 44400, 44450, 43650, 43650], [1552348800000, 44300, 44950, 44150, 44650], [1552435200000, 44250, 44450, 43700, 43850], [1552521600000, 43700, 44300, 43550, 43850], [1552608000000, 43800, 44250, 43700, 44200], [1552867200000, 43950, 44150, 43450, 43700], [1552953600000, 43750, 43900, 43550, 43900], [1553040000000, 43800, 44200, 43100, 44050], [1553126400000, 44600, 46250, 44050, 45850], [1553212800000, 46850, 47000, 46250, 46550], [1553472000000, 45300, 45650, 44800, 45500], [1553558400000, 45500, 45700, 44900, 45250], [1553644800000, 44750, 45600, 44250, 45350], [1553731200000, 44950, 45200, 44300, 44850], [1553817600000, 44500, 44900, 44200, 44650], [1554076800000, 45200, 45450, 44850, 45050], [1554163200000, 45550, 46100, 45350, 45750], [1554249600000, 46750, 46750, 45800, 46600], [1554336000000, 46150, 47100, 46150, 46950], [1554422400000, 46950, 47550, 46600, 46850], [1554681600000, 47250, 47250, 46150, 46650], [1554768000000, 46700, 46950, 46200, 46650], [1554854400000, 46400, 46700, 46050, 46700], [1554940800000, 46700, 46800, 46150, 46250], [1555027200000, 46050, 46900, 46000, 46850], [1555286400000, 47150, 47500, 47000, 47050], [1555372800000, 47400, 47400, 46800, 47250], [1555459200000, 47300, 47600, 47000, 47050], [1555545600000, 47200, 47250, 45500, 45600], [1555632000000, 45750, 46000, 45250, 45300], [1555891200000, 45400, 45900, 45100, 45350], [1555977600000, 45050, 45500, 45000, 45200], [1556064000000, 45400, 45650, 44150, 44750], [1556150400000, 44250, 45000, 44100, 44650], [1556236800000, 44200, 45000, 43800, 44850], [1556496000000, 45150, 46150, 45100, 46150], [1556582400000, 46000, 46300, 45350, 45850], [1556755200000, 45500, 46150, 45400, 45900], [1556841600000, 45900, 46050, 45300, 45300], [1557187200000, 45250, 45300, 44400, 44850], [1557273600000, 44300, 44850, 44200, 44250], [1557360000000, 43900, 44250, 42450, 42450], [1557446400000, 42600, 43450, 42450, 42900], [1557705600000, 42500, 43200, 42350, 42650], [1557792000000, 41300, 43100, 41300, 42650], [1557878400000, 42700, 43050, 42550, 42550], [1557964800000, 42350, 42400, 41350, 41550], [1558051200000, 41950, 42050, 40850, 41200], [1558310400000, 41650, 42100, 41550, 42000], [1558396800000, 42600, 43950, 42350, 43150], [1558483200000, 43700, 43800, 42400, 43500], [1558569600000, 43900, 44000, 43250, 43850], [1558656000000, 43800, 43800, 42400, 42700], [1558915200000, 42500, 43000, 42350, 42650], [1559001600000, 42550, 42950, 42150, 42550], [1559088000000, 41850, 42100, 41300, 41800], [1559174400000, 42200, 42700, 42150, 42550], [1559260800000, 42600, 42800, 42150, 42500], [1559520000000, 42950, 43900, 42500, 43800], [1559606400000, 43400, 43700, 43000, 43450], [1559692800000, 44050, 44200, 43700, 43900], [1559865600000, 43600, 44350, 43450, 44200], [1560124800000, 44300, 44850, 44050, 44800], [1560211200000, 44800, 45000, 44550, 44850], [1560297600000, 44800, 45050, 44300, 44600], [1560384000000, 44200, 44400, 43400, 43750], [1560470400000, 43750, 44150, 43300, 44000], [1560729600000, 43750, 44050, 43400, 43900], [1560816000000, 43750, 44500, 43650, 44350], [1560902400000, 45450, 45450, 45000, 45350], [1560988800000, 44850, 45500, 44850, 45500], [1561075200000, 45750, 45800, 45200, 45700], [1561334400000, 45200, 45800, 45200, 45500], [1561420800000, 45200, 45800, 45200, 45600], [1561507200000, 45800, 46000, 45600, 45700], [1561593600000, 46000, 46600, 45750, 46500], [1561680000000, 47000, 47000, 46700, 47000], [1561939200000, 47350, 47400, 46250, 46600], [1562025600000, 46200, 46900, 45850, 46250], [1562112000000, 45750, 46350, 45200, 45400], [1562198400000, 45250, 46200, 45250, 46000], [1562284800000, 45950, 45950, 45250, 45650], [1562544000000, 44750, 44800, 44350, 44400], [1562630400000, 44850, 45450, 44700, 45100], [1562716800000, 45550, 46150, 45500, 45550], [1562803200000, 46350, 46550, 46150, 46200], [1562889600000, 46350, 46400, 45800, 46300], [1563148800000, 45950, 46650, 45750, 46450], [1563235200000, 46450, 46850, 46300, 46850], [1563321600000, 46150, 46350, 45950, 46050], [1563408000000, 46450, 46450, 45650, 46100], [1563494400000, 46650, 46950, 46600, 46800], [1563753600000, 46800, 47300, 46600, 47200], [1563840000000, 47350, 47550, 47050, 47300], [1563926400000, 47100, 47150, 46250, 46400], [1564012800000, 47150, 47200, 46600, 47200], [1564099200000, 46650, 47150, 46550, 47150], [1564358400000, 46800, 47050, 46000, 46100], [1564444800000, 46300, 46850, 46300, 46550], [1564531200000, 46200, 46600, 45000, 45350], [1564617600000, 44900, 45500, 44850, 45200], [1564704000000, 44550, 45500, 44300, 44950], [1564963200000, 44350, 44600, 43600, 43950], [1565049600000, 42500, 43800, 42500, 43500], [1565136000000, 43600, 43900, 43100, 43200], [1565222400000, 43250, 43500, 42650, 42650], [1565308800000, 43250, 43350, 43050, 43150], [1565568000000, 44000, 44000, 43550, 43700], [1565654400000, 43500, 43500, 42950, 43000], [1565740800000, 43900, 44250, 43500, 43700], [1565913600000, 43800, 43900, 43300, 43900], [1566172800000, 44350, 44350, 43500, 43600], [1566259200000, 43950, 44600, 43550, 44450], [1566345600000, 44350, 44800, 44150, 44500], [1566432000000, 44500, 44700, 43850, 44050], [1566518400000, 43800, 44200, 43650, 43950], [1566777600000, 43050, 43800, 42950, 43600], [1566864000000, 43650, 44200, 43600, 44050], [1566950400000, 44100, 44400, 43750, 44150], [1567036800000, 44200, 44200, 43050, 43400], [1567123200000, 43750, 44300, 43750, 44000], [1567382400000, 44850, 44850, 43650, 43800], [1567468800000, 43550, 43650, 43100, 43250], [1567555200000, 43250, 44100, 43150, 44100], [1567641600000, 44800, 46100, 44450, 45700], [1567728000000, 46500, 46500, 45850, 46300], [1567987200000, 46450, 47000, 46300, 46900], [1568073600000, 47100, 47200, 46550, 47000], [1568160000000, 47300, 47400, 46800, 47150], [1568592000000, 47000, 47100, 46400, 47100], [1568678400000, 47000, 47100, 46800, 46900], [1568764800000, 46900, 47700, 46800, 47700], [1568851200000, 48050, 49200, 47850, 49150], [1568937600000, 49400, 49600, 49100, 49200], [1569196800000, 49250, 49300, 49000, 49300], [1569283200000, 49050, 49650, 48850, 49500], [1569369600000, 49200, 49350, 48800, 48900], [1569456000000, 49000, 49250, 48900, 49200], [1569542400000, 48000, 48700, 48000, 48400], [1569801600000, 48050, 49250, 47900, 49050], [1569888000000, 48900, 49100, 48650, 48850], [1569974400000, 48350, 48400, 47600, 47600], [1570147200000, 47400, 48650, 47350, 48000], [1570406400000, 48350, 48700, 47650, 47750], [1570492800000, 47900, 49000, 47600, 48900], [1570665600000, 48200, 49200, 48000, 48550], [1570752000000, 49000, 49450, 48800, 49150], [1571011200000, 50000, 50300, 49850, 50000], [1571097600000, 49900, 50200, 49900, 50100], [1571184000000, 50700, 50900, 50400, 50700], [1571270400000, 50500, 50600, 50100, 50500], [1571356800000, 50300, 50900, 49650, 49900], [1571616000000, 49900, 50400, 49800, 50300], [1571702400000, 50800, 51500, 50700, 51200], [1571788800000, 51300, 51500, 50800, 51200], [1571875200000, 52500, 52500, 50500, 50700], [1571961600000, 50800, 51200, 50500, 50900], [1572220800000, 50700, 51500, 50700, 51300], [1572307200000, 51400, 51700, 50800, 51100], [1572393600000, 50700, 50800, 50200, 50400], [1572480000000, 51000, 51400, 50300, 50400], [1572566400000, 50600, 51200, 50400, 51200], [1572825600000, 51700, 52300, 51400, 52300], [1572912000000, 52400, 52700, 52100, 52700], [1572998400000, 52900, 53500, 52700, 53300], [1573084800000, 53400, 53400, 52400, 52900], [1573171200000, 53200, 53300, 52000, 52100], [1573430400000, 52200, 52200, 51400, 51600], [1573516800000, 51800, 52600, 51600, 52600], [1573603200000, 52500, 52500, 52000, 52500], [1573689600000, 51900, 52800, 51900, 52800], [1573776000000, 52900, 53700, 52600, 53700], [1574035200000, 53600, 53800, 53200, 53500], [1574121600000, 53200, 53500, 52700, 53500], [1574208000000, 53400, 53400, 52000, 52000], [1574294400000, 51600, 52100, 50600, 51000], [1574380800000, 51000, 51600, 50900, 51600], [1574640000000, 52200, 52600, 51700, 51800], [1574726400000, 51900, 52900, 51800, 51800], [1574812800000, 51800, 52300, 51600, 52200], [1574899200000, 51900, 52100, 51300, 51300], [1574985600000, 51200, 51400, 50200, 50300], [1575244800000, 50900, 51300, 50400, 50400], [1575331200000, 49800, 50300, 49500, 49900], [1575417600000, 49600, 49850, 49000, 49450], [1575504000000, 50200, 50400, 49500, 49500], [1575590400000, 50100, 50900, 49950, 50400], [1575849600000, 50900, 51400, 50700, 51200], [1575936000000, 51000, 51600, 50700, 51500], [1576022400000, 51500, 52200, 51400, 51900], [1576108800000, 53000, 53300, 52700, 53300], [1576195200000, 54500, 54800, 53900, 54700], [1576454400000, 54500, 54900, 54300, 54700], [1576540800000, 55800, 56700, 55400, 56700], [1576627200000, 56700, 57200, 56000, 56300], [1576713600000, 57000, 57300, 55500, 56000], [1576800000000, 56100, 56500, 55600, 56000], [1577059200000, 56100, 56400, 55100, 55500], [1577145600000, 55600, 55700, 54800, 55000], [1577318400000, 54700, 55400, 54400, 55400], [1577404800000, 55700, 56900, 55500, 56500], [1577664000000, 56200, 56600, 55700, 55800], [1577923200000, 55500, 56000, 55000, 55200], [1578009600000, 56000, 56600, 54900, 55500], [1578268800000, 54900, 55600, 54600, 55500], [1578355200000, 55700, 56400, 55600, 55800], [1578441600000, 56200, 57400, 55900, 56800], [1578528000000, 58400, 58600, 57400, 58600], [1578614400000, 58800, 59700, 58300, 59500], [1578873600000, 59600, 60000, 59100, 60000], [1578960000000, 60400, 61000, 59900, 60000], [1579046400000, 59500, 59600, 58900, 59000], [1579132800000, 59100, 60700, 59000, 60700], [1579219200000, 61900, 62000, 61000, 61300], [1579478400000, 62000, 62800, 61700, 62400], [1579564800000, 62000, 62400, 61200, 61400], [1579651200000, 60500, 62600, 60400, 62300], [1579737600000, 61800, 61800, 60700, 60800], [1580169600000, 59400, 59400, 58300, 58800], [1580256000000, 59100, 59700, 58800, 59100], [1580342400000, 58800, 58800, 56800, 57200], [1580428800000, 57800, 58400, 56400, 56400], [1580688000000, 55500, 57400, 55200, 57200], [1580774400000, 57100, 59000, 56800, 58900], [1580860800000, 60000, 60200, 58900, 59500], [1580947200000, 60100, 61100, 59700, 61100], [1581033600000, 61100, 61200, 59700, 60400], [1581292800000, 59200, 59800, 59100, 59700], [1581379200000, 59800, 60700, 59700, 59900], [1581465600000, 60300, 60700, 59700, 60500], [1581552000000, 61200, 61600, 60500, 60700], [1581638400000, 60900, 61900, 60200, 61800], [1581897600000, 61600, 62000, 61200, 61500], [1581984000000, 60800, 60900, 59700, 59800], [1582070400000, 59800, 60400, 59400, 60200], [1582156800000, 60700, 61300, 59600, 60000], [1582243200000, 58800, 59800, 58500, 59200], [1582502400000, 57400, 58100, 56800, 56800], [1582588800000, 56200, 58000, 56200, 57900], [1582675200000, 56000, 57000, 56000, 56500], [1582761600000, 56300, 56900, 55500, 55900], [1582848000000, 55000, 55500, 54200, 54200], [1583107200000, 54300, 55500, 53600, 55000], [1583193600000, 56700, 56900, 55100, 55400], [1583280000000, 54800, 57600, 54600, 57400], [1583366400000, 57600, 58000, 56700, 57800], [1583452800000, 56500, 57200, 56200, 56500], [1583712000000, 54700, 55000, 53600, 54200], [1583798400000, 53800, 54900, 53700, 54600], [1583884800000, 54300, 54400, 52000, 52100], [1583971200000, 51000, 51900, 49300, 50800], [1584057600000, 47450, 51600, 46850, 49950], [1584316800000, 50100, 50900, 48800, 48900], [1584403200000, 46900, 49650, 46700, 47300], [1584489600000, 47750, 48350, 45600, 45600], [1584576000000, 46400, 46650, 42300, 42950], [1584662400000, 44150, 45500, 43550, 45400], [1584921600000, 42600, 43550, 42400, 42500], [1585008000000, 43850, 46950, 43050, 46950], [1585094400000, 48950, 49600, 47150, 48650], [1585180800000, 49000, 49300, 47700, 47800], [1585267200000, 49600, 49700, 46850, 48300], [1585526400000, 47050, 48350, 46550, 47850], [1585612800000, 48000, 48500, 47150, 47750], [1585699200000, 47450, 47900, 45800, 45800], [1585785600000, 46200, 46850, 45350, 46800], [1585872000000, 47400, 47600, 46550, 47000], [1586131200000, 47500, 48800, 47250, 48700], [1586217600000, 49650, 50200, 49000, 49600], [1586304000000, 49600, 49750, 48600, 48600], [1586390400000, 49750, 49800, 48700, 49100], [1586476800000, 48950, 49250, 48650, 49250], [1586736000000, 48650, 48900, 48300, 48300], [1586822400000, 48800, 49200, 48300, 49000], [1586995200000, 49350, 49350, 48550, 49000], [1587081600000, 50800, 52000, 50300, 51400], [1587340800000, 51400, 51400, 50000, 50100], [1587427200000, 49400, 49700, 48700, 49250], [1587513600000, 48700, 50000, 48350, 49850], [1587600000000, 50200, 50300, 49500, 49850], [1587686400000, 49650, 49750, 49000, 49350], [1587945600000, 49350, 50000, 49100, 49850], [1588032000000, 49850, 50100, 49300, 50100], [1588118400000, 49900, 50500, 49600, 50000], [1588550400000, 48900, 49100, 48500, 48500], [1588723200000, 49000, 49200, 48500, 49200], [1588809600000, 49200, 49300, 48700, 48800], [1588896000000, 49100, 49350, 48800, 48800], [1589155200000, 48900, 49250, 48300, 48400], [1589241600000, 48400, 48500, 47550, 47900], [1589328000000, 47250, 48550, 47200, 48550], [1589414400000, 47750, 48100, 47650, 48000], [1589500800000, 48400, 48450, 47700, 47850], [1589760000000, 47950, 49100, 47600, 48800], [1589846400000, 50100, 50500, 49700, 50300], [1589932800000, 50000, 50200, 49800, 50000], [1590019200000, 50300, 50400, 49850, 49950], [1590105600000, 49600, 49800, 48600, 48750], [1590364800000, 48750, 48900, 48450, 48850], [1590451200000, 48700, 49450, 48600, 49250], [1590537600000, 48950, 50000, 48800, 49900], [1590624000000, 51100, 51200, 49900, 50400], [1590710400000, 50000, 50700, 49700, 50700], [1590969600000, 50800, 51200, 50600, 51200], [1591056000000, 51000, 51500, 50800, 51400], [1591142400000, 51800, 55000, 51700, 54500], [1591228800000, 55800, 57000, 54600, 54600], [1591315200000, 54400, 55900, 54000, 55500], [1591574400000, 56400, 56500, 54700, 54900], [1591660800000, 55800, 56500, 54400, 55500], [1591747200000, 55100, 55900, 54900, 55400], [1591833600000, 54500, 55100, 53200, 54300], [1591920000000, 52100, 52800, 51500, 52300], [1592179200000, 51400, 52000, 49900, 49900], [1592265600000, 51200, 52100, 50600, 52100], [1592352000000, 52100, 52900, 51300, 52200], [1592438400000, 52200, 52300, 51600, 52300], [1592524800000, 52600, 52900, 51600, 52900], [1592784000000, 52000, 52600, 51800, 52000], [1592870400000, 52500, 52800, 51100, 51400], [1592956800000, 51900, 53900, 51600, 52900], [1593043200000, 52100, 53000, 51900, 51900], [1593129600000, 52800, 53900, 52200, 53300], [1593388800000, 52500, 53200, 52000, 52400], [1593475200000, 53900, 53900, 52800, 52800], [1593561600000, 53400, 53600, 52400, 52600], [1593648000000, 52100, 52900, 52100, 52900], [1593734400000, 53000, 53600, 52700, 53600], [1593993600000, 54000, 55000, 53800, 55000], [1594080000000, 55800, 55900, 53400, 53400], [1594166400000, 53600, 53900, 52900, 53000], [1594252800000, 53200, 53600, 52800, 52800], [1594339200000, 53100, 53200, 52300, 52700], [1594598400000, 53300, 53800, 53100, 53400], [1594684800000, 53700, 53800, 53200, 53800], [1594771200000, 54400, 55000, 54300, 54700], [1594857600000, 54800, 54800, 53800, 53800], [1594944000000, 54200, 54700, 54100, 54400], [1595203200000, 54800, 54800, 54000, 54200], [1595289600000, 55200, 55400, 54800, 55300], [1595376000000, 55300, 55500, 54700, 54700], [1595462400000, 54700, 54700, 53800, 54100], [1595548800000, 54000, 54400, 53700, 54200], [1595808000000, 54300, 55700, 54300, 55600], [1595894400000, 57000, 58800, 56400, 58600], [1595980800000, 60300, 60400, 58600, 59000], [1596067200000, 59700, 60100, 59000, 59000], [1596153600000, 59500, 59600, 57700, 57900], [1596412800000, 57800, 57900, 56700, 56800], [1596499200000, 57200, 58100, 57000, 57300], [1596585600000, 57300, 57500, 56300, 56900], [1596672000000, 57100, 58400, 57100, 58000], [1596758400000, 57900, 58400, 57100, 57500], [1597017600000, 57600, 58300, 57500, 57800], [1597104000000, 58000, 59500, 57800, 58200], [1597190400000, 58200, 59000, 57700, 59000], [1597276800000, 59400, 59600, 58000, 58700], [1597363200000, 58000, 58400, 57700, 58000], [1597708800000, 58900, 59900, 58000, 58400], [1597795200000, 59000, 59200, 57800, 57800], [1597881600000, 57600, 57600, 55300, 55400], [1597968000000, 56200, 56900, 55800, 55900], [1598227200000, 55800, 56600, 55400, 56100], [1598313600000, 56400, 56800, 56100, 56400], [1598400000000, 56400, 56500, 55700, 56400], [1598486400000, 56300, 56300, 55600, 55600], [1598572800000, 56100, 56300, 55400, 55400], [1598832000000, 56000, 56100, 54000, 54000], [1598918400000, 54100, 54800, 54100, 54200], [1599004800000, 54600, 55100, 54100, 54400], [1599091200000, 55600, 56700, 55500, 56400], [1599177600000, 55200, 55800, 55100, 55600], [1599436800000, 56100, 57300, 55800, 56500], [1599523200000, 57400, 58700, 57200, 58700], [1599609600000, 58200, 59300, 57800, 58400], [1599696000000, 59900, 60000, 59100, 59200], [1599782400000, 59300, 59400, 58200, 59000], [1600041600000, 60200, 60800, 59900, 60400], [1600128000000, 60900, 61000, 60500, 61000], [1600214400000, 61100, 61300, 60600, 61000], [1600300800000, 60700, 60800, 59300, 59500], [1600387200000, 59800, 59900, 59100, 59300], [1600646400000, 59100, 60000, 59000, 59200], [1600732800000, 59100, 59700, 57800, 58200], [1600819200000, 58400, 58800, 57400, 58600], [1600905600000, 57700, 58600, 57600, 57800], [1600992000000, 57700, 58200, 57700, 57900], [1601251200000, 58300, 58800, 57900, 58200], [1601337600000, 58300, 59000, 58200, 58200], [1601856000000, 57500, 59200, 57500, 58700], [1601942400000, 59400, 59900, 58700, 59000], [1602028800000, 58700, 59900, 58500, 59900], [1602115200000, 60500, 60700, 59500, 59700], [1602460800000, 60000, 60400, 59900, 60400], [1602547200000, 61000, 61400, 60400, 60900], [1602633600000, 61000, 61100, 60500, 60900], [1602720000000, 60700, 60800, 59700, 60000], [1602806400000, 60000, 60400, 59000, 59500], [1603065600000, 59600, 60200, 59500, 60000], [1603152000000, 60300, 60900, 60100, 60900], [1603238400000, 61200, 61500, 60600, 60900], [1603324800000, 60300, 60500, 59800, 60100], [1603411200000, 60400, 60400, 59800, 60200], [1603670400000, 60400, 61100, 60100, 60400], [1603756800000, 60300, 60300, 59500, 59800], [1603843200000, 59400, 59400, 58800, 59000], [1603929600000, 58200, 58500, 57500, 58100], [1604016000000, 58000, 58000, 56600, 56600], [1604275200000, 56400, 57500, 56000, 57400], [1604361600000, 57900, 58900, 57600, 58800], [1604448000000, 58900, 59000, 57800, 58500], [1604534400000, 59000, 60300, 58800, 60300], [1604620800000, 60700, 60800, 59600, 60100], [1604880000000, 60700, 60900, 60100, 60200], [1604966400000, 60500, 60500, 59500, 60200], [1605052800000, 60700, 61400, 60400, 61300], [1605139200000, 61000, 61400, 60700, 61000], [1605225600000, 61300, 63200, 61000, 63200], [1605484800000, 64000, 66700, 63900, 66300], [1605571200000, 67000, 67000, 65600, 65700], [1605657600000, 65700, 66200, 64700, 64800], [1605744000000, 64100, 64800, 63900, 64600], [1605830400000, 63900, 65200, 63900, 64700], [1606089600000, 64800, 67800, 64700, 67500], [1606176000000, 67900, 69500, 67000, 67700], [1606262400000, 67900, 68300, 66500, 66600], [1606348800000, 66100, 68000, 66000, 68000], [1606435200000, 68000, 68400, 67600, 68200], [1606694400000, 68400, 68600, 66700, 66700], [1606780800000, 67100, 68300, 67100, 67800], [1606867200000, 68400, 69900, 68300, 69500], [1606953600000, 70100, 70500, 69300, 69700], [1607040000000, 70400, 72100, 70100, 71500], [1607299200000, 72400, 73500, 71900, 72900], [1607385600000, 72200, 72900, 71600, 71700], [1607472000000, 72100, 73900, 72000, 73900], [1607558400000, 72700, 73800, 72500, 72900], [1607644800000, 73500, 73800, 73100, 73400], [1607904000000, 73600, 74500, 73200, 73800], [1607990400000, 73800, 74100, 73300, 73800], [1608076800000, 74100, 74500, 73400, 73800], [1608163200000, 73400, 73700, 72600, 73300], [1608249600000, 73300, 73700, 73000, 73000], [1608508800000, 73100, 73400, 72000, 73000], [1608595200000, 72500, 73200, 72100, 72300], [1608681600000, 72400, 74000, 72300, 73900], [1608768000000, 74100, 78800, 74000, 77800], [1609113600000, 79000, 80100, 78200, 78700], [1609200000000, 78800, 78900, 77300, 78300], [1609286400000, 77400, 81300, 77300, 81000], [1609718400000, 81000, 84400, 80200, 83000], [1609804800000, 81600, 83900, 81600, 83900], [1609891200000, 83300, 84500, 82100, 82200], [1609977600000, 82800, 84200, 82700, 82900], [1610064000000, 83300, 90000, 83000, 88800], [1610323200000, 90000, 96800, 89500, 91000], [1610409600000, 90300, 91400, 87800, 90600], [1610496000000, 89800, 91200, 89100, 89700], [1610582400000, 88700, 90000, 88700, 89700], [1610668800000, 89800, 91800, 88000, 88000], [1610928000000, 86600, 87300, 84100, 85000], [1611014400000, 84500, 88000, 83600, 87000], [1611100800000, 89000, 89000, 86500, 87200], [1611187200000, 87500, 88600, 86500, 88100], [1611273600000, 89000, 89700, 86800, 86800], [1611532800000, 87000, 89900, 86300, 89400], [1611619200000, 88800, 89200, 86500, 86700], [1611705600000, 86600, 87700, 85600, 85600], [1611792000000, 83200, 85600, 83200, 83700], [1611878400000, 84500, 85000, 82000, 82000], [1612137600000, 81700, 83400, 81000, 83000], [1612224000000, 84100, 86400, 83700, 84400], [1612310400000, 84800, 85400, 83400, 84600], [1612396800000, 83500, 83800, 82100, 82500], [1612483200000, 83100, 84000, 82500, 83500], [1612742400000, 83800, 84200, 83000, 83000], [1612828800000, 84000, 84800, 82700, 82700], [1612915200000, 82600, 82600, 81600, 81600], [1613347200000, 83800, 84500, 83300, 84200], [1613433600000, 84500, 86000, 84200, 84900], [1613520000000, 83900, 84200, 83000, 83200], [1613606400000, 83200, 83600, 82100, 82100], [1613692800000, 82300, 82800, 81000, 82600], [1613952000000, 83800, 84200, 82200, 82200], [1614038400000, 81200, 82900, 81100, 82000], [1614124800000, 81800, 83600, 81300, 82000], [1614211200000, 84000, 85400, 83000, 85300], [1614297600000, 82800, 83400, 82000, 82500], [1614643200000, 85100, 85300, 83000, 83600], [1614729600000, 83500, 84000, 82800, 84000], [1614816000000, 82600, 83200, 82200, 82400], [1614902400000, 81100, 82600, 81100, 82100], [1615161600000, 82900, 83000, 81600, 82000], [1615248000000, 81400, 81900, 80600, 81400], [1615334400000, 82400, 82500, 80700, 80900], [1615420800000, 81000, 82500, 81000, 82000], [1615507200000, 83100, 83500, 82400, 82800], [1615766400000, 82800, 82900, 81800, 81800], [1615852800000, 82200, 83000, 82100, 82800], [1615939200000, 82800, 82900, 82000, 82300], [1616025600000, 82800, 83800, 82600, 82900], [1616112000000, 82100, 82500, 81800, 81900], [1616371200000, 82000, 82300, 81700, 82000], [1616457600000, 82600, 82900, 81800, 81800], [1616544000000, 81000, 81600, 80700, 81000], [1616630400000, 81000, 82100, 80800, 81200], [1616716800000, 81400, 81600, 81000, 81500], [1616976000000, 81700, 81700, 81000, 81600], [1617062400000, 81600, 82300, 81300, 82200], [1617148800000, 82400, 82700, 81400, 81400], [1617235200000, 82500, 83000, 82000, 82900], [1617321600000, 84000, 85200, 83900, 84800], [1617580800000, 85800, 86000, 84800, 85400], [1617667200000, 86200, 86200, 85100, 86000], [1617753600000, 86100, 86200, 85400, 85600], [1617840000000, 85700, 85700, 84100, 84700], [1617926400000, 84700, 84900, 83400, 83600], [1618185600000, 84100, 84100, 83100, 83200], [1618272000000, 83000, 84500, 82800, 84000], [1618358400000, 84000, 84300, 83400, 84000], [1618444800000, 83700, 84500, 83400, 84100], [1618531200000, 84700, 84700, 83600, 83900], [1618790400000, 83800, 84000, 83300, 83300], [1618876800000, 83300, 84000, 83100, 83900], [1618963200000, 83300, 83500, 82500, 82600], [1619049600000, 82900, 83000, 82400, 82400], [1619136000000, 81900, 82900, 81600, 82800], [1619395200000, 82900, 83500, 82600, 83500], [1619481600000, 83200, 83300, 82500, 82900], [1619568000000, 83200, 83200, 82100, 82100], [1619654400000, 82400, 82500, 81500, 81700], [1619740800000, 81900, 82100, 81500, 81500], [1620000000000, 81000, 82400, 81000, 81700], [1620086400000, 81900, 82600, 81800, 82600], [1620259200000, 81700, 82300, 81700, 82300], [1620345600000, 81800, 82100, 81500, 81900], [1620604800000, 82300, 83500, 81800, 83200], [1620691200000, 82500, 82600, 81100, 81200], [1620777600000, 80800, 81200, 79800, 80000], [1620864000000, 78900, 79600, 78400, 78500], [1620950400000, 79000, 80300, 78900, 80100], [1621209600000, 80800, 80900, 79200, 79600], [1621296000000, 79600, 80000, 79100, 79600], [1621468800000, 79400, 79700, 79100, 79500], [1621555200000, 80100, 81500, 79800, 80100], [1621814400000, 80100, 80400, 79500, 79700], [1621900800000, 80000, 80400, 79800, 79900], [1621987200000, 80400, 80500, 79700, 79800], [1622073600000, 80000, 80000, 79100, 79600], [1622160000000, 79800, 80400, 79400, 80100], [1622419200000, 80300, 80600, 79600, 80500], [1622505600000, 80500, 81300, 80100, 80600], [1622592000000, 80400, 81400, 80300, 80800], [1622678400000, 81300, 83000, 81100, 82800], [1622764800000, 82700, 82700, 81500, 82200], [1623024000000, 82700, 82800, 81600, 81900], [1623110400000, 82300, 82600, 81800, 81900], [1623196800000, 81500, 82000, 81100, 81100], [1623283200000, 81300, 81400, 80900, 81000], [1623369600000, 81200, 81700, 80700, 81000], [1623628800000, 80800, 80900, 80500, 80500], [1623715200000, 80900, 81200, 80600, 80900], [1623801600000, 81500, 81900, 81100, 81800], [1623888000000, 81100, 81300, 80700, 80900], [1623974400000, 81100, 81100, 80500, 80500], [1624233600000, 79700, 80000, 79600, 79900], [1624320000000, 80200, 80300, 79900, 80000], [1624406400000, 80500, 80600, 79900, 80100], [1624492800000, 80400, 81400, 80100, 81200], [1624579200000, 81500, 81900, 81200, 81600], [1624838400000, 81700, 82000, 81600, 81900], [1624924800000, 81900, 82100, 80800, 81000], [1625011200000, 81100, 81400, 80700, 80700], [1625097600000, 80500, 80600, 80000, 80100], [1625184000000, 80000, 80400, 79900, 80000], [1625443200000, 80100, 80800, 80000, 80400], [1625529600000, 80600, 81200, 80500, 81200], [1625616000000, 81200, 81300, 80300, 80800], [1625702400000, 81100, 81200, 79900, 79900], [1625788800000, 79600, 79800, 79000, 79400], [1626048000000, 79900, 80000, 79500, 79700], [1626134400000, 80000, 80200, 79800, 79800], [1626220800000, 79400, 79600, 79100, 79500], [1626307200000, 79800, 80600, 79500, 80600], [1626393600000, 80100, 80100, 79500, 79800], [1626652800000, 79100, 79200, 78800, 79000], [1626739200000, 78500, 79000, 78400, 79000], [1626825600000, 79000, 79100, 78500, 78500], [1626912000000, 79000, 79800, 78900, 79700], [1626998400000, 79700, 79900, 79200, 79300], [1627257600000, 79400, 79500, 78800, 78800], [1627344000000, 79200, 79400, 78500, 78500], [1627430400000, 78300, 79200, 78100, 79200], [1627516800000, 78800, 79400, 78800, 79000], [1627603200000, 78900, 78900, 78500, 78500], [1627862400000, 79200, 79500, 78700, 79300], [1627948800000, 79400, 81400, 79300, 81400], [1628035200000, 82200, 83100, 81800, 82900], [1628121600000, 83300, 83300, 82000, 82100], [1628208000000, 81900, 82500, 81300, 81500], [1628467200000, 81500, 82300, 80900, 81500], [1628553600000, 82300, 82400, 80100, 80200], [1628640000000, 79600, 79800, 78500, 78500], [1628726400000, 77100, 78200, 76900, 77000], [1628812800000, 75800, 76000, 74100, 74400], [1629158400000, 74000, 75100, 74000, 74200], [1629244800000, 73900, 74600, 73100, 73900], [1629331200000, 73500, 74400, 73100, 73100], [1629417600000, 73500, 73900, 72500, 72700], [1629676800000, 73300, 74000, 73000, 73300], [1629763200000, 73900, 75700, 73900, 75600], [1629849600000, 76200, 76600, 74900, 75700], [1629936000000, 76100, 76200, 74600, 74600], [1630022400000, 74300, 75000, 73800, 74300], [1630281600000, 75400, 75500, 74200, 74600], [1630368000000, 74900, 76700, 74300, 76700], [1630454400000, 76700, 77100, 75900, 76800], [1630540800000, 76800, 76800, 75700, 76000], [1630627200000, 76400, 76700, 76000, 76600], [1630886400000, 76800, 77600, 76600, 77300], [1630972800000, 77100, 77100, 75900, 76100], [1631059200000, 76000, 76400, 75600, 76300], [1631145600000, 76400, 76600, 75000, 75300], [1631232000000, 75300, 75600, 74800, 75300], [1631491200000, 75200, 76300, 75100, 76300], [1631577600000, 77100, 77700, 76600, 76600], [1631664000000, 77400, 77400, 76400, 77000], [1631750400000, 77300, 77400, 76100, 76100], [1631836800000, 76300, 77200, 75900, 77200], [1632355200000, 77500, 77600, 76800, 77400], [1632441600000, 77600, 77700, 77100, 77300], [1632700800000, 77300, 77700, 77000, 77700], [1632787200000, 77700, 77800, 76200, 76300], [1632873600000, 74800, 75300, 73800, 74100], [1632960000000, 74300, 74800, 73700, 74100], [1633046400000, 73900, 74000, 72900, 73200], [1633392000000, 73000, 73000, 71400, 72200], [1633478400000, 72600, 72800, 71200, 71300], [1633564800000, 71600, 72100, 71300, 71600], [1633651200000, 72300, 72400, 71500, 71500], [1633996800000, 70700, 70900, 68700, 69000], [1634083200000, 68700, 69600, 68300, 68800], [1634169600000, 69000, 69800, 68800, 69400], [1634256000000, 70200, 71000, 70000, 70100], [1634515200000, 70200, 70300, 69200, 70200], [1634601600000, 70800, 71000, 70400, 70600], [1634688000000, 70700, 71000, 70200, 70300], [1634774400000, 70300, 70600, 70000, 70200], [1634860800000, 70000, 70700, 70000, 70400], [1635120000000, 69900, 70600, 69500, 70200], [1635206400000, 70600, 71500, 70400, 71100], [1635292800000, 71000, 71000, 70000, 70100], [1635379200000, 69500, 72200, 69500, 70700], [1635465600000, 71200, 71600, 69700, 69800], [1635724800000, 70200, 70600, 69900, 69900], [1635811200000, 70800, 72200, 70700, 71500], [1635897600000, 71700, 71700, 70100, 70400], [1635984000000, 71200, 71600, 70500, 70600], [1636070400000, 71600, 71600, 70200, 70200], [1636329600000, 70400, 70600, 69800, 70600], [1636416000000, 70300, 71000, 70100, 70500], [1636502400000, 70300, 70900, 70200, 70200], [1636588800000, 69900, 70000, 69600, 69900], [1636675200000, 70200, 70900, 69900, 70600], [1636934400000, 71700, 71900, 70900, 71400], [1637020800000, 71500, 72000, 71300, 71300], [1637107200000, 71300, 71600, 70600, 70700], [1637193600000, 70700, 71000, 70200, 70200], [1637280000000, 70400, 71400, 70100, 71200], [1637539200000, 73300, 75200, 73000, 74900], [1637625600000, 76000, 76000, 74500, 75300], [1637712000000, 76000, 76200, 74100, 74800], [1637798400000, 75100, 75100, 73600, 73700], [1637884800000, 73500, 74100, 72000, 72300], [1638144000000, 71700, 73000, 71400, 72300], [1638230400000, 73200, 73900, 70500, 71300], [1638316800000, 72000, 74800, 71600, 74400], [1638403200000, 73900, 75800, 73800, 75800], [1638489600000, 75600, 76000, 74100, 75600], [1638748800000, 75100, 76700, 74900, 76300], [1638835200000, 76100, 77700, 75600, 77400], [1638921600000, 78300, 78600, 77100, 77400], [1639008000000, 77400, 78200, 77000, 78200], [1639094400000, 77400, 77600, 76800, 76900], [1639353600000, 77200, 78300, 76500, 76800], [1639440000000, 76500, 77200, 76200, 77000], [1639526400000, 76400, 77600, 76300, 77600], [1639612800000, 78500, 78500, 77400, 77800], [1639699200000, 76800, 78000, 76800, 78000], [1639958400000, 77600, 77800, 76800, 77100], [1640044800000, 77900, 78300, 77500, 78100], [1640131200000, 78900, 79400, 78800, 79400], [1640217600000, 79800, 80000, 79300, 79900], [1640304000000, 80200, 80800, 80200, 80500], [1640563200000, 80600, 80600, 79800, 80200], [1640649600000, 80200, 80400, 79700, 80300], [1640736000000, 80200, 80200, 78500, 78800], [1640822400000, 78900, 79500, 78100, 78300], [1641168000000, 79400, 79800, 78200, 78600], [1641254400000, 78800, 79200, 78300, 78700], [1641340800000, 78800, 79000, 76400, 77400], [1641427200000, 76700, 77600, 76600, 76900], [1641513600000, 78100, 78400, 77400, 78300], [1641772800000, 78100, 78100, 77100, 78000], [1641859200000, 78400, 79000, 78000, 78900], [1641945600000, 79500, 79600, 78600, 78900], [1642032000000, 79300, 79300, 77900, 77900], [1642118400000, 77700, 78100, 77100, 77300], [1642377600000, 77600, 77800, 76900, 77500], [1642464000000, 77600, 77800, 76600, 77000], [1642550400000, 76500, 76900, 76100, 76300], [1642636800000, 76200, 76700, 75900, 76500], [1642723200000, 75800, 75800, 74700, 75600], [1642982400000, 75400, 75800, 74700, 75100], [1643068800000, 74800, 75000, 73200, 74000], [1643155200000, 73900, 74400, 73100, 73300], [1643241600000, 73800, 74000, 71300, 71300], [1643328000000, 71300, 73700, 71200, 73300], [1643846400000, 74900, 74900, 73300, 73300], [1643932800000, 74300, 74600, 73400, 74000], [1644192000000, 73500, 73600, 72400, 73000], [1644278400000, 73800, 74200, 73000, 73500], [1644364800000, 74300, 74700, 74000, 74700], [1644451200000, 75600, 75800, 74700, 75400], [1644537600000, 75000, 75500, 74600, 74900], [1644796800000, 74400, 74500, 73100, 73700], [1644883200000, 74100, 74200, 73100, 73700], [1644969600000, 74600, 74900, 74200, 74800], [1645056000000, 75000, 75600, 74500, 75000], [1645142400000, 74600, 74800, 73700, 74300], [1645401600000, 73200, 74300, 72600, 74200], [1645488000000, 73000, 73400, 72800, 73400], [1645574400000, 73800, 73800, 72800, 73000], [1645660800000, 72300, 72300, 71300, 71500], [1645747200000, 72100, 72600, 71900, 71900], [1646006400000, 71100, 72100, 71000, 72100], [1646179200000, 72300, 72400, 71500, 71700], [1646265600000, 72300, 73100, 72200, 72900], [1646352000000, 72700, 72700, 71200, 71500], [1646611200000, 70000, 70600, 69900, 70100], [1646697600000, 68800, 70000, 68700, 69500], [1646870400000, 70800, 71200, 70500, 71200], [1646956800000, 70500, 70700, 69700, 70000], [1647216000000, 70000, 70200, 69600, 70200], [1647302400000, 69800, 70100, 69500, 69500], [1647388800000, 70200, 70500, 69700, 70400], [1647475200000, 71200, 71800, 70900, 71200], [1647561600000, 70600, 70900, 70200, 70700], [1647820800000, 70900, 71000, 69900, 69900], [1647907200000, 69900, 70500, 69900, 70300], [1647993600000, 70600, 71200, 70300, 70500], [1648080000000, 69600, 70300, 69600, 69800], [1648166400000, 70100, 70200, 69600, 69800], [1648425600000, 69500, 69900, 69200, 69700], [1648512000000, 70000, 70300, 69800, 70200], [1648598400000, 70300, 70500, 69800, 69900], [1648684800000, 69900, 70200, 69600, 69600], [1648771200000, 69500, 69500, 69000, 69100], [1649030400000, 68900, 69300, 68600, 69300], [1649116800000, 69400, 69600, 69100, 69200], [1649203200000, 68600, 68800, 68500, 68500], [1649289600000, 68500, 68500, 68000, 68000], [1649376000000, 68100, 68300, 67700, 67800], [1649635200000, 67800, 68100, 67400, 67900], [1649721600000, 67600, 67700, 67000, 67000], [1649808000000, 67300, 69000, 67200, 68700], [1649894400000, 68700, 68700, 67500, 67500], [1649980800000, 67200, 67300, 66500, 66600], [1650240000000, 66500, 67100, 66100, 66700], [1650326400000, 67100, 68000, 67000, 67300], [1650412800000, 67000, 67400, 66500, 67400], [1650499200000, 67600, 68300, 67500, 67700], [1650585600000, 67200, 67300, 66700, 67000], [1650844800000, 66500, 66700, 66300, 66300], [1650931200000, 66400, 66700, 66100, 66100], [1651017600000, 65400, 65500, 64900, 65000], [1651104000000, 65400, 65500, 64500, 64800], [1651190400000, 65100, 67600, 65000, 67400], [1651449600000, 66600, 67600, 66500, 67300], [1651536000000, 67400, 68400, 67300, 67500], [1651622400000, 68000, 68400, 67500, 67900], [1651795200000, 67000, 67100, 66500, 66500], [1652054400000, 66300, 66900, 66100, 66100], [1652140800000, 65900, 66300, 65300, 65700], [1652227200000, 65500, 66300, 65200, 65700], [1652313600000, 65200, 65500, 64900, 64900], [1652400000000, 65300, 66700, 65200, 66500], [1652659200000, 67100, 67400, 66100, 66300], [1652745600000, 66600, 67900, 66600, 67600], [1652832000000, 68300, 68700, 67600, 68100], [1652918400000, 66500, 67600, 66500, 67500], [1653004800000, 67800, 68400, 67700, 68000], [1653264000000, 68800, 68800, 67600, 67900], [1653350400000, 67500, 67700, 66500, 66500], [1653436800000, 66700, 67100, 65900, 66400], [1653523200000, 66300, 67200, 65500, 65900], [1653609600000, 66700, 66900, 66200, 66500], [1653868800000, 67500, 67800, 66900, 67700], [1653955200000, 67500, 67500, 66700, 67400], [1654128000000, 66600, 67000, 66400, 66700], [1654214400000, 67200, 67300, 66800, 66800], [1654560000000, 66200, 66400, 65400, 65500], [1654646400000, 65400, 65700, 65300, 65300], [1654732800000, 65100, 65200, 64500, 65200], [1654819200000, 64000, 64400, 63800, 63800], [1655078400000, 62400, 62800, 62100, 62100], [1655164800000, 61200, 62200, 61100, 61900], [1655251200000, 61300, 61500, 60200, 60700], [1655337600000, 61300, 61800, 60500, 60900], [1655424000000, 59400, 59900, 59400, 59800], [1655683200000, 59800, 59900, 58100, 58700], [1655769600000, 58700, 59200, 58200, 58500], [1655856000000, 59000, 59100, 57600, 57600], [1655942400000, 57700, 58000, 56800, 57400], [1656028800000, 57900, 59100, 57700, 58400], [1656288000000, 59000, 59900, 58300, 58800], [1656374400000, 59200, 59500, 58700, 59400], [1656460800000, 58500, 58800, 58000, 58000], [1656547200000, 57200, 57600, 57000, 57000], [1656633600000, 56900, 57500, 55900, 56200], [1656892800000, 56100, 57400, 55700, 57100], [1656979200000, 57600, 58200, 57200, 57200], [1657065600000, 57300, 57300, 56400, 56400], [1657152000000, 56400, 58700, 56300, 58200], [1657238400000, 58600, 59300, 58200, 58700], [1657497600000, 59300, 59600, 58700, 58800], [1657584000000, 58600, 58700, 58100, 58100], [1657670400000, 58300, 58600, 58000, 58000], [1657756800000, 57500, 58200, 57400, 57500], [1657843200000, 58400, 60000, 58100, 60000], [1658102400000, 60600, 62000, 60500, 61900], [1658188800000, 61400, 61500, 60200, 60900], [1658275200000, 61800, 62100, 60500, 60500], [1658361600000, 61100, 61900, 60700, 61800], [1658448000000, 61800, 62200, 61200, 61300], [1658707200000, 60900, 61900, 60800, 61100], [1658793600000, 60800, 61900, 60800, 61700], [1658880000000, 61300, 61900, 61200, 61800], [1658966400000, 62300, 62600, 61600, 61900], [1659052800000, 62400, 62600, 61300, 61400], [1659312000000, 61000, 61700, 60300, 61300], [1659398400000, 61200, 61900, 61000, 61700], [1659484800000, 61600, 61600, 61000, 61300], [1659571200000, 61700, 61800, 61200, 61500], [1659657600000, 61700, 61900, 61200, 61500], [1659916800000, 61400, 61400, 60600, 60800], [1660003200000, 60600, 60700, 59600, 60000], [1660089600000, 58900, 59200, 58600, 59100], [1660176000000, 59600, 60000, 59300, 59900], [1660262400000, 59500, 60700, 59400, 60200], [1660608000000, 60500, 61600, 60300, 61000], [1660694400000, 61100, 61200, 60300, 60400], [1660780800000, 60300, 61900, 60000, 61500], [1660867200000, 61400, 61600, 60600, 60900], [1661126400000, 60300, 60400, 59800, 60000], [1661212800000, 59000, 59600, 59000, 59100], [1661299200000, 59200, 59500, 59000, 59000], [1661385600000, 59200, 59700, 59000, 59700], [1661472000000, 60300, 60900, 59900, 60000], [1661731200000, 58700, 58900, 58600, 58600], [1661817600000, 58700, 59000, 58300, 58800], [1661904000000, 58200, 59900, 58200, 59700], [1661990400000, 58700, 58900, 58300, 58400], [1662076800000, 58300, 58600, 57500, 57500], [1662336000000, 57400, 57800, 56800, 57100], [1662422400000, 57200, 57600, 56900, 57100], [1662508800000, 56700, 56700, 55900, 56000], [1662595200000, 56200, 56400, 55600, 55600], [1663027200000, 57000, 58500, 56800, 58100], [1663113600000, 56200, 57200, 56100, 56800], [1663200000000, 57000, 57100, 56000, 56000], [1663286400000, 55600, 56400, 55500, 56200], [1663545600000, 56300, 57000, 56000, 56400], [1663632000000, 56400, 57000, 55800, 55800], [1663718400000, 55400, 55500, 55000, 55300], [1663804800000, 54600, 54700, 54300, 54400], [1663891200000, 54400, 54900, 54200, 54500], [1664150400000, 53700, 54200, 53600, 53900], [1664236800000, 53800, 54200, 53500, 54200], [1664323200000, 53900, 54400, 52500, 52900], [1664409600000, 53300, 53700, 52600, 52600], [1664496000000, 52300, 53600, 51800, 53100], [1664841600000, 55300, 55400, 54500, 55200], [1664928000000, 56900, 57200, 55400, 56000], [1665014400000, 56700, 57300, 56300, 56300], [1665100800000, 55900, 56900, 55200, 56200], [1665446400000, 54400, 55700, 54000, 55400], [1665532800000, 55700, 57000, 55200, 55800], [1665619200000, 55400, 56100, 55200, 55200], [1665705600000, 56200, 56500, 55800, 56300], [1665964800000, 55800, 57000, 55700, 56600], [1666051200000, 56700, 57100, 55800, 56500], [1666137600000, 56700, 56900, 55700, 55800], [1666224000000, 55200, 56000, 55100, 55500], [1666310400000, 55100, 56300, 55100, 55900], [1666569600000, 57000, 57500, 56700, 57500], [1666656000000, 57000, 58600, 57000, 57700], [1666742400000, 58000, 59600, 57700, 59400], [1666828800000, 59700, 60100, 58900, 59500], [1666915200000, 58900, 59200, 57200, 57300], [1667174400000, 58100, 59900, 58000, 59400], [1667260800000, 59900, 60300, 59500, 60000], [1667347200000, 59700, 60000, 59300, 59600], [1667433600000, 58600, 59800, 58100, 59200], [1667520000000, 59100, 59500, 58400, 59400], [1667779200000, 59700, 60300, 59400, 60200], [1667865600000, 60500, 61900, 60500, 61800], [1667952000000, 62000, 62200, 61300, 62000], [1668038400000, 61400, 61500, 60400, 60400], [1668124800000, 63100, 63200, 62300, 62900], [1668384000000, 62900, 62900, 61700, 61900], [1668470400000, 62200, 62500, 61600, 62400], [1668556800000, 62400, 62700, 61700, 62700], [1668643200000, 62000, 62000, 61300, 61400], [1668729600000, 61800, 62400, 61400, 61800], [1668988800000, 61400, 61800, 60800, 61400], [1669075200000, 60900, 61200, 60300, 60600], [1669161600000, 61200, 61300, 60700, 61000], [1669248000000, 61200, 61700, 60900, 61400], [1669334400000, 61400, 61700, 60800, 61000], [1669593600000, 60500, 60500, 59800, 60100], [1669680000000, 59900, 60600, 59800, 60600], [1669766400000, 60400, 62200, 60200, 62200], [1669852800000, 63100, 63200, 62300, 62600], [1669939200000, 62500, 62500, 60400, 60400], [1670198400000, 60900, 61100, 60000, 60300], [1670284800000, 59800, 60100, 59200, 59200], [1670371200000, 58800, 59600, 58500, 58900], [1670457600000, 58700, 59200, 58600, 59200], [1670544000000, 59300, 60600, 59300, 60400], [1670803200000, 59900, 60000, 59400, 59500], [1670889600000, 59600, 60300, 59400, 59700], [1670976000000, 59800, 60600, 59800, 60500], [1671062400000, 59800, 60200, 59300, 59300], [1671148800000, 58300, 59500, 58300, 59500], [1671408000000, 59500, 59900, 59100, 59500], [1671494400000, 59000, 59100, 58500, 58600], [1671580800000, 58700, 59100, 58000, 58000], [1671667200000, 58100, 59100, 58100, 59100], [1671753600000, 58200, 58400, 57700, 58100], [1672012800000, 58000, 58100, 57700, 57900], [1672099200000, 58000, 58400, 57900, 58100], [1672185600000, 57600, 57600, 56400, 56600], [1672272000000, 56000, 56200, 55300, 55300], [1672617600000, 55500, 56100, 55200, 55500], [1672704000000, 55400, 56000, 54500, 55400], [1672790400000, 55700, 58000, 55600, 57800], [1672876800000, 58200, 58800, 57600, 58200], [1672963200000, 58300, 59400, 57900, 59000], [1673222400000, 59700, 60700, 59600, 60700], [1673308800000, 60200, 61100, 59900, 60400], [1673395200000, 61000, 61200, 60300, 60500], [1673481600000, 61100, 61200, 59900, 60500], [1673568000000, 60500, 61200, 60400, 60800], [1673827200000, 61300, 61600, 60800, 61100], [1673913600000, 61200, 61500, 60600, 61000], [1674000000000, 60700, 61000, 59900, 60400], [1674086400000, 60500, 61500, 60400, 61500], [1674172800000, 62100, 62300, 61100, 61800], [1674604800000, 63500, 63700, 63000, 63400], [1674691200000, 63800, 63900, 63300, 63900], [1674777600000, 64400, 65000, 63900, 64600], [1675036800000, 64900, 64900, 63100, 63300], [1675123200000, 63500, 63700, 61000, 61000], [1675209600000, 62600, 62700, 61000, 61800], [1675296000000, 63200, 63900, 62600, 63500], [1675382400000, 63900, 64000, 63000, 63800], [1675641600000, 62800, 63000, 61600, 61600], [1675728000000, 61900, 62500, 61600, 61900], [1675814400000, 62800, 63300, 62400, 63100], [1675900800000, 63000, 63300, 62300, 63000], [1675987200000, 62600, 63000, 62400, 62800], [1676246400000, 62900, 63000, 62300, 62900], [1676332800000, 63600, 63900, 63200, 63200], [1676419200000, 63900, 63900, 62000, 62200], [1676505600000, 62500, 63700, 62400, 63700], [1676592000000, 62900, 63300, 62400, 62600], [1676851200000, 62900, 63000, 61800, 62700], [1676937600000, 62700, 62800, 62000, 62100], [1677024000000, 61500, 61800, 61000, 61100], [1677110400000, 61700, 62500, 61500, 62000], [1677196800000, 62300, 62600, 61300, 61300], [1677456000000, 60800, 60800, 60200, 60500], [1677542400000, 60800, 61400, 60500, 60600], [1677715200000, 60900, 61800, 60500, 60800], [1677801600000, 61000, 61200, 60500, 60500], [1678060800000, 61100, 61600, 60800, 61500], [1678147200000, 61400, 61400, 60700, 60700], [1678233600000, 60100, 60500, 59900, 60300], [1678320000000, 60500, 60800, 59900, 60100], [1678406400000, 59500, 59700, 59100, 59500], [1678665600000, 59900, 60200, 59300, 60000], [1678752000000, 59400, 59500, 59000, 59000], [1678838400000, 60000, 60300, 59600, 59800], [1678924800000, 59200, 60200, 59100, 59900], [1679011200000, 60800, 61300, 60600, 61300], [1679270400000, 61100, 61200, 60200, 60200], [1679356800000, 60500, 60700, 60100, 60300], [1679443200000, 61000, 61200, 60500, 61100], [1679529600000, 60600, 62300, 60600, 62300], [1679616000000, 62700, 63300, 62300, 63000], [1679875200000, 62600, 62800, 62000, 62100], [1679961600000, 62400, 62900, 62100, 62900], [1680048000000, 62500, 62700, 62200, 62700], [1680134400000, 63700, 63700, 63100, 63200], [1680220800000, 64000, 64000, 63700, 64000], [1680480000000, 64000, 64000, 63000, 63100], [1680566400000, 63400, 63800, 62800, 63600], [1680652800000, 63700, 64000, 63400, 63900], [1680739200000, 63500, 63600, 62300, 62300], [1680825600000, 63800, 65200, 63800, 65000], [1681084800000, 64800, 66300, 64700, 65700], [1681171200000, 66200, 66200, 65400, 65900], [1681257600000, 65800, 66200, 65300, 66000], [1681344000000, 65600, 66100, 65400, 66100], [1681430400000, 66600, 66600, 65000, 65100], [1681689600000, 65000, 65600, 64700, 65300], [1681776000000, 65900, 66000, 64800, 65600], [1681862400000, 65500, 65800, 65300, 65500], [1681948800000, 65100, 65300, 64600, 65300], [1682035200000, 65800, 65900, 65400, 65700], [1682294400000, 65300, 65700, 64800, 65200], [1682380800000, 65300, 65400, 63400, 63600], [1682467200000, 63600, 64300, 63300, 64100], [1682553600000, 64100, 65000, 63300, 64600], [1682640000000, 65200, 65900, 65000, 65500], [1682985600000, 66000, 66300, 65100, 65700], [1683072000000, 65100, 65600, 64900, 65400], [1683158400000, 65600, 65700, 64700, 65100], [1683504000000, 66300, 66300, 65400, 65900], [1683590400000, 65800, 65800, 65100, 65300], [1683676800000, 65500, 65500, 64300, 64600], [1683763200000, 64700, 65100, 64200, 64200], [1683849600000, 63700, 64600, 63600, 64100], [1684108800000, 64100, 64600, 63900, 64500], [1684195200000, 65800, 65900, 65300, 65400], [1684281600000, 65900, 65900, 64800, 65000], [1684368000000, 66000, 66200, 65700, 66200], [1684454400000, 67800, 68400, 67500, 68400], [1684713600000, 68400, 69000, 68000, 68500], [1684800000000, 68500, 68700, 68100, 68400], [1684886400000, 68100, 68700, 68000, 68500], [1684972800000, 69900, 70000, 68700, 68800], [1685059200000, 69800, 70400, 69500, 70300], [1685404800000, 71300, 72300, 71200, 72300], [1685491200000, 72400, 72500, 71000, 71400], [1685577600000, 70900, 71600, 70600, 70900], [1685664000000, 71700, 72200, 71600, 72200], [1685923200000, 72700, 72700, 71400, 71700], [1686096000000, 71300, 71600, 70800, 71000], [1686182400000, 70400, 70900, 70000, 70900], [1686268800000, 71100, 72300, 70800, 72000], [1686528000000, 72100, 72400, 70800, 71000], [1686614400000, 71700, 72200, 71600, 72000], [1686700800000, 72100, 72200, 71100, 71900], [1686787200000, 72100, 72300, 71300, 71500], [1686873600000, 71800, 71900, 70900, 71800], [1687132800000, 71300, 71700, 70900, 71200], [1687219200000, 70700, 71400, 70400, 71400], [1687305600000, 70700, 71200, 70400, 70500], [1687392000000, 70200, 71500, 70100, 71300], [1687478400000, 72000, 72200, 71600, 71600], [1687737600000, 71700, 72500, 71500, 72400], [1687824000000, 72500, 72600, 72000, 72600], [1687910400000, 72600, 72700, 72000, 72700], [1687996800000, 73100, 73400, 72400, 72400], [1688083200000, 72500, 72700, 71700, 72200], [1688342400000, 72700, 73200, 72600, 73000], [1688428800000, 73400, 73600, 72900, 73000], [1688515200000, 73000, 73300, 71900, 72000], [1688601600000, 71900, 72400, 71500, 71600], [1688688000000, 71100, 71400, 69800, 69900], [1688947200000, 70000, 70400, 69200, 69500], [1689033600000, 70200, 71500, 70100, 71500], [1689120000000, 71200, 72000, 71100, 71900], [1689206400000, 72400, 72600, 71900, 71900], [1689292800000, 72500, 73400, 72400, 73400], [1689552000000, 73200, 73500, 72800, 73300], [1689638400000, 73200, 73500, 72000, 72000], [1689724800000, 72700, 72800, 71300, 71700], [1689811200000, 71100, 71500, 70800, 71000], [1689897600000, 70400, 70400, 69400, 70300], [1690156800000, 70100, 70900, 69900, 70400], [1690243200000, 70000, 70500, 69800, 70000], [1690329600000, 69800, 70600, 68100, 69800], [1690416000000, 69900, 71700, 69300, 71700], [1690502400000, 71800, 72400, 70100, 70600], [1690761600000, 70900, 71000, 69800, 69800], [1690848000000, 70100, 71200, 70000, 71100], [1690934400000, 70700, 71000, 69800, 69900], [1691020800000, 69900, 70200, 68500, 68800], [1691107200000, 68800, 69100, 68200, 68300], [1691366400000, 67700, 69200, 67600, 68500], [1691452800000, 69000, 69100, 67400, 68000],];
        var chart_value5 = [[1376006400000, 24600], [1376265600000, 24640], [1376352000000, 25800], [1376438400000, 26000], [1376611200000, 25900], [1376870400000, 25720], [1376956800000, 25380], [1377043200000, 25120], [1377129600000, 25100], [1377216000000, 25900], [1377475200000, 26000], [1377561600000, 26080], [1377648000000, 26180], [1377734400000, 26880], [1377820800000, 27360], [1378080000000, 27020], [1378166400000, 26740], [1378252800000, 26800], [1378339200000, 27300], [1378425600000, 27380], [1378684800000, 27460], [1378771200000, 27920], [1378857600000, 28040], [1378944000000, 28200], [1379030400000, 28120], [1379289600000, 28500], [1379376000000, 27720], [1379894400000, 27200], [1379980800000, 27460], [1380067200000, 27280], [1380153600000, 27440], [1380240000000, 27320], [1380499200000, 27340], [1380585600000, 27640], [1380672000000, 28360], [1380844800000, 28360], [1381104000000, 28720], [1381190400000, 28600], [1381363200000, 28600], [1381449600000, 28860], [1381708800000, 28760], [1381795200000, 29140], [1381881600000, 29000], [1381968000000, 29260], [1382054400000, 29440], [1382313600000, 29280], [1382400000000, 29100], [1382486400000, 28840], [1382572800000, 28980], [1382659200000, 28980], [1382918400000, 29640], [1383004800000, 29800], [1383091200000, 30000], [1383177600000, 29300], [1383264000000, 30000], [1383523200000, 29980], [1383609600000, 29700], [1383696000000, 29020], [1383782400000, 28740], [1383868800000, 28200], [1384128000000, 28560], [1384214400000, 29120], [1384300800000, 28380], [1384387200000, 28480], [1384473600000, 29240], [1384732800000, 29480], [1384819200000, 29780], [1384905600000, 29400], [1384992000000, 28800], [1385078400000, 29000], [1385337600000, 29300], [1385424000000, 29580], [1385510400000, 29400], [1385596800000, 29880], [1385683200000, 29880], [1385942400000, 29340], [1386028800000, 29220], [1386115200000, 28640], [1386201600000, 28800], [1386288000000, 28560], [1386547200000, 29080], [1386633600000, 28800], [1386720000000, 28400], [1386806400000, 28200], [1386892800000, 27800], [1387152000000, 28000], [1387238400000, 27900], [1387324800000, 28020], [1387411200000, 28540], [1387497600000, 28540], [1387756800000, 28660], [1387843200000, 28300], [1388016000000, 28160], [1388102400000, 27920], [1388361600000, 27440], [1388620800000, 26180], [1388707200000, 25920], [1388966400000, 26140], [1389052800000, 26080], [1389139200000, 25820], [1389225600000, 25500], [1389312000000, 25440], [1389571200000, 25900], [1389657600000, 26260], [1389744000000, 25980], [1389830400000, 26020], [1389916800000, 25840], [1390176000000, 26320], [1390262400000, 26480], [1390348800000, 26560], [1390435200000, 25980], [1390521600000, 26140], [1390780800000, 25840], [1390867200000, 25660], [1390953600000, 25600], [1391385600000, 25440], [1391472000000, 24980], [1391558400000, 24740], [1391644800000, 25180], [1391731200000, 25500], [1391990400000, 25540], [1392076800000, 26220], [1392163200000, 26140], [1392249600000, 25960], [1392336000000, 26020], [1392595200000, 25700], [1392681600000, 25900], [1392768000000, 25800], [1392854400000, 25720], [1392940800000, 26600], [1393200000000, 26560], [1393286400000, 26680], [1393372800000, 26840], [1393459200000, 26820], [1393545600000, 26980], [1393804800000, 26500], [1393891200000, 26300], [1393977600000, 26600], [1394064000000, 26520], [1394150400000, 26780], [1394409600000, 26400], [1394496000000, 26440], [1394582400000, 25880], [1394668800000, 25800], [1394755200000, 25500], [1395014400000, 25320], [1395100800000, 25560], [1395187200000, 25380], [1395273600000, 25240], [1395360000000, 25460], [1395619200000, 25460], [1395705600000, 24940], [1395792000000, 25700], [1395878400000, 26660], [1395964800000, 26700], [1396224000000, 26860], [1396310400000, 26780], [1396396800000, 27140], [1396483200000, 27800], [1396569600000, 27600], [1396828800000, 27940], [1396915200000, 27880], [1397001600000, 27420], [1397088000000, 27600], [1397174400000, 27300], [1397433600000, 27400], [1397520000000, 27400], [1397606400000, 27600], [1397692800000, 27400], [1397779200000, 27560], [1398038400000, 27600], [1398124800000, 27500], [1398211200000, 27780], [1398297600000, 28140], [1398384000000, 27980], [1398643200000, 27760], [1398729600000, 27200], [1398816000000, 26860], [1398988800000, 26920], [1399420800000, 26880], [1399507200000, 27000], [1399593600000, 26700], [1399852800000, 27760], [1399939200000, 28000], [1400025600000, 28300], [1400112000000, 28200], [1400198400000, 28560], [1400457600000, 28960], [1400544000000, 29020], [1400630400000, 28820], [1400716800000, 28520], [1400803200000, 28560], [1401062400000, 28440], [1401148800000, 28140], [1401235200000, 28660], [1401321600000, 29200], [1401408000000, 28860], [1401667200000, 29100], [1401753600000, 29400], [1401926400000, 29140], [1402272000000, 28180], [1402358400000, 28720], [1402444800000, 28440], [1402531200000, 28260], [1402617600000, 27340], [1402876800000, 27480], [1402963200000, 27480], [1403049600000, 27160], [1403136000000, 26460], [1403222400000, 26020], [1403481600000, 26440], [1403568000000, 26900], [1403654400000, 26400], [1403740800000, 26500], [1403827200000, 26220], [1404086400000, 26440], [1404172800000, 26200], [1404259200000, 26600], [1404345600000, 26360], [1404432000000, 26120], [1404691200000, 25840], [1404777600000, 25900], [1404864000000, 26160], [1404950400000, 26120], [1405036800000, 25680], [1405296000000, 25720], [1405382400000, 26400], [1405468800000, 26420], [1405555200000, 26600], [1405641600000, 26860], [1405900800000, 27060], [1405987200000, 26960], [1406073600000, 26760], [1406160000000, 27100], [1406246400000, 27100], [1406505600000, 27160], [1406592000000, 27720], [1406678400000, 27900], [1406764800000, 26860], [1406851200000, 25840], [1407110400000, 26340], [1407196800000, 26320], [1407283200000, 26000], [1407369600000, 25800], [1407456000000, 25000], [1407715200000, 25400], [1407801600000, 25320], [1407888000000, 25280], [1407974400000, 25220], [1408320000000, 25000], [1408406400000, 25080], [1408492800000, 25220], [1408579200000, 24700], [1408665600000, 24940], [1408924800000, 24560], [1409011200000, 24440], [1409097600000, 24600], [1409184000000, 24840], [1409270400000, 24680], [1409529600000, 24520], [1409616000000, 23880], [1409702400000, 23780], [1409788800000, 24200], [1409875200000, 24020], [1410393600000, 23840], [1410480000000, 24020], [1410739200000, 24000], [1410825600000, 24120], [1410912000000, 24520], [1410998400000, 24200], [1411084800000, 24200], [1411344000000, 23760], [1411430400000, 23220], [1411516800000, 23000], [1411603200000, 23120], [1411689600000, 23700], [1411948800000, 23900], [1412035200000, 23680], [1412121600000, 23120], [1412208000000, 22820], [1412553600000, 23020], [1412640000000, 23240], [1412726400000, 22600], [1412899200000, 22100], [1413158400000, 22160], [1413244800000, 22540], [1413331200000, 22500], [1413417600000, 22300], [1413504000000, 21780], [1413763200000, 22120], [1413849600000, 21660], [1413936000000, 22080], [1414022400000, 21880], [1414108800000, 22240], [1414368000000, 21900], [1414454400000, 21820], [1414540800000, 22600], [1414627200000, 23620], [1414713600000, 24880], [1414972800000, 24700], [1415059200000, 24340], [1415145600000, 24040], [1415232000000, 24080], [1415318400000, 24120], [1415577600000, 25360], [1415664000000, 24620], [1415750400000, 24600], [1415836800000, 24000], [1415923200000, 23880], [1416182400000, 24100], [1416268800000, 24400], [1416355200000, 24360], [1416441600000, 24200], [1416528000000, 24460], [1416787200000, 24400], [1416873600000, 23800], [1416960000000, 24020], [1417046400000, 25280], [1417132800000, 25740], [1417392000000, 25900], [1417478400000, 25900], [1417564800000, 25960], [1417651200000, 26000], [1417737600000, 26040], [1417996800000, 26380], [1418083200000, 26980], [1418169600000, 26340], [1418256000000, 26100], [1418342400000, 25720], [1418601600000, 25460], [1418688000000, 25580], [1418774400000, 25320], [1418860800000, 25320], [1418947200000, 26560], [1419206400000, 26900], [1419292800000, 26780], [1419379200000, 26860], [1419552000000, 27040], [1419811200000, 26580], [1419897600000, 26540], [1420156800000, 26600], [1420416000000, 26660], [1420502400000, 25900], [1420588800000, 26140], [1420675200000, 26280], [1420761600000, 26280], [1421020800000, 26320], [1421107200000, 26780], [1421193600000, 26900], [1421280000000, 26680], [1421366400000, 26320], [1421625600000, 26860], [1421712000000, 27440], [1421798400000, 27900], [1421884800000, 27560], [1421971200000, 27720], [1422230400000, 27780], [1422316800000, 28000], [1422403200000, 27560], [1422489600000, 27200], [1422576000000, 27300], [1422835200000, 27360], [1422921600000, 27320], [1423008000000, 27180], [1423094400000, 27160], [1423180800000, 27440], [1423440000000, 27900], [1423526400000, 27560], [1423612800000, 27100], [1423699200000, 26880], [1423785600000, 27220], [1424044800000, 27480], [1424131200000, 27540], [1424649600000, 27340], [1424736000000, 27340], [1424822400000, 27580], [1424908800000, 27500], [1424995200000, 27140], [1425254400000, 28460], [1425340800000, 28360], [1425427200000, 28740], [1425513600000, 28440], [1425600000000, 28840], [1425859200000, 28400], [1425945600000, 28420], [1426032000000, 29480], [1426118400000, 28940], [1426204800000, 29140], [1426464000000, 29400], [1426550400000, 29940], [1426636800000, 30060], [1426723200000, 29400], [1426809600000, 29280], [1427068800000, 29340], [1427155200000, 29520], [1427241600000, 29700], [1427328000000, 28420], [1427414400000, 28420], [1427673600000, 28560], [1427760000000, 28820], [1427846400000, 28460], [1427932800000, 28680], [1428019200000, 28680], [1428278400000, 29400], [1428364800000, 29240], [1428451200000, 29580], [1428537600000, 29660], [1428624000000, 29800], [1428883200000, 29580], [1428969600000, 29480], [1429056000000, 28920], [1429142400000, 29540], [1429228800000, 29000], [1429488000000, 28600], [1429574400000, 28880], [1429660800000, 29220], [1429747200000, 29020], [1429833600000, 28200], [1430092800000, 27900], [1430179200000, 27320], [1430265600000, 27700], [1430352000000, 28200], [1430697600000, 28000], [1430870400000, 27240], [1430956800000, 27400], [1431043200000, 26760], [1431302400000, 26720], [1431388800000, 26620], [1431475200000, 26660], [1431561600000, 26800], [1431648000000, 26520], [1431907200000, 26400], [1431993600000, 26760], [1432080000000, 27320], [1432166400000, 27040], [1432252800000, 27000], [1432598400000, 27240], [1432684800000, 26280], [1432771200000, 26180], [1432857600000, 26140], [1433116800000, 25820], [1433203200000, 26060], [1433289600000, 25460], [1433376000000, 26740], [1433462400000, 26820], [1433721600000, 26280], [1433808000000, 25640], [1433894400000, 25240], [1433980800000, 25140], [1434067200000, 25540], [1434326400000, 25400], [1434412800000, 25100], [1434499200000, 25080], [1434585600000, 25300], [1434672000000, 25320], [1434931200000, 25620], [1435017600000, 26420], [1435104000000, 26040], [1435190400000, 25380], [1435276800000, 25560], [1435536000000, 25620], [1435622400000, 25360], [1435708800000, 25900], [1435795200000, 25980], [1435881600000, 25360], [1436140800000, 24600], [1436227200000, 24800], [1436313600000, 24780], [1436400000000, 25300], [1436486400000, 25180], [1436745600000, 25320], [1436832000000, 24500], [1436918400000, 24700], [1437004800000, 25640], [1437091200000, 26100], [1437350400000, 25500], [1437436800000, 25260], [1437523200000, 25060], [1437609600000, 24680], [1437696000000, 24580], [1437955200000, 24600], [1438041600000, 24600], [1438128000000, 25260], [1438214400000, 24300], [1438300800000, 23700], [1438560000000, 23500], [1438646400000, 23640], [1438732800000, 23180], [1438819200000, 22300], [1438905600000, 22720], [1439164800000, 22820], [1439251200000, 23140], [1439337600000, 23080], [1439424000000, 22800], [1439769600000, 22080], [1439856000000, 22620], [1439942400000, 23080], [1440028800000, 22780], [1440115200000, 22020], [1440374400000, 21580], [1440460800000, 21580], [1440547200000, 21340], [1440633600000, 21340], [1440720000000, 21620], [1440979200000, 21780], [1441065600000, 21700], [1441152000000, 21800], [1441238400000, 22440], [1441324800000, 22580], [1441584000000, 22240], [1441670400000, 22620], [1441756800000, 22940], [1441843200000, 22680], [1441929600000, 22300], [1442188800000, 22480], [1442275200000, 22460], [1442361600000, 23040], [1442448000000, 23140], [1442534400000, 23800], [1442793600000, 23000], [1442880000000, 22900], [1442966400000, 22620], [1443052800000, 22520], [1443139200000, 22240], [1443571200000, 22680], [1443657600000, 22680], [1443744000000, 22380], [1444003200000, 22300], [1444089600000, 23020], [1444176000000, 25020], [1444262400000, 25400], [1444608000000, 25200], [1444694400000, 25040], [1444780800000, 25080], [1444867200000, 25380], [1444953600000, 25300], [1445212800000, 25120], [1445299200000, 25320], [1445385600000, 25400], [1445472000000, 25600], [1445558400000, 25780], [1445817600000, 25840], [1445904000000, 25960], [1445990400000, 26160], [1446076800000, 26500], [1446163200000, 27440], [1446422400000, 27660], [1446508800000, 27040], [1446595200000, 26600], [1446681600000, 26840], [1446768000000, 26760], [1447027200000, 26880], [1447113600000, 26420], [1447200000000, 26660], [1447286400000, 26340], [1447372800000, 26000], [1447632000000, 25260], [1447718400000, 25400], [1447804800000, 25620], [1447891200000, 25780], [1447977600000, 25700], [1448236800000, 25640], [1448323200000, 25980], [1448409600000, 25980], [1448496000000, 26700], [1448582400000, 26540], [1448841600000, 25680], [1448928000000, 26420], [1449014400000, 26000], [1449100800000, 25800], [1449187200000, 25380], [1449446400000, 25240], [1449532800000, 25240], [1449619200000, 25260], [1449705600000, 25660], [1449792000000, 25680], [1450051200000, 25220], [1450137600000, 25540], [1450224000000, 25980], [1450310400000, 25800], [1450396800000, 25560], [1450656000000, 25600], [1450742400000, 25840], [1450828800000, 25900], [1450915200000, 25700], [1451260800000, 25320], [1451347200000, 25080], [1451433600000, 25200], [1451865600000, 24100], [1451952000000, 24160], [1452038400000, 23500], [1452124800000, 23260], [1452211200000, 23420], [1452470400000, 23040], [1452556800000, 22920], [1452643200000, 22960], [1452729600000, 22760], [1452816000000, 22640], [1453075200000, 22520], [1453161600000, 23420], [1453248000000, 22760], [1453334400000, 22620], [1453420800000, 23360], [1453680000000, 23240], [1453766400000, 22740], [1453852800000, 23500], [1453939200000, 22900], [1454025600000, 23000], [1454284800000, 23260], [1454371200000, 23120], [1454457600000, 22920], [1454544000000, 23120], [1454630400000, 23280], [1455148800000, 22600], [1455235200000, 22600], [1455494400000, 23080], [1455580800000, 23360], [1455667200000, 23700], [1455753600000, 23740], [1455840000000, 23800], [1456099200000, 23500], [1456185600000, 23620], [1456272000000, 23440], [1456358400000, 23580], [1456444800000, 23440], [1456704000000, 23560], [1456876800000, 23940], [1456963200000, 24400], [1457049600000, 24300], [1457308800000, 24460], [1457395200000, 23840], [1457481600000, 23880], [1457568000000, 24500], [1457654400000, 24980], [1457913600000, 25100], [1458000000000, 25060], [1458086400000, 25120], [1458172800000, 25260], [1458259200000, 25460], [1458518400000, 25340], [1458604800000, 25380], [1458691200000, 25580], [1458777600000, 25640], [1458864000000, 25760], [1459123200000, 25880], [1459209600000, 25800], [1459296000000, 26160], [1459382400000, 26240], [1459468800000, 25580], [1459728000000, 26100], [1459814400000, 25200], [1459900800000, 25700], [1459987200000, 25380], [1460073600000, 24920], [1460332800000, 25320], [1460419200000, 25500], [1460592000000, 26000], [1460678400000, 26000], [1460937600000, 25980], [1461024000000, 25760], [1461110400000, 25980], [1461196800000, 25880], [1461283200000, 25600], [1461542400000, 25620], [1461628800000, 25920], [1461715200000, 26000], [1461801600000, 25300], [1461888000000, 24900], [1462147200000, 25000], [1462233600000, 25220], [1462320000000, 25800], [1462752000000, 25980], [1462838400000, 25920], [1462924800000, 25840], [1463011200000, 25620], [1463097600000, 25060], [1463356800000, 24960], [1463443200000, 25280], [1463529600000, 25360], [1463616000000, 25400], [1463702400000, 25380], [1463961600000, 25720], [1464048000000, 25420], [1464134400000, 25900], [1464220800000, 25920], [1464307200000, 25640], [1464566400000, 25600], [1464652800000, 25840], [1464739200000, 26660], [1464825600000, 27300], [1464912000000, 27540], [1465257600000, 27960], [1465344000000, 28120], [1465430400000, 28600], [1465516800000, 28120], [1465776000000, 27420], [1465862400000, 27600], [1465948800000, 28260], [1466035200000, 28180], [1466121600000, 28520], [1466380800000, 28620], [1466467200000, 28960], [1466553600000, 28900], [1466640000000, 28600], [1466726400000, 28000], [1466985600000, 27960], [1467072000000, 27980], [1467158400000, 27920], [1467244800000, 28500], [1467331200000, 29320], [1467590400000, 29320], [1467676800000, 29380], [1467763200000, 28420], [1467849600000, 29000], [1467936000000, 29200], [1468195200000, 29780], [1468281600000, 29280], [1468368000000, 29620], [1468454400000, 30000], [1468540800000, 30360], [1468800000000, 30660], [1468886400000, 30660], [1468972800000, 30800], [1469059200000, 30860], [1469145600000, 30320], [1469404800000, 30040], [1469491200000, 30600], [1469577600000, 30540], [1469664000000, 30140], [1469750400000, 30780], [1470009600000, 31360], [1470096000000, 30960], [1470182400000, 30340], [1470268800000, 30340], [1470355200000, 31220], [1470614400000, 31380], [1470700800000, 31340], [1470787200000, 30820], [1470873600000, 31180], [1470960000000, 30900], [1471305600000, 31360], [1471392000000, 31320], [1471478400000, 32800], [1471564800000, 33500], [1471824000000, 33300], [1471910400000, 33740], [1471996800000, 33060], [1472083200000, 32780], [1472169600000, 32240], [1472428800000, 32800], [1472515200000, 32900], [1472601600000, 32400], [1472688000000, 31740], [1472774400000, 31940], [1473033600000, 32120], [1473120000000, 32860], [1473206400000, 32420], [1473292800000, 32780], [1473379200000, 31500], [1473638400000, 29300], [1473724800000, 30540], [1474243200000, 31160], [1474329600000, 31700], [1474416000000, 31840], [1474502400000, 32360], [1474588800000, 31420], [1474848000000, 31360], [1474934400000, 31380], [1475020800000, 31340], [1475107200000, 32000], [1475193600000, 31960], [1475539200000, 32280], [1475625600000, 32380], [1475712000000, 33820], [1475798400000, 34120], [1476057600000, 33600], [1476144000000, 30900], [1476230400000, 30700], [1476316800000, 31140], [1476403200000, 31540], [1476662400000, 31800], [1476748800000, 31780], [1476835200000, 32500], [1476921600000, 32400], [1477008000000, 31780], [1477267200000, 32160], [1477353600000, 31940], [1477440000000, 31340], [1477526400000, 31460], [1477612800000, 32280], [1477872000000, 32780], [1477958400000, 33040], [1478044800000, 32860], [1478131200000, 32320], [1478217600000, 32540], [1478476800000, 32800], [1478563200000, 32880], [1478649600000, 31920], [1478736000000, 32980], [1478822400000, 31960], [1479081600000, 31060], [1479168000000, 30780], [1479254400000, 31160], [1479340800000, 31360], [1479427200000, 31720], [1479686400000, 31860], [1479772800000, 32800], [1479859200000, 32980], [1479945600000, 33000], [1480032000000, 33000], [1480291200000, 33540], [1480377600000, 33540], [1480464000000, 34920], [1480550400000, 34980], [1480636800000, 34540], [1480896000000, 34360], [1480982400000, 34960], [1481068800000, 35440], [1481155200000, 35800], [1481241600000, 35600], [1481500800000, 35040], [1481587200000, 35320], [1481673600000, 35540], [1481760000000, 35180], [1481846400000, 35860], [1482105600000, 35900], [1482192000000, 36240], [1482278400000, 36100], [1482364800000, 36180], [1482451200000, 35640], [1482710400000, 35960], [1482796800000, 35980], [1482883200000, 35760], [1482969600000, 36040], [1483315200000, 36100], [1483401600000, 36480], [1483488000000, 36160], [1483574400000, 35560], [1483660800000, 36200], [1483920000000, 37220], [1484006400000, 37240], [1484092800000, 38280], [1484179200000, 38800], [1484265600000, 37460], [1484524800000, 36660], [1484611200000, 36960], [1484697600000, 36940], [1484784000000, 37480], [1484870400000, 37200], [1485129600000, 38060], [1485216000000, 38160], [1485302400000, 39400], [1485388800000, 39900], [1485820800000, 39460], [1485907200000, 39120], [1485993600000, 39360], [1486080000000, 39460], [1486339200000, 39560], [1486425600000, 38820], [1486512000000, 38400], [1486598400000, 38400], [1486684800000, 38360], [1486944000000, 37960], [1487030400000, 37580], [1487116800000, 37720], [1487203200000, 38020], [1487289600000, 37860], [1487548800000, 38660], [1487635200000, 38940], [1487721600000, 39300], [1487808000000, 39180], [1487894400000, 38220], [1488153600000, 38060], [1488240000000, 38440], [1488412800000, 39720], [1488499200000, 39620], [1488758400000, 40080], [1488844800000, 40200], [1488931200000, 40200], [1489017600000, 40200], [1489104000000, 40180], [1489363200000, 40600], [1489449600000, 41360], [1489536000000, 41400], [1489622400000, 41840], [1489708800000, 42400], [1489968000000, 41900], [1490054400000, 42560], [1490140800000, 42460], [1490227200000, 41800], [1490313600000, 41500], [1490572800000, 41200], [1490659200000, 41480], [1490745600000, 41780], [1490832000000, 41980], [1490918400000, 41200], [1491177600000, 41440], [1491264000000, 42080], [1491350400000, 42140], [1491436800000, 41840], [1491523200000, 41600], [1491782400000, 41940], [1491868800000, 41600], [1491955200000, 41900], [1492041600000, 42420], [1492128000000, 42020], [1492387200000, 41560], [1492473600000, 41500], [1492560000000, 40900], [1492646400000, 40280], [1492732800000, 40760], [1492992000000, 41240], [1493078400000, 42700], [1493164800000, 42800], [1493251200000, 43840], [1493337600000, 44620], [1493683200000, 44900], [1493856000000, 45520], [1494201600000, 47020], [1494374400000, 45600], [1494460800000, 45500], [1494547200000, 45820], [1494806400000, 46100], [1494892800000, 46380], [1494979200000, 46340], [1495065600000, 45940], [1495152000000, 44720], [1495411200000, 45100], [1495497600000, 44920], [1495584000000, 44880], [1495670400000, 45680], [1495756800000, 46080], [1496016000000, 45620], [1496102400000, 44640], [1496188800000, 44700], [1496275200000, 44680], [1496361600000, 45960], [1496620800000, 45940], [1496793600000, 45300], [1496880000000, 45160], [1496966400000, 46100], [1497225600000, 45380], [1497312000000, 45400], [1497398400000, 45360], [1497484800000, 45680], [1497571200000, 45580], [1497830400000, 46560], [1497916800000, 48140], [1498003200000, 47480], [1498089600000, 47960], [1498176000000, 47620], [1498435200000, 48280], [1498521600000, 48300], [1498608000000, 47700], [1498694400000, 47940], [1498780800000, 47540], [1499040000000, 47220], [1499126400000, 47000], [1499212800000, 47580], [1499299200000, 48060], [1499385600000, 47860], [1499644800000, 48660], [1499731200000, 49000], [1499817600000, 49880], [1499904000000, 50560], [1499990400000, 50480], [1500249600000, 50640], [1500336000000, 50840], [1500422400000, 50740], [1500508800000, 51200], [1500595200000, 51080], [1500854400000, 50860], [1500940800000, 50000], [1501027200000, 49840], [1501113600000, 49800], [1501200000000, 47760], [1501459200000, 48200], [1501545600000, 48600], [1501632000000, 49000], [1501718400000, 47780], [1501804800000, 47700], [1502064000000, 47580], [1502150400000, 47720], [1502236800000, 46280], [1502323200000, 45900], [1502409600000, 44620], [1502668800000, 45000], [1502841600000, 46200], [1502928000000, 47040], [1503014400000, 46900], [1503273600000, 46840], [1503360000000, 47000], [1503446400000, 47480], [1503532800000, 47520], [1503619200000, 47020], [1503878400000, 46100], [1503964800000, 46080], [1504051200000, 46200], [1504137600000, 46320], [1504224000000, 46480], [1504483200000, 46040], [1504569600000, 46760], [1504656000000, 47000], [1504742400000, 48120], [1504828800000, 49080], [1505088000000, 49800], [1505174400000, 49600], [1505260800000, 49620], [1505347200000, 50300], [1505433600000, 50400], [1505692800000, 52480], [1505779200000, 52120], [1505865600000, 52220], [1505952000000, 52800], [1506038400000, 53000], [1506297600000, 53620], [1506384000000, 51660], [1506470400000, 51680], [1506556800000, 51260], [1506643200000, 51280], [1507593600000, 52800], [1507680000000, 54640], [1507766400000, 54800], [1507852800000, 54000], [1508112000000, 53920], [1508198400000, 54800], [1508284800000, 54760], [1508371200000, 52980], [1508457600000, 53840], [1508716800000, 54300], [1508803200000, 54040], [1508889600000, 53900], [1508976000000, 52400], [1509062400000, 53080], [1509321600000, 54040], [1509408000000, 55080], [1509494400000, 57220], [1509580800000, 57060], [1509667200000, 56380], [1509926400000, 56380], [1510012800000, 56100], [1510099200000, 56760], [1510185600000, 56340], [1510272000000, 56400], [1510531200000, 56380], [1510617600000, 55920], [1510704000000, 55340], [1510790400000, 55780], [1510876800000, 55820], [1511136000000, 55200], [1511222400000, 55280], [1511308800000, 55960], [1511395200000, 55300], [1511481600000, 55460], [1511740800000, 52640], [1511827200000, 53280], [1511913600000, 52600], [1512000000000, 50800], [1512086400000, 50840], [1512345600000, 51340], [1512432000000, 51260], [1512518400000, 50020], [1512604800000, 50740], [1512691200000, 52000], [1512950400000, 51780], [1513036800000, 52100], [1513123200000, 51320], [1513209600000, 51060], [1513296000000, 50620], [1513555200000, 51200], [1513641600000, 51560], [1513728000000, 50880], [1513814400000, 49140], [1513900800000, 49700], [1514246400000, 48200], [1514332800000, 49360], [1514419200000, 50960], [1514851200000, 51020], [1514937600000, 51620], [1515024000000, 51080], [1515110400000, 52120], [1515369600000, 52020], [1515456000000, 50400], [1515542400000, 48840], [1515628800000, 48240], [1515715200000, 48200], [1515974400000, 48540], [1516060800000, 50000], [1516147200000, 49620], [1516233600000, 49900], [1516320000000, 49320], [1516579200000, 48240], [1516665600000, 49160], [1516752000000, 49340], [1516838400000, 50260], [1516924800000, 50780], [1517184000000, 51220], [1517270400000, 49800], [1517356800000, 49900], [1517443200000, 49820], [1517529600000, 47700], [1517788800000, 47920], [1517875200000, 47420], [1517961600000, 45800], [1518048000000, 46000], [1518134400000, 44700], [1518393600000, 45720], [1518480000000, 47540], [1518566400000, 49000], [1518998400000, 48380], [1519084800000, 47400], [1519171200000, 47280], [1519257600000, 46760], [1519344000000, 47220], [1519603200000, 47380], [1519689600000, 47380], [1519776000000, 47060], [1519948800000, 46020], [1520208000000, 45200], [1520294400000, 47020], [1520380800000, 48620], [1520467200000, 49200], [1520553600000, 49740], [1520812800000, 49740], [1520899200000, 51660], [1520985600000, 51760], [1521072000000, 51540], [1521158400000, 51140], [1521417600000, 50740], [1521504000000, 51200], [1521590400000, 51060], [1521676800000, 51780], [1521763200000, 49720], [1522022400000, 50280], [1522108800000, 49980], [1522195200000, 48700], [1522281600000, 49040], [1522368000000, 49220], [1522627200000, 48540], [1522713600000, 48120], [1522800000000, 46920], [1522886400000, 48740], [1522972800000, 48400], [1523232000000, 49200], [1523318400000, 48880], [1523404800000, 48860], [1523491200000, 49000], [1523577600000, 49800], [1523836800000, 50340], [1523923200000, 49980], [1524009600000, 51360], [1524096000000, 52780], [1524182400000, 51620], [1524441600000, 51900], [1524528000000, 50460], [1524614400000, 50400], [1524700800000, 52140], [1524787200000, 53000], [1525046400000, 53000], [1525219200000, 53000], [1525305600000, 53000], [1525392000000, 51900], [1525737600000, 52600], [1525824000000, 50900], [1525910400000, 51600], [1525996800000, 51300], [1526256000000, 50100], [1526342400000, 49200], [1526428800000, 49850], [1526515200000, 49400], [1526601600000, 49500], [1526860800000, 50000], [1527033600000, 51800], [1527120000000, 51400], [1527206400000, 52700], [1527465600000, 52300], [1527552000000, 51300], [1527638400000, 49500], [1527724800000, 50700], [1527811200000, 51300], [1528070400000, 51100], [1528156800000, 51300], [1528329600000, 50600], [1528416000000, 49650], [1528675200000, 49900], [1528761600000, 49400], [1528934400000, 48200], [1529020800000, 47650], [1529280000000, 46600], [1529366400000, 47000], [1529452800000, 47000], [1529539200000, 47050], [1529625600000, 47250], [1529884800000, 46650], [1529971200000, 47000], [1530057600000, 47950], [1530144000000, 46800], [1530230400000, 46650], [1530489600000, 45550], [1530576000000, 46150], [1530662400000, 46250], [1530748800000, 45950], [1530835200000, 44900], [1531094400000, 45600], [1531180800000, 46300], [1531267200000, 46000], [1531353600000, 45500], [1531440000000, 46500], [1531699200000, 46050], [1531785600000, 45850], [1531872000000, 46550], [1531958400000, 46900], [1532044800000, 47450], [1532304000000, 46500], [1532390400000, 46150], [1532476800000, 46150], [1532563200000, 46900], [1532649600000, 46900], [1532908800000, 46500], [1532995200000, 46250], [1533081600000, 46550], [1533168000000, 45550], [1533254400000, 45750], [1533513600000, 45800], [1533600000000, 46700], [1533686400000, 46800], [1533772800000, 46900], [1533859200000, 45400], [1534118400000, 45050], [1534204800000, 45150], [1534377600000, 44250], [1534464000000, 44100], [1534723200000, 43850], [1534809600000, 44800], [1534896000000, 46100], [1534982400000, 46200], [1535068800000, 46150], [1535328000000, 46300], [1535414400000, 46550], [1535500800000, 46800], [1535587200000, 47650], [1535673600000, 48450], [1535932800000, 47450], [1536019200000, 47650], [1536105600000, 46600], [1536192000000, 46100], [1536278400000, 44900], [1536537600000, 45500], [1536624000000, 45050], [1536710400000, 44550], [1536796800000, 44050], [1536883200000, 45850], [1537142400000, 45150], [1537228800000, 45500], [1537315200000, 46150], [1537401600000, 47250], [1537488000000, 47400], [1538006400000, 47500], [1538092800000, 46450], [1538352000000, 46350], [1538438400000, 45700], [1538611200000, 44700], [1538697600000, 44700], [1538956800000, 44950], [1539129600000, 45300], [1539216000000, 43100], [1539302400000, 44000], [1539561600000, 43800], [1539648000000, 43600], [1539734400000, 44150], [1539820800000, 44050], [1539907200000, 43900], [1540166400000, 43550], [1540252800000, 43050], [1540339200000, 42550], [1540425600000, 41000], [1540512000000, 41000], [1540771200000, 41400], [1540857600000, 42350], [1540944000000, 42400], [1541030400000, 42150], [1541116800000, 44150], [1541376000000, 43800], [1541462400000, 43750], [1541548800000, 44000], [1541635200000, 44050], [1541721600000, 44300], [1541980800000, 45200], [1542067200000, 44500], [1542153600000, 44100], [1542240000000, 44250], [1542326400000, 44000], [1542585600000, 43650], [1542672000000, 42800], [1542758400000, 42100], [1542844800000, 42450], [1542931200000, 42400], [1543190400000, 42600], [1543276800000, 43050], [1543363200000, 43150], [1543449600000, 43150], [1543536000000, 41850], [1543795200000, 43250], [1543881600000, 42150], [1543968000000, 41450], [1544054400000, 40500], [1544140800000, 40950], [1544400000000, 40200], [1544486400000, 40250], [1544572800000, 40450], [1544659200000, 40000], [1544745600000, 38950], [1545004800000, 39150], [1545091200000, 38900], [1545177600000, 39100], [1545264000000, 38650], [1545350400000, 38650], [1545609600000, 38800], [1545782400000, 38350], [1545868800000, 38250], [1545955200000, 38700], [1546387200000, 38750], [1546473600000, 37600], [1546560000000, 37450], [1546819200000, 38750], [1546905600000, 38100], [1546992000000, 39600], [1547078400000, 39800], [1547164800000, 40500], [1547424000000, 40050], [1547510400000, 41100], [1547596800000, 41450], [1547683200000, 41950], [1547769600000, 42300], [1548028800000, 42750], [1548115200000, 42150], [1548201600000, 42000], [1548288000000, 43050], [1548374400000, 44750], [1548633600000, 45050], [1548720000000, 45500], [1548806400000, 46400], [1548892800000, 46150], [1548979200000, 46350], [1549497600000, 46200], [1549584000000, 44800], [1549843200000, 45000], [1549929600000, 46050], [1550016000000, 46200], [1550102400000, 47500], [1550188800000, 46050], [1550448000000, 46200], [1550534400000, 45950], [1550620800000, 46900], [1550707200000, 46950], [1550793600000, 47150], [1551052800000, 47350], [1551139200000, 46750], [1551225600000, 46750], [1551312000000, 45100], [1551657600000, 44850], [1551744000000, 44250], [1551830400000, 44000], [1551916800000, 44450], [1552003200000, 43800], [1552262400000, 43650], [1552348800000, 44650], [1552435200000, 43850], [1552521600000, 43850], [1552608000000, 44200], [1552867200000, 43700], [1552953600000, 43900], [1553040000000, 44050], [1553126400000, 45850], [1553212800000, 46550], [1553472000000, 45500], [1553558400000, 45250], [1553644800000, 45350], [1553731200000, 44850], [1553817600000, 44650], [1554076800000, 45050], [1554163200000, 45750], [1554249600000, 46600], [1554336000000, 46950], [1554422400000, 46850], [1554681600000, 46650], [1554768000000, 46650], [1554854400000, 46700], [1554940800000, 46250], [1555027200000, 46850], [1555286400000, 47050], [1555372800000, 47250], [1555459200000, 47050], [1555545600000, 45600], [1555632000000, 45300], [1555891200000, 45350], [1555977600000, 45200], [1556064000000, 44750], [1556150400000, 44650], [1556236800000, 44850], [1556496000000, 46150], [1556582400000, 45850], [1556755200000, 45900], [1556841600000, 45300], [1557187200000, 44850], [1557273600000, 44250], [1557360000000, 42450], [1557446400000, 42900], [1557705600000, 42650], [1557792000000, 42650], [1557878400000, 42550], [1557964800000, 41550], [1558051200000, 41200], [1558310400000, 42000], [1558396800000, 43150], [1558483200000, 43500], [1558569600000, 43850], [1558656000000, 42700], [1558915200000, 42650], [1559001600000, 42550], [1559088000000, 41800], [1559174400000, 42550], [1559260800000, 42500], [1559520000000, 43800], [1559606400000, 43450], [1559692800000, 43900], [1559865600000, 44200], [1560124800000, 44800], [1560211200000, 44850], [1560297600000, 44600], [1560384000000, 43750], [1560470400000, 44000], [1560729600000, 43900], [1560816000000, 44350], [1560902400000, 45350], [1560988800000, 45500], [1561075200000, 45700], [1561334400000, 45500], [1561420800000, 45600], [1561507200000, 45700], [1561593600000, 46500], [1561680000000, 47000], [1561939200000, 46600], [1562025600000, 46250], [1562112000000, 45400], [1562198400000, 46000], [1562284800000, 45650], [1562544000000, 44400], [1562630400000, 45100], [1562716800000, 45550], [1562803200000, 46200], [1562889600000, 46300], [1563148800000, 46450], [1563235200000, 46850], [1563321600000, 46050], [1563408000000, 46100], [1563494400000, 46800], [1563753600000, 47200], [1563840000000, 47300], [1563926400000, 46400], [1564012800000, 47200], [1564099200000, 47150], [1564358400000, 46100], [1564444800000, 46550], [1564531200000, 45350], [1564617600000, 45200], [1564704000000, 44950], [1564963200000, 43950], [1565049600000, 43500], [1565136000000, 43200], [1565222400000, 42650], [1565308800000, 43150], [1565568000000, 43700], [1565654400000, 43000], [1565740800000, 43700], [1565913600000, 43900], [1566172800000, 43600], [1566259200000, 44450], [1566345600000, 44500], [1566432000000, 44050], [1566518400000, 43950], [1566777600000, 43600], [1566864000000, 44050], [1566950400000, 44150], [1567036800000, 43400], [1567123200000, 44000], [1567382400000, 43800], [1567468800000, 43250], [1567555200000, 44100], [1567641600000, 45700], [1567728000000, 46300], [1567987200000, 46900], [1568073600000, 47000], [1568160000000, 47150], [1568592000000, 47100], [1568678400000, 46900], [1568764800000, 47700], [1568851200000, 49150], [1568937600000, 49200], [1569196800000, 49300], [1569283200000, 49500], [1569369600000, 48900], [1569456000000, 49200], [1569542400000, 48400], [1569801600000, 49050], [1569888000000, 48850], [1569974400000, 47600], [1570147200000, 48000], [1570406400000, 47750], [1570492800000, 48900], [1570665600000, 48550], [1570752000000, 49150], [1571011200000, 50000], [1571097600000, 50100], [1571184000000, 50700], [1571270400000, 50500], [1571356800000, 49900], [1571616000000, 50300], [1571702400000, 51200], [1571788800000, 51200], [1571875200000, 50700], [1571961600000, 50900], [1572220800000, 51300], [1572307200000, 51100], [1572393600000, 50400], [1572480000000, 50400], [1572566400000, 51200], [1572825600000, 52300], [1572912000000, 52700], [1572998400000, 53300], [1573084800000, 52900], [1573171200000, 52100], [1573430400000, 51600], [1573516800000, 52600], [1573603200000, 52500], [1573689600000, 52800], [1573776000000, 53700], [1574035200000, 53500], [1574121600000, 53500], [1574208000000, 52000], [1574294400000, 51000], [1574380800000, 51600], [1574640000000, 51800], [1574726400000, 51800], [1574812800000, 52200], [1574899200000, 51300], [1574985600000, 50300], [1575244800000, 50400], [1575331200000, 49900], [1575417600000, 49450], [1575504000000, 49500], [1575590400000, 50400], [1575849600000, 51200], [1575936000000, 51500], [1576022400000, 51900], [1576108800000, 53300], [1576195200000, 54700], [1576454400000, 54700], [1576540800000, 56700], [1576627200000, 56300], [1576713600000, 56000], [1576800000000, 56000], [1577059200000, 55500], [1577145600000, 55000], [1577318400000, 55400], [1577404800000, 56500], [1577664000000, 55800], [1577923200000, 55200], [1578009600000, 55500], [1578268800000, 55500], [1578355200000, 55800], [1578441600000, 56800], [1578528000000, 58600], [1578614400000, 59500], [1578873600000, 60000], [1578960000000, 60000], [1579046400000, 59000], [1579132800000, 60700], [1579219200000, 61300], [1579478400000, 62400], [1579564800000, 61400], [1579651200000, 62300], [1579737600000, 60800], [1580169600000, 58800], [1580256000000, 59100], [1580342400000, 57200], [1580428800000, 56400], [1580688000000, 57200], [1580774400000, 58900], [1580860800000, 59500], [1580947200000, 61100], [1581033600000, 60400], [1581292800000, 59700], [1581379200000, 59900], [1581465600000, 60500], [1581552000000, 60700], [1581638400000, 61800], [1581897600000, 61500], [1581984000000, 59800], [1582070400000, 60200], [1582156800000, 60000], [1582243200000, 59200], [1582502400000, 56800], [1582588800000, 57900], [1582675200000, 56500], [1582761600000, 55900], [1582848000000, 54200], [1583107200000, 55000], [1583193600000, 55400], [1583280000000, 57400], [1583366400000, 57800], [1583452800000, 56500], [1583712000000, 54200], [1583798400000, 54600], [1583884800000, 52100], [1583971200000, 50800], [1584057600000, 49950], [1584316800000, 48900], [1584403200000, 47300], [1584489600000, 45600], [1584576000000, 42950], [1584662400000, 45400], [1584921600000, 42500], [1585008000000, 46950], [1585094400000, 48650], [1585180800000, 47800], [1585267200000, 48300], [1585526400000, 47850], [1585612800000, 47750], [1585699200000, 45800], [1585785600000, 46800], [1585872000000, 47000], [1586131200000, 48700], [1586217600000, 49600], [1586304000000, 48600], [1586390400000, 49100], [1586476800000, 49250], [1586736000000, 48300], [1586822400000, 49000], [1586995200000, 49000], [1587081600000, 51400], [1587340800000, 50100], [1587427200000, 49250], [1587513600000, 49850], [1587600000000, 49850], [1587686400000, 49350], [1587945600000, 49850], [1588032000000, 50100], [1588118400000, 50000], [1588550400000, 48500], [1588723200000, 49200], [1588809600000, 48800], [1588896000000, 48800], [1589155200000, 48400], [1589241600000, 47900], [1589328000000, 48550], [1589414400000, 48000], [1589500800000, 47850], [1589760000000, 48800], [1589846400000, 50300], [1589932800000, 50000], [1590019200000, 49950], [1590105600000, 48750], [1590364800000, 48850], [1590451200000, 49250], [1590537600000, 49900], [1590624000000, 50400], [1590710400000, 50700], [1590969600000, 51200], [1591056000000, 51400], [1591142400000, 54500], [1591228800000, 54600], [1591315200000, 55500], [1591574400000, 54900], [1591660800000, 55500], [1591747200000, 55400], [1591833600000, 54300], [1591920000000, 52300], [1592179200000, 49900], [1592265600000, 52100], [1592352000000, 52200], [1592438400000, 52300], [1592524800000, 52900], [1592784000000, 52000], [1592870400000, 51400], [1592956800000, 52900], [1593043200000, 51900], [1593129600000, 53300], [1593388800000, 52400], [1593475200000, 52800], [1593561600000, 52600], [1593648000000, 52900], [1593734400000, 53600], [1593993600000, 55000], [1594080000000, 53400], [1594166400000, 53000], [1594252800000, 52800], [1594339200000, 52700], [1594598400000, 53400], [1594684800000, 53800], [1594771200000, 54700], [1594857600000, 53800], [1594944000000, 54400], [1595203200000, 54200], [1595289600000, 55300], [1595376000000, 54700], [1595462400000, 54100], [1595548800000, 54200], [1595808000000, 55600], [1595894400000, 58600], [1595980800000, 59000], [1596067200000, 59000], [1596153600000, 57900], [1596412800000, 56800], [1596499200000, 57300], [1596585600000, 56900], [1596672000000, 58000], [1596758400000, 57500], [1597017600000, 57800], [1597104000000, 58200], [1597190400000, 59000], [1597276800000, 58700], [1597363200000, 58000], [1597708800000, 58400], [1597795200000, 57800], [1597881600000, 55400], [1597968000000, 55900], [1598227200000, 56100], [1598313600000, 56400], [1598400000000, 56400], [1598486400000, 55600], [1598572800000, 55400], [1598832000000, 54000], [1598918400000, 54200], [1599004800000, 54400], [1599091200000, 56400], [1599177600000, 55600], [1599436800000, 56500], [1599523200000, 58700], [1599609600000, 58400], [1599696000000, 59200], [1599782400000, 59000], [1600041600000, 60400], [1600128000000, 61000], [1600214400000, 61000], [1600300800000, 59500], [1600387200000, 59300], [1600646400000, 59200], [1600732800000, 58200], [1600819200000, 58600], [1600905600000, 57800], [1600992000000, 57900], [1601251200000, 58200], [1601337600000, 58200], [1601856000000, 58700], [1601942400000, 59000], [1602028800000, 59900], [1602115200000, 59700], [1602460800000, 60400], [1602547200000, 60900], [1602633600000, 60900], [1602720000000, 60000], [1602806400000, 59500], [1603065600000, 60000], [1603152000000, 60900], [1603238400000, 60900], [1603324800000, 60100], [1603411200000, 60200], [1603670400000, 60400], [1603756800000, 59800], [1603843200000, 59000], [1603929600000, 58100], [1604016000000, 56600], [1604275200000, 57400], [1604361600000, 58800], [1604448000000, 58500], [1604534400000, 60300], [1604620800000, 60100], [1604880000000, 60200], [1604966400000, 60200], [1605052800000, 61300], [1605139200000, 61000], [1605225600000, 63200], [1605484800000, 66300], [1605571200000, 65700], [1605657600000, 64800], [1605744000000, 64600], [1605830400000, 64700], [1606089600000, 67500], [1606176000000, 67700], [1606262400000, 66600], [1606348800000, 68000], [1606435200000, 68200], [1606694400000, 66700], [1606780800000, 67800], [1606867200000, 69500], [1606953600000, 69700], [1607040000000, 71500], [1607299200000, 72900], [1607385600000, 71700], [1607472000000, 73900], [1607558400000, 72900], [1607644800000, 73400], [1607904000000, 73800], [1607990400000, 73800], [1608076800000, 73800], [1608163200000, 73300], [1608249600000, 73000], [1608508800000, 73000], [1608595200000, 72300], [1608681600000, 73900], [1608768000000, 77800], [1609113600000, 78700], [1609200000000, 78300], [1609286400000, 81000], [1609718400000, 83000], [1609804800000, 83900], [1609891200000, 82200], [1609977600000, 82900], [1610064000000, 88800], [1610323200000, 91000], [1610409600000, 90600], [1610496000000, 89700], [1610582400000, 89700], [1610668800000, 88000], [1610928000000, 85000], [1611014400000, 87000], [1611100800000, 87200], [1611187200000, 88100], [1611273600000, 86800], [1611532800000, 89400], [1611619200000, 86700], [1611705600000, 85600], [1611792000000, 83700], [1611878400000, 82000], [1612137600000, 83000], [1612224000000, 84400], [1612310400000, 84600], [1612396800000, 82500], [1612483200000, 83500], [1612742400000, 83000], [1612828800000, 82700], [1612915200000, 81600], [1613347200000, 84200], [1613433600000, 84900], [1613520000000, 83200], [1613606400000, 82100], [1613692800000, 82600], [1613952000000, 82200], [1614038400000, 82000], [1614124800000, 82000], [1614211200000, 85300], [1614297600000, 82500], [1614643200000, 83600], [1614729600000, 84000], [1614816000000, 82400], [1614902400000, 82100], [1615161600000, 82000], [1615248000000, 81400], [1615334400000, 80900], [1615420800000, 82000], [1615507200000, 82800], [1615766400000, 81800], [1615852800000, 82800], [1615939200000, 82300], [1616025600000, 82900], [1616112000000, 81900], [1616371200000, 82000], [1616457600000, 81800], [1616544000000, 81000], [1616630400000, 81200], [1616716800000, 81500], [1616976000000, 81600], [1617062400000, 82200], [1617148800000, 81400], [1617235200000, 82900], [1617321600000, 84800], [1617580800000, 85400], [1617667200000, 86000], [1617753600000, 85600], [1617840000000, 84700], [1617926400000, 83600], [1618185600000, 83200], [1618272000000, 84000], [1618358400000, 84000], [1618444800000, 84100], [1618531200000, 83900], [1618790400000, 83300], [1618876800000, 83900], [1618963200000, 82600], [1619049600000, 82400], [1619136000000, 82800], [1619395200000, 83500], [1619481600000, 82900], [1619568000000, 82100], [1619654400000, 81700], [1619740800000, 81500], [1620000000000, 81700], [1620086400000, 82600], [1620259200000, 82300], [1620345600000, 81900], [1620604800000, 83200], [1620691200000, 81200], [1620777600000, 80000], [1620864000000, 78500], [1620950400000, 80100], [1621209600000, 79600], [1621296000000, 79600], [1621468800000, 79500], [1621555200000, 80100], [1621814400000, 79700], [1621900800000, 79900], [1621987200000, 79800], [1622073600000, 79600], [1622160000000, 80100], [1622419200000, 80500], [1622505600000, 80600], [1622592000000, 80800], [1622678400000, 82800], [1622764800000, 82200], [1623024000000, 81900], [1623110400000, 81900], [1623196800000, 81100], [1623283200000, 81000], [1623369600000, 81000], [1623628800000, 80500], [1623715200000, 80900], [1623801600000, 81800], [1623888000000, 80900], [1623974400000, 80500], [1624233600000, 79900], [1624320000000, 80000], [1624406400000, 80100], [1624492800000, 81200], [1624579200000, 81600], [1624838400000, 81900], [1624924800000, 81000], [1625011200000, 80700], [1625097600000, 80100], [1625184000000, 80000], [1625443200000, 80400], [1625529600000, 81200], [1625616000000, 80800], [1625702400000, 79900], [1625788800000, 79400], [1626048000000, 79700], [1626134400000, 79800], [1626220800000, 79500], [1626307200000, 80600], [1626393600000, 79800], [1626652800000, 79000], [1626739200000, 79000], [1626825600000, 78500], [1626912000000, 79700], [1626998400000, 79300], [1627257600000, 78800], [1627344000000, 78500], [1627430400000, 79200], [1627516800000, 79000], [1627603200000, 78500], [1627862400000, 79300], [1627948800000, 81400], [1628035200000, 82900], [1628121600000, 82100], [1628208000000, 81500], [1628467200000, 81500], [1628553600000, 80200], [1628640000000, 78500], [1628726400000, 77000], [1628812800000, 74400], [1629158400000, 74200], [1629244800000, 73900], [1629331200000, 73100], [1629417600000, 72700], [1629676800000, 73300], [1629763200000, 75600], [1629849600000, 75700], [1629936000000, 74600], [1630022400000, 74300], [1630281600000, 74600], [1630368000000, 76700], [1630454400000, 76800], [1630540800000, 76000], [1630627200000, 76600], [1630886400000, 77300], [1630972800000, 76100], [1631059200000, 76300], [1631145600000, 75300], [1631232000000, 75300], [1631491200000, 76300], [1631577600000, 76600], [1631664000000, 77000], [1631750400000, 76100], [1631836800000, 77200], [1632355200000, 77400], [1632441600000, 77300], [1632700800000, 77700], [1632787200000, 76300], [1632873600000, 74100], [1632960000000, 74100], [1633046400000, 73200], [1633392000000, 72200], [1633478400000, 71300], [1633564800000, 71600], [1633651200000, 71500], [1633996800000, 69000], [1634083200000, 68800], [1634169600000, 69400], [1634256000000, 70100], [1634515200000, 70200], [1634601600000, 70600], [1634688000000, 70300], [1634774400000, 70200], [1634860800000, 70400], [1635120000000, 70200], [1635206400000, 71100], [1635292800000, 70100], [1635379200000, 70700], [1635465600000, 69800], [1635724800000, 69900], [1635811200000, 71500], [1635897600000, 70400], [1635984000000, 70600], [1636070400000, 70200], [1636329600000, 70600], [1636416000000, 70500], [1636502400000, 70200], [1636588800000, 69900], [1636675200000, 70600], [1636934400000, 71400], [1637020800000, 71300], [1637107200000, 70700], [1637193600000, 70200], [1637280000000, 71200], [1637539200000, 74900], [1637625600000, 75300], [1637712000000, 74800], [1637798400000, 73700], [1637884800000, 72300], [1638144000000, 72300], [1638230400000, 71300], [1638316800000, 74400], [1638403200000, 75800], [1638489600000, 75600], [1638748800000, 76300], [1638835200000, 77400], [1638921600000, 77400], [1639008000000, 78200], [1639094400000, 76900], [1639353600000, 76800], [1639440000000, 77000], [1639526400000, 77600], [1639612800000, 77800], [1639699200000, 78000], [1639958400000, 77100], [1640044800000, 78100], [1640131200000, 79400], [1640217600000, 79900], [1640304000000, 80500], [1640563200000, 80200], [1640649600000, 80300], [1640736000000, 78800], [1640822400000, 78300], [1641168000000, 78600], [1641254400000, 78700], [1641340800000, 77400], [1641427200000, 76900], [1641513600000, 78300], [1641772800000, 78000], [1641859200000, 78900], [1641945600000, 78900], [1642032000000, 77900], [1642118400000, 77300], [1642377600000, 77500], [1642464000000, 77000], [1642550400000, 76300], [1642636800000, 76500], [1642723200000, 75600], [1642982400000, 75100], [1643068800000, 74000], [1643155200000, 73300], [1643241600000, 71300], [1643328000000, 73300], [1643846400000, 73300], [1643932800000, 74000], [1644192000000, 73000], [1644278400000, 73500], [1644364800000, 74700], [1644451200000, 75400], [1644537600000, 74900], [1644796800000, 73700], [1644883200000, 73700], [1644969600000, 74800], [1645056000000, 75000], [1645142400000, 74300], [1645401600000, 74200], [1645488000000, 73400], [1645574400000, 73000], [1645660800000, 71500], [1645747200000, 71900], [1646006400000, 72100], [1646179200000, 71700], [1646265600000, 72900], [1646352000000, 71500], [1646611200000, 70100], [1646697600000, 69500], [1646870400000, 71200], [1646956800000, 70000], [1647216000000, 70200], [1647302400000, 69500], [1647388800000, 70400], [1647475200000, 71200], [1647561600000, 70700], [1647820800000, 69900], [1647907200000, 70300], [1647993600000, 70500], [1648080000000, 69800], [1648166400000, 69800], [1648425600000, 69700], [1648512000000, 70200], [1648598400000, 69900], [1648684800000, 69600], [1648771200000, 69100], [1649030400000, 69300], [1649116800000, 69200], [1649203200000, 68500], [1649289600000, 68000], [1649376000000, 67800], [1649635200000, 67900], [1649721600000, 67000], [1649808000000, 68700], [1649894400000, 67500], [1649980800000, 66600], [1650240000000, 66700], [1650326400000, 67300], [1650412800000, 67400], [1650499200000, 67700], [1650585600000, 67000], [1650844800000, 66300], [1650931200000, 66100], [1651017600000, 65000], [1651104000000, 64800], [1651190400000, 67400], [1651449600000, 67300], [1651536000000, 67500], [1651622400000, 67900], [1651795200000, 66500], [1652054400000, 66100], [1652140800000, 65700], [1652227200000, 65700], [1652313600000, 64900], [1652400000000, 66500], [1652659200000, 66300], [1652745600000, 67600], [1652832000000, 68100], [1652918400000, 67500], [1653004800000, 68000], [1653264000000, 67900], [1653350400000, 66500], [1653436800000, 66400], [1653523200000, 65900], [1653609600000, 66500], [1653868800000, 67700], [1653955200000, 67400], [1654128000000, 66700], [1654214400000, 66800], [1654560000000, 65500], [1654646400000, 65300], [1654732800000, 65200], [1654819200000, 63800], [1655078400000, 62100], [1655164800000, 61900], [1655251200000, 60700], [1655337600000, 60900], [1655424000000, 59800], [1655683200000, 58700], [1655769600000, 58500], [1655856000000, 57600], [1655942400000, 57400], [1656028800000, 58400], [1656288000000, 58800], [1656374400000, 59400], [1656460800000, 58000], [1656547200000, 57000], [1656633600000, 56200], [1656892800000, 57100], [1656979200000, 57200], [1657065600000, 56400], [1657152000000, 58200], [1657238400000, 58700], [1657497600000, 58800], [1657584000000, 58100], [1657670400000, 58000], [1657756800000, 57500], [1657843200000, 60000], [1658102400000, 61900], [1658188800000, 60900], [1658275200000, 60500], [1658361600000, 61800], [1658448000000, 61300], [1658707200000, 61100], [1658793600000, 61700], [1658880000000, 61800], [1658966400000, 61900], [1659052800000, 61400], [1659312000000, 61300], [1659398400000, 61700], [1659484800000, 61300], [1659571200000, 61500], [1659657600000, 61500], [1659916800000, 60800], [1660003200000, 60000], [1660089600000, 59100], [1660176000000, 59900], [1660262400000, 60200], [1660608000000, 61000], [1660694400000, 60400], [1660780800000, 61500], [1660867200000, 60900], [1661126400000, 60000], [1661212800000, 59100], [1661299200000, 59000], [1661385600000, 59700], [1661472000000, 60000], [1661731200000, 58600], [1661817600000, 58800], [1661904000000, 59700], [1661990400000, 58400], [1662076800000, 57500], [1662336000000, 57100], [1662422400000, 57100], [1662508800000, 56000], [1662595200000, 55600], [1663027200000, 58100], [1663113600000, 56800], [1663200000000, 56000], [1663286400000, 56200], [1663545600000, 56400], [1663632000000, 55800], [1663718400000, 55300], [1663804800000, 54400], [1663891200000, 54500], [1664150400000, 53900], [1664236800000, 54200], [1664323200000, 52900], [1664409600000, 52600], [1664496000000, 53100], [1664841600000, 55200], [1664928000000, 56000], [1665014400000, 56300], [1665100800000, 56200], [1665446400000, 55400], [1665532800000, 55800], [1665619200000, 55200], [1665705600000, 56300], [1665964800000, 56600], [1666051200000, 56500], [1666137600000, 55800], [1666224000000, 55500], [1666310400000, 55900], [1666569600000, 57500], [1666656000000, 57700], [1666742400000, 59400], [1666828800000, 59500], [1666915200000, 57300], [1667174400000, 59400], [1667260800000, 60000], [1667347200000, 59600], [1667433600000, 59200], [1667520000000, 59400], [1667779200000, 60200], [1667865600000, 61800], [1667952000000, 62000], [1668038400000, 60400], [1668124800000, 62900], [1668384000000, 61900], [1668470400000, 62400], [1668556800000, 62700], [1668643200000, 61400], [1668729600000, 61800], [1668988800000, 61400], [1669075200000, 60600], [1669161600000, 61000], [1669248000000, 61400], [1669334400000, 61000], [1669593600000, 60100], [1669680000000, 60600], [1669766400000, 62200], [1669852800000, 62600], [1669939200000, 60400], [1670198400000, 60300], [1670284800000, 59200], [1670371200000, 58900], [1670457600000, 59200], [1670544000000, 60400], [1670803200000, 59500], [1670889600000, 59700], [1670976000000, 60500], [1671062400000, 59300], [1671148800000, 59500], [1671408000000, 59500], [1671494400000, 58600], [1671580800000, 58000], [1671667200000, 59100], [1671753600000, 58100], [1672012800000, 57900], [1672099200000, 58100], [1672185600000, 56600], [1672272000000, 55300], [1672617600000, 55500], [1672704000000, 55400], [1672790400000, 57800], [1672876800000, 58200], [1672963200000, 59000], [1673222400000, 60700], [1673308800000, 60400], [1673395200000, 60500], [1673481600000, 60500], [1673568000000, 60800], [1673827200000, 61100], [1673913600000, 61000], [1674000000000, 60400], [1674086400000, 61500], [1674172800000, 61800], [1674604800000, 63400], [1674691200000, 63900], [1674777600000, 64600], [1675036800000, 63300], [1675123200000, 61000], [1675209600000, 61800], [1675296000000, 63500], [1675382400000, 63800], [1675641600000, 61600], [1675728000000, 61900], [1675814400000, 63100], [1675900800000, 63000], [1675987200000, 62800], [1676246400000, 62900], [1676332800000, 63200], [1676419200000, 62200], [1676505600000, 63700], [1676592000000, 62600], [1676851200000, 62700], [1676937600000, 62100], [1677024000000, 61100], [1677110400000, 62000], [1677196800000, 61300], [1677456000000, 60500], [1677542400000, 60600], [1677715200000, 60800], [1677801600000, 60500], [1678060800000, 61500], [1678147200000, 60700], [1678233600000, 60300], [1678320000000, 60100], [1678406400000, 59500], [1678665600000, 60000], [1678752000000, 59000], [1678838400000, 59800], [1678924800000, 59900], [1679011200000, 61300], [1679270400000, 60200], [1679356800000, 60300], [1679443200000, 61100], [1679529600000, 62300], [1679616000000, 63000], [1679875200000, 62100], [1679961600000, 62900], [1680048000000, 62700], [1680134400000, 63200], [1680220800000, 64000], [1680480000000, 63100], [1680566400000, 63600], [1680652800000, 63900], [1680739200000, 62300], [1680825600000, 65000], [1681084800000, 65700], [1681171200000, 65900], [1681257600000, 66000], [1681344000000, 66100], [1681430400000, 65100], [1681689600000, 65300], [1681776000000, 65600], [1681862400000, 65500], [1681948800000, 65300], [1682035200000, 65700], [1682294400000, 65200], [1682380800000, 63600], [1682467200000, 64100], [1682553600000, 64600], [1682640000000, 65500], [1682985600000, 65700], [1683072000000, 65400], [1683158400000, 65100], [1683504000000, 65900], [1683590400000, 65300], [1683676800000, 64600], [1683763200000, 64200], [1683849600000, 64100], [1684108800000, 64500], [1684195200000, 65400], [1684281600000, 65000], [1684368000000, 66200], [1684454400000, 68400], [1684713600000, 68500], [1684800000000, 68400], [1684886400000, 68500], [1684972800000, 68800], [1685059200000, 70300], [1685404800000, 72300], [1685491200000, 71400], [1685577600000, 70900], [1685664000000, 72200], [1685923200000, 71700], [1686096000000, 71000], [1686182400000, 70900], [1686268800000, 72000], [1686528000000, 71000], [1686614400000, 72000], [1686700800000, 71900], [1686787200000, 71500], [1686873600000, 71800], [1687132800000, 71200], [1687219200000, 71400], [1687305600000, 70500], [1687392000000, 71300], [1687478400000, 71600], [1687737600000, 72400], [1687824000000, 72600], [1687910400000, 72700], [1687996800000, 72400], [1688083200000, 72200], [1688342400000, 73000], [1688428800000, 73000], [1688515200000, 72000], [1688601600000, 71600], [1688688000000, 69900], [1688947200000, 69500], [1689033600000, 71500], [1689120000000, 71900], [1689206400000, 71900], [1689292800000, 73400], [1689552000000, 73300], [1689638400000, 72000], [1689724800000, 71700], [1689811200000, 71000], [1689897600000, 70300], [1690156800000, 70400], [1690243200000, 70000], [1690329600000, 69800], [1690416000000, 71700], [1690502400000, 70600], [1690761600000, 69800], [1690848000000, 71100], [1690934400000, 69900], [1691020800000, 68800], [1691107200000, 68300], [1691366400000, 68500], [1691452800000, 68000],];

        // 현재 날짜 기준 데이터 필터링
        var currentDate = new Date();
        var threeMonthsAgo_M3 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, currentDate.getDate());
        var threeMonthsAgo_M6 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 6, currentDate.getDate());
        var threeMonthsAgo_Y1 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 12, currentDate.getDate());
        var threeMonthsAgo_Y3 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 36, currentDate.getDate());
        var threeMonthsAgo_Y10 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 120, currentDate.getDate());

        function getCommonXAxisOptions() {
            return {
                type: 'datetime',
                gridLineWidth: 0,
                lineWidth: 0,
                tickWidth: 0,
                lineColor: '#98ACD0',
                lineWidth: 1,
                labels: {
                    formatter: function () {
                        return Highcharts.dateFormat('%m.%d', this.value);
                    },
                },
                crosshair: {
                    width: 1,
                    color: '#107070',
                    dashStyle: 'Dot'
                }
            }
        }
        var xAxisOptions_M3 = Object.assign({}, getCommonXAxisOptions(), {
            min: threeMonthsAgo_M3.getTime()
        });
        var xAxisOptions_M6 = Object.assign({}, getCommonXAxisOptions(), {
            min: threeMonthsAgo_M6.getTime()
        });
        var xAxisOptions_Y1 = Object.assign({}, getCommonXAxisOptions(), {
            labels: {
                formatter: function () {
                    return Highcharts.dateFormat('%Y.%m', this.value);
                }
            },
            min: threeMonthsAgo_Y1.getTime()
        });
        var xAxisOptions_Y3 = Object.assign({}, getCommonXAxisOptions(), {
            labels: {
                formatter: function () {
                    return Highcharts.dateFormat('%Y.%m', this.value);
                }
            },
            min: threeMonthsAgo_Y3.getTime()
        });
        var xAxisOptions_Y10 = Object.assign({}, getCommonXAxisOptions(), {
            labels: {
                formatter: function () {
                    return Highcharts.dateFormat('%Y', this.value);
                }
            },
            min: threeMonthsAgo_Y10.getTime()
        });

        // 캔들 + 선 차트 생성 (3개월)
        var chart_M3 = Highcharts.stockChart('containeroutline1_2_M3', Object.assign({}, chartOptions, { xAxis: xAxisOptions_M3 }));
        chart_M3.series[0].setData(chart_value); // 캔들 차트
        chart_M3.series[1].setData([]); // 주가 선차트
        chart_M3.series[1].name = '종가'; // 라벨 변경

        // 캔들 + 선 차트 생성 (6개월) 
        window.addEventListener('load', () => {
            setTimeout(() => {
                var chart_M6 = Highcharts.stockChart('containeroutline1_2_M6', Object.assign({}, chartOptions, { xAxis: xAxisOptions_M6 }));
                chart_M6.series[0].setData(chart_value); // 캔들 차트
                chart_M6.series[1].setData([]); // 주가 선차트
                chart_M6.series[1].name = '종가'; // 라벨 변경
            }, 1000); // 1초 후에 하이차트를 랜더링합니다.
        });

        // 선 차트 생성 (1년)
        window.addEventListener('load', () => {
            setTimeout(() => {
                var chart_Y1 = Highcharts.stockChart('containeroutline1_2_Y1', Object.assign({}, chartOptions, { xAxis: xAxisOptions_Y1 }));
                chart_Y1.series[0].setData([]); // 캔들 차트
                chart_Y1.series[1].setData(chart_value5); // 주가 선차트
            }, 1000); // 1초 후에 하이차트를 랜더링합니다.
        });

        // 선 차트 생성 (3년)
        window.addEventListener('load', () => {
            setTimeout(() => {
                var chart_Y3 = Highcharts.stockChart('containeroutline1_2_Y3', Object.assign({}, chartOptions, { xAxis: xAxisOptions_Y3 }));
                chart_Y3.series[0].setData([]); // 캔들 차트
                chart_Y3.series[1].setData(chart_value5); // 주가 선차트
            }, 1000); // 1초 후에 하이차트를 랜더링합니다.
        });

        // 선 차트 생성 (10년)
        window.addEventListener('load', () => {
            setTimeout(() => {
                var chart_Y10 = Highcharts.stockChart('containeroutline1_2_Y10', Object.assign({}, chartOptions, { xAxis: xAxisOptions_Y10 }));
                chart_Y10.series[0].setData([]); // 캔들 차트
                chart_Y10.series[1].setData(chart_value5); // 주가 선차트
            }, 1000); // 1초 후에 하이차트를 랜더링합니다.
        });
    }

    // 수급분석 차트
    if ($('#supply_chart01').length) {
        var supply_value01 = [
            { x: 1698624000000, y: -28859, 비율: -0.01 }, { x: 1698710400000, y: -24998, 비율: -0.01 }, { x: 1698796800000, y: 3669, 비율: 0.00 }, { x: 1698883200000, y: 196972, 비율: 0.05 }, { x: 1698969600000, y: 87572, 비율: 0.02 }, { x: 1699228800000, y: 35459, 비율: 0.01 }, { x: 1699315200000, y: 290788, 비율: 0.07 }, { x: 1699401600000, y: -9259, 비율: -0.00 }, { x: 1699488000000, y: 150484, 비율: 0.04 }, { x: 1699574400000, y: 41917, 비율: 0.01 }
        ];

        Highcharts.chart('supply_chart01', {

            chart: {
                chart: {
                    type: 'column'
                },
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,
                // allButtonsEnabled: true,                
                // selected: 0,                
            },

            legend: {
                enabled: false,
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                useHTML: true,
                xDateFormat: '%Y.%m.%d',                
                style: {
                    fontWeight: 'bold',
                    fontSize: '13px',
                    color: '#363F4B',
                },
                shadow: false,
                split: false,
                shared: true,
                crosshairs: true,                
            },

            rangeSelector: {
                selected: 1
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            title: {
                text: "외국인",
                align: 'left',
                verticalAlign: 'top',
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            xAxis: {
                type: 'datetime',
                visible: true,
                tickWidth: 0,                
                crosshair: true,
                labels: {
                    enabled: false,
                    // formatter: function () {
                    //     return Highcharts.dateFormat('%y.%m.%d', this.value);
                    // },
                    // style: {
                    //     color: '#6a727b',
                    //     fontSize: '12px'
                    // },
                },
                ordinal: true,     
            },

            yAxis: {
                visible: true,
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
                plotLines: [{
                    color: '#DBDFED',
                    width: 1,
                    value: 0
                }],
            },

            series: [{
                type: 'column',                
                data : supply_value01,          
                tooltip : {
                    pointFormat: '거래량: {point.y} <br> 비율: {point.비율}%'
                }                
            }],
            plotOptions: {                
                series: {                    
                    pointWidth: 32,    
                                    
                },
                column: {
                    minPointLength: 5,                    
                    dataLabels: {
                        enabled: true,
                        crop: false,                                                
                        overflow: 'allow', // 여기를 'allow'로 수정
                        format: '{point.y:,.2f}',                                   
                    },
                }
            },
        });
    }
    if ($('#supply_chart02').length) {
        var supply_value02 = [
            {x: 1376215600000, y:-1572, 비율: 15},          
            {x: 1376265600000, y:-572, 비율: 5},          
            {x: 1376352000000, y:0, 비율: 100},          
            {x: 1376438400000, y:2512, 비율: 15},          
            {x: 1376611200000, y:2572, 비율: 25},          
            {x: 1376870400000, y:2672, 비율: 35},          
            {x: 1376956800000, y:6592, 비율: 75},          
            {x: 1377043200000, y:3530, 비율: 35},          
            {x: 1377129600000, y:-200, 비율: 25},          
            {x: 1377216000000, y:-1560, 비율: 5},          
        ];

        Highcharts.chart('supply_chart02', {

            chart: {
                chart: {
                    type: 'column'
                },
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },                
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,
                // allButtonsEnabled: true,                
                // selected: 0,                
            },

            legend: {
                enabled: false,
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                useHTML: true,
                xDateFormat: '%Y.%m.%d',                
                style: {
                    fontWeight: 'bold',
                    fontSize: '13px',
                    color: '#363F4B',
                },
                shadow: false,
                split: false,
                shared: true,
                crosshairs: true,                
            },

            rangeSelector: {
                selected: 1
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            title: {
                text: "기관",
                align: 'left',
                verticalAlign: 'top',
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            xAxis: {
                type: 'datetime',
                visible: true,
                tickWidth: 0,                
                crosshair: true,
                labels: {
                    enabled: false,
                    // formatter: function () {
                    //     return Highcharts.dateFormat('%y.%m.%d', this.value);
                    // },
                    // style: {
                    //     color: '#6a727b',
                    //     fontSize: '12px'
                    // },
                },
                ordinal: true,     
            },

            yAxis: {
                visible: true,
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },
                plotLines: [{
                    color: '#DBDFED',
                    width: 1,
                    value: 0
                }],
            },

            series: [{
                type: 'column',                
                data : supply_value02,          
                tooltip : {
                    pointFormat: '거래량: {point.y} <br> 비율: {point.비율}%'
                }                
            }],
            plotOptions: {                
                series: {                    
                    pointWidth: 32,    
                                    
                },
                column: {
                    minPointLength: 5,                    
                    dataLabels: {
                        enabled: true,
                        crop: false,                        
                        color: '#939393',
                        overflow: 'allow', // 여기를 'allow'로 수정
                        format: '{point.y:,.2f}',                                   
                    },
                }
            },
        });
    }

    // 이익증가 미반영
    if ($('#containersummary1').length) {
        Highcharts.chart('containersummary1', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'containersummary1',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                marginTop: 20,
                marginBottom: 70,

                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#3655d6", "#656d7e", "#bdc8d8"],

            title: {
                style: {
                    fontSize: '0',
                },
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 달러</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: {
                labels: {
                    format: '{value} 달러',
                    style: {
                        color: ["#656d7e"],
                    },
                },
                title: {
                    text: null,
                }
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '주당순이익',
                data: [42, 52, 57, 69, 97, 11]
            }, {
                name: '주가',
                type: 'line',
                data: [72, 32, 37, 69, 27, 31]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    if ($('#containersummary2').length) {
        Highcharts.chart('containersummary2', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'containersummary2',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                marginTop: 20,
                marginBottom: 70,

                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#3655d6", "#656d7e", "#bdc8d8"],

            title: {
                style: {
                    fontSize: '0',
                },
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 달러</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: {
                labels: {
                    format: '{value} 달러',
                    style: {
                        color: ["#656d7e"],
                    },
                },
                title: {
                    text: null,
                }
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '주당순이익',
                data: [42, 52, 57, 69, 97, 11]
            }, {
                name: '주가',
                type: 'line',
                data: [72, 32, 37, 69, 27, 31]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }

    // 그레이엄 만족형
    if ($('#containersummary_gra1').length) {
        Highcharts.chart('containersummary_gra1', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'containersummary_gra1',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                marginTop: 20,
                marginBottom: 70,

                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#3655d6", "#656d7e", "#bdc8d8"],

            title: {
                style: {
                    fontSize: '0',
                },
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: {
                labels: {
                    format: '{value} 억',
                    style: {
                        color: ["#656d7e"],
                    },
                },
                title: {
                    text: null,
                }
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '순운전',
                data: [42, 52, 57, 69, 97, 11]
            }, {
                name: '그레이엄매수가',
                data: [142, 152, 257, 269, 397, 311]
            }, {
                name: '시가총액',
                data: [421, 521, 571, 691, 971, 111]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }
    if ($('#containersummary_gra2').length) {
        Highcharts.chart('containersummary_gra2', {
            chart: {
                type: 'line',
                zoomType: 'xy',
                renderTo: 'containersummary_gra2',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Lato', 'Noto Sans KR'"
                },
                marginTop: 20,
                marginBottom: 70,

                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false,
            },

            colors: ["#3655d6", "#656d7e", "#bdc8d8"],

            title: {
                style: {
                    fontSize: '0',
                },
            },

            tooltip: {
                shared: true,
                pointFormat: '<span style="color:{series.color}">{series.name} : <b>{point.y:,.0f} 억</b><br/>'
            },

            xAxis: [{
                categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
                crosshair: true
            }],

            yAxis: {
                labels: {
                    format: '{value} 억',
                    style: {
                        color: ["#656d7e"],
                    },
                },
                title: {
                    text: null,
                }
            },

            credits: {
                enabled: false
            },

            exporting: {
                enabled: false
            },

            series: [{
                name: '순운전',
                data: [42, 52, 57, 69, 97, 11]
            }, {
                name: '그레이엄매수가',
                data: [142, 152, 257, 269, 397, 311]
            }, {
                name: '시가총액',
                data: [421, 521, 571, 691, 971, 111]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                }
            },
        });
    }

    // ROE & PBR 매트릭스 scatter 차트
    if ($('#scatterchart_01').length) {
        Highcharts.chart('scatterchart_01', {
            chart: {
                type: 'scatter',
            },
            // colors: ["#3c55ce"],
            title: {
                text: null,
            },
            tooltip: {
                shared: true,
                headerFormat: '<b style="color:#656d7e">{series.name}</b><br>',
                pointFormat: '<span style="color:#656d7e">PBR={point.x}배, ROE={point.y}%</span>'
            },
            xAxis: {
                enabled: true,
                title: {
                    text: "ROE",
                },
                startOnTick: true,
                endOnTick: true,
                showLastLabel: true
            },
            yAxis: {
                title: {
                    text: "PBR",
                },
            },
            exporting: {
                enabled: false
            },
            credits: {
                enabled: false
            },
            legend: {
                enabled: false
            },
            series: [{
                name: '삼성전자',
                data: [[234.0, 135.6]],
            }, {
                name: '카카오',
                data: [[274.0, 165.6]],
            }, {
                name: '쿠팡',
                data: [[324.0, 425.6]],
            }, {
                name: '네이버',
                data: [[354.0, 625.6]],
            }, {
                name: '카카오',
                data: [[284.0, 185.6]],
            }, {
                name: '쿠팡',
                data: [[344.0, 445.6]],
            }, {
                name: '네이버',
                data: [[364.0, 645.6]],
            }, {
                name: '쿠팡',
                data: [[364.0, 435.6]],
            }, {
                name: '네이버',
                data: [[364.0, 635.6]],
            }, {
                name: '카카오',
                data: [[294.0, 195.6]],
            }, {
                name: '쿠팡',
                data: [[354.0, 455.6]],
            }, {
                name: '네이버',
                data: [[374.0, 655.6]],
            }],
            plotOptions: {
                scatter: {
                    marker: {
                        radius: 5,
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: 'rgb(100,100,100)'
                            }
                        }
                    },
                    states: {
                        hover: {
                            marker: {
                                enabled: false
                            }
                        }
                    },
                }
            },
        });
    }

    //재무분석 개요 탭 캔들 차트    
    if ($('#containeroutline1_2_M3').length) {
        // 현재 화면 너비를 가져옵니다.
        var screenWidth = window.innerWidth;
        // Highcharts yAxis 레이블 공통 설정
        var commonLabels = {
            formatter: function () {
                return this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            },
            align: 'left'
        };

        // 모바일 디바이스 설정
        var mobileLabels = Object.assign({}, commonLabels, {
            style: {
                fontSize: 0,
            }
        });
        // PC 웹 디바이스 설정
        var pcLabels = Object.assign({}, commonLabels, {
            style: {
                fontSize: 10,
            }
        });

        var mobileLineWidth = 0;
        var pcLineWidth = 1;

        // 미디어 쿼리 조건을 확인하여 해당 Highcharts 설정을 선택합니다.
        var yAxisLabels;
        if (screenWidth >= 320 && screenWidth <= 768) {
            // 모바일 디바이스인 경우            
            yAxisLabels = mobileLabels;
            mobileLineWidth = 0;
        } else {
            // PC 웹 디바이스인 경우            
            yAxisLabels = pcLabels;
            pcLineWidth = 1;
        }

        // Highcharts 차트 설정
        var chartOptions = {
            chart: {
                panning: {
                    enabled: true,
                    type: 'x'
                },
                followTouchMove: true,
                events: {
                    load: function () {
                        // 차트가 로드될 때 실행할 작업
                    }
                },
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false,                
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false,                                      
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,                   
            },

            legend: {
                enabled: true                
            },
			
            title: {
                text: null
            },

            credits: {
                enabled: false
            },    

            lang: {
                noData: "해당 데이터가 없습니다",
            },                   

            exporting: {
                enabled: false,
            },

            tooltip: {
                shadow: false,
                split: false,
                shared: true,
                borderColor: "#98ACD0",
                xDateFormat: '%Y.%m.%d',
                valueSuffix: ' 원',                    
            },

            colors: ["#AA79E2", "#fc4f4f", "#66C33C"],

            xAxis: [{
                // 아래 함수로 정의
            }],
            yAxis: {
                title: null,
                lineColor: '#98ACD0',
                lineWidth: screenWidth <= 768 ? mobileLineWidth : pcLineWidth, // 모바일 및 PC에 따라 lineWidth 조절
                labels: yAxisLabels,
                showFirstLabel: false,
                showLastLabel: true,
            },
            series: [
                {
                    type: 'candlestick',
                    name: '일봉',
                    data: chart_value,
                    showInLegend: false,
                    dataGrouping: {
                        enabled: false
                    },
                    tooltip: {
                        useHTML: true,
                        headerFormat: '<span style="display: block; border-bottom: 1px solid #c8c8c8; padding-bottom: 3px; margin-bottom: 5px;"><b>{point.x:%Y, %m/%d}</b></span> </br>',
                        pointFormat: '<b>시가 : {point.open}<br/>고가 : {point.high}<br/>저가 : {point.low}<br/>종가: {point.close}<br/></b>',
                    },
                    zIndex: 1
                },
                {
                    type: 'line',
                    name: '주가',
                    data: chart_value5,
                    showInLegend: false,
                    dataGrouping: {
                        enabled: false
                    },
                    tooltip: {
                        useHTML: true,
                        headerFormat: '<span style="display: block; border-bottom: 1px solid #c8c8c8; padding-bottom: 3px; margin-bottom: 5px;"><b>{point.x:%Y,%m/%d}</b></span>',
                        pointFormat: '</br><b>{series.name} : {point.y:,.0f} 원</b></span>',
                    },
                }
            ],
            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                        symbol: "circle",
                    },
                    groupPadding: 0.3
                },
            },
        };
        var chart_value = [[1376006400000, 24580, 24820, 24400, 24600], [1376265600000, 24600, 24960, 24500, 24640], [1376352000000, 24880, 25800, 24840, 25800], [1376438400000, 25780, 26000, 25700, 26000], [1376611200000, 25720, 26020, 25640, 25900], [1376870400000, 25720, 25920, 25600, 25720], [1376956800000, 25920, 26100, 25380, 25380], [1377043200000, 25300, 25640, 25120, 25120], [1377129600000, 25000, 25340, 24900, 25100], [1377216000000, 25600, 26000, 25420, 25900], [1377475200000, 26020, 26100, 25920, 26000], [1377561600000, 26140, 26180, 25900, 26080], [1377648000000, 25680, 26200, 25680, 26180], [1377734400000, 26340, 26960, 26280, 26880], [1377820800000, 27200, 27360, 27020, 27360], [1378080000000, 27360, 27420, 27000, 27020], [1378166400000, 27280, 27280, 26520, 26740], [1378252800000, 26600, 27080, 26420, 26800], [1378339200000, 27400, 27420, 27160, 27300], [1378425600000, 27400, 27500, 27160, 27380], [1378684800000, 27420, 27500, 27260, 27460], [1378771200000, 27380, 27920, 27360, 27920], [1378857600000, 27960, 28040, 27700, 28040], [1378944000000, 28100, 28480, 27900, 28200], [1379030400000, 28180, 28200, 27920, 28120], [1379289600000, 28460, 28500, 28220, 28500], [1379376000000, 28400, 28400, 27620, 27720], [1379894400000, 27300, 27620, 27060, 27200], [1379980800000, 26840, 27580, 26760, 27460], [1380067200000, 27340, 27480, 27020, 27280], [1380153600000, 27280, 27440, 27120, 27440], [1380240000000, 27500, 27540, 27260, 27320], [1380499200000, 27320, 27640, 27200, 27340], [1380585600000, 27600, 27660, 27200, 27640], [1380672000000, 27960, 28500, 27800, 28360], [1380844800000, 28760, 28840, 28280, 28360], [1381104000000, 28740, 28740, 28500, 28720], [1381190400000, 28340, 28660, 28340, 28600], [1381363200000, 28420, 28640, 28420, 28600], [1381449600000, 28800, 28940, 28720, 28860], [1381708800000, 28960, 28980, 28760, 28760], [1381795200000, 29000, 29140, 28900, 29140], [1381881600000, 29380, 29380, 28900, 29000], [1381968000000, 29200, 29360, 29080, 29260], [1382054400000, 29440, 29500, 29260, 29440], [1382313600000, 29500, 29780, 29080, 29280], [1382400000000, 29200, 29200, 28680, 29100], [1382486400000, 29280, 29280, 28720, 28840], [1382572800000, 28620, 28980, 28580, 28980], [1382659200000, 29000, 29040, 28660, 28980], [1382918400000, 29300, 29700, 29160, 29640], [1383004800000, 29800, 29800, 29560, 29800], [1383091200000, 29700, 30000, 29680, 30000], [1383177600000, 29960, 30040, 29300, 29300], [1383264000000, 29800, 30000, 29360, 30000], [1383523200000, 29840, 30040, 29780, 29980], [1383609600000, 30040, 30040, 29440, 29700], [1383696000000, 29960, 29960, 28980, 29020], [1383782400000, 29020, 29080, 28500, 28740], [1383868800000, 28220, 28560, 28140, 28200], [1384128000000, 28500, 28680, 28180, 28560], [1384214400000, 28800, 29320, 28720, 29120], [1384300800000, 28900, 28980, 28380, 28380], [1384387200000, 29100, 29100, 28480, 28480], [1384473600000, 28680, 29240, 28640, 29240], [1384732800000, 29400, 29520, 29300, 29480], [1384819200000, 29660, 29780, 29540, 29780], [1384905600000, 29460, 29740, 29280, 29400], [1384992000000, 29440, 29440, 28640, 28800], [1385078400000, 28820, 29120, 28620, 29000], [1385337600000, 29020, 29440, 29020, 29300], [1385424000000, 29160, 29580, 29100, 29580], [1385510400000, 29340, 29520, 29200, 29400], [1385596800000, 29600, 29880, 29580, 29880], [1385683200000, 29980, 29980, 29700, 29880], [1385942400000, 30000, 30060, 29340, 29340], [1386028800000, 29280, 29560, 29140, 29220], [1386115200000, 29000, 29060, 28620, 28640], [1386201600000, 28660, 28920, 28440, 28800], [1386288000000, 29080, 29080, 28560, 28560], [1386547200000, 28800, 29080, 28800, 29080], [1386633600000, 28820, 29020, 28620, 28800], [1386720000000, 28520, 28880, 28320, 28400], [1386806400000, 27920, 28200, 27920, 28200], [1386892800000, 28200, 28220, 27800, 27800], [1387152000000, 27820, 28080, 27660, 28000], [1387238400000, 28340, 28340, 27860, 27900], [1387324800000, 28100, 28200, 27880, 28020], [1387411200000, 28360, 28680, 28360, 28540], [1387497600000, 28260, 28540, 28260, 28540], [1387756800000, 28740, 28760, 28580, 28660], [1387843200000, 28600, 28640, 28300, 28300], [1388016000000, 28160, 28300, 28020, 28160], [1388102400000, 28200, 28220, 27900, 27920], [1388361600000, 27920, 27940, 27200, 27440], [1388620800000, 26960, 27100, 26040, 26180], [1388707200000, 26000, 26220, 25740, 25920], [1388966400000, 26060, 26400, 25920, 26140], [1389052800000, 26000, 26360, 25900, 26080], [1389139200000, 26000, 26080, 25740, 25820], [1389225600000, 26140, 26140, 25500, 25500], [1389312000000, 25500, 25720, 25440, 25440], [1389571200000, 25660, 25940, 25460, 25900], [1389657600000, 25940, 26600, 25800, 26260], [1389744000000, 26600, 26620, 25960, 25980], [1389830400000, 26000, 26200, 25860, 26020], [1389916800000, 26020, 26300, 25840, 25840], [1390176000000, 26100, 26380, 25920, 26320], [1390262400000, 26300, 26540, 26220, 26480], [1390348800000, 26280, 26560, 26240, 26560], [1390435200000, 26320, 26440, 25980, 25980], [1390521600000, 26000, 26360, 25820, 26140], [1390780800000, 25860, 26080, 25700, 25840], [1390867200000, 25460, 25860, 25460, 25660], [1390953600000, 25600, 25760, 25540, 25600], [1391385600000, 25720, 25760, 25420, 25440], [1391472000000, 25260, 25260, 24980, 24980], [1391558400000, 24900, 25100, 24680, 24740], [1391644800000, 24900, 25340, 24800, 25180], [1391731200000, 25500, 25580, 25260, 25500], [1391990400000, 25420, 25620, 25240, 25540], [1392076800000, 25620, 26300, 25440, 26220], [1392163200000, 26620, 26620, 26100, 26140], [1392249600000, 26000, 26400, 25800, 25960], [1392336000000, 25920, 26160, 25840, 26020], [1392595200000, 25840, 26120, 25600, 25700], [1392681600000, 25700, 25980, 25640, 25900], [1392768000000, 26000, 26000, 25600, 25800], [1392854400000, 25800, 25920, 25620, 25720], [1392940800000, 26660, 26660, 26000, 26600], [1393200000000, 26680, 26900, 26420, 26560], [1393286400000, 26640, 26800, 26520, 26680], [1393372800000, 26740, 26860, 26500, 26840], [1393459200000, 26700, 26840, 26600, 26820], [1393545600000, 26740, 26980, 26640, 26980], [1393804800000, 26720, 26800, 26420, 26500], [1393891200000, 26400, 26580, 26300, 26300], [1393977600000, 26700, 26820, 26600, 26600], [1394064000000, 26580, 26580, 26200, 26520], [1394150400000, 26780, 26780, 26580, 26780], [1394409600000, 26400, 26600, 26340, 26400], [1394496000000, 26400, 26540, 26180, 26440], [1394582400000, 26400, 26400, 25860, 25880], [1394668800000, 25880, 26260, 25800, 25800], [1394755200000, 25400, 25700, 25400, 25500], [1395014400000, 25500, 25520, 25160, 25320], [1395100800000, 25400, 25660, 25320, 25560], [1395187200000, 25600, 25700, 25360, 25380], [1395273600000, 25400, 25440, 25240, 25240], [1395360000000, 25380, 25460, 25240, 25460], [1395619200000, 25200, 25480, 25180, 25460], [1395705600000, 25380, 25400, 24820, 24940], [1395792000000, 25380, 25800, 24960, 25700], [1395878400000, 25800, 26660, 25700, 26660], [1395964800000, 26400, 26760, 26400, 26700], [1396224000000, 26900, 26900, 26440, 26860], [1396310400000, 26900, 26900, 26620, 26780], [1396396800000, 27000, 27140, 26860, 27140], [1396483200000, 27020, 27900, 27020, 27800], [1396569600000, 27540, 27940, 27540, 27600], [1396828800000, 27940, 27940, 27480, 27940], [1396915200000, 27740, 27980, 27500, 27880], [1397001600000, 27880, 27900, 27280, 27420], [1397088000000, 27380, 27600, 27200, 27600], [1397174400000, 27240, 27360, 27180, 27300], [1397433600000, 27300, 27720, 27300, 27400], [1397520000000, 27720, 27740, 27380, 27400], [1397606400000, 27400, 27840, 27260, 27600], [1397692800000, 27520, 27600, 27320, 27400], [1397779200000, 27400, 27580, 27400, 27560], [1398038400000, 27580, 27720, 27500, 27600], [1398124800000, 27480, 27680, 27420, 27500], [1398211200000, 27880, 27900, 27640, 27780], [1398297600000, 28180, 28180, 27980, 28140], [1398384000000, 28400, 28560, 27960, 27980], [1398643200000, 28080, 28120, 27640, 27760], [1398729600000, 27780, 27900, 27020, 27200], [1398816000000, 27600, 27620, 26520, 26860], [1398988800000, 27080, 27180, 26880, 26920], [1399420800000, 27000, 27120, 26800, 26880], [1399507200000, 27100, 27100, 26880, 27000], [1399593600000, 27120, 27160, 26520, 26700], [1399852800000, 26720, 27900, 26640, 27760], [1399939200000, 27760, 28500, 27760, 28000], [1400025600000, 28180, 28300, 28020, 28300], [1400112000000, 28280, 28380, 28060, 28200], [1400198400000, 28000, 28740, 27980, 28560], [1400457600000, 28560, 29000, 28160, 28960], [1400544000000, 28900, 29080, 28700, 29020], [1400630400000, 28700, 29000, 28700, 28820], [1400716800000, 28820, 28960, 28520, 28520], [1400803200000, 28100, 28560, 28100, 28560], [1401062400000, 28400, 28640, 28300, 28440], [1401148800000, 28340, 28460, 28060, 28140], [1401235200000, 28380, 28700, 28180, 28660], [1401321600000, 29000, 29300, 28800, 29200], [1401408000000, 29400, 29640, 28860, 28860], [1401667200000, 28860, 29160, 28780, 29100], [1401753600000, 29680, 29900, 29300, 29400], [1401926400000, 29320, 29600, 29000, 29140], [1402272000000, 29400, 29460, 28040, 28180], [1402358400000, 28420, 28760, 28100, 28720], [1402444800000, 28240, 28600, 28240, 28440], [1402531200000, 28600, 28600, 28020, 28260], [1402617600000, 28040, 28080, 27260, 27340], [1402876800000, 27600, 27640, 27240, 27480], [1402963200000, 27200, 27560, 27020, 27480], [1403049600000, 27460, 27520, 27120, 27160], [1403136000000, 26900, 26980, 26400, 26460], [1403222400000, 26600, 26600, 25920, 26020], [1403481600000, 26420, 26640, 26320, 26440], [1403568000000, 26800, 27080, 26640, 26900], [1403654400000, 26600, 26660, 26360, 26400], [1403740800000, 26180, 26860, 26140, 26500], [1403827200000, 26140, 26380, 26120, 26220], [1404086400000, 26200, 26480, 26180, 26440], [1404172800000, 26160, 26280, 26020, 26200], [1404259200000, 26340, 26620, 26120, 26600], [1404345600000, 26720, 26720, 26320, 26360], [1404432000000, 26440, 26520, 26060, 26120], [1404691200000, 25820, 26020, 25800, 25840], [1404777600000, 25880, 26380, 25740, 25900], [1404864000000, 25740, 26160, 25660, 26160], [1404950400000, 26160, 26220, 26040, 26120], [1405036800000, 26000, 26040, 25640, 25680], [1405296000000, 25960, 26000, 25720, 25720], [1405382400000, 26000, 26460, 25940, 26400], [1405468800000, 26260, 26460, 26220, 26420], [1405555200000, 26520, 26700, 26400, 26600], [1405641600000, 26300, 26860, 26280, 26860], [1405900800000, 26980, 27200, 26860, 27060], [1405987200000, 26960, 27160, 26900, 26960], [1406073600000, 27080, 27140, 26700, 26760], [1406160000000, 27000, 27160, 26620, 27100], [1406246400000, 26920, 27100, 26700, 27100], [1406505600000, 27100, 27340, 26880, 27160], [1406592000000, 27100, 27760, 27060, 27720], [1406678400000, 27760, 28160, 27480, 27900], [1406764800000, 27480, 27700, 26720, 26860], [1406851200000, 26100, 26560, 25840, 25840], [1407110400000, 26000, 26340, 25820, 26340], [1407196800000, 26020, 26420, 26000, 26320], [1407283200000, 26120, 26320, 25900, 26000], [1407369600000, 26000, 26040, 25700, 25800], [1407456000000, 25680, 25700, 24960, 25000], [1407715200000, 25500, 25640, 25140, 25400], [1407801600000, 25400, 25880, 25240, 25320], [1407888000000, 25500, 25500, 24960, 25280], [1407974400000, 25480, 25640, 25080, 25220], [1408320000000, 25580, 25600, 25000, 25000], [1408406400000, 25280, 25460, 25060, 25080], [1408492800000, 25280, 25420, 25020, 25220], [1408579200000, 25100, 25220, 24620, 24700], [1408665600000, 24900, 24940, 24700, 24940], [1408924800000, 24620, 24620, 24420, 24560], [1409011200000, 24700, 24700, 24420, 24440], [1409097600000, 24460, 24740, 24440, 24600], [1409184000000, 25160, 25160, 24720, 24840], [1409270400000, 24760, 24760, 24560, 24680], [1409529600000, 24720, 24740, 24480, 24520], [1409616000000, 24420, 24500, 23880, 23880], [1409702400000, 24000, 24000, 23600, 23780], [1409788800000, 24200, 24320, 24040, 24200], [1409875200000, 24300, 24320, 23900, 24020], [1410393600000, 24000, 24140, 23840, 23840], [1410480000000, 24000, 24160, 24000, 24020], [1410739200000, 24140, 24160, 23920, 24000], [1410825600000, 24160, 24300, 24020, 24120], [1410912000000, 24140, 24520, 24140, 24520], [1410998400000, 24600, 24600, 24080, 24200], [1411084800000, 24460, 24460, 24120, 24200], [1411344000000, 24080, 24080, 23600, 23760], [1411430400000, 23560, 23700, 23220, 23220], [1411516800000, 23040, 23220, 22820, 23000], [1411603200000, 23240, 23320, 22940, 23120], [1411689600000, 23040, 23700, 22960, 23700], [1411948800000, 23860, 24000, 23400, 23900], [1412035200000, 23700, 23760, 23300, 23680], [1412121600000, 23480, 23660, 23120, 23120], [1412208000000, 23300, 23300, 22820, 22820], [1412553600000, 22900, 23120, 22760, 23020], [1412640000000, 23240, 23720, 23240, 23240], [1412726400000, 22840, 23020, 22480, 22600], [1412899200000, 22000, 22280, 21980, 22100], [1413158400000, 21640, 22540, 21560, 22160], [1413244800000, 22540, 22920, 22400, 22540], [1413331200000, 22560, 22900, 22400, 22500], [1413417600000, 22320, 22420, 22080, 22300], [1413504000000, 22120, 22300, 21740, 21780], [1413763200000, 22300, 22340, 22020, 22120], [1413849600000, 21880, 22000, 21620, 21660], [1413936000000, 21940, 22080, 21800, 22080], [1414022400000, 22260, 22260, 21800, 21880], [1414108800000, 22060, 22240, 21840, 22240], [1414368000000, 22020, 22220, 21740, 21900], [1414454400000, 21800, 22000, 21720, 21820], [1414540800000, 22000, 22600, 21800, 22600], [1414627200000, 22580, 23660, 22300, 23620], [1414713600000, 23960, 25000, 23700, 24880], [1414972800000, 25000, 25040, 24320, 24700], [1415059200000, 24380, 24840, 24100, 24340], [1415145600000, 24300, 24500, 23880, 24040], [1415232000000, 23960, 24200, 23860, 24080], [1415318400000, 24360, 24360, 23900, 24120], [1415577600000, 24520, 25380, 24440, 25360], [1415664000000, 25100, 25220, 24540, 24620], [1415750400000, 24620, 24680, 24380, 24600], [1415836800000, 24560, 24640, 23980, 24000], [1415923200000, 24020, 24020, 23600, 23880], [1416182400000, 23800, 24400, 23640, 24100], [1416268800000, 24400, 24540, 24300, 24400], [1416355200000, 24760, 24760, 24240, 24360], [1416441600000, 24120, 24400, 24120, 24200], [1416528000000, 24380, 24520, 24340, 24460], [1416787200000, 24940, 24960, 24200, 24400], [1416873600000, 24480, 24480, 23800, 23800], [1416960000000, 23800, 24220, 23640, 24020], [1417046400000, 25460, 26020, 25280, 25280], [1417132800000, 25900, 25920, 25480, 25740], [1417392000000, 25880, 25960, 25740, 25900], [1417478400000, 25900, 25900, 25320, 25900], [1417564800000, 26000, 26020, 25900, 25960], [1417651200000, 26040, 26060, 25960, 26000], [1417737600000, 26280, 26280, 26000, 26040], [1417996800000, 26060, 26420, 26040, 26380], [1418083200000, 26380, 27140, 26380, 26980], [1418169600000, 26920, 26920, 26340, 26340], [1418256000000, 26340, 26380, 25880, 26100], [1418342400000, 26060, 26080, 25480, 25720], [1418601600000, 25600, 25600, 25200, 25460], [1418688000000, 25400, 25780, 25360, 25580], [1418774400000, 25580, 25660, 25060, 25320], [1418860800000, 25320, 25580, 25040, 25320], [1418947200000, 25880, 26560, 25740, 26560], [1419206400000, 26900, 26940, 26360, 26900], [1419292800000, 26920, 26980, 26740, 26780], [1419379200000, 26780, 26860, 26780, 26860], [1419552000000, 26860, 27100, 26860, 27040], [1419811200000, 26900, 26940, 26580, 26580], [1419897600000, 26600, 26700, 26420, 26540], [1420156800000, 26800, 26800, 26540, 26600], [1420416000000, 26720, 26720, 26260, 26660], [1420502400000, 26300, 26340, 25760, 25900], [1420588800000, 25880, 26220, 25640, 26140], [1420675200000, 26780, 26780, 26200, 26280], [1420761600000, 26280, 26440, 26280, 26280], [1421020800000, 26260, 26380, 26020, 26320], [1421107200000, 26280, 26800, 26000, 26780], [1421193600000, 26780, 27100, 26700, 26900], [1421280000000, 26900, 26980, 26580, 26680], [1421366400000, 26680, 26680, 26260, 26320], [1421625600000, 26580, 26980, 26400, 26860], [1421712000000, 27000, 27440, 26900, 27440], [1421798400000, 27340, 27900, 27200, 27900], [1421884800000, 27960, 27980, 27560, 27560], [1421971200000, 28000, 28000, 27540, 27720], [1422230400000, 27500, 27900, 27280, 27780], [1422316800000, 27500, 28000, 27480, 28000], [1422403200000, 27720, 27800, 27480, 27560], [1422489600000, 27360, 27900, 27140, 27200], [1422576000000, 27200, 27540, 27200, 27300], [1422835200000, 27300, 27540, 27120, 27360], [1422921600000, 27600, 27600, 27180, 27320], [1423008000000, 27500, 27620, 27180, 27180], [1423094400000, 27180, 27380, 26920, 27160], [1423180800000, 26920, 27480, 26720, 27440], [1423440000000, 27200, 27980, 27140, 27900], [1423526400000, 28000, 28000, 27540, 27560], [1423612800000, 27480, 27480, 27080, 27100], [1423699200000, 26800, 27160, 26620, 26880], [1423785600000, 27200, 27220, 26900, 27220], [1424044800000, 27360, 27480, 27220, 27480], [1424131200000, 27480, 27540, 27280, 27540], [1424649600000, 27560, 27800, 27320, 27340], [1424736000000, 27700, 27780, 27280, 27340], [1424822400000, 27600, 27700, 27460, 27580], [1424908800000, 27580, 27600, 27360, 27500], [1424995200000, 27500, 27520, 27140, 27140], [1425254400000, 27500, 28460, 27340, 28460], [1425340800000, 28700, 28740, 28120, 28360], [1425427200000, 28220, 28800, 28200, 28740], [1425513600000, 28780, 28860, 28340, 28440], [1425600000000, 28280, 28980, 28120, 28840], [1425859200000, 28800, 28800, 28400, 28400], [1425945600000, 28680, 28860, 28400, 28420], [1426032000000, 28380, 29580, 28360, 29480], [1426118400000, 29200, 29460, 28940, 28940], [1426204800000, 29220, 29580, 29100, 29140], [1426464000000, 29160, 29740, 29100, 29400], [1426550400000, 29400, 30000, 29200, 29940], [1426636800000, 29920, 30120, 29720, 30060], [1426723200000, 30200, 30200, 29400, 29400], [1426809600000, 29500, 29600, 29200, 29280], [1427068800000, 29240, 29480, 29160, 29340], [1427155200000, 29100, 29560, 29100, 29520], [1427241600000, 29740, 29760, 29440, 29700], [1427328000000, 29000, 29120, 28420, 28420], [1427414400000, 28300, 28960, 28300, 28420], [1427673600000, 28500, 28680, 28240, 28560], [1427760000000, 28980, 29040, 28600, 28820], [1427846400000, 28740, 28740, 28400, 28460], [1427932800000, 28680, 28800, 28460, 28680], [1428019200000, 28680, 28800, 28400, 28680], [1428278400000, 28860, 29800, 28700, 29400], [1428364800000, 29560, 29700, 29240, 29240], [1428451200000, 29400, 29700, 29200, 29580], [1428537600000, 29400, 29780, 29400, 29660], [1428624000000, 29600, 29880, 29560, 29800], [1428883200000, 29580, 29820, 29360, 29580], [1428969600000, 29700, 29700, 29300, 29480], [1429056000000, 29200, 29400, 28540, 28920], [1429142400000, 29240, 29540, 28940, 29540], [1429228800000, 29540, 29560, 28940, 29000], [1429488000000, 28920, 28960, 28460, 28600], [1429574400000, 28420, 28900, 28400, 28880], [1429660800000, 28880, 29460, 28720, 29220], [1429747200000, 29400, 29400, 28800, 29020], [1429833600000, 28980, 29100, 28000, 28200], [1430092800000, 28200, 28220, 27500, 27900], [1430179200000, 27800, 28000, 27180, 27320], [1430265600000, 27340, 27880, 27280, 27700], [1430352000000, 27700, 28360, 27580, 28200], [1430697600000, 28140, 28460, 27940, 28000], [1430870400000, 27800, 27820, 27120, 27240], [1430956800000, 27240, 27500, 27080, 27400], [1431043200000, 27320, 27400, 26760, 26760], [1431302400000, 27200, 27200, 26720, 26720], [1431388800000, 26900, 27060, 26480, 26620], [1431475200000, 26980, 26980, 26520, 26660], [1431561600000, 26820, 26860, 26560, 26800], [1431648000000, 27100, 27120, 26420, 26520], [1431907200000, 26700, 26700, 26180, 26400], [1431993600000, 26420, 27100, 26140, 26760], [1432080000000, 26980, 27400, 26820, 27320], [1432166400000, 27420, 27440, 26880, 27040], [1432252800000, 27060, 27060, 26700, 27000], [1432598400000, 27320, 27380, 26720, 27240], [1432684800000, 27200, 27320, 26260, 26280], [1432771200000, 26340, 26420, 26020, 26180], [1432857600000, 26400, 26420, 25940, 26140], [1433116800000, 26000, 26020, 25760, 25820], [1433203200000, 26000, 26060, 25760, 26060], [1433289600000, 26060, 26320, 25300, 25460], [1433376000000, 26300, 26820, 26100, 26740], [1433462400000, 26500, 27100, 26400, 26820], [1433721600000, 26900, 26940, 26260, 26280], [1433808000000, 26000, 26200, 25360, 25640], [1433894400000, 25640, 25880, 25240, 25240], [1433980800000, 25260, 25480, 25060, 25140], [1434067200000, 25560, 25740, 25280, 25540], [1434326400000, 25100, 25480, 25100, 25400], [1434412800000, 25400, 25480, 24900, 25100], [1434499200000, 25000, 25320, 24800, 25080], [1434585600000, 25180, 25580, 25020, 25300], [1434672000000, 25320, 25560, 25200, 25320], [1434931200000, 25820, 25920, 25520, 25620], [1435017600000, 26180, 26560, 25820, 26420], [1435104000000, 26000, 26220, 25820, 26040], [1435190400000, 25800, 26060, 25380, 25380], [1435276800000, 25040, 25800, 25040, 25560], [1435536000000, 25380, 25700, 25120, 25620], [1435622400000, 25520, 25700, 25320, 25360], [1435708800000, 25360, 26040, 25180, 25900], [1435795200000, 25720, 26080, 25700, 25980], [1435881600000, 25740, 25880, 25340, 25360], [1436140800000, 25060, 25200, 24460, 24600], [1436227200000, 24400, 25180, 24400, 24800], [1436313600000, 24800, 25020, 24640, 24780], [1436400000000, 24600, 25300, 24520, 25300], [1436486400000, 25140, 25320, 24960, 25180], [1436745600000, 25000, 25440, 24900, 25320], [1436832000000, 25300, 25400, 24420, 24500], [1436918400000, 24500, 24760, 24480, 24700], [1437004800000, 24460, 25740, 24460, 25640], [1437091200000, 26000, 26220, 25560, 26100], [1437350400000, 25820, 26080, 25460, 25500], [1437436800000, 25500, 25540, 24940, 25260], [1437523200000, 24880, 25200, 24700, 25060], [1437609600000, 24880, 25060, 24680, 24680], [1437696000000, 24540, 24760, 24480, 24580], [1437955200000, 24580, 24940, 24560, 24600], [1438041600000, 24480, 25020, 24380, 24600], [1438128000000, 25000, 25500, 24620, 25260], [1438214400000, 25160, 25200, 24300, 24300], [1438300800000, 24400, 24440, 23500, 23700], [1438560000000, 23680, 23680, 23320, 23500], [1438646400000, 23500, 23740, 23400, 23640], [1438732800000, 23640, 23640, 23160, 23180], [1438819200000, 23100, 23120, 22300, 22300], [1438905600000, 22400, 22740, 22300, 22720], [1439164800000, 22800, 22840, 22600, 22820], [1439251200000, 23020, 23580, 22960, 23140], [1439337600000, 23000, 23280, 22800, 23080], [1439424000000, 23060, 23060, 22760, 22800], [1439769600000, 22800, 22820, 22080, 22080], [1439856000000, 22360, 22820, 22340, 22620], [1439942400000, 23380, 23520, 22820, 23080], [1440028800000, 23260, 23420, 22600, 22780], [1440115200000, 21980, 22560, 21920, 22020], [1440374400000, 21760, 22300, 20660, 21580], [1440460800000, 21580, 22140, 21340, 21580], [1440547200000, 21360, 21480, 21000, 21340], [1440633600000, 21640, 21720, 21260, 21340], [1440720000000, 21720, 21720, 21460, 21620], [1440979200000, 21420, 21780, 21040, 21780], [1441065600000, 21780, 21960, 21620, 21700], [1441152000000, 21380, 21900, 21300, 21800], [1441238400000, 22040, 22460, 21860, 22440], [1441324800000, 22880, 22880, 22360, 22580], [1441584000000, 22580, 22580, 22100, 22240], [1441670400000, 22260, 22720, 22120, 22620], [1441756800000, 22920, 22940, 22720, 22940], [1441843200000, 22600, 22780, 22360, 22680], [1441929600000, 22520, 22660, 22300, 22300], [1442188800000, 22400, 22480, 22200, 22480], [1442275200000, 22280, 22560, 22260, 22460], [1442361600000, 22420, 23140, 22420, 23040], [1442448000000, 23060, 23140, 22880, 23140], [1442534400000, 22900, 23840, 22700, 23800], [1442793600000, 23260, 23460, 23000, 23000], [1442880000000, 22860, 23000, 22600, 22900], [1442966400000, 22880, 22880, 22500, 22620], [1443052800000, 22520, 22700, 22500, 22520], [1443139200000, 22400, 22500, 22180, 22240], [1443571200000, 22000, 22680, 21800, 22680], [1443657600000, 22800, 22900, 22420, 22680], [1443744000000, 22240, 22660, 22240, 22380], [1444003200000, 22380, 22620, 22300, 22300], [1444089600000, 22600, 23100, 22540, 23020], [1444176000000, 23960, 25040, 23720, 25020], [1444262400000, 25000, 25580, 25000, 25400], [1444608000000, 25200, 25260, 24940, 25200], [1444694400000, 25200, 25440, 24960, 25040], [1444780800000, 24960, 25200, 24740, 25080], [1444867200000, 24880, 25640, 24860, 25380], [1444953600000, 25300, 25380, 25180, 25300], [1445212800000, 25140, 25300, 24980, 25120], [1445299200000, 25200, 25460, 25120, 25320], [1445385600000, 25300, 25640, 25180, 25400], [1445472000000, 25600, 25900, 25380, 25600], [1445558400000, 26000, 26000, 25560, 25780], [1445817600000, 25960, 25960, 25440, 25840], [1445904000000, 25640, 25980, 25620, 25960], [1445990400000, 25880, 26160, 25820, 26160], [1446076800000, 26600, 27840, 26480, 26500], [1446163200000, 26900, 27800, 26820, 27440], [1446422400000, 27700, 27860, 27480, 27660], [1446508800000, 27620, 27620, 27000, 27040], [1446595200000, 27040, 27220, 26520, 26600], [1446681600000, 26600, 27080, 26600, 26840], [1446768000000, 26860, 26960, 26600, 26760], [1447027200000, 26760, 26880, 26420, 26880], [1447113600000, 26720, 26820, 26280, 26420], [1447200000000, 26420, 26900, 26420, 26660], [1447286400000, 26660, 26680, 26340, 26340], [1447372800000, 26340, 26340, 26000, 26000], [1447632000000, 25820, 25820, 25260, 25260], [1447718400000, 25500, 25800, 25400, 25400], [1447804800000, 25440, 25800, 25440, 25620], [1447891200000, 25800, 25800, 25420, 25780], [1447977600000, 25780, 25920, 25560, 25700], [1448236800000, 25700, 26040, 25620, 25640], [1448323200000, 25640, 26100, 25640, 25980], [1448409600000, 26000, 26200, 25980, 25980], [1448496000000, 25980, 26800, 25980, 26700], [1448582400000, 26900, 26980, 26540, 26540], [1448841600000, 26500, 26500, 25680, 25680], [1448928000000, 25880, 26440, 25760, 26420], [1449014400000, 26420, 26440, 25880, 26000], [1449100800000, 25900, 25940, 25720, 25800], [1449187200000, 25500, 25600, 25340, 25380], [1449446400000, 25380, 25500, 25240, 25240], [1449532800000, 25240, 25440, 25240, 25240], [1449619200000, 25240, 25500, 25240, 25260], [1449705600000, 25260, 25860, 25260, 25660], [1449792000000, 25660, 25900, 25440, 25680], [1450051200000, 25460, 25460, 25100, 25220], [1450137600000, 25220, 25600, 25200, 25540], [1450224000000, 25560, 26200, 25560, 25980], [1450310400000, 26020, 26160, 25500, 25800], [1450396800000, 25300, 25760, 25280, 25560], [1450656000000, 25560, 25700, 25220, 25600], [1450742400000, 25600, 25840, 25340, 25840], [1450828800000, 25840, 25980, 25640, 25900], [1450915200000, 25900, 26000, 25700, 25700], [1451260800000, 25700, 25780, 25320, 25320], [1451347200000, 25300, 25320, 24820, 25080], [1451433600000, 25200, 25440, 25080, 25200], [1451865600000, 25200, 25200, 24100, 24100], [1451952000000, 24040, 24360, 23720, 24160], [1452038400000, 24160, 24160, 23360, 23500], [1452124800000, 23320, 23660, 23020, 23260], [1452211200000, 23260, 23720, 23260, 23420], [1452470400000, 23120, 23320, 22920, 23040], [1452556800000, 22960, 23320, 22880, 22920], [1452643200000, 23060, 23180, 22960, 22960], [1452729600000, 22620, 22840, 22620, 22760], [1452816000000, 22800, 23040, 22480, 22640], [1453075200000, 21760, 22660, 21760, 22520], [1453161600000, 22560, 23420, 22560, 23420], [1453248000000, 23200, 23200, 22640, 22760], [1453334400000, 22660, 23100, 22500, 22620], [1453420800000, 22900, 23360, 22900, 23360], [1453680000000, 23440, 23520, 23120, 23240], [1453766400000, 23100, 23140, 22720, 22740], [1453852800000, 22520, 23500, 22520, 23500], [1453939200000, 23280, 23360, 22780, 22900], [1454025600000, 22800, 23000, 22320, 23000], [1454284800000, 23040, 23260, 23020, 23260], [1454371200000, 23220, 23320, 22940, 23120], [1454457600000, 23000, 23040, 22740, 22920], [1454544000000, 23000, 23220, 22960, 23120], [1454630400000, 23120, 23380, 23120, 23280], [1455148800000, 22360, 22740, 22360, 22600], [1455235200000, 22600, 23020, 22440, 22600], [1455494400000, 23080, 23200, 22880, 23080], [1455580800000, 23160, 23580, 23140, 23360], [1455667200000, 23580, 24020, 23380, 23700], [1455753600000, 24060, 24060, 23560, 23740], [1455840000000, 23740, 23900, 23480, 23800], [1456099200000, 23800, 23840, 23320, 23500], [1456185600000, 23580, 23780, 23460, 23620], [1456272000000, 23560, 23580, 23220, 23440], [1456358400000, 23440, 23740, 23440, 23580], [1456444800000, 23600, 23740, 23440, 23440], [1456704000000, 23580, 23880, 23520, 23560], [1456876800000, 24000, 24140, 23920, 23940], [1456963200000, 24260, 24400, 24040, 24400], [1457049600000, 24400, 24560, 24040, 24300], [1457308800000, 24400, 24620, 24300, 24460], [1457395200000, 24460, 24480, 23720, 23840], [1457481600000, 23760, 23980, 23540, 23880], [1457568000000, 24160, 24720, 24020, 24500], [1457654400000, 24500, 25060, 24320, 24980], [1457913600000, 25340, 25460, 24980, 25100], [1458000000000, 25100, 25280, 24920, 25060], [1458086400000, 25120, 25260, 25060, 25120], [1458172800000, 25300, 25920, 25140, 25260], [1458259200000, 25560, 25560, 25260, 25460], [1458518400000, 25480, 25580, 25160, 25340], [1458604800000, 25340, 25580, 25240, 25380], [1458691200000, 25380, 25580, 25240, 25580], [1458777600000, 25580, 25800, 25320, 25640], [1458864000000, 25660, 25800, 25560, 25760], [1459123200000, 25760, 26000, 25760, 25880], [1459209600000, 25880, 26000, 25700, 25800], [1459296000000, 26200, 26420, 26040, 26160], [1459382400000, 26120, 26280, 25960, 26240], [1459468800000, 25980, 26180, 25420, 25580], [1459728000000, 25580, 26100, 25580, 26100], [1459814400000, 25980, 25980, 25200, 25200], [1459900800000, 25380, 25820, 25360, 25700], [1459987200000, 26000, 26000, 25160, 25380], [1460073600000, 25380, 25380, 24800, 24920], [1460332800000, 24920, 25420, 24920, 25320], [1460419200000, 25400, 25620, 25320, 25500], [1460592000000, 26000, 26040, 25780, 26000], [1460678400000, 26180, 26200, 25800, 26000], [1460937600000, 25900, 26100, 25840, 25980], [1461024000000, 25880, 25920, 25660, 25760], [1461110400000, 25640, 26000, 25640, 25980], [1461196800000, 26000, 26020, 25760, 25880], [1461283200000, 25880, 25880, 25540, 25600], [1461542400000, 25700, 25700, 25420, 25620], [1461628800000, 25700, 26100, 25660, 25920], [1461715200000, 25880, 26000, 25720, 26000], [1461801600000, 26000, 26000, 25220, 25300], [1461888000000, 25200, 25340, 24840, 24900], [1462147200000, 24940, 25240, 24900, 25000], [1462233600000, 25340, 25400, 25120, 25220], [1462320000000, 25440, 25800, 25240, 25800], [1462752000000, 25800, 26000, 25700, 25980], [1462838400000, 25980, 26000, 25760, 25920], [1462924800000, 25920, 25980, 25740, 25840], [1463011200000, 25840, 25840, 25500, 25620], [1463097600000, 25620, 25620, 25020, 25060], [1463356800000, 25060, 25260, 24940, 24960], [1463443200000, 24980, 25300, 24980, 25280], [1463529600000, 25280, 25420, 25100, 25360], [1463616000000, 25360, 25540, 25320, 25400], [1463702400000, 25400, 25600, 25380, 25380], [1463961600000, 25380, 25720, 25380, 25720], [1464048000000, 25720, 25780, 25360, 25420], [1464134400000, 25660, 25960, 25480, 25900], [1464220800000, 25980, 26060, 25900, 25920], [1464307200000, 26000, 26020, 25460, 25640], [1464566400000, 25940, 25940, 25480, 25600], [1464652800000, 25600, 26000, 25360, 25840], [1464739200000, 25960, 26820, 25900, 26660], [1464825600000, 27000, 27440, 26920, 27300], [1464912000000, 27400, 27580, 27280, 27540], [1465257600000, 27720, 28040, 27600, 27960], [1465344000000, 28380, 28380, 27780, 28120], [1465430400000, 28160, 28600, 28120, 28600], [1465516800000, 28480, 28500, 28080, 28120], [1465776000000, 27920, 27920, 27240, 27420], [1465862400000, 27420, 27720, 27380, 27600], [1465948800000, 27700, 28320, 27660, 28260], [1466035200000, 28260, 28340, 27900, 28180], [1466121600000, 28200, 28700, 28200, 28520], [1466380800000, 28540, 28960, 28520, 28620], [1466467200000, 28640, 28980, 28520, 28960], [1466553600000, 28920, 29000, 28620, 28900], [1466640000000, 28880, 28900, 28540, 28600], [1466726400000, 28900, 28900, 27200, 28000], [1466985600000, 28000, 28100, 27700, 27960], [1467072000000, 27800, 28080, 27580, 27980], [1467158400000, 28160, 28240, 27820, 27920], [1467244800000, 28160, 28900, 27940, 28500], [1467331200000, 28540, 29580, 28540, 29320], [1467590400000, 29280, 29480, 29020, 29320], [1467676800000, 29320, 29500, 29240, 29380], [1467763200000, 28940, 29040, 28240, 28420], [1467849600000, 28420, 29000, 28320, 29000], [1467936000000, 29000, 29500, 28980, 29200], [1468195200000, 29200, 30000, 29200, 29780], [1468281600000, 29980, 30100, 29200, 29280], [1468368000000, 29920, 29920, 29260, 29620], [1468454400000, 29620, 30000, 29520, 30000], [1468540800000, 30000, 30440, 29720, 30360], [1468800000000, 30360, 30660, 30000, 30660], [1468886400000, 30560, 30800, 30440, 30660], [1468972800000, 30660, 30840, 30480, 30800], [1469059200000, 30800, 30940, 30740, 30860], [1469145600000, 30120, 30560, 30120, 30320], [1469404800000, 30000, 30460, 29900, 30040], [1469491200000, 30000, 30620, 29960, 30600], [1469577600000, 30240, 30580, 30240, 30540], [1469664000000, 30660, 30720, 29960, 30140], [1469750400000, 30400, 31140, 30220, 30780], [1470009600000, 31380, 31600, 31200, 31360], [1470096000000, 31360, 31360, 30920, 30960], [1470182400000, 30960, 30960, 30340, 30340], [1470268800000, 30380, 30660, 30340, 30340], [1470355200000, 30580, 31280, 30500, 31220], [1470614400000, 31320, 31500, 31120, 31380], [1470700800000, 31480, 31580, 31140, 31340], [1470787200000, 31340, 31400, 30680, 30820], [1470873600000, 30820, 31180, 30520, 31180], [1470960000000, 31180, 31400, 30880, 30900], [1471305600000, 30900, 31520, 30900, 31360], [1471392000000, 31380, 31400, 31020, 31320], [1471478400000, 31340, 32880, 31320, 32800], [1471564800000, 32760, 33500, 32720, 33500], [1471824000000, 33480, 33840, 33180, 33300], [1471910400000, 33300, 33880, 33140, 33740], [1471996800000, 33600, 33640, 32720, 33060], [1472083200000, 32600, 33180, 32440, 32780], [1472169600000, 32120, 32460, 32060, 32240], [1472428800000, 32040, 32800, 31940, 32800], [1472515200000, 32940, 33420, 32660, 32900], [1472601600000, 32820, 32820, 32220, 32400], [1472688000000, 31660, 31760, 31260, 31740], [1472774400000, 31900, 32260, 31760, 31940], [1473033600000, 31800, 32300, 31700, 32120], [1473120000000, 32140, 32900, 31940, 32860], [1473206400000, 32960, 33040, 32420, 32420], [1473292800000, 32460, 32780, 32280, 32780], [1473379200000, 32220, 32360, 31280, 31500], [1473638400000, 29800, 30120, 29120, 29300], [1473724800000, 30160, 30980, 29900, 30540], [1474243200000, 30760, 31380, 30720, 31160], [1474329600000, 31180, 31760, 31180, 31700], [1474416000000, 31900, 32020, 31520, 31840], [1474502400000, 32000, 32820, 31980, 32360], [1474588800000, 31640, 31960, 31320, 31420], [1474848000000, 31420, 31920, 31280, 31360], [1474934400000, 31000, 31500, 30660, 31380], [1475020800000, 31080, 31460, 31080, 31340], [1475107200000, 31460, 32380, 31440, 32000], [1475193600000, 31800, 32300, 31700, 31960], [1475539200000, 32200, 32480, 32120, 32280], [1475625600000, 32020, 32520, 31940, 32380], [1475712000000, 33920, 34000, 33340, 33820], [1475798400000, 34000, 34320, 33800, 34120], [1476057600000, 33000, 33780, 32560, 33600], [1476144000000, 32000, 32500, 30900, 30900], [1476230400000, 29900, 30900, 29880, 30700], [1476316800000, 31000, 31620, 30900, 31140], [1476403200000, 30960, 31760, 30940, 31540], [1476662400000, 31300, 32040, 30760, 31800], [1476748800000, 31440, 31900, 31440, 31780], [1476835200000, 31580, 32860, 31500, 32500], [1476921600000, 32520, 33020, 32180, 32400], [1477008000000, 32120, 32260, 31760, 31780], [1477267200000, 31860, 32160, 31800, 32160], [1477353600000, 32000, 32080, 31840, 31940], [1477440000000, 31940, 31980, 31240, 31340], [1477526400000, 31420, 32340, 31120, 31460], [1477612800000, 31600, 32280, 31600, 32280], [1477872000000, 32320, 32780, 32220, 32780], [1477958400000, 32600, 33040, 32240, 33040], [1478044800000, 32800, 33040, 32620, 32860], [1478131200000, 32600, 32800, 32120, 32320], [1478217600000, 32100, 32680, 32100, 32540], [1478476800000, 32940, 33000, 32680, 32800], [1478563200000, 32980, 32980, 32700, 32880], [1478649600000, 32920, 33140, 31820, 31920], [1478736000000, 32600, 33000, 32360, 32980], [1478822400000, 31700, 32360, 31700, 31960], [1479081600000, 31900, 31920, 31040, 31060], [1479168000000, 31060, 31620, 30780, 30780], [1479254400000, 30800, 31280, 30800, 31160], [1479340800000, 31100, 31520, 30900, 31360], [1479427200000, 31640, 31760, 31400, 31720], [1479686400000, 31300, 32120, 31300, 31860], [1479772800000, 32140, 32900, 32000, 32800], [1479859200000, 33220, 33220, 32520, 32980], [1479945600000, 32980, 33040, 32660, 33000], [1480032000000, 32820, 33040, 32660, 33000], [1480291200000, 33000, 33620, 32800, 33540], [1480377600000, 33800, 33960, 33380, 33540], [1480464000000, 33540, 34940, 33540, 34920], [1480550400000, 34800, 35060, 34660, 34980], [1480636800000, 34480, 34760, 34140, 34540], [1480896000000, 34340, 34680, 34220, 34360], [1480982400000, 34440, 35200, 34400, 34960], [1481068800000, 35040, 35480, 35040, 35440], [1481155200000, 35980, 36020, 35520, 35800], [1481241600000, 35900, 35900, 35400, 35600], [1481500800000, 34660, 35360, 34660, 35040], [1481587200000, 34620, 35440, 34620, 35320], [1481673600000, 35560, 35680, 35280, 35540], [1481760000000, 34820, 35500, 34820, 35180], [1481846400000, 35300, 36020, 35200, 35860], [1482105600000, 35620, 36380, 35620, 35900], [1482192000000, 35920, 36400, 35840, 36240], [1482278400000, 36360, 36600, 36020, 36100], [1482364800000, 36260, 36300, 35980, 36180], [1482451200000, 36020, 36080, 35600, 35640], [1482710400000, 35600, 36000, 35560, 35960], [1482796800000, 35980, 36200, 35860, 35980], [1482883200000, 35840, 35980, 35600, 35760], [1482969600000, 35420, 36040, 35400, 36040], [1483315200000, 35980, 36240, 35880, 36100], [1483401600000, 36280, 36620, 36020, 36480], [1483488000000, 36500, 36520, 36100, 36160], [1483574400000, 36060, 36060, 35540, 35560], [1483660800000, 36180, 36440, 36040, 36200], [1483920000000, 36600, 37500, 36560, 37220], [1484006400000, 37280, 37400, 37080, 37240], [1484092800000, 37520, 38560, 37420, 38280], [1484179200000, 38000, 38800, 37980, 38800], [1484265600000, 38100, 38320, 37460, 37460], [1484524800000, 36860, 37820, 36320, 36660], [1484611200000, 36580, 37460, 36580, 36960], [1484697600000, 37040, 37500, 36620, 36940], [1484784000000, 37720, 37920, 37020, 37480], [1484870400000, 37120, 37420, 36880, 37200], [1485129600000, 37200, 38060, 37000, 38060], [1485216000000, 38120, 38580, 37880, 38160], [1485302400000, 38340, 39400, 38320, 39400], [1485388800000, 39420, 40000, 39420, 39900], [1485820800000, 39900, 39900, 39460, 39460], [1485907200000, 39540, 39660, 39040, 39120], [1485993600000, 39600, 39660, 39200, 39360], [1486080000000, 39400, 39500, 39180, 39460], [1486339200000, 39580, 39660, 39140, 39560], [1486425600000, 39560, 39580, 38760, 38820], [1486512000000, 38740, 38780, 38200, 38400], [1486598400000, 38780, 38840, 38220, 38400], [1486684800000, 38400, 38760, 38300, 38360], [1486944000000, 37740, 38060, 37720, 37960], [1487030400000, 37960, 38260, 37320, 37580], [1487116800000, 37080, 37960, 37080, 37720], [1487203200000, 37800, 38360, 37780, 38020], [1487289600000, 37560, 38040, 37280, 37860], [1487548800000, 38220, 38780, 38160, 38660], [1487635200000, 38540, 39560, 38420, 38940], [1487721600000, 39000, 39340, 38980, 39300], [1487808000000, 39020, 39440, 39020, 39180], [1487894400000, 38960, 39100, 38060, 38220], [1488153600000, 38020, 38140, 37700, 38060], [1488240000000, 38060, 38760, 37960, 38440], [1488412800000, 38420, 39860, 38420, 39720], [1488499200000, 39340, 39720, 39160, 39620], [1488758400000, 39220, 40220, 39220, 40080], [1488844800000, 39800, 40320, 39800, 40200], [1488931200000, 40200, 40620, 40140, 40200], [1489017600000, 40200, 40300, 40020, 40200], [1489104000000, 39960, 40420, 39860, 40180], [1489363200000, 40040, 40980, 40040, 40600], [1489449600000, 40620, 41540, 40500, 41360], [1489536000000, 40800, 41440, 40800, 41400], [1489622400000, 41800, 42180, 41540, 41840], [1489708800000, 41800, 42500, 41720, 42400], [1489968000000, 42000, 42120, 41740, 41900], [1490054400000, 41780, 42680, 41760, 42560], [1490140800000, 41600, 42460, 41580, 42460], [1490227200000, 42200, 42360, 41700, 41800], [1490313600000, 41600, 41980, 41080, 41500], [1490572800000, 41200, 41880, 41180, 41200], [1490659200000, 41560, 41840, 41380, 41480], [1490745600000, 41740, 41960, 41580, 41780], [1490832000000, 41880, 42440, 41880, 41980], [1490918400000, 41820, 42020, 41200, 41200], [1491177600000, 41400, 41720, 41300, 41440], [1491264000000, 41600, 42180, 41520, 42080], [1491350400000, 41900, 42240, 41700, 42140], [1491436800000, 42000, 42080, 41600, 41840], [1491523200000, 41800, 41820, 41160, 41600], [1491782400000, 41940, 41940, 41500, 41940], [1491868800000, 41940, 41940, 41580, 41600], [1491955200000, 41860, 41940, 41700, 41900], [1492041600000, 41660, 42460, 41660, 42420], [1492128000000, 42160, 42260, 41760, 42020], [1492387200000, 42000, 42080, 41520, 41560], [1492473600000, 41680, 41820, 41280, 41500], [1492560000000, 41300, 41420, 40900, 40900], [1492646400000, 40580, 40800, 40080, 40280], [1492732800000, 40480, 41400, 40480, 40760], [1492992000000, 41260, 41260, 40920, 41240], [1493078400000, 41460, 42740, 41320, 42700], [1493164800000, 42700, 42800, 42520, 42800], [1493251200000, 42700, 44520, 41960, 43840], [1493337600000, 45780, 45800, 44520, 44620], [1493683200000, 45500, 45500, 44760, 44900], [1493856000000, 45700, 45700, 44860, 45520], [1494201600000, 45520, 47020, 45340, 47020], [1494374400000, 46160, 47220, 45600, 45600], [1494460800000, 45420, 46180, 45220, 45500], [1494547200000, 45760, 46160, 45660, 45820], [1494806400000, 45620, 46280, 45620, 46100], [1494892800000, 46660, 46800, 46100, 46380], [1494979200000, 46120, 46640, 46100, 46340], [1495065600000, 45740, 46000, 45540, 45940], [1495152000000, 45640, 45780, 44720, 44720], [1495411200000, 45040, 45380, 44760, 45100], [1495497600000, 45400, 45580, 44900, 44920], [1495584000000, 44860, 45300, 44800, 44880], [1495670400000, 45160, 45680, 44800, 45680], [1495756800000, 45600, 46460, 45540, 46080], [1496016000000, 46220, 46400, 45380, 45620], [1496102400000, 45520, 45660, 44480, 44640], [1496188800000, 44580, 45020, 44400, 44700], [1496275200000, 44860, 44900, 44400, 44680], [1496361600000, 45060, 45960, 45000, 45960], [1496620800000, 46040, 46360, 45720, 45940], [1496793600000, 46500, 46500, 45240, 45300], [1496880000000, 45000, 45580, 45000, 45160], [1496966400000, 45680, 46440, 45600, 46100], [1497225600000, 45420, 45600, 45140, 45380], [1497312000000, 45140, 45620, 45140, 45400], [1497398400000, 45800, 46060, 45240, 45360], [1497484800000, 45680, 45920, 45180, 45680], [1497571200000, 45500, 45940, 45460, 45580], [1497830400000, 45580, 46560, 45560, 46560], [1497916800000, 47240, 48140, 47220, 48140], [1498003200000, 47740, 48120, 47480, 47480], [1498089600000, 47960, 48080, 47720, 47960], [1498176000000, 47600, 47780, 47420, 47620], [1498435200000, 47520, 48360, 47520, 48280], [1498521600000, 48220, 48400, 47900, 48300], [1498608000000, 47600, 48000, 47560, 47700], [1498694400000, 48040, 48320, 47940, 47940], [1498780800000, 47500, 47620, 47100, 47540], [1499040000000, 47500, 47780, 47120, 47220], [1499126400000, 47160, 47400, 46900, 47000], [1499212800000, 46820, 47680, 46780, 47580], [1499299200000, 48000, 48100, 47720, 48060], [1499385600000, 47740, 48120, 47620, 47860], [1499644800000, 48500, 48900, 48320, 48660], [1499731200000, 48640, 49000, 48280, 49000], [1499817600000, 49000, 50000, 48840, 49880], [1499904000000, 50080, 50940, 50040, 50560], [1499990400000, 51000, 51080, 50420, 50480], [1500249600000, 50900, 51020, 50520, 50640], [1500336000000, 50420, 50880, 50360, 50840], [1500422400000, 50620, 50820, 50000, 50740], [1500508800000, 50760, 51320, 50560, 51200], [1500595200000, 50860, 51160, 50520, 51080], [1500854400000, 50700, 51000, 50620, 50860], [1500940800000, 50500, 50760, 49940, 50000], [1501027200000, 49600, 50020, 49300, 49840], [1501113600000, 50000, 50640, 49560, 49800], [1501200000000, 49800, 49800, 47380, 47760], [1501459200000, 47420, 48240, 46920, 48200], [1501545600000, 48000, 48840, 47540, 48600], [1501632000000, 49200, 49340, 48600, 49000], [1501718400000, 49000, 49000, 47120, 47780], [1501804800000, 48160, 48180, 47500, 47700], [1502064000000, 47500, 48080, 47440, 47580], [1502150400000, 47980, 48260, 47480, 47720], [1502236800000, 47400, 47400, 46240, 46280], [1502323200000, 46200, 46320, 45460, 45900], [1502409600000, 45120, 45300, 44220, 44620], [1502668800000, 45120, 45400, 44720, 45000], [1502841600000, 46220, 46380, 46000, 46200], [1502928000000, 46960, 47300, 46740, 47040], [1503014400000, 46760, 47240, 46240, 46900], [1503273600000, 47240, 47240, 46580, 46840], [1503360000000, 46820, 47160, 46700, 47000], [1503446400000, 47780, 47780, 47180, 47480], [1503532800000, 47520, 47660, 47340, 47520], [1503619200000, 47880, 47880, 46720, 47020], [1503878400000, 47020, 47240, 45960, 46100], [1503964800000, 45640, 46080, 45160, 46080], [1504051200000, 46380, 46400, 45960, 46200], [1504137600000, 46220, 46640, 46000, 46320], [1504224000000, 46460, 46640, 46300, 46480], [1504483200000, 45780, 46360, 45500, 46040], [1504569600000, 46240, 46900, 45960, 46760], [1504656000000, 46760, 47180, 46700, 47000], [1504742400000, 47000, 48220, 47000, 48120], [1504828800000, 48700, 49180, 48580, 49080], [1505088000000, 49700, 50180, 49500, 49800], [1505174400000, 50200, 50220, 49140, 49600], [1505260800000, 49820, 50400, 49440, 49620], [1505347200000, 50060, 50320, 49760, 50300], [1505433600000, 50300, 50560, 49860, 50400], [1505692800000, 50540, 52480, 50520, 52480], [1505779200000, 52500, 52640, 51780, 52120], [1505865600000, 52120, 52500, 51840, 52220], [1505952000000, 52220, 52960, 52220, 52800], [1506038400000, 52960, 53600, 52460, 53000], [1506297600000, 53000, 53680, 53000, 53620], [1506384000000, 53020, 53120, 51560, 51660], [1506470400000, 52000, 52200, 51500, 51680], [1506556800000, 52260, 52460, 51260, 51260], [1506643200000, 51180, 51620, 50840, 51280], [1507593600000, 53360, 53640, 52800, 52800], [1507680000000, 53600, 54760, 53340, 54640], [1507766400000, 54840, 55160, 54100, 54800], [1507852800000, 54540, 54840, 53780, 54000], [1508112000000, 53980, 54860, 53760, 53920], [1508198400000, 54020, 55380, 54000, 54800], [1508284800000, 54820, 55240, 54040, 54760], [1508371200000, 54700, 54700, 52980, 52980], [1508457600000, 52800, 54100, 52800, 53840], [1508716800000, 54600, 54640, 54000, 54300], [1508803200000, 54700, 54780, 54040, 54040], [1508889600000, 54040, 54420, 53700, 53900], [1508976000000, 53720, 53900, 52400, 52400], [1509062400000, 52400, 53320, 52140, 53080], [1509321600000, 53780, 54320, 53700, 54040], [1509408000000, 54060, 55440, 53500, 55080], [1509494400000, 57500, 57500, 56180, 57220], [1509580800000, 57500, 57520, 56760, 57060], [1509667200000, 57060, 57140, 55860, 56380], [1509926400000, 56380, 56500, 55340, 56380], [1510012800000, 56380, 56920, 55860, 56100], [1510099200000, 56100, 57060, 55860, 56760], [1510185600000, 56920, 56920, 55900, 56340], [1510272000000, 55800, 56540, 55780, 56400], [1510531200000, 56400, 56800, 56100, 56380], [1510617600000, 56380, 56740, 55920, 55920], [1510704000000, 55920, 56320, 55320, 55340], [1510790400000, 55440, 56000, 55400, 55780], [1510876800000, 56400, 56880, 55820, 55820], [1511136000000, 55900, 55980, 55200, 55200], [1511222400000, 55400, 55840, 55280, 55280], [1511308800000, 55980, 56200, 55620, 55960], [1511395200000, 55960, 55980, 55020, 55300], [1511481600000, 55300, 55500, 55180, 55460], [1511740800000, 55360, 55360, 52640, 52640], [1511827200000, 52700, 53280, 51720, 53280], [1511913600000, 53200, 53240, 52500, 52600], [1512000000000, 50800, 51860, 50200, 50800], [1512086400000, 50800, 51780, 50800, 50840], [1512345600000, 50840, 51340, 50020, 51340], [1512432000000, 50600, 51300, 50280, 51260], [1512518400000, 51260, 51560, 50020, 50020], [1512604800000, 50040, 50980, 50020, 50740], [1512691200000, 51360, 52000, 51040, 52000], [1512950400000, 52000, 52040, 51500, 51780], [1513036800000, 51820, 52100, 51660, 52100], [1513123200000, 52100, 52100, 51100, 51320], [1513209600000, 51320, 52280, 51060, 51060], [1513296000000, 51240, 51480, 50520, 50620], [1513555200000, 50620, 51240, 50620, 51200], [1513641600000, 51540, 52080, 51520, 51560], [1513728000000, 51500, 51760, 50820, 50880], [1513814400000, 51000, 51060, 49100, 49140], [1513900800000, 49400, 49960, 49240, 49700], [1514246400000, 49760, 50100, 48200, 48200], [1514332800000, 48960, 49560, 48460, 49360], [1514419200000, 49560, 50960, 49500, 50960], [1514851200000, 51380, 51400, 50780, 51020], [1514937600000, 52540, 52560, 51420, 51620], [1515024000000, 52120, 52180, 50640, 51080], [1515110400000, 51300, 52120, 51200, 52120], [1515369600000, 52400, 52520, 51500, 52020], [1515456000000, 51460, 51720, 49980, 50400], [1515542400000, 50500, 50520, 48640, 48840], [1515628800000, 48200, 49260, 48020, 48240], [1515715200000, 48240, 48480, 46760, 48200], [1515974400000, 48800, 48980, 47920, 48540], [1516060800000, 48760, 50140, 48620, 50000], [1516147200000, 50020, 50020, 49060, 49620], [1516233600000, 50020, 50640, 49820, 49900], [1516320000000, 50380, 50380, 49040, 49320], [1516579200000, 48640, 48680, 47960, 48240], [1516665600000, 48660, 49160, 48300, 49160], [1516752000000, 48860, 49700, 48560, 49340], [1516838400000, 49220, 50360, 49160, 50260], [1516924800000, 50500, 50780, 49840, 50780], [1517184000000, 51200, 51480, 50900, 51220], [1517270400000, 50440, 50640, 49780, 49800], [1517356800000, 50020, 54140, 49600, 49900], [1517443200000, 50620, 50960, 49720, 49820], [1517529600000, 49380, 49400, 47700, 47700], [1517788800000, 46500, 48320, 46000, 47920], [1517875200000, 46600, 47920, 46580, 47420], [1517961600000, 48240, 48260, 45800, 45800], [1518048000000, 46120, 46620, 45980, 46000], [1518134400000, 44440, 45180, 44420, 44700], [1518393600000, 45100, 46320, 45040, 45720], [1518480000000, 46200, 48060, 46200, 47540], [1518566400000, 48080, 49100, 47940, 49000], [1518998400000, 49800, 49800, 47860, 48380], [1519084800000, 48040, 48160, 47220, 47400], [1519171200000, 47280, 47580, 46840, 47280], [1519257600000, 47260, 47260, 46760, 46760], [1519344000000, 46760, 47800, 46760, 47220], [1519603200000, 47280, 47560, 47080, 47380], [1519689600000, 48360, 48380, 47380, 47380], [1519776000000, 47380, 48100, 47000, 47060], [1519948800000, 46580, 46800, 46000, 46020], [1520208000000, 45820, 46160, 45080, 45200], [1520294400000, 45920, 47100, 45820, 47020], [1520380800000, 48200, 48900, 47220, 48620], [1520467200000, 49200, 49480, 48080, 49200], [1520553600000, 49440, 50540, 49240, 49740], [1520812800000, 50560, 50780, 49580, 49740], [1520899200000, 50760, 51660, 50360, 51660], [1520985600000, 51020, 52000, 51000, 51760], [1521072000000, 52000, 52020, 51020, 51540], [1521158400000, 51220, 51420, 50240, 51140], [1521417600000, 50620, 51340, 50440, 50740], [1521504000000, 50700, 51200, 50100, 51200], [1521590400000, 51780, 51780, 51060, 51060], [1521676800000, 51060, 51780, 51040, 51780], [1521763200000, 50340, 50720, 49600, 49720], [1522022400000, 49420, 50280, 49040, 50280], [1522108800000, 50320, 50460, 49080, 49980], [1522195200000, 49100, 49100, 48340, 48700], [1522281600000, 48700, 49560, 48320, 49040], [1522368000000, 49080, 49900, 49080, 49220], [1522627200000, 49000, 49220, 48500, 48540], [1522713600000, 47880, 48140, 47280, 48120], [1522800000000, 48160, 48260, 46920, 46920], [1522886400000, 47400, 49380, 47340, 48740], [1522972800000, 48000, 48580, 47400, 48400], [1523232000000, 48260, 49440, 48200, 49200], [1523318400000, 48540, 49220, 48040, 48880], [1523404800000, 49900, 49900, 48600, 48860], [1523491200000, 49440, 49440, 48880, 49000], [1523577600000, 49600, 50180, 49400, 49800], [1523836800000, 50320, 50600, 49860, 50340], [1523923200000, 50240, 50540, 49820, 49980], [1524009600000, 51000, 51360, 50580, 51360], [1524096000000, 52000, 52980, 51540, 52780], [1524182400000, 51800, 52260, 51420, 51620], [1524441600000, 51000, 52080, 51000, 51900], [1524528000000, 51840, 51860, 50080, 50460], [1524614400000, 49220, 50500, 49220, 50400], [1524700800000, 50420, 52160, 50400, 52140], [1524787200000, 53380, 53640, 52440, 53000], [1525046400000, 53000, 53000, 53000, 53000], [1525219200000, 53000, 53000, 53000, 53000], [1525305600000, 53000, 53000, 53000, 53000], [1525392000000, 53000, 53900, 51800, 51900], [1525737600000, 52600, 53200, 51900, 52600], [1525824000000, 52600, 52800, 50900, 50900], [1525910400000, 51700, 51700, 50600, 51600], [1525996800000, 52000, 52200, 51200, 51300], [1526256000000, 51000, 51100, 49900, 50100], [1526342400000, 50200, 50400, 49100, 49200], [1526428800000, 49200, 50200, 49150, 49850], [1526515200000, 50300, 50500, 49400, 49400], [1526601600000, 49900, 49900, 49350, 49500], [1526860800000, 49650, 50200, 49100, 50000], [1527033600000, 50600, 52000, 50400, 51800], [1527120000000, 52000, 52000, 51100, 51400], [1527206400000, 51000, 52800, 50800, 52700], [1527465600000, 52500, 53000, 52000, 52300], [1527552000000, 52200, 52500, 51300, 51300], [1527638400000, 51300, 51500, 49100, 49500], [1527724800000, 50400, 50800, 49850, 50700], [1527811200000, 50500, 51700, 49950, 51300], [1528070400000, 50800, 51200, 50700, 51100], [1528156800000, 51100, 51400, 50400, 51300], [1528329600000, 51800, 51800, 50500, 50600], [1528416000000, 50200, 50400, 49600, 49650], [1528675200000, 49750, 50300, 49350, 49900], [1528761600000, 49700, 49800, 49250, 49400], [1528934400000, 49000, 49000, 48200, 48200], [1529020800000, 48500, 48700, 47650, 47650], [1529280000000, 47600, 47650, 46200, 46600], [1529366400000, 47200, 47350, 46500, 47000], [1529452800000, 47450, 47600, 46850, 47000], [1529539200000, 47900, 47900, 47050, 47050], [1529625600000, 47000, 47250, 46200, 47250], [1529884800000, 47050, 47050, 46150, 46650], [1529971200000, 45900, 47300, 45900, 47000], [1530057600000, 47450, 48500, 47000, 47950], [1530144000000, 46850, 47150, 46600, 46800], [1530230400000, 46250, 47150, 46200, 46650], [1530489600000, 46500, 47150, 45500, 45550], [1530576000000, 45750, 46450, 45750, 46150], [1530662400000, 46700, 47050, 46050, 46250], [1530748800000, 46100, 46550, 45600, 45950], [1530835200000, 45500, 45850, 44650, 44900], [1531094400000, 45500, 46100, 45200, 45600], [1531180800000, 46200, 46550, 46100, 46300], [1531267200000, 46400, 46450, 45400, 46000], [1531353600000, 45900, 46250, 45450, 45500], [1531440000000, 45800, 46500, 45750, 46500], [1531699200000, 46800, 46800, 46000, 46050], [1531785600000, 46150, 46200, 45600, 45850], [1531872000000, 46700, 47200, 46450, 46550], [1531958400000, 47050, 47200, 46600, 46900], [1532044800000, 47000, 47600, 46700, 47450], [1532304000000, 47100, 47200, 46150, 46500], [1532390400000, 46350, 46600, 45950, 46150], [1532476800000, 46250, 46550, 45900, 46150], [1532563200000, 46100, 47000, 46000, 46900], [1532649600000, 46450, 47000, 46450, 46900], [1532908800000, 46550, 46800, 46350, 46500], [1532995200000, 46200, 46450, 46000, 46250], [1533081600000, 46050, 46850, 46050, 46550], [1533168000000, 46550, 46800, 45500, 45550], [1533254400000, 45850, 45900, 45450, 45750], [1533513600000, 46150, 46150, 45750, 45800], [1533600000000, 46300, 46750, 45900, 46700], [1533686400000, 47000, 47000, 46550, 46800], [1533772800000, 47000, 47050, 46450, 46900], [1533859200000, 46150, 46400, 44850, 45400], [1534118400000, 44950, 45100, 44650, 45050], [1534204800000, 44850, 45400, 44850, 45150], [1534377600000, 43800, 44650, 43700, 44250], [1534464000000, 44050, 44400, 44050, 44100], [1534723200000, 43500, 44200, 43500, 43850], [1534809600000, 43700, 44900, 43700, 44800], [1534896000000, 45150, 46200, 44900, 46100], [1534982400000, 46150, 46200, 45700, 46200], [1535068800000, 45900, 46400, 45550, 46150], [1535328000000, 46100, 46550, 46000, 46300], [1535414400000, 46800, 46950, 46300, 46550], [1535500800000, 46750, 46800, 46400, 46800], [1535587200000, 46950, 47950, 46700, 47650], [1535673600000, 47100, 48450, 47000, 48450], [1535932800000, 48200, 48300, 47300, 47450], [1536019200000, 47550, 47800, 47200, 47650], [1536105600000, 47300, 47450, 46400, 46600], [1536192000000, 46200, 46400, 45800, 46100], [1536278400000, 44500, 45200, 44400, 44900], [1536537600000, 45450, 45550, 45000, 45500], [1536624000000, 45550, 45900, 45050, 45050], [1536710400000, 44900, 45100, 44500, 44550], [1536796800000, 44550, 44750, 44000, 44050], [1536883200000, 45000, 45850, 44900, 45850], [1537142400000, 45550, 45800, 44900, 45150], [1537228800000, 44950, 45900, 44700, 45500], [1537315200000, 46000, 46200, 45700, 46150], [1537401600000, 46850, 47600, 46400, 47250], [1537488000000, 46550, 47550, 46550, 47400], [1538006400000, 46950, 47500, 46450, 47500], [1538092800000, 47250, 47250, 46300, 46450], [1538352000000, 46450, 46800, 45800, 46350], [1538438400000, 46450, 46700, 45700, 45700], [1538611200000, 45150, 45600, 44700, 44700], [1538697600000, 44800, 45500, 44550, 44700], [1538956800000, 44200, 45200, 44200, 44950], [1539129600000, 45250, 45500, 44500, 45300], [1539216000000, 44000, 44650, 43100, 43100], [1539302400000, 43200, 44650, 43200, 44000], [1539561600000, 44050, 44050, 43350, 43800], [1539648000000, 43700, 44150, 43350, 43600], [1539734400000, 44150, 44500, 44000, 44150], [1539820800000, 43950, 44450, 43700, 44050], [1539907200000, 43900, 44150, 43450, 43900], [1540166400000, 43450, 43950, 43200, 43550], [1540252800000, 43300, 43450, 42550, 43050], [1540339200000, 43050, 43100, 42250, 42550], [1540425600000, 40600, 41550, 40550, 41000], [1540512000000, 41100, 41300, 40400, 41000], [1540771200000, 40850, 41950, 40550, 41400], [1540857600000, 41400, 43000, 41000, 42350], [1540944000000, 42900, 43350, 41700, 42400], [1541030400000, 42450, 42950, 42150, 42150], [1541116800000, 43050, 44250, 42800, 44150], [1541376000000, 43750, 43800, 42900, 43800], [1541462400000, 43750, 43800, 42950, 43750], [1541548800000, 43600, 44500, 43400, 44000], [1541635200000, 44900, 45050, 44050, 44050], [1541721600000, 44450, 44850, 43900, 44300], [1541980800000, 43850, 45250, 43700, 45200], [1542067200000, 43900, 44500, 43400, 44500], [1542153600000, 44500, 44500, 43800, 44100], [1542240000000, 44050, 44350, 43500, 44250], [1542326400000, 44600, 44750, 43700, 44000], [1542585600000, 44050, 44250, 43450, 43650], [1542672000000, 42450, 43000, 42100, 42800], [1542758400000, 41800, 42300, 41800, 42100], [1542844800000, 42000, 42650, 42000, 42450], [1542931200000, 42450, 42600, 41900, 42400], [1543190400000, 42150, 42800, 42100, 42600], [1543276800000, 42900, 43100, 42500, 43050], [1543363200000, 42800, 43200, 42750, 43150], [1543449600000, 43850, 43850, 42900, 43150], [1543536000000, 43450, 44000, 41750, 41850], [1543795200000, 42750, 43400, 42400, 43250], [1543881600000, 42650, 42900, 41900, 42150], [1543968000000, 40900, 41750, 40850, 41450], [1544054400000, 40600, 41100, 40450, 40500], [1544140800000, 40900, 41400, 40850, 40950], [1544400000000, 40450, 40650, 40000, 40200], [1544486400000, 40600, 40700, 40200, 40250], [1544572800000, 40250, 40700, 40150, 40450], [1544659200000, 40650, 40750, 40000, 40000], [1544745600000, 40200, 40200, 38700, 38950], [1545004800000, 38650, 39600, 38650, 39150], [1545091200000, 38300, 39200, 38300, 38900], [1545177600000, 38900, 39350, 38850, 39100], [1545264000000, 38600, 39100, 38500, 38650], [1545350400000, 38200, 38650, 38100, 38650], [1545609600000, 38500, 39050, 38300, 38800], [1545782400000, 38400, 38750, 38300, 38350], [1545868800000, 38700, 38800, 38100, 38250], [1545955200000, 38250, 38900, 38200, 38700], [1546387200000, 39400, 39400, 38550, 38750], [1546473600000, 38300, 38550, 37450, 37600], [1546560000000, 37450, 37600, 36850, 37450], [1546819200000, 38000, 38900, 37800, 38750], [1546905600000, 38000, 39200, 37950, 38100], [1546992000000, 38650, 39600, 38300, 39600], [1547078400000, 40000, 40150, 39600, 39800], [1547164800000, 40350, 40550, 39950, 40500], [1547424000000, 40450, 40700, 39850, 40050], [1547510400000, 40050, 41100, 39850, 41100], [1547596800000, 41150, 41450, 40700, 41450], [1547683200000, 41700, 42100, 41450, 41950], [1547769600000, 42000, 42400, 41950, 42300], [1548028800000, 42700, 42750, 41900, 42750], [1548115200000, 42750, 42850, 41850, 42150], [1548201600000, 41350, 42250, 41350, 42000], [1548288000000, 43050, 43100, 42350, 43050], [1548374400000, 44300, 44750, 43750, 44750], [1548633600000, 45000, 45500, 44600, 45050], [1548720000000, 45050, 45500, 44350, 45500], [1548806400000, 44800, 46400, 44800, 46400], [1548892800000, 46650, 47050, 46150, 46150], [1548979200000, 46650, 46950, 46250, 46350], [1549497600000, 46800, 47100, 46200, 46200], [1549584000000, 45700, 45700, 44650, 44800], [1549843200000, 44500, 45000, 44250, 45000], [1549929600000, 44650, 46250, 44650, 46050], [1550016000000, 46400, 46700, 46000, 46200], [1550102400000, 46600, 47500, 46150, 47500], [1550188800000, 46750, 46850, 45650, 46050], [1550448000000, 46500, 46850, 45850, 46200], [1550534400000, 45850, 46150, 45450, 45950], [1550620800000, 46750, 47100, 46500, 46900], [1550707200000, 46500, 47200, 46200, 46950], [1550793600000, 46500, 47150, 46450, 47150], [1551052800000, 47400, 47550, 47050, 47350], [1551139200000, 47350, 47450, 46500, 46750], [1551225600000, 47000, 47250, 46750, 46750], [1551312000000, 46400, 46500, 45100, 45100], [1551657600000, 46000, 46100, 44800, 44850], [1551744000000, 44600, 45100, 44150, 44250], [1551830400000, 44000, 44300, 43700, 44000], [1551916800000, 43400, 44950, 43400, 44450], [1552003200000, 44450, 44800, 43800, 43800], [1552262400000, 44400, 44450, 43650, 43650], [1552348800000, 44300, 44950, 44150, 44650], [1552435200000, 44250, 44450, 43700, 43850], [1552521600000, 43700, 44300, 43550, 43850], [1552608000000, 43800, 44250, 43700, 44200], [1552867200000, 43950, 44150, 43450, 43700], [1552953600000, 43750, 43900, 43550, 43900], [1553040000000, 43800, 44200, 43100, 44050], [1553126400000, 44600, 46250, 44050, 45850], [1553212800000, 46850, 47000, 46250, 46550], [1553472000000, 45300, 45650, 44800, 45500], [1553558400000, 45500, 45700, 44900, 45250], [1553644800000, 44750, 45600, 44250, 45350], [1553731200000, 44950, 45200, 44300, 44850], [1553817600000, 44500, 44900, 44200, 44650], [1554076800000, 45200, 45450, 44850, 45050], [1554163200000, 45550, 46100, 45350, 45750], [1554249600000, 46750, 46750, 45800, 46600], [1554336000000, 46150, 47100, 46150, 46950], [1554422400000, 46950, 47550, 46600, 46850], [1554681600000, 47250, 47250, 46150, 46650], [1554768000000, 46700, 46950, 46200, 46650], [1554854400000, 46400, 46700, 46050, 46700], [1554940800000, 46700, 46800, 46150, 46250], [1555027200000, 46050, 46900, 46000, 46850], [1555286400000, 47150, 47500, 47000, 47050], [1555372800000, 47400, 47400, 46800, 47250], [1555459200000, 47300, 47600, 47000, 47050], [1555545600000, 47200, 47250, 45500, 45600], [1555632000000, 45750, 46000, 45250, 45300], [1555891200000, 45400, 45900, 45100, 45350], [1555977600000, 45050, 45500, 45000, 45200], [1556064000000, 45400, 45650, 44150, 44750], [1556150400000, 44250, 45000, 44100, 44650], [1556236800000, 44200, 45000, 43800, 44850], [1556496000000, 45150, 46150, 45100, 46150], [1556582400000, 46000, 46300, 45350, 45850], [1556755200000, 45500, 46150, 45400, 45900], [1556841600000, 45900, 46050, 45300, 45300], [1557187200000, 45250, 45300, 44400, 44850], [1557273600000, 44300, 44850, 44200, 44250], [1557360000000, 43900, 44250, 42450, 42450], [1557446400000, 42600, 43450, 42450, 42900], [1557705600000, 42500, 43200, 42350, 42650], [1557792000000, 41300, 43100, 41300, 42650], [1557878400000, 42700, 43050, 42550, 42550], [1557964800000, 42350, 42400, 41350, 41550], [1558051200000, 41950, 42050, 40850, 41200], [1558310400000, 41650, 42100, 41550, 42000], [1558396800000, 42600, 43950, 42350, 43150], [1558483200000, 43700, 43800, 42400, 43500], [1558569600000, 43900, 44000, 43250, 43850], [1558656000000, 43800, 43800, 42400, 42700], [1558915200000, 42500, 43000, 42350, 42650], [1559001600000, 42550, 42950, 42150, 42550], [1559088000000, 41850, 42100, 41300, 41800], [1559174400000, 42200, 42700, 42150, 42550], [1559260800000, 42600, 42800, 42150, 42500], [1559520000000, 42950, 43900, 42500, 43800], [1559606400000, 43400, 43700, 43000, 43450], [1559692800000, 44050, 44200, 43700, 43900], [1559865600000, 43600, 44350, 43450, 44200], [1560124800000, 44300, 44850, 44050, 44800], [1560211200000, 44800, 45000, 44550, 44850], [1560297600000, 44800, 45050, 44300, 44600], [1560384000000, 44200, 44400, 43400, 43750], [1560470400000, 43750, 44150, 43300, 44000], [1560729600000, 43750, 44050, 43400, 43900], [1560816000000, 43750, 44500, 43650, 44350], [1560902400000, 45450, 45450, 45000, 45350], [1560988800000, 44850, 45500, 44850, 45500], [1561075200000, 45750, 45800, 45200, 45700], [1561334400000, 45200, 45800, 45200, 45500], [1561420800000, 45200, 45800, 45200, 45600], [1561507200000, 45800, 46000, 45600, 45700], [1561593600000, 46000, 46600, 45750, 46500], [1561680000000, 47000, 47000, 46700, 47000], [1561939200000, 47350, 47400, 46250, 46600], [1562025600000, 46200, 46900, 45850, 46250], [1562112000000, 45750, 46350, 45200, 45400], [1562198400000, 45250, 46200, 45250, 46000], [1562284800000, 45950, 45950, 45250, 45650], [1562544000000, 44750, 44800, 44350, 44400], [1562630400000, 44850, 45450, 44700, 45100], [1562716800000, 45550, 46150, 45500, 45550], [1562803200000, 46350, 46550, 46150, 46200], [1562889600000, 46350, 46400, 45800, 46300], [1563148800000, 45950, 46650, 45750, 46450], [1563235200000, 46450, 46850, 46300, 46850], [1563321600000, 46150, 46350, 45950, 46050], [1563408000000, 46450, 46450, 45650, 46100], [1563494400000, 46650, 46950, 46600, 46800], [1563753600000, 46800, 47300, 46600, 47200], [1563840000000, 47350, 47550, 47050, 47300], [1563926400000, 47100, 47150, 46250, 46400], [1564012800000, 47150, 47200, 46600, 47200], [1564099200000, 46650, 47150, 46550, 47150], [1564358400000, 46800, 47050, 46000, 46100], [1564444800000, 46300, 46850, 46300, 46550], [1564531200000, 46200, 46600, 45000, 45350], [1564617600000, 44900, 45500, 44850, 45200], [1564704000000, 44550, 45500, 44300, 44950], [1564963200000, 44350, 44600, 43600, 43950], [1565049600000, 42500, 43800, 42500, 43500], [1565136000000, 43600, 43900, 43100, 43200], [1565222400000, 43250, 43500, 42650, 42650], [1565308800000, 43250, 43350, 43050, 43150], [1565568000000, 44000, 44000, 43550, 43700], [1565654400000, 43500, 43500, 42950, 43000], [1565740800000, 43900, 44250, 43500, 43700], [1565913600000, 43800, 43900, 43300, 43900], [1566172800000, 44350, 44350, 43500, 43600], [1566259200000, 43950, 44600, 43550, 44450], [1566345600000, 44350, 44800, 44150, 44500], [1566432000000, 44500, 44700, 43850, 44050], [1566518400000, 43800, 44200, 43650, 43950], [1566777600000, 43050, 43800, 42950, 43600], [1566864000000, 43650, 44200, 43600, 44050], [1566950400000, 44100, 44400, 43750, 44150], [1567036800000, 44200, 44200, 43050, 43400], [1567123200000, 43750, 44300, 43750, 44000], [1567382400000, 44850, 44850, 43650, 43800], [1567468800000, 43550, 43650, 43100, 43250], [1567555200000, 43250, 44100, 43150, 44100], [1567641600000, 44800, 46100, 44450, 45700], [1567728000000, 46500, 46500, 45850, 46300], [1567987200000, 46450, 47000, 46300, 46900], [1568073600000, 47100, 47200, 46550, 47000], [1568160000000, 47300, 47400, 46800, 47150], [1568592000000, 47000, 47100, 46400, 47100], [1568678400000, 47000, 47100, 46800, 46900], [1568764800000, 46900, 47700, 46800, 47700], [1568851200000, 48050, 49200, 47850, 49150], [1568937600000, 49400, 49600, 49100, 49200], [1569196800000, 49250, 49300, 49000, 49300], [1569283200000, 49050, 49650, 48850, 49500], [1569369600000, 49200, 49350, 48800, 48900], [1569456000000, 49000, 49250, 48900, 49200], [1569542400000, 48000, 48700, 48000, 48400], [1569801600000, 48050, 49250, 47900, 49050], [1569888000000, 48900, 49100, 48650, 48850], [1569974400000, 48350, 48400, 47600, 47600], [1570147200000, 47400, 48650, 47350, 48000], [1570406400000, 48350, 48700, 47650, 47750], [1570492800000, 47900, 49000, 47600, 48900], [1570665600000, 48200, 49200, 48000, 48550], [1570752000000, 49000, 49450, 48800, 49150], [1571011200000, 50000, 50300, 49850, 50000], [1571097600000, 49900, 50200, 49900, 50100], [1571184000000, 50700, 50900, 50400, 50700], [1571270400000, 50500, 50600, 50100, 50500], [1571356800000, 50300, 50900, 49650, 49900], [1571616000000, 49900, 50400, 49800, 50300], [1571702400000, 50800, 51500, 50700, 51200], [1571788800000, 51300, 51500, 50800, 51200], [1571875200000, 52500, 52500, 50500, 50700], [1571961600000, 50800, 51200, 50500, 50900], [1572220800000, 50700, 51500, 50700, 51300], [1572307200000, 51400, 51700, 50800, 51100], [1572393600000, 50700, 50800, 50200, 50400], [1572480000000, 51000, 51400, 50300, 50400], [1572566400000, 50600, 51200, 50400, 51200], [1572825600000, 51700, 52300, 51400, 52300], [1572912000000, 52400, 52700, 52100, 52700], [1572998400000, 52900, 53500, 52700, 53300], [1573084800000, 53400, 53400, 52400, 52900], [1573171200000, 53200, 53300, 52000, 52100], [1573430400000, 52200, 52200, 51400, 51600], [1573516800000, 51800, 52600, 51600, 52600], [1573603200000, 52500, 52500, 52000, 52500], [1573689600000, 51900, 52800, 51900, 52800], [1573776000000, 52900, 53700, 52600, 53700], [1574035200000, 53600, 53800, 53200, 53500], [1574121600000, 53200, 53500, 52700, 53500], [1574208000000, 53400, 53400, 52000, 52000], [1574294400000, 51600, 52100, 50600, 51000], [1574380800000, 51000, 51600, 50900, 51600], [1574640000000, 52200, 52600, 51700, 51800], [1574726400000, 51900, 52900, 51800, 51800], [1574812800000, 51800, 52300, 51600, 52200], [1574899200000, 51900, 52100, 51300, 51300], [1574985600000, 51200, 51400, 50200, 50300], [1575244800000, 50900, 51300, 50400, 50400], [1575331200000, 49800, 50300, 49500, 49900], [1575417600000, 49600, 49850, 49000, 49450], [1575504000000, 50200, 50400, 49500, 49500], [1575590400000, 50100, 50900, 49950, 50400], [1575849600000, 50900, 51400, 50700, 51200], [1575936000000, 51000, 51600, 50700, 51500], [1576022400000, 51500, 52200, 51400, 51900], [1576108800000, 53000, 53300, 52700, 53300], [1576195200000, 54500, 54800, 53900, 54700], [1576454400000, 54500, 54900, 54300, 54700], [1576540800000, 55800, 56700, 55400, 56700], [1576627200000, 56700, 57200, 56000, 56300], [1576713600000, 57000, 57300, 55500, 56000], [1576800000000, 56100, 56500, 55600, 56000], [1577059200000, 56100, 56400, 55100, 55500], [1577145600000, 55600, 55700, 54800, 55000], [1577318400000, 54700, 55400, 54400, 55400], [1577404800000, 55700, 56900, 55500, 56500], [1577664000000, 56200, 56600, 55700, 55800], [1577923200000, 55500, 56000, 55000, 55200], [1578009600000, 56000, 56600, 54900, 55500], [1578268800000, 54900, 55600, 54600, 55500], [1578355200000, 55700, 56400, 55600, 55800], [1578441600000, 56200, 57400, 55900, 56800], [1578528000000, 58400, 58600, 57400, 58600], [1578614400000, 58800, 59700, 58300, 59500], [1578873600000, 59600, 60000, 59100, 60000], [1578960000000, 60400, 61000, 59900, 60000], [1579046400000, 59500, 59600, 58900, 59000], [1579132800000, 59100, 60700, 59000, 60700], [1579219200000, 61900, 62000, 61000, 61300], [1579478400000, 62000, 62800, 61700, 62400], [1579564800000, 62000, 62400, 61200, 61400], [1579651200000, 60500, 62600, 60400, 62300], [1579737600000, 61800, 61800, 60700, 60800], [1580169600000, 59400, 59400, 58300, 58800], [1580256000000, 59100, 59700, 58800, 59100], [1580342400000, 58800, 58800, 56800, 57200], [1580428800000, 57800, 58400, 56400, 56400], [1580688000000, 55500, 57400, 55200, 57200], [1580774400000, 57100, 59000, 56800, 58900], [1580860800000, 60000, 60200, 58900, 59500], [1580947200000, 60100, 61100, 59700, 61100], [1581033600000, 61100, 61200, 59700, 60400], [1581292800000, 59200, 59800, 59100, 59700], [1581379200000, 59800, 60700, 59700, 59900], [1581465600000, 60300, 60700, 59700, 60500], [1581552000000, 61200, 61600, 60500, 60700], [1581638400000, 60900, 61900, 60200, 61800], [1581897600000, 61600, 62000, 61200, 61500], [1581984000000, 60800, 60900, 59700, 59800], [1582070400000, 59800, 60400, 59400, 60200], [1582156800000, 60700, 61300, 59600, 60000], [1582243200000, 58800, 59800, 58500, 59200], [1582502400000, 57400, 58100, 56800, 56800], [1582588800000, 56200, 58000, 56200, 57900], [1582675200000, 56000, 57000, 56000, 56500], [1582761600000, 56300, 56900, 55500, 55900], [1582848000000, 55000, 55500, 54200, 54200], [1583107200000, 54300, 55500, 53600, 55000], [1583193600000, 56700, 56900, 55100, 55400], [1583280000000, 54800, 57600, 54600, 57400], [1583366400000, 57600, 58000, 56700, 57800], [1583452800000, 56500, 57200, 56200, 56500], [1583712000000, 54700, 55000, 53600, 54200], [1583798400000, 53800, 54900, 53700, 54600], [1583884800000, 54300, 54400, 52000, 52100], [1583971200000, 51000, 51900, 49300, 50800], [1584057600000, 47450, 51600, 46850, 49950], [1584316800000, 50100, 50900, 48800, 48900], [1584403200000, 46900, 49650, 46700, 47300], [1584489600000, 47750, 48350, 45600, 45600], [1584576000000, 46400, 46650, 42300, 42950], [1584662400000, 44150, 45500, 43550, 45400], [1584921600000, 42600, 43550, 42400, 42500], [1585008000000, 43850, 46950, 43050, 46950], [1585094400000, 48950, 49600, 47150, 48650], [1585180800000, 49000, 49300, 47700, 47800], [1585267200000, 49600, 49700, 46850, 48300], [1585526400000, 47050, 48350, 46550, 47850], [1585612800000, 48000, 48500, 47150, 47750], [1585699200000, 47450, 47900, 45800, 45800], [1585785600000, 46200, 46850, 45350, 46800], [1585872000000, 47400, 47600, 46550, 47000], [1586131200000, 47500, 48800, 47250, 48700], [1586217600000, 49650, 50200, 49000, 49600], [1586304000000, 49600, 49750, 48600, 48600], [1586390400000, 49750, 49800, 48700, 49100], [1586476800000, 48950, 49250, 48650, 49250], [1586736000000, 48650, 48900, 48300, 48300], [1586822400000, 48800, 49200, 48300, 49000], [1586995200000, 49350, 49350, 48550, 49000], [1587081600000, 50800, 52000, 50300, 51400], [1587340800000, 51400, 51400, 50000, 50100], [1587427200000, 49400, 49700, 48700, 49250], [1587513600000, 48700, 50000, 48350, 49850], [1587600000000, 50200, 50300, 49500, 49850], [1587686400000, 49650, 49750, 49000, 49350], [1587945600000, 49350, 50000, 49100, 49850], [1588032000000, 49850, 50100, 49300, 50100], [1588118400000, 49900, 50500, 49600, 50000], [1588550400000, 48900, 49100, 48500, 48500], [1588723200000, 49000, 49200, 48500, 49200], [1588809600000, 49200, 49300, 48700, 48800], [1588896000000, 49100, 49350, 48800, 48800], [1589155200000, 48900, 49250, 48300, 48400], [1589241600000, 48400, 48500, 47550, 47900], [1589328000000, 47250, 48550, 47200, 48550], [1589414400000, 47750, 48100, 47650, 48000], [1589500800000, 48400, 48450, 47700, 47850], [1589760000000, 47950, 49100, 47600, 48800], [1589846400000, 50100, 50500, 49700, 50300], [1589932800000, 50000, 50200, 49800, 50000], [1590019200000, 50300, 50400, 49850, 49950], [1590105600000, 49600, 49800, 48600, 48750], [1590364800000, 48750, 48900, 48450, 48850], [1590451200000, 48700, 49450, 48600, 49250], [1590537600000, 48950, 50000, 48800, 49900], [1590624000000, 51100, 51200, 49900, 50400], [1590710400000, 50000, 50700, 49700, 50700], [1590969600000, 50800, 51200, 50600, 51200], [1591056000000, 51000, 51500, 50800, 51400], [1591142400000, 51800, 55000, 51700, 54500], [1591228800000, 55800, 57000, 54600, 54600], [1591315200000, 54400, 55900, 54000, 55500], [1591574400000, 56400, 56500, 54700, 54900], [1591660800000, 55800, 56500, 54400, 55500], [1591747200000, 55100, 55900, 54900, 55400], [1591833600000, 54500, 55100, 53200, 54300], [1591920000000, 52100, 52800, 51500, 52300], [1592179200000, 51400, 52000, 49900, 49900], [1592265600000, 51200, 52100, 50600, 52100], [1592352000000, 52100, 52900, 51300, 52200], [1592438400000, 52200, 52300, 51600, 52300], [1592524800000, 52600, 52900, 51600, 52900], [1592784000000, 52000, 52600, 51800, 52000], [1592870400000, 52500, 52800, 51100, 51400], [1592956800000, 51900, 53900, 51600, 52900], [1593043200000, 52100, 53000, 51900, 51900], [1593129600000, 52800, 53900, 52200, 53300], [1593388800000, 52500, 53200, 52000, 52400], [1593475200000, 53900, 53900, 52800, 52800], [1593561600000, 53400, 53600, 52400, 52600], [1593648000000, 52100, 52900, 52100, 52900], [1593734400000, 53000, 53600, 52700, 53600], [1593993600000, 54000, 55000, 53800, 55000], [1594080000000, 55800, 55900, 53400, 53400], [1594166400000, 53600, 53900, 52900, 53000], [1594252800000, 53200, 53600, 52800, 52800], [1594339200000, 53100, 53200, 52300, 52700], [1594598400000, 53300, 53800, 53100, 53400], [1594684800000, 53700, 53800, 53200, 53800], [1594771200000, 54400, 55000, 54300, 54700], [1594857600000, 54800, 54800, 53800, 53800], [1594944000000, 54200, 54700, 54100, 54400], [1595203200000, 54800, 54800, 54000, 54200], [1595289600000, 55200, 55400, 54800, 55300], [1595376000000, 55300, 55500, 54700, 54700], [1595462400000, 54700, 54700, 53800, 54100], [1595548800000, 54000, 54400, 53700, 54200], [1595808000000, 54300, 55700, 54300, 55600], [1595894400000, 57000, 58800, 56400, 58600], [1595980800000, 60300, 60400, 58600, 59000], [1596067200000, 59700, 60100, 59000, 59000], [1596153600000, 59500, 59600, 57700, 57900], [1596412800000, 57800, 57900, 56700, 56800], [1596499200000, 57200, 58100, 57000, 57300], [1596585600000, 57300, 57500, 56300, 56900], [1596672000000, 57100, 58400, 57100, 58000], [1596758400000, 57900, 58400, 57100, 57500], [1597017600000, 57600, 58300, 57500, 57800], [1597104000000, 58000, 59500, 57800, 58200], [1597190400000, 58200, 59000, 57700, 59000], [1597276800000, 59400, 59600, 58000, 58700], [1597363200000, 58000, 58400, 57700, 58000], [1597708800000, 58900, 59900, 58000, 58400], [1597795200000, 59000, 59200, 57800, 57800], [1597881600000, 57600, 57600, 55300, 55400], [1597968000000, 56200, 56900, 55800, 55900], [1598227200000, 55800, 56600, 55400, 56100], [1598313600000, 56400, 56800, 56100, 56400], [1598400000000, 56400, 56500, 55700, 56400], [1598486400000, 56300, 56300, 55600, 55600], [1598572800000, 56100, 56300, 55400, 55400], [1598832000000, 56000, 56100, 54000, 54000], [1598918400000, 54100, 54800, 54100, 54200], [1599004800000, 54600, 55100, 54100, 54400], [1599091200000, 55600, 56700, 55500, 56400], [1599177600000, 55200, 55800, 55100, 55600], [1599436800000, 56100, 57300, 55800, 56500], [1599523200000, 57400, 58700, 57200, 58700], [1599609600000, 58200, 59300, 57800, 58400], [1599696000000, 59900, 60000, 59100, 59200], [1599782400000, 59300, 59400, 58200, 59000], [1600041600000, 60200, 60800, 59900, 60400], [1600128000000, 60900, 61000, 60500, 61000], [1600214400000, 61100, 61300, 60600, 61000], [1600300800000, 60700, 60800, 59300, 59500], [1600387200000, 59800, 59900, 59100, 59300], [1600646400000, 59100, 60000, 59000, 59200], [1600732800000, 59100, 59700, 57800, 58200], [1600819200000, 58400, 58800, 57400, 58600], [1600905600000, 57700, 58600, 57600, 57800], [1600992000000, 57700, 58200, 57700, 57900], [1601251200000, 58300, 58800, 57900, 58200], [1601337600000, 58300, 59000, 58200, 58200], [1601856000000, 57500, 59200, 57500, 58700], [1601942400000, 59400, 59900, 58700, 59000], [1602028800000, 58700, 59900, 58500, 59900], [1602115200000, 60500, 60700, 59500, 59700], [1602460800000, 60000, 60400, 59900, 60400], [1602547200000, 61000, 61400, 60400, 60900], [1602633600000, 61000, 61100, 60500, 60900], [1602720000000, 60700, 60800, 59700, 60000], [1602806400000, 60000, 60400, 59000, 59500], [1603065600000, 59600, 60200, 59500, 60000], [1603152000000, 60300, 60900, 60100, 60900], [1603238400000, 61200, 61500, 60600, 60900], [1603324800000, 60300, 60500, 59800, 60100], [1603411200000, 60400, 60400, 59800, 60200], [1603670400000, 60400, 61100, 60100, 60400], [1603756800000, 60300, 60300, 59500, 59800], [1603843200000, 59400, 59400, 58800, 59000], [1603929600000, 58200, 58500, 57500, 58100], [1604016000000, 58000, 58000, 56600, 56600], [1604275200000, 56400, 57500, 56000, 57400], [1604361600000, 57900, 58900, 57600, 58800], [1604448000000, 58900, 59000, 57800, 58500], [1604534400000, 59000, 60300, 58800, 60300], [1604620800000, 60700, 60800, 59600, 60100], [1604880000000, 60700, 60900, 60100, 60200], [1604966400000, 60500, 60500, 59500, 60200], [1605052800000, 60700, 61400, 60400, 61300], [1605139200000, 61000, 61400, 60700, 61000], [1605225600000, 61300, 63200, 61000, 63200], [1605484800000, 64000, 66700, 63900, 66300], [1605571200000, 67000, 67000, 65600, 65700], [1605657600000, 65700, 66200, 64700, 64800], [1605744000000, 64100, 64800, 63900, 64600], [1605830400000, 63900, 65200, 63900, 64700], [1606089600000, 64800, 67800, 64700, 67500], [1606176000000, 67900, 69500, 67000, 67700], [1606262400000, 67900, 68300, 66500, 66600], [1606348800000, 66100, 68000, 66000, 68000], [1606435200000, 68000, 68400, 67600, 68200], [1606694400000, 68400, 68600, 66700, 66700], [1606780800000, 67100, 68300, 67100, 67800], [1606867200000, 68400, 69900, 68300, 69500], [1606953600000, 70100, 70500, 69300, 69700], [1607040000000, 70400, 72100, 70100, 71500], [1607299200000, 72400, 73500, 71900, 72900], [1607385600000, 72200, 72900, 71600, 71700], [1607472000000, 72100, 73900, 72000, 73900], [1607558400000, 72700, 73800, 72500, 72900], [1607644800000, 73500, 73800, 73100, 73400], [1607904000000, 73600, 74500, 73200, 73800], [1607990400000, 73800, 74100, 73300, 73800], [1608076800000, 74100, 74500, 73400, 73800], [1608163200000, 73400, 73700, 72600, 73300], [1608249600000, 73300, 73700, 73000, 73000], [1608508800000, 73100, 73400, 72000, 73000], [1608595200000, 72500, 73200, 72100, 72300], [1608681600000, 72400, 74000, 72300, 73900], [1608768000000, 74100, 78800, 74000, 77800], [1609113600000, 79000, 80100, 78200, 78700], [1609200000000, 78800, 78900, 77300, 78300], [1609286400000, 77400, 81300, 77300, 81000], [1609718400000, 81000, 84400, 80200, 83000], [1609804800000, 81600, 83900, 81600, 83900], [1609891200000, 83300, 84500, 82100, 82200], [1609977600000, 82800, 84200, 82700, 82900], [1610064000000, 83300, 90000, 83000, 88800], [1610323200000, 90000, 96800, 89500, 91000], [1610409600000, 90300, 91400, 87800, 90600], [1610496000000, 89800, 91200, 89100, 89700], [1610582400000, 88700, 90000, 88700, 89700], [1610668800000, 89800, 91800, 88000, 88000], [1610928000000, 86600, 87300, 84100, 85000], [1611014400000, 84500, 88000, 83600, 87000], [1611100800000, 89000, 89000, 86500, 87200], [1611187200000, 87500, 88600, 86500, 88100], [1611273600000, 89000, 89700, 86800, 86800], [1611532800000, 87000, 89900, 86300, 89400], [1611619200000, 88800, 89200, 86500, 86700], [1611705600000, 86600, 87700, 85600, 85600], [1611792000000, 83200, 85600, 83200, 83700], [1611878400000, 84500, 85000, 82000, 82000], [1612137600000, 81700, 83400, 81000, 83000], [1612224000000, 84100, 86400, 83700, 84400], [1612310400000, 84800, 85400, 83400, 84600], [1612396800000, 83500, 83800, 82100, 82500], [1612483200000, 83100, 84000, 82500, 83500], [1612742400000, 83800, 84200, 83000, 83000], [1612828800000, 84000, 84800, 82700, 82700], [1612915200000, 82600, 82600, 81600, 81600], [1613347200000, 83800, 84500, 83300, 84200], [1613433600000, 84500, 86000, 84200, 84900], [1613520000000, 83900, 84200, 83000, 83200], [1613606400000, 83200, 83600, 82100, 82100], [1613692800000, 82300, 82800, 81000, 82600], [1613952000000, 83800, 84200, 82200, 82200], [1614038400000, 81200, 82900, 81100, 82000], [1614124800000, 81800, 83600, 81300, 82000], [1614211200000, 84000, 85400, 83000, 85300], [1614297600000, 82800, 83400, 82000, 82500], [1614643200000, 85100, 85300, 83000, 83600], [1614729600000, 83500, 84000, 82800, 84000], [1614816000000, 82600, 83200, 82200, 82400], [1614902400000, 81100, 82600, 81100, 82100], [1615161600000, 82900, 83000, 81600, 82000], [1615248000000, 81400, 81900, 80600, 81400], [1615334400000, 82400, 82500, 80700, 80900], [1615420800000, 81000, 82500, 81000, 82000], [1615507200000, 83100, 83500, 82400, 82800], [1615766400000, 82800, 82900, 81800, 81800], [1615852800000, 82200, 83000, 82100, 82800], [1615939200000, 82800, 82900, 82000, 82300], [1616025600000, 82800, 83800, 82600, 82900], [1616112000000, 82100, 82500, 81800, 81900], [1616371200000, 82000, 82300, 81700, 82000], [1616457600000, 82600, 82900, 81800, 81800], [1616544000000, 81000, 81600, 80700, 81000], [1616630400000, 81000, 82100, 80800, 81200], [1616716800000, 81400, 81600, 81000, 81500], [1616976000000, 81700, 81700, 81000, 81600], [1617062400000, 81600, 82300, 81300, 82200], [1617148800000, 82400, 82700, 81400, 81400], [1617235200000, 82500, 83000, 82000, 82900], [1617321600000, 84000, 85200, 83900, 84800], [1617580800000, 85800, 86000, 84800, 85400], [1617667200000, 86200, 86200, 85100, 86000], [1617753600000, 86100, 86200, 85400, 85600], [1617840000000, 85700, 85700, 84100, 84700], [1617926400000, 84700, 84900, 83400, 83600], [1618185600000, 84100, 84100, 83100, 83200], [1618272000000, 83000, 84500, 82800, 84000], [1618358400000, 84000, 84300, 83400, 84000], [1618444800000, 83700, 84500, 83400, 84100], [1618531200000, 84700, 84700, 83600, 83900], [1618790400000, 83800, 84000, 83300, 83300], [1618876800000, 83300, 84000, 83100, 83900], [1618963200000, 83300, 83500, 82500, 82600], [1619049600000, 82900, 83000, 82400, 82400], [1619136000000, 81900, 82900, 81600, 82800], [1619395200000, 82900, 83500, 82600, 83500], [1619481600000, 83200, 83300, 82500, 82900], [1619568000000, 83200, 83200, 82100, 82100], [1619654400000, 82400, 82500, 81500, 81700], [1619740800000, 81900, 82100, 81500, 81500], [1620000000000, 81000, 82400, 81000, 81700], [1620086400000, 81900, 82600, 81800, 82600], [1620259200000, 81700, 82300, 81700, 82300], [1620345600000, 81800, 82100, 81500, 81900], [1620604800000, 82300, 83500, 81800, 83200], [1620691200000, 82500, 82600, 81100, 81200], [1620777600000, 80800, 81200, 79800, 80000], [1620864000000, 78900, 79600, 78400, 78500], [1620950400000, 79000, 80300, 78900, 80100], [1621209600000, 80800, 80900, 79200, 79600], [1621296000000, 79600, 80000, 79100, 79600], [1621468800000, 79400, 79700, 79100, 79500], [1621555200000, 80100, 81500, 79800, 80100], [1621814400000, 80100, 80400, 79500, 79700], [1621900800000, 80000, 80400, 79800, 79900], [1621987200000, 80400, 80500, 79700, 79800], [1622073600000, 80000, 80000, 79100, 79600], [1622160000000, 79800, 80400, 79400, 80100], [1622419200000, 80300, 80600, 79600, 80500], [1622505600000, 80500, 81300, 80100, 80600], [1622592000000, 80400, 81400, 80300, 80800], [1622678400000, 81300, 83000, 81100, 82800], [1622764800000, 82700, 82700, 81500, 82200], [1623024000000, 82700, 82800, 81600, 81900], [1623110400000, 82300, 82600, 81800, 81900], [1623196800000, 81500, 82000, 81100, 81100], [1623283200000, 81300, 81400, 80900, 81000], [1623369600000, 81200, 81700, 80700, 81000], [1623628800000, 80800, 80900, 80500, 80500], [1623715200000, 80900, 81200, 80600, 80900], [1623801600000, 81500, 81900, 81100, 81800], [1623888000000, 81100, 81300, 80700, 80900], [1623974400000, 81100, 81100, 80500, 80500], [1624233600000, 79700, 80000, 79600, 79900], [1624320000000, 80200, 80300, 79900, 80000], [1624406400000, 80500, 80600, 79900, 80100], [1624492800000, 80400, 81400, 80100, 81200], [1624579200000, 81500, 81900, 81200, 81600], [1624838400000, 81700, 82000, 81600, 81900], [1624924800000, 81900, 82100, 80800, 81000], [1625011200000, 81100, 81400, 80700, 80700], [1625097600000, 80500, 80600, 80000, 80100], [1625184000000, 80000, 80400, 79900, 80000], [1625443200000, 80100, 80800, 80000, 80400], [1625529600000, 80600, 81200, 80500, 81200], [1625616000000, 81200, 81300, 80300, 80800], [1625702400000, 81100, 81200, 79900, 79900], [1625788800000, 79600, 79800, 79000, 79400], [1626048000000, 79900, 80000, 79500, 79700], [1626134400000, 80000, 80200, 79800, 79800], [1626220800000, 79400, 79600, 79100, 79500], [1626307200000, 79800, 80600, 79500, 80600], [1626393600000, 80100, 80100, 79500, 79800], [1626652800000, 79100, 79200, 78800, 79000], [1626739200000, 78500, 79000, 78400, 79000], [1626825600000, 79000, 79100, 78500, 78500], [1626912000000, 79000, 79800, 78900, 79700], [1626998400000, 79700, 79900, 79200, 79300], [1627257600000, 79400, 79500, 78800, 78800], [1627344000000, 79200, 79400, 78500, 78500], [1627430400000, 78300, 79200, 78100, 79200], [1627516800000, 78800, 79400, 78800, 79000], [1627603200000, 78900, 78900, 78500, 78500], [1627862400000, 79200, 79500, 78700, 79300], [1627948800000, 79400, 81400, 79300, 81400], [1628035200000, 82200, 83100, 81800, 82900], [1628121600000, 83300, 83300, 82000, 82100], [1628208000000, 81900, 82500, 81300, 81500], [1628467200000, 81500, 82300, 80900, 81500], [1628553600000, 82300, 82400, 80100, 80200], [1628640000000, 79600, 79800, 78500, 78500], [1628726400000, 77100, 78200, 76900, 77000], [1628812800000, 75800, 76000, 74100, 74400], [1629158400000, 74000, 75100, 74000, 74200], [1629244800000, 73900, 74600, 73100, 73900], [1629331200000, 73500, 74400, 73100, 73100], [1629417600000, 73500, 73900, 72500, 72700], [1629676800000, 73300, 74000, 73000, 73300], [1629763200000, 73900, 75700, 73900, 75600], [1629849600000, 76200, 76600, 74900, 75700], [1629936000000, 76100, 76200, 74600, 74600], [1630022400000, 74300, 75000, 73800, 74300], [1630281600000, 75400, 75500, 74200, 74600], [1630368000000, 74900, 76700, 74300, 76700], [1630454400000, 76700, 77100, 75900, 76800], [1630540800000, 76800, 76800, 75700, 76000], [1630627200000, 76400, 76700, 76000, 76600], [1630886400000, 76800, 77600, 76600, 77300], [1630972800000, 77100, 77100, 75900, 76100], [1631059200000, 76000, 76400, 75600, 76300], [1631145600000, 76400, 76600, 75000, 75300], [1631232000000, 75300, 75600, 74800, 75300], [1631491200000, 75200, 76300, 75100, 76300], [1631577600000, 77100, 77700, 76600, 76600], [1631664000000, 77400, 77400, 76400, 77000], [1631750400000, 77300, 77400, 76100, 76100], [1631836800000, 76300, 77200, 75900, 77200], [1632355200000, 77500, 77600, 76800, 77400], [1632441600000, 77600, 77700, 77100, 77300], [1632700800000, 77300, 77700, 77000, 77700], [1632787200000, 77700, 77800, 76200, 76300], [1632873600000, 74800, 75300, 73800, 74100], [1632960000000, 74300, 74800, 73700, 74100], [1633046400000, 73900, 74000, 72900, 73200], [1633392000000, 73000, 73000, 71400, 72200], [1633478400000, 72600, 72800, 71200, 71300], [1633564800000, 71600, 72100, 71300, 71600], [1633651200000, 72300, 72400, 71500, 71500], [1633996800000, 70700, 70900, 68700, 69000], [1634083200000, 68700, 69600, 68300, 68800], [1634169600000, 69000, 69800, 68800, 69400], [1634256000000, 70200, 71000, 70000, 70100], [1634515200000, 70200, 70300, 69200, 70200], [1634601600000, 70800, 71000, 70400, 70600], [1634688000000, 70700, 71000, 70200, 70300], [1634774400000, 70300, 70600, 70000, 70200], [1634860800000, 70000, 70700, 70000, 70400], [1635120000000, 69900, 70600, 69500, 70200], [1635206400000, 70600, 71500, 70400, 71100], [1635292800000, 71000, 71000, 70000, 70100], [1635379200000, 69500, 72200, 69500, 70700], [1635465600000, 71200, 71600, 69700, 69800], [1635724800000, 70200, 70600, 69900, 69900], [1635811200000, 70800, 72200, 70700, 71500], [1635897600000, 71700, 71700, 70100, 70400], [1635984000000, 71200, 71600, 70500, 70600], [1636070400000, 71600, 71600, 70200, 70200], [1636329600000, 70400, 70600, 69800, 70600], [1636416000000, 70300, 71000, 70100, 70500], [1636502400000, 70300, 70900, 70200, 70200], [1636588800000, 69900, 70000, 69600, 69900], [1636675200000, 70200, 70900, 69900, 70600], [1636934400000, 71700, 71900, 70900, 71400], [1637020800000, 71500, 72000, 71300, 71300], [1637107200000, 71300, 71600, 70600, 70700], [1637193600000, 70700, 71000, 70200, 70200], [1637280000000, 70400, 71400, 70100, 71200], [1637539200000, 73300, 75200, 73000, 74900], [1637625600000, 76000, 76000, 74500, 75300], [1637712000000, 76000, 76200, 74100, 74800], [1637798400000, 75100, 75100, 73600, 73700], [1637884800000, 73500, 74100, 72000, 72300], [1638144000000, 71700, 73000, 71400, 72300], [1638230400000, 73200, 73900, 70500, 71300], [1638316800000, 72000, 74800, 71600, 74400], [1638403200000, 73900, 75800, 73800, 75800], [1638489600000, 75600, 76000, 74100, 75600], [1638748800000, 75100, 76700, 74900, 76300], [1638835200000, 76100, 77700, 75600, 77400], [1638921600000, 78300, 78600, 77100, 77400], [1639008000000, 77400, 78200, 77000, 78200], [1639094400000, 77400, 77600, 76800, 76900], [1639353600000, 77200, 78300, 76500, 76800], [1639440000000, 76500, 77200, 76200, 77000], [1639526400000, 76400, 77600, 76300, 77600], [1639612800000, 78500, 78500, 77400, 77800], [1639699200000, 76800, 78000, 76800, 78000], [1639958400000, 77600, 77800, 76800, 77100], [1640044800000, 77900, 78300, 77500, 78100], [1640131200000, 78900, 79400, 78800, 79400], [1640217600000, 79800, 80000, 79300, 79900], [1640304000000, 80200, 80800, 80200, 80500], [1640563200000, 80600, 80600, 79800, 80200], [1640649600000, 80200, 80400, 79700, 80300], [1640736000000, 80200, 80200, 78500, 78800], [1640822400000, 78900, 79500, 78100, 78300], [1641168000000, 79400, 79800, 78200, 78600], [1641254400000, 78800, 79200, 78300, 78700], [1641340800000, 78800, 79000, 76400, 77400], [1641427200000, 76700, 77600, 76600, 76900], [1641513600000, 78100, 78400, 77400, 78300], [1641772800000, 78100, 78100, 77100, 78000], [1641859200000, 78400, 79000, 78000, 78900], [1641945600000, 79500, 79600, 78600, 78900], [1642032000000, 79300, 79300, 77900, 77900], [1642118400000, 77700, 78100, 77100, 77300], [1642377600000, 77600, 77800, 76900, 77500], [1642464000000, 77600, 77800, 76600, 77000], [1642550400000, 76500, 76900, 76100, 76300], [1642636800000, 76200, 76700, 75900, 76500], [1642723200000, 75800, 75800, 74700, 75600], [1642982400000, 75400, 75800, 74700, 75100], [1643068800000, 74800, 75000, 73200, 74000], [1643155200000, 73900, 74400, 73100, 73300], [1643241600000, 73800, 74000, 71300, 71300], [1643328000000, 71300, 73700, 71200, 73300], [1643846400000, 74900, 74900, 73300, 73300], [1643932800000, 74300, 74600, 73400, 74000], [1644192000000, 73500, 73600, 72400, 73000], [1644278400000, 73800, 74200, 73000, 73500], [1644364800000, 74300, 74700, 74000, 74700], [1644451200000, 75600, 75800, 74700, 75400], [1644537600000, 75000, 75500, 74600, 74900], [1644796800000, 74400, 74500, 73100, 73700], [1644883200000, 74100, 74200, 73100, 73700], [1644969600000, 74600, 74900, 74200, 74800], [1645056000000, 75000, 75600, 74500, 75000], [1645142400000, 74600, 74800, 73700, 74300], [1645401600000, 73200, 74300, 72600, 74200], [1645488000000, 73000, 73400, 72800, 73400], [1645574400000, 73800, 73800, 72800, 73000], [1645660800000, 72300, 72300, 71300, 71500], [1645747200000, 72100, 72600, 71900, 71900], [1646006400000, 71100, 72100, 71000, 72100], [1646179200000, 72300, 72400, 71500, 71700], [1646265600000, 72300, 73100, 72200, 72900], [1646352000000, 72700, 72700, 71200, 71500], [1646611200000, 70000, 70600, 69900, 70100], [1646697600000, 68800, 70000, 68700, 69500], [1646870400000, 70800, 71200, 70500, 71200], [1646956800000, 70500, 70700, 69700, 70000], [1647216000000, 70000, 70200, 69600, 70200], [1647302400000, 69800, 70100, 69500, 69500], [1647388800000, 70200, 70500, 69700, 70400], [1647475200000, 71200, 71800, 70900, 71200], [1647561600000, 70600, 70900, 70200, 70700], [1647820800000, 70900, 71000, 69900, 69900], [1647907200000, 69900, 70500, 69900, 70300], [1647993600000, 70600, 71200, 70300, 70500], [1648080000000, 69600, 70300, 69600, 69800], [1648166400000, 70100, 70200, 69600, 69800], [1648425600000, 69500, 69900, 69200, 69700], [1648512000000, 70000, 70300, 69800, 70200], [1648598400000, 70300, 70500, 69800, 69900], [1648684800000, 69900, 70200, 69600, 69600], [1648771200000, 69500, 69500, 69000, 69100], [1649030400000, 68900, 69300, 68600, 69300], [1649116800000, 69400, 69600, 69100, 69200], [1649203200000, 68600, 68800, 68500, 68500], [1649289600000, 68500, 68500, 68000, 68000], [1649376000000, 68100, 68300, 67700, 67800], [1649635200000, 67800, 68100, 67400, 67900], [1649721600000, 67600, 67700, 67000, 67000], [1649808000000, 67300, 69000, 67200, 68700], [1649894400000, 68700, 68700, 67500, 67500], [1649980800000, 67200, 67300, 66500, 66600], [1650240000000, 66500, 67100, 66100, 66700], [1650326400000, 67100, 68000, 67000, 67300], [1650412800000, 67000, 67400, 66500, 67400], [1650499200000, 67600, 68300, 67500, 67700], [1650585600000, 67200, 67300, 66700, 67000], [1650844800000, 66500, 66700, 66300, 66300], [1650931200000, 66400, 66700, 66100, 66100], [1651017600000, 65400, 65500, 64900, 65000], [1651104000000, 65400, 65500, 64500, 64800], [1651190400000, 65100, 67600, 65000, 67400], [1651449600000, 66600, 67600, 66500, 67300], [1651536000000, 67400, 68400, 67300, 67500], [1651622400000, 68000, 68400, 67500, 67900], [1651795200000, 67000, 67100, 66500, 66500], [1652054400000, 66300, 66900, 66100, 66100], [1652140800000, 65900, 66300, 65300, 65700], [1652227200000, 65500, 66300, 65200, 65700], [1652313600000, 65200, 65500, 64900, 64900], [1652400000000, 65300, 66700, 65200, 66500], [1652659200000, 67100, 67400, 66100, 66300], [1652745600000, 66600, 67900, 66600, 67600], [1652832000000, 68300, 68700, 67600, 68100], [1652918400000, 66500, 67600, 66500, 67500], [1653004800000, 67800, 68400, 67700, 68000], [1653264000000, 68800, 68800, 67600, 67900], [1653350400000, 67500, 67700, 66500, 66500], [1653436800000, 66700, 67100, 65900, 66400], [1653523200000, 66300, 67200, 65500, 65900], [1653609600000, 66700, 66900, 66200, 66500], [1653868800000, 67500, 67800, 66900, 67700], [1653955200000, 67500, 67500, 66700, 67400], [1654128000000, 66600, 67000, 66400, 66700], [1654214400000, 67200, 67300, 66800, 66800], [1654560000000, 66200, 66400, 65400, 65500], [1654646400000, 65400, 65700, 65300, 65300], [1654732800000, 65100, 65200, 64500, 65200], [1654819200000, 64000, 64400, 63800, 63800], [1655078400000, 62400, 62800, 62100, 62100], [1655164800000, 61200, 62200, 61100, 61900], [1655251200000, 61300, 61500, 60200, 60700], [1655337600000, 61300, 61800, 60500, 60900], [1655424000000, 59400, 59900, 59400, 59800], [1655683200000, 59800, 59900, 58100, 58700], [1655769600000, 58700, 59200, 58200, 58500], [1655856000000, 59000, 59100, 57600, 57600], [1655942400000, 57700, 58000, 56800, 57400], [1656028800000, 57900, 59100, 57700, 58400], [1656288000000, 59000, 59900, 58300, 58800], [1656374400000, 59200, 59500, 58700, 59400], [1656460800000, 58500, 58800, 58000, 58000], [1656547200000, 57200, 57600, 57000, 57000], [1656633600000, 56900, 57500, 55900, 56200], [1656892800000, 56100, 57400, 55700, 57100], [1656979200000, 57600, 58200, 57200, 57200], [1657065600000, 57300, 57300, 56400, 56400], [1657152000000, 56400, 58700, 56300, 58200], [1657238400000, 58600, 59300, 58200, 58700], [1657497600000, 59300, 59600, 58700, 58800], [1657584000000, 58600, 58700, 58100, 58100], [1657670400000, 58300, 58600, 58000, 58000], [1657756800000, 57500, 58200, 57400, 57500], [1657843200000, 58400, 60000, 58100, 60000], [1658102400000, 60600, 62000, 60500, 61900], [1658188800000, 61400, 61500, 60200, 60900], [1658275200000, 61800, 62100, 60500, 60500], [1658361600000, 61100, 61900, 60700, 61800], [1658448000000, 61800, 62200, 61200, 61300], [1658707200000, 60900, 61900, 60800, 61100], [1658793600000, 60800, 61900, 60800, 61700], [1658880000000, 61300, 61900, 61200, 61800], [1658966400000, 62300, 62600, 61600, 61900], [1659052800000, 62400, 62600, 61300, 61400], [1659312000000, 61000, 61700, 60300, 61300], [1659398400000, 61200, 61900, 61000, 61700], [1659484800000, 61600, 61600, 61000, 61300], [1659571200000, 61700, 61800, 61200, 61500], [1659657600000, 61700, 61900, 61200, 61500], [1659916800000, 61400, 61400, 60600, 60800], [1660003200000, 60600, 60700, 59600, 60000], [1660089600000, 58900, 59200, 58600, 59100], [1660176000000, 59600, 60000, 59300, 59900], [1660262400000, 59500, 60700, 59400, 60200], [1660608000000, 60500, 61600, 60300, 61000], [1660694400000, 61100, 61200, 60300, 60400], [1660780800000, 60300, 61900, 60000, 61500], [1660867200000, 61400, 61600, 60600, 60900], [1661126400000, 60300, 60400, 59800, 60000], [1661212800000, 59000, 59600, 59000, 59100], [1661299200000, 59200, 59500, 59000, 59000], [1661385600000, 59200, 59700, 59000, 59700], [1661472000000, 60300, 60900, 59900, 60000], [1661731200000, 58700, 58900, 58600, 58600], [1661817600000, 58700, 59000, 58300, 58800], [1661904000000, 58200, 59900, 58200, 59700], [1661990400000, 58700, 58900, 58300, 58400], [1662076800000, 58300, 58600, 57500, 57500], [1662336000000, 57400, 57800, 56800, 57100], [1662422400000, 57200, 57600, 56900, 57100], [1662508800000, 56700, 56700, 55900, 56000], [1662595200000, 56200, 56400, 55600, 55600], [1663027200000, 57000, 58500, 56800, 58100], [1663113600000, 56200, 57200, 56100, 56800], [1663200000000, 57000, 57100, 56000, 56000], [1663286400000, 55600, 56400, 55500, 56200], [1663545600000, 56300, 57000, 56000, 56400], [1663632000000, 56400, 57000, 55800, 55800], [1663718400000, 55400, 55500, 55000, 55300], [1663804800000, 54600, 54700, 54300, 54400], [1663891200000, 54400, 54900, 54200, 54500], [1664150400000, 53700, 54200, 53600, 53900], [1664236800000, 53800, 54200, 53500, 54200], [1664323200000, 53900, 54400, 52500, 52900], [1664409600000, 53300, 53700, 52600, 52600], [1664496000000, 52300, 53600, 51800, 53100], [1664841600000, 55300, 55400, 54500, 55200], [1664928000000, 56900, 57200, 55400, 56000], [1665014400000, 56700, 57300, 56300, 56300], [1665100800000, 55900, 56900, 55200, 56200], [1665446400000, 54400, 55700, 54000, 55400], [1665532800000, 55700, 57000, 55200, 55800], [1665619200000, 55400, 56100, 55200, 55200], [1665705600000, 56200, 56500, 55800, 56300], [1665964800000, 55800, 57000, 55700, 56600], [1666051200000, 56700, 57100, 55800, 56500], [1666137600000, 56700, 56900, 55700, 55800], [1666224000000, 55200, 56000, 55100, 55500], [1666310400000, 55100, 56300, 55100, 55900], [1666569600000, 57000, 57500, 56700, 57500], [1666656000000, 57000, 58600, 57000, 57700], [1666742400000, 58000, 59600, 57700, 59400], [1666828800000, 59700, 60100, 58900, 59500], [1666915200000, 58900, 59200, 57200, 57300], [1667174400000, 58100, 59900, 58000, 59400], [1667260800000, 59900, 60300, 59500, 60000], [1667347200000, 59700, 60000, 59300, 59600], [1667433600000, 58600, 59800, 58100, 59200], [1667520000000, 59100, 59500, 58400, 59400], [1667779200000, 59700, 60300, 59400, 60200], [1667865600000, 60500, 61900, 60500, 61800], [1667952000000, 62000, 62200, 61300, 62000], [1668038400000, 61400, 61500, 60400, 60400], [1668124800000, 63100, 63200, 62300, 62900], [1668384000000, 62900, 62900, 61700, 61900], [1668470400000, 62200, 62500, 61600, 62400], [1668556800000, 62400, 62700, 61700, 62700], [1668643200000, 62000, 62000, 61300, 61400], [1668729600000, 61800, 62400, 61400, 61800], [1668988800000, 61400, 61800, 60800, 61400], [1669075200000, 60900, 61200, 60300, 60600], [1669161600000, 61200, 61300, 60700, 61000], [1669248000000, 61200, 61700, 60900, 61400], [1669334400000, 61400, 61700, 60800, 61000], [1669593600000, 60500, 60500, 59800, 60100], [1669680000000, 59900, 60600, 59800, 60600], [1669766400000, 60400, 62200, 60200, 62200], [1669852800000, 63100, 63200, 62300, 62600], [1669939200000, 62500, 62500, 60400, 60400], [1670198400000, 60900, 61100, 60000, 60300], [1670284800000, 59800, 60100, 59200, 59200], [1670371200000, 58800, 59600, 58500, 58900], [1670457600000, 58700, 59200, 58600, 59200], [1670544000000, 59300, 60600, 59300, 60400], [1670803200000, 59900, 60000, 59400, 59500], [1670889600000, 59600, 60300, 59400, 59700], [1670976000000, 59800, 60600, 59800, 60500], [1671062400000, 59800, 60200, 59300, 59300], [1671148800000, 58300, 59500, 58300, 59500], [1671408000000, 59500, 59900, 59100, 59500], [1671494400000, 59000, 59100, 58500, 58600], [1671580800000, 58700, 59100, 58000, 58000], [1671667200000, 58100, 59100, 58100, 59100], [1671753600000, 58200, 58400, 57700, 58100], [1672012800000, 58000, 58100, 57700, 57900], [1672099200000, 58000, 58400, 57900, 58100], [1672185600000, 57600, 57600, 56400, 56600], [1672272000000, 56000, 56200, 55300, 55300], [1672617600000, 55500, 56100, 55200, 55500], [1672704000000, 55400, 56000, 54500, 55400], [1672790400000, 55700, 58000, 55600, 57800], [1672876800000, 58200, 58800, 57600, 58200], [1672963200000, 58300, 59400, 57900, 59000], [1673222400000, 59700, 60700, 59600, 60700], [1673308800000, 60200, 61100, 59900, 60400], [1673395200000, 61000, 61200, 60300, 60500], [1673481600000, 61100, 61200, 59900, 60500], [1673568000000, 60500, 61200, 60400, 60800], [1673827200000, 61300, 61600, 60800, 61100], [1673913600000, 61200, 61500, 60600, 61000], [1674000000000, 60700, 61000, 59900, 60400], [1674086400000, 60500, 61500, 60400, 61500], [1674172800000, 62100, 62300, 61100, 61800], [1674604800000, 63500, 63700, 63000, 63400], [1674691200000, 63800, 63900, 63300, 63900], [1674777600000, 64400, 65000, 63900, 64600], [1675036800000, 64900, 64900, 63100, 63300], [1675123200000, 63500, 63700, 61000, 61000], [1675209600000, 62600, 62700, 61000, 61800], [1675296000000, 63200, 63900, 62600, 63500], [1675382400000, 63900, 64000, 63000, 63800], [1675641600000, 62800, 63000, 61600, 61600], [1675728000000, 61900, 62500, 61600, 61900], [1675814400000, 62800, 63300, 62400, 63100], [1675900800000, 63000, 63300, 62300, 63000], [1675987200000, 62600, 63000, 62400, 62800], [1676246400000, 62900, 63000, 62300, 62900], [1676332800000, 63600, 63900, 63200, 63200], [1676419200000, 63900, 63900, 62000, 62200], [1676505600000, 62500, 63700, 62400, 63700], [1676592000000, 62900, 63300, 62400, 62600], [1676851200000, 62900, 63000, 61800, 62700], [1676937600000, 62700, 62800, 62000, 62100], [1677024000000, 61500, 61800, 61000, 61100], [1677110400000, 61700, 62500, 61500, 62000], [1677196800000, 62300, 62600, 61300, 61300], [1677456000000, 60800, 60800, 60200, 60500], [1677542400000, 60800, 61400, 60500, 60600], [1677715200000, 60900, 61800, 60500, 60800], [1677801600000, 61000, 61200, 60500, 60500], [1678060800000, 61100, 61600, 60800, 61500], [1678147200000, 61400, 61400, 60700, 60700], [1678233600000, 60100, 60500, 59900, 60300], [1678320000000, 60500, 60800, 59900, 60100], [1678406400000, 59500, 59700, 59100, 59500], [1678665600000, 59900, 60200, 59300, 60000], [1678752000000, 59400, 59500, 59000, 59000], [1678838400000, 60000, 60300, 59600, 59800], [1678924800000, 59200, 60200, 59100, 59900], [1679011200000, 60800, 61300, 60600, 61300], [1679270400000, 61100, 61200, 60200, 60200], [1679356800000, 60500, 60700, 60100, 60300], [1679443200000, 61000, 61200, 60500, 61100], [1679529600000, 60600, 62300, 60600, 62300], [1679616000000, 62700, 63300, 62300, 63000], [1679875200000, 62600, 62800, 62000, 62100], [1679961600000, 62400, 62900, 62100, 62900], [1680048000000, 62500, 62700, 62200, 62700], [1680134400000, 63700, 63700, 63100, 63200], [1680220800000, 64000, 64000, 63700, 64000], [1680480000000, 64000, 64000, 63000, 63100], [1680566400000, 63400, 63800, 62800, 63600], [1680652800000, 63700, 64000, 63400, 63900], [1680739200000, 63500, 63600, 62300, 62300], [1680825600000, 63800, 65200, 63800, 65000], [1681084800000, 64800, 66300, 64700, 65700], [1681171200000, 66200, 66200, 65400, 65900], [1681257600000, 65800, 66200, 65300, 66000], [1681344000000, 65600, 66100, 65400, 66100], [1681430400000, 66600, 66600, 65000, 65100], [1681689600000, 65000, 65600, 64700, 65300], [1681776000000, 65900, 66000, 64800, 65600], [1681862400000, 65500, 65800, 65300, 65500], [1681948800000, 65100, 65300, 64600, 65300], [1682035200000, 65800, 65900, 65400, 65700], [1682294400000, 65300, 65700, 64800, 65200], [1682380800000, 65300, 65400, 63400, 63600], [1682467200000, 63600, 64300, 63300, 64100], [1682553600000, 64100, 65000, 63300, 64600], [1682640000000, 65200, 65900, 65000, 65500], [1682985600000, 66000, 66300, 65100, 65700], [1683072000000, 65100, 65600, 64900, 65400], [1683158400000, 65600, 65700, 64700, 65100], [1683504000000, 66300, 66300, 65400, 65900], [1683590400000, 65800, 65800, 65100, 65300], [1683676800000, 65500, 65500, 64300, 64600], [1683763200000, 64700, 65100, 64200, 64200], [1683849600000, 63700, 64600, 63600, 64100], [1684108800000, 64100, 64600, 63900, 64500], [1684195200000, 65800, 65900, 65300, 65400], [1684281600000, 65900, 65900, 64800, 65000], [1684368000000, 66000, 66200, 65700, 66200], [1684454400000, 67800, 68400, 67500, 68400], [1684713600000, 68400, 69000, 68000, 68500], [1684800000000, 68500, 68700, 68100, 68400], [1684886400000, 68100, 68700, 68000, 68500], [1684972800000, 69900, 70000, 68700, 68800], [1685059200000, 69800, 70400, 69500, 70300], [1685404800000, 71300, 72300, 71200, 72300], [1685491200000, 72400, 72500, 71000, 71400], [1685577600000, 70900, 71600, 70600, 70900], [1685664000000, 71700, 72200, 71600, 72200], [1685923200000, 72700, 72700, 71400, 71700], [1686096000000, 71300, 71600, 70800, 71000], [1686182400000, 70400, 70900, 70000, 70900], [1686268800000, 71100, 72300, 70800, 72000], [1686528000000, 72100, 72400, 70800, 71000], [1686614400000, 71700, 72200, 71600, 72000], [1686700800000, 72100, 72200, 71100, 71900], [1686787200000, 72100, 72300, 71300, 71500], [1686873600000, 71800, 71900, 70900, 71800], [1687132800000, 71300, 71700, 70900, 71200], [1687219200000, 70700, 71400, 70400, 71400], [1687305600000, 70700, 71200, 70400, 70500], [1687392000000, 70200, 71500, 70100, 71300], [1687478400000, 72000, 72200, 71600, 71600], [1687737600000, 71700, 72500, 71500, 72400], [1687824000000, 72500, 72600, 72000, 72600], [1687910400000, 72600, 72700, 72000, 72700], [1687996800000, 73100, 73400, 72400, 72400], [1688083200000, 72500, 72700, 71700, 72200], [1688342400000, 72700, 73200, 72600, 73000], [1688428800000, 73400, 73600, 72900, 73000], [1688515200000, 73000, 73300, 71900, 72000], [1688601600000, 71900, 72400, 71500, 71600], [1688688000000, 71100, 71400, 69800, 69900], [1688947200000, 70000, 70400, 69200, 69500], [1689033600000, 70200, 71500, 70100, 71500], [1689120000000, 71200, 72000, 71100, 71900], [1689206400000, 72400, 72600, 71900, 71900], [1689292800000, 72500, 73400, 72400, 73400], [1689552000000, 73200, 73500, 72800, 73300], [1689638400000, 73200, 73500, 72000, 72000], [1689724800000, 72700, 72800, 71300, 71700], [1689811200000, 71100, 71500, 70800, 71000], [1689897600000, 70400, 70400, 69400, 70300], [1690156800000, 70100, 70900, 69900, 70400], [1690243200000, 70000, 70500, 69800, 70000], [1690329600000, 69800, 70600, 68100, 69800], [1690416000000, 69900, 71700, 69300, 71700], [1690502400000, 71800, 72400, 70100, 70600], [1690761600000, 70900, 71000, 69800, 69800], [1690848000000, 70100, 71200, 70000, 71100], [1690934400000, 70700, 71000, 69800, 69900], [1691020800000, 69900, 70200, 68500, 68800], [1691107200000, 68800, 69100, 68200, 68300], [1691366400000, 67700, 69200, 67600, 68500], [1691452800000, 69000, 69100, 67400, 68000],];
        var chart_value5 = [[1376006400000, 24600], [1376265600000, 24640], [1376352000000, 25800], [1376438400000, 26000], [1376611200000, 25900], [1376870400000, 25720], [1376956800000, 25380], [1377043200000, 25120], [1377129600000, 25100], [1377216000000, 25900], [1377475200000, 26000], [1377561600000, 26080], [1377648000000, 26180], [1377734400000, 26880], [1377820800000, 27360], [1378080000000, 27020], [1378166400000, 26740], [1378252800000, 26800], [1378339200000, 27300], [1378425600000, 27380], [1378684800000, 27460], [1378771200000, 27920], [1378857600000, 28040], [1378944000000, 28200], [1379030400000, 28120], [1379289600000, 28500], [1379376000000, 27720], [1379894400000, 27200], [1379980800000, 27460], [1380067200000, 27280], [1380153600000, 27440], [1380240000000, 27320], [1380499200000, 27340], [1380585600000, 27640], [1380672000000, 28360], [1380844800000, 28360], [1381104000000, 28720], [1381190400000, 28600], [1381363200000, 28600], [1381449600000, 28860], [1381708800000, 28760], [1381795200000, 29140], [1381881600000, 29000], [1381968000000, 29260], [1382054400000, 29440], [1382313600000, 29280], [1382400000000, 29100], [1382486400000, 28840], [1382572800000, 28980], [1382659200000, 28980], [1382918400000, 29640], [1383004800000, 29800], [1383091200000, 30000], [1383177600000, 29300], [1383264000000, 30000], [1383523200000, 29980], [1383609600000, 29700], [1383696000000, 29020], [1383782400000, 28740], [1383868800000, 28200], [1384128000000, 28560], [1384214400000, 29120], [1384300800000, 28380], [1384387200000, 28480], [1384473600000, 29240], [1384732800000, 29480], [1384819200000, 29780], [1384905600000, 29400], [1384992000000, 28800], [1385078400000, 29000], [1385337600000, 29300], [1385424000000, 29580], [1385510400000, 29400], [1385596800000, 29880], [1385683200000, 29880], [1385942400000, 29340], [1386028800000, 29220], [1386115200000, 28640], [1386201600000, 28800], [1386288000000, 28560], [1386547200000, 29080], [1386633600000, 28800], [1386720000000, 28400], [1386806400000, 28200], [1386892800000, 27800], [1387152000000, 28000], [1387238400000, 27900], [1387324800000, 28020], [1387411200000, 28540], [1387497600000, 28540], [1387756800000, 28660], [1387843200000, 28300], [1388016000000, 28160], [1388102400000, 27920], [1388361600000, 27440], [1388620800000, 26180], [1388707200000, 25920], [1388966400000, 26140], [1389052800000, 26080], [1389139200000, 25820], [1389225600000, 25500], [1389312000000, 25440], [1389571200000, 25900], [1389657600000, 26260], [1389744000000, 25980], [1389830400000, 26020], [1389916800000, 25840], [1390176000000, 26320], [1390262400000, 26480], [1390348800000, 26560], [1390435200000, 25980], [1390521600000, 26140], [1390780800000, 25840], [1390867200000, 25660], [1390953600000, 25600], [1391385600000, 25440], [1391472000000, 24980], [1391558400000, 24740], [1391644800000, 25180], [1391731200000, 25500], [1391990400000, 25540], [1392076800000, 26220], [1392163200000, 26140], [1392249600000, 25960], [1392336000000, 26020], [1392595200000, 25700], [1392681600000, 25900], [1392768000000, 25800], [1392854400000, 25720], [1392940800000, 26600], [1393200000000, 26560], [1393286400000, 26680], [1393372800000, 26840], [1393459200000, 26820], [1393545600000, 26980], [1393804800000, 26500], [1393891200000, 26300], [1393977600000, 26600], [1394064000000, 26520], [1394150400000, 26780], [1394409600000, 26400], [1394496000000, 26440], [1394582400000, 25880], [1394668800000, 25800], [1394755200000, 25500], [1395014400000, 25320], [1395100800000, 25560], [1395187200000, 25380], [1395273600000, 25240], [1395360000000, 25460], [1395619200000, 25460], [1395705600000, 24940], [1395792000000, 25700], [1395878400000, 26660], [1395964800000, 26700], [1396224000000, 26860], [1396310400000, 26780], [1396396800000, 27140], [1396483200000, 27800], [1396569600000, 27600], [1396828800000, 27940], [1396915200000, 27880], [1397001600000, 27420], [1397088000000, 27600], [1397174400000, 27300], [1397433600000, 27400], [1397520000000, 27400], [1397606400000, 27600], [1397692800000, 27400], [1397779200000, 27560], [1398038400000, 27600], [1398124800000, 27500], [1398211200000, 27780], [1398297600000, 28140], [1398384000000, 27980], [1398643200000, 27760], [1398729600000, 27200], [1398816000000, 26860], [1398988800000, 26920], [1399420800000, 26880], [1399507200000, 27000], [1399593600000, 26700], [1399852800000, 27760], [1399939200000, 28000], [1400025600000, 28300], [1400112000000, 28200], [1400198400000, 28560], [1400457600000, 28960], [1400544000000, 29020], [1400630400000, 28820], [1400716800000, 28520], [1400803200000, 28560], [1401062400000, 28440], [1401148800000, 28140], [1401235200000, 28660], [1401321600000, 29200], [1401408000000, 28860], [1401667200000, 29100], [1401753600000, 29400], [1401926400000, 29140], [1402272000000, 28180], [1402358400000, 28720], [1402444800000, 28440], [1402531200000, 28260], [1402617600000, 27340], [1402876800000, 27480], [1402963200000, 27480], [1403049600000, 27160], [1403136000000, 26460], [1403222400000, 26020], [1403481600000, 26440], [1403568000000, 26900], [1403654400000, 26400], [1403740800000, 26500], [1403827200000, 26220], [1404086400000, 26440], [1404172800000, 26200], [1404259200000, 26600], [1404345600000, 26360], [1404432000000, 26120], [1404691200000, 25840], [1404777600000, 25900], [1404864000000, 26160], [1404950400000, 26120], [1405036800000, 25680], [1405296000000, 25720], [1405382400000, 26400], [1405468800000, 26420], [1405555200000, 26600], [1405641600000, 26860], [1405900800000, 27060], [1405987200000, 26960], [1406073600000, 26760], [1406160000000, 27100], [1406246400000, 27100], [1406505600000, 27160], [1406592000000, 27720], [1406678400000, 27900], [1406764800000, 26860], [1406851200000, 25840], [1407110400000, 26340], [1407196800000, 26320], [1407283200000, 26000], [1407369600000, 25800], [1407456000000, 25000], [1407715200000, 25400], [1407801600000, 25320], [1407888000000, 25280], [1407974400000, 25220], [1408320000000, 25000], [1408406400000, 25080], [1408492800000, 25220], [1408579200000, 24700], [1408665600000, 24940], [1408924800000, 24560], [1409011200000, 24440], [1409097600000, 24600], [1409184000000, 24840], [1409270400000, 24680], [1409529600000, 24520], [1409616000000, 23880], [1409702400000, 23780], [1409788800000, 24200], [1409875200000, 24020], [1410393600000, 23840], [1410480000000, 24020], [1410739200000, 24000], [1410825600000, 24120], [1410912000000, 24520], [1410998400000, 24200], [1411084800000, 24200], [1411344000000, 23760], [1411430400000, 23220], [1411516800000, 23000], [1411603200000, 23120], [1411689600000, 23700], [1411948800000, 23900], [1412035200000, 23680], [1412121600000, 23120], [1412208000000, 22820], [1412553600000, 23020], [1412640000000, 23240], [1412726400000, 22600], [1412899200000, 22100], [1413158400000, 22160], [1413244800000, 22540], [1413331200000, 22500], [1413417600000, 22300], [1413504000000, 21780], [1413763200000, 22120], [1413849600000, 21660], [1413936000000, 22080], [1414022400000, 21880], [1414108800000, 22240], [1414368000000, 21900], [1414454400000, 21820], [1414540800000, 22600], [1414627200000, 23620], [1414713600000, 24880], [1414972800000, 24700], [1415059200000, 24340], [1415145600000, 24040], [1415232000000, 24080], [1415318400000, 24120], [1415577600000, 25360], [1415664000000, 24620], [1415750400000, 24600], [1415836800000, 24000], [1415923200000, 23880], [1416182400000, 24100], [1416268800000, 24400], [1416355200000, 24360], [1416441600000, 24200], [1416528000000, 24460], [1416787200000, 24400], [1416873600000, 23800], [1416960000000, 24020], [1417046400000, 25280], [1417132800000, 25740], [1417392000000, 25900], [1417478400000, 25900], [1417564800000, 25960], [1417651200000, 26000], [1417737600000, 26040], [1417996800000, 26380], [1418083200000, 26980], [1418169600000, 26340], [1418256000000, 26100], [1418342400000, 25720], [1418601600000, 25460], [1418688000000, 25580], [1418774400000, 25320], [1418860800000, 25320], [1418947200000, 26560], [1419206400000, 26900], [1419292800000, 26780], [1419379200000, 26860], [1419552000000, 27040], [1419811200000, 26580], [1419897600000, 26540], [1420156800000, 26600], [1420416000000, 26660], [1420502400000, 25900], [1420588800000, 26140], [1420675200000, 26280], [1420761600000, 26280], [1421020800000, 26320], [1421107200000, 26780], [1421193600000, 26900], [1421280000000, 26680], [1421366400000, 26320], [1421625600000, 26860], [1421712000000, 27440], [1421798400000, 27900], [1421884800000, 27560], [1421971200000, 27720], [1422230400000, 27780], [1422316800000, 28000], [1422403200000, 27560], [1422489600000, 27200], [1422576000000, 27300], [1422835200000, 27360], [1422921600000, 27320], [1423008000000, 27180], [1423094400000, 27160], [1423180800000, 27440], [1423440000000, 27900], [1423526400000, 27560], [1423612800000, 27100], [1423699200000, 26880], [1423785600000, 27220], [1424044800000, 27480], [1424131200000, 27540], [1424649600000, 27340], [1424736000000, 27340], [1424822400000, 27580], [1424908800000, 27500], [1424995200000, 27140], [1425254400000, 28460], [1425340800000, 28360], [1425427200000, 28740], [1425513600000, 28440], [1425600000000, 28840], [1425859200000, 28400], [1425945600000, 28420], [1426032000000, 29480], [1426118400000, 28940], [1426204800000, 29140], [1426464000000, 29400], [1426550400000, 29940], [1426636800000, 30060], [1426723200000, 29400], [1426809600000, 29280], [1427068800000, 29340], [1427155200000, 29520], [1427241600000, 29700], [1427328000000, 28420], [1427414400000, 28420], [1427673600000, 28560], [1427760000000, 28820], [1427846400000, 28460], [1427932800000, 28680], [1428019200000, 28680], [1428278400000, 29400], [1428364800000, 29240], [1428451200000, 29580], [1428537600000, 29660], [1428624000000, 29800], [1428883200000, 29580], [1428969600000, 29480], [1429056000000, 28920], [1429142400000, 29540], [1429228800000, 29000], [1429488000000, 28600], [1429574400000, 28880], [1429660800000, 29220], [1429747200000, 29020], [1429833600000, 28200], [1430092800000, 27900], [1430179200000, 27320], [1430265600000, 27700], [1430352000000, 28200], [1430697600000, 28000], [1430870400000, 27240], [1430956800000, 27400], [1431043200000, 26760], [1431302400000, 26720], [1431388800000, 26620], [1431475200000, 26660], [1431561600000, 26800], [1431648000000, 26520], [1431907200000, 26400], [1431993600000, 26760], [1432080000000, 27320], [1432166400000, 27040], [1432252800000, 27000], [1432598400000, 27240], [1432684800000, 26280], [1432771200000, 26180], [1432857600000, 26140], [1433116800000, 25820], [1433203200000, 26060], [1433289600000, 25460], [1433376000000, 26740], [1433462400000, 26820], [1433721600000, 26280], [1433808000000, 25640], [1433894400000, 25240], [1433980800000, 25140], [1434067200000, 25540], [1434326400000, 25400], [1434412800000, 25100], [1434499200000, 25080], [1434585600000, 25300], [1434672000000, 25320], [1434931200000, 25620], [1435017600000, 26420], [1435104000000, 26040], [1435190400000, 25380], [1435276800000, 25560], [1435536000000, 25620], [1435622400000, 25360], [1435708800000, 25900], [1435795200000, 25980], [1435881600000, 25360], [1436140800000, 24600], [1436227200000, 24800], [1436313600000, 24780], [1436400000000, 25300], [1436486400000, 25180], [1436745600000, 25320], [1436832000000, 24500], [1436918400000, 24700], [1437004800000, 25640], [1437091200000, 26100], [1437350400000, 25500], [1437436800000, 25260], [1437523200000, 25060], [1437609600000, 24680], [1437696000000, 24580], [1437955200000, 24600], [1438041600000, 24600], [1438128000000, 25260], [1438214400000, 24300], [1438300800000, 23700], [1438560000000, 23500], [1438646400000, 23640], [1438732800000, 23180], [1438819200000, 22300], [1438905600000, 22720], [1439164800000, 22820], [1439251200000, 23140], [1439337600000, 23080], [1439424000000, 22800], [1439769600000, 22080], [1439856000000, 22620], [1439942400000, 23080], [1440028800000, 22780], [1440115200000, 22020], [1440374400000, 21580], [1440460800000, 21580], [1440547200000, 21340], [1440633600000, 21340], [1440720000000, 21620], [1440979200000, 21780], [1441065600000, 21700], [1441152000000, 21800], [1441238400000, 22440], [1441324800000, 22580], [1441584000000, 22240], [1441670400000, 22620], [1441756800000, 22940], [1441843200000, 22680], [1441929600000, 22300], [1442188800000, 22480], [1442275200000, 22460], [1442361600000, 23040], [1442448000000, 23140], [1442534400000, 23800], [1442793600000, 23000], [1442880000000, 22900], [1442966400000, 22620], [1443052800000, 22520], [1443139200000, 22240], [1443571200000, 22680], [1443657600000, 22680], [1443744000000, 22380], [1444003200000, 22300], [1444089600000, 23020], [1444176000000, 25020], [1444262400000, 25400], [1444608000000, 25200], [1444694400000, 25040], [1444780800000, 25080], [1444867200000, 25380], [1444953600000, 25300], [1445212800000, 25120], [1445299200000, 25320], [1445385600000, 25400], [1445472000000, 25600], [1445558400000, 25780], [1445817600000, 25840], [1445904000000, 25960], [1445990400000, 26160], [1446076800000, 26500], [1446163200000, 27440], [1446422400000, 27660], [1446508800000, 27040], [1446595200000, 26600], [1446681600000, 26840], [1446768000000, 26760], [1447027200000, 26880], [1447113600000, 26420], [1447200000000, 26660], [1447286400000, 26340], [1447372800000, 26000], [1447632000000, 25260], [1447718400000, 25400], [1447804800000, 25620], [1447891200000, 25780], [1447977600000, 25700], [1448236800000, 25640], [1448323200000, 25980], [1448409600000, 25980], [1448496000000, 26700], [1448582400000, 26540], [1448841600000, 25680], [1448928000000, 26420], [1449014400000, 26000], [1449100800000, 25800], [1449187200000, 25380], [1449446400000, 25240], [1449532800000, 25240], [1449619200000, 25260], [1449705600000, 25660], [1449792000000, 25680], [1450051200000, 25220], [1450137600000, 25540], [1450224000000, 25980], [1450310400000, 25800], [1450396800000, 25560], [1450656000000, 25600], [1450742400000, 25840], [1450828800000, 25900], [1450915200000, 25700], [1451260800000, 25320], [1451347200000, 25080], [1451433600000, 25200], [1451865600000, 24100], [1451952000000, 24160], [1452038400000, 23500], [1452124800000, 23260], [1452211200000, 23420], [1452470400000, 23040], [1452556800000, 22920], [1452643200000, 22960], [1452729600000, 22760], [1452816000000, 22640], [1453075200000, 22520], [1453161600000, 23420], [1453248000000, 22760], [1453334400000, 22620], [1453420800000, 23360], [1453680000000, 23240], [1453766400000, 22740], [1453852800000, 23500], [1453939200000, 22900], [1454025600000, 23000], [1454284800000, 23260], [1454371200000, 23120], [1454457600000, 22920], [1454544000000, 23120], [1454630400000, 23280], [1455148800000, 22600], [1455235200000, 22600], [1455494400000, 23080], [1455580800000, 23360], [1455667200000, 23700], [1455753600000, 23740], [1455840000000, 23800], [1456099200000, 23500], [1456185600000, 23620], [1456272000000, 23440], [1456358400000, 23580], [1456444800000, 23440], [1456704000000, 23560], [1456876800000, 23940], [1456963200000, 24400], [1457049600000, 24300], [1457308800000, 24460], [1457395200000, 23840], [1457481600000, 23880], [1457568000000, 24500], [1457654400000, 24980], [1457913600000, 25100], [1458000000000, 25060], [1458086400000, 25120], [1458172800000, 25260], [1458259200000, 25460], [1458518400000, 25340], [1458604800000, 25380], [1458691200000, 25580], [1458777600000, 25640], [1458864000000, 25760], [1459123200000, 25880], [1459209600000, 25800], [1459296000000, 26160], [1459382400000, 26240], [1459468800000, 25580], [1459728000000, 26100], [1459814400000, 25200], [1459900800000, 25700], [1459987200000, 25380], [1460073600000, 24920], [1460332800000, 25320], [1460419200000, 25500], [1460592000000, 26000], [1460678400000, 26000], [1460937600000, 25980], [1461024000000, 25760], [1461110400000, 25980], [1461196800000, 25880], [1461283200000, 25600], [1461542400000, 25620], [1461628800000, 25920], [1461715200000, 26000], [1461801600000, 25300], [1461888000000, 24900], [1462147200000, 25000], [1462233600000, 25220], [1462320000000, 25800], [1462752000000, 25980], [1462838400000, 25920], [1462924800000, 25840], [1463011200000, 25620], [1463097600000, 25060], [1463356800000, 24960], [1463443200000, 25280], [1463529600000, 25360], [1463616000000, 25400], [1463702400000, 25380], [1463961600000, 25720], [1464048000000, 25420], [1464134400000, 25900], [1464220800000, 25920], [1464307200000, 25640], [1464566400000, 25600], [1464652800000, 25840], [1464739200000, 26660], [1464825600000, 27300], [1464912000000, 27540], [1465257600000, 27960], [1465344000000, 28120], [1465430400000, 28600], [1465516800000, 28120], [1465776000000, 27420], [1465862400000, 27600], [1465948800000, 28260], [1466035200000, 28180], [1466121600000, 28520], [1466380800000, 28620], [1466467200000, 28960], [1466553600000, 28900], [1466640000000, 28600], [1466726400000, 28000], [1466985600000, 27960], [1467072000000, 27980], [1467158400000, 27920], [1467244800000, 28500], [1467331200000, 29320], [1467590400000, 29320], [1467676800000, 29380], [1467763200000, 28420], [1467849600000, 29000], [1467936000000, 29200], [1468195200000, 29780], [1468281600000, 29280], [1468368000000, 29620], [1468454400000, 30000], [1468540800000, 30360], [1468800000000, 30660], [1468886400000, 30660], [1468972800000, 30800], [1469059200000, 30860], [1469145600000, 30320], [1469404800000, 30040], [1469491200000, 30600], [1469577600000, 30540], [1469664000000, 30140], [1469750400000, 30780], [1470009600000, 31360], [1470096000000, 30960], [1470182400000, 30340], [1470268800000, 30340], [1470355200000, 31220], [1470614400000, 31380], [1470700800000, 31340], [1470787200000, 30820], [1470873600000, 31180], [1470960000000, 30900], [1471305600000, 31360], [1471392000000, 31320], [1471478400000, 32800], [1471564800000, 33500], [1471824000000, 33300], [1471910400000, 33740], [1471996800000, 33060], [1472083200000, 32780], [1472169600000, 32240], [1472428800000, 32800], [1472515200000, 32900], [1472601600000, 32400], [1472688000000, 31740], [1472774400000, 31940], [1473033600000, 32120], [1473120000000, 32860], [1473206400000, 32420], [1473292800000, 32780], [1473379200000, 31500], [1473638400000, 29300], [1473724800000, 30540], [1474243200000, 31160], [1474329600000, 31700], [1474416000000, 31840], [1474502400000, 32360], [1474588800000, 31420], [1474848000000, 31360], [1474934400000, 31380], [1475020800000, 31340], [1475107200000, 32000], [1475193600000, 31960], [1475539200000, 32280], [1475625600000, 32380], [1475712000000, 33820], [1475798400000, 34120], [1476057600000, 33600], [1476144000000, 30900], [1476230400000, 30700], [1476316800000, 31140], [1476403200000, 31540], [1476662400000, 31800], [1476748800000, 31780], [1476835200000, 32500], [1476921600000, 32400], [1477008000000, 31780], [1477267200000, 32160], [1477353600000, 31940], [1477440000000, 31340], [1477526400000, 31460], [1477612800000, 32280], [1477872000000, 32780], [1477958400000, 33040], [1478044800000, 32860], [1478131200000, 32320], [1478217600000, 32540], [1478476800000, 32800], [1478563200000, 32880], [1478649600000, 31920], [1478736000000, 32980], [1478822400000, 31960], [1479081600000, 31060], [1479168000000, 30780], [1479254400000, 31160], [1479340800000, 31360], [1479427200000, 31720], [1479686400000, 31860], [1479772800000, 32800], [1479859200000, 32980], [1479945600000, 33000], [1480032000000, 33000], [1480291200000, 33540], [1480377600000, 33540], [1480464000000, 34920], [1480550400000, 34980], [1480636800000, 34540], [1480896000000, 34360], [1480982400000, 34960], [1481068800000, 35440], [1481155200000, 35800], [1481241600000, 35600], [1481500800000, 35040], [1481587200000, 35320], [1481673600000, 35540], [1481760000000, 35180], [1481846400000, 35860], [1482105600000, 35900], [1482192000000, 36240], [1482278400000, 36100], [1482364800000, 36180], [1482451200000, 35640], [1482710400000, 35960], [1482796800000, 35980], [1482883200000, 35760], [1482969600000, 36040], [1483315200000, 36100], [1483401600000, 36480], [1483488000000, 36160], [1483574400000, 35560], [1483660800000, 36200], [1483920000000, 37220], [1484006400000, 37240], [1484092800000, 38280], [1484179200000, 38800], [1484265600000, 37460], [1484524800000, 36660], [1484611200000, 36960], [1484697600000, 36940], [1484784000000, 37480], [1484870400000, 37200], [1485129600000, 38060], [1485216000000, 38160], [1485302400000, 39400], [1485388800000, 39900], [1485820800000, 39460], [1485907200000, 39120], [1485993600000, 39360], [1486080000000, 39460], [1486339200000, 39560], [1486425600000, 38820], [1486512000000, 38400], [1486598400000, 38400], [1486684800000, 38360], [1486944000000, 37960], [1487030400000, 37580], [1487116800000, 37720], [1487203200000, 38020], [1487289600000, 37860], [1487548800000, 38660], [1487635200000, 38940], [1487721600000, 39300], [1487808000000, 39180], [1487894400000, 38220], [1488153600000, 38060], [1488240000000, 38440], [1488412800000, 39720], [1488499200000, 39620], [1488758400000, 40080], [1488844800000, 40200], [1488931200000, 40200], [1489017600000, 40200], [1489104000000, 40180], [1489363200000, 40600], [1489449600000, 41360], [1489536000000, 41400], [1489622400000, 41840], [1489708800000, 42400], [1489968000000, 41900], [1490054400000, 42560], [1490140800000, 42460], [1490227200000, 41800], [1490313600000, 41500], [1490572800000, 41200], [1490659200000, 41480], [1490745600000, 41780], [1490832000000, 41980], [1490918400000, 41200], [1491177600000, 41440], [1491264000000, 42080], [1491350400000, 42140], [1491436800000, 41840], [1491523200000, 41600], [1491782400000, 41940], [1491868800000, 41600], [1491955200000, 41900], [1492041600000, 42420], [1492128000000, 42020], [1492387200000, 41560], [1492473600000, 41500], [1492560000000, 40900], [1492646400000, 40280], [1492732800000, 40760], [1492992000000, 41240], [1493078400000, 42700], [1493164800000, 42800], [1493251200000, 43840], [1493337600000, 44620], [1493683200000, 44900], [1493856000000, 45520], [1494201600000, 47020], [1494374400000, 45600], [1494460800000, 45500], [1494547200000, 45820], [1494806400000, 46100], [1494892800000, 46380], [1494979200000, 46340], [1495065600000, 45940], [1495152000000, 44720], [1495411200000, 45100], [1495497600000, 44920], [1495584000000, 44880], [1495670400000, 45680], [1495756800000, 46080], [1496016000000, 45620], [1496102400000, 44640], [1496188800000, 44700], [1496275200000, 44680], [1496361600000, 45960], [1496620800000, 45940], [1496793600000, 45300], [1496880000000, 45160], [1496966400000, 46100], [1497225600000, 45380], [1497312000000, 45400], [1497398400000, 45360], [1497484800000, 45680], [1497571200000, 45580], [1497830400000, 46560], [1497916800000, 48140], [1498003200000, 47480], [1498089600000, 47960], [1498176000000, 47620], [1498435200000, 48280], [1498521600000, 48300], [1498608000000, 47700], [1498694400000, 47940], [1498780800000, 47540], [1499040000000, 47220], [1499126400000, 47000], [1499212800000, 47580], [1499299200000, 48060], [1499385600000, 47860], [1499644800000, 48660], [1499731200000, 49000], [1499817600000, 49880], [1499904000000, 50560], [1499990400000, 50480], [1500249600000, 50640], [1500336000000, 50840], [1500422400000, 50740], [1500508800000, 51200], [1500595200000, 51080], [1500854400000, 50860], [1500940800000, 50000], [1501027200000, 49840], [1501113600000, 49800], [1501200000000, 47760], [1501459200000, 48200], [1501545600000, 48600], [1501632000000, 49000], [1501718400000, 47780], [1501804800000, 47700], [1502064000000, 47580], [1502150400000, 47720], [1502236800000, 46280], [1502323200000, 45900], [1502409600000, 44620], [1502668800000, 45000], [1502841600000, 46200], [1502928000000, 47040], [1503014400000, 46900], [1503273600000, 46840], [1503360000000, 47000], [1503446400000, 47480], [1503532800000, 47520], [1503619200000, 47020], [1503878400000, 46100], [1503964800000, 46080], [1504051200000, 46200], [1504137600000, 46320], [1504224000000, 46480], [1504483200000, 46040], [1504569600000, 46760], [1504656000000, 47000], [1504742400000, 48120], [1504828800000, 49080], [1505088000000, 49800], [1505174400000, 49600], [1505260800000, 49620], [1505347200000, 50300], [1505433600000, 50400], [1505692800000, 52480], [1505779200000, 52120], [1505865600000, 52220], [1505952000000, 52800], [1506038400000, 53000], [1506297600000, 53620], [1506384000000, 51660], [1506470400000, 51680], [1506556800000, 51260], [1506643200000, 51280], [1507593600000, 52800], [1507680000000, 54640], [1507766400000, 54800], [1507852800000, 54000], [1508112000000, 53920], [1508198400000, 54800], [1508284800000, 54760], [1508371200000, 52980], [1508457600000, 53840], [1508716800000, 54300], [1508803200000, 54040], [1508889600000, 53900], [1508976000000, 52400], [1509062400000, 53080], [1509321600000, 54040], [1509408000000, 55080], [1509494400000, 57220], [1509580800000, 57060], [1509667200000, 56380], [1509926400000, 56380], [1510012800000, 56100], [1510099200000, 56760], [1510185600000, 56340], [1510272000000, 56400], [1510531200000, 56380], [1510617600000, 55920], [1510704000000, 55340], [1510790400000, 55780], [1510876800000, 55820], [1511136000000, 55200], [1511222400000, 55280], [1511308800000, 55960], [1511395200000, 55300], [1511481600000, 55460], [1511740800000, 52640], [1511827200000, 53280], [1511913600000, 52600], [1512000000000, 50800], [1512086400000, 50840], [1512345600000, 51340], [1512432000000, 51260], [1512518400000, 50020], [1512604800000, 50740], [1512691200000, 52000], [1512950400000, 51780], [1513036800000, 52100], [1513123200000, 51320], [1513209600000, 51060], [1513296000000, 50620], [1513555200000, 51200], [1513641600000, 51560], [1513728000000, 50880], [1513814400000, 49140], [1513900800000, 49700], [1514246400000, 48200], [1514332800000, 49360], [1514419200000, 50960], [1514851200000, 51020], [1514937600000, 51620], [1515024000000, 51080], [1515110400000, 52120], [1515369600000, 52020], [1515456000000, 50400], [1515542400000, 48840], [1515628800000, 48240], [1515715200000, 48200], [1515974400000, 48540], [1516060800000, 50000], [1516147200000, 49620], [1516233600000, 49900], [1516320000000, 49320], [1516579200000, 48240], [1516665600000, 49160], [1516752000000, 49340], [1516838400000, 50260], [1516924800000, 50780], [1517184000000, 51220], [1517270400000, 49800], [1517356800000, 49900], [1517443200000, 49820], [1517529600000, 47700], [1517788800000, 47920], [1517875200000, 47420], [1517961600000, 45800], [1518048000000, 46000], [1518134400000, 44700], [1518393600000, 45720], [1518480000000, 47540], [1518566400000, 49000], [1518998400000, 48380], [1519084800000, 47400], [1519171200000, 47280], [1519257600000, 46760], [1519344000000, 47220], [1519603200000, 47380], [1519689600000, 47380], [1519776000000, 47060], [1519948800000, 46020], [1520208000000, 45200], [1520294400000, 47020], [1520380800000, 48620], [1520467200000, 49200], [1520553600000, 49740], [1520812800000, 49740], [1520899200000, 51660], [1520985600000, 51760], [1521072000000, 51540], [1521158400000, 51140], [1521417600000, 50740], [1521504000000, 51200], [1521590400000, 51060], [1521676800000, 51780], [1521763200000, 49720], [1522022400000, 50280], [1522108800000, 49980], [1522195200000, 48700], [1522281600000, 49040], [1522368000000, 49220], [1522627200000, 48540], [1522713600000, 48120], [1522800000000, 46920], [1522886400000, 48740], [1522972800000, 48400], [1523232000000, 49200], [1523318400000, 48880], [1523404800000, 48860], [1523491200000, 49000], [1523577600000, 49800], [1523836800000, 50340], [1523923200000, 49980], [1524009600000, 51360], [1524096000000, 52780], [1524182400000, 51620], [1524441600000, 51900], [1524528000000, 50460], [1524614400000, 50400], [1524700800000, 52140], [1524787200000, 53000], [1525046400000, 53000], [1525219200000, 53000], [1525305600000, 53000], [1525392000000, 51900], [1525737600000, 52600], [1525824000000, 50900], [1525910400000, 51600], [1525996800000, 51300], [1526256000000, 50100], [1526342400000, 49200], [1526428800000, 49850], [1526515200000, 49400], [1526601600000, 49500], [1526860800000, 50000], [1527033600000, 51800], [1527120000000, 51400], [1527206400000, 52700], [1527465600000, 52300], [1527552000000, 51300], [1527638400000, 49500], [1527724800000, 50700], [1527811200000, 51300], [1528070400000, 51100], [1528156800000, 51300], [1528329600000, 50600], [1528416000000, 49650], [1528675200000, 49900], [1528761600000, 49400], [1528934400000, 48200], [1529020800000, 47650], [1529280000000, 46600], [1529366400000, 47000], [1529452800000, 47000], [1529539200000, 47050], [1529625600000, 47250], [1529884800000, 46650], [1529971200000, 47000], [1530057600000, 47950], [1530144000000, 46800], [1530230400000, 46650], [1530489600000, 45550], [1530576000000, 46150], [1530662400000, 46250], [1530748800000, 45950], [1530835200000, 44900], [1531094400000, 45600], [1531180800000, 46300], [1531267200000, 46000], [1531353600000, 45500], [1531440000000, 46500], [1531699200000, 46050], [1531785600000, 45850], [1531872000000, 46550], [1531958400000, 46900], [1532044800000, 47450], [1532304000000, 46500], [1532390400000, 46150], [1532476800000, 46150], [1532563200000, 46900], [1532649600000, 46900], [1532908800000, 46500], [1532995200000, 46250], [1533081600000, 46550], [1533168000000, 45550], [1533254400000, 45750], [1533513600000, 45800], [1533600000000, 46700], [1533686400000, 46800], [1533772800000, 46900], [1533859200000, 45400], [1534118400000, 45050], [1534204800000, 45150], [1534377600000, 44250], [1534464000000, 44100], [1534723200000, 43850], [1534809600000, 44800], [1534896000000, 46100], [1534982400000, 46200], [1535068800000, 46150], [1535328000000, 46300], [1535414400000, 46550], [1535500800000, 46800], [1535587200000, 47650], [1535673600000, 48450], [1535932800000, 47450], [1536019200000, 47650], [1536105600000, 46600], [1536192000000, 46100], [1536278400000, 44900], [1536537600000, 45500], [1536624000000, 45050], [1536710400000, 44550], [1536796800000, 44050], [1536883200000, 45850], [1537142400000, 45150], [1537228800000, 45500], [1537315200000, 46150], [1537401600000, 47250], [1537488000000, 47400], [1538006400000, 47500], [1538092800000, 46450], [1538352000000, 46350], [1538438400000, 45700], [1538611200000, 44700], [1538697600000, 44700], [1538956800000, 44950], [1539129600000, 45300], [1539216000000, 43100], [1539302400000, 44000], [1539561600000, 43800], [1539648000000, 43600], [1539734400000, 44150], [1539820800000, 44050], [1539907200000, 43900], [1540166400000, 43550], [1540252800000, 43050], [1540339200000, 42550], [1540425600000, 41000], [1540512000000, 41000], [1540771200000, 41400], [1540857600000, 42350], [1540944000000, 42400], [1541030400000, 42150], [1541116800000, 44150], [1541376000000, 43800], [1541462400000, 43750], [1541548800000, 44000], [1541635200000, 44050], [1541721600000, 44300], [1541980800000, 45200], [1542067200000, 44500], [1542153600000, 44100], [1542240000000, 44250], [1542326400000, 44000], [1542585600000, 43650], [1542672000000, 42800], [1542758400000, 42100], [1542844800000, 42450], [1542931200000, 42400], [1543190400000, 42600], [1543276800000, 43050], [1543363200000, 43150], [1543449600000, 43150], [1543536000000, 41850], [1543795200000, 43250], [1543881600000, 42150], [1543968000000, 41450], [1544054400000, 40500], [1544140800000, 40950], [1544400000000, 40200], [1544486400000, 40250], [1544572800000, 40450], [1544659200000, 40000], [1544745600000, 38950], [1545004800000, 39150], [1545091200000, 38900], [1545177600000, 39100], [1545264000000, 38650], [1545350400000, 38650], [1545609600000, 38800], [1545782400000, 38350], [1545868800000, 38250], [1545955200000, 38700], [1546387200000, 38750], [1546473600000, 37600], [1546560000000, 37450], [1546819200000, 38750], [1546905600000, 38100], [1546992000000, 39600], [1547078400000, 39800], [1547164800000, 40500], [1547424000000, 40050], [1547510400000, 41100], [1547596800000, 41450], [1547683200000, 41950], [1547769600000, 42300], [1548028800000, 42750], [1548115200000, 42150], [1548201600000, 42000], [1548288000000, 43050], [1548374400000, 44750], [1548633600000, 45050], [1548720000000, 45500], [1548806400000, 46400], [1548892800000, 46150], [1548979200000, 46350], [1549497600000, 46200], [1549584000000, 44800], [1549843200000, 45000], [1549929600000, 46050], [1550016000000, 46200], [1550102400000, 47500], [1550188800000, 46050], [1550448000000, 46200], [1550534400000, 45950], [1550620800000, 46900], [1550707200000, 46950], [1550793600000, 47150], [1551052800000, 47350], [1551139200000, 46750], [1551225600000, 46750], [1551312000000, 45100], [1551657600000, 44850], [1551744000000, 44250], [1551830400000, 44000], [1551916800000, 44450], [1552003200000, 43800], [1552262400000, 43650], [1552348800000, 44650], [1552435200000, 43850], [1552521600000, 43850], [1552608000000, 44200], [1552867200000, 43700], [1552953600000, 43900], [1553040000000, 44050], [1553126400000, 45850], [1553212800000, 46550], [1553472000000, 45500], [1553558400000, 45250], [1553644800000, 45350], [1553731200000, 44850], [1553817600000, 44650], [1554076800000, 45050], [1554163200000, 45750], [1554249600000, 46600], [1554336000000, 46950], [1554422400000, 46850], [1554681600000, 46650], [1554768000000, 46650], [1554854400000, 46700], [1554940800000, 46250], [1555027200000, 46850], [1555286400000, 47050], [1555372800000, 47250], [1555459200000, 47050], [1555545600000, 45600], [1555632000000, 45300], [1555891200000, 45350], [1555977600000, 45200], [1556064000000, 44750], [1556150400000, 44650], [1556236800000, 44850], [1556496000000, 46150], [1556582400000, 45850], [1556755200000, 45900], [1556841600000, 45300], [1557187200000, 44850], [1557273600000, 44250], [1557360000000, 42450], [1557446400000, 42900], [1557705600000, 42650], [1557792000000, 42650], [1557878400000, 42550], [1557964800000, 41550], [1558051200000, 41200], [1558310400000, 42000], [1558396800000, 43150], [1558483200000, 43500], [1558569600000, 43850], [1558656000000, 42700], [1558915200000, 42650], [1559001600000, 42550], [1559088000000, 41800], [1559174400000, 42550], [1559260800000, 42500], [1559520000000, 43800], [1559606400000, 43450], [1559692800000, 43900], [1559865600000, 44200], [1560124800000, 44800], [1560211200000, 44850], [1560297600000, 44600], [1560384000000, 43750], [1560470400000, 44000], [1560729600000, 43900], [1560816000000, 44350], [1560902400000, 45350], [1560988800000, 45500], [1561075200000, 45700], [1561334400000, 45500], [1561420800000, 45600], [1561507200000, 45700], [1561593600000, 46500], [1561680000000, 47000], [1561939200000, 46600], [1562025600000, 46250], [1562112000000, 45400], [1562198400000, 46000], [1562284800000, 45650], [1562544000000, 44400], [1562630400000, 45100], [1562716800000, 45550], [1562803200000, 46200], [1562889600000, 46300], [1563148800000, 46450], [1563235200000, 46850], [1563321600000, 46050], [1563408000000, 46100], [1563494400000, 46800], [1563753600000, 47200], [1563840000000, 47300], [1563926400000, 46400], [1564012800000, 47200], [1564099200000, 47150], [1564358400000, 46100], [1564444800000, 46550], [1564531200000, 45350], [1564617600000, 45200], [1564704000000, 44950], [1564963200000, 43950], [1565049600000, 43500], [1565136000000, 43200], [1565222400000, 42650], [1565308800000, 43150], [1565568000000, 43700], [1565654400000, 43000], [1565740800000, 43700], [1565913600000, 43900], [1566172800000, 43600], [1566259200000, 44450], [1566345600000, 44500], [1566432000000, 44050], [1566518400000, 43950], [1566777600000, 43600], [1566864000000, 44050], [1566950400000, 44150], [1567036800000, 43400], [1567123200000, 44000], [1567382400000, 43800], [1567468800000, 43250], [1567555200000, 44100], [1567641600000, 45700], [1567728000000, 46300], [1567987200000, 46900], [1568073600000, 47000], [1568160000000, 47150], [1568592000000, 47100], [1568678400000, 46900], [1568764800000, 47700], [1568851200000, 49150], [1568937600000, 49200], [1569196800000, 49300], [1569283200000, 49500], [1569369600000, 48900], [1569456000000, 49200], [1569542400000, 48400], [1569801600000, 49050], [1569888000000, 48850], [1569974400000, 47600], [1570147200000, 48000], [1570406400000, 47750], [1570492800000, 48900], [1570665600000, 48550], [1570752000000, 49150], [1571011200000, 50000], [1571097600000, 50100], [1571184000000, 50700], [1571270400000, 50500], [1571356800000, 49900], [1571616000000, 50300], [1571702400000, 51200], [1571788800000, 51200], [1571875200000, 50700], [1571961600000, 50900], [1572220800000, 51300], [1572307200000, 51100], [1572393600000, 50400], [1572480000000, 50400], [1572566400000, 51200], [1572825600000, 52300], [1572912000000, 52700], [1572998400000, 53300], [1573084800000, 52900], [1573171200000, 52100], [1573430400000, 51600], [1573516800000, 52600], [1573603200000, 52500], [1573689600000, 52800], [1573776000000, 53700], [1574035200000, 53500], [1574121600000, 53500], [1574208000000, 52000], [1574294400000, 51000], [1574380800000, 51600], [1574640000000, 51800], [1574726400000, 51800], [1574812800000, 52200], [1574899200000, 51300], [1574985600000, 50300], [1575244800000, 50400], [1575331200000, 49900], [1575417600000, 49450], [1575504000000, 49500], [1575590400000, 50400], [1575849600000, 51200], [1575936000000, 51500], [1576022400000, 51900], [1576108800000, 53300], [1576195200000, 54700], [1576454400000, 54700], [1576540800000, 56700], [1576627200000, 56300], [1576713600000, 56000], [1576800000000, 56000], [1577059200000, 55500], [1577145600000, 55000], [1577318400000, 55400], [1577404800000, 56500], [1577664000000, 55800], [1577923200000, 55200], [1578009600000, 55500], [1578268800000, 55500], [1578355200000, 55800], [1578441600000, 56800], [1578528000000, 58600], [1578614400000, 59500], [1578873600000, 60000], [1578960000000, 60000], [1579046400000, 59000], [1579132800000, 60700], [1579219200000, 61300], [1579478400000, 62400], [1579564800000, 61400], [1579651200000, 62300], [1579737600000, 60800], [1580169600000, 58800], [1580256000000, 59100], [1580342400000, 57200], [1580428800000, 56400], [1580688000000, 57200], [1580774400000, 58900], [1580860800000, 59500], [1580947200000, 61100], [1581033600000, 60400], [1581292800000, 59700], [1581379200000, 59900], [1581465600000, 60500], [1581552000000, 60700], [1581638400000, 61800], [1581897600000, 61500], [1581984000000, 59800], [1582070400000, 60200], [1582156800000, 60000], [1582243200000, 59200], [1582502400000, 56800], [1582588800000, 57900], [1582675200000, 56500], [1582761600000, 55900], [1582848000000, 54200], [1583107200000, 55000], [1583193600000, 55400], [1583280000000, 57400], [1583366400000, 57800], [1583452800000, 56500], [1583712000000, 54200], [1583798400000, 54600], [1583884800000, 52100], [1583971200000, 50800], [1584057600000, 49950], [1584316800000, 48900], [1584403200000, 47300], [1584489600000, 45600], [1584576000000, 42950], [1584662400000, 45400], [1584921600000, 42500], [1585008000000, 46950], [1585094400000, 48650], [1585180800000, 47800], [1585267200000, 48300], [1585526400000, 47850], [1585612800000, 47750], [1585699200000, 45800], [1585785600000, 46800], [1585872000000, 47000], [1586131200000, 48700], [1586217600000, 49600], [1586304000000, 48600], [1586390400000, 49100], [1586476800000, 49250], [1586736000000, 48300], [1586822400000, 49000], [1586995200000, 49000], [1587081600000, 51400], [1587340800000, 50100], [1587427200000, 49250], [1587513600000, 49850], [1587600000000, 49850], [1587686400000, 49350], [1587945600000, 49850], [1588032000000, 50100], [1588118400000, 50000], [1588550400000, 48500], [1588723200000, 49200], [1588809600000, 48800], [1588896000000, 48800], [1589155200000, 48400], [1589241600000, 47900], [1589328000000, 48550], [1589414400000, 48000], [1589500800000, 47850], [1589760000000, 48800], [1589846400000, 50300], [1589932800000, 50000], [1590019200000, 49950], [1590105600000, 48750], [1590364800000, 48850], [1590451200000, 49250], [1590537600000, 49900], [1590624000000, 50400], [1590710400000, 50700], [1590969600000, 51200], [1591056000000, 51400], [1591142400000, 54500], [1591228800000, 54600], [1591315200000, 55500], [1591574400000, 54900], [1591660800000, 55500], [1591747200000, 55400], [1591833600000, 54300], [1591920000000, 52300], [1592179200000, 49900], [1592265600000, 52100], [1592352000000, 52200], [1592438400000, 52300], [1592524800000, 52900], [1592784000000, 52000], [1592870400000, 51400], [1592956800000, 52900], [1593043200000, 51900], [1593129600000, 53300], [1593388800000, 52400], [1593475200000, 52800], [1593561600000, 52600], [1593648000000, 52900], [1593734400000, 53600], [1593993600000, 55000], [1594080000000, 53400], [1594166400000, 53000], [1594252800000, 52800], [1594339200000, 52700], [1594598400000, 53400], [1594684800000, 53800], [1594771200000, 54700], [1594857600000, 53800], [1594944000000, 54400], [1595203200000, 54200], [1595289600000, 55300], [1595376000000, 54700], [1595462400000, 54100], [1595548800000, 54200], [1595808000000, 55600], [1595894400000, 58600], [1595980800000, 59000], [1596067200000, 59000], [1596153600000, 57900], [1596412800000, 56800], [1596499200000, 57300], [1596585600000, 56900], [1596672000000, 58000], [1596758400000, 57500], [1597017600000, 57800], [1597104000000, 58200], [1597190400000, 59000], [1597276800000, 58700], [1597363200000, 58000], [1597708800000, 58400], [1597795200000, 57800], [1597881600000, 55400], [1597968000000, 55900], [1598227200000, 56100], [1598313600000, 56400], [1598400000000, 56400], [1598486400000, 55600], [1598572800000, 55400], [1598832000000, 54000], [1598918400000, 54200], [1599004800000, 54400], [1599091200000, 56400], [1599177600000, 55600], [1599436800000, 56500], [1599523200000, 58700], [1599609600000, 58400], [1599696000000, 59200], [1599782400000, 59000], [1600041600000, 60400], [1600128000000, 61000], [1600214400000, 61000], [1600300800000, 59500], [1600387200000, 59300], [1600646400000, 59200], [1600732800000, 58200], [1600819200000, 58600], [1600905600000, 57800], [1600992000000, 57900], [1601251200000, 58200], [1601337600000, 58200], [1601856000000, 58700], [1601942400000, 59000], [1602028800000, 59900], [1602115200000, 59700], [1602460800000, 60400], [1602547200000, 60900], [1602633600000, 60900], [1602720000000, 60000], [1602806400000, 59500], [1603065600000, 60000], [1603152000000, 60900], [1603238400000, 60900], [1603324800000, 60100], [1603411200000, 60200], [1603670400000, 60400], [1603756800000, 59800], [1603843200000, 59000], [1603929600000, 58100], [1604016000000, 56600], [1604275200000, 57400], [1604361600000, 58800], [1604448000000, 58500], [1604534400000, 60300], [1604620800000, 60100], [1604880000000, 60200], [1604966400000, 60200], [1605052800000, 61300], [1605139200000, 61000], [1605225600000, 63200], [1605484800000, 66300], [1605571200000, 65700], [1605657600000, 64800], [1605744000000, 64600], [1605830400000, 64700], [1606089600000, 67500], [1606176000000, 67700], [1606262400000, 66600], [1606348800000, 68000], [1606435200000, 68200], [1606694400000, 66700], [1606780800000, 67800], [1606867200000, 69500], [1606953600000, 69700], [1607040000000, 71500], [1607299200000, 72900], [1607385600000, 71700], [1607472000000, 73900], [1607558400000, 72900], [1607644800000, 73400], [1607904000000, 73800], [1607990400000, 73800], [1608076800000, 73800], [1608163200000, 73300], [1608249600000, 73000], [1608508800000, 73000], [1608595200000, 72300], [1608681600000, 73900], [1608768000000, 77800], [1609113600000, 78700], [1609200000000, 78300], [1609286400000, 81000], [1609718400000, 83000], [1609804800000, 83900], [1609891200000, 82200], [1609977600000, 82900], [1610064000000, 88800], [1610323200000, 91000], [1610409600000, 90600], [1610496000000, 89700], [1610582400000, 89700], [1610668800000, 88000], [1610928000000, 85000], [1611014400000, 87000], [1611100800000, 87200], [1611187200000, 88100], [1611273600000, 86800], [1611532800000, 89400], [1611619200000, 86700], [1611705600000, 85600], [1611792000000, 83700], [1611878400000, 82000], [1612137600000, 83000], [1612224000000, 84400], [1612310400000, 84600], [1612396800000, 82500], [1612483200000, 83500], [1612742400000, 83000], [1612828800000, 82700], [1612915200000, 81600], [1613347200000, 84200], [1613433600000, 84900], [1613520000000, 83200], [1613606400000, 82100], [1613692800000, 82600], [1613952000000, 82200], [1614038400000, 82000], [1614124800000, 82000], [1614211200000, 85300], [1614297600000, 82500], [1614643200000, 83600], [1614729600000, 84000], [1614816000000, 82400], [1614902400000, 82100], [1615161600000, 82000], [1615248000000, 81400], [1615334400000, 80900], [1615420800000, 82000], [1615507200000, 82800], [1615766400000, 81800], [1615852800000, 82800], [1615939200000, 82300], [1616025600000, 82900], [1616112000000, 81900], [1616371200000, 82000], [1616457600000, 81800], [1616544000000, 81000], [1616630400000, 81200], [1616716800000, 81500], [1616976000000, 81600], [1617062400000, 82200], [1617148800000, 81400], [1617235200000, 82900], [1617321600000, 84800], [1617580800000, 85400], [1617667200000, 86000], [1617753600000, 85600], [1617840000000, 84700], [1617926400000, 83600], [1618185600000, 83200], [1618272000000, 84000], [1618358400000, 84000], [1618444800000, 84100], [1618531200000, 83900], [1618790400000, 83300], [1618876800000, 83900], [1618963200000, 82600], [1619049600000, 82400], [1619136000000, 82800], [1619395200000, 83500], [1619481600000, 82900], [1619568000000, 82100], [1619654400000, 81700], [1619740800000, 81500], [1620000000000, 81700], [1620086400000, 82600], [1620259200000, 82300], [1620345600000, 81900], [1620604800000, 83200], [1620691200000, 81200], [1620777600000, 80000], [1620864000000, 78500], [1620950400000, 80100], [1621209600000, 79600], [1621296000000, 79600], [1621468800000, 79500], [1621555200000, 80100], [1621814400000, 79700], [1621900800000, 79900], [1621987200000, 79800], [1622073600000, 79600], [1622160000000, 80100], [1622419200000, 80500], [1622505600000, 80600], [1622592000000, 80800], [1622678400000, 82800], [1622764800000, 82200], [1623024000000, 81900], [1623110400000, 81900], [1623196800000, 81100], [1623283200000, 81000], [1623369600000, 81000], [1623628800000, 80500], [1623715200000, 80900], [1623801600000, 81800], [1623888000000, 80900], [1623974400000, 80500], [1624233600000, 79900], [1624320000000, 80000], [1624406400000, 80100], [1624492800000, 81200], [1624579200000, 81600], [1624838400000, 81900], [1624924800000, 81000], [1625011200000, 80700], [1625097600000, 80100], [1625184000000, 80000], [1625443200000, 80400], [1625529600000, 81200], [1625616000000, 80800], [1625702400000, 79900], [1625788800000, 79400], [1626048000000, 79700], [1626134400000, 79800], [1626220800000, 79500], [1626307200000, 80600], [1626393600000, 79800], [1626652800000, 79000], [1626739200000, 79000], [1626825600000, 78500], [1626912000000, 79700], [1626998400000, 79300], [1627257600000, 78800], [1627344000000, 78500], [1627430400000, 79200], [1627516800000, 79000], [1627603200000, 78500], [1627862400000, 79300], [1627948800000, 81400], [1628035200000, 82900], [1628121600000, 82100], [1628208000000, 81500], [1628467200000, 81500], [1628553600000, 80200], [1628640000000, 78500], [1628726400000, 77000], [1628812800000, 74400], [1629158400000, 74200], [1629244800000, 73900], [1629331200000, 73100], [1629417600000, 72700], [1629676800000, 73300], [1629763200000, 75600], [1629849600000, 75700], [1629936000000, 74600], [1630022400000, 74300], [1630281600000, 74600], [1630368000000, 76700], [1630454400000, 76800], [1630540800000, 76000], [1630627200000, 76600], [1630886400000, 77300], [1630972800000, 76100], [1631059200000, 76300], [1631145600000, 75300], [1631232000000, 75300], [1631491200000, 76300], [1631577600000, 76600], [1631664000000, 77000], [1631750400000, 76100], [1631836800000, 77200], [1632355200000, 77400], [1632441600000, 77300], [1632700800000, 77700], [1632787200000, 76300], [1632873600000, 74100], [1632960000000, 74100], [1633046400000, 73200], [1633392000000, 72200], [1633478400000, 71300], [1633564800000, 71600], [1633651200000, 71500], [1633996800000, 69000], [1634083200000, 68800], [1634169600000, 69400], [1634256000000, 70100], [1634515200000, 70200], [1634601600000, 70600], [1634688000000, 70300], [1634774400000, 70200], [1634860800000, 70400], [1635120000000, 70200], [1635206400000, 71100], [1635292800000, 70100], [1635379200000, 70700], [1635465600000, 69800], [1635724800000, 69900], [1635811200000, 71500], [1635897600000, 70400], [1635984000000, 70600], [1636070400000, 70200], [1636329600000, 70600], [1636416000000, 70500], [1636502400000, 70200], [1636588800000, 69900], [1636675200000, 70600], [1636934400000, 71400], [1637020800000, 71300], [1637107200000, 70700], [1637193600000, 70200], [1637280000000, 71200], [1637539200000, 74900], [1637625600000, 75300], [1637712000000, 74800], [1637798400000, 73700], [1637884800000, 72300], [1638144000000, 72300], [1638230400000, 71300], [1638316800000, 74400], [1638403200000, 75800], [1638489600000, 75600], [1638748800000, 76300], [1638835200000, 77400], [1638921600000, 77400], [1639008000000, 78200], [1639094400000, 76900], [1639353600000, 76800], [1639440000000, 77000], [1639526400000, 77600], [1639612800000, 77800], [1639699200000, 78000], [1639958400000, 77100], [1640044800000, 78100], [1640131200000, 79400], [1640217600000, 79900], [1640304000000, 80500], [1640563200000, 80200], [1640649600000, 80300], [1640736000000, 78800], [1640822400000, 78300], [1641168000000, 78600], [1641254400000, 78700], [1641340800000, 77400], [1641427200000, 76900], [1641513600000, 78300], [1641772800000, 78000], [1641859200000, 78900], [1641945600000, 78900], [1642032000000, 77900], [1642118400000, 77300], [1642377600000, 77500], [1642464000000, 77000], [1642550400000, 76300], [1642636800000, 76500], [1642723200000, 75600], [1642982400000, 75100], [1643068800000, 74000], [1643155200000, 73300], [1643241600000, 71300], [1643328000000, 73300], [1643846400000, 73300], [1643932800000, 74000], [1644192000000, 73000], [1644278400000, 73500], [1644364800000, 74700], [1644451200000, 75400], [1644537600000, 74900], [1644796800000, 73700], [1644883200000, 73700], [1644969600000, 74800], [1645056000000, 75000], [1645142400000, 74300], [1645401600000, 74200], [1645488000000, 73400], [1645574400000, 73000], [1645660800000, 71500], [1645747200000, 71900], [1646006400000, 72100], [1646179200000, 71700], [1646265600000, 72900], [1646352000000, 71500], [1646611200000, 70100], [1646697600000, 69500], [1646870400000, 71200], [1646956800000, 70000], [1647216000000, 70200], [1647302400000, 69500], [1647388800000, 70400], [1647475200000, 71200], [1647561600000, 70700], [1647820800000, 69900], [1647907200000, 70300], [1647993600000, 70500], [1648080000000, 69800], [1648166400000, 69800], [1648425600000, 69700], [1648512000000, 70200], [1648598400000, 69900], [1648684800000, 69600], [1648771200000, 69100], [1649030400000, 69300], [1649116800000, 69200], [1649203200000, 68500], [1649289600000, 68000], [1649376000000, 67800], [1649635200000, 67900], [1649721600000, 67000], [1649808000000, 68700], [1649894400000, 67500], [1649980800000, 66600], [1650240000000, 66700], [1650326400000, 67300], [1650412800000, 67400], [1650499200000, 67700], [1650585600000, 67000], [1650844800000, 66300], [1650931200000, 66100], [1651017600000, 65000], [1651104000000, 64800], [1651190400000, 67400], [1651449600000, 67300], [1651536000000, 67500], [1651622400000, 67900], [1651795200000, 66500], [1652054400000, 66100], [1652140800000, 65700], [1652227200000, 65700], [1652313600000, 64900], [1652400000000, 66500], [1652659200000, 66300], [1652745600000, 67600], [1652832000000, 68100], [1652918400000, 67500], [1653004800000, 68000], [1653264000000, 67900], [1653350400000, 66500], [1653436800000, 66400], [1653523200000, 65900], [1653609600000, 66500], [1653868800000, 67700], [1653955200000, 67400], [1654128000000, 66700], [1654214400000, 66800], [1654560000000, 65500], [1654646400000, 65300], [1654732800000, 65200], [1654819200000, 63800], [1655078400000, 62100], [1655164800000, 61900], [1655251200000, 60700], [1655337600000, 60900], [1655424000000, 59800], [1655683200000, 58700], [1655769600000, 58500], [1655856000000, 57600], [1655942400000, 57400], [1656028800000, 58400], [1656288000000, 58800], [1656374400000, 59400], [1656460800000, 58000], [1656547200000, 57000], [1656633600000, 56200], [1656892800000, 57100], [1656979200000, 57200], [1657065600000, 56400], [1657152000000, 58200], [1657238400000, 58700], [1657497600000, 58800], [1657584000000, 58100], [1657670400000, 58000], [1657756800000, 57500], [1657843200000, 60000], [1658102400000, 61900], [1658188800000, 60900], [1658275200000, 60500], [1658361600000, 61800], [1658448000000, 61300], [1658707200000, 61100], [1658793600000, 61700], [1658880000000, 61800], [1658966400000, 61900], [1659052800000, 61400], [1659312000000, 61300], [1659398400000, 61700], [1659484800000, 61300], [1659571200000, 61500], [1659657600000, 61500], [1659916800000, 60800], [1660003200000, 60000], [1660089600000, 59100], [1660176000000, 59900], [1660262400000, 60200], [1660608000000, 61000], [1660694400000, 60400], [1660780800000, 61500], [1660867200000, 60900], [1661126400000, 60000], [1661212800000, 59100], [1661299200000, 59000], [1661385600000, 59700], [1661472000000, 60000], [1661731200000, 58600], [1661817600000, 58800], [1661904000000, 59700], [1661990400000, 58400], [1662076800000, 57500], [1662336000000, 57100], [1662422400000, 57100], [1662508800000, 56000], [1662595200000, 55600], [1663027200000, 58100], [1663113600000, 56800], [1663200000000, 56000], [1663286400000, 56200], [1663545600000, 56400], [1663632000000, 55800], [1663718400000, 55300], [1663804800000, 54400], [1663891200000, 54500], [1664150400000, 53900], [1664236800000, 54200], [1664323200000, 52900], [1664409600000, 52600], [1664496000000, 53100], [1664841600000, 55200], [1664928000000, 56000], [1665014400000, 56300], [1665100800000, 56200], [1665446400000, 55400], [1665532800000, 55800], [1665619200000, 55200], [1665705600000, 56300], [1665964800000, 56600], [1666051200000, 56500], [1666137600000, 55800], [1666224000000, 55500], [1666310400000, 55900], [1666569600000, 57500], [1666656000000, 57700], [1666742400000, 59400], [1666828800000, 59500], [1666915200000, 57300], [1667174400000, 59400], [1667260800000, 60000], [1667347200000, 59600], [1667433600000, 59200], [1667520000000, 59400], [1667779200000, 60200], [1667865600000, 61800], [1667952000000, 62000], [1668038400000, 60400], [1668124800000, 62900], [1668384000000, 61900], [1668470400000, 62400], [1668556800000, 62700], [1668643200000, 61400], [1668729600000, 61800], [1668988800000, 61400], [1669075200000, 60600], [1669161600000, 61000], [1669248000000, 61400], [1669334400000, 61000], [1669593600000, 60100], [1669680000000, 60600], [1669766400000, 62200], [1669852800000, 62600], [1669939200000, 60400], [1670198400000, 60300], [1670284800000, 59200], [1670371200000, 58900], [1670457600000, 59200], [1670544000000, 60400], [1670803200000, 59500], [1670889600000, 59700], [1670976000000, 60500], [1671062400000, 59300], [1671148800000, 59500], [1671408000000, 59500], [1671494400000, 58600], [1671580800000, 58000], [1671667200000, 59100], [1671753600000, 58100], [1672012800000, 57900], [1672099200000, 58100], [1672185600000, 56600], [1672272000000, 55300], [1672617600000, 55500], [1672704000000, 55400], [1672790400000, 57800], [1672876800000, 58200], [1672963200000, 59000], [1673222400000, 60700], [1673308800000, 60400], [1673395200000, 60500], [1673481600000, 60500], [1673568000000, 60800], [1673827200000, 61100], [1673913600000, 61000], [1674000000000, 60400], [1674086400000, 61500], [1674172800000, 61800], [1674604800000, 63400], [1674691200000, 63900], [1674777600000, 64600], [1675036800000, 63300], [1675123200000, 61000], [1675209600000, 61800], [1675296000000, 63500], [1675382400000, 63800], [1675641600000, 61600], [1675728000000, 61900], [1675814400000, 63100], [1675900800000, 63000], [1675987200000, 62800], [1676246400000, 62900], [1676332800000, 63200], [1676419200000, 62200], [1676505600000, 63700], [1676592000000, 62600], [1676851200000, 62700], [1676937600000, 62100], [1677024000000, 61100], [1677110400000, 62000], [1677196800000, 61300], [1677456000000, 60500], [1677542400000, 60600], [1677715200000, 60800], [1677801600000, 60500], [1678060800000, 61500], [1678147200000, 60700], [1678233600000, 60300], [1678320000000, 60100], [1678406400000, 59500], [1678665600000, 60000], [1678752000000, 59000], [1678838400000, 59800], [1678924800000, 59900], [1679011200000, 61300], [1679270400000, 60200], [1679356800000, 60300], [1679443200000, 61100], [1679529600000, 62300], [1679616000000, 63000], [1679875200000, 62100], [1679961600000, 62900], [1680048000000, 62700], [1680134400000, 63200], [1680220800000, 64000], [1680480000000, 63100], [1680566400000, 63600], [1680652800000, 63900], [1680739200000, 62300], [1680825600000, 65000], [1681084800000, 65700], [1681171200000, 65900], [1681257600000, 66000], [1681344000000, 66100], [1681430400000, 65100], [1681689600000, 65300], [1681776000000, 65600], [1681862400000, 65500], [1681948800000, 65300], [1682035200000, 65700], [1682294400000, 65200], [1682380800000, 63600], [1682467200000, 64100], [1682553600000, 64600], [1682640000000, 65500], [1682985600000, 65700], [1683072000000, 65400], [1683158400000, 65100], [1683504000000, 65900], [1683590400000, 65300], [1683676800000, 64600], [1683763200000, 64200], [1683849600000, 64100], [1684108800000, 64500], [1684195200000, 65400], [1684281600000, 65000], [1684368000000, 66200], [1684454400000, 68400], [1684713600000, 68500], [1684800000000, 68400], [1684886400000, 68500], [1684972800000, 68800], [1685059200000, 70300], [1685404800000, 72300], [1685491200000, 71400], [1685577600000, 70900], [1685664000000, 72200], [1685923200000, 71700], [1686096000000, 71000], [1686182400000, 70900], [1686268800000, 72000], [1686528000000, 71000], [1686614400000, 72000], [1686700800000, 71900], [1686787200000, 71500], [1686873600000, 71800], [1687132800000, 71200], [1687219200000, 71400], [1687305600000, 70500], [1687392000000, 71300], [1687478400000, 71600], [1687737600000, 72400], [1687824000000, 72600], [1687910400000, 72700], [1687996800000, 72400], [1688083200000, 72200], [1688342400000, 73000], [1688428800000, 73000], [1688515200000, 72000], [1688601600000, 71600], [1688688000000, 69900], [1688947200000, 69500], [1689033600000, 71500], [1689120000000, 71900], [1689206400000, 71900], [1689292800000, 73400], [1689552000000, 73300], [1689638400000, 72000], [1689724800000, 71700], [1689811200000, 71000], [1689897600000, 70300], [1690156800000, 70400], [1690243200000, 70000], [1690329600000, 69800], [1690416000000, 71700], [1690502400000, 70600], [1690761600000, 69800], [1690848000000, 71100], [1690934400000, 69900], [1691020800000, 68800], [1691107200000, 68300], [1691366400000, 68500], [1691452800000, 68000],];

        // 현재 날짜 기준 데이터 필터링
        var currentDate = new Date();
        var threeMonthsAgo_M3 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 3, currentDate.getDate());
        var threeMonthsAgo_M6 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 6, currentDate.getDate());
        var threeMonthsAgo_Y1 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 12, currentDate.getDate());
        var threeMonthsAgo_Y3 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 36, currentDate.getDate());
        var threeMonthsAgo_Y10 = new Date(currentDate.getFullYear(), currentDate.getMonth() - 120, currentDate.getDate());

        function getCommonXAxisOptions() {
            return {
                type: 'datetime',
                gridLineWidth: 0,
                lineWidth: 0,
                tickWidth: 0,
                lineColor: '#98ACD0',
                lineWidth: 1,
                labels: {
                    formatter: function () {
                        return Highcharts.dateFormat('%m.%d', this.value);
                    },
                },
                crosshair: {
                    width: 1,
                    color: '#107070',
                    dashStyle: 'Dot'
                }
            }
        }
        var xAxisOptions_M3 = Object.assign({}, getCommonXAxisOptions(), {
            min: threeMonthsAgo_M3.getTime()
        });
        var xAxisOptions_M6 = Object.assign({}, getCommonXAxisOptions(), {
            min: threeMonthsAgo_M6.getTime()
        });
        var xAxisOptions_Y1 = Object.assign({}, getCommonXAxisOptions(), {
            labels: {
                formatter: function () {
                    return Highcharts.dateFormat('%Y.%m', this.value);
                }
            },
            min: threeMonthsAgo_Y1.getTime()
        });
        var xAxisOptions_Y3 = Object.assign({}, getCommonXAxisOptions(), {
            labels: {
                formatter: function () {
                    return Highcharts.dateFormat('%Y.%m', this.value);
                }
            },
            min: threeMonthsAgo_Y3.getTime()
        });
        var xAxisOptions_Y10 = Object.assign({}, getCommonXAxisOptions(), {
            labels: {
                formatter: function () {
                    return Highcharts.dateFormat('%Y', this.value);
                }
            },
            min: threeMonthsAgo_Y10.getTime()
        });

        // 캔들 + 선 차트 생성 (3개월)
        var chart_M3 = Highcharts.stockChart('containeroutline1_2_M3', Object.assign({}, chartOptions, { xAxis: xAxisOptions_M3 }));
        chart_M3.series[0].setData(chart_value); // 캔들 차트
        chart_M3.series[1].setData([]); // 주가 선차트
        chart_M3.series[1].name = '종가'; // 라벨 변경

        // 캔들 + 선 차트 생성 (6개월) 
        window.addEventListener('load', () => {
            setTimeout(() => {
                var chart_M6 = Highcharts.stockChart('containeroutline1_2_M6', Object.assign({}, chartOptions, { xAxis: xAxisOptions_M6 }));
                chart_M6.series[0].setData(chart_value); // 캔들 차트
                chart_M6.series[1].setData([]); // 주가 선차트
                chart_M6.series[1].name = '종가'; // 라벨 변경
            }, 1000); // 1초 후에 하이차트를 랜더링합니다.
        });

        // 선 차트 생성 (1년)
        window.addEventListener('load', () => {
            setTimeout(() => {
                var chart_Y1 = Highcharts.stockChart('containeroutline1_2_Y1', Object.assign({}, chartOptions, { xAxis: xAxisOptions_Y1 }));
                chart_Y1.series[0].setData([]); // 캔들 차트
                chart_Y1.series[1].setData(chart_value5); // 주가 선차트
            }, 1000); // 1초 후에 하이차트를 랜더링합니다.
        });

        // 선 차트 생성 (3년)
        window.addEventListener('load', () => {
            setTimeout(() => {
                var chart_Y3 = Highcharts.stockChart('containeroutline1_2_Y3', Object.assign({}, chartOptions, { xAxis: xAxisOptions_Y3 }));
                chart_Y3.series[0].setData([]); // 캔들 차트
                chart_Y3.series[1].setData(chart_value5); // 주가 선차트
            }, 1000); // 1초 후에 하이차트를 랜더링합니다.
        });

        // 선 차트 생성 (10년)
        window.addEventListener('load', () => {
            setTimeout(() => {
                var chart_Y10 = Highcharts.stockChart('containeroutline1_2_Y10', Object.assign({}, chartOptions, { xAxis: xAxisOptions_Y10 }));
                chart_Y10.series[0].setData([]); // 캔들 차트
                chart_Y10.series[1].setData(chart_value5); // 주가 선차트
            }, 1000); // 1초 후에 하이차트를 랜더링합니다.
        });
    }   

    //재무분석 개요 탭 막대차트
    if ($('#containerSumfinancials1_1').length) {
        Highcharts.chart('containerSumfinancials1_1', {

            chart: {
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
                marginTop:15,
                marginBottom: 45                
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,
                // allButtonsEnabled: true,                
                // selected: 0,                
            },

            legend: {
                enabled: false,
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                shadow: false,
                split: false,
                shared: true,                
                xDateFormat: '%Y.%m.%d',                
                useHTML: true,                
                pointFormat: '<b>{series.name} : {point.y:,.0f} 억원</b></span>',                                                        
            },

            rangeSelector: {
                selected: 1
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: ''
            },

            credits: {
                enabled: false
            },
            

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            xAxis: [{
                categories: ['2018', '2019', '2020', '2021<br><span style="font-size:9px">(추정)</span>', '2022<br><span style="font-size:9px">(추정)</span>'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#656d7e',
                        fontSize: '10px'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },                
                gridLineWidth: 0,
                labels: {
                    enabled: false
                }
            },

            series: [{
                type: 'column',
                name: '매출액',
                data: [{
                    y: 2368069,
                },
                {
                    y: 2796047,
                },
                {
                    y: 3022313,
                },
                {
                    y: 2728378,
                    className: 'point_color'
                },
                {
                    y: 3077058,
                    className: 'point_color'
                }]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    },                    
                },
                column: {
                    pointWidth: 30,
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        overflow: 'allow',
                        format: '{point.y:,.0f}',
                    },
                    
                }
            },

        });
    }
    if ($('#containerSumfinancials1_2').length) {
        Highcharts.chart('containerSumfinancials1_2', {

            chart: {
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },                
                marginTop:15,
                marginBottom: 45                
            },
            // 하단 네비게이션 제거
            navigator: {
                enabled: false
            },

            // 스크롤바 제거
            scrollbar: {
                enabled: false
            },

            // 기간범위선택 
            rangeSelector: {
                enabled: false,
                // allButtonsEnabled: true,                
                // selected: 0,                
            },

            legend: {
                enabled: false,
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                shadow: false,
                split: false,
                shared: true,                
                xDateFormat: '%Y.%m.%d',                
                useHTML: true,                
                pointFormat: '<b>{series.name} : {point.y:,.0f} 원</b></span>',                                                        
            },

            rangeSelector: {
                selected: 1
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: ''
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            xAxis: [{
                categories: ['2018', '2019', '2020', '2021<br><span style="font-size:9px">(추정)</span>', '2022<br><span style="font-size:9px">(추정)</span>'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#656d7e',
                        fontSize: '10px'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                },                   
                
            },

            series: [{
                type: 'column',
                name: '매출액',                
                data: [{
                    y: 927.988,
                },
                {
                    y: -45.988,
                },
                {
                    y: -175.988,
                },
                {
                    y: 85.988,
                    className: 'point_color'
                },
                {
                    y: 95.988,
                    className: 'point_color'
                }]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    },
                    visible: true,
                    minPointLength: 2, // 일정 이상일 때만 표시
                },
                column: {
                    pointWidth: 30,
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },

        });
    }
    if ($('#containerSumfinancials1_3').length) {
        Highcharts.chart('containerSumfinancials1_3', {

            chart: {
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                },
            },

            legend: {
                enabled: false,
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            exporting: {
                enabled: false
            },

            tooltip: {
                shadow: false,
                split: false,
                shared: true,                
                xDateFormat: '%Y.%m.%d',                
                useHTML: true,                
                pointFormat: '<b>{series.name} : {point.y:,.0f} %</b></span>',                                                        
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            title: {
                style: {
                    'font-weight': "bold",
                    color: '#E0E0E3',
                    textTransform: 'uppercase',
                    fontSize: '0',
                },
                text: ''
            },

            credits: {
                enabled: false
            },

            lang: {
                noData: "해당 데이터가 없습니다",
            },

            xAxis: [{
                categories: ['2018', '2019', '2020', '2021<br><span style="font-size:9px">(추정)</span>', '2022<br><span style="font-size:9px">(추정)</span>'],
                crosshair: true,
                labels: {
                    style: {
                        color: '#656d7e',
                        fontSize: '10px'
                    }
                }
            }],

            yAxis: {
                title: {
                    text: null
                },
                gridLineWidth: 0,
                labels: {
                    enabled: false
                }
            },

            series: [{
                type: 'column',
                name: '매출액',
                data: [{
                    y: 97.988,
                },
                {
                    y: 45.988,
                },
                {
                    y: 75.988,
                },
                {
                    y: 85.988,
                    className: 'point_color'
                },
                {
                    y: 95.988,
                    className: 'point_color'
                }]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    pointWidth: 30,
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
                        crop: false,
                        overflow: 'none',
                        format: '{point.y:,.2f}',
                    }
                }
            },

        });
    }

    
});