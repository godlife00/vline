$(document).ready(function () {

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
                labels: {
                    formatter: function () {
                        return Highcharts.dateFormat('%y', this.value);
                    },
                    step: 4
                },
                crosshair: true
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
                name: '주가매출액배수',
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
                data: [[Date.UTC(2018, 01, 01), 20000], [Date.UTC(2018, 11, 30), 16600], [Date.UTC(2018, 12, 28), 17200], [Date.UTC(2019, 01, 31), 14500], [Date.UTC(2019, 02, 28), 15000], [Date.UTC(2019, 03, 29), 19250], [Date.UTC(2019, 04, 30), 17450], [Date.UTC(2019, 05, 31), 14550], [Date.UTC(2019, 06, 28), 16750], [Date.UTC(2019, 07, 31), 12950], [Date.UTC(2019, 08, 30), 12200], [Date.UTC(2019, 09, 30), 11350], [Date.UTC(2019, 10, 31), 12150], [Date.UTC(2019, 11, 29), 11300], [Date.UTC(2019, 12, 30), 12400], [Date.UTC(2020, 01, 31), 11200], [Date.UTC(2020, 02, 28), 10050], [Date.UTC(2020, 03, 31), 7750], [Date.UTC(2020, 04, 29), 10650], [Date.UTC(2020, 05, 29), 13350], [Date.UTC(2020, 06, 30), 12200], [Date.UTC(2020, 07, 31), 12850], [Date.UTC(2020, 08, 31), 12700], [Date.UTC(2020, 09, 29), 13200], [Date.UTC(2020, 10, 30), 12600], [Date.UTC(2020, 11, 30), 12000], [Date.UTC(2020, 12, 30), 13750], [Date.UTC(2021, 01, 29), 16500], [Date.UTC(2021, 02, 26), 16600], [Date.UTC(2021, 03, 31), 16350], [Date.UTC(2021, 04, 30), 16600], [Date.UTC(2021, 05, 31), 15850], [Date.UTC(2021, 06, 30), 16200], [Date.UTC(2021, 07, 30), 15700], [Date.UTC(2021, 08, 31), 14700], [Date.UTC(2021, 09, 30), 13500], [Date.UTC(2021, 10, 29), 12750], [Date.UTC(2021, 11, 30), 12100], [Date.UTC(2021, 12, 30), 24700], [Date.UTC(2022, 01, 28), 24300], [Date.UTC(2022, 02, 28), 26000]],
                yAxis: 0,
                tooltip: {
                    headerFormat: '<span style="color:{series.color};">{series.name}</span> : {point.x:%Y-%m-%d}' + '  ',
                    pointFormat: '<strong>{point.y}</strong></span> 점',
                },
            }, {
                name: '순이익지수[우]',
                data: [[Date.UTC(2007, 03), 1000], [Date.UTC(2007, 06), 10000], [Date.UTC(2017, 06), 10000], [Date.UTC(2019, 01, 31), 14500], [Date.UTC(2019, 02, 28), 15000], [Date.UTC(2022, 01, 28), 24300], [Date.UTC(2022, 02, 28), 26000]],
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
                type: 'column',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#3655d6", "#656d7e", "#bdc8d8"],
            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            xAxis: [{
                categories: ['매출액성장률(%)'],
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
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },
            title: {
                text: null,
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            legend: {
                enabled: false,
            },
            series: [{
                name: '종목',
                data: [28.10]
            }, {
                name: '영업평균',
                data: [13.01]
            }, {
                name: '전체평균',
                data: [10.66]
            }],

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
    if ($('#containerfinancials1_2').length) {
        Highcharts.chart('containerfinancials1_2', {
            chart: {
                type: 'column',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#3655d6", "#656d7e", "#bdc8d8"],
            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            xAxis: [{
                categories: ['영업이익성장률(%)'],
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
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },
            title: {
                text: null,
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            legend: {
                enabled: false,
            },
            series: [{
                name: '종목',
                data: [45]
            }, {
                name: '영업평균',
                data: [24]
            }, {
                name: '전체평균',
                data: [34]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
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
    if ($('#containerfinancials1_3').length) {
        Highcharts.chart('containerfinancials1_3', {
            chart: {
                type: 'column',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#3655d6", "#656d7e", "#bdc8d8"],
            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            xAxis: [{
                categories: ['예상매출액성장률(%)'],
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
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },
            title: {
                text: null,
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            legend: {
                enabled: false,
            },
            series: [{
                name: '종목',
                data: [45]
            }, {
                name: '영업평균',
                data: [24]
            }, {
                name: '전체평균',
                data: [34]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
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
    if ($('#containerfinancials1_4').length) {
        Highcharts.chart('containerfinancials1_4', {
            chart: {
                type: 'column',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#3655d6", "#656d7e", "#bdc8d8"],
            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            xAxis: [{
                categories: ['예상영업익성장률(%)'],
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
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },
            title: {
                text: null,
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            legend: {
                enabled: false,
            },
            series: [{
                name: '종목',
                data: [45]
            }, {
                name: '영업평균',
                data: [24]
            }, {
                name: '전체평균',
                data: [34]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
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
    if ($('#containerfinancials1_5').length) {
        Highcharts.chart('containerfinancials1_5', {
            chart: {
                type: 'column',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#3655d6", "#656d7e", "#bdc8d8"],
            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            xAxis: [{
                categories: ['예상영업익성장률(%)'],
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
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },
            title: {
                text: null,
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            legend: {
                enabled: false,
            },
            series: [{
                name: '종목',
                data: [45]
            }, {
                name: '영업평균',
                data: [24]
            }, {
                name: '전체평균',
                data: [34]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
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
    if ($('#containerfinancials2_1').length) {
        Highcharts.chart('containerfinancials2_1', {
            chart: {
                type: 'column',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#3655d6", "#656d7e", "#bdc8d8"],
            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            xAxis: [{
                categories: ['매출액성장률(%)'],
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
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },
            title: {
                text: null,
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            legend: {
                enabled: false,
            },
            series: [{
                name: '종목',
                data: [97]
            }, {
                name: '영업평균',
                data: [85]
            }, {
                name: '전체평균',
                data: [25]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
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
    if ($('#containerfinancials2_2').length) {
        Highcharts.chart('containerfinancials2_2', {
            chart: {
                type: 'column',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#3655d6", "#656d7e", "#bdc8d8"],
            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            xAxis: [{
                categories: ['매출액성장률(%)'],
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
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },
            title: {
                text: null,
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            legend: {
                enabled: false,
            },
            series: [{
                name: '종목',
                data: [97]
            }, {
                name: '영업평균',
                data: [85]
            }, {
                name: '전체평균',
                data: [25]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
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
    if ($('#containerfinancials2_3').length) {
        Highcharts.chart('containerfinancials2_3', {
            chart: {
                type: 'column',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#3655d6", "#656d7e", "#bdc8d8"],
            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            xAxis: [{
                categories: ['매출액성장률(%)'],
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
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },
            title: {
                text: null,
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            legend: {
                enabled: false,
            },
            series: [{
                name: '종목',
                data: [97]
            }, {
                name: '영업평균',
                data: [85]
            }, {
                name: '전체평균',
                data: [25]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
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
    if ($('#containerfinancials3_1').length) {
        Highcharts.chart('containerfinancials3_1', {
            chart: {
                type: 'column',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#3655d6", "#656d7e", "#bdc8d8"],
            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            xAxis: [{
                categories: ['매출액성장률(%)'],
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
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },
            title: {
                text: null,
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            legend: {
                enabled: false,
            },
            series: [{
                name: '종목',
                data: [97]
            }, {
                name: '영업평균',
                data: [85]
            }, {
                name: '전체평균',
                data: [25]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
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
    if ($('#containerfinancials3_2').length) {
        Highcharts.chart('containerfinancials3_2', {
            chart: {
                type: 'column',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#3655d6", "#656d7e", "#bdc8d8"],
            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            xAxis: [{
                categories: ['매출액성장률(%)'],
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
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },
            title: {
                text: null,
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            legend: {
                enabled: false,
            },
            series: [{
                name: '종목',
                data: [97]
            }, {
                name: '영업평균',
                data: [85]
            }, {
                name: '전체평균',
                data: [25]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
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
    if ($('#containerfinancials4_1').length) {
        Highcharts.chart('containerfinancials4_1', {
            chart: {
                type: 'column',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#3655d6", "#656d7e", "#bdc8d8"],
            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            xAxis: [{
                categories: ['매출액성장률(%)'],
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
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },
            title: {
                text: null,
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            legend: {
                enabled: false,
            },
            series: [{
                name: '종목',
                data: [37.68]
            }, {
                name: '영업평균',
                data: [72.948496]
            }, {
                name: '전체평균',
                data: [97.658773]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
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
    if ($('#containerfinancials4_2').length) {
        Highcharts.chart('containerfinancials4_2', {
            chart: {
                type: 'column',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#3655d6", "#656d7e", "#bdc8d8"],
            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            xAxis: [{
                categories: ['매출액성장률(%)'],
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
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },
            title: {
                text: null,
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            legend: {
                enabled: false,
            },
            series: [{
                name: '종목',
                data: [283.45]
            }, {
                name: '영업평균',
                data: [313.697143]
            }, {
                name: '전체평균',
                data: [285.121084]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
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
    if ($('#containerfinancials4_3').length) {
        Highcharts.chart('containerfinancials4_3', {
            chart: {
                type: 'column',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#3655d6", "#656d7e", "#bdc8d8"],
            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            xAxis: [{
                categories: ['매출액성장률(%)'],
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
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },
            title: {
                text: null,
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            legend: {
                enabled: false,
            },
            series: [{
                name: '종목',
                data: [108.60]
            }, {
                name: '영업평균',
                data: [293.433759]
            }, {
                name: '전체평균',
                data: [528.168263]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
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
    if ($('#containerfinancials4_4').length) {
        Highcharts.chart('containerfinancials4_4', {
            chart: {
                type: 'column',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#3655d6", "#656d7e", "#bdc8d8"],
            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            xAxis: [{
                categories: ['매출액성장률(%)'],
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
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },
            title: {
                text: null,
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            legend: {
                enabled: false,
            },
            series: [{
                name: '종목',
                data: [3.89]
            }, {
                name: '영업평균',
                data: [18.243383]
            }, {
                name: '전체평균',
                data: [21.917693]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
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
    if ($('#containerfinancials4_5').length) {
        Highcharts.chart('containerfinancials4_5', {
            chart: {
                type: 'column',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#3655d6", "#656d7e", "#bdc8d8"],
            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            xAxis: [{
                categories: ['매출액성장률(%)'],
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
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },
            title: {
                text: null,
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            legend: {
                enabled: false,
            },
            series: [{
                name: '종목',
                data: [0.17]
            }, {
                name: '영업평균',
                data: [2.205038]
            }, {
                name: '전체평균',
                data: [5.217784]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
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
    if ($('#containerfinancials5_1').length) {
        Highcharts.chart('containerfinancials5_1', {
            chart: {
                type: 'column',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#3655d6", "#3655d6", "#3655d6"],
            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            xAxis: [{
                categories: ['매출액성장률(%)'],
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
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },
            title: {
                text: null,
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            legend: {
                enabled: false,
            },
            series: [{
                name: '종목',
                data: [97]
            }, {
                name: '영업평균',
                data: [85]
            }, {
                name: '전체평균',
                data: [25]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
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
    if ($('#containerfinancials5_2').length) {
        Highcharts.chart('containerfinancials5_2', {
            chart: {
                type: 'column',
                backgroundColor: {
                    // linearGradient: { x1: 0, y1: 1, x2: 1, y2: 0 },
                    stops: [
                        [0, '#ffffff'],
                        [1, '#ffffff']
                    ]
                },
                style: {
                    fontFamily: "'Spoqa Han Sans Neo','Malgun gothic', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'"
                },
                plotBorderColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },
            colors: ["#3655d6", "#3655d6", "#3655d6"],
            tooltip: {
                shared: true,
                crosshairs: true,
                pointFormat: '<span style="color:{series.color}">{series.name}: <b>{point.y:,.0f}</b><br/>'
            },
            xAxis: [{
                categories: ['매출액성장률(%)'],
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
                lineColor: null,
                minorGridLineWidth: 1,
                gridLineWidth: 0,
                lineWidth: 1,
                plotLines: [{
                    color: '#c8c8c8',
                    width: 1,
                    value: 0
                }],
                alternateGridColor: null,
                showFirstLabel: false,
                breaks: [{
                    from: 0,
                    to: 100
                }],
                labels: {
                    enabled: false
                }
            },
            title: {
                text: null,
            },
            credits: {
                enabled: false
            },
            exporting: {
                enabled: false
            },
            legend: {
                enabled: false,
            },
            series: [{
                name: '종목',
                data: [97]
            }, {
                name: '영업평균',
                data: [85]
            }, {
                name: '전체평균',
                data: [25]
            }],

            plotOptions: {
                series: {
                    marker: {
                        enabled: false,
                    }
                },
                column: {
                    minPointLength: 5,
                    dataLabels: {
                        enabled: true,
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
    if ($('#containeroutline1_2').length) {
        var value = [[1883200000,876994170.97,876994170.95,876994170.25,876994170.79],[1644969600000,171.85,173.34,170.05,172.55],[1645056000000,171.03,171.91,168.47,168.88],[1645142400000,169.82,170.541,166.19,167.3],[1645488000000,164.98,166.69,162.15,164.32],[1645574400000,165.54,166.15,159.75,160.07],[1645660800000,152.58,162.85,152,162.74],[1645747200000,163.84,165.12,160.874,164.85],[1646006400000,163.06,165.42,162.43,165.12],[1646092800000,164.695,166.6,161.97,163.2],[1646179200000,164.39,167.36,162.95,166.56],[1646265600000,168.47,168.91,165.55,166.23],[1646352000000,164.49,165.55,162.1,163.17],[1646611200000,163.36,165.02,159.04,159.3],[1646697600000,158.82,162.88,155.8,157.44],[1646784000000,161.475,163.41,159.41,162.95],[1646870400000,160.2,160.39,155.98,158.52],[1646956800000,158.93,159.28,154.5,154.73],[1647216000000,151.45,154.12,150.1,150.62],[1647302400000,150.9,155.57,150.38,155.09],[1647388800000,157.05,160,154.46,159.59],[1647475200000,158.61,161,157.63,160.62],[1647561600000,160.51,164.48,159.76,163.98],[1647820800000,163.51,166.35,163.015,165.38],[1647907200000,165.51,169.42,164.91,168.82],[1647993600000,167.99,172.64,167.65,170.21],[1648080000000,171.06,174.14,170.21,174.07],[1648166400000,173.88,175.28,172.75,174.72],[1648425600000,172.17,175.73,172,175.6],[1648512000000,176.69,179.01,176.34,178.96],[1648598400000,178.55,179.61,176.7,177.77],[1648684800000,177.84,178.03,174.4,174.61],[1648771200000,174.03,174.88,171.94,174.31],[1649030400000,174.57,178.49,174.44,178.44],[1649116800000,177.5,178.3,174.415,175.06],[1649203200000,172.36,173.63,170.13,171.83],[1649289600000,171.16,173.36,169.85,172.14],[1649376000000,171.78,171.78,169.2,170.09],[1649635200000,168.71,169.03,165.5,165.75],[1649721600000,168.02,169.87,166.64,167.66],[1649808000000,167.39,171.04,166.77,170.4],[1649894400000,170.62,171.27,165.04,165.29],[1650240000000,163.92,166.598,163.57,165.07],[1650326400000,165.02,167.82,163.91,167.4],[1650412800000,168.76,168.88,166.1,167.23],[1650499200000,168.91,171.53,165.91,166.42],[1650585600000,166.46,167.87,161.5,161.79],[1650844800000,161.12,163.17,158.46,162.88],[1650931200000,162.25,162.34,156.72,156.8],[1651017600000,155.91,159.79,155.38,156.57],[1651104000000,159.25,164.515,158.93,163.64],[1651190400000,161.84,166.2,157.25,157.65],[1651449600000,156.71,158.23,153.27,157.96],[1651536000000,158.15,160.71,156.32,159.48],[1651622400000,159.67,166.48,159.26,166.02],[1651708800000,163.85,164.08,154.95,156.77],[1651795200000,156.01,159.44,154.18,157.28],[1652054400000,154.925,155.83,151.49,152.06],[1652140800000,155.52,156.74,152.93,154.51],[1652227200000,153.5,155.45,145.81,146.5],[1652313600000,142.77,146.2,138.8,142.56],[1652400000000,144.59,148.105,143.11,147.11],[1652659200000,145.55,147.52,144.18,145.54],[1652745600000,148.86,149.77,146.68,149.24],[1652832000000,146.85,147.36,139.9,140.82],[1652918400000,139.88,141.66,136.6,137.35],[1653004800000,139.09,140.7,132.61,137.59],[1653264000000,137.79,143.26,137.65,143.11],[1653350400000,140.805,141.97,137.33,140.36],[1653436800000,138.43,141.785,138.34,140.52],[1653523200000,137.39,144.34,137.14,143.78],[1653609600000,145.39,149.68,145.26,149.64],[1653955200000,149.07,150.66,146.84,148.84],[1654041600000,149.9,151.74,147.68,148.71],[1654128000000,147.83,151.27,146.86,151.21],[1654214400000,146.9,147.97,144.46,145.38],[1654473600000,147.03,148.569,144.9,146.14],[1654560000000,144.345,149,144.1,148.71],[1654646400000,148.58,149.87,147.46,147.96],[1654732800000,147.08,147.95,142.53,142.64],[1654819200000,140.28,140.76,137.06,137.13],[1655078400000,132.87,135.2,131.44,131.88],[1655164800000,133.13,133.89,131.48,132.76],[1655251200000,134.29,137.34,132.16,135.43],[1655337600000,132.08,132.39,129.04,130.06],[1655424000000,130.065,133.079,129.81,131.56],[1655769600000,133.42,137.06,133.32,135.87],[1655856000000,134.79,137.76,133.91,135.35],[1655942400000,136.82,138.59,135.63,138.27],[1656028800000,139.9,141.91,139.77,141.66],[1656288000000,142.695,143.49,140.965,141.66],[1656374400000,142.13,143.422,137.325,137.44],[1656460800000,137.46,140.67,136.67,139.23],[1656547200000,137.25,138.37,133.774,136.72],[1656633600000,136.04,139.04,135.66,138.93],[1656979200000,137.77,141.61,136.93,141.56],[1657065600000,141.355,144.12,141.08,142.92],[1657152000000,143.29,146.55,143.28,146.35],[1657238400000,145.265,147.55,145,147.04],[1657497600000,145.67,146.64,143.78,144.87],[1657584000000,145.76,148.45,145.05,145.86],[1657670400000,142.99,146.45,142.12,145.49],[1657756800000,144.08,148.95,143.25,148.47],[1657843200000,149.78,150.86,148.2,150.17],[1658102400000,150.74,151.57,146.7,147.07],[1658188800000,147.92,151.23,146.91,151],[1658275200000,151.12,153.72,150.37,153.04],[1658361600000,154.5,155.57,151.94,155.35],[1658448000000,155.39,156.28,153.41,154.09],[1658707200000,154.01,155.04,152.28,152.95],[1658793600000,152.265,153.085,150.8,151.6],[1658880000000,152.58,157.33,152.16,156.79],[1658966400000,156.98,157.64,154.41,157.35],[1659052800000,161.24,163.63,159.5,162.51],[1659312000000,161.01,163.59,160.89,161.51],[1659398400000,160.1,162.41,159.63,160.01],[1659484800000,160.84,166.59,160.75,166.13],[1659571200000,166.005,167.19,164.43,165.81],[1659657600000,163.21,165.85,163,165.35],[1659916800000,166.37,167.81,164.2,164.87],[1660003200000,164.02,165.82,163.25,164.92],[1660089600000,167.68,169.34,166.9,169.24],[1660176000000,170.06,170.99,168.19,168.49],[1660262400000,169.82,172.17,169.4,172.1],[1660521600000,171.52,173.39,171.345,173.19],[1660608000000,172.78,173.71,171.662,173.03],[1660694400000,172.77,176.15,172.57,174.55],[1660780800000,173.75,174.9,173.12,174.15],[1660867200000,173.03,173.74,171.31,171.52],[1661126400000,169.69,169.86,167.135,167.57],[1661212800000,167.08,168.71,166.65,167.23],[1661299200000,167.32,168.11,166.245,167.53],[1661385600000,168.78,170.14,168.35,170.03],[1661472000000,170.57,171.05,163.56,163.62],[1661731200000,161.145,162.9,159.82,161.38],[1661817600000,162.13,162.56,157.72,158.91],[1661904000000,160.305,160.58,157.14,157.22],[1661990400000,156.64,158.42,154.67,157.96],[1662076800000,159.75,160.362,154.965,155.81],[1662422400000,156.47,157.09,153.69,154.53],[1662508800000,154.825,156.67,153.61,155.96],[1662595200000,154.64,156.36,152.68,154.46],[1662681600000,155.47,157.82,154.75,157.37],[1662940800000,159.59,164.26,159.3,163.43],[1663027200000,159.9,160.54,153.37,153.84],[1663113600000,154.785,157.1,153.611,155.31],[1663200000000,154.65,155.24,151.38,152.37],[1663286400000,151.21,151.35,148.37,150.7],[1663545600000,149.31,154.56,149.1,154.48],[1663632000000,153.4,158.08,153.08,156.9],[1663718400000,157.34,158.74,153.6,153.72],[1663804800000,152.38,154.47,150.91,152.74],[1663891200000,151.19,151.47,148.56,150.43],[1664150400000,149.66,153.77,149.64,150.77],[1664236800000,152.74,154.72,149.945,151.76],[1664323200000,147.64,150.641,144.84,149.84],[1664409600000,146.1,146.72,140.68,142.48],[1664496000000,141.28,143.1,138,138.2],[1664755200000,138.21,143.07,137.685,142.45],[1664841600000,145.03,146.22,144.26,146.1],[1664928000000,144.075,147.38,143.01,146.4],[1665014400000,145.81,147.54,145.22,145.43],[1665100800000,142.54,143.1,139.445,140.09],[1665360000000,140.42,141.89,138.573,140.42],[1665446400000,139.9,141.35,138.22,138.98],[1665532800000,139.13,140.36,138.16,138.34],[1665619200000,134.99,143.59,134.37,142.99],[1665705600000,144.31,144.52,138.19,138.38],[1665964800000,141.065,142.9,140.27,142.41],[1666051200000,145.49,146.7,140.61,143.75],[1666137600000,141.69,144.949,141.5,143.86],[1666224000000,143.02,145.89,142.65,143.39],[1666310400000,142.87,147.848,142.649,147.27],[1666569600000,147.185,150.23,146,149.45],[1666656000000,150.09,152.49,149.36,152.34],[1666742400000,150.96,151.99,148.04,149.35],[1666828800000,148.07,149.046,144.13,144.8],[1666915200000,148.2,157.5,147.82,155.74],[1667174400000,153.155,154.24,151.92,153.34],[1667260800000,155.08,155.45,149.13,150.65],[1667347200000,148.945,152.17,145,145.03],[1667433600000,142.06,142.8,138.75,138.88],[1667520000000,142.09,142.67,134.38,138.38],[1667779200000,137.11,139.145,135.671,138.92],[1667865600000,140.41,141.43,137.49,139.5],[1667952000000,138.5,138.55,134.593,134.87],[1668038400000,141.24,146.87,139.5,146.87],[1668124800000,145.82,150.01,144.37,149.7],[1668384000000,148.97,150.28,147.43,148.28],[1668470400000,152.215,153.59,148.561,150.04],[1668556800000,149.13,149.87,147.29,148.79],[1668643200000,146.43,151.48,146.15,150.72],[1668729600000,152.305,152.7,149.97,151.29],[1668988800000,150.16,150.37,147.715,148.01],[1669075200000,148.13,150.42,146.925,150.18],[1669161600000,149.45,151.83,149.34,151.07],[1669334400000,148.305,148.88,147.12,148.11],[1669593600000,145.14,146.64,143.38,144.22],[1669680000000,144.29,144.81,140.355,141.17],[1669766400000,141.395,148.72,140.55,148.03],[1669852800000,148.21,149.13,146.61,148.31],[1669939200000,145.96,148,145.65,147.81],[1670198400000,147.77,150.92,145.77,146.63],[1670284800000,147.075,147.3,141.92,142.91],[1670371200000,142.19,143.37,140,140.94],[1670457600000,142.36,143.52,141.1,142.65],[1670544000000,142.34,145.57,140.9,142.16],[1670803200000,142.7,144.5,141.06,144.49],[1670889600000,149.5,149.969,144.24,145.47],[1670976000000,145.35,146.655,141.16,143.21],[1671062400000,141.11,141.8,136.025,136.5],[1671148800000,136.685,137.65,133.73,134.51],[1671408000000,135.11,135.2,131.32,132.37],[1671494400000,131.39,133.25,129.89,132.3],[1671580800000,132.98,136.81,132.75,135.45],[1671667200000,134.352,134.56,130.3,132.23],[1671753600000,130.92,132.415,129.64,131.86],[1672099200000,131.38,131.41,128.72,130.03],[1672185600000,129.67,131.028,125.87,126.04],[1672272000000,127.99,130.481,127.73,129.61],[1672358400000,128.41,129.95,127.43,129.93],[1672704000000,130.28,130.9,124.17,125.07],[1672790400000,126.89,128.656,125.08,126.36],[1672876800000,127.13,127.77,124.76,125.02],[1672963200000,126.01,130.29,124.89,129.62],[1673222400000,130.465,133.41,129.89,130.15],[1673308800000,130.26,131.264,128.12,130.73],[1673395200000,131.25,133.51,130.46,133.49],[1673481600000,133.88,134.26,131.44,133.41],[1673568000000,132.03,134.92,131.66,134.76],[1673913600000,134.83,137.29,134.13,135.94],[1674000000000,136.815,138.61,135.03,135.21],[1674086400000,134.08,136.25,133.77,135.27],[1674172800000,135.28,138.02,134.22,137.87],[1674432000000,138.12,143.315,137.9,141.11],[1674518400000,140.305,143.16,140.3,142.53],[1674604800000,140.89,142.43,138.81,141.86],[1674691200000,143.17,144.25,141.9,143.96],[1674777600000,143.155,147.23,143.08,145.93],[1675036800000,144.955,145.55,142.85,143],[1675123200000,142.7,144.34,142.28,144.29],[1675209600000,143.97,146.61,141.32,145.43],[1675296000000,148.9,151.18,148.17,150.82],[1675382400000,148.03,157.38,147.83,154.5],[1675641600000,152.575,153.1,150.78,151.73],[1675728000000,150.64,155.23,150.64,154.65],[1675814400000,153.88,154.58,151.168,151.92],[1675900800000,153.775,154.33,150.42,150.87],[1675987200000,149.46,151.34,149.22,151.01]];
        var value5 = [[1883200000,876994170.97,876994170.95,876994170.25,876994170.79],[1644969600000,171.85,173.34,170.05,172.55],[1645056000000,171.03,171.91,168.47,168.88],[1645142400000,169.82,170.541,166.19,167.3],[1645488000000,164.98,166.69,162.15,164.32],[1645574400000,165.54,166.15,159.75,160.07],[1645660800000,152.58,162.85,152,162.74],[1645747200000,163.84,165.12,160.874,164.85],[1646006400000,163.06,165.42,162.43,165.12],[1646092800000,164.695,166.6,161.97,163.2],[1646179200000,164.39,167.36,162.95,166.56],[1646265600000,168.47,168.91,165.55,166.23],[1646352000000,164.49,165.55,162.1,163.17],[1646611200000,163.36,165.02,159.04,159.3],[1646697600000,158.82,162.88,155.8,157.44],[1646784000000,161.475,163.41,159.41,162.95],[1646870400000,160.2,160.39,155.98,158.52],[1646956800000,158.93,159.28,154.5,154.73],[1647216000000,151.45,154.12,150.1,150.62],[1647302400000,150.9,155.57,150.38,155.09],[1647388800000,157.05,160,154.46,159.59],[1647475200000,158.61,161,157.63,160.62],[1647561600000,160.51,164.48,159.76,163.98],[1647820800000,163.51,166.35,163.015,165.38],[1647907200000,165.51,169.42,164.91,168.82],[1647993600000,167.99,172.64,167.65,170.21],[1648080000000,171.06,174.14,170.21,174.07],[1648166400000,173.88,175.28,172.75,174.72],[1648425600000,172.17,175.73,172,175.6],[1648512000000,176.69,179.01,176.34,178.96],[1648598400000,178.55,179.61,176.7,177.77],[1648684800000,177.84,178.03,174.4,174.61],[1648771200000,174.03,174.88,171.94,174.31],[1649030400000,174.57,178.49,174.44,178.44],[1649116800000,177.5,178.3,174.415,175.06],[1649203200000,172.36,173.63,170.13,171.83],[1649289600000,171.16,173.36,169.85,172.14],[1649376000000,171.78,171.78,169.2,170.09],[1649635200000,168.71,169.03,165.5,165.75],[1649721600000,168.02,169.87,166.64,167.66],[1649808000000,167.39,171.04,166.77,170.4],[1649894400000,170.62,171.27,165.04,165.29],[1650240000000,163.92,166.598,163.57,165.07],[1650326400000,165.02,167.82,163.91,167.4],[1650412800000,168.76,168.88,166.1,167.23],[1650499200000,168.91,171.53,165.91,166.42],[1650585600000,166.46,167.87,161.5,161.79],[1650844800000,161.12,163.17,158.46,162.88],[1650931200000,162.25,162.34,156.72,156.8],[1651017600000,155.91,159.79,155.38,156.57],[1651104000000,159.25,164.515,158.93,163.64],[1651190400000,161.84,166.2,157.25,157.65],[1651449600000,156.71,158.23,153.27,157.96],[1651536000000,158.15,160.71,156.32,159.48],[1651622400000,159.67,166.48,159.26,166.02],[1651708800000,163.85,164.08,154.95,156.77],[1651795200000,156.01,159.44,154.18,157.28],[1652054400000,154.925,155.83,151.49,152.06],[1652140800000,155.52,156.74,152.93,154.51],[1652227200000,153.5,155.45,145.81,146.5],[1652313600000,142.77,146.2,138.8,142.56],[1652400000000,144.59,148.105,143.11,147.11],[1652659200000,145.55,147.52,144.18,145.54],[1652745600000,148.86,149.77,146.68,149.24],[1652832000000,146.85,147.36,139.9,140.82],[1652918400000,139.88,141.66,136.6,137.35],[1653004800000,139.09,140.7,132.61,137.59],[1653264000000,137.79,143.26,137.65,143.11],[1653350400000,140.805,141.97,137.33,140.36],[1653436800000,138.43,141.785,138.34,140.52],[1653523200000,137.39,144.34,137.14,143.78],[1653609600000,145.39,149.68,145.26,149.64],[1653955200000,149.07,150.66,146.84,148.84],[1654041600000,149.9,151.74,147.68,148.71],[1654128000000,147.83,151.27,146.86,151.21],[1654214400000,146.9,147.97,144.46,145.38],[1654473600000,147.03,148.569,144.9,146.14],[1654560000000,144.345,149,144.1,148.71],[1654646400000,148.58,149.87,147.46,147.96],[1654732800000,147.08,147.95,142.53,142.64],[1654819200000,140.28,140.76,137.06,137.13],[1655078400000,132.87,135.2,131.44,131.88],[1655164800000,133.13,133.89,131.48,132.76],[1655251200000,134.29,137.34,132.16,135.43],[1655337600000,132.08,132.39,129.04,130.06],[1655424000000,130.065,133.079,129.81,131.56],[1655769600000,133.42,137.06,133.32,135.87],[1655856000000,134.79,137.76,133.91,135.35],[1655942400000,136.82,138.59,135.63,138.27],[1656028800000,139.9,141.91,139.77,141.66],[1656288000000,142.695,143.49,140.965,141.66],[1656374400000,142.13,143.422,137.325,137.44],[1656460800000,137.46,140.67,136.67,139.23],[1656547200000,137.25,138.37,133.774,136.72],[1656633600000,136.04,139.04,135.66,138.93],[1656979200000,137.77,141.61,136.93,141.56],[1657065600000,141.355,144.12,141.08,142.92],[1657152000000,143.29,146.55,143.28,146.35],[1657238400000,145.265,147.55,145,147.04],[1657497600000,145.67,146.64,143.78,144.87],[1657584000000,145.76,148.45,145.05,145.86],[1657670400000,142.99,146.45,142.12,145.49],[1657756800000,144.08,148.95,143.25,148.47],[1657843200000,149.78,150.86,148.2,150.17],[1658102400000,150.74,151.57,146.7,147.07],[1658188800000,147.92,151.23,146.91,151],[1658275200000,151.12,153.72,150.37,153.04],[1658361600000,154.5,155.57,151.94,155.35],[1658448000000,155.39,156.28,153.41,154.09],[1658707200000,154.01,155.04,152.28,152.95],[1658793600000,152.265,153.085,150.8,151.6],[1658880000000,152.58,157.33,152.16,156.79],[1658966400000,156.98,157.64,154.41,157.35],[1659052800000,161.24,163.63,159.5,162.51],[1659312000000,161.01,163.59,160.89,161.51],[1659398400000,160.1,162.41,159.63,160.01],[1659484800000,160.84,166.59,160.75,166.13],[1659571200000,166.005,167.19,164.43,165.81],[1659657600000,163.21,165.85,163,165.35],[1659916800000,166.37,167.81,164.2,164.87],[1660003200000,164.02,165.82,163.25,164.92],[1660089600000,167.68,169.34,166.9,169.24],[1660176000000,170.06,170.99,168.19,168.49],[1660262400000,169.82,172.17,169.4,172.1],[1660521600000,171.52,173.39,171.345,173.19],[1660608000000,172.78,173.71,171.662,173.03],[1660694400000,172.77,176.15,172.57,174.55],[1660780800000,173.75,174.9,173.12,174.15],[1660867200000,173.03,173.74,171.31,171.52],[1661126400000,169.69,169.86,167.135,167.57],[1661212800000,167.08,168.71,166.65,167.23],[1661299200000,167.32,168.11,166.245,167.53],[1661385600000,168.78,170.14,168.35,170.03],[1661472000000,170.57,171.05,163.56,163.62],[1661731200000,161.145,162.9,159.82,161.38],[1661817600000,162.13,162.56,157.72,158.91],[1661904000000,160.305,160.58,157.14,157.22],[1661990400000,156.64,158.42,154.67,157.96],[1662076800000,159.75,160.362,154.965,155.81],[1662422400000,156.47,157.09,153.69,154.53],[1662508800000,154.825,156.67,153.61,155.96],[1662595200000,154.64,156.36,152.68,154.46],[1662681600000,155.47,157.82,154.75,157.37],[1662940800000,159.59,164.26,159.3,163.43],[1663027200000,159.9,160.54,153.37,153.84],[1663113600000,154.785,157.1,153.611,155.31],[1663200000000,154.65,155.24,151.38,152.37],[1663286400000,151.21,151.35,148.37,150.7],[1663545600000,149.31,154.56,149.1,154.48],[1663632000000,153.4,158.08,153.08,156.9],[1663718400000,157.34,158.74,153.6,153.72],[1663804800000,152.38,154.47,150.91,152.74],[1663891200000,151.19,151.47,148.56,150.43],[1664150400000,149.66,153.77,149.64,150.77],[1664236800000,152.74,154.72,149.945,151.76],[1664323200000,147.64,150.641,144.84,149.84],[1664409600000,146.1,146.72,140.68,142.48],[1664496000000,141.28,143.1,138,138.2],[1664755200000,138.21,143.07,137.685,142.45],[1664841600000,145.03,146.22,144.26,146.1],[1664928000000,144.075,147.38,143.01,146.4],[1665014400000,145.81,147.54,145.22,145.43],[1665100800000,142.54,143.1,139.445,140.09],[1665360000000,140.42,141.89,138.573,140.42],[1665446400000,139.9,141.35,138.22,138.98],[1665532800000,139.13,140.36,138.16,138.34],[1665619200000,134.99,143.59,134.37,142.99],[1665705600000,144.31,144.52,138.19,138.38],[1665964800000,141.065,142.9,140.27,142.41],[1666051200000,145.49,146.7,140.61,143.75],[1666137600000,141.69,144.949,141.5,143.86],[1666224000000,143.02,145.89,142.65,143.39],[1666310400000,142.87,147.848,142.649,147.27],[1666569600000,147.185,150.23,146,149.45],[1666656000000,150.09,152.49,149.36,152.34],[1666742400000,150.96,151.99,148.04,149.35],[1666828800000,148.07,149.046,144.13,144.8],[1666915200000,148.2,157.5,147.82,155.74],[1667174400000,153.155,154.24,151.92,153.34],[1667260800000,155.08,155.45,149.13,150.65],[1667347200000,148.945,152.17,145,145.03],[1667433600000,142.06,142.8,138.75,138.88],[1667520000000,142.09,142.67,134.38,138.38],[1667779200000,137.11,139.145,135.671,138.92],[1667865600000,140.41,141.43,137.49,139.5],[1667952000000,138.5,138.55,134.593,134.87],[1668038400000,141.24,146.87,139.5,146.87],[1668124800000,145.82,150.01,144.37,149.7],[1668384000000,148.97,150.28,147.43,148.28],[1668470400000,152.215,153.59,148.561,150.04],[1668556800000,149.13,149.87,147.29,148.79],[1668643200000,146.43,151.48,146.15,150.72],[1668729600000,152.305,152.7,149.97,151.29],[1668988800000,150.16,150.37,147.715,148.01],[1669075200000,148.13,150.42,146.925,150.18],[1669161600000,149.45,151.83,149.34,151.07],[1669334400000,148.305,148.88,147.12,148.11],[1669593600000,145.14,146.64,143.38,144.22],[1669680000000,144.29,144.81,140.355,141.17],[1669766400000,141.395,148.72,140.55,148.03],[1669852800000,148.21,149.13,146.61,148.31],[1669939200000,145.96,148,145.65,147.81],[1670198400000,147.77,150.92,145.77,146.63],[1670284800000,147.075,147.3,141.92,142.91],[1670371200000,142.19,143.37,140,140.94],[1670457600000,142.36,143.52,141.1,142.65],[1670544000000,142.34,145.57,140.9,142.16],[1670803200000,142.7,144.5,141.06,144.49],[1670889600000,149.5,149.969,144.24,145.47],[1670976000000,145.35,146.655,141.16,143.21],[1671062400000,141.11,141.8,136.025,136.5],[1671148800000,136.685,137.65,133.73,134.51],[1671408000000,135.11,135.2,131.32,132.37],[1671494400000,131.39,133.25,129.89,132.3],[1671580800000,132.98,136.81,132.75,135.45],[1671667200000,134.352,134.56,130.3,132.23],[1671753600000,130.92,132.415,129.64,131.86],[1672099200000,131.38,131.41,128.72,130.03],[1672185600000,129.67,131.028,125.87,126.04],[1672272000000,127.99,130.481,127.73,129.61],[1672358400000,128.41,129.95,127.43,129.93],[1672704000000,130.28,130.9,124.17,125.07],[1672790400000,126.89,128.656,125.08,126.36],[1672876800000,127.13,127.77,124.76,125.02],[1672963200000,126.01,130.29,124.89,129.62],[1673222400000,130.465,133.41,129.89,130.15],[1673308800000,130.26,131.264,128.12,130.73],[1673395200000,131.25,133.51,130.46,133.49],[1673481600000,133.88,134.26,131.44,133.41],[1673568000000,132.03,134.92,131.66,134.76],[1673913600000,134.83,137.29,134.13,135.94],[1674000000000,136.815,138.61,135.03,135.21],[1674086400000,134.08,136.25,133.77,135.27],[1674172800000,135.28,138.02,134.22,137.87],[1674432000000,138.12,143.315,137.9,141.11],[1674518400000,140.305,143.16,140.3,142.53],[1674604800000,140.89,142.43,138.81,141.86],[1674691200000,143.17,144.25,141.9,143.96],[1674777600000,143.155,147.23,143.08,145.93],[1675036800000,144.955,145.55,142.85,143],[1675123200000,142.7,144.34,142.28,144.29],[1675209600000,143.97,146.61,141.32,145.43],[1675296000000,148.9,151.18,148.17,150.82],[1675382400000,148.03,157.38,147.83,154.5],[1675641600000,152.575,153.1,150.78,151.73],[1675728000000,150.64,155.23,150.64,154.65],[1675814400000,153.88,154.58,151.168,151.92],[1675900800000,153.775,154.33,150.42,150.87],[1675987200000,149.46,151.34,149.22,151.01]];

        Highcharts.setOptions({
            lang: {
                thousandsSep: ','
            }
        });
        $(function() {
            var sumchart = new Highcharts.stockChart('containeroutline1_2', {
                chart: {
                    // borderColor: '#333',                
                },
    
                // 하단 네비게이션 제거
                navigator: {
                    enabled: true,
                    height: 0,                
                },                
    
                // 스크롤바 제거
                scrollbar: {
                    enabled: false,
                    // enabled: true,
                    // height: 12,
                    // // 스크롤바 
                    // barBackgroundColor: '#BDC8D8',
                    // barBorderRadius: 5,
                    // barBorderWidth: 0,
                    // // 스크롤바 백그래운드
                    // trackBackgroundColor: '#E7EAF2',
                    // trackBorderWidth: 0,                
                    // // 좌우 버튼
                    // buttonBackgroundColor: '#E7EAF2',
                    // buttonBorderWidth: 0,
                    // buttonArrowColor: '#fff',
                    // buttonBorderRadius: 5,                                
                    // rifleColor: '#fff',                                
                },
    
                legend: {
                    enabled: true                
                },
    
                // 기간범위선택 
                rangeSelector: {
                    allButtonsEnabled: true,
                    buttons: [{
                        type: 'month',
                        count: 3,
                        text: '3개월',
                        events: {
                            click: function () {
                                console.log(this);        
                                sumchart.series[0].update({
                                    visible: true
                                });                                                 
                                sumchart.redraw();
                            }
                        }
                    }, {
                        type: 'month',
                        count: 6,
                        text: '6개월',
                        events: {
                            click: function () {
                                console.log(this);        
                                sumchart.series[0].update({
                                    visible: true
                                });                                                 
                                sumchart.redraw();
                            }
                        }
                    }, {
                        type: 'year',
                        count: 1,
                        text: '1년',
                        events: {
                            click: function () {
                                console.log(this);        
                                sumchart.series[0].update({
                                    visible: false
                                });                                                 
                                sumchart.redraw();
                            }
                        }
                    }, {
                        type: 'year',
                        count: 3,
                        text: '3년',
                        events: {
                            click: function () {
                                console.log(this);        
                                sumchart.series[0].update({
                                    visible: false
                                });                                                 
                                sumchart.redraw();
                            }
                        }
                    }, {
                        type: 'year',
                        count: 5,
                        text: '10년',
                        events: {
                            click: function () {
                                console.log(this);        
                                sumchart.series[0].update({
                                    visible: false
                                });                                                 
                                sumchart.redraw();
                            }
                        }
                    }],
                    
                    buttonTheme: {
                        width: 90,
                        style: {
                            fontSize: 12,
                            color: '#222',       
                            'border-bottom': '1px solid #000'          
                        },
                        states: {                
                            hover: {
                                fill: '#374b9d',                         
                                style: {
                                    color: '#fff',  
                                    fontWeight: 'bold'
                                }                            
                            },        
                            select: {   
                                fill: '#374b9d',                         
                                style: {
                                    color: '#fff',  
                                    fontWeight: 'bold'
                                }
                            }
                            // disabled: { ... }
                        }
                    },                   
                    selected: 0
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
                    title: {
                        text: null
                    },
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
                    },
                }],
    
                yAxis: {
                    title: null,
                    lineColor: '#98ACD0',
                    lineWidth: 1,
                    labels: {                    
                        style: {
                            fontSize: 10,
                        },
                        align: "left",                    
                        format: '{value:,.0f}'
                    },
                    showFirstLabel: false,
                    showLastLabel: true,                    
                },            
    
                series: [
                    {
                        type: 'candlestick',
                        name: '일봉',
                        data: value,
                        showInLegend: false,                    
                        // visible: false,
                        tooltip: {
                            useHTML: true,                        
                            headerFormat: '<span style="display: block; border-bottom: 1px solid #c8c8c8; padding-bottom: 3px; margin-bottom: 5px;"><b>{point.x:%Y,%m/%d}</b></span> </br>',
                            pointFormat: '<b>시가: {point.open}<br/>고가: {point.high}<br/>저가: {point.low}<br/>종가: {point.close}<br/></b>',
                        },
                        zIndex: 1
                    },
                    {
                        type: 'line',
                        name: '주가', 
                        data: value5,
                        showInLegend: false,                    
                        tooltip: {
                            useHTML: true,
                            headerFormat: '<span style="display: block; border-bottom: 1px solid #c8c8c8; padding-bottom: 3px; margin-bottom: 5px;"><b>{point.x:%Y,%m/%d}</b></span>',
                            pointFormat: '</br><b>{series.name} : {point.y} </b></span>',
                            valueSuffix: ' 달러',
                        },
                        lineWidth : 2,
                    }
                ],
    
                plotOptions: {
                    series: {
                        marker: {
                            enabled: false,           
                            symbol: "circle",              
                        },
                    },
                },
            });
            
        })        
    }

    //재무분석 개요 탭 막대차트
    if ($('#containerSumfinancials1_1').length) {
        Highcharts.chart('containerSumfinancials1_1', {

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
    if ($('#containerSumfinancials1_2').length) {
        Highcharts.chart('containerSumfinancials1_2', {

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
                enabled: false
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