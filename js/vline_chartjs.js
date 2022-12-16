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
        var value = [[Date.UTC(2012, 4, 09),118000,120000,116500,119500],[Date.UTC(2020, 4, 10),118000,121000,117500,121000],[Date.UTC(2022, 4, 11),121500,124500,120000,122500],[Date.UTC(2022, 4, 12),122500,129000,122500,127500],[Date.UTC(2022, 4, 13),127500,133000,127000,133000],[Date.UTC(2022, 4, 16),134000,134000,128000,131500],[Date.UTC(2022, 4, 17),133000,139000,131000,138000],[Date.UTC(2022, 4, 18),139500,144000,138500,141500],[Date.UTC(2022, 4, 19),142500,152000,138000,149500],[Date.UTC(2022, 4, 20),150000,156000,147500,155500],[Date.UTC(2022, 4, 23),156000,163500,155000,156000],[Date.UTC(2022, 4, 24),156000,159000,150000,153500],[Date.UTC(2022, 4, 25),153000,155500,146000,150500],[Date.UTC(2022, 4, 26),150500,157500,150000,156500],[Date.UTC(2022, 4, 27),156000,162000,154500,160000],[Date.UTC(2022, 4, 30),160500,165000,160500,164000],[Date.UTC(2022, 4, 31),163500,164000,158000,159000],[Date.UTC(2022, 5, 02),159000,161500,158000,159000],[Date.UTC(2022, 5, 03),159000,160000,151000,154500],[Date.UTC(2022, 5, 07),154500,158000,152500,157500],[Date.UTC(2022, 5, 08),157000,159500,154500,158500],[Date.UTC(2022, 5, 09),158500,159500,156000,157500],[Date.UTC(2022, 5, 10),157000,160000,153500,157000],[Date.UTC(2022, 5, 13),156500,160000,155000,159500],[Date.UTC(2022, 5, 14),159000,159500,157000,158000],[Date.UTC(2022, 5, 15),157000,161500,156500,160500],[Date.UTC(2022, 5, 16),161500,163500,160000,163000],[Date.UTC(2022, 5, 17),162500,164500,159500,162000],[Date.UTC(2022, 5, 20),160500,161500,154500,154500],[Date.UTC(2022, 5, 21),154500,160500,154000,158500],[Date.UTC(2022, 5, 22),158500,160500,157500,158500],[Date.UTC(2022, 5, 23),158000,160000,156500,157500],[Date.UTC(2022, 5, 24),157500,162500,157500,161500],[Date.UTC(2022, 5, 27),162500,169500,162000,169500],[Date.UTC(2022, 5, 28),171000,182000,169500,182000],[Date.UTC(2022, 5, 29),182000,188500,177500,182000],[Date.UTC(2022, 5, 30),182000,182000,173000,180000],[Date.UTC(2022, 6, 01),177000,180000,174000,177000],[Date.UTC(2022, 6, 04),176000,182500,176000,182500],[Date.UTC(2022, 6, 05),181500,185500,179500,184500],[Date.UTC(2022, 6, 06),184500,184500,180000,182500],[Date.UTC(2022, 6, 07),182500,184500,180000,181000],[Date.UTC(2022, 6, 08),182000,188000,181500,182000],[Date.UTC(2022, 6, 11),181500,183000,180000,182500],[Date.UTC(2022, 6, 12),182500,188000,181500,184000],[Date.UTC(2022, 6, 13),183000,189000,183000,185500],[Date.UTC(2022, 6, 14),187500,188000,183500,186000],[Date.UTC(2022, 6, 15),186000,186500,179500,185500],[Date.UTC(2022, 6, 18),184000,188500,184000,184500],[Date.UTC(2022, 6, 19),184500,187000,178000,178500],[Date.UTC(2022, 6, 20),180000,183000,179000,181500],[Date.UTC(2022, 6, 21),181500,185000,180500,183000],[Date.UTC(2022, 6, 22),183000,184500,177500,183000],[Date.UTC(2022, 6, 25),183000,186000,177500,181000],[Date.UTC(2022, 6, 26),181000,188000,180500,184500],[Date.UTC(2022, 6, 27),184500,185500,182000,184000],[Date.UTC(2022, 6, 28),184000,186500,182000,185000],[Date.UTC(2022, 6, 29),185000,186500,183000,185000],[Date.UTC(2022, 7, 01),184000,189500,184000,187500],[Date.UTC(2022, 7, 02),187000,190000,186500,189000],[Date.UTC(2022, 7, 03),191000,191000,188500,190500],[Date.UTC(2022, 7, 04),193000,193500,188500,191000],[Date.UTC(2022, 7, 05),191000,192000,188000,190000],[Date.UTC(2022, 7, 08),190000,194500,188500,193000],[Date.UTC(2022, 7, 09),193000,196000,192000,193500],[Date.UTC(2022, 7, 10),195500,195500,192000,193000],[Date.UTC(2022, 7, 11),193500,198000,193500,198000],[Date.UTC(2022, 7, 12),198000,205500,198000,205000],[Date.UTC(2022, 7, 16),205000,211000,204000,208500],[Date.UTC(2022, 7, 17),208500,213500,206500,210500],[Date.UTC(2022, 7, 18),209500,212000,208000,209000],[Date.UTC(2022, 7, 19),209000,209500,206500,207000],[Date.UTC(2022, 7, 22),207000,210500,207000,208500],[Date.UTC(2022, 7, 23),210000,211000,207500,209000],[Date.UTC(2022, 7, 24),209000,211500,209000,210500],[Date.UTC(2022, 7, 25),210500,212000,208000,212000],[Date.UTC(2022, 7, 26),212500,214500,211000,211500],[Date.UTC(2022, 7, 29),211000,212500,207500,208000],[Date.UTC(2022, 7, 30),208000,209000,201000,208500],[Date.UTC(2022, 7, 31),206500,211000,196500,208000],[Date.UTC(2022, 8, 01),207500,210000,206500,206500],[Date.UTC(2022, 8, 02),206500,210000,206000,209500],[Date.UTC(2022, 8, 05),209500,213000,209000,212500],[Date.UTC(2022, 8, 06),214500,217000,213000,216500],[Date.UTC(2022, 8, 07),215500,222000,215500,216500],[Date.UTC(2022, 8, 08),218000,219000,216500,217000],[Date.UTC(2022, 8, 13),217500,218000,215000,216500],[Date.UTC(2022, 8, 14),215000,218000,215000,218000],[Date.UTC(2022, 8, 15),219500,221500,217000,220000],[Date.UTC(2022, 8, 16),220000,222500,218500,222500],[Date.UTC(2022, 8, 19),222500,226500,222000,226500],[Date.UTC(2022, 8, 20),228000,232000,225500,226500],[Date.UTC(2022, 8, 21),229000,230500,226500,229500],[Date.UTC(2022, 8, 22),230000,241000,229500,240500],[Date.UTC(2022, 8, 23),241000,275000,239000,260500],[Date.UTC(2022, 8, 26),261500,264500,245500,252000],[Date.UTC(2022, 8, 27),250500,253500,247500,249000],[Date.UTC(2022, 8, 28),249500,253500,246500,246500],[Date.UTC(2022, 8, 29),246000,270000,246000,265500],[Date.UTC(2022, 8, 30),269000,284000,263500,267500],[Date.UTC(2022, 9, 04),270000,280500,265500,279500],[Date.UTC(2022, 9, 05),285000,285500,278500,282000]];
        var value5 = [[Date.UTC(2012, 4, 09),115100],[Date.UTC(2020, 4, 10),116700],[Date.UTC(2022, 4, 11),118600],[Date.UTC(2022, 4, 12),121500],[Date.UTC(2022, 4, 13),124700],[Date.UTC(2022, 4, 16),127100],[Date.UTC(2022, 4, 17),130500],[Date.UTC(2022, 4, 18),134300],[Date.UTC(2022, 4, 19),138700],[Date.UTC(2022, 4, 20),143200],[Date.UTC(2022, 4, 23),148100],[Date.UTC(2022, 4, 24),151200],[Date.UTC(2022, 4, 25),153000],[Date.UTC(2022, 4, 26),154400],[Date.UTC(2022, 4, 27),155300],[Date.UTC(2022, 4, 30),156900],[Date.UTC(2022, 4, 31),158000],[Date.UTC(2022, 5, 02),159700],[Date.UTC(2022, 5, 03),159300],[Date.UTC(2022, 5, 07),158800],[Date.UTC(2022, 5, 08),157700],[Date.UTC(2022, 5, 09),157400],[Date.UTC(2022, 5, 10),157000],[Date.UTC(2022, 5, 13),158000],[Date.UTC(2022, 5, 14),158100],[Date.UTC(2022, 5, 15),158500],[Date.UTC(2022, 5, 16),159600],[Date.UTC(2022, 5, 17),160600],[Date.UTC(2022, 5, 20),159600],[Date.UTC(2022, 5, 21),159700],[Date.UTC(2022, 5, 22),159300],[Date.UTC(2022, 5, 23),158200],[Date.UTC(2022, 5, 24),158100],[Date.UTC(2022, 5, 27),161100],[Date.UTC(2022, 5, 28),165800],[Date.UTC(2022, 5, 29),170500],[Date.UTC(2022, 5, 30),175000],[Date.UTC(2022, 6, 01),178100],[Date.UTC(2022, 6, 04),180700],[Date.UTC(2022, 6, 05),181200],[Date.UTC(2022, 6, 06),181300],[Date.UTC(2022, 6, 07),181500],[Date.UTC(2022, 6, 08),182500],[Date.UTC(2022, 6, 11),182500],[Date.UTC(2022, 6, 12),182400],[Date.UTC(2022, 6, 13),183000],[Date.UTC(2022, 6, 14),184000],[Date.UTC(2022, 6, 15),184700],[Date.UTC(2022, 6, 18),185100],[Date.UTC(2022, 6, 19),184000],[Date.UTC(2022, 6, 20),183200],[Date.UTC(2022, 6, 21),182600],[Date.UTC(2022, 6, 22),182100],[Date.UTC(2022, 6, 25),181400],[Date.UTC(2022, 6, 26),182600],[Date.UTC(2022, 6, 27),183100],[Date.UTC(2022, 6, 28),183500],[Date.UTC(2022, 6, 29),183900],[Date.UTC(2022, 7, 01),185200],[Date.UTC(2022, 7, 02),186100],[Date.UTC(2022, 7, 03),187400],[Date.UTC(2022, 7, 04),188600],[Date.UTC(2022, 7, 05),189600],[Date.UTC(2022, 7, 08),190700],[Date.UTC(2022, 7, 09),191600],[Date.UTC(2022, 7, 10),192100],[Date.UTC(2022, 7, 11),193500],[Date.UTC(2022, 7, 12),196500],[Date.UTC(2022, 7, 16),199600],[Date.UTC(2022, 7, 17),203000],[Date.UTC(2022, 7, 18),206200],[Date.UTC(2022, 7, 19),208000],[Date.UTC(2022, 7, 22),208700],[Date.UTC(2022, 7, 23),208800],[Date.UTC(2022, 7, 24),208800],[Date.UTC(2022, 7, 25),209400],[Date.UTC(2022, 7, 26),210300],[Date.UTC(2022, 7, 29),210200],[Date.UTC(2022, 7, 30),210100],[Date.UTC(2022, 7, 31),209600],[Date.UTC(2022, 8, 01),208500],[Date.UTC(2022, 8, 02),208100],[Date.UTC(2022, 8, 05),209000],[Date.UTC(2022, 8, 06),210600],[Date.UTC(2022, 8, 07),212300],[Date.UTC(2022, 8, 08),214400],[Date.UTC(2022, 8, 13),215800],[Date.UTC(2022, 8, 14),216900],[Date.UTC(2022, 8, 15),217600],[Date.UTC(2022, 8, 16),218800],[Date.UTC(2022, 8, 19),220700],[Date.UTC(2022, 8, 20),222700],[Date.UTC(2022, 8, 21),225000],[Date.UTC(2022, 8, 22),229100],[Date.UTC(2022, 8, 23),236700],[Date.UTC(2022, 8, 26),241800],[Date.UTC(2022, 8, 27),246300],[Date.UTC(2022, 8, 28),249700],[Date.UTC(2022, 8, 29),254700],[Date.UTC(2022, 8, 30),256100],[Date.UTC(2022, 9, 04),261600],[Date.UTC(2022, 9, 05),268200]];
        var value20 = [[Date.UTC(2012, 4, 09),110725],[Date.UTC(2020, 4, 10),111475],[Date.UTC(2022, 4, 11),112150],[Date.UTC(2022, 4, 12),113100],[Date.UTC(2022, 4, 13),114325],[Date.UTC(2022, 4, 16),115425],[Date.UTC(2022, 4, 17),116900],[Date.UTC(2022, 4, 18),118550],[Date.UTC(2022, 4, 19),120600],[Date.UTC(2022, 4, 20),122950],[Date.UTC(2022, 4, 23),125225],[Date.UTC(2022, 4, 24),127375],[Date.UTC(2022, 4, 25),129475],[Date.UTC(2022, 4, 26),131825],[Date.UTC(2022, 4, 27),134250],[Date.UTC(2022, 4, 30),136800],[Date.UTC(2022, 4, 31),139100],[Date.UTC(2022, 5, 02),141400],[Date.UTC(2022, 5, 03),143475],[Date.UTC(2022, 5, 07),145500],[Date.UTC(2022, 5, 08),147450],[Date.UTC(2022, 5, 09),149275],[Date.UTC(2022, 5, 10),151000],[Date.UTC(2022, 5, 13),152600],[Date.UTC(2022, 5, 14),153850],[Date.UTC(2022, 5, 15),155300],[Date.UTC(2022, 5, 16),156550],[Date.UTC(2022, 5, 17),157575],[Date.UTC(2022, 5, 20),157825],[Date.UTC(2022, 5, 21),157975],[Date.UTC(2022, 5, 22),158100],[Date.UTC(2022, 5, 23),158300],[Date.UTC(2022, 5, 24),158850],[Date.UTC(2022, 5, 27),159500],[Date.UTC(2022, 5, 28),160600],[Date.UTC(2022, 5, 29),161500],[Date.UTC(2022, 5, 30),162550],[Date.UTC(2022, 6, 01),163450],[Date.UTC(2022, 6, 04),164850],[Date.UTC(2022, 6, 05),166200],[Date.UTC(2022, 6, 06),167400],[Date.UTC(2022, 6, 07),168575],[Date.UTC(2022, 6, 08),169825],[Date.UTC(2022, 6, 11),170975],[Date.UTC(2022, 6, 12),172275],[Date.UTC(2022, 6, 13),173525],[Date.UTC(2022, 6, 14),174675],[Date.UTC(2022, 6, 15),175850],[Date.UTC(2022, 6, 18),177350],[Date.UTC(2022, 6, 19),178350],[Date.UTC(2022, 6, 20),179500],[Date.UTC(2022, 6, 21),180775],[Date.UTC(2022, 6, 22),181850],[Date.UTC(2022, 6, 25),182425],[Date.UTC(2022, 6, 26),182550],[Date.UTC(2022, 6, 27),182650],[Date.UTC(2022, 6, 28),182900],[Date.UTC(2022, 6, 29),183300],[Date.UTC(2022, 7, 01),183550],[Date.UTC(2022, 7, 02),183775],[Date.UTC(2022, 7, 03),184175],[Date.UTC(2022, 7, 04),184675],[Date.UTC(2022, 7, 05),185075],[Date.UTC(2022, 7, 08),185600],[Date.UTC(2022, 7, 09),186075],[Date.UTC(2022, 7, 10),186450],[Date.UTC(2022, 7, 11),187050],[Date.UTC(2022, 7, 12),188025],[Date.UTC(2022, 7, 16),189225],[Date.UTC(2022, 7, 17),190825],[Date.UTC(2022, 7, 18),192200],[Date.UTC(2022, 7, 19),193400],[Date.UTC(2022, 7, 22),194675],[Date.UTC(2022, 7, 23),196075],[Date.UTC(2022, 7, 24),197375],[Date.UTC(2022, 7, 25),198775],[Date.UTC(2022, 7, 26),200100],[Date.UTC(2022, 7, 29),201250],[Date.UTC(2022, 7, 30),202300],[Date.UTC(2022, 7, 31),203250],[Date.UTC(2022, 8, 01),204050],[Date.UTC(2022, 8, 02),204975],[Date.UTC(2022, 8, 05),206100],[Date.UTC(2022, 8, 06),207275],[Date.UTC(2022, 8, 07),208425],[Date.UTC(2022, 8, 08),209625],[Date.UTC(2022, 8, 13),210550],[Date.UTC(2022, 8, 14),211200],[Date.UTC(2022, 8, 15),211775],[Date.UTC(2022, 8, 16),212375],[Date.UTC(2022, 8, 19),213250],[Date.UTC(2022, 8, 20),214225],[Date.UTC(2022, 8, 21),215275],[Date.UTC(2022, 8, 22),216850],[Date.UTC(2022, 8, 23),219350],[Date.UTC(2022, 8, 26),221350],[Date.UTC(2022, 8, 27),223225],[Date.UTC(2022, 8, 28),225150],[Date.UTC(2022, 8, 29),228000],[Date.UTC(2022, 8, 30),230975],[Date.UTC(2022, 9, 04),234625],[Date.UTC(2022, 9, 05),238250]];
        var value60 = [[Date.UTC(2012, 4, 09),106410],[Date.UTC(2020, 4, 10),106798],[Date.UTC(2022, 4, 11),107173],[Date.UTC(2022, 4, 12),107633],[Date.UTC(2022, 4, 13),108198],[Date.UTC(2022, 4, 16),108740],[Date.UTC(2022, 4, 17),109380],[Date.UTC(2022, 4, 18),110083],[Date.UTC(2022, 4, 19),110908],[Date.UTC(2022, 4, 20),111783],[Date.UTC(2022, 4, 23),112683],[Date.UTC(2022, 4, 24),113483],[Date.UTC(2022, 4, 25),114317],[Date.UTC(2022, 4, 26),115233],[Date.UTC(2022, 4, 27),116167],[Date.UTC(2022, 4, 30),117142],[Date.UTC(2022, 4, 31),118033],[Date.UTC(2022, 5, 02),118933],[Date.UTC(2022, 5, 03),119750],[Date.UTC(2022, 5, 07),120608],[Date.UTC(2022, 5, 08),121492],[Date.UTC(2022, 5, 09),122358],[Date.UTC(2022, 5, 10),123208],[Date.UTC(2022, 5, 13),124092],[Date.UTC(2022, 5, 14),124975],[Date.UTC(2022, 5, 15),125867],[Date.UTC(2022, 5, 16),126800],[Date.UTC(2022, 5, 17),127717],[Date.UTC(2022, 5, 20),128508],[Date.UTC(2022, 5, 21),129375],[Date.UTC(2022, 5, 22),130225],[Date.UTC(2022, 5, 23),131058],[Date.UTC(2022, 5, 24),131958],[Date.UTC(2022, 5, 27),133008],[Date.UTC(2022, 5, 28),134275],[Date.UTC(2022, 5, 29),135533],[Date.UTC(2022, 5, 30),136767],[Date.UTC(2022, 6, 01),137950],[Date.UTC(2022, 6, 04),139242],[Date.UTC(2022, 6, 05),140583],[Date.UTC(2022, 6, 06),141858],[Date.UTC(2022, 6, 07),143108],[Date.UTC(2022, 6, 08),144325],[Date.UTC(2022, 6, 11),145558],[Date.UTC(2022, 6, 12),146817],[Date.UTC(2022, 6, 13),148083],[Date.UTC(2022, 6, 14),149375],[Date.UTC(2022, 6, 15),150658],[Date.UTC(2022, 6, 18),151925],[Date.UTC(2022, 6, 19),153092],[Date.UTC(2022, 6, 20),154275],[Date.UTC(2022, 6, 21),155483],[Date.UTC(2022, 6, 22),156725],[Date.UTC(2022, 6, 25),157917],[Date.UTC(2022, 6, 26),159133],[Date.UTC(2022, 6, 27),160317],[Date.UTC(2022, 6, 28),161517],[Date.UTC(2022, 6, 29),162717],[Date.UTC(2022, 7, 01),163958],[Date.UTC(2022, 7, 02),165158],[Date.UTC(2022, 7, 03),166342],[Date.UTC(2022, 7, 04),167508],[Date.UTC(2022, 7, 05),168633],[Date.UTC(2022, 7, 08),169725],[Date.UTC(2022, 7, 09),170733],[Date.UTC(2022, 7, 10),171758],[Date.UTC(2022, 7, 11),172758],[Date.UTC(2022, 7, 12),173817],[Date.UTC(2022, 7, 16),174800],[Date.UTC(2022, 7, 17),175717],[Date.UTC(2022, 7, 18),176600],[Date.UTC(2022, 7, 19),177492],[Date.UTC(2022, 7, 22),178458],[Date.UTC(2022, 7, 23),179333],[Date.UTC(2022, 7, 24),180175],[Date.UTC(2022, 7, 25),180975],[Date.UTC(2022, 7, 26),181850],[Date.UTC(2022, 7, 29),182667],[Date.UTC(2022, 7, 30),183567],[Date.UTC(2022, 7, 31),184408],[Date.UTC(2022, 8, 01),185208],[Date.UTC(2022, 8, 02),186075],[Date.UTC(2022, 8, 05),187000],[Date.UTC(2022, 8, 06),187950],[Date.UTC(2022, 8, 07),188925],[Date.UTC(2022, 8, 08),189867],[Date.UTC(2022, 8, 13),190758],[Date.UTC(2022, 8, 14),191692],[Date.UTC(2022, 8, 15),192783],[Date.UTC(2022, 8, 16),193850],[Date.UTC(2022, 8, 19),194983],[Date.UTC(2022, 8, 20),196133],[Date.UTC(2022, 8, 21),197267],[Date.UTC(2022, 8, 22),198450],[Date.UTC(2022, 8, 23),199758],[Date.UTC(2022, 8, 26),200925],[Date.UTC(2022, 8, 27),202075],[Date.UTC(2022, 8, 28),203233],[Date.UTC(2022, 8, 29),204617],[Date.UTC(2022, 8, 30),206000],[Date.UTC(2022, 9, 04),207617],[Date.UTC(2022, 9, 05),209300]];

        Highcharts.setOptions({
            lang: {
                thousandsSep: ','
            }
        });
        Highcharts.stockChart('containeroutline1_2', {

            chart: {
                // borderColor: '#333',
            },

            // 하단 네비게이션 제거
            navigator: {
                enabled: false,                     
            },

            // 스크롤바 제거
            scrollbar: {
                // enabled: false
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
                }, {
                    type: 'month',
                    count: 6,
                    text: '6개월',
                }, {
                    type: 'year',
                    count: 1,
                    text: '1년',
                }, {
                    type: 'year',
                    count: 3,
                    text: '3년',
                }, {
                    type: 'year',
                    count: 5,
                    text: '10년',
                }],

                buttonTheme: {
                    width: 70,
                    style: {
                        fontSize: 12,
                        color: '#222',                        
                    },
                    states: {                
                        hover: {
                            // fill: '#374b9d',                         
                            style: {
                                // color: '#fff',  
                                fontWeight: 'bold'
                            }                            
                        },        
                        select: {   
                            // fill: '#374b9d',                         
                            style: {
                                // color: '#fff',  
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

            colors: ["#AA79E2", "#F7C51E", "#66C33C"],

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
                    // format: '{value:,.0f}'
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
                    tooltip: {
                        useHTML: true,                        
                        headerFormat: '<span style="display: block; border-bottom: 1px solid #c8c8c8; padding-bottom: 3px; margin-bottom: 5px;"><b>{point.key} </b></span> </br>',
                        pointFormat: '<b>시가: {point.open}<br/>고가: {point.high}<br/>저가: {point.low}<br/>종가: {point.close}<br/></b>',
                    },
                    zIndex: 1
                },
                {
                    type: 'line',
                    name: '5일', 
                    data: value5,
                    tooltip: {
                        useHTML: true,
                        headerFormat: '',
                        pointFormat: '</br><span style="border-top: 1px solid #c8c8c8;">---------------</span></br><b> <span style="display: block; padding: 5px 0; border-top: 1px solid #c8c8c8;"> {series.name} : <span style="color: #656d7e;"> {point.y} </span></b></span>',
                    },
                    lineWidth : 1,
                }, {
                    type: 'line',
                    name: '20일',
                    data: value20,
                    tooltip: {
                        useHTML: true,
                        headerFormat: '',
                        pointFormat: '</br><b> <span style="display: block; padding: 5px 0; border-top: 1px solid #c8c8c8;"> {series.name} : <span style="color: #656d7e;"> {point.y} </span></b></span>',
                    },
                    lineWidth : 1,
                }, {
                    type: 'line',
                    name: '60일',
                    data: value60,
                    tooltip: {
                        useHTML: true,
                        headerFormat: '',
                        pointFormat: '</br><b> <span style="display: block; padding: 5px 0; border-top: 1px solid #c8c8c8;"> {series.name} : <span style="color: #656d7e;"> {point.y} </span></b></span>',
                    },
                    lineWidth : 1,
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