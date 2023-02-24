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
    if ($('#containeroutline1_2_M3').length) {
        Highcharts.setOptions({
            lang: {
                thousandsSep: ','
            }
        });
        // 공통으로 사용할 차트 옵션 설정
        var chartOptions = {
            chart: {
                margin:[20, 60, 50, 0,],                                
                panning: {
                    enabled: true,
                    type: 'x'
                },                
                followTouchMove: true,                
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
                lineWidth: 1,
                opposite: true, // yAxis를 차트 오른쪽에 위치시킴
                labels: {                                    
                    formatter: function () {
                        return this.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                    },                            
                    style: {
                        fontSize: 10,
                    },
                    inside: false,
                    align: 'right',                        
                    x: 40,                                            
                    padding: [0, 0, 0, 30],
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
                    dataGrouping: {
                        enabled: false
                    },      
                    tooltip: {
                        useHTML: true,                        
                        headerFormat: '<span style="display: block; border-bottom: 1px solid #c8c8c8; padding-bottom: 3px; margin-bottom: 5px;"><b>{point.x:%Y, %m/%d}</b></span> </br>',
                        pointFormat: '<b>시가 : {point.open}<br/>고가 : {point.high}<br/>저가 : {point.low}',
                    },
                    zIndex: 1
                },
                {
                    type: 'line',
                    name: '주가', 
                    data: value5,
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
        
        var value = [[1361491200000, 6020, 6150, 6020, 6120],[1361750400000, 6050, 6050, 5780, 5900],[1361836800000, 5820, 5970, 5820, 5950],[1361923200000, 5950, 6080, 5910, 6040],[1362009600000, 6120, 6120, 5970, 6030],[1362355200000, 6030, 6100, 5990, 6040],[1362441600000, 6030, 6050, 5980, 6040],[1362528000000, 6040, 6090, 5990, 6050],[1362614400000, 6060, 6090, 5950, 6000],[1362700800000, 6010, 6080, 5950, 6050],[1362960000000, 6030, 6080, 5970, 6080],[1363046400000, 6080, 6340, 6060, 6300],[1363132800000, 6300, 6490, 6250, 6450],[1363219200000, 6450, 6510, 6380, 6420],[1363305600000, 6420, 6500, 6380, 6450],[1363564800000, 6450, 6550, 6320, 6320],[1363651200000, 6320, 6400, 6250, 6360],[1363737600000, 6330, 6470, 6330, 6440],[1363824000000, 6450, 6530, 6310, 6370],[1363910400000, 6400, 6420, 6040, 6080],[1364169600000, 6100, 6140, 5970, 6130],[1364256000000, 6130, 6170, 5880, 5940],[1364342400000, 5910, 6030, 5910, 6020],[1364428800000, 6020, 6100, 5940, 6050],[1364515200000, 6100, 6130, 6050, 6110],[1364774400000, 6150, 6150, 5960, 6060],[1364860800000, 6080, 6130, 6030, 6110],[1364947200000, 6120, 6210, 6090, 6180],[1365033600000, 6080, 6170, 5980, 6140],[1365120000000, 6140, 6170, 6000, 6040],[1365379200000, 6040, 6100, 5990, 6010],[1365465600000, 6010, 6030, 5770, 6010],[1365552000000, 6020, 6040, 5950, 6030],[1365638400000, 6060, 6140, 5990, 6110],[1365724800000, 6140, 6380, 6060, 6140],[1365984000000, 6160, 6390, 6150, 6280],[1366070400000, 6200, 6530, 6200, 6370],[1366156800000, 6370, 6480, 6240, 6350],[1366243200000, 6340, 6400, 6280, 6340],[1366329600000, 6300, 6340, 6150, 6170],[1366588800000, 6170, 6250, 6000, 6220],[1366675200000, 6190, 6330, 6150, 6310],[1366761600000, 6320, 6430, 6280, 6330],[1366848000000, 6290, 6560, 6270, 6550],[1366934400000, 6540, 6780, 6500, 6700],[1367193600000, 6700, 6750, 6580, 6680],[1367280000000, 6650, 6870, 6650, 6750],[1367452800000, 6800, 6820, 6570, 6700],[1367539200000, 6700, 7180, 6630, 7170],[1367798400000, 7160, 7230, 7050, 7120],[1367884800000, 7150, 7210, 7050, 7200],[1367971200000, 7230, 7420, 7220, 7300],[1368057600000, 7360, 7360, 7080, 7170],[1368144000000, 7120, 7180, 6990, 7090],[1368403200000, 7100, 7170, 6850, 6920],[1368489600000, 6910, 7020, 6610, 6760],[1368576000000, 6800, 7110, 6790, 7030],[1368662400000, 7160, 7380, 7130, 7250],[1369008000000, 7220, 7250, 7030, 7100],[1369094400000, 7110, 7410, 7060, 7190],[1369180800000, 7210, 7210, 7050, 7100],[1369267200000, 7110, 7140, 6830, 6850],[1369353600000, 6880, 7050, 6720, 7040],[1369612800000, 7030, 7060, 6940, 7020],[1369699200000, 7010, 7130, 6990, 7060],[1369785600000, 7070, 7150, 6900, 7060],[1369872000000, 6990, 7060, 6980, 7050],[1369958400000, 7050, 7080, 6900, 6930],[1370217600000, 6880, 7060, 6830, 6910],[1370304000000, 6910, 6970, 6650, 6780],[1370390400000, 6750, 6830, 6620, 6670],[1370563200000, 6670, 6750, 6470, 6650],[1370822400000, 6680, 6820, 6630, 6810],[1370908800000, 6820, 6940, 6700, 6910],[1370995200000, 6910, 7050, 6830, 7040],[1371081600000, 7010, 7050, 6850, 6990],[1371168000000, 6990, 7100, 6900, 7000],[1371427200000, 7000, 7100, 6810, 6970],[1371513600000, 6930, 6990, 6800, 6970],[1371600000000, 6940, 7040, 6760, 6950],[1371686400000, 6900, 6930, 6620, 6620],[1371772800000, 6400, 6620, 6350, 6510],[1372032000000, 6620, 6620, 6500, 6530],[1372118400000, 6430, 6610, 6150, 6230],[1372204800000, 6260, 6450, 6260, 6380],[1372291200000, 6510, 6560, 6420, 6550],[1372377600000, 6620, 6660, 6550, 6640],[1372636800000, 6620, 6900, 6610, 6860],[1372723200000, 6780, 6890, 6760, 6820],[1372809600000, 6870, 6950, 6660, 6720],[1372896000000, 6800, 6890, 6700, 6810],[1372982400000, 6870, 6930, 6780, 6890],[1373241600000, 6900, 6910, 6740, 6850],[1373328000000, 6860, 6890, 6700, 6770],[1373414400000, 6810, 6810, 6720, 6760],[1373500800000, 6760, 6850, 6720, 6830],[1373587200000, 6830, 6870, 6770, 6820],[1373846400000, 6850, 6900, 6800, 6820],[1373932800000, 6850, 6850, 6760, 6800],[1374019200000, 6820, 6880, 6770, 6880],[1374105600000, 6880, 6900, 6810, 6900],[1374192000000, 6930, 7190, 6930, 7090],[1374451200000, 7140, 7230, 7090, 7180],[1374537600000, 7180, 7180, 7040, 7100],[1374624000000, 7100, 7120, 7050, 7090],[1374710400000, 7110, 7150, 6970, 7140],[1374796800000, 7150, 7160, 7020, 7040],[1375056000000, 7000, 7120, 6940, 7030],[1375142400000, 7050, 7050, 6910, 6940],[1375228800000, 6940, 7080, 6830, 7000],[1375315200000, 7080, 7080, 6880, 6880],[1375401600000, 6900, 6950, 6760, 6870],[1375660800000, 6850, 7080, 6770, 7030],[1375747200000, 7050, 7070, 6910, 6970],[1375833600000, 6950, 6970, 6800, 6870],[1375920000000, 6870, 6940, 6590, 6700],[1376006400000, 6700, 6730, 6570, 6700],[1376265600000, 6710, 6750, 6540, 6600],[1376352000000, 6570, 6640, 6490, 6530],[1376438400000, 6510, 6720, 6500, 6710],[1376611200000, 6620, 6720, 6570, 6720],[1376870400000, 6730, 6730, 6550, 6580],[1376956800000, 6570, 6590, 6360, 6410],[1377043200000, 6410, 6590, 6230, 6380],[1377129600000, 6300, 6300, 6110, 6120],[1377216000000, 6140, 6220, 6020, 6120],[1377475200000, 6140, 6180, 6070, 6100],[1377561600000, 6100, 6160, 5980, 6100],[1377648000000, 6090, 6130, 5980, 6100],[1377734400000, 6120, 6200, 6060, 6170],[1377820800000, 6170, 6240, 6120, 6210],[1378080000000, 6140, 6200, 6060, 6130],[1378166400000, 6130, 6150, 6020, 6080],[1378252800000, 6060, 6110, 5950, 6010],[1378339200000, 6010, 6050, 5600, 5650],[1378425600000, 5650, 5820, 5650, 5750],[1378684800000, 5810, 5840, 5730, 5800],[1378771200000, 5780, 5810, 5670, 5800],[1378857600000, 5800, 5840, 5730, 5830],[1378944000000, 5810, 5920, 5790, 5810],[1379030400000, 5820, 5850, 5740, 5800],[1379289600000, 5800, 5820, 5710, 5780],[1379376000000, 5750, 5820, 5720, 5800],[1379894400000, 5770, 5830, 5770, 5790],[1379980800000, 5760, 5820, 5730, 5790],[1380067200000, 5760, 5840, 5700, 5790],[1380153600000, 5820, 5820, 5720, 5790],[1380240000000, 5770, 6050, 5770, 6020],[1380499200000, 6020, 6060, 5930, 6010],[1380585600000, 6000, 6030, 5910, 5960],[1380672000000, 5980, 6040, 5920, 5920],[1380844800000, 5890, 5980, 5850, 5950],[1381104000000, 5860, 5960, 5830, 5830],[1381190400000, 5870, 5870, 5730, 5800],[1381363200000, 5770, 5850, 5730, 5730],[1381449600000, 5780, 5890, 5730, 5840],[1381708800000, 5840, 5970, 5800, 5860],[1381795200000, 5940, 5940, 5800, 5840],[1381881600000, 5840, 5870, 5750, 5780],[1381968000000, 5800, 5840, 5600, 5630],[1382054400000, 5590, 5680, 5490, 5530],[1382313600000, 5530, 5610, 5530, 5550],[1382400000000, 5550, 5610, 5530, 5530],[1382486400000, 5540, 5690, 5540, 5590],[1382572800000, 5570, 5650, 5570, 5630],[1382659200000, 5630, 5670, 5580, 5640],[1382918400000, 5650, 5690, 5610, 5660],[1383004800000, 5660, 5670, 5600, 5670],[1383091200000, 5670, 5680, 5580, 5660],[1383177600000, 5670, 5670, 5570, 5570],[1383264000000, 5590, 5660, 5550, 5590],[1383523200000, 5580, 5610, 5460, 5530],[1383609600000, 5560, 5560, 5380, 5440],[1383696000000, 5390, 5460, 5370, 5410],[1383782400000, 5430, 5440, 5270, 5340],[1383868800000, 5330, 5330, 5180, 5250],[1384128000000, 5250, 5300, 5070, 5140],[1384214400000, 5140, 5230, 5130, 5230],[1384300800000, 5250, 5250, 5130, 5150],[1384387200000, 5130, 5240, 5080, 5190],[1384473600000, 5200, 5200, 5100, 5170],[1384732800000, 5140, 5140, 4965, 5120],[1384819200000, 5050, 5120, 4980, 5040],[1384905600000, 5000, 5120, 5000, 5070],[1384992000000, 5010, 5090, 4985, 5080],[1385078400000, 5100, 5110, 4985, 5000],[1385337600000, 5000, 5050, 4965, 5000],[1385424000000, 5030, 5070, 4970, 5070],[1385510400000, 5070, 5070, 4980, 5040],[1385596800000, 5040, 5040, 4985, 4985],[1385683200000, 5050, 5050, 4975, 5000],[1385942400000, 5000, 5030, 4900, 4970],[1386028800000, 4960, 4980, 4850, 4850],[1386115200000, 4850, 4900, 4780, 4845],[1386201600000, 4810, 4865, 4720, 4740],[1386288000000, 4760, 4895, 4760, 4860],[1386547200000, 4900, 4900, 4820, 4895],[1386633600000, 4910, 4910, 4790, 4865],[1386720000000, 4800, 4865, 4790, 4865],[1386806400000, 4805, 4980, 4800, 4890],[1386892800000, 4890, 4900, 4800, 4855],[1387152000000, 4850, 4850, 4780, 4800],[1387324800000, 4685, 4700, 4590, 4645],[1387497600000, 4490, 4605, 4430, 4545],[1387756800000, 4515, 4650, 4515, 4650],[1387843200000, 4680, 4705, 4600, 4660],[1388016000000, 4680, 4735, 4555, 4580],[1388102400000, 4500, 4550, 4395, 4430],[1388361600000, 4315, 4455, 4315, 4390],[1388620800000, 4440, 4510, 4410, 4440],[1388707200000, 4420, 4575, 4420, 4540],[1388966400000, 4575, 4580, 4500, 4555],[1389052800000, 4555, 4625, 4545, 4580],[1389139200000, 4630, 4730, 4580, 4730],[1389225600000, 4785, 4785, 4685, 4735],[1389312000000, 4760, 4770, 4680, 4700],[1389571200000, 4740, 4740, 4685, 4700],[1389657600000, 4725, 4725, 4685, 4690],[1389744000000, 4700, 4845, 4700, 4750],[1389830400000, 4780, 4875, 4775, 4860],[1389916800000, 4910, 4920, 4855, 4910],[1390176000000, 4930, 4995, 4850, 4995],[1390262400000, 4950, 4995, 4900, 4960],[1390348800000, 4935, 4990, 4920, 4970],[1390435200000, 4945, 4970, 4835, 4855],[1390521600000, 4855, 4895, 4745, 4865],[1390780800000, 4755, 4805, 4745, 4800],[1390867200000, 4800, 4875, 4745, 4830],[1390953600000, 4790, 4935, 4790, 4925],[1391385600000, 4925, 5100, 4880, 4970],[1391472000000, 4915, 4960, 4860, 4900],[1391558400000, 4890, 4945, 4875, 4880],[1391644800000, 4860, 4900, 4825, 4855],[1391731200000, 4865, 4910, 4840, 4890],[1391990400000, 4920, 4930, 4830, 4850],[1392076800000, 4820, 4890, 4820, 4865],[1392163200000, 4865, 4910, 4830, 4830],[1392249600000, 4810, 4850, 4785, 4790],[1392336000000, 4790, 4820, 4670, 4690],[1392595200000, 4730, 4735, 4680, 4710],[1392681600000, 4710, 4735, 4675, 4715],[1392768000000, 4715, 4715, 4625, 4640],[1392854400000, 4655, 4685, 4585, 4675],[1392940800000, 4675, 4715, 4660, 4695],[1393200000000, 4715, 4870, 4690, 4840],[1393286400000, 4855, 4865, 4780, 4780],[1393372800000, 4830, 4920, 4800, 4920],[1393459200000, 4990, 5160, 4960, 5090],[1393545600000, 5100, 5250, 5070, 5190],[1393804800000, 5290, 5530, 5130, 5390],[1393891200000, 5380, 5450, 5310, 5390],[1393977600000, 5410, 5610, 5330, 5500],[1394064000000, 5500, 5550, 5400, 5450],[1394150400000, 5460, 5640, 5450, 5490],[1394409600000, 5490, 5550, 5330, 5460],[1394496000000, 5490, 5720, 5460, 5690],[1394582400000, 5690, 5710, 5530, 5650],[1394668800000, 5650, 5890, 5580, 5860],[1394755200000, 5770, 5870, 5700, 5780],[1395014400000, 5750, 5750, 5510, 5600],[1395100800000, 5640, 5740, 5590, 5740],[1395187200000, 5740, 5780, 5600, 5720],[1395273600000, 5710, 5770, 5630, 5700],[1395360000000, 5790, 5790, 5660, 5740],[1395619200000, 5780, 5780, 5680, 5740],[1395705600000, 5750, 5750, 5600, 5730],[1395792000000, 5710, 5730, 5650, 5720],[1395878400000, 5690, 5710, 5470, 5590],[1395964800000, 5590, 5610, 5350, 5560],[1396224000000, 5500, 5580, 5440, 5530],[1396310400000, 5480, 5580, 5420, 5580],[1396396800000, 5610, 5730, 5560, 5710],[1396483200000, 5700, 5770, 5670, 5710],[1396569600000, 5750, 5810, 5690, 5800],[1396828800000, 5800, 5810, 5670, 5740],[1396915200000, 5680, 5730, 5600, 5670],[1397001600000, 5700, 5700, 5580, 5680],[1397088000000, 5700, 5730, 5630, 5720],[1397174400000, 5700, 5950, 5700, 5920],[1397433600000, 5930, 5960, 5800, 5950],[1397520000000, 5950, 6070, 5910, 6050],[1397606400000, 6000, 6170, 6000, 6050],[1397692800000, 6050, 6100, 5950, 6050],[1397779200000, 6090, 6110, 5960, 6020],[1398038400000, 6020, 6060, 5960, 6040],[1398124800000, 6040, 6150, 5950, 6080],[1398211200000, 6030, 6120, 6010, 6080],[1398297600000, 6040, 6100, 5980, 6040],[1398384000000, 6010, 6050, 5920, 6020],[1398643200000, 5960, 6020, 5940, 6010],[1398729600000, 6010, 6050, 5870, 5950],[1398816000000, 5920, 6000, 5880, 6000],[1398988800000, 5990, 6050, 5970, 6050],[1399420800000, 6040, 6120, 6020, 6090],[1399507200000, 6050, 6100, 6030, 6050],[1399593600000, 6050, 6060, 5950, 6030],[1399852800000, 6030, 6040, 5880, 5940],[1399939200000, 5930, 5990, 5800, 5890],[1400025600000, 5880, 5970, 5830, 5970],[1400112000000, 5970, 5990, 5900, 5980],[1400198400000, 5970, 6080, 5960, 6060],[1400457600000, 6080, 6080, 5950, 6040],[1400544000000, 6050, 6050, 5970, 6000],[1400630400000, 5960, 6000, 5900, 5950],[1400716800000, 5950, 5970, 5880, 5940],[1400803200000, 5910, 5970, 5890, 5920],[1401062400000, 5960, 5990, 5910, 5910],[1401148800000, 5980, 5980, 5810, 5890],[1401235200000, 5810, 5890, 5800, 5860],[1401321600000, 5890, 5890, 5770, 5780],[1401667200000, 5780, 5850, 5700, 5800],[1401753600000, 5800, 5830, 5710, 5790],[1401926400000, 5750, 5750, 5620, 5680],[1402272000000, 5600, 5750, 5560, 5670],[1402358400000, 5680, 5680, 5600, 5640],[1402444800000, 5660, 5670, 5600, 5640],[1402531200000, 5640, 5680, 5580, 5640],[1402617600000, 5650, 5650, 5500, 5630],[1402876800000, 5540, 5730, 5540, 5700],[1402963200000, 5720, 5750, 5650, 5730],[1403049600000, 5730, 5750, 5650, 5740],[1403136000000, 5750, 5760, 5640, 5640],[1403222400000, 5660, 5710, 5530, 5630],[1403481600000, 5680, 5900, 5520, 5650],[1403568000000, 5590, 5680, 5500, 5520],[1403654400000, 5540, 5590, 5400, 5550],[1403740800000, 5470, 5680, 5470, 5590],[1403827200000, 5590, 5600, 5490, 5560],[1404086400000, 5580, 5690, 5510, 5670],[1404172800000, 5670, 5670, 5520, 5650],[1404259200000, 5650, 5740, 5620, 5660],[1404345600000, 5660, 5700, 5520, 5630],[1404432000000, 5620, 5640, 5500, 5540],[1404691200000, 5540, 5540, 5400, 5480],[1404777600000, 5470, 5550, 5430, 5530],[1404864000000, 5460, 5530, 5410, 5530],[1404950400000, 5510, 5550, 5440, 5510],[1405036800000, 5460, 5550, 5430, 5470],[1405296000000, 5460, 5520, 5400, 5490],[1405382400000, 5500, 5760, 5430, 5630],[1405468800000, 5670, 5670, 5520, 5600],[1405555200000, 5600, 5600, 5420, 5490],[1405641600000, 5470, 5500, 5410, 5440],[1405900800000, 5430, 5510, 5420, 5470],[1405987200000, 5490, 5490, 5350, 5440],[1406073600000, 5410, 5470, 5200, 5220],[1406160000000, 5210, 5260, 5190, 5210],[1406246400000, 5230, 5230, 5170, 5200],[1406505600000, 5220, 5260, 5200, 5210],[1406592000000, 5210, 5240, 5060, 5060],[1406678400000, 5080, 5140, 5020, 5100],[1406764800000, 5100, 5130, 4985, 5100],[1406851200000, 5050, 5100, 4985, 5090],[1407110400000, 5090, 5140, 5040, 5080],[1407196800000, 5050, 5100, 5020, 5040],[1407283200000, 5080, 5080, 4995, 5000],[1407369600000, 4990, 5060, 4925, 5000],[1407456000000, 4970, 4980, 4905, 4920],[1407715200000, 4955, 5080, 4930, 5060],[1407801600000, 5020, 5110, 5020, 5100],[1407888000000, 5070, 5130, 4985, 5110],[1407974400000, 5110, 5140, 5050, 5110],[1408320000000, 5170, 5230, 5100, 5150],[1408406400000, 5150, 5170, 5100, 5150],[1408492800000, 5150, 5160, 5080, 5120],[1408579200000, 5020, 5090, 4940, 5000],[1408665600000, 5000, 5060, 4975, 5050],[1408924800000, 5050, 5080, 4960, 5040],[1409011200000, 5030, 5260, 5000, 5170],[1409097600000, 5170, 5210, 5120, 5170],[1409184000000, 5160, 5230, 5100, 5190],[1409270400000, 5190, 5200, 5130, 5170],[1409529600000, 5160, 5250, 5140, 5190],[1409616000000, 5200, 5300, 5160, 5300],[1409702400000, 5300, 5410, 5230, 5400],[1409788800000, 5400, 5420, 5300, 5340],[1409875200000, 5340, 5440, 5320, 5390],[1410393600000, 5390, 5900, 5350, 5600],[1410480000000, 5670, 5670, 5500, 5540],[1410739200000, 5540, 5570, 5420, 5520],[1410825600000, 5520, 5590, 5460, 5530],[1410912000000, 5570, 5570, 5400, 5490],[1410998400000, 5520, 5530, 5440, 5480],[1411084800000, 5450, 5520, 5450, 5460],[1411344000000, 5520, 5520, 5430, 5470],[1411430400000, 5470, 5520, 5420, 5450],[1411516800000, 5420, 5450, 5350, 5430],[1411603200000, 5430, 5530, 5400, 5490],[1411689600000, 5460, 5560, 5440, 5510],[1411948800000, 5500, 5530, 5420, 5450],[1412035200000, 5450, 5490, 5340, 5400],[1412121600000, 5400, 5420, 5270, 5320],[1412208000000, 5310, 5600, 5150, 5510],[1412553600000, 5500, 5590, 5460, 5500],[1412640000000, 5460, 5770, 5460, 5710],[1412726400000, 5720, 5800, 5600, 5800],[1412899200000, 5790, 5930, 5700, 5890],[1413158400000, 5860, 5860, 5600, 5600],[1413244800000, 5600, 5810, 5600, 5800],[1413331200000, 5800, 6040, 5700, 5990],[1413417600000, 5990, 6370, 5910, 6260],[1413504000000, 6250, 6380, 6200, 6280],[1413763200000, 6310, 6440, 6170, 6280],[1413849600000, 6250, 6330, 6090, 6330],[1413936000000, 6370, 6400, 6290, 6360],[1414022400000, 6300, 6370, 6200, 6280],[1414108800000, 6230, 6300, 6060, 6200],[1414368000000, 6140, 6560, 6100, 6500],[1414454400000, 6500, 6500, 6330, 6350],[1414540800000, 6330, 6370, 6210, 6220],[1414627200000, 6190, 6300, 6100, 6140],[1414713600000, 6100, 6140, 6030, 6100],[1414972800000, 6100, 6200, 6010, 6100],[1415059200000, 6100, 6150, 5800, 5830],[1415145600000, 5790, 5890, 5780, 5830],[1415232000000, 5750, 5920, 5720, 5800],[1415318400000, 5750, 5940, 5720, 5940],[1415577600000, 5980, 6020, 5890, 5920],[1415664000000, 5930, 6050, 5830, 5960],[1415750400000, 5980, 6080, 5890, 6060],[1415836800000, 6060, 6100, 5990, 6050],[1415923200000, 6060, 6070, 5950, 6000],[1416182400000, 6000, 6000, 5740, 5800],[1416268800000, 5810, 5870, 5750, 5780],[1416355200000, 5840, 5890, 5800, 5870],[1416441600000, 5850, 5920, 5790, 5850],[1416528000000, 5850, 5900, 5780, 5880],[1416787200000, 5880, 5890, 5700, 5820],[1416873600000, 5820, 5850, 5790, 5850],[1416960000000, 5850, 5960, 5800, 5950],[1417046400000, 5950, 5980, 5840, 5860],[1417132800000, 5860, 5870, 5790, 5790],[1417392000000, 5840, 6040, 5820, 5880],[1417478400000, 5870, 5870, 5680, 5820],[1417564800000, 5770, 5820, 5700, 5760],[1417651200000, 5750, 5790, 5650, 5660],[1417737600000, 5660, 5700, 5590, 5630],[1417996800000, 5000, 5400, 5000, 5110],[1418083200000, 5130, 5230, 5090, 5170],[1418169600000, 5170, 5270, 5100, 5180],[1418256000000, 5180, 5210, 5140, 5200],[1418342400000, 5160, 5470, 5150, 5450],[1418601600000, 5350, 5570, 5350, 5570],[1418688000000, 5530, 5540, 5450, 5490],[1418774400000, 5510, 5510, 5390, 5410],[1418860800000, 5310, 5410, 5200, 5280],[1418947200000, 5280, 5340, 5160, 5250],[1419206400000, 5250, 5280, 5120, 5190],[1419292800000, 5190, 5300, 5190, 5280],[1419379200000, 5280, 5430, 5230, 5420],[1419552000000, 5420, 5940, 5420, 5680],[1419811200000, 5700, 5730, 5580, 5680],[1419897600000, 5640, 5730, 5500, 5570],[1420156800000, 5450, 5570, 5450, 5530],[1420416000000, 5430, 5590, 5400, 5500],[1420502400000, 5480, 5570, 5450, 5470],[1420588800000, 5470, 5580, 5400, 5540],[1420675200000, 5550, 5600, 5400, 5500],[1420761600000, 5550, 5580, 5490, 5540],[1421020800000, 5540, 5660, 5540, 5560],[1421107200000, 5560, 5640, 5550, 5600],[1421193600000, 5680, 5790, 5650, 5720],[1421280000000, 5730, 5800, 5630, 5750],[1421366400000, 5750, 5750, 5520, 5640],[1421625600000, 5680, 5760, 5640, 5680],[1421712000000, 5670, 5710, 5550, 5600],[1421798400000, 5590, 5670, 5550, 5610],[1421884800000, 5610, 5610, 5500, 5550],[1421971200000, 5550, 5620, 5540, 5600],[1422230400000, 5620, 5670, 5580, 5610],[1422316800000, 5610, 5610, 5520, 5570],[1422403200000, 5530, 5570, 5470, 5550],[1422489600000, 5500, 5620, 5500, 5600],[1422576000000, 5620, 6300, 5600, 5980],[1422835200000, 5980, 6000, 5810, 5910],[1422921600000, 5890, 6050, 5850, 5930],[1423008000000, 5950, 5950, 5850, 5890],[1423094400000, 5890, 5970, 5830, 5890],[1423180800000, 5920, 6100, 5860, 5980],[1423440000000, 5940, 6050, 5900, 5940],[1423526400000, 6000, 6080, 5860, 5930],[1423612800000, 5940, 6010, 5910, 6010],[1423699200000, 6010, 6080, 5950, 6000],[1423785600000, 6000, 6040, 5960, 6000],[1424044800000, 6020, 6250, 5990, 6160],[1424131200000, 6200, 6210, 5980, 6080],[1424649600000, 6090, 6150, 5990, 6130],[1424736000000, 6240, 6340, 6160, 6300],[1424822400000, 6350, 6370, 6230, 6250],[1424908800000, 6250, 6310, 6220, 6270],[1424995200000, 6270, 6330, 6190, 6250],[1425254400000, 6260, 6320, 6190, 6240],[1425340800000, 6240, 6400, 6170, 6350],[1425427200000, 6350, 6400, 6290, 6300],[1425513600000, 6300, 6440, 6300, 6410],[1425600000000, 6410, 6600, 6410, 6510],[1425859200000, 6500, 6600, 6450, 6500],[1425945600000, 6500, 6580, 6390, 6470],[1426032000000, 6390, 6890, 6390, 6640],[1426118400000, 6640, 6740, 6560, 6720],[1426204800000, 6720, 6790, 6630, 6770],[1426464000000, 6770, 6930, 6770, 6900],[1426550400000, 6910, 6920, 6830, 6900],[1426636800000, 6900, 7090, 6790, 7040],[1426723200000, 7090, 7140, 6970, 7040],[1426809600000, 7070, 7350, 7040, 7250],[1427068800000, 7330, 7940, 7280, 7680],[1427155200000, 7750, 7810, 7520, 7770],[1427241600000, 7770, 7800, 7580, 7680],[1427328000000, 7670, 7920, 7600, 7790],[1427414400000, 7670, 7760, 7400, 7470],[1427673600000, 7470, 7550, 7400, 7500],[1427760000000, 7540, 7550, 7450, 7510],[1427846400000, 7540, 7820, 7430, 7670],[1427932800000, 7770, 7770, 7560, 7560],[1428019200000, 7590, 7650, 7420, 7520],[1428278400000, 7490, 7640, 7490, 7510],[1428364800000, 7590, 7590, 7480, 7540],[1428451200000, 7540, 7900, 7510, 7840],[1428537600000, 7890, 8890, 7870, 8620],[1428624000000, 8700, 8750, 8450, 8680],[1428883200000, 8700, 9140, 8600, 8610],[1428969600000, 8680, 9090, 8540, 8910],[1429056000000, 9000, 9110, 8800, 9050],[1429142400000, 9070, 9070, 8790, 8930],[1429228800000, 8840, 8980, 8790, 8820],[1429488000000, 8750, 9010, 8630, 8900],[1429574400000, 9000, 9050, 8790, 8820],[1429660800000, 8760, 9050, 8210, 8750],[1429747200000, 8750, 8830, 8370, 8700],[1429833600000, 8690, 8780, 8400, 8580],[1430092800000, 8620, 8620, 8490, 8600],[1430179200000, 8460, 8740, 8460, 8630],[1430265600000, 8550, 8660, 8380, 8500],[1430352000000, 8500, 8540, 8300, 8330],[1430697600000, 8350, 8380, 7800, 8040],[1430870400000, 7850, 8000, 7600, 7850],[1430956800000, 7700, 7880, 7540, 7850],[1431043200000, 7910, 8180, 7810, 8170],[1431302400000, 8170, 8300, 8170, 8220],[1431388800000, 8300, 8400, 8190, 8300],[1431475200000, 8340, 8450, 8280, 8430],[1431561600000, 8450, 8490, 8310, 8470],[1431648000000, 8500, 8780, 8420, 8580],[1431907200000, 8600, 8700, 8300, 8470],[1431993600000, 8430, 8760, 8430, 8610],[1432080000000, 8700, 9900, 8690, 9890],[1432166400000, 10050, 10650, 9790, 9850],[1432252800000, 9920, 9950, 9360, 9360],[1432598400000, 9400, 9660, 9250, 9510],[1432684800000, 9500, 9510, 9040, 9130],[1432771200000, 9230, 9510, 9160, 9460],[1432857600000, 9460, 9580, 9330, 9370],[1433116800000, 9510, 9880, 9260, 9680],[1433203200000, 9760, 10800, 9710, 10400],[1433289600000, 10150, 10400, 9730, 9870],[1433376000000, 9870, 9930, 9370, 9450],[1433462400000, 9460, 9700, 9400, 9490],[1433721600000, 9390, 9580, 9190, 9270],[1433808000000, 9200, 9490, 9200, 9350],[1433894400000, 9500, 9500, 8950, 9110],[1433980800000, 9350, 9360, 9060, 9280],[1434067200000, 9280, 9440, 8880, 8880],[1434326400000, 8710, 9190, 8610, 8950],[1434412800000, 8910, 9100, 8790, 8900],[1434499200000, 8920, 9140, 8900, 8980],[1434585600000, 9080, 9260, 9010, 9220],[1434672000000, 9290, 9360, 9090, 9140],[1434931200000, 9240, 9290, 8970, 9040],[1435017600000, 9170, 9260, 8990, 9240],[1435104000000, 9260, 9490, 9200, 9490],[1435190400000, 9480, 9870, 9430, 9740],[1435276800000, 9830, 10350, 9350, 9350],[1435536000000, 9200, 9380, 8880, 8880],[1435622400000, 8900, 9150, 8670, 9070],[1435708800000, 9120, 10200, 9100, 10000],[1435795200000, 10150, 10650, 9710, 9970],[1435881600000, 10050, 10950, 9990, 10750],[1436140800000, 10450, 12000, 10400, 11200],[1436227200000, 11650, 12250, 9650, 9820],[1436313600000, 9800, 9890, 9120, 9260],[1436400000000, 8890, 9200, 8590, 9000],[1436486400000, 9170, 9540, 8840, 8910],[1436745600000, 9010, 9210, 8900, 9210],[1436832000000, 9390, 9490, 9150, 9300],[1436918400000, 9270, 9490, 9200, 9460],[1437004800000, 9460, 9600, 9330, 9510],[1437091200000, 9480, 9500, 9100, 9110],[1437350400000, 9160, 9330, 9100, 9240],[1437436800000, 9250, 9310, 9050, 9190],[1437523200000, 9200, 9200, 8960, 9060],[1437609600000, 9020, 9060, 8900, 9000],[1437696000000, 9080, 9260, 8940, 9220],[1437955200000, 9210, 9220, 8790, 8790],[1438041600000, 8630, 8690, 8280, 8610],[1438128000000, 8750, 8830, 8320, 8320],[1438214400000, 8280, 8400, 7900, 7970],[1438300800000, 7970, 8250, 7830, 8160],[1438560000000, 8200, 8310, 8030, 8070],[1438646400000, 7990, 8300, 7980, 8290],[1438732800000, 8300, 8550, 8280, 8540],[1438819200000, 8540, 8690, 8490, 8530],[1438905600000, 8530, 8700, 8380, 8530],[1439164800000, 8600, 8600, 8320, 8320],[1439251200000, 8470, 8470, 7980, 8380],[1439337600000, 8230, 8310, 7830, 7920],[1439424000000, 7920, 8250, 7850, 8100],[1439769600000, 8120, 8350, 7960, 7960],[1439856000000, 7980, 8070, 7610, 7710],[1439942400000, 7700, 7700, 6950, 7150],[1440028800000, 7050, 7220, 6900, 7050],[1440115200000, 6730, 7090, 6600, 6700],[1440374400000, 6450, 6900, 6440, 6590],[1440460800000, 6600, 7220, 6550, 6990],[1440547200000, 6990, 7150, 6850, 7100],[1440633600000, 7150, 7420, 7100, 7190],[1440720000000, 7280, 7310, 7140, 7240],[1440979200000, 7230, 7250, 7050, 7100],[1441065600000, 7100, 7240, 7000, 7000],[1441152000000, 6910, 7210, 6870, 7170],[1441238400000, 7210, 7250, 7000, 7010],[1441324800000, 7070, 7140, 6800, 6860],[1441584000000, 6860, 6920, 6770, 6790],[1441670400000, 6860, 6880, 6480, 6580],[1441756800000, 6680, 6920, 6670, 6880],[1441843200000, 6810, 6990, 6800, 6960],[1441929600000, 7020, 7150, 6930, 7070],[1442188800000, 7100, 7170, 6950, 6970],[1442275200000, 6930, 7110, 6900, 7080],[1442361600000, 7080, 7260, 7080, 7200],[1442448000000, 7250, 7330, 7100, 7160],[1442534400000, 7200, 7480, 7200, 7430],[1442793600000, 7340, 7390, 7260, 7270],[1442880000000, 7290, 7450, 7220, 7350],[1442966400000, 7270, 7320, 7070, 7120],[1443052800000, 7090, 7240, 7080, 7190],[1443139200000, 7210, 7210, 7020, 7170],[1443571200000, 7030, 7160, 6870, 7020],[1443657600000, 7020, 7180, 6970, 7030],[1443744000000, 7080, 7110, 6990, 7040],[1444003200000, 7100, 7270, 7090, 7130],[1444089600000, 7230, 7360, 7130, 7240],[1444176000000, 7240, 7300, 7060, 7150],[1444262400000, 7170, 7250, 6970, 6990],[1444608000000, 7060, 7060, 6820, 6890],[1444694400000, 6950, 6950, 6830, 6890],[1444780800000, 6840, 6920, 6700, 6850],[1444867200000, 6850, 6920, 6800, 6900],[1444953600000, 6960, 6980, 6870, 6960],[1445212800000, 6990, 7020, 6850, 6940],[1445299200000, 6950, 7050, 6850, 7020],[1445385600000, 7040, 7040, 6900, 6900],[1445472000000, 7000, 7000, 6850, 6900],[1445558400000, 6930, 7070, 6910, 6980],[1445817600000, 7040, 7060, 6970, 7000],[1445904000000, 7000, 7080, 6930, 6990],[1445990400000, 6990, 7060, 6940, 7020],[1446076800000, 7080, 7080, 6950, 7030],[1446163200000, 7030, 7070, 6870, 6920],[1446422400000, 6880, 6930, 6810, 6850],[1446508800000, 6880, 6920, 6780, 6810],[1446595200000, 6810, 7110, 6810, 7040],[1446681600000, 7150, 7850, 7070, 7490],[1446768000000, 7720, 7950, 7540, 7610],[1447027200000, 7610, 8060, 7310, 8030],[1447113600000, 8000, 8110, 7570, 7590],[1447200000000, 7530, 8190, 7510, 8190],[1447286400000, 8240, 8480, 8080, 8410],[1447372800000, 8200, 8340, 8050, 8200],[1447632000000, 7880, 8140, 7730, 8030],[1447718400000, 8110, 8280, 7980, 8030],[1447804800000, 8010, 8100, 7750, 7760],[1447891200000, 7780, 7930, 7740, 7760],[1447977600000, 7790, 7860, 7600, 7840],[1448236800000, 8060, 9200, 8020, 8510],[1448323200000, 8510, 8600, 8120, 8260],[1448409600000, 8310, 8360, 8090, 8220],[1448496000000, 8150, 8270, 8070, 8070],[1448582400000, 8150, 8150, 7940, 7940],[1448841600000, 7910, 7910, 7740, 7750],[1448928000000, 7770, 8200, 7760, 8180],[1449014400000, 8220, 8260, 7900, 7900],[1449100800000, 7830, 7850, 7650, 7740],[1449187200000, 7610, 7710, 7560, 7570],[1449446400000, 7620, 7700, 7440, 7650],[1449532800000, 7640, 7780, 7410, 7500],[1449619200000, 7470, 7680, 7420, 7440],[1449705600000, 7470, 7540, 7230, 7400],[1449792000000, 7400, 7410, 7170, 7200],[1450051200000, 7160, 7160, 6900, 6910],[1450137600000, 6900, 7500, 6900, 7210],[1450224000000, 7300, 7620, 7210, 7470],[1450310400000, 7500, 7560, 7340, 7440],[1450396800000, 7370, 7680, 7300, 7650],[1450656000000, 7550, 7650, 7500, 7500],[1450742400000, 7550, 7610, 7420, 7500],[1450828800000, 7480, 7570, 7430, 7440],[1450915200000, 7530, 7730, 7440, 7560],[1451260800000, 7690, 8120, 7690, 8000],[1451347200000, 8140, 8290, 7950, 8190],[1451433600000, 8180, 8180, 8020, 8140],[1451865600000, 8130, 8150, 7920, 8140],[1451952000000, 8040, 8250, 8000, 8190],[1452038400000, 8200, 8590, 8110, 8550],[1452124800000, 8470, 8690, 8190, 8380],[1452211200000, 8210, 8900, 8130, 8770],[1452470400000, 8870, 10100, 8800, 9380],[1452556800000, 9560, 9560, 8930, 9020],[1452643200000, 9190, 9200, 8600, 8780],[1452729600000, 8610, 8710, 8420, 8710],[1452816000000, 8720, 8840, 8450, 8450],[1453075200000, 8320, 8760, 8300, 8630],[1453161600000, 8620, 8830, 8520, 8800],[1453248000000, 8770, 9060, 8400, 8660],[1453334400000, 8790, 9010, 8630, 8720],[1453420800000, 8750, 8890, 8490, 8670],[1453680000000, 8750, 9140, 8670, 8980],[1453766400000, 8970, 9340, 8910, 9090],[1453852800000, 9200, 9210, 8660, 8730],[1453939200000, 8680, 8850, 8540, 8800],[1454025600000, 8840, 9290, 8750, 9080],[1454284800000, 9480, 9730, 9340, 9410],[1454371200000, 9600, 9680, 9150, 9160],[1454457600000, 9250, 9940, 9250, 9510],[1454544000000, 9630, 9690, 9170, 9210],[1454630400000, 9240, 9520, 9160, 9510],[1455148800000, 9070, 9330, 8570, 8610],[1455235200000, 8310, 8600, 7700, 7710],[1455494400000, 7950, 8040, 7730, 8030],[1455580800000, 8030, 8250, 8030, 8040],[1455667200000, 8170, 8200, 7760, 7860],[1455753600000, 7980, 7990, 7800, 7870],[1455840000000, 7880, 7890, 7740, 7820],[1456099200000, 7820, 8100, 7770, 8080],[1456185600000, 8120, 8130, 7840, 7850],[1456272000000, 7850, 7950, 7780, 7810],[1456358400000, 7860, 7960, 7700, 7760],[1456444800000, 7870, 7910, 7730, 7900],[1456704000000, 7900, 7900, 7650, 7700],[1456876800000, 7750, 7880, 7720, 7880],[1456963200000, 7920, 7920, 7800, 7890],[1457049600000, 7880, 8000, 7840, 7900],[1457308800000, 7950, 7990, 7790, 7810],[1457395200000, 7800, 7890, 7740, 7810],[1457481600000, 7820, 8030, 7800, 8000],[1457568000000, 8000, 8070, 7940, 8000],[1457654400000, 7980, 8050, 7920, 8010],[1457913600000, 8050, 8060, 7960, 7980],[1458000000000, 7980, 8020, 7830, 7830],[1458086400000, 7830, 7930, 7810, 7860],[1458172800000, 7910, 8010, 7830, 7950],[1458259200000, 7950, 8260, 7930, 8260],[1458518400000, 8300, 8310, 8130, 8200],[1458604800000, 8200, 8640, 8190, 8480],[1458691200000, 8500, 8500, 8300, 8380],[1458777600000, 8350, 8440, 8160, 8300],[1458864000000, 8260, 8500, 8260, 8370],[1459123200000, 8440, 8470, 8270, 8310],[1459209600000, 8310, 8390, 8210, 8360],[1459296000000, 8370, 8470, 8320, 8340],[1459382400000, 8370, 8430, 8000, 8110],[1459468800000, 8150, 8450, 8150, 8390],[1459728000000, 8530, 8970, 8510, 8900],[1459814400000, 8940, 8950, 8700, 8900],[1459900800000, 8900, 9240, 8800, 8950],[1459987200000, 9060, 9260, 9000, 9120],[1460073600000, 9050, 9240, 8910, 9060],[1460332800000, 9120, 9390, 8840, 9160],[1460419200000, 9080, 9160, 8810, 8810],[1460592000000, 8830, 8950, 8620, 8840],[1460678400000, 8870, 9090, 8760, 9020],[1460937600000, 9070, 9100, 8850, 8910],[1461024000000, 8940, 9050, 8870, 9010],[1461110400000, 9070, 9210, 8930, 8960],[1461196800000, 9020, 9050, 8890, 8930],[1461283200000, 9000, 9040, 8890, 8930],[1461542400000, 8950, 9630, 8950, 9630],[1461628800000, 9600, 9900, 9500, 9530],[1461715200000, 9440, 9550, 9130, 9160],[1461801600000, 9270, 9310, 9090, 9130],[1461888000000, 9110, 9330, 9050, 9330],[1462147200000, 9360, 9380, 9090, 9090],[1462233600000, 9090, 9300, 9000, 9050],[1462320000000, 8970, 9030, 8660, 8700],[1462752000000, 8700, 9240, 8700, 9120],[1462838400000, 9130, 9640, 9120, 9310],[1462924800000, 9400, 9660, 9370, 9430],[1463011200000, 9440, 9770, 9350, 9700],[1463097600000, 9710, 9740, 9460, 9490],[1463356800000, 9470, 10150, 9470, 10100],[1463443200000, 10250, 10300, 9920, 10050],[1463529600000, 10100, 11700, 10050, 10650],[1463616000000, 10550, 11100, 10100, 10750],[1463702400000, 10800, 11400, 10650, 10800],[1463961600000, 11100, 11400, 10850, 11100],[1464048000000, 11200, 11950, 10950, 11550],[1464134400000, 11600, 11750, 10050, 10200],[1464220800000, 10300, 10450, 10000, 10400],[1464307200000, 10450, 10500, 10150, 10250],[1464566400000, 10300, 10500, 9980, 10400],[1464652800000, 10450, 10550, 10200, 10500],[1464739200000, 10500, 10600, 10350, 10400],[1464825600000, 10500, 11000, 10400, 10900],[1464912000000, 11000, 11000, 10600, 10650],[1465257600000, 10700, 10750, 10450, 10700],[1465344000000, 10800, 11100, 10700, 10900],[1465430400000, 10850, 11300, 10400, 10600],[1465516800000, 10700, 10750, 10400, 10650],[1465776000000, 10700, 10750, 9980, 10150],[1465862400000, 10050, 10550, 9900, 10350],[1465948800000, 10350, 10550, 10250, 10400],[1466035200000, 10400, 11250, 10300, 10500],[1466121600000, 10750, 11050, 10000, 10150],[1466380800000, 10300, 10300, 10000, 10200],[1466467200000, 10250, 10250, 9990, 10100],[1466553600000, 10150, 10150, 9780, 9830],[1466640000000, 9710, 9870, 9510, 9730],[1466726400000, 9840, 9910, 8700, 9080],[1466985600000, 8750, 9480, 8750, 9400],[1467072000000, 9210, 9770, 9210, 9760],[1467158400000, 9850, 10100, 9700, 9750],[1467244800000, 9850, 10400, 9760, 10100],[1467331200000, 10200, 10200, 9960, 9960],[1467590400000, 10000, 10400, 9900, 10400],[1467676800000, 10400, 10450, 10200, 10350],[1467763200000, 10250, 10400, 9990, 10100],[1467849600000, 10300, 11100, 10200, 10850],[1467936000000, 11000, 11050, 10500, 10600],[1468195200000, 10750, 10850, 10550, 10650],[1468281600000, 10650, 10750, 10350, 10550],[1468368000000, 10750, 10850, 10400, 10450],[1468454400000, 10500, 10500, 10150, 10300],[1468540800000, 10400, 10400, 10000, 10100],[1468800000000, 10150, 10200, 9970, 10100],[1468886400000, 10150, 10200, 10000, 10050],[1468972800000, 10050, 10200, 9970, 9970],[1469059200000, 10050, 10100, 9850, 9870],[1469145600000, 9950, 10100, 9850, 9990],[1469404800000, 10050, 10250, 9940, 9990],[1469491200000, 10050, 10200, 9980, 10200],[1469577600000, 10200, 10250, 9950, 9970],[1469664000000, 10000, 10050, 9890, 9920],[1469750400000, 9950, 10100, 9880, 9920],[1470009600000, 9990, 9990, 9560, 9590],[1470096000000, 9520, 9800, 9520, 9610],[1470182400000, 9560, 9660, 9020, 9570],[1470268800000, 9650, 9650, 9500, 9510],[1470355200000, 9520, 9610, 9390, 9420],[1470614400000, 9490, 9490, 9310, 9320],[1470700800000, 9330, 9700, 9300, 9600],[1470787200000, 9650, 9850, 9500, 9820],[1470873600000, 9800, 9910, 9660, 9660],[1470960000000, 9710, 9780, 9620, 9680],[1471305600000, 9630, 9780, 9560, 9560],[1471392000000, 9570, 9630, 9260, 9410],[1471478400000, 9360, 9520, 9300, 9330],[1471564800000, 9400, 9400, 9220, 9290],[1471824000000, 9300, 9470, 9090, 9090],[1471910400000, 9250, 9360, 9090, 9260],[1471996800000, 9280, 9310, 9110, 9130],[1472083200000, 9150, 9220, 9010, 9070],[1472169600000, 9030, 9120, 8940, 9000],[1472428800000, 9200, 9600, 9070, 9150],[1472515200000, 9240, 9320, 9070, 9090],[1472601600000, 9100, 9150, 8670, 8830],[1472688000000, 8800, 8950, 8750, 8830],[1472774400000, 8900, 9150, 8800, 9010],[1473033600000, 9030, 9530, 9030, 9530],[1473120000000, 9470, 9500, 9340, 9370],[1473206400000, 9350, 9420, 9180, 9230],[1473292800000, 9180, 9340, 9080, 9230],[1473379200000, 9160, 9480, 9120, 9170],[1473638400000, 8950, 9060, 8850, 8920],[1473724800000, 8950, 9020, 8850, 8900],[1474243200000, 8900, 8920, 8700, 8820],[1474329600000, 8760, 9210, 8760, 9200],[1474416000000, 9200, 9200, 9000, 9070],[1474502400000, 9100, 9160, 8980, 9150],[1474588800000, 9150, 9490, 9110, 9400],[1474848000000, 9360, 9570, 9190, 9250],[1474934400000, 9250, 9460, 9240, 9430],[1475020800000, 9430, 9430, 9300, 9390],[1475107200000, 9360, 9440, 9350, 9350],[1475193600000, 9320, 9380, 8960, 8980],[1475539200000, 8900, 9060, 8730, 8930],[1475625600000, 9040, 9040, 8850, 8880],[1475712000000, 8920, 8920, 8790, 8870],[1475798400000, 8920, 8930, 8600, 8600],[1476057600000, 8630, 8780, 8630, 8710],[1476144000000, 8740, 8770, 8560, 8660],[1476230400000, 8630, 8730, 8600, 8670],[1476316800000, 8670, 8780, 8550, 8560],[1476403200000, 8550, 8630, 8530, 8600],[1476662400000, 8630, 8630, 8400, 8400],[1476748800000, 8370, 8440, 8320, 8410],[1476835200000, 8440, 8700, 8360, 8590],[1476921600000, 8650, 8650, 8410, 8460],[1477008000000, 8460, 8480, 8400, 8420],[1477267200000, 8380, 8550, 8360, 8390],[1477353600000, 8390, 8450, 8100, 8100],[1477440000000, 8110, 8280, 7930, 8060],[1477526400000, 8070, 8270, 8070, 8240],[1477612800000, 8240, 8260, 7950, 7980],[1477872000000, 7940, 7970, 7680, 7780],[1477958400000, 7640, 7930, 7640, 7770],[1478044800000, 7770, 7780, 7380, 7380],[1478131200000, 7300, 7680, 7290, 7540],[1478217600000, 7510, 7630, 7410, 7580],[1478476800000, 7580, 7670, 7520, 7600],[1478563200000, 7600, 7740, 7510, 7680],[1478649600000, 7630, 7750, 7060, 7280],[1478736000000, 7500, 7750, 7430, 7740],[1478822400000, 7710, 7980, 7650, 7900],[1479081600000, 7900, 7990, 7860, 7920],[1479168000000, 7990, 8080, 7770, 7810],[1479254400000, 7980, 8090, 7880, 8090],[1479340800000, 8090, 8130, 8000, 8130],[1479427200000, 8190, 8250, 8040, 8140],[1479686400000, 8150, 8150, 7850, 7990],[1479772800000, 8000, 8050, 7940, 7980],[1479859200000, 7950, 8040, 7910, 7930],[1479945600000, 7880, 7970, 7830, 7840],[1480032000000, 7840, 8010, 7840, 7980],[1480291200000, 8030, 8030, 7780, 7890],[1480377600000, 7830, 7910, 7740, 7810],[1480464000000, 7820, 7880, 7700, 7720],[1480550400000, 7720, 7760, 7600, 7680],[1480636800000, 7620, 7760, 7600, 7610],[1480896000000, 7610, 7680, 7510, 7560],[1480982400000, 7550, 7670, 7510, 7590],[1481068800000, 7560, 7640, 7390, 7470],[1481155200000, 7620, 7620, 7450, 7480],[1481241600000, 7530, 7580, 7460, 7540],[1481500800000, 7570, 7810, 7540, 7740],[1481587200000, 7780, 7890, 7710, 7820],[1481673600000, 7880, 7970, 7730, 7900],[1481760000000, 7810, 7940, 7810, 7940],[1481846400000, 7940, 8040, 7820, 8000],[1482105600000, 8000, 8020, 7880, 7980],[1482192000000, 7980, 8000, 7830, 7920],[1482278400000, 7880, 7960, 7830, 7900],[1482364800000, 7900, 7910, 7740, 7800],[1482451200000, 7800, 7940, 7760, 7830],[1482710400000, 7840, 7950, 7840, 7930],[1482796800000, 7930, 7980, 7880, 7900],[1482883200000, 7950, 8140, 7850, 8130],[1482969600000, 8000, 8130, 7990, 8120],[1483315200000, 8160, 8170, 8060, 8110],[1483401600000, 8110, 8170, 8090, 8110],[1483488000000, 8120, 8190, 8070, 8150],[1483574400000, 8170, 8250, 8140, 8210],[1483660800000, 8300, 8300, 8140, 8160],[1483920000000, 8210, 8210, 8010, 8080],[1484006400000, 8010, 8080, 7930, 7950],[1484092800000, 7950, 8040, 7910, 7910],[1484179200000, 7890, 7930, 7790, 7850],[1484265600000, 7810, 7970, 7810, 7900],[1484524800000, 7910, 8060, 7810, 7850],[1484611200000, 7890, 8170, 7810, 8170],[1484697600000, 8200, 8210, 7990, 8070],[1484784000000, 8050, 8080, 7920, 7920],[1484870400000, 7970, 8020, 7890, 7950],[1485129600000, 8020, 8400, 7990, 8350],[1485216000000, 8370, 8450, 8260, 8330],[1485302400000, 8320, 8350, 8150, 8180],[1485388800000, 8180, 8440, 8170, 8340],[1485820800000, 8400, 8400, 8150, 8210],[1485907200000, 8200, 8310, 8130, 8260],[1485993600000, 8260, 8320, 8100, 8120],[1486080000000, 8120, 8200, 8090, 8170],[1486339200000, 8260, 8700, 8260, 8610],[1486425600000, 8650, 8660, 8470, 8480],[1486512000000, 8500, 8640, 8400, 8440],[1486598400000, 8400, 8460, 8290, 8460],[1486684800000, 8460, 8500, 8300, 8360],[1486944000000, 8330, 8440, 8280, 8300],[1487030400000, 8320, 8420, 8300, 8350],[1487116800000, 8340, 8650, 8330, 8550],[1487203200000, 8570, 8580, 8420, 8420],[1487289600000, 8420, 8890, 8380, 8620],[1487548800000, 8690, 8700, 8460, 8510],[1487635200000, 8520, 8650, 8490, 8530],[1487721600000, 8560, 8710, 8550, 8650],[1487808000000, 8690, 8710, 8500, 8580],[1487894400000, 8620, 8820, 8600, 8690],[1488153600000, 8730, 8980, 8730, 8930],[1488240000000, 9000, 9140, 8750, 8900],[1488412800000, 8900, 8930, 8800, 8880],[1488499200000, 8850, 8870, 8690, 8710],[1488758400000, 8710, 9200, 8670, 9160],[1488844800000, 9160, 9160, 8960, 9020],[1488931200000, 9020, 9150, 9000, 9040],[1489017600000, 9060, 9100, 9000, 9000],[1489104000000, 9000, 9070, 8850, 9040],[1489363200000, 9050, 9080, 8940, 8960],[1489449600000, 8960, 9000, 8800, 8820],[1489536000000, 8810, 8980, 8810, 8960],[1489622400000, 8970, 9060, 8900, 9060],[1489708800000, 9070, 9100, 8880, 8970],[1489968000000, 8970, 8970, 8870, 8900],[1490054400000, 8960, 9010, 8850, 8870],[1490140800000, 8880, 9120, 8880, 9010],[1490227200000, 8990, 9070, 8900, 8970],[1490313600000, 8960, 8960, 8690, 8750],[1490572800000, 8770, 9070, 8750, 9060],[1490659200000, 9030, 9180, 9000, 9130],[1490745600000, 9130, 9190, 9020, 9170],[1490832000000, 9190, 9190, 9070, 9160],[1490918400000, 9160, 9530, 9070, 9090],[1491177600000, 9130, 9380, 9130, 9370],[1491264000000, 9410, 9420, 9200, 9280],[1491350400000, 9280, 9440, 9280, 9350],[1491436800000, 9350, 9350, 9170, 9230],[1491523200000, 9260, 9500, 9260, 9400],[1491782400000, 9440, 9480, 9100, 9220],[1491868800000, 9240, 9450, 9090, 9450],[1491955200000, 9430, 9550, 9340, 9380],[1492041600000, 9380, 9500, 9360, 9420],[1492128000000, 9430, 9500, 9220, 9230],[1492387200000, 9290, 9400, 9230, 9390],[1492473600000, 9340, 9470, 9330, 9470],[1492560000000, 9470, 9490, 9400, 9470],[1492646400000, 9480, 9510, 9400, 9430],[1492732800000, 9430, 9470, 9300, 9370],[1492992000000, 9410, 9410, 9130, 9170],[1493078400000, 9180, 9260, 9180, 9240],[1493164800000, 9250, 9300, 9180, 9210],[1493251200000, 9200, 9270, 9160, 9220],[1493337600000, 9280, 9280, 9180, 9200],[1493683200000, 9210, 9260, 9120, 9120],[1493856000000, 9090, 9300, 9090, 9290],[1494201600000, 9300, 9490, 9300, 9440],[1494374400000, 9440, 9460, 9200, 9210],[1494460800000, 9250, 9320, 9190, 9300],[1494547200000, 9300, 9300, 9120, 9150],[1494806400000, 9240, 9240, 9000, 9050],[1494892800000, 9100, 9100, 8730, 8800],[1494979200000, 8800, 8920, 8740, 8790],[1495065600000, 8770, 8770, 8600, 8650],[1495152000000, 8620, 8820, 8620, 8790],[1495411200000, 8790, 8790, 8680, 8690],[1495497600000, 8740, 8740, 8660, 8700],[1495584000000, 8780, 8880, 8780, 8830],[1495670400000, 8820, 8850, 8790, 8810],[1495756800000, 8810, 8820, 8700, 8780],[1496016000000, 8810, 8830, 8750, 8760],[1496102400000, 8760, 8910, 8760, 8850],[1496188800000, 8830, 9090, 8830, 8990],[1496275200000, 9010, 9040, 8840, 8940],[1496361600000, 8940, 9020, 8870, 9000],[1496620800000, 8990, 9240, 8970, 9140],[1496793600000, 9150, 9160, 8990, 9090],[1496880000000, 9080, 9210, 8970, 9130],[1496966400000, 9140, 9180, 9000, 9050],[1497225600000, 9020, 9080, 8870, 8870],[1497312000000, 8930, 9090, 8900, 9040],[1497398400000, 9080, 9080, 8960, 8960],[1497484800000, 8970, 8980, 8770, 8810],[1497571200000, 8840, 8840, 8590, 8680],[1497830400000, 8690, 8720, 8630, 8680],[1497916800000, 8700, 8700, 8360, 8450],[1498003200000, 8450, 8600, 8410, 8600],[1498089600000, 8600, 8630, 8520, 8580],[1498176000000, 8550, 8660, 8540, 8630],[1498435200000, 8610, 8630, 8520, 8590],[1498521600000, 8590, 8590, 8470, 8490],[1498608000000, 8480, 8480, 8350, 8350],[1498694400000, 8340, 8440, 8330, 8410],[1498780800000, 8450, 8540, 8410, 8470],[1499040000000, 8470, 8510, 8410, 8440],[1499126400000, 8450, 8490, 8370, 8430],[1499212800000, 8430, 8440, 8300, 8340],[1499299200000, 8340, 8420, 8300, 8400],[1499385600000, 8370, 8370, 8190, 8270],[1499644800000, 8320, 8320, 8100, 8100],[1499731200000, 8090, 8180, 8040, 8180],[1499817600000, 8150, 8180, 8030, 8140],[1499904000000, 8120, 8120, 7950, 8040],[1499990400000, 8040, 8040, 7850, 7850],[1500249600000, 7860, 8040, 7850, 8000],[1500336000000, 8020, 8050, 7940, 7970],[1500422400000, 7970, 8030, 7930, 8030],[1500508800000, 8030, 8430, 7970, 8430],[1500595200000, 8420, 8500, 8350, 8430],[1500854400000, 8470, 8470, 8220, 8240],[1500940800000, 8280, 8430, 8220, 8280],[1501027200000, 8340, 8410, 8290, 8300],[1501113600000, 8320, 8350, 8260, 8350],[1501200000000, 8360, 8360, 8160, 8180],[1501459200000, 8100, 8270, 8100, 8180],[1501545600000, 8180, 8260, 8110, 8200],[1501632000000, 8200, 8470, 8200, 8380],[1501718400000, 8450, 8460, 8250, 8300],[1501804800000, 8380, 8380, 8210, 8330],[1502064000000, 8330, 8410, 8320, 8380],[1502150400000, 8380, 8380, 8290, 8330],[1502236800000, 8330, 8330, 8150, 8150],[1502323200000, 8150, 8280, 8120, 8200],[1502409600000, 8150, 8250, 7980, 8130],[1502668800000, 8240, 8540, 8200, 8500],[1502841600000, 8560, 8620, 8470, 8580],[1502928000000, 8550, 8660, 8530, 8610],[1503014400000, 8530, 8720, 8530, 8710],[1503273600000, 8740, 8920, 8670, 8730],[1503360000000, 8840, 8920, 8740, 8920],[1503446400000, 8940, 9080, 8910, 8990],[1503532800000, 8980, 8980, 8740, 8820],[1503619200000, 8880, 8880, 8770, 8840],[1503878400000, 8840, 8980, 8840, 8910],[1503964800000, 8920, 9020, 8750, 8960],[1504051200000, 9000, 9010, 8900, 9000],[1504137600000, 9000, 9100, 9000, 9050],[1504224000000, 9100, 9100, 9020, 9040],[1504483200000, 8850, 8990, 8770, 8800],[1504569600000, 8810, 8850, 8670, 8710],[1504656000000, 8670, 8840, 8590, 8600],[1504742400000, 8710, 8880, 8710, 8870],[1504828800000, 8890, 8900, 8710, 8710],[1505088000000, 8760, 9090, 8730, 8940],[1505174400000, 8950, 8990, 8850, 8910],[1505260800000, 8920, 9100, 8920, 9020],[1505347200000, 9030, 9070, 8810, 9070],[1505433600000, 9060, 9070, 8930, 9020],[1505692800000, 9020, 9020, 8850, 8850],[1505779200000, 8840, 8980, 8770, 8850],[1505865600000, 8870, 9080, 8840, 8950],[1505952000000, 8950, 9000, 8850, 8870],[1506038400000, 8840, 8950, 8560, 8640],[1506297600000, 8560, 8790, 8460, 8460],[1506384000000, 8460, 8500, 8310, 8400],[1506470400000, 8430, 8590, 8420, 8550],[1506556800000, 8580, 8650, 8550, 8550],[1506643200000, 8600, 8620, 8550, 8560],[1507593600000, 8570, 8940, 8570, 8900],[1507680000000, 8890, 9000, 8760, 8940],[1507766400000, 8940, 8990, 8840, 8930],[1507852800000, 8930, 9080, 8860, 8970],[1508112000000, 9040, 9050, 8850, 8980],[1508198400000, 9000, 9360, 9000, 9260],[1508284800000, 9260, 9340, 9100, 9190],[1508371200000, 9270, 9290, 9070, 9070],[1508457600000, 9010, 9110, 9000, 9050],[1508716800000, 9110, 9340, 9100, 9270],[1508803200000, 9260, 9300, 9160, 9270],[1508889600000, 9270, 9280, 9170, 9210],[1508976000000, 9240, 9240, 9030, 9050],[1509062400000, 9110, 9170, 9040, 9120],[1509321600000, 9160, 9180, 9060, 9080],[1509408000000, 9080, 9080, 8830, 8840],[1509494400000, 8850, 9170, 8840, 9170],[1509580800000, 9170, 9180, 9030, 9100],[1509667200000, 9080, 9270, 9070, 9240],[1509926400000, 9300, 9500, 9270, 9490],[1510012800000, 9500, 9530, 9260, 9340],[1510099200000, 9310, 9700, 9310, 9540],[1510185600000, 9770, 9900, 9630, 9830],[1510272000000, 9820, 10250, 9790, 10150],[1510531200000, 10250, 10650, 10150, 10600],[1510617600000, 10800, 11200, 10700, 11100],[1510704000000, 10950, 11250, 10650, 10800],[1510790400000, 10850, 11200, 10350, 10800],[1510876800000, 10800, 11450, 10700, 11250],[1511136000000, 11200, 11550, 11100, 11500],[1511222400000, 11400, 11500, 11200, 11250],[1511308800000, 11300, 11400, 10850, 11100],[1511395200000, 11050, 11350, 10800, 11150],[1511481600000, 11200, 11250, 10800, 10900],[1511740800000, 10900, 11100, 10650, 11000],[1511827200000, 10950, 11050, 10700, 10750],[1511913600000, 10800, 10950, 10600, 10750],[1512000000000, 10700, 10800, 10300, 10300],[1512086400000, 10450, 10650, 10350, 10550],[1512345600000, 10600, 10750, 10250, 10350],[1512432000000, 10300, 10400, 10100, 10300],[1512518400000, 10300, 10500, 10100, 10250],[1512604800000, 10200, 10250, 9770, 9800],[1512691200000, 9850, 9930, 9740, 9760],[1512950400000, 9760, 9930, 9740, 9930],[1513036800000, 9980, 10050, 9780, 9830],[1513123200000, 9830, 9960, 9750, 9830],[1513209600000, 9910, 9910, 9800, 9850],[1513296000000, 9830, 10100, 9820, 9990],[1513555200000, 10000, 10050, 9690, 9710],[1513641600000, 9710, 9710, 9310, 9400],[1513728000000, 9360, 9620, 9340, 9490],[1513814400000, 9560, 9560, 9290, 9320],[1513900800000, 9370, 9370, 9090, 9260],[1514246400000, 9350, 9580, 9280, 9370],[1514332800000, 9430, 9470, 9300, 9420],[1514419200000, 9580, 9750, 9510, 9750],[1514851200000, 9750, 9900, 9700, 9870],[1514937600000, 9900, 10250, 9820, 10000],[1515024000000, 10050, 10050, 9680, 9750],[1515110400000, 9750, 9980, 9750, 9910],[1515369600000, 10000, 10150, 9940, 9950],[1515456000000, 9950, 10050, 9690, 9770],[1515542400000, 9800, 9910, 9770, 9840],[1515628800000, 9840, 10350, 9840, 10300],[1515715200000, 10350, 10450, 10100, 10250],[1515974400000, 10300, 10450, 10100, 10350],[1516060800000, 10350, 10350, 10000, 10050],[1516147200000, 10100, 10100, 9830, 9900],[1516233600000, 9990, 10250, 9910, 10100],[1516320000000, 10150, 10850, 10150, 10550],[1516579200000, 10450, 10800, 10350, 10500],[1516665600000, 10500, 10700, 10350, 10500],[1516752000000, 10650, 10650, 10400, 10500],[1516838400000, 10500, 10600, 10350, 10500],[1516924800000, 10450, 10900, 10400, 10750],[1517184000000, 10700, 10750, 10500, 10550],[1517270400000, 10500, 11000, 10300, 10800],[1517356800000, 10850, 11300, 10650, 10800],[1517443200000, 10850, 10900, 10450, 10450],[1517529600000, 10450, 10500, 10000, 10300],[1517788800000, 9900, 10650, 9900, 10050],[1517875200000, 9620, 10000, 9530, 10000],[1517961600000, 10150, 10750, 10000, 10050],[1518048000000, 10150, 10300, 10000, 10250],[1518134400000, 9850, 10200, 9850, 10050],[1518393600000, 10300, 11050, 10300, 10900],[1518480000000, 11100, 11200, 10400, 10450],[1518566400000, 10450, 10600, 10150, 10500],[1518998400000, 10550, 10800, 10500, 10650],[1519084800000, 10750, 13050, 10650, 12050],[1519171200000, 12050, 12650, 11900, 12150],[1519257600000, 12250, 13300, 12000, 12500],[1519344000000, 12400, 12650, 12150, 12500],[1519603200000, 12750, 12850, 12050, 12100],[1519689600000, 12200, 12350, 11800, 12050],[1519776000000, 11950, 12300, 11400, 11400],[1519948800000, 11450, 11750, 11400, 11550],[1520208000000, 11650, 11750, 11100, 11250],[1520294400000, 11450, 11600, 11300, 11350],[1520380800000, 11500, 11950, 11350, 11400],[1520467200000, 11500, 11700, 11400, 11500],[1520553600000, 11600, 11800, 11400, 11650],[1520812800000, 11900, 12400, 11800, 12150],[1520899200000, 12250, 12300, 12000, 12050],[1520985600000, 11950, 12300, 11850, 12250],[1521072000000, 12250, 12950, 12100, 12800],[1521158400000, 12850, 12850, 12400, 12500],[1521417600000, 12500, 12550, 12100, 12100],[1521504000000, 11950, 12600, 11950, 12300],[1521590400000, 12450, 12550, 12250, 12350],[1521676800000, 12350, 12950, 12150, 12250],[1521763200000, 11750, 12000, 11350, 11550],[1522022400000, 11300, 11650, 11050, 11600],[1522108800000, 11800, 11850, 11550, 11550],[1522195200000, 11350, 11800, 11350, 11600],[1522281600000, 11700, 12150, 11650, 11900],[1522368000000, 12050, 12400, 11900, 12250],[1522627200000, 12350, 12350, 11850, 12050],[1522713600000, 11950, 12400, 11950, 12350],[1522800000000, 12550, 12600, 12150, 12250],[1522886400000, 12450, 12650, 12250, 12300],[1522972800000, 12250, 12350, 11950, 12000],[1523232000000, 11950, 12550, 11800, 12550],[1523318400000, 12550, 12950, 12350, 12850],[1523404800000, 12950, 13400, 12750, 13150],[1523491200000, 13250, 13250, 12450, 12700],[1523577600000, 12600, 13100, 12400, 12950],[1523836800000, 13000, 13050, 12750, 12900],[1523923200000, 13000, 13000, 12550, 12550],[1524009600000, 12650, 12700, 12100, 12350],[1524096000000, 12300, 12300, 11850, 12150],[1524182400000, 12150, 12550, 12000, 12300],[1524441600000, 12300, 12500, 11800, 12250],[1524528000000, 12250, 12500, 11950, 12000],[1524614400000, 11850, 12100, 11800, 11850],[1524700800000, 12000, 12150, 11800, 11800],[1524787200000, 11850, 11950, 11350, 11650],[1525046400000, 11650, 11650, 11200, 11550],[1525219200000, 11300, 11700, 11100, 11450],[1525305600000, 11400, 11600, 11300, 11400],[1525392000000, 11350, 11650, 11100, 11450],[1525737600000, 11550, 11550, 11150, 11150],[1525824000000, 11150, 11250, 10700, 11200],[1525910400000, 11200, 11300, 10900, 10950],[1525996800000, 10950, 11200, 10950, 11000],[1526256000000, 11000, 11100, 10550, 10900],[1526342400000, 11000, 11350, 10900, 11250],[1526428800000, 11200, 11450, 11050, 11300],[1526515200000, 11350, 11750, 11250, 11600],[1526601600000, 11550, 11700, 11450, 11550],[1526860800000, 11500, 11650, 11450, 11550],[1527033600000, 11550, 11550, 11200, 11400],[1527120000000, 11350, 11500, 11300, 11300],[1527206400000, 11200, 11350, 11100, 11250],[1527465600000, 11250, 11600, 11250, 11550],[1527552000000, 11500, 11650, 11400, 11450],[1527638400000, 11350, 11450, 11200, 11400],[1527724800000, 11400, 11600, 11250, 11450],[1527811200000, 11450, 11700, 11350, 11550],[1528070400000, 11550, 12050, 11300, 11750],[1528156800000, 11800, 11950, 11600, 11700],[1528329600000, 11700, 11750, 11450, 11650],[1528416000000, 11650, 11700, 11400, 11500],[1528675200000, 11500, 11650, 11400, 11500],[1528761600000, 11500, 11750, 11500, 11650],[1528934400000, 11650, 12000, 11550, 12000],[1529020800000, 12000, 12050, 11750, 11800],[1529280000000, 11800, 11900, 11200, 11450],[1529366400000, 11350, 11450, 10750, 10850],[1529452800000, 10800, 11250, 10800, 11200],[1529539200000, 11200, 11350, 11000, 11000],[1529625600000, 11000, 11150, 10850, 11150],[1529884800000, 11000, 11200, 10850, 10900],[1529971200000, 10850, 11100, 10650, 11000],[1530057600000, 11100, 11100, 10550, 10750],[1530144000000, 10750, 10850, 10250, 10300],[1530230400000, 10350, 10450, 9990, 10200],[1530489600000, 10200, 10250, 9900, 9940],[1530576000000, 9940, 10350, 9940, 10000],[1530662400000, 9980, 10450, 9980, 10450],[1530748800000, 10450, 10600, 10150, 10400],[1530835200000, 10450, 10750, 10150, 10450],[1531094400000, 10900, 11300, 10400, 10450],[1531180800000, 10500, 10750, 10450, 10500],[1531267200000, 10500, 10600, 10350, 10500],[1531353600000, 10450, 11000, 10400, 10800],[1531440000000, 10850, 11050, 10700, 10950],[1531699200000, 10950, 11000, 10700, 10800],[1531785600000, 10850, 11200, 10700, 11050],[1531872000000, 11100, 11250, 10900, 10950],[1531958400000, 11000, 11000, 10600, 10600],[1532044800000, 10650, 10750, 10500, 10500],[1532304000000, 10550, 10600, 10350, 10350],[1532390400000, 10300, 10800, 10250, 10700],[1532476800000, 10550, 10700, 10150, 10200],[1532563200000, 10200, 10600, 10200, 10500],[1532649600000, 10550, 10700, 10400, 10650],[1532908800000, 10650, 11150, 10450, 10950],[1532995200000, 10900, 11150, 10800, 11050],[1533081600000, 11050, 11500, 10950, 11400],[1533168000000, 11450, 11700, 11200, 11450],[1533254400000, 11500, 11850, 11400, 11650],[1533513600000, 11550, 11750, 11400, 11650],[1533600000000, 11550, 11700, 11500, 11650],[1533686400000, 11650, 11800, 11550, 11550],[1533772800000, 11550, 11650, 11450, 11600],[1533859200000, 11600, 11600, 11400, 11500],[1534118400000, 11500, 11650, 11250, 11300],[1534204800000, 11300, 11400, 11200, 11300],[1534377600000, 11050, 11100, 10300, 10600],[1534464000000, 10700, 11350, 10650, 10900],[1534723200000, 11050, 11400, 10700, 11350],[1534809600000, 11300, 11450, 11250, 11450],[1534896000000, 11400, 12150, 11150, 11450],[1534982400000, 11450, 11700, 11300, 11700],[1535068800000, 11750, 11800, 11350, 11400],[1535328000000, 11400, 11600, 11400, 11450],[1535414400000, 11450, 11700, 11400, 11650],[1535500800000, 11700, 11700, 11300, 11600],[1535587200000, 11500, 11650, 11350, 11600],[1535673600000, 11500, 11800, 11500, 11600],[1535932800000, 11700, 11700, 11450, 11550],[1536019200000, 11500, 11600, 11400, 11450],[1536105600000, 11450, 11550, 11350, 11400],[1536192000000, 11350, 11600, 11250, 11500],[1536278400000, 11450, 11600, 11350, 11450],[1536537600000, 11450, 11550, 11350, 11400],[1536624000000, 11450, 11550, 11200, 11550],[1536710400000, 11600, 11700, 11350, 11600],[1536796800000, 11550, 11700, 11400, 11500],[1536883200000, 11500, 11550, 11200, 11350],[1537142400000, 11300, 11300, 11000, 11050],[1537228800000, 10950, 11100, 10800, 10950],[1537315200000, 11050, 11150, 10650, 10750],[1537401600000, 10800, 11100, 10750, 11050],[1537488000000, 11100, 11100, 10900, 11100],[1538006400000, 11100, 11300, 11000, 11250],[1538092800000, 11300, 11500, 11150, 11350],[1538352000000, 11250, 11500, 11100, 11150],[1538438400000, 11250, 11250, 10850, 10900],[1538611200000, 10950, 11100, 10800, 10950],[1538697600000, 10800, 10900, 10350, 10600],[1538956800000, 10600, 10650, 10100, 10100],[1539129600000, 10250, 10250, 9800, 9900],[1539216000000, 9500, 9770, 9230, 9250],[1539302400000, 9060, 9660, 9060, 9600],[1539561600000, 9600, 9600, 9360, 9370],[1539648000000, 9350, 9750, 9350, 9600],[1539734400000, 9650, 10050, 9650, 9890],[1539820800000, 9820, 9990, 9650, 9680],[1539907200000, 9570, 9820, 9550, 9780],[1540166400000, 9780, 9910, 9550, 9580],[1540252800000, 9580, 9630, 8990, 9080],[1540339200000, 9120, 9260, 8800, 8800],[1540425600000, 8600, 8780, 8460, 8580],[1540512000000, 8730, 8790, 8210, 8370],[1540771200000, 8270, 8550, 7770, 7900],[1540857600000, 7500, 8320, 7500, 8230],[1540944000000, 8250, 9500, 8160, 9050],[1541030400000, 9000, 9410, 9000, 9210],[1541116800000, 9340, 9460, 9130, 9310],[1541376000000, 9290, 9940, 9200, 9510],[1541462400000, 9520, 9760, 9420, 9640],[1541548800000, 9640, 9900, 9500, 9570],[1541635200000, 9690, 9990, 9560, 9740],[1541721600000, 9740, 10050, 9450, 9980],[1541980800000, 9890, 9890, 9390, 9420],[1542067200000, 9300, 9680, 9270, 9470],[1542153600000, 9460, 9840, 9460, 9560],[1542240000000, 9510, 9610, 9150, 9390],[1542326400000, 9380, 9730, 9380, 9600],[1542585600000, 9570, 9670, 9560, 9660],[1542672000000, 9510, 9670, 9500, 9500],[1542758400000, 9480, 9580, 9230, 9480],[1542844800000, 9520, 9760, 9090, 9590],[1542931200000, 9590, 9630, 9410, 9480],[1543190400000, 9580, 9580, 9390, 9400],[1543276800000, 9450, 9510, 9410, 9430],[1543363200000, 9480, 9490, 9150, 9320],[1543449600000, 9410, 9410, 9260, 9360],[1543536000000, 9370, 9380, 9100, 9110],[1543795200000, 9230, 9430, 9230, 9370],[1543881600000, 9430, 9490, 9320, 9400],[1543968000000, 9310, 9430, 9310, 9420],[1544054400000, 9480, 9610, 9280, 9430],[1544140800000, 9490, 9890, 9440, 9690],[1544400000000, 9590, 9710, 9520, 9660],[1544486400000, 9660, 9760, 9320, 9320],[1544572800000, 9330, 9580, 9330, 9570],[1544659200000, 9530, 9700, 9450, 9600],[1544745600000, 9730, 9730, 9250, 9430],[1545004800000, 9430, 9670, 9300, 9500],[1545091200000, 9500, 9500, 9090, 9350],[1545177600000, 9350, 9400, 9100, 9180],[1545264000000, 9180, 9180, 8870, 8950],[1545350400000, 8950, 9130, 8950, 9030],[1545609600000, 8910, 9340, 8800, 8830],[1545782400000, 8600, 9160, 8590, 8730],[1545868800000, 8810, 9120, 8730, 9040],[1545955200000, 9080, 9170, 9030, 9100],[1546387200000, 9190, 9430, 9080, 9340],[1546473600000, 9340, 9390, 9130, 9170],[1546560000000, 9100, 9700, 9100, 9530],[1546819200000, 9660, 9800, 9510, 9530],[1546905600000, 9610, 9640, 9320, 9520],[1546992000000, 9520, 9620, 9380, 9450],[1547078400000, 9430, 9530, 9350, 9450],[1547164800000, 9400, 9520, 9390, 9400],[1547424000000, 9470, 9470, 9360, 9400],[1547510400000, 9380, 9450, 9350, 9400],[1547596800000, 9440, 9600, 9400, 9510],[1547683200000, 9520, 9670, 9450, 9640],[1547769600000, 9640, 9710, 9600, 9640],[1548028800000, 9660, 9820, 9650, 9750],[1548115200000, 9750, 9860, 9660, 9800],[1548201600000, 9840, 9880, 9740, 9820],[1548288000000, 9820, 10000, 9710, 10000],[1548374400000, 10000, 10100, 9920, 9980],[1548633600000, 9970, 10100, 9860, 9930],[1548720000000, 9930, 10000, 9690, 9780],[1548806400000, 9730, 9820, 9580, 9630],[1548892800000, 9720, 9840, 9580, 9840],[1548979200000, 9830, 9890, 9770, 9840],[1549497600000, 9810, 10100, 9720, 10000],[1549584000000, 9930, 10000, 9900, 9990],[1549843200000, 10000, 10300, 9950, 9990],[1549929600000, 10000, 10100, 9920, 10050],[1550016000000, 10050, 10150, 9960, 10050],[1550102400000, 10050, 10050, 9890, 9940],[1550188800000, 9950, 10000, 9710, 9880],[1550448000000, 9880, 9960, 9850, 9850],[1550534400000, 9830, 9930, 9820, 9860],[1550620800000, 9890, 9900, 9750, 9800],[1550707200000, 9880, 9910, 9730, 9830],[1550793600000, 9750, 9910, 9700, 9750],[1551052800000, 9800, 9820, 9680, 9680],[1551139200000, 9750, 10000, 9680, 9850],[1551225600000, 9850, 9990, 9850, 9930],[1551312000000, 9930, 9980, 9720, 9800],[1551657600000, 9810, 10050, 9800, 10000],[1551744000000, 10050, 10150, 9970, 10100],[1551830400000, 10150, 10250, 10050, 10100],[1551916800000, 10050, 10100, 9910, 9990],[1552003200000, 9990, 10000, 9860, 9930],[1552262400000, 9930, 9960, 9700, 9850],[1552348800000, 9900, 9960, 9870, 9930],[1552435200000, 9950, 10150, 9930, 10050],[1552521600000, 10050, 10100, 9990, 10100],[1552608000000, 10150, 10150, 9970, 9970],[1552867200000, 10000, 10050, 9900, 9990],[1552953600000, 9990, 10100, 9970, 9980],[1553040000000, 10050, 10050, 9860, 10000],[1553126400000, 10050, 10050, 9790, 9820],[1553212800000, 9820, 9920, 9570, 9680],[1553472000000, 9600, 9720, 9510, 9650],[1553558400000, 9630, 9680, 9560, 9560],[1553644800000, 9600, 9600, 9440, 9470],[1553731200000, 9540, 9540, 9070, 9070],[1553817600000, 9140, 9440, 9040, 9400],[1554076800000, 9390, 9480, 9310, 9420],[1554163200000, 9460, 9460, 9320, 9390],[1554249600000, 9480, 9540, 9400, 9510],[1554336000000, 9560, 9590, 9450, 9560],[1554422400000, 9540, 9570, 9400, 9440],[1554681600000, 9570, 9570, 9410, 9450],[1554768000000, 9480, 9500, 9350, 9390],[1554854400000, 9390, 9420, 9250, 9390],[1554940800000, 9440, 9590, 9340, 9490],[1555027200000, 9490, 9660, 9370, 9600],[1555286400000, 9570, 9890, 9480, 9690],[1555372800000, 9690, 9770, 9610, 9710],[1555459200000, 9740, 9840, 9640, 9740],[1555545600000, 9740, 9890, 9650, 9650],[1555632000000, 9740, 9790, 9690, 9720],[1555891200000, 9740, 9920, 9680, 9900],[1555977600000, 9880, 9960, 9820, 9920],[1556064000000, 9950, 9970, 9800, 9930],[1556150400000, 9940, 9960, 9700, 9860],[1556236800000, 9890, 9960, 9770, 9880],[1556496000000, 9840, 9970, 9830, 9850],[1556582400000, 9810, 9950, 9780, 9780],[1556755200000, 9770, 9890, 9770, 9870],[1556841600000, 9870, 9920, 9790, 9860],[1557187200000, 9760, 9880, 9710, 9860],[1557273600000, 9860, 9930, 9780, 9810],[1557360000000, 9880, 9880, 9730, 9820],[1557446400000, 9820, 9820, 9700, 9800],[1557705600000, 9840, 9840, 9610, 9610],[1557792000000, 9600, 9650, 9460, 9640],[1557878400000, 9640, 9680, 9550, 9570],[1557964800000, 9570, 9670, 9370, 9390],[1558051200000, 9370, 9550, 9130, 9260],[1558310400000, 9250, 9450, 9100, 9350],[1558396800000, 9350, 9640, 9350, 9620],[1558483200000, 9620, 9620, 9430, 9430],[1558569600000, 9600, 9600, 9390, 9440],[1558656000000, 9520, 9520, 9330, 9380],[1558915200000, 9380, 9410, 9190, 9320],[1559001600000, 9300, 9400, 9260, 9300],[1559088000000, 9370, 9430, 9210, 9310],[1559174400000, 9260, 9500, 9200, 9300],[1559260800000, 9350, 9600, 9070, 9200],[1559520000000, 9200, 9250, 9030, 9230],[1559606400000, 9220, 9400, 9100, 9380],[1559692800000, 9380, 9570, 9330, 9490],[1559865600000, 9450, 9490, 9160, 9220],[1560124800000, 9220, 9300, 9180, 9220],[1560211200000, 9270, 9550, 9210, 9520],[1560297600000, 9470, 9780, 9410, 9600],[1560384000000, 9600, 9920, 9530, 9680],[1560470400000, 9680, 9870, 9680, 9730],[1560729600000, 9790, 9830, 9650, 9790],[1560816000000, 9790, 10150, 9680, 9900],[1560902400000, 9900, 9960, 9730, 9900],[1560988800000, 9930, 9950, 9810, 9820],[1561075200000, 9780, 9990, 9780, 9870],[1561334400000, 9910, 9920, 9820, 9880],[1561420800000, 9810, 9890, 9730, 9860],[1561507200000, 9860, 9900, 9790, 9840],[1561593600000, 9890, 9890, 9700, 9760],[1561680000000, 9800, 9870, 9610, 9680],[1561939200000, 9680, 9840, 9680, 9710],[1562025600000, 9810, 9810, 9700, 9750],[1562112000000, 9810, 9810, 9670, 9750],[1562198400000, 9730, 9780, 9540, 9740],[1562284800000, 9750, 9780, 9490, 9650],[1562544000000, 9650, 9650, 9210, 9210],[1562630400000, 9350, 9470, 8980, 9310],[1562716800000, 9360, 9520, 9270, 9380],[1562803200000, 9480, 9580, 9380, 9500],[1562889600000, 9530, 9740, 9390, 9530],[1563148800000, 9620, 9960, 9400, 9800],[1563235200000, 9800, 9890, 9660, 9760],[1563321600000, 9750, 9780, 9560, 9750],[1563408000000, 9730, 9730, 9610, 9690],[1563494400000, 9700, 9810, 9660, 9770],[1563753600000, 9770, 9800, 9600, 9600],[1563840000000, 9600, 9690, 9490, 9500],[1563926400000, 9500, 9600, 9440, 9470],[1564012800000, 9500, 9550, 9210, 9360],[1564099200000, 9450, 9450, 9220, 9390],[1564358400000, 9450, 9450, 8940, 9080],[1564444800000, 9030, 9150, 8820, 8920],[1564531200000, 8930, 8980, 8700, 8920],[1564617600000, 8920, 9180, 8780, 8900],[1564704000000, 8710, 8930, 8590, 8840],[1564963200000, 8840, 8840, 7990, 8000],[1565049600000, 7640, 8400, 7640, 7940],[1565136000000, 7970, 8650, 7500, 8600],[1565222400000, 8540, 9010, 8400, 9000],[1565308800000, 9020, 9030, 8770, 8970],[1565568000000, 9000, 9000, 8840, 8920],[1565654400000, 8800, 9360, 8790, 9160],[1565740800000, 9150, 9500, 9110, 9400],[1565913600000, 9250, 9250, 8800, 9020],[1566172800000, 9020, 9060, 8470, 8720],[1566259200000, 8670, 8800, 8660, 8760],[1566345600000, 8770, 9140, 8720, 9100],[1566432000000, 9050, 9300, 8720, 9150],[1566518400000, 9020, 9080, 8850, 8860],[1566777600000, 8810, 8940, 8650, 8930],[1566864000000, 8940, 9000, 8410, 8730],[1566950400000, 8770, 8770, 8240, 8390],[1567036800000, 8390, 8440, 8230, 8230],[1567123200000, 8300, 8340, 8180, 8230],[1567382400000, 8200, 8290, 7990, 8070],[1567468800000, 8060, 8150, 7960, 7970],[1567555200000, 7970, 8090, 7970, 8050],[1567641600000, 8070, 8110, 8020, 8080],[1567728000000, 8120, 8120, 7930, 8000],[1567987200000, 8000, 8190, 7980, 8000],[1568073600000, 8070, 8080, 7990, 8000],[1568160000000, 8060, 8180, 7880, 7900],[1568592000000, 7970, 8150, 7860, 8110],[1568678400000, 8130, 8430, 8090, 8280],[1568764800000, 8370, 8370, 8220, 8300],[1568851200000, 8300, 8350, 8090, 8180],[1568937600000, 8200, 8240, 8100, 8210],[1569196800000, 8200, 8680, 8050, 8340],[1569283200000, 8290, 8390, 8230, 8230],[1569369600000, 8230, 8470, 8110, 8240],[1569456000000, 8280, 8280, 7980, 8120],[1569542400000, 8100, 8130, 7880, 7980],[1569801600000, 7980, 8040, 7900, 7910],[1569888000000, 7880, 8180, 7860, 8100],[1569974400000, 8120, 8120, 7680, 7680],[1570147200000, 7690, 7830, 7670, 7800],[1570406400000, 7800, 7850, 7760, 7790],[1570492800000, 7790, 7840, 7770, 7830],[1570665600000, 7880, 7880, 7650, 7840],[1570752000000, 7850, 7900, 7820, 7850],[1571011200000, 7920, 7930, 7850, 7900],[1571097600000, 7890, 7930, 7680, 7800],[1571184000000, 7870, 8150, 7850, 8000],[1571270400000, 8010, 8120, 7920, 7940],[1571356800000, 7960, 7980, 7830, 7830],[1571616000000, 7830, 7870, 7790, 7800],[1571702400000, 7770, 7940, 7750, 7860],[1571788800000, 7940, 7940, 7740, 7860],[1571875200000, 7860, 8200, 7750, 7980],[1571961600000, 7980, 8130, 7900, 8000],[1572220800000, 8000, 8440, 8000, 8120],[1572307200000, 8080, 8110, 7780, 7860],[1572393600000, 7910, 7910, 7500, 7730],[1572480000000, 7780, 7920, 7600, 7830],[1572566400000, 7800, 7840, 7710, 7770],[1572825600000, 7750, 7880, 7750, 7850],[1572912000000, 7850, 8080, 7840, 8070],[1572998400000, 8020, 8520, 8020, 8370],[1573084800000, 8310, 8460, 8190, 8210],[1573171200000, 8220, 8460, 8150, 8370],[1573430400000, 8390, 8390, 8190, 8270],[1573516800000, 8270, 8440, 8230, 8250],[1573603200000, 8220, 8280, 8180, 8190],[1573689600000, 8220, 8380, 8160, 8310],[1573776000000, 8260, 8370, 8010, 8150],[1574035200000, 8170, 8260, 8110, 8200],[1574121600000, 8200, 8380, 8080, 8340],[1574208000000, 8290, 8350, 8110, 8270],[1574294400000, 8270, 8330, 8100, 8270],[1574380800000, 8320, 8330, 8100, 8100],[1574640000000, 8190, 8240, 8110, 8190],[1574726400000, 8240, 8250, 8100, 8230],[1574812800000, 8230, 8240, 8090, 8210],[1574899200000, 8200, 8320, 8190, 8260],[1574985600000, 8260, 8290, 8140, 8190],[1575244800000, 8190, 8230, 8100, 8110],[1575331200000, 8100, 8120, 7970, 8040],[1575417600000, 8070, 8080, 7950, 8010],[1575504000000, 8010, 8250, 7750, 7760],[1575590400000, 7800, 7850, 7680, 7810],[1575849600000, 7810, 7860, 7500, 7580],[1575936000000, 7620, 7660, 7540, 7600],[1576022400000, 7620, 7850, 7550, 7700],[1576108800000, 7750, 7910, 7700, 7800],[1576195200000, 7800, 8180, 7710, 7860],[1576454400000, 7860, 8250, 7860, 8010],[1576540800000, 8100, 8260, 7960, 8170],[1576627200000, 8230, 8230, 7980, 8050],[1576713600000, 8030, 8150, 8000, 8130],[1576800000000, 8140, 8210, 8090, 8140],[1577059200000, 8120, 8240, 8000, 8150],[1577145600000, 8140, 8180, 7990, 8150],[1577318400000, 8160, 8160, 8000, 8000],[1577404800000, 8010, 8150, 7980, 8140],[1577664000000, 8110, 8420, 8110, 8310],[1577923200000, 8340, 8400, 8290, 8400],[1578009600000, 8400, 8450, 8290, 8360],[1578268800000, 8290, 8330, 8120, 8180],[1578355200000, 8200, 8280, 8090, 8160],[1578441600000, 8170, 8170, 7830, 7930],[1578528000000, 8020, 8060, 7900, 7900],[1578614400000, 7970, 8140, 7880, 8100],[1578873600000, 8140, 8250, 8070, 8220],[1578960000000, 8240, 8240, 8070, 8140],[1579046400000, 8160, 8170, 8000, 8090],[1579132800000, 8140, 8140, 8030, 8030],[1579219200000, 8040, 8130, 8030, 8110],[1579478400000, 8140, 8340, 8100, 8240],[1579564800000, 8250, 8280, 8080, 8130],[1579651200000, 8160, 8470, 8160, 8290],[1579737600000, 8390, 8410, 8290, 8350],[1580169600000, 8400, 8960, 8290, 8590],[1580256000000, 8640, 8690, 8110, 8150],[1580342400000, 8180, 8260, 7990, 8000],[1580428800000, 8030, 8110, 7880, 7910],[1580688000000, 7790, 7840, 7370, 7530],[1580774400000, 7550, 7640, 7530, 7600],[1580860800000, 7640, 7770, 7630, 7680],[1580947200000, 7750, 7890, 7690, 7750],[1581033600000, 7750, 7790, 7580, 7670],[1581292800000, 7680, 7690, 7490, 7620],[1581379200000, 7650, 7680, 7570, 7650],[1581465600000, 7650, 7690, 7540, 7630],[1581552000000, 7660, 7670, 7540, 7580],[1581638400000, 7600, 7700, 7550, 7590],[1581897600000, 7600, 7610, 7510, 7550],[1581984000000, 7520, 7670, 7380, 7390],[1582070400000, 7420, 7480, 7390, 7450],[1582156800000, 7520, 7540, 7260, 7330],[1582243200000, 7330, 7350, 7090, 7180],[1582502400000, 6960, 7090, 6750, 6800],[1582588800000, 6800, 7040, 6590, 7020],[1582675200000, 6980, 7170, 6840, 7030],[1582761600000, 7090, 7340, 6990, 7030],[1582848000000, 6860, 7030, 6670, 6830],[1583107200000, 6740, 6900, 6710, 6830],[1583193600000, 6950, 7040, 6860, 6970],[1583280000000, 6960, 7100, 6920, 7030],[1583366400000, 7090, 7300, 7070, 7230],[1583452800000, 7190, 7330, 7120, 7250],[1583712000000, 7230, 7230, 7030, 7060],[1583798400000, 6920, 7070, 6870, 6940],[1583884800000, 6980, 7110, 6730, 6770],[1583971200000, 6760, 6760, 6300, 6420],[1584057600000, 5960, 6150, 5560, 5870],[1584316800000, 5870, 6050, 5700, 5710],[1584403200000, 5250, 5730, 5250, 5570],[1584489600000, 5630, 5780, 5420, 5420],[1584576000000, 5630, 6450, 4800, 4985],[1584662400000, 5010, 5290, 5000, 5190],[1584921600000, 4900, 5170, 4850, 5020],[1585008000000, 5170, 5570, 5100, 5330],[1585094400000, 5510, 5670, 5440, 5630],[1585180800000, 5720, 6050, 5540, 5900],[1585267200000, 6300, 6300, 5900, 6130],[1585526400000, 6130, 6350, 6000, 6350],[1585612800000, 6400, 6650, 6360, 6550],[1585699200000, 6610, 6780, 6500, 6580],[1585785600000, 6520, 6680, 6420, 6610],[1585872000000, 6680, 6930, 6580, 6830],[1586131200000, 6930, 7220, 6930, 7190],[1586217600000, 7300, 7450, 6930, 7430],[1586304000000, 7430, 7700, 7310, 7650],[1586390400000, 7750, 7750, 7530, 7650],[1586476800000, 7700, 7860, 7310, 7730],[1586736000000, 7730, 7750, 7490, 7490],[1586822400000, 7590, 7590, 7420, 7500],[1586995200000, 7420, 7630, 7330, 7630],[1587081600000, 7650, 7730, 7540, 7720],[1587340800000, 8700, 8700, 7850, 8050],[1587427200000, 8240, 10450, 8220, 10450],[1587513600000, 11950, 12450, 10650, 10750],[1587600000000, 10800, 11500, 10600, 10900],[1587686400000, 10800, 10800, 10150, 10150],[1587945600000, 10100, 10550, 10100, 10450],[1588032000000, 10950, 12350, 10950, 11900],[1588118400000, 11650, 11650, 10900, 11250],[1588550400000, 10650, 10800, 10250, 10600],[1588723200000, 10850, 10850, 10200, 10600],[1588809600000, 10300, 10650, 10250, 10400],[1588896000000, 10750, 11100, 10350, 10500],[1589155200000, 10600, 10600, 10150, 10300],[1589241600000, 10350, 10650, 10150, 10600],[1589328000000, 10650, 10650, 10300, 10350],[1589414400000, 10250, 10900, 10100, 10700],[1589500800000, 10850, 10950, 10450, 10550],[1589760000000, 10550, 10800, 10200, 10700],[1589846400000, 10500, 10500, 9910, 10050],[1589932800000, 10100, 10200, 9990, 10050],[1590019200000, 10050, 10150, 9710, 9710],[1590105600000, 9760, 10250, 9760, 10250],[1590364800000, 10250, 10450, 10000, 10300],[1590451200000, 10400, 10400, 10050, 10150],[1590537600000, 10650, 12450, 10600, 11300],[1590624000000, 11350, 11350, 10450, 10800],[1590710400000, 10900, 12150, 10850, 11550],[1590969600000, 11750, 11900, 11450, 11600],[1591056000000, 11600, 11800, 10950, 11750],[1591142400000, 12100, 12100, 11450, 11600],[1591228800000, 11850, 11850, 11250, 11350],[1591315200000, 12200, 14750, 11900, 14750],[1591574400000, 14950, 16750, 14550, 15400],[1591660800000, 15400, 17500, 14850, 16100],[1591747200000, 16000, 16750, 15750, 16100],[1591833600000, 16050, 16100, 15150, 15200],[1591920000000, 14650, 15800, 14500, 15350],[1592179200000, 15600, 16450, 14100, 14650],[1592265600000, 15200, 16950, 14950, 15950],[1592352000000, 16900, 17300, 15400, 15750],[1592438400000, 15850, 16050, 15450, 15950],[1592524800000, 16050, 16050, 15050, 15700],[1592784000000, 15550, 16200, 15500, 16000],[1592870400000, 16100, 18100, 15700, 16850],[1592956800000, 17050, 17950, 16700, 16900],[1593043200000, 16700, 17850, 16500, 17500],[1593129600000, 17750, 17800, 16250, 17000],[1593388800000, 16800, 17300, 16450, 16700],[1593475200000, 17150, 17150, 15600, 16250],[1593561600000, 16100, 16600, 15150, 15200],[1593648000000, 15200, 15550, 14400, 15150],[1593734400000, 15050, 15250, 14750, 15050],[1593993600000, 15050, 15300, 14700, 15150],[1594080000000, 15150, 15250, 14850, 15100],[1594166400000, 15050, 15550, 14900, 15200],[1594252800000, 15450, 16050, 15300, 16050],[1594339200000, 16350, 16700, 15900, 16350],[1594598400000, 16500, 16600, 15950, 16000],[1594684800000, 16000, 17000, 16000, 16800],[1594771200000, 16700, 16700, 15700, 15700],[1594857600000, 15750, 15850, 15050, 15200],[1594944000000, 15050, 16050, 15050, 15550],[1595203200000, 15750, 16400, 15650, 16300],[1595289600000, 16150, 17350, 16100, 16750],[1595376000000, 16950, 21750, 16450, 21650],[1595462400000, 20650, 27000, 20050, 23700],[1595548800000, 24550, 25900, 23050, 23050],[1595808000000, 23050, 24300, 20750, 23000],[1595894400000, 23000, 24450, 23000, 23450],[1595980800000, 23500, 24650, 23450, 24050],[1596067200000, 24400, 24450, 22100, 23300],[1596153600000, 23450, 24850, 22950, 24400],[1596412800000, 24700, 25600, 23650, 24050],[1596499200000, 24300, 26000, 23450, 26000],[1596585600000, 25500, 31550, 25100, 28100],[1596672000000, 27750, 29650, 27600, 28350],[1596758400000, 29250, 29800, 28450, 29350],[1597017600000, 29650, 31300, 29150, 30300],[1597104000000, 30350, 34450, 23750, 24400],[1597190400000, 25300, 26700, 24250, 24950],[1597276800000, 24750, 25150, 21700, 22550],[1597363200000, 22400, 22400, 20700, 21200],[1597708800000, 21350, 25000, 21350, 22000],[1597795200000, 22800, 23900, 22250, 22900],[1597881600000, 23600, 24200, 22450, 22850],[1597968000000, 23000, 23200, 21500, 21650],[1598227200000, 21700, 24050, 21100, 23100],[1598313600000, 22900, 23550, 22750, 23250],[1598400000000, 23300, 24200, 23000, 23750],[1598486400000, 23900, 24700, 23300, 23750],[1598572800000, 23750, 23900, 23000, 23050],[1598832000000, 23200, 24000, 23000, 23450],[1598918400000, 23500, 23900, 23350, 23650],[1599004800000, 23850, 25250, 23450, 24950],[1599091200000, 25500, 26350, 25000, 25350],[1599177600000, 24150, 25450, 24100, 25200],[1599436800000, 25600, 25700, 25100, 25550],[1599523200000, 25650, 28250, 22300, 23650],[1599609600000, 23900, 25150, 22750, 24550],[1599696000000, 25500, 26100, 24700, 25950],[1599782400000, 28200, 29600, 26150, 26750],[1600041600000, 26850, 26850, 25450, 26300],[1600128000000, 26200, 26950, 25300, 25400],[1600214400000, 24850, 25700, 24700, 25050],[1600300800000, 24800, 25850, 24700, 25300],[1600387200000, 25000, 25450, 24750, 25050],[1600646400000, 25300, 26200, 24600, 25050],[1600732800000, 24600, 25050, 23500, 24050],[1600819200000, 24150, 24400, 22500, 23150],[1600905600000, 22450, 22800, 20950, 21100],[1600992000000, 21100, 22750, 20600, 22100],[1601251200000, 22100, 22500, 21500, 22000],[1601337600000, 22000, 22050, 20700, 21850],[1601856000000, 22200, 24350, 21700, 24100],[1601942400000, 24100, 24350, 23350, 23750],[1602028800000, 23500, 23550, 23100, 23500],[1602115200000, 23600, 24850, 23600, 24150],[1602460800000, 24500, 24950, 22950, 24000],[1602547200000, 24200, 24550, 23900, 24300],[1602633600000, 23900, 24200, 23600, 23850],[1602720000000, 23850, 23850, 22450, 22750],[1602806400000, 22750, 22950, 20750, 21550],[1603065600000, 21350, 22900, 20750, 21300],[1603152000000, 20850, 21600, 19850, 20300],[1603238400000, 20200, 20500, 19850, 20100],[1603324800000, 19850, 20050, 19000, 19200],[1603411200000, 19500, 20600, 19350, 19800],[1603670400000, 19500, 19750, 17000, 17100],[1603756800000, 16850, 18150, 15900, 17500],[1603843200000, 17250, 19400, 17250, 18950],[1603929600000, 18400, 19300, 18300, 19150],[1604016000000, 19500, 19500, 17700, 17900],[1604275200000, 17850, 18600, 17650, 18150],[1604361600000, 18150, 18700, 17450, 18400],[1604448000000, 18750, 18750, 17950, 18250],[1604534400000, 18300, 18900, 18250, 18750],[1604620800000, 19000, 19250, 18000, 18300],[1604880000000, 18550, 19100, 18300, 18950],[1604966400000, 19950, 20000, 18000, 18100],[1605052800000, 18250, 18350, 16700, 17700],[1605139200000, 17500, 18250, 17500, 17950],[1605225600000, 17950, 18800, 17750, 18450],[1605484800000, 18950, 19300, 18550, 18750],[1605571200000, 18850, 18850, 17800, 17950],[1605657600000, 17800, 18350, 17550, 18050],[1605744000000, 18200, 18850, 18000, 18600],[1605830400000, 18700, 21350, 18400, 19300],[1606089600000, 19400, 19400, 18600, 18600],[1606176000000, 22150, 24150, 21000, 21000],[1606262400000, 21500, 21500, 19700, 19850],[1606348800000, 19900, 20250, 19300, 19750],[1606435200000, 19800, 20050, 19500, 19500],[1606694400000, 19550, 19650, 19050, 19150],[1606780800000, 19150, 19900, 19050, 19800],[1606867200000, 20050, 20350, 19400, 19750],[1606953600000, 19750, 19900, 19000, 19150],[1607040000000, 19500, 19600, 18950, 19000],[1607299200000, 19050, 19450, 18850, 19050],[1607385600000, 19200, 19600, 18600, 18600],[1607472000000, 18800, 18850, 17900, 18000],[1607558400000, 17750, 18200, 17650, 18000],[1607644800000, 18050, 18950, 17850, 18450],[1607904000000, 18650, 19850, 18450, 19550],[1607990400000, 19700, 19800, 19050, 19700],[1608076800000, 19600, 19600, 18800, 19200],[1608163200000, 19000, 19100, 18300, 18900],[1608249600000, 19200, 21900, 19150, 20450],[1608508800000, 22000, 24350, 21900, 23450],[1608595200000, 23950, 25500, 22000, 23900],[1608681600000, 23500, 24300, 20450, 20450],[1608768000000, 20300, 20500, 19500, 20000],[1609113600000, 20000, 20050, 18600, 18650],[1609200000000, 18750, 19400, 18750, 19150],[1609286400000, 19100, 19800, 18800, 19650],[1609718400000, 19750, 19900, 18850, 19100],[1609804800000, 19000, 19500, 18650, 19400],[1609891200000, 19350, 19850, 19000, 19700],[1609977600000, 20000, 20100, 19500, 19700],[1610064000000, 19850, 19900, 18950, 19100],[1610323200000, 19000, 19100, 17850, 18100],[1610409600000, 18000, 18500, 18000, 18100],[1610496000000, 18000, 18350, 17900, 18000],[1610582400000, 18100, 18850, 18000, 18450],[1610668800000, 18600, 18700, 18000, 18050],[1610928000000, 18000, 18050, 17050, 17050],[1611014400000, 16900, 17200, 15900, 16550],[1611100800000, 16550, 17250, 16550, 16900],[1611187200000, 17100, 17200, 16650, 16700],[1611273600000, 16600, 16650, 16250, 16400],[1611532800000, 16450, 17000, 16400, 17000],[1611619200000, 17150, 17150, 16500, 16700],[1611705600000, 16700, 16850, 16300, 16350],[1611792000000, 16200, 16200, 15750, 15750],[1611878400000, 15900, 16000, 14750, 15050],[1612137600000, 14800, 15700, 14800, 15600],[1612224000000, 15650, 16050, 15550, 15800],[1612310400000, 15850, 15950, 15500, 15700],[1612396800000, 15700, 15750, 15250, 15300],[1612483200000, 15450, 15750, 15200, 15500],[1612742400000, 15800, 15800, 15300, 15400],[1612828800000, 15700, 15700, 15350, 15400],[1612915200000, 15050, 15650, 15050, 15350],[1613347200000, 15450, 15800, 15150, 15700],[1613433600000, 16000, 16150, 15600, 15700],[1613520000000, 16700, 16850, 15750, 15800],[1613606400000, 15650, 16050, 15500, 15650],[1613692800000, 15650, 15700, 15100, 15400],[1613952000000, 15300, 15500, 15100, 15150],[1614038400000, 15000, 15100, 14400, 14400],[1614124800000, 14350, 14600, 13750, 13750],[1614211200000, 13900, 14450, 13800, 14450],[1614297600000, 13950, 14500, 13800, 14500],[1614643200000, 14750, 14750, 14100, 14300],[1614729600000, 14150, 14500, 14100, 14300],[1614816000000, 14200, 14250, 13600, 13750],[1614902400000, 13600, 13950, 13400, 13950],[1615161600000, 15200, 17200, 14400, 14400],[1615248000000, 14900, 15300, 14050, 14750],[1615334400000, 14800, 14850, 14200, 14200],[1615420800000, 14100, 14400, 14000, 14000],[1615507200000, 14150, 14300, 14000, 14300],[1615766400000, 14250, 14600, 14100, 14350],[1615852800000, 14350, 14850, 14350, 14700],[1615939200000, 14900, 15150, 14700, 15000],[1616025600000, 15100, 15300, 14900, 14900],[1616112000000, 14700, 15000, 14600, 14900],[1616371200000, 15050, 15050, 14600, 14650],[1616457600000, 14750, 14850, 14550, 14650],[1616544000000, 14550, 14650, 14300, 14300],[1616630400000, 14350, 14400, 14100, 14200],[1616716800000, 14250, 14350, 14100, 14200],[1616976000000, 14300, 14350, 14050, 14200],[1617062400000, 14300, 14400, 14100, 14150],[1617148800000, 14150, 14250, 14000, 14250],[1617235200000, 14200, 14300, 14050, 14050],[1617321600000, 14300, 14750, 14250, 14450],[1617580800000, 14600, 14600, 14250, 14350],[1617667200000, 14350, 14400, 14100, 14100],[1617753600000, 14200, 14450, 14100, 14400],[1617840000000, 14350, 15150, 14350, 14950],[1617926400000, 15000, 15150, 14700, 15050],[1618185600000, 15150, 15550, 15050, 15500],[1618272000000, 15500, 15550, 15250, 15300],[1618358400000, 15250, 15950, 15100, 15800],[1618444800000, 15850, 15900, 15450, 15600],[1618531200000, 15600, 15650, 15350, 15400],[1618790400000, 15300, 15600, 15200, 15450],[1618876800000, 15650, 15650, 15350, 15450],[1618963200000, 15450, 16200, 15400, 15600],[1619049600000, 15750, 15800, 15400, 15500],[1619136000000, 15500, 16050, 15250, 15600],[1619395200000, 15750, 16350, 15700, 16250],[1619481600000, 16300, 16500, 16050, 16100],[1619568000000, 16300, 16300, 15650, 15800],[1619654400000, 15750, 15800, 15250, 15350],[1619740800000, 15400, 15600, 15200, 15350],[1620000000000, 15200, 15450, 14950, 14950],[1620086400000, 14950, 15050, 14200, 14550],[1620259200000, 14600, 14800, 14500, 14600],[1620345600000, 14700, 14900, 14550, 14850],[1620604800000, 15050, 15400, 14850, 15400],[1620691200000, 15350, 15400, 15050, 15300],[1620777600000, 15300, 15400, 14750, 14900],[1620864000000, 14550, 15000, 14450, 14550],[1620950400000, 14750, 14750, 14600, 14700],[1621209600000, 14800, 15050, 14700, 15000],[1621296000000, 15000, 15150, 14850, 14950],[1621468800000, 15200, 15200, 14700, 14800],[1621555200000, 14850, 14900, 14650, 14650],[1621814400000, 14800, 14800, 14300, 14400],[1621900800000, 14400, 14500, 14250, 14450],[1621987200000, 14350, 14600, 14300, 14500],[1622073600000, 14500, 14650, 14400, 14600],[1622160000000, 14650, 14750, 14450, 14500],[1622419200000, 14550, 14700, 14500, 14650],[1622505600000, 14700, 14700, 14450, 14600],[1622592000000, 14700, 14700, 14450, 14500],[1622678400000, 14550, 14650, 14450, 14600],[1622764800000, 14600, 14800, 14550, 14700],[1623024000000, 14800, 15550, 14750, 15150],[1623110400000, 15350, 15500, 15000, 15050],[1623196800000, 15000, 15100, 14700, 14700],[1623283200000, 14600, 15100, 14600, 15100],[1623369600000, 15150, 15200, 14750, 14900],[1623628800000, 14900, 14950, 14650, 14650],[1623715200000, 14800, 14800, 14550, 14600],[1623801600000, 14600, 14650, 14500, 14550],[1623888000000, 14600, 14600, 14400, 14450],[1623974400000, 14500, 14550, 14350, 14450],[1624233600000, 14400, 14600, 14350, 14500],[1624320000000, 14500, 14550, 14400, 14450],[1624406400000, 14450, 14700, 14400, 14550],[1624492800000, 14700, 16150, 14700, 15400],[1624579200000, 15550, 15600, 15200, 15400],[1624838400000, 15600, 15800, 15400, 15750],[1624924800000, 15800, 16100, 15600, 15650],[1625011200000, 15650, 15800, 15450, 15650],[1625097600000, 15700, 15900, 15450, 15800],[1625184000000, 15900, 15950, 15600, 15750],[1625443200000, 15850, 16350, 15800, 16000],[1625529600000, 16100, 16200, 15600, 15700],[1625616000000, 15750, 16350, 15550, 16100],[1625702400000, 16100, 16150, 15300, 15350],[1625788800000, 15200, 15250, 14800, 14950],[1626048000000, 15000, 15150, 14900, 15050],[1626134400000, 15050, 15100, 14850, 14850],[1626220800000, 14950, 14950, 14700, 14750],[1626307200000, 15000, 15000, 14750, 14850],[1626393600000, 14850, 14950, 14650, 14800],[1626652800000, 14800, 15200, 14700, 15100],[1626739200000, 14950, 15050, 14800, 14900],[1626825600000, 15050, 15050, 14750, 14800],[1626912000000, 14750, 14850, 14650, 14750],[1626998400000, 14750, 14900, 14500, 14600],[1627257600000, 14700, 14700, 14350, 14400],[1627344000000, 14500, 14550, 14350, 14400],[1627430400000, 14300, 14600, 14300, 14450],[1627516800000, 14500, 14650, 14500, 14600],[1627603200000, 14650, 14750, 14400, 14650],[1627862400000, 14700, 14800, 14550, 14650],[1627948800000, 14650, 15350, 14550, 15300],[1628035200000, 15200, 15300, 15050, 15200],[1628121600000, 15200, 15350, 15000, 15100],[1628208000000, 15100, 15150, 14800, 14900],[1628467200000, 14900, 15600, 14900, 15250],[1628553600000, 15400, 15500, 14900, 14950],[1628640000000, 15100, 15250, 14800, 14850],[1628726400000, 14900, 15500, 14850, 15250],[1628812800000, 15400, 15500, 14800, 15050],[1629158400000, 15250, 15250, 14200, 14400],[1629244800000, 14150, 15900, 14150, 15150],[1629331200000, 14950, 15050, 14400, 14450],[1629417600000, 14500, 15100, 14350, 14600],[1629676800000, 14600, 14950, 14450, 14950],[1629763200000, 14950, 15400, 14900, 15300],[1629849600000, 15300, 15350, 14900, 15250],[1629936000000, 15150, 15250, 14900, 14950],[1630022400000, 14950, 15250, 14800, 14950],[1630281600000, 15100, 15200, 14900, 15000],[1630368000000, 15000, 15000, 14600, 14850],[1630454400000, 14800, 14850, 14700, 14750],[1630540800000, 14800, 15200, 14750, 15200],[1630627200000, 15200, 15350, 15100, 15100],[1630886400000, 15200, 16200, 15000, 15900],[1630972800000, 15800, 16000, 15400, 15500],[1631059200000, 15650, 15650, 15100, 15150],[1631145600000, 15100, 15250, 14750, 14750],[1631232000000, 14950, 15350, 14800, 15150],[1631491200000, 15100, 15150, 14800, 14800],[1631577600000, 14900, 15200, 14850, 15150],[1631664000000, 15150, 15350, 15050, 15100],[1631750400000, 15200, 15400, 15100, 15350],[1631836800000, 15400, 15500, 15050, 15050],[1632355200000, 14850, 18600, 14650, 17800],[1632441600000, 17250, 17950, 16800, 17950],[1632700800000, 17650, 18600, 17050, 18050],[1632787200000, 17650, 19600, 16450, 16500],[1632873600000, 16100, 19200, 15950, 18550],[1632960000000, 19600, 21450, 17550, 17850],[1633046400000, 18100, 20100, 18000, 19600],[1633392000000, 19050, 19550, 16650, 16850],[1633478400000, 17400, 21550, 16650, 17750],[1633564800000, 17400, 20800, 17350, 20050],[1633651200000, 20050, 20950, 18800, 19350],[1633996800000, 19650, 20150, 18300, 18750],[1634083200000, 18600, 19200, 17900, 18300],[1634169600000, 18300, 19550, 18200, 19000],[1634256000000, 19200, 19300, 18150, 18150],[1634515200000, 18100, 18500, 17650, 17800],[1634601600000, 17900, 18150, 16900, 17250],[1634688000000, 17300, 17700, 17100, 17400],[1634774400000, 17400, 17500, 16200, 16350],[1634860800000, 16400, 17300, 16400, 16650],[1635120000000, 16700, 16750, 16050, 16150],[1635206400000, 16250, 16900, 16200, 16400],[1635292800000, 16550, 16950, 16400, 16400],[1635379200000, 16500, 17400, 16300, 16950],[1635465600000, 17000, 17050, 16250, 16350],[1635724800000, 16600, 16750, 15650, 15700],[1635811200000, 15650, 15950, 15500, 15650],[1635897600000, 15700, 15800, 15250, 15400],[1635984000000, 15500, 15600, 14850, 15100],[1636070400000, 15100, 15150, 14700, 14850],[1636329600000, 16050, 16150, 14850, 14900],[1636416000000, 14800, 15000, 14200, 14350],[1636502400000, 14350, 14600, 14250, 14300],[1636588800000, 14200, 14300, 13400, 13650],[1636675200000, 13750, 14100, 13700, 13900],[1636934400000, 14050, 14600, 14000, 14550],[1637020800000, 14500, 14600, 14250, 14500],[1637107200000, 14550, 14550, 13850, 13900],[1637193600000, 13900, 14100, 13700, 14050],[1637280000000, 14000, 14050, 13700, 13800],[1637539200000, 13900, 14100, 13750, 13900],[1637625600000, 13900, 14100, 13800, 13800],[1637712000000, 13900, 13900, 13450, 13450],[1637798400000, 13550, 13650, 13400, 13450],[1637884800000, 13500, 14100, 13450, 13900],[1638144000000, 13800, 14400, 13650, 13850],[1638230400000, 13850, 16600, 13850, 15200],[1638316800000, 15450, 15900, 14600, 14900],[1638403200000, 15450, 15700, 14800, 14800],[1638489600000, 14800, 15200, 14550, 14950],[1638748800000, 15050, 15200, 14300, 14400],[1638835200000, 14500, 14800, 14100, 14700],[1638921600000, 14650, 15050, 14600, 14750],[1639008000000, 14800, 15100, 14450, 14500],[1639094400000, 14500, 14750, 14400, 14500],[1639353600000, 14550, 14650, 14350, 14600],[1639440000000, 14650, 15400, 14600, 15150],[1639526400000, 15150, 16500, 15000, 15700],[1639612800000, 15850, 15850, 15200, 15300],[1639699200000, 15400, 15950, 15300, 15450],[1639958400000, 15600, 15700, 14750, 14750],[1640044800000, 14850, 14900, 14400, 14400],[1640131200000, 14450, 16150, 14200, 14900],[1640217600000, 15150, 15500, 14550, 14650],[1640304000000, 14650, 14800, 14450, 14450],[1640563200000, 14550, 15350, 14550, 14900],[1640649600000, 14850, 14900, 14500, 14500],[1640736000000, 14550, 14950, 14500, 14750],[1640822400000, 14750, 14800, 14500, 14600],[1641168000000, 14800, 15000, 14600, 14950],[1641254400000, 15000, 15000, 14750, 14900],[1641340800000, 14900, 14900, 14500, 14550],[1641427200000, 14400, 14600, 14200, 14250],[1641513600000, 14200, 14650, 14200, 14600],[1641772800000, 14500, 14650, 14300, 14600],[1641859200000, 14600, 14700, 14300, 14350],[1641945600000, 14400, 14650, 14350, 14350],[1642032000000, 14400, 14450, 14100, 14100],[1642118400000, 14050, 14100, 13650, 13850],[1642377600000, 13700, 13850, 13250, 13350],[1642464000000, 13250, 13500, 12800, 13050],[1642550400000, 12650, 13000, 12450, 12600],[1642636800000, 12550, 12850, 12550, 12800],[1642723200000, 12750, 13050, 12700, 12800],[1642982400000, 12800, 13050, 12450, 12550],[1643068800000, 12450, 12600, 11650, 11700],[1643155200000, 11550, 12200, 11550, 11900],[1643241600000, 12050, 12150, 11250, 11250],[1643328000000, 11250, 11800, 11250, 11700],[1643846400000, 12000, 12500, 11950, 12300],[1643932800000, 12200, 12450, 12050, 12450],[1644192000000, 12550, 12700, 12150, 12700],[1644278400000, 12800, 12800, 12200, 12300],[1644364800000, 12500, 13650, 12400, 13150],[1644451200000, 13250, 13750, 13000, 13200],[1644537600000, 13150, 13200, 12350, 12400],[1644796800000, 12150, 12200, 11700, 11850],[1644883200000, 11850, 12500, 11650, 11950],[1644969600000, 12300, 12600, 12250, 12450],[1645056000000, 12550, 12850, 12200, 12450],[1645142400000, 12250, 12500, 12150, 12400],[1645401600000, 12350, 13050, 12300, 12900],[1645488000000, 12500, 12950, 12500, 12750],[1645574400000, 12800, 13000, 12650, 12650],[1645660800000, 12500, 12700, 12150, 12150],[1645747200000, 12350, 12600, 12200, 12450],[1646006400000, 12250, 12800, 12250, 12650],[1646179200000, 12650, 12900, 12600, 12800],[1646265600000, 12850, 13100, 12700, 12900],[1646352000000, 12850, 13000, 12750, 12950],[1646611200000, 12950, 13200, 12750, 12900],[1646697600000, 12700, 13050, 12600, 12850],[1646870400000, 13000, 13050, 12850, 12900],[1646956800000, 12900, 13050, 12750, 12850],[1647216000000, 12850, 12850, 12500, 12550],[1647302400000, 12500, 12950, 12350, 12850],[1647388800000, 13000, 13250, 12850, 13150],[1647475200000, 13350, 14300, 13200, 13550],[1647561600000, 14050, 15350, 13600, 14350],[1647820800000, 14450, 14550, 13800, 13850],[1647907200000, 13950, 14200, 13550, 13650],[1647993600000, 13800, 14100, 13600, 13650],[1648080000000, 13600, 13700, 13500, 13600],[1648166400000, 13700, 13950, 13500, 13900],[1648425600000, 13900, 13900, 13600, 13750],[1648512000000, 13850, 14000, 13650, 13750],[1648598400000, 13800, 14200, 13750, 13900],[1648684800000, 13950, 13950, 13600, 13650],[1648771200000, 13600, 13650, 13400, 13400],[1649030400000, 13400, 13500, 13250, 13350],[1649116800000, 13450, 13450, 13300, 13300],[1649203200000, 13250, 13400, 13100, 13150],[1649289600000, 13050, 13350, 13050, 13150],[1649376000000, 13200, 13450, 13100, 13150],[1649635200000, 13200, 13250, 13000, 13050],[1649721600000, 12950, 13050, 12700, 12800],[1649808000000, 12750, 13050, 12600, 12950],[1649894400000, 12900, 13250, 12900, 13200],[1649980800000, 13150, 13400, 13050, 13250],[1650240000000, 13200, 13350, 13050, 13200],[1650326400000, 13150, 13350, 13100, 13200],[1650412800000, 13250, 13250, 12950, 13050],[1650499200000, 12950, 13150, 12900, 12950],[1650585600000, 12950, 12950, 12800, 12900],[1650844800000, 12750, 12750, 12450, 12500],[1650931200000, 12550, 12650, 12500, 12600],[1651017600000, 12300, 12550, 12300, 12400],[1651104000000, 12450, 12600, 12350, 12600],[1651190400000, 12650, 12800, 12500, 12700],[1651449600000, 12450, 12700, 12450, 12600],[1651536000000, 12650, 12800, 12550, 12700],[1651622400000, 12650, 12750, 12400, 12500],[1651795200000, 12400, 12400, 12100, 12200],[1652054400000, 12000, 12100, 11600, 11750],[1652140800000, 11400, 11750, 11250, 11700],[1652227200000, 11600, 11950, 11600, 11900],[1652313600000, 11700, 11850, 11350, 11450],[1652400000000, 11400, 11750, 11400, 11750],[1652659200000, 11800, 12050, 11750, 11850],[1652745600000, 11850, 12000, 11850, 11900],[1652832000000, 11950, 12250, 11700, 12000],[1652918400000, 11750, 11950, 11600, 11900],[1653004800000, 11900, 12000, 11800, 11850],[1653264000000, 11900, 12200, 11800, 12100],[1653350400000, 12100, 12100, 11800, 11850],[1653436800000, 11850, 12000, 11750, 11800],[1653523200000, 11800, 12050, 11800, 11850],[1653609600000, 11950, 12000, 11800, 11850],[1653868800000, 11950, 12150, 11900, 12050],[1653955200000, 12050, 12100, 11850, 11900],[1654128000000, 11850, 12000, 11850, 11900],[1654214400000, 11950, 12000, 11850, 11900],[1654560000000, 11900, 11900, 11500, 11550],[1654646400000, 11650, 11700, 11450, 11500],[1654732800000, 11450, 11500, 11200, 11350],[1654819200000, 11250, 11350, 10900, 11050],[1655078400000, 10700, 10800, 10450, 10450],[1655164800000, 10100, 10350, 10000, 10100],[1655251200000, 10000, 10150, 9880, 9960],[1655337600000, 10000, 10150, 9600, 9600],[1655424000000, 9360, 9920, 9350, 9890],[1655683200000, 9850, 9910, 9320, 9410],[1655769600000, 9360, 9600, 9360, 9570],[1655856000000, 9570, 9880, 9570, 9650],[1655942400000, 9660, 9720, 9050, 9050],[1656028800000, 8920, 9420, 8920, 9350],[1656288000000, 9420, 9850, 9410, 9670],[1656374400000, 9670, 9820, 9570, 9820],[1656460800000, 9650, 9870, 9650, 9840],[1656547200000, 9790, 9880, 9680, 9690],[1656633600000, 9770, 9800, 9500, 9590],[1656892800000, 9590, 9590, 9250, 9360],[1656979200000, 9420, 9880, 9420, 9850],[1657065600000, 9850, 10700, 9850, 10350],[1657152000000, 10400, 10600, 10300, 10500],[1657238400000, 10550, 10700, 10400, 10500],[1657497600000, 10500, 11100, 10500, 10900],[1657584000000, 11050, 11300, 10800, 10950],[1657670400000, 10950, 11200, 10650, 10950],[1657756800000, 10950, 11050, 10700, 10950],[1657843200000, 11000, 11150, 10800, 11000],[1658102400000, 11100, 11300, 10900, 11000],[1658188800000, 11050, 11300, 11050, 11100],[1658275200000, 11250, 11300, 11050, 11150],[1658361600000, 11200, 11350, 11000, 11050],[1658448000000, 11050, 11150, 10750, 10800],[1658707200000, 10800, 11150, 10500, 10750],[1658793600000, 10700, 10850, 10650, 10750],[1658880000000, 10750, 10850, 10650, 10750],[1658966400000, 10850, 10850, 10600, 10750],[1659052800000, 10800, 10800, 10450, 10550],[1659312000000, 10550, 10600, 10350, 10400],[1659398400000, 10350, 10500, 10150, 10250],[1659484800000, 10300, 10700, 10250, 10600],[1659571200000, 10650, 10900, 10550, 10650],[1659657600000, 10650, 10850, 10600, 10800],[1659916800000, 10800, 10900, 10700, 10800],[1660003200000, 10850, 10850, 10650, 10700],[1660089600000, 10650, 10700, 10400, 10500],[1660176000000, 10550, 10700, 10550, 10700],[1660262400000, 10700, 10700, 10500, 10600],[1660608000000, 10700, 10750, 10600, 10650],[1660694400000, 10700, 10750, 10500, 10600],[1660780800000, 10650, 10650, 10250, 10350],[1660867200000, 10350, 10400, 10150, 10200],[1661126400000, 10100, 10200, 10000, 10100],[1661212800000, 9980, 10100, 9910, 9990],[1661299200000, 9960, 10100, 9940, 10050],[1661385600000, 10050, 10250, 10050, 10200],[1661472000000, 10300, 10300, 10100, 10150],[1661731200000, 9940, 9940, 9830, 9850],[1661817600000, 9900, 9960, 9860, 9950],[1661904000000, 10000, 10050, 9840, 10050],[1661990400000, 9990, 9990, 9740, 9740],[1662076800000, 9800, 9850, 9650, 9650],[1662336000000, 9610, 9700, 9480, 9500],[1662422400000, 9460, 9600, 9460, 9510],[1662508800000, 9510, 9510, 9270, 9280],[1662595200000, 9420, 9420, 9280, 9290],[1663027200000, 9340, 9680, 9340, 9610],[1663113600000, 9400, 9500, 9310, 9480],[1663200000000, 9560, 9560, 9350, 9370],[1663286400000, 9350, 9370, 9200, 9250],[1663545600000, 9230, 9270, 8990, 8990],[1663632000000, 9100, 9640, 9030, 9080],[1663718400000, 8980, 9240, 8980, 9090],[1663804800000, 9090, 9120, 8810, 8960],[1663891200000, 8980, 8980, 8770, 8780],[1664150400000, 8600, 8700, 8230, 8300],[1664236800000, 8130, 8350, 8090, 8250],[1664323200000, 8170, 8460, 8060, 8170],[1664409600000, 8230, 8500, 8230, 8400],[1664496000000, 8170, 8800, 8170, 8260],[1664841600000, 8360, 8790, 8360, 8770],[1664928000000, 8810, 8920, 8620, 8650],[1665014400000, 8620, 8840, 8620, 8780],[1665100800000, 8770, 8770, 8620, 8760],[1665446400000, 8650, 8660, 8450, 8600],[1665532800000, 8570, 8750, 8570, 8720],[1665619200000, 8720, 8720, 8390, 8400],[1665705600000, 8460, 8710, 8420, 8650],[1665964800000, 8540, 8970, 8530, 8910],[1666051200000, 8950, 9080, 8950, 9030],[1666137600000, 9040, 9080, 8900, 8950],[1666224000000, 8940, 9020, 8890, 8900],[1666310400000, 8870, 8930, 8800, 8810],[1666569600000, 8870, 8990, 8800, 8860],[1666656000000, 8870, 9200, 8870, 9190],[1666742400000, 9180, 9310, 9090, 9140],[1666828800000, 9210, 9220, 9100, 9120],[1666915200000, 9200, 9200, 9050, 9110],[1667174400000, 9150, 9170, 8990, 9030],[1667260800000, 9020, 9030, 8950, 9000],[1667347200000, 9040, 9140, 8970, 9080],[1667433600000, 9060, 9080, 8980, 9000],[1667520000000, 9000, 9080, 8900, 9030],[1667779200000, 9020, 9120, 9010, 9070],[1667865600000, 9110, 9120, 9070, 9100],[1667952000000, 9120, 9260, 9100, 9110],[1668038400000, 9070, 9090, 9000, 9050],[1668124800000, 9190, 9220, 9120, 9170],[1668384000000, 9160, 9390, 9140, 9270],[1668470400000, 9200, 9560, 9190, 9550],[1668556800000, 9600, 9610, 9360, 9390],[1668643200000, 9370, 9380, 9180, 9200],[1668729600000, 9220, 9320, 9170, 9180],[1668988800000, 9180, 9220, 8920, 8920],[1669075200000, 8910, 9020, 8860, 8890],[1669161600000, 8910, 8990, 8880, 8920],[1669248000000, 9000, 9000, 8930, 8970],[1669334400000, 9040, 9090, 8970, 8980],[1669593600000, 9030, 9030, 8750, 8770],[1669680000000, 8770, 8910, 8730, 8840],[1669766400000, 8850, 9040, 8760, 9020],[1669852800000, 9120, 9260, 9080, 9220],[1669939200000, 9210, 9340, 9130, 9280],[1670198400000, 9280, 9460, 9210, 9270],[1670284800000, 9240, 9400, 9170, 9300],[1670371200000, 9300, 9350, 9150, 9280],[1670457600000, 9280, 9360, 9180, 9200],[1670544000000, 9290, 9340, 9180, 9250],[1670803200000, 9250, 9540, 9250, 9520],[1670889600000, 9630, 10350, 9600, 9980],[1670976000000, 10200, 10250, 9850, 9870],[1671062400000, 9980, 10250, 9980, 10200],[1671148800000, 10150, 10200, 9930, 9970],[1671408000000, 10050, 10100, 9650, 9660],[1671494400000, 9570, 9630, 9350, 9400],[1671580800000, 9480, 9880, 9460, 9840],[1671667200000, 9880, 9880, 9720, 9780],[1671753600000, 9770, 9770, 9540, 9580],[1672012800000, 9700, 9930, 9660, 9660],[1672099200000, 9700, 9750, 9520, 9610],[1672185600000, 9540, 9600, 9400, 9520],[1672272000000, 9510, 9600, 9230, 9260],[1672617600000, 9400, 9700, 9340, 9500],[1672704000000, 9440, 9620, 9040, 9200],[1672790400000, 9250, 9420, 9250, 9330],[1672876800000, 9370, 9570, 9350, 9350],[1672963200000, 9410, 9440, 9300, 9410],[1673222400000, 9450, 9530, 9410, 9490],[1673308800000, 9460, 9500, 9390, 9390],[1673395200000, 9480, 9540, 9430, 9470],[1673481600000, 9480, 9510, 9340, 9400],[1673568000000, 9390, 9400, 9270, 9330],[1673827200000, 9330, 9350, 9260, 9340],[1673913600000, 9300, 9370, 9230, 9230],[1674000000000, 9230, 9240, 9130, 9170],[1674086400000, 9110, 9200, 9050, 9170],[1674172800000, 9170, 9260, 9170, 9200],[1674604800000, 9260, 9280, 9200, 9210],[1674691200000, 9260, 9280, 9220, 9270],[1674777600000, 9290, 9330, 9240, 9290],[1675036800000, 9300, 9370, 9300, 9330],[1675123200000, 9350, 9400, 9280, 9380],[1675209600000, 9410, 9450, 9370, 9430],[1675296000000, 9470, 9510, 9370, 9480],[1675382400000, 9470, 9500, 9390, 9400],[1675641600000, 9400, 9440, 9310, 9430],[1675728000000, 9450, 9590, 9400, 9570],[1675814400000, 9570, 9580, 9440, 9480],[1675900800000, 9500, 9530, 9440, 9490],[1675987200000, 9510, 9520, 9330, 9430],[1676246400000, 9430, 9460, 9360, 9430],[1676332800000, 9490, 9520, 9360, 9400],[1676419200000, 9400, 9410, 9240, 9270],[1676505600000, 9270, 9420, 9270, 9340],[1676592000000, 9310, 9310, 9180, 9220],[1676851200000, 9290, 9360, 9180, 9320],[1677024000000, 9210, 9210, 9110, 9120],];
        var value5 = [[1361491200000, 6120],[1361750400000, 5900],[1361836800000, 5950],[1361923200000, 6040],[1362009600000, 6030],[1362355200000, 6040],[1362441600000, 6040],[1362528000000, 6050],[1362614400000, 6000],[1362700800000, 6050],[1362960000000, 6080],[1363046400000, 6300],[1363132800000, 6450],[1363219200000, 6420],[1363305600000, 6450],[1363564800000, 6320],[1363651200000, 6360],[1363737600000, 6440],[1363824000000, 6370],[1363910400000, 6080],[1364169600000, 6130],[1364256000000, 5940],[1364342400000, 6020],[1364428800000, 6050],[1364515200000, 6110],[1364774400000, 6060],[1364860800000, 6110],[1364947200000, 6180],[1365033600000, 6140],[1365120000000, 6040],[1365379200000, 6010],[1365465600000, 6010],[1365552000000, 6030],[1365638400000, 6110],[1365724800000, 6140],[1365984000000, 6280],[1366070400000, 6370],[1366156800000, 6350],[1366243200000, 6340],[1366329600000, 6170],[1366588800000, 6220],[1366675200000, 6310],[1366761600000, 6330],[1366848000000, 6550],[1366934400000, 6700],[1367193600000, 6680],[1367280000000, 6750],[1367452800000, 6700],[1367539200000, 7170],[1367798400000, 7120],[1367884800000, 7200],[1367971200000, 7300],[1368057600000, 7170],[1368144000000, 7090],[1368403200000, 6920],[1368489600000, 6760],[1368576000000, 7030],[1368662400000, 7250],[1369008000000, 7100],[1369094400000, 7190],[1369180800000, 7100],[1369267200000, 6850],[1369353600000, 7040],[1369612800000, 7020],[1369699200000, 7060],[1369785600000, 7060],[1369872000000, 7050],[1369958400000, 6930],[1370217600000, 6910],[1370304000000, 6780],[1370390400000, 6670],[1370563200000, 6650],[1370822400000, 6810],[1370908800000, 6910],[1370995200000, 7040],[1371081600000, 6990],[1371168000000, 7000],[1371427200000, 6970],[1371513600000, 6970],[1371600000000, 6950],[1371686400000, 6620],[1371772800000, 6510],[1372032000000, 6530],[1372118400000, 6230],[1372204800000, 6380],[1372291200000, 6550],[1372377600000, 6640],[1372636800000, 6860],[1372723200000, 6820],[1372809600000, 6720],[1372896000000, 6810],[1372982400000, 6890],[1373241600000, 6850],[1373328000000, 6770],[1373414400000, 6760],[1373500800000, 6830],[1373587200000, 6820],[1373846400000, 6820],[1373932800000, 6800],[1374019200000, 6880],[1374105600000, 6900],[1374192000000, 7090],[1374451200000, 7180],[1374537600000, 7100],[1374624000000, 7090],[1374710400000, 7140],[1374796800000, 7040],[1375056000000, 7030],[1375142400000, 6940],[1375228800000, 7000],[1375315200000, 6880],[1375401600000, 6870],[1375660800000, 7030],[1375747200000, 6970],[1375833600000, 6870],[1375920000000, 6700],[1376006400000, 6700],[1376265600000, 6600],[1376352000000, 6530],[1376438400000, 6710],[1376611200000, 6720],[1376870400000, 6580],[1376956800000, 6410],[1377043200000, 6380],[1377129600000, 6120],[1377216000000, 6120],[1377475200000, 6100],[1377561600000, 6100],[1377648000000, 6100],[1377734400000, 6170],[1377820800000, 6210],[1378080000000, 6130],[1378166400000, 6080],[1378252800000, 6010],[1378339200000, 5650],[1378425600000, 5750],[1378684800000, 5800],[1378771200000, 5800],[1378857600000, 5830],[1378944000000, 5810],[1379030400000, 5800],[1379289600000, 5780],[1379376000000, 5800],[1379894400000, 5790],[1379980800000, 5790],[1380067200000, 5790],[1380153600000, 5790],[1380240000000, 6020],[1380499200000, 6010],[1380585600000, 5960],[1380672000000, 5920],[1380844800000, 5950],[1381104000000, 5830],[1381190400000, 5800],[1381363200000, 5730],[1381449600000, 5840],[1381708800000, 5860],[1381795200000, 5840],[1381881600000, 5780],[1381968000000, 5630],[1382054400000, 5530],[1382313600000, 5550],[1382400000000, 5530],[1382486400000, 5590],[1382572800000, 5630],[1382659200000, 5640],[1382918400000, 5660],[1383004800000, 5670],[1383091200000, 5660],[1383177600000, 5570],[1383264000000, 5590],[1383523200000, 5530],[1383609600000, 5440],[1383696000000, 5410],[1383782400000, 5340],[1383868800000, 5250],[1384128000000, 5140],[1384214400000, 5230],[1384300800000, 5150],[1384387200000, 5190],[1384473600000, 5170],[1384732800000, 5120],[1384819200000, 5040],[1384905600000, 5070],[1384992000000, 5080],[1385078400000, 5000],[1385337600000, 5000],[1385424000000, 5070],[1385510400000, 5040],[1385596800000, 4985],[1385683200000, 5000],[1385942400000, 4970],[1386028800000, 4850],[1386115200000, 4845],[1386201600000, 4740],[1386288000000, 4860],[1386547200000, 4895],[1386633600000, 4865],[1386720000000, 4865],[1386806400000, 4890],[1386892800000, 4855],[1387152000000, 4800],[1387324800000, 4645],[1387497600000, 4545],[1387756800000, 4650],[1387843200000, 4660],[1388016000000, 4580],[1388102400000, 4430],[1388361600000, 4390],[1388620800000, 4440],[1388707200000, 4540],[1388966400000, 4555],[1389052800000, 4580],[1389139200000, 4730],[1389225600000, 4735],[1389312000000, 4700],[1389571200000, 4700],[1389657600000, 4690],[1389744000000, 4750],[1389830400000, 4860],[1389916800000, 4910],[1390176000000, 4995],[1390262400000, 4960],[1390348800000, 4970],[1390435200000, 4855],[1390521600000, 4865],[1390780800000, 4800],[1390867200000, 4830],[1390953600000, 4925],[1391385600000, 4970],[1391472000000, 4900],[1391558400000, 4880],[1391644800000, 4855],[1391731200000, 4890],[1391990400000, 4850],[1392076800000, 4865],[1392163200000, 4830],[1392249600000, 4790],[1392336000000, 4690],[1392595200000, 4710],[1392681600000, 4715],[1392768000000, 4640],[1392854400000, 4675],[1392940800000, 4695],[1393200000000, 4840],[1393286400000, 4780],[1393372800000, 4920],[1393459200000, 5090],[1393545600000, 5190],[1393804800000, 5390],[1393891200000, 5390],[1393977600000, 5500],[1394064000000, 5450],[1394150400000, 5490],[1394409600000, 5460],[1394496000000, 5690],[1394582400000, 5650],[1394668800000, 5860],[1394755200000, 5780],[1395014400000, 5600],[1395100800000, 5740],[1395187200000, 5720],[1395273600000, 5700],[1395360000000, 5740],[1395619200000, 5740],[1395705600000, 5730],[1395792000000, 5720],[1395878400000, 5590],[1395964800000, 5560],[1396224000000, 5530],[1396310400000, 5580],[1396396800000, 5710],[1396483200000, 5710],[1396569600000, 5800],[1396828800000, 5740],[1396915200000, 5670],[1397001600000, 5680],[1397088000000, 5720],[1397174400000, 5920],[1397433600000, 5950],[1397520000000, 6050],[1397606400000, 6050],[1397692800000, 6050],[1397779200000, 6020],[1398038400000, 6040],[1398124800000, 6080],[1398211200000, 6080],[1398297600000, 6040],[1398384000000, 6020],[1398643200000, 6010],[1398729600000, 5950],[1398816000000, 6000],[1398988800000, 6050],[1399420800000, 6090],[1399507200000, 6050],[1399593600000, 6030],[1399852800000, 5940],[1399939200000, 5890],[1400025600000, 5970],[1400112000000, 5980],[1400198400000, 6060],[1400457600000, 6040],[1400544000000, 6000],[1400630400000, 5950],[1400716800000, 5940],[1400803200000, 5920],[1401062400000, 5910],[1401148800000, 5890],[1401235200000, 5860],[1401321600000, 5780],[1401667200000, 5800],[1401753600000, 5790],[1401926400000, 5680],[1402272000000, 5670],[1402358400000, 5640],[1402444800000, 5640],[1402531200000, 5640],[1402617600000, 5630],[1402876800000, 5700],[1402963200000, 5730],[1403049600000, 5740],[1403136000000, 5640],[1403222400000, 5630],[1403481600000, 5650],[1403568000000, 5520],[1403654400000, 5550],[1403740800000, 5590],[1403827200000, 5560],[1404086400000, 5670],[1404172800000, 5650],[1404259200000, 5660],[1404345600000, 5630],[1404432000000, 5540],[1404691200000, 5480],[1404777600000, 5530],[1404864000000, 5530],[1404950400000, 5510],[1405036800000, 5470],[1405296000000, 5490],[1405382400000, 5630],[1405468800000, 5600],[1405555200000, 5490],[1405641600000, 5440],[1405900800000, 5470],[1405987200000, 5440],[1406073600000, 5220],[1406160000000, 5210],[1406246400000, 5200],[1406505600000, 5210],[1406592000000, 5060],[1406678400000, 5100],[1406764800000, 5100],[1406851200000, 5090],[1407110400000, 5080],[1407196800000, 5040],[1407283200000, 5000],[1407369600000, 5000],[1407456000000, 4920],[1407715200000, 5060],[1407801600000, 5100],[1407888000000, 5110],[1407974400000, 5110],[1408320000000, 5150],[1408406400000, 5150],[1408492800000, 5120],[1408579200000, 5000],[1408665600000, 5050],[1408924800000, 5040],[1409011200000, 5170],[1409097600000, 5170],[1409184000000, 5190],[1409270400000, 5170],[1409529600000, 5190],[1409616000000, 5300],[1409702400000, 5400],[1409788800000, 5340],[1409875200000, 5390],[1410393600000, 5600],[1410480000000, 5540],[1410739200000, 5520],[1410825600000, 5530],[1410912000000, 5490],[1410998400000, 5480],[1411084800000, 5460],[1411344000000, 5470],[1411430400000, 5450],[1411516800000, 5430],[1411603200000, 5490],[1411689600000, 5510],[1411948800000, 5450],[1412035200000, 5400],[1412121600000, 5320],[1412208000000, 5510],[1412553600000, 5500],[1412640000000, 5710],[1412726400000, 5800],[1412899200000, 5890],[1413158400000, 5600],[1413244800000, 5800],[1413331200000, 5990],[1413417600000, 6260],[1413504000000, 6280],[1413763200000, 6280],[1413849600000, 6330],[1413936000000, 6360],[1414022400000, 6280],[1414108800000, 6200],[1414368000000, 6500],[1414454400000, 6350],[1414540800000, 6220],[1414627200000, 6140],[1414713600000, 6100],[1414972800000, 6100],[1415059200000, 5830],[1415145600000, 5830],[1415232000000, 5800],[1415318400000, 5940],[1415577600000, 5920],[1415664000000, 5960],[1415750400000, 6060],[1415836800000, 6050],[1415923200000, 6000],[1416182400000, 5800],[1416268800000, 5780],[1416355200000, 5870],[1416441600000, 5850],[1416528000000, 5880],[1416787200000, 5820],[1416873600000, 5850],[1416960000000, 5950],[1417046400000, 5860],[1417132800000, 5790],[1417392000000, 5880],[1417478400000, 5820],[1417564800000, 5760],[1417651200000, 5660],[1417737600000, 5630],[1417996800000, 5110],[1418083200000, 5170],[1418169600000, 5180],[1418256000000, 5200],[1418342400000, 5450],[1418601600000, 5570],[1418688000000, 5490],[1418774400000, 5410],[1418860800000, 5280],[1418947200000, 5250],[1419206400000, 5190],[1419292800000, 5280],[1419379200000, 5420],[1419552000000, 5680],[1419811200000, 5680],[1419897600000, 5570],[1420156800000, 5530],[1420416000000, 5500],[1420502400000, 5470],[1420588800000, 5540],[1420675200000, 5500],[1420761600000, 5540],[1421020800000, 5560],[1421107200000, 5600],[1421193600000, 5720],[1421280000000, 5750],[1421366400000, 5640],[1421625600000, 5680],[1421712000000, 5600],[1421798400000, 5610],[1421884800000, 5550],[1421971200000, 5600],[1422230400000, 5610],[1422316800000, 5570],[1422403200000, 5550],[1422489600000, 5600],[1422576000000, 5980],[1422835200000, 5910],[1422921600000, 5930],[1423008000000, 5890],[1423094400000, 5890],[1423180800000, 5980],[1423440000000, 5940],[1423526400000, 5930],[1423612800000, 6010],[1423699200000, 6000],[1423785600000, 6000],[1424044800000, 6160],[1424131200000, 6080],[1424649600000, 6130],[1424736000000, 6300],[1424822400000, 6250],[1424908800000, 6270],[1424995200000, 6250],[1425254400000, 6240],[1425340800000, 6350],[1425427200000, 6300],[1425513600000, 6410],[1425600000000, 6510],[1425859200000, 6500],[1425945600000, 6470],[1426032000000, 6640],[1426118400000, 6720],[1426204800000, 6770],[1426464000000, 6900],[1426550400000, 6900],[1426636800000, 7040],[1426723200000, 7040],[1426809600000, 7250],[1427068800000, 7680],[1427155200000, 7770],[1427241600000, 7680],[1427328000000, 7790],[1427414400000, 7470],[1427673600000, 7500],[1427760000000, 7510],[1427846400000, 7670],[1427932800000, 7560],[1428019200000, 7520],[1428278400000, 7510],[1428364800000, 7540],[1428451200000, 7840],[1428537600000, 8620],[1428624000000, 8680],[1428883200000, 8610],[1428969600000, 8910],[1429056000000, 9050],[1429142400000, 8930],[1429228800000, 8820],[1429488000000, 8900],[1429574400000, 8820],[1429660800000, 8750],[1429747200000, 8700],[1429833600000, 8580],[1430092800000, 8600],[1430179200000, 8630],[1430265600000, 8500],[1430352000000, 8330],[1430697600000, 8040],[1430870400000, 7850],[1430956800000, 7850],[1431043200000, 8170],[1431302400000, 8220],[1431388800000, 8300],[1431475200000, 8430],[1431561600000, 8470],[1431648000000, 8580],[1431907200000, 8470],[1431993600000, 8610],[1432080000000, 9890],[1432166400000, 9850],[1432252800000, 9360],[1432598400000, 9510],[1432684800000, 9130],[1432771200000, 9460],[1432857600000, 9370],[1433116800000, 9680],[1433203200000, 10400],[1433289600000, 9870],[1433376000000, 9450],[1433462400000, 9490],[1433721600000, 9270],[1433808000000, 9350],[1433894400000, 9110],[1433980800000, 9280],[1434067200000, 8880],[1434326400000, 8950],[1434412800000, 8900],[1434499200000, 8980],[1434585600000, 9220],[1434672000000, 9140],[1434931200000, 9040],[1435017600000, 9240],[1435104000000, 9490],[1435190400000, 9740],[1435276800000, 9350],[1435536000000, 8880],[1435622400000, 9070],[1435708800000, 10000],[1435795200000, 9970],[1435881600000, 10750],[1436140800000, 11200],[1436227200000, 9820],[1436313600000, 9260],[1436400000000, 9000],[1436486400000, 8910],[1436745600000, 9210],[1436832000000, 9300],[1436918400000, 9460],[1437004800000, 9510],[1437091200000, 9110],[1437350400000, 9240],[1437436800000, 9190],[1437523200000, 9060],[1437609600000, 9000],[1437696000000, 9220],[1437955200000, 8790],[1438041600000, 8610],[1438128000000, 8320],[1438214400000, 7970],[1438300800000, 8160],[1438560000000, 8070],[1438646400000, 8290],[1438732800000, 8540],[1438819200000, 8530],[1438905600000, 8530],[1439164800000, 8320],[1439251200000, 8380],[1439337600000, 7920],[1439424000000, 8100],[1439769600000, 7960],[1439856000000, 7710],[1439942400000, 7150],[1440028800000, 7050],[1440115200000, 6700],[1440374400000, 6590],[1440460800000, 6990],[1440547200000, 7100],[1440633600000, 7190],[1440720000000, 7240],[1440979200000, 7100],[1441065600000, 7000],[1441152000000, 7170],[1441238400000, 7010],[1441324800000, 6860],[1441584000000, 6790],[1441670400000, 6580],[1441756800000, 6880],[1441843200000, 6960],[1441929600000, 7070],[1442188800000, 6970],[1442275200000, 7080],[1442361600000, 7200],[1442448000000, 7160],[1442534400000, 7430],[1442793600000, 7270],[1442880000000, 7350],[1442966400000, 7120],[1443052800000, 7190],[1443139200000, 7170],[1443571200000, 7020],[1443657600000, 7030],[1443744000000, 7040],[1444003200000, 7130],[1444089600000, 7240],[1444176000000, 7150],[1444262400000, 6990],[1444608000000, 6890],[1444694400000, 6890],[1444780800000, 6850],[1444867200000, 6900],[1444953600000, 6960],[1445212800000, 6940],[1445299200000, 7020],[1445385600000, 6900],[1445472000000, 6900],[1445558400000, 6980],[1445817600000, 7000],[1445904000000, 6990],[1445990400000, 7020],[1446076800000, 7030],[1446163200000, 6920],[1446422400000, 6850],[1446508800000, 6810],[1446595200000, 7040],[1446681600000, 7490],[1446768000000, 7610],[1447027200000, 8030],[1447113600000, 7590],[1447200000000, 8190],[1447286400000, 8410],[1447372800000, 8200],[1447632000000, 8030],[1447718400000, 8030],[1447804800000, 7760],[1447891200000, 7760],[1447977600000, 7840],[1448236800000, 8510],[1448323200000, 8260],[1448409600000, 8220],[1448496000000, 8070],[1448582400000, 7940],[1448841600000, 7750],[1448928000000, 8180],[1449014400000, 7900],[1449100800000, 7740],[1449187200000, 7570],[1449446400000, 7650],[1449532800000, 7500],[1449619200000, 7440],[1449705600000, 7400],[1449792000000, 7200],[1450051200000, 6910],[1450137600000, 7210],[1450224000000, 7470],[1450310400000, 7440],[1450396800000, 7650],[1450656000000, 7500],[1450742400000, 7500],[1450828800000, 7440],[1450915200000, 7560],[1451260800000, 8000],[1451347200000, 8190],[1451433600000, 8140],[1451865600000, 8140],[1451952000000, 8190],[1452038400000, 8550],[1452124800000, 8380],[1452211200000, 8770],[1452470400000, 9380],[1452556800000, 9020],[1452643200000, 8780],[1452729600000, 8710],[1452816000000, 8450],[1453075200000, 8630],[1453161600000, 8800],[1453248000000, 8660],[1453334400000, 8720],[1453420800000, 8670],[1453680000000, 8980],[1453766400000, 9090],[1453852800000, 8730],[1453939200000, 8800],[1454025600000, 9080],[1454284800000, 9410],[1454371200000, 9160],[1454457600000, 9510],[1454544000000, 9210],[1454630400000, 9510],[1455148800000, 8610],[1455235200000, 7710],[1455494400000, 8030],[1455580800000, 8040],[1455667200000, 7860],[1455753600000, 7870],[1455840000000, 7820],[1456099200000, 8080],[1456185600000, 7850],[1456272000000, 7810],[1456358400000, 7760],[1456444800000, 7900],[1456704000000, 7700],[1456876800000, 7880],[1456963200000, 7890],[1457049600000, 7900],[1457308800000, 7810],[1457395200000, 7810],[1457481600000, 8000],[1457568000000, 8000],[1457654400000, 8010],[1457913600000, 7980],[1458000000000, 7830],[1458086400000, 7860],[1458172800000, 7950],[1458259200000, 8260],[1458518400000, 8200],[1458604800000, 8480],[1458691200000, 8380],[1458777600000, 8300],[1458864000000, 8370],[1459123200000, 8310],[1459209600000, 8360],[1459296000000, 8340],[1459382400000, 8110],[1459468800000, 8390],[1459728000000, 8900],[1459814400000, 8900],[1459900800000, 8950],[1459987200000, 9120],[1460073600000, 9060],[1460332800000, 9160],[1460419200000, 8810],[1460592000000, 8840],[1460678400000, 9020],[1460937600000, 8910],[1461024000000, 9010],[1461110400000, 8960],[1461196800000, 8930],[1461283200000, 8930],[1461542400000, 9630],[1461628800000, 9530],[1461715200000, 9160],[1461801600000, 9130],[1461888000000, 9330],[1462147200000, 9090],[1462233600000, 9050],[1462320000000, 8700],[1462752000000, 9120],[1462838400000, 9310],[1462924800000, 9430],[1463011200000, 9700],[1463097600000, 9490],[1463356800000, 10100],[1463443200000, 10050],[1463529600000, 10650],[1463616000000, 10750],[1463702400000, 10800],[1463961600000, 11100],[1464048000000, 11550],[1464134400000, 10200],[1464220800000, 10400],[1464307200000, 10250],[1464566400000, 10400],[1464652800000, 10500],[1464739200000, 10400],[1464825600000, 10900],[1464912000000, 10650],[1465257600000, 10700],[1465344000000, 10900],[1465430400000, 10600],[1465516800000, 10650],[1465776000000, 10150],[1465862400000, 10350],[1465948800000, 10400],[1466035200000, 10500],[1466121600000, 10150],[1466380800000, 10200],[1466467200000, 10100],[1466553600000, 9830],[1466640000000, 9730],[1466726400000, 9080],[1466985600000, 9400],[1467072000000, 9760],[1467158400000, 9750],[1467244800000, 10100],[1467331200000, 9960],[1467590400000, 10400],[1467676800000, 10350],[1467763200000, 10100],[1467849600000, 10850],[1467936000000, 10600],[1468195200000, 10650],[1468281600000, 10550],[1468368000000, 10450],[1468454400000, 10300],[1468540800000, 10100],[1468800000000, 10100],[1468886400000, 10050],[1468972800000, 9970],[1469059200000, 9870],[1469145600000, 9990],[1469404800000, 9990],[1469491200000, 10200],[1469577600000, 9970],[1469664000000, 9920],[1469750400000, 9920],[1470009600000, 9590],[1470096000000, 9610],[1470182400000, 9570],[1470268800000, 9510],[1470355200000, 9420],[1470614400000, 9320],[1470700800000, 9600],[1470787200000, 9820],[1470873600000, 9660],[1470960000000, 9680],[1471305600000, 9560],[1471392000000, 9410],[1471478400000, 9330],[1471564800000, 9290],[1471824000000, 9090],[1471910400000, 9260],[1471996800000, 9130],[1472083200000, 9070],[1472169600000, 9000],[1472428800000, 9150],[1472515200000, 9090],[1472601600000, 8830],[1472688000000, 8830],[1472774400000, 9010],[1473033600000, 9530],[1473120000000, 9370],[1473206400000, 9230],[1473292800000, 9230],[1473379200000, 9170],[1473638400000, 8920],[1473724800000, 8900],[1474243200000, 8820],[1474329600000, 9200],[1474416000000, 9070],[1474502400000, 9150],[1474588800000, 9400],[1474848000000, 9250],[1474934400000, 9430],[1475020800000, 9390],[1475107200000, 9350],[1475193600000, 8980],[1475539200000, 8930],[1475625600000, 8880],[1475712000000, 8870],[1475798400000, 8600],[1476057600000, 8710],[1476144000000, 8660],[1476230400000, 8670],[1476316800000, 8560],[1476403200000, 8600],[1476662400000, 8400],[1476748800000, 8410],[1476835200000, 8590],[1476921600000, 8460],[1477008000000, 8420],[1477267200000, 8390],[1477353600000, 8100],[1477440000000, 8060],[1477526400000, 8240],[1477612800000, 7980],[1477872000000, 7780],[1477958400000, 7770],[1478044800000, 7380],[1478131200000, 7540],[1478217600000, 7580],[1478476800000, 7600],[1478563200000, 7680],[1478649600000, 7280],[1478736000000, 7740],[1478822400000, 7900],[1479081600000, 7920],[1479168000000, 7810],[1479254400000, 8090],[1479340800000, 8130],[1479427200000, 8140],[1479686400000, 7990],[1479772800000, 7980],[1479859200000, 7930],[1479945600000, 7840],[1480032000000, 7980],[1480291200000, 7890],[1480377600000, 7810],[1480464000000, 7720],[1480550400000, 7680],[1480636800000, 7610],[1480896000000, 7560],[1480982400000, 7590],[1481068800000, 7470],[1481155200000, 7480],[1481241600000, 7540],[1481500800000, 7740],[1481587200000, 7820],[1481673600000, 7900],[1481760000000, 7940],[1481846400000, 8000],[1482105600000, 7980],[1482192000000, 7920],[1482278400000, 7900],[1482364800000, 7800],[1482451200000, 7830],[1482710400000, 7930],[1482796800000, 7900],[1482883200000, 8130],[1482969600000, 8120],[1483315200000, 8110],[1483401600000, 8110],[1483488000000, 8150],[1483574400000, 8210],[1483660800000, 8160],[1483920000000, 8080],[1484006400000, 7950],[1484092800000, 7910],[1484179200000, 7850],[1484265600000, 7900],[1484524800000, 7850],[1484611200000, 8170],[1484697600000, 8070],[1484784000000, 7920],[1484870400000, 7950],[1485129600000, 8350],[1485216000000, 8330],[1485302400000, 8180],[1485388800000, 8340],[1485820800000, 8210],[1485907200000, 8260],[1485993600000, 8120],[1486080000000, 8170],[1486339200000, 8610],[1486425600000, 8480],[1486512000000, 8440],[1486598400000, 8460],[1486684800000, 8360],[1486944000000, 8300],[1487030400000, 8350],[1487116800000, 8550],[1487203200000, 8420],[1487289600000, 8620],[1487548800000, 8510],[1487635200000, 8530],[1487721600000, 8650],[1487808000000, 8580],[1487894400000, 8690],[1488153600000, 8930],[1488240000000, 8900],[1488412800000, 8880],[1488499200000, 8710],[1488758400000, 9160],[1488844800000, 9020],[1488931200000, 9040],[1489017600000, 9000],[1489104000000, 9040],[1489363200000, 8960],[1489449600000, 8820],[1489536000000, 8960],[1489622400000, 9060],[1489708800000, 8970],[1489968000000, 8900],[1490054400000, 8870],[1490140800000, 9010],[1490227200000, 8970],[1490313600000, 8750],[1490572800000, 9060],[1490659200000, 9130],[1490745600000, 9170],[1490832000000, 9160],[1490918400000, 9090],[1491177600000, 9370],[1491264000000, 9280],[1491350400000, 9350],[1491436800000, 9230],[1491523200000, 9400],[1491782400000, 9220],[1491868800000, 9450],[1491955200000, 9380],[1492041600000, 9420],[1492128000000, 9230],[1492387200000, 9390],[1492473600000, 9470],[1492560000000, 9470],[1492646400000, 9430],[1492732800000, 9370],[1492992000000, 9170],[1493078400000, 9240],[1493164800000, 9210],[1493251200000, 9220],[1493337600000, 9200],[1493683200000, 9120],[1493856000000, 9290],[1494201600000, 9440],[1494374400000, 9210],[1494460800000, 9300],[1494547200000, 9150],[1494806400000, 9050],[1494892800000, 8800],[1494979200000, 8790],[1495065600000, 8650],[1495152000000, 8790],[1495411200000, 8690],[1495497600000, 8700],[1495584000000, 8830],[1495670400000, 8810],[1495756800000, 8780],[1496016000000, 8760],[1496102400000, 8850],[1496188800000, 8990],[1496275200000, 8940],[1496361600000, 9000],[1496620800000, 9140],[1496793600000, 9090],[1496880000000, 9130],[1496966400000, 9050],[1497225600000, 8870],[1497312000000, 9040],[1497398400000, 8960],[1497484800000, 8810],[1497571200000, 8680],[1497830400000, 8680],[1497916800000, 8450],[1498003200000, 8600],[1498089600000, 8580],[1498176000000, 8630],[1498435200000, 8590],[1498521600000, 8490],[1498608000000, 8350],[1498694400000, 8410],[1498780800000, 8470],[1499040000000, 8440],[1499126400000, 8430],[1499212800000, 8340],[1499299200000, 8400],[1499385600000, 8270],[1499644800000, 8100],[1499731200000, 8180],[1499817600000, 8140],[1499904000000, 8040],[1499990400000, 7850],[1500249600000, 8000],[1500336000000, 7970],[1500422400000, 8030],[1500508800000, 8430],[1500595200000, 8430],[1500854400000, 8240],[1500940800000, 8280],[1501027200000, 8300],[1501113600000, 8350],[1501200000000, 8180],[1501459200000, 8180],[1501545600000, 8200],[1501632000000, 8380],[1501718400000, 8300],[1501804800000, 8330],[1502064000000, 8380],[1502150400000, 8330],[1502236800000, 8150],[1502323200000, 8200],[1502409600000, 8130],[1502668800000, 8500],[1502841600000, 8580],[1502928000000, 8610],[1503014400000, 8710],[1503273600000, 8730],[1503360000000, 8920],[1503446400000, 8990],[1503532800000, 8820],[1503619200000, 8840],[1503878400000, 8910],[1503964800000, 8960],[1504051200000, 9000],[1504137600000, 9050],[1504224000000, 9040],[1504483200000, 8800],[1504569600000, 8710],[1504656000000, 8600],[1504742400000, 8870],[1504828800000, 8710],[1505088000000, 8940],[1505174400000, 8910],[1505260800000, 9020],[1505347200000, 9070],[1505433600000, 9020],[1505692800000, 8850],[1505779200000, 8850],[1505865600000, 8950],[1505952000000, 8870],[1506038400000, 8640],[1506297600000, 8460],[1506384000000, 8400],[1506470400000, 8550],[1506556800000, 8550],[1506643200000, 8560],[1507593600000, 8900],[1507680000000, 8940],[1507766400000, 8930],[1507852800000, 8970],[1508112000000, 8980],[1508198400000, 9260],[1508284800000, 9190],[1508371200000, 9070],[1508457600000, 9050],[1508716800000, 9270],[1508803200000, 9270],[1508889600000, 9210],[1508976000000, 9050],[1509062400000, 9120],[1509321600000, 9080],[1509408000000, 8840],[1509494400000, 9170],[1509580800000, 9100],[1509667200000, 9240],[1509926400000, 9490],[1510012800000, 9340],[1510099200000, 9540],[1510185600000, 9830],[1510272000000, 10150],[1510531200000, 10600],[1510617600000, 11100],[1510704000000, 10800],[1510790400000, 10800],[1510876800000, 11250],[1511136000000, 11500],[1511222400000, 11250],[1511308800000, 11100],[1511395200000, 11150],[1511481600000, 10900],[1511740800000, 11000],[1511827200000, 10750],[1511913600000, 10750],[1512000000000, 10300],[1512086400000, 10550],[1512345600000, 10350],[1512432000000, 10300],[1512518400000, 10250],[1512604800000, 9800],[1512691200000, 9760],[1512950400000, 9930],[1513036800000, 9830],[1513123200000, 9830],[1513209600000, 9850],[1513296000000, 9990],[1513555200000, 9710],[1513641600000, 9400],[1513728000000, 9490],[1513814400000, 9320],[1513900800000, 9260],[1514246400000, 9370],[1514332800000, 9420],[1514419200000, 9750],[1514851200000, 9870],[1514937600000, 10000],[1515024000000, 9750],[1515110400000, 9910],[1515369600000, 9950],[1515456000000, 9770],[1515542400000, 9840],[1515628800000, 10300],[1515715200000, 10250],[1515974400000, 10350],[1516060800000, 10050],[1516147200000, 9900],[1516233600000, 10100],[1516320000000, 10550],[1516579200000, 10500],[1516665600000, 10500],[1516752000000, 10500],[1516838400000, 10500],[1516924800000, 10750],[1517184000000, 10550],[1517270400000, 10800],[1517356800000, 10800],[1517443200000, 10450],[1517529600000, 10300],[1517788800000, 10050],[1517875200000, 10000],[1517961600000, 10050],[1518048000000, 10250],[1518134400000, 10050],[1518393600000, 10900],[1518480000000, 10450],[1518566400000, 10500],[1518998400000, 10650],[1519084800000, 12050],[1519171200000, 12150],[1519257600000, 12500],[1519344000000, 12500],[1519603200000, 12100],[1519689600000, 12050],[1519776000000, 11400],[1519948800000, 11550],[1520208000000, 11250],[1520294400000, 11350],[1520380800000, 11400],[1520467200000, 11500],[1520553600000, 11650],[1520812800000, 12150],[1520899200000, 12050],[1520985600000, 12250],[1521072000000, 12800],[1521158400000, 12500],[1521417600000, 12100],[1521504000000, 12300],[1521590400000, 12350],[1521676800000, 12250],[1521763200000, 11550],[1522022400000, 11600],[1522108800000, 11550],[1522195200000, 11600],[1522281600000, 11900],[1522368000000, 12250],[1522627200000, 12050],[1522713600000, 12350],[1522800000000, 12250],[1522886400000, 12300],[1522972800000, 12000],[1523232000000, 12550],[1523318400000, 12850],[1523404800000, 13150],[1523491200000, 12700],[1523577600000, 12950],[1523836800000, 12900],[1523923200000, 12550],[1524009600000, 12350],[1524096000000, 12150],[1524182400000, 12300],[1524441600000, 12250],[1524528000000, 12000],[1524614400000, 11850],[1524700800000, 11800],[1524787200000, 11650],[1525046400000, 11550],[1525219200000, 11450],[1525305600000, 11400],[1525392000000, 11450],[1525737600000, 11150],[1525824000000, 11200],[1525910400000, 10950],[1525996800000, 11000],[1526256000000, 10900],[1526342400000, 11250],[1526428800000, 11300],[1526515200000, 11600],[1526601600000, 11550],[1526860800000, 11550],[1527033600000, 11400],[1527120000000, 11300],[1527206400000, 11250],[1527465600000, 11550],[1527552000000, 11450],[1527638400000, 11400],[1527724800000, 11450],[1527811200000, 11550],[1528070400000, 11750],[1528156800000, 11700],[1528329600000, 11650],[1528416000000, 11500],[1528675200000, 11500],[1528761600000, 11650],[1528934400000, 12000],[1529020800000, 11800],[1529280000000, 11450],[1529366400000, 10850],[1529452800000, 11200],[1529539200000, 11000],[1529625600000, 11150],[1529884800000, 10900],[1529971200000, 11000],[1530057600000, 10750],[1530144000000, 10300],[1530230400000, 10200],[1530489600000, 9940],[1530576000000, 10000],[1530662400000, 10450],[1530748800000, 10400],[1530835200000, 10450],[1531094400000, 10450],[1531180800000, 10500],[1531267200000, 10500],[1531353600000, 10800],[1531440000000, 10950],[1531699200000, 10800],[1531785600000, 11050],[1531872000000, 10950],[1531958400000, 10600],[1532044800000, 10500],[1532304000000, 10350],[1532390400000, 10700],[1532476800000, 10200],[1532563200000, 10500],[1532649600000, 10650],[1532908800000, 10950],[1532995200000, 11050],[1533081600000, 11400],[1533168000000, 11450],[1533254400000, 11650],[1533513600000, 11650],[1533600000000, 11650],[1533686400000, 11550],[1533772800000, 11600],[1533859200000, 11500],[1534118400000, 11300],[1534204800000, 11300],[1534377600000, 10600],[1534464000000, 10900],[1534723200000, 11350],[1534809600000, 11450],[1534896000000, 11450],[1534982400000, 11700],[1535068800000, 11400],[1535328000000, 11450],[1535414400000, 11650],[1535500800000, 11600],[1535587200000, 11600],[1535673600000, 11600],[1535932800000, 11550],[1536019200000, 11450],[1536105600000, 11400],[1536192000000, 11500],[1536278400000, 11450],[1536537600000, 11400],[1536624000000, 11550],[1536710400000, 11600],[1536796800000, 11500],[1536883200000, 11350],[1537142400000, 11050],[1537228800000, 10950],[1537315200000, 10750],[1537401600000, 11050],[1537488000000, 11100],[1538006400000, 11250],[1538092800000, 11350],[1538352000000, 11150],[1538438400000, 10900],[1538611200000, 10950],[1538697600000, 10600],[1538956800000, 10100],[1539129600000, 9900],[1539216000000, 9250],[1539302400000, 9600],[1539561600000, 9370],[1539648000000, 9600],[1539734400000, 9890],[1539820800000, 9680],[1539907200000, 9780],[1540166400000, 9580],[1540252800000, 9080],[1540339200000, 8800],[1540425600000, 8580],[1540512000000, 8370],[1540771200000, 7900],[1540857600000, 8230],[1540944000000, 9050],[1541030400000, 9210],[1541116800000, 9310],[1541376000000, 9510],[1541462400000, 9640],[1541548800000, 9570],[1541635200000, 9740],[1541721600000, 9980],[1541980800000, 9420],[1542067200000, 9470],[1542153600000, 9560],[1542240000000, 9390],[1542326400000, 9600],[1542585600000, 9660],[1542672000000, 9500],[1542758400000, 9480],[1542844800000, 9590],[1542931200000, 9480],[1543190400000, 9400],[1543276800000, 9430],[1543363200000, 9320],[1543449600000, 9360],[1543536000000, 9110],[1543795200000, 9370],[1543881600000, 9400],[1543968000000, 9420],[1544054400000, 9430],[1544140800000, 9690],[1544400000000, 9660],[1544486400000, 9320],[1544572800000, 9570],[1544659200000, 9600],[1544745600000, 9430],[1545004800000, 9500],[1545091200000, 9350],[1545177600000, 9180],[1545264000000, 8950],[1545350400000, 9030],[1545609600000, 8830],[1545782400000, 8730],[1545868800000, 9040],[1545955200000, 9100],[1546387200000, 9340],[1546473600000, 9170],[1546560000000, 9530],[1546819200000, 9530],[1546905600000, 9520],[1546992000000, 9450],[1547078400000, 9450],[1547164800000, 9400],[1547424000000, 9400],[1547510400000, 9400],[1547596800000, 9510],[1547683200000, 9640],[1547769600000, 9640],[1548028800000, 9750],[1548115200000, 9800],[1548201600000, 9820],[1548288000000, 10000],[1548374400000, 9980],[1548633600000, 9930],[1548720000000, 9780],[1548806400000, 9630],[1548892800000, 9840],[1548979200000, 9840],[1549497600000, 10000],[1549584000000, 9990],[1549843200000, 9990],[1549929600000, 10050],[1550016000000, 10050],[1550102400000, 9940],[1550188800000, 9880],[1550448000000, 9850],[1550534400000, 9860],[1550620800000, 9800],[1550707200000, 9830],[1550793600000, 9750],[1551052800000, 9680],[1551139200000, 9850],[1551225600000, 9930],[1551312000000, 9800],[1551657600000, 10000],[1551744000000, 10100],[1551830400000, 10100],[1551916800000, 9990],[1552003200000, 9930],[1552262400000, 9850],[1552348800000, 9930],[1552435200000, 10050],[1552521600000, 10100],[1552608000000, 9970],[1552867200000, 9990],[1552953600000, 9980],[1553040000000, 10000],[1553126400000, 9820],[1553212800000, 9680],[1553472000000, 9650],[1553558400000, 9560],[1553644800000, 9470],[1553731200000, 9070],[1553817600000, 9400],[1554076800000, 9420],[1554163200000, 9390],[1554249600000, 9510],[1554336000000, 9560],[1554422400000, 9440],[1554681600000, 9450],[1554768000000, 9390],[1554854400000, 9390],[1554940800000, 9490],[1555027200000, 9600],[1555286400000, 9690],[1555372800000, 9710],[1555459200000, 9740],[1555545600000, 9650],[1555632000000, 9720],[1555891200000, 9900],[1555977600000, 9920],[1556064000000, 9930],[1556150400000, 9860],[1556236800000, 9880],[1556496000000, 9850],[1556582400000, 9780],[1556755200000, 9870],[1556841600000, 9860],[1557187200000, 9860],[1557273600000, 9810],[1557360000000, 9820],[1557446400000, 9800],[1557705600000, 9610],[1557792000000, 9640],[1557878400000, 9570],[1557964800000, 9390],[1558051200000, 9260],[1558310400000, 9350],[1558396800000, 9620],[1558483200000, 9430],[1558569600000, 9440],[1558656000000, 9380],[1558915200000, 9320],[1559001600000, 9300],[1559088000000, 9310],[1559174400000, 9300],[1559260800000, 9200],[1559520000000, 9230],[1559606400000, 9380],[1559692800000, 9490],[1559865600000, 9220],[1560124800000, 9220],[1560211200000, 9520],[1560297600000, 9600],[1560384000000, 9680],[1560470400000, 9730],[1560729600000, 9790],[1560816000000, 9900],[1560902400000, 9900],[1560988800000, 9820],[1561075200000, 9870],[1561334400000, 9880],[1561420800000, 9860],[1561507200000, 9840],[1561593600000, 9760],[1561680000000, 9680],[1561939200000, 9710],[1562025600000, 9750],[1562112000000, 9750],[1562198400000, 9740],[1562284800000, 9650],[1562544000000, 9210],[1562630400000, 9310],[1562716800000, 9380],[1562803200000, 9500],[1562889600000, 9530],[1563148800000, 9800],[1563235200000, 9760],[1563321600000, 9750],[1563408000000, 9690],[1563494400000, 9770],[1563753600000, 9600],[1563840000000, 9500],[1563926400000, 9470],[1564012800000, 9360],[1564099200000, 9390],[1564358400000, 9080],[1564444800000, 8920],[1564531200000, 8920],[1564617600000, 8900],[1564704000000, 8840],[1564963200000, 8000],[1565049600000, 7940],[1565136000000, 8600],[1565222400000, 9000],[1565308800000, 8970],[1565568000000, 8920],[1565654400000, 9160],[1565740800000, 9400],[1565913600000, 9020],[1566172800000, 8720],[1566259200000, 8760],[1566345600000, 9100],[1566432000000, 9150],[1566518400000, 8860],[1566777600000, 8930],[1566864000000, 8730],[1566950400000, 8390],[1567036800000, 8230],[1567123200000, 8230],[1567382400000, 8070],[1567468800000, 7970],[1567555200000, 8050],[1567641600000, 8080],[1567728000000, 8000],[1567987200000, 8000],[1568073600000, 8000],[1568160000000, 7900],[1568592000000, 8110],[1568678400000, 8280],[1568764800000, 8300],[1568851200000, 8180],[1568937600000, 8210],[1569196800000, 8340],[1569283200000, 8230],[1569369600000, 8240],[1569456000000, 8120],[1569542400000, 7980],[1569801600000, 7910],[1569888000000, 8100],[1569974400000, 7680],[1570147200000, 7800],[1570406400000, 7790],[1570492800000, 7830],[1570665600000, 7840],[1570752000000, 7850],[1571011200000, 7900],[1571097600000, 7800],[1571184000000, 8000],[1571270400000, 7940],[1571356800000, 7830],[1571616000000, 7800],[1571702400000, 7860],[1571788800000, 7860],[1571875200000, 7980],[1571961600000, 8000],[1572220800000, 8120],[1572307200000, 7860],[1572393600000, 7730],[1572480000000, 7830],[1572566400000, 7770],[1572825600000, 7850],[1572912000000, 8070],[1572998400000, 8370],[1573084800000, 8210],[1573171200000, 8370],[1573430400000, 8270],[1573516800000, 8250],[1573603200000, 8190],[1573689600000, 8310],[1573776000000, 8150],[1574035200000, 8200],[1574121600000, 8340],[1574208000000, 8270],[1574294400000, 8270],[1574380800000, 8100],[1574640000000, 8190],[1574726400000, 8230],[1574812800000, 8210],[1574899200000, 8260],[1574985600000, 8190],[1575244800000, 8110],[1575331200000, 8040],[1575417600000, 8010],[1575504000000, 7760],[1575590400000, 7810],[1575849600000, 7580],[1575936000000, 7600],[1576022400000, 7700],[1576108800000, 7800],[1576195200000, 7860],[1576454400000, 8010],[1576540800000, 8170],[1576627200000, 8050],[1576713600000, 8130],[1576800000000, 8140],[1577059200000, 8150],[1577145600000, 8150],[1577318400000, 8000],[1577404800000, 8140],[1577664000000, 8310],[1577923200000, 8400],[1578009600000, 8360],[1578268800000, 8180],[1578355200000, 8160],[1578441600000, 7930],[1578528000000, 7900],[1578614400000, 8100],[1578873600000, 8220],[1578960000000, 8140],[1579046400000, 8090],[1579132800000, 8030],[1579219200000, 8110],[1579478400000, 8240],[1579564800000, 8130],[1579651200000, 8290],[1579737600000, 8350],[1580169600000, 8590],[1580256000000, 8150],[1580342400000, 8000],[1580428800000, 7910],[1580688000000, 7530],[1580774400000, 7600],[1580860800000, 7680],[1580947200000, 7750],[1581033600000, 7670],[1581292800000, 7620],[1581379200000, 7650],[1581465600000, 7630],[1581552000000, 7580],[1581638400000, 7590],[1581897600000, 7550],[1581984000000, 7390],[1582070400000, 7450],[1582156800000, 7330],[1582243200000, 7180],[1582502400000, 6800],[1582588800000, 7020],[1582675200000, 7030],[1582761600000, 7030],[1582848000000, 6830],[1583107200000, 6830],[1583193600000, 6970],[1583280000000, 7030],[1583366400000, 7230],[1583452800000, 7250],[1583712000000, 7060],[1583798400000, 6940],[1583884800000, 6770],[1583971200000, 6420],[1584057600000, 5870],[1584316800000, 5710],[1584403200000, 5570],[1584489600000, 5420],[1584576000000, 4985],[1584662400000, 5190],[1584921600000, 5020],[1585008000000, 5330],[1585094400000, 5630],[1585180800000, 5900],[1585267200000, 6130],[1585526400000, 6350],[1585612800000, 6550],[1585699200000, 6580],[1585785600000, 6610],[1585872000000, 6830],[1586131200000, 7190],[1586217600000, 7430],[1586304000000, 7650],[1586390400000, 7650],[1586476800000, 7730],[1586736000000, 7490],[1586822400000, 7500],[1586995200000, 7630],[1587081600000, 7720],[1587340800000, 8050],[1587427200000, 10450],[1587513600000, 10750],[1587600000000, 10900],[1587686400000, 10150],[1587945600000, 10450],[1588032000000, 11900],[1588118400000, 11250],[1588550400000, 10600],[1588723200000, 10600],[1588809600000, 10400],[1588896000000, 10500],[1589155200000, 10300],[1589241600000, 10600],[1589328000000, 10350],[1589414400000, 10700],[1589500800000, 10550],[1589760000000, 10700],[1589846400000, 10050],[1589932800000, 10050],[1590019200000, 9710],[1590105600000, 10250],[1590364800000, 10300],[1590451200000, 10150],[1590537600000, 11300],[1590624000000, 10800],[1590710400000, 11550],[1590969600000, 11600],[1591056000000, 11750],[1591142400000, 11600],[1591228800000, 11350],[1591315200000, 14750],[1591574400000, 15400],[1591660800000, 16100],[1591747200000, 16100],[1591833600000, 15200],[1591920000000, 15350],[1592179200000, 14650],[1592265600000, 15950],[1592352000000, 15750],[1592438400000, 15950],[1592524800000, 15700],[1592784000000, 16000],[1592870400000, 16850],[1592956800000, 16900],[1593043200000, 17500],[1593129600000, 17000],[1593388800000, 16700],[1593475200000, 16250],[1593561600000, 15200],[1593648000000, 15150],[1593734400000, 15050],[1593993600000, 15150],[1594080000000, 15100],[1594166400000, 15200],[1594252800000, 16050],[1594339200000, 16350],[1594598400000, 16000],[1594684800000, 16800],[1594771200000, 15700],[1594857600000, 15200],[1594944000000, 15550],[1595203200000, 16300],[1595289600000, 16750],[1595376000000, 21650],[1595462400000, 23700],[1595548800000, 23050],[1595808000000, 23000],[1595894400000, 23450],[1595980800000, 24050],[1596067200000, 23300],[1596153600000, 24400],[1596412800000, 24050],[1596499200000, 26000],[1596585600000, 28100],[1596672000000, 28350],[1596758400000, 29350],[1597017600000, 30300],[1597104000000, 24400],[1597190400000, 24950],[1597276800000, 22550],[1597363200000, 21200],[1597708800000, 22000],[1597795200000, 22900],[1597881600000, 22850],[1597968000000, 21650],[1598227200000, 23100],[1598313600000, 23250],[1598400000000, 23750],[1598486400000, 23750],[1598572800000, 23050],[1598832000000, 23450],[1598918400000, 23650],[1599004800000, 24950],[1599091200000, 25350],[1599177600000, 25200],[1599436800000, 25550],[1599523200000, 23650],[1599609600000, 24550],[1599696000000, 25950],[1599782400000, 26750],[1600041600000, 26300],[1600128000000, 25400],[1600214400000, 25050],[1600300800000, 25300],[1600387200000, 25050],[1600646400000, 25050],[1600732800000, 24050],[1600819200000, 23150],[1600905600000, 21100],[1600992000000, 22100],[1601251200000, 22000],[1601337600000, 21850],[1601856000000, 24100],[1601942400000, 23750],[1602028800000, 23500],[1602115200000, 24150],[1602460800000, 24000],[1602547200000, 24300],[1602633600000, 23850],[1602720000000, 22750],[1602806400000, 21550],[1603065600000, 21300],[1603152000000, 20300],[1603238400000, 20100],[1603324800000, 19200],[1603411200000, 19800],[1603670400000, 17100],[1603756800000, 17500],[1603843200000, 18950],[1603929600000, 19150],[1604016000000, 17900],[1604275200000, 18150],[1604361600000, 18400],[1604448000000, 18250],[1604534400000, 18750],[1604620800000, 18300],[1604880000000, 18950],[1604966400000, 18100],[1605052800000, 17700],[1605139200000, 17950],[1605225600000, 18450],[1605484800000, 18750],[1605571200000, 17950],[1605657600000, 18050],[1605744000000, 18600],[1605830400000, 19300],[1606089600000, 18600],[1606176000000, 21000],[1606262400000, 19850],[1606348800000, 19750],[1606435200000, 19500],[1606694400000, 19150],[1606780800000, 19800],[1606867200000, 19750],[1606953600000, 19150],[1607040000000, 19000],[1607299200000, 19050],[1607385600000, 18600],[1607472000000, 18000],[1607558400000, 18000],[1607644800000, 18450],[1607904000000, 19550],[1607990400000, 19700],[1608076800000, 19200],[1608163200000, 18900],[1608249600000, 20450],[1608508800000, 23450],[1608595200000, 23900],[1608681600000, 20450],[1608768000000, 20000],[1609113600000, 18650],[1609200000000, 19150],[1609286400000, 19650],[1609718400000, 19100],[1609804800000, 19400],[1609891200000, 19700],[1609977600000, 19700],[1610064000000, 19100],[1610323200000, 18100],[1610409600000, 18100],[1610496000000, 18000],[1610582400000, 18450],[1610668800000, 18050],[1610928000000, 17050],[1611014400000, 16550],[1611100800000, 16900],[1611187200000, 16700],[1611273600000, 16400],[1611532800000, 17000],[1611619200000, 16700],[1611705600000, 16350],[1611792000000, 15750],[1611878400000, 15050],[1612137600000, 15600],[1612224000000, 15800],[1612310400000, 15700],[1612396800000, 15300],[1612483200000, 15500],[1612742400000, 15400],[1612828800000, 15400],[1612915200000, 15350],[1613347200000, 15700],[1613433600000, 15700],[1613520000000, 15800],[1613606400000, 15650],[1613692800000, 15400],[1613952000000, 15150],[1614038400000, 14400],[1614124800000, 13750],[1614211200000, 14450],[1614297600000, 14500],[1614643200000, 14300],[1614729600000, 14300],[1614816000000, 13750],[1614902400000, 13950],[1615161600000, 14400],[1615248000000, 14750],[1615334400000, 14200],[1615420800000, 14000],[1615507200000, 14300],[1615766400000, 14350],[1615852800000, 14700],[1615939200000, 15000],[1616025600000, 14900],[1616112000000, 14900],[1616371200000, 14650],[1616457600000, 14650],[1616544000000, 14300],[1616630400000, 14200],[1616716800000, 14200],[1616976000000, 14200],[1617062400000, 14150],[1617148800000, 14250],[1617235200000, 14050],[1617321600000, 14450],[1617580800000, 14350],[1617667200000, 14100],[1617753600000, 14400],[1617840000000, 14950],[1617926400000, 15050],[1618185600000, 15500],[1618272000000, 15300],[1618358400000, 15800],[1618444800000, 15600],[1618531200000, 15400],[1618790400000, 15450],[1618876800000, 15450],[1618963200000, 15600],[1619049600000, 15500],[1619136000000, 15600],[1619395200000, 16250],[1619481600000, 16100],[1619568000000, 15800],[1619654400000, 15350],[1619740800000, 15350],[1620000000000, 14950],[1620086400000, 14550],[1620259200000, 14600],[1620345600000, 14850],[1620604800000, 15400],[1620691200000, 15300],[1620777600000, 14900],[1620864000000, 14550],[1620950400000, 14700],[1621209600000, 15000],[1621296000000, 14950],[1621468800000, 14800],[1621555200000, 14650],[1621814400000, 14400],[1621900800000, 14450],[1621987200000, 14500],[1622073600000, 14600],[1622160000000, 14500],[1622419200000, 14650],[1622505600000, 14600],[1622592000000, 14500],[1622678400000, 14600],[1622764800000, 14700],[1623024000000, 15150],[1623110400000, 15050],[1623196800000, 14700],[1623283200000, 15100],[1623369600000, 14900],[1623628800000, 14650],[1623715200000, 14600],[1623801600000, 14550],[1623888000000, 14450],[1623974400000, 14450],[1624233600000, 14500],[1624320000000, 14450],[1624406400000, 14550],[1624492800000, 15400],[1624579200000, 15400],[1624838400000, 15750],[1624924800000, 15650],[1625011200000, 15650],[1625097600000, 15800],[1625184000000, 15750],[1625443200000, 16000],[1625529600000, 15700],[1625616000000, 16100],[1625702400000, 15350],[1625788800000, 14950],[1626048000000, 15050],[1626134400000, 14850],[1626220800000, 14750],[1626307200000, 14850],[1626393600000, 14800],[1626652800000, 15100],[1626739200000, 14900],[1626825600000, 14800],[1626912000000, 14750],[1626998400000, 14600],[1627257600000, 14400],[1627344000000, 14400],[1627430400000, 14450],[1627516800000, 14600],[1627603200000, 14650],[1627862400000, 14650],[1627948800000, 15300],[1628035200000, 15200],[1628121600000, 15100],[1628208000000, 14900],[1628467200000, 15250],[1628553600000, 14950],[1628640000000, 14850],[1628726400000, 15250],[1628812800000, 15050],[1629158400000, 14400],[1629244800000, 15150],[1629331200000, 14450],[1629417600000, 14600],[1629676800000, 14950],[1629763200000, 15300],[1629849600000, 15250],[1629936000000, 14950],[1630022400000, 14950],[1630281600000, 15000],[1630368000000, 14850],[1630454400000, 14750],[1630540800000, 15200],[1630627200000, 15100],[1630886400000, 15900],[1630972800000, 15500],[1631059200000, 15150],[1631145600000, 14750],[1631232000000, 15150],[1631491200000, 14800],[1631577600000, 15150],[1631664000000, 15100],[1631750400000, 15350],[1631836800000, 15050],[1632355200000, 17800],[1632441600000, 17950],[1632700800000, 18050],[1632787200000, 16500],[1632873600000, 18550],[1632960000000, 17850],[1633046400000, 19600],[1633392000000, 16850],[1633478400000, 17750],[1633564800000, 20050],[1633651200000, 19350],[1633996800000, 18750],[1634083200000, 18300],[1634169600000, 19000],[1634256000000, 18150],[1634515200000, 17800],[1634601600000, 17250],[1634688000000, 17400],[1634774400000, 16350],[1634860800000, 16650],[1635120000000, 16150],[1635206400000, 16400],[1635292800000, 16400],[1635379200000, 16950],[1635465600000, 16350],[1635724800000, 15700],[1635811200000, 15650],[1635897600000, 15400],[1635984000000, 15100],[1636070400000, 14850],[1636329600000, 14900],[1636416000000, 14350],[1636502400000, 14300],[1636588800000, 13650],[1636675200000, 13900],[1636934400000, 14550],[1637020800000, 14500],[1637107200000, 13900],[1637193600000, 14050],[1637280000000, 13800],[1637539200000, 13900],[1637625600000, 13800],[1637712000000, 13450],[1637798400000, 13450],[1637884800000, 13900],[1638144000000, 13850],[1638230400000, 15200],[1638316800000, 14900],[1638403200000, 14800],[1638489600000, 14950],[1638748800000, 14400],[1638835200000, 14700],[1638921600000, 14750],[1639008000000, 14500],[1639094400000, 14500],[1639353600000, 14600],[1639440000000, 15150],[1639526400000, 15700],[1639612800000, 15300],[1639699200000, 15450],[1639958400000, 14750],[1640044800000, 14400],[1640131200000, 14900],[1640217600000, 14650],[1640304000000, 14450],[1640563200000, 14900],[1640649600000, 14500],[1640736000000, 14750],[1640822400000, 14600],[1641168000000, 14950],[1641254400000, 14900],[1641340800000, 14550],[1641427200000, 14250],[1641513600000, 14600],[1641772800000, 14600],[1641859200000, 14350],[1641945600000, 14350],[1642032000000, 14100],[1642118400000, 13850],[1642377600000, 13350],[1642464000000, 13050],[1642550400000, 12600],[1642636800000, 12800],[1642723200000, 12800],[1642982400000, 12550],[1643068800000, 11700],[1643155200000, 11900],[1643241600000, 11250],[1643328000000, 11700],[1643846400000, 12300],[1643932800000, 12450],[1644192000000, 12700],[1644278400000, 12300],[1644364800000, 13150],[1644451200000, 13200],[1644537600000, 12400],[1644796800000, 11850],[1644883200000, 11950],[1644969600000, 12450],[1645056000000, 12450],[1645142400000, 12400],[1645401600000, 12900],[1645488000000, 12750],[1645574400000, 12650],[1645660800000, 12150],[1645747200000, 12450],[1646006400000, 12650],[1646179200000, 12800],[1646265600000, 12900],[1646352000000, 12950],[1646611200000, 12900],[1646697600000, 12850],[1646870400000, 12900],[1646956800000, 12850],[1647216000000, 12550],[1647302400000, 12850],[1647388800000, 13150],[1647475200000, 13550],[1647561600000, 14350],[1647820800000, 13850],[1647907200000, 13650],[1647993600000, 13650],[1648080000000, 13600],[1648166400000, 13900],[1648425600000, 13750],[1648512000000, 13750],[1648598400000, 13900],[1648684800000, 13650],[1648771200000, 13400],[1649030400000, 13350],[1649116800000, 13300],[1649203200000, 13150],[1649289600000, 13150],[1649376000000, 13150],[1649635200000, 13050],[1649721600000, 12800],[1649808000000, 12950],[1649894400000, 13200],[1649980800000, 13250],[1650240000000, 13200],[1650326400000, 13200],[1650412800000, 13050],[1650499200000, 12950],[1650585600000, 12900],[1650844800000, 12500],[1650931200000, 12600],[1651017600000, 12400],[1651104000000, 12600],[1651190400000, 12700],[1651449600000, 12600],[1651536000000, 12700],[1651622400000, 12500],[1651795200000, 12200],[1652054400000, 11750],[1652140800000, 11700],[1652227200000, 11900],[1652313600000, 11450],[1652400000000, 11750],[1652659200000, 11850],[1652745600000, 11900],[1652832000000, 12000],[1652918400000, 11900],[1653004800000, 11850],[1653264000000, 12100],[1653350400000, 11850],[1653436800000, 11800],[1653523200000, 11850],[1653609600000, 11850],[1653868800000, 12050],[1653955200000, 11900],[1654128000000, 11900],[1654214400000, 11900],[1654560000000, 11550],[1654646400000, 11500],[1654732800000, 11350],[1654819200000, 11050],[1655078400000, 10450],[1655164800000, 10100],[1655251200000, 9960],[1655337600000, 9600],[1655424000000, 9890],[1655683200000, 9410],[1655769600000, 9570],[1655856000000, 9650],[1655942400000, 9050],[1656028800000, 9350],[1656288000000, 9670],[1656374400000, 9820],[1656460800000, 9840],[1656547200000, 9690],[1656633600000, 9590],[1656892800000, 9360],[1656979200000, 9850],[1657065600000, 10350],[1657152000000, 10500],[1657238400000, 10500],[1657497600000, 10900],[1657584000000, 10950],[1657670400000, 10950],[1657756800000, 10950],[1657843200000, 11000],[1658102400000, 11000],[1658188800000, 11100],[1658275200000, 11150],[1658361600000, 11050],[1658448000000, 10800],[1658707200000, 10750],[1658793600000, 10750],[1658880000000, 10750],[1658966400000, 10750],[1659052800000, 10550],[1659312000000, 10400],[1659398400000, 10250],[1659484800000, 10600],[1659571200000, 10650],[1659657600000, 10800],[1659916800000, 10800],[1660003200000, 10700],[1660089600000, 10500],[1660176000000, 10700],[1660262400000, 10600],[1660608000000, 10650],[1660694400000, 10600],[1660780800000, 10350],[1660867200000, 10200],[1661126400000, 10100],[1661212800000, 9990],[1661299200000, 10050],[1661385600000, 10200],[1661472000000, 10150],[1661731200000, 9850],[1661817600000, 9950],[1661904000000, 10050],[1661990400000, 9740],[1662076800000, 9650],[1662336000000, 9500],[1662422400000, 9510],[1662508800000, 9280],[1662595200000, 9290],[1663027200000, 9610],[1663113600000, 9480],[1663200000000, 9370],[1663286400000, 9250],[1663545600000, 8990],[1663632000000, 9080],[1663718400000, 9090],[1663804800000, 8960],[1663891200000, 8780],[1664150400000, 8300],[1664236800000, 8250],[1664323200000, 8170],[1664409600000, 8400],[1664496000000, 8260],[1664841600000, 8770],[1664928000000, 8650],[1665014400000, 8780],[1665100800000, 8760],[1665446400000, 8600],[1665532800000, 8720],[1665619200000, 8400],[1665705600000, 8650],[1665964800000, 8910],[1666051200000, 9030],[1666137600000, 8950],[1666224000000, 8900],[1666310400000, 8810],[1666569600000, 8860],[1666656000000, 9190],[1666742400000, 9140],[1666828800000, 9120],[1666915200000, 9110],[1667174400000, 9030],[1667260800000, 9000],[1667347200000, 9080],[1667433600000, 9000],[1667520000000, 9030],[1667779200000, 9070],[1667865600000, 9100],[1667952000000, 9110],[1668038400000, 9050],[1668124800000, 9170],[1668384000000, 9270],[1668470400000, 9550],[1668556800000, 9390],[1668643200000, 9200],[1668729600000, 9180],[1668988800000, 8920],[1669075200000, 8890],[1669161600000, 8920],[1669248000000, 8970],[1669334400000, 8980],[1669593600000, 8770],[1669680000000, 8840],[1669766400000, 9020],[1669852800000, 9220],[1669939200000, 9280],[1670198400000, 9270],[1670284800000, 9300],[1670371200000, 9280],[1670457600000, 9200],[1670544000000, 9250],[1670803200000, 9520],[1670889600000, 9980],[1670976000000, 9870],[1671062400000, 10200],[1671148800000, 9970],[1671408000000, 9660],[1671494400000, 9400],[1671580800000, 9840],[1671667200000, 9780],[1671753600000, 9580],[1672012800000, 9660],[1672099200000, 9610],[1672185600000, 9520],[1672272000000, 9260],[1672617600000, 9500],[1672704000000, 9200],[1672790400000, 9330],[1672876800000, 9350],[1672963200000, 9410],[1673222400000, 9490],[1673308800000, 9390],[1673395200000, 9470],[1673481600000, 9400],[1673568000000, 9330],[1673827200000, 9340],[1673913600000, 9230],[1674000000000, 9170],[1674086400000, 9170],[1674172800000, 9200],[1674604800000, 9210],[1674691200000, 9270],[1674777600000, 9290],[1675036800000, 9330],[1675123200000, 9380],[1675209600000, 9430],[1675296000000, 9480],[1675382400000, 9400],[1675641600000, 9430],[1675728000000, 9570],[1675814400000, 9480],[1675900800000, 9490],[1675987200000, 9430],[1676246400000, 9430],[1676332800000, 9400],[1676419200000, 9270],[1676505600000, 9340],[1676592000000, 9220],[1676851200000, 9320],[1677024000000, 9120],];

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
        chart_M3.series[0].setData(value); // 캔들 차트
        chart_M3.series[1].setData(value5); // 주가 선차트
        chart_M3.series[1].name = '종가'; // 라벨 변경

        // 캔들 + 선 차트 생성 (6개월) 
        var chart_M6 = Highcharts.stockChart('containeroutline1_2_M6', Object.assign({}, chartOptions, { xAxis: xAxisOptions_M6 }));
        chart_M6.series[0].setData(value); // 캔들 차트
        chart_M6.series[1].setData(value5); // 주가 선차트
        chart_M6.series[1].name = '종가'; // 라벨 변경

        // 선 차트 생성 (1년)
        var chart_Y1 = Highcharts.stockChart('containeroutline1_2_Y1', Object.assign({}, chartOptions, { xAxis: xAxisOptions_Y1 }));
        chart_Y1.series[0].setData([]); // 캔들 차트
        chart_Y1.series[1].setData(value5); // 주가 선차트

        // 선 차트 생성 (3년)
        var chart_Y3 = Highcharts.stockChart('containeroutline1_2_Y3', Object.assign({}, chartOptions, { xAxis: xAxisOptions_Y3 }));
        chart_Y3.series[0].setData([]); // 캔들 차트
        chart_Y3.series[1].setData(value5); // 주가 선차트

        // 선 차트 생성 (10년)
        var chart_Y10 = Highcharts.stockChart('containeroutline1_2_Y10', Object.assign({}, chartOptions, { xAxis: xAxisOptions_Y10 }));
        chart_Y10.series[0].setData([]); // 주가 선차트
        chart_Y10.series[1].setData(value5); // 주가 선차트

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