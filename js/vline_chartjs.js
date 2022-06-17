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
                    },  {
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
                    },  {
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
                    },  {
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
                    },  {
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
                categories: ['2012.03','2012.06','2012.09','2012.12','2013.03','2013.06','2013.09','2013.12','2014.03','2014.06','2014.09','2014.12','2015.03','2015.06','2015.09','2015.12','2016.03','2016.06','2016.09','2016.12','2017.03','2017.06','2017.09','2017.12','2018.03','2018.06','2018.09','2018.12','2019.03','2019.06','2019.09','2019.12','2020.03','2020.06','2020.09','2020.12','2021.03','2021.06','2021.09',],  
                type: 'datetime',                
                labels: {
                    formatter: function() {
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
                data: [1732872.71,1814453.96,1923487.01,2011036.13,2087011.91,2185686.6,2254748.89,2286926.67,2294998.98,2243886.79,2127524.9,2062059.87,1996485.79,1958328.89,2000681.51,2006534.82,2033178.16,2057173.97,2018504.58,2018667.45,2026320.19,2126954.36,2269287.04,2395753.76,2495915.64,2470736.85,2504847.77,2437714.15,2355932.47,2332376.93,2297811.71,2304008.81,2333405.13,2301795.51,2351402.4,2368069.88,2468703.13,2575757.56,2645907.83,],
                tooltip: {
                    pointFormat: '<span style="color:#656d7e">{series.name} : <b>{point.y:,.0f}억원</b><br/>'
                },
            }, {
                name: '영업이익(우)',
                type: 'line',
                yAxis: 1,
                data: [184854.75,211053.27,248073.4,290493.38,321921.67,353293.86,374996.33,367850.13,364943.54,341509.94,280479.22,250250.71,225156.39,222262.53,255591.04,264134.42,271098.87,283559,261626.16,292406.72,324632.21,383858.18,477188.88,536450.38,593888.47,601913.35,632330.41,588866.69,494777.81,412058.11,314088.38,277685.09,279825.72,295317.99,341071.45,359938.76,389293.99,433498.52,468141.45,],                
            }, {
                name: '지배지분순이익(우)',
                type: 'line',
                yAxis: 1,
                data: [155288.94,171209.8,202456.95,231853.75,253013.99,278273.73,294520.38,298212.15,303289.77,289304.67,250163.52,230824.99,201171.42,195673.7,207380.52,186946.28,194388.11,196382.55,187409.41,224156.55,246406.81,296144.45,362454.26,413445.69,454678.7,456494.75,475771.32,438908.77,373865.34,314695.17,246071.28,215050.54,212871.63,217115.97,248733.72,260908.46,282940.33,322557.45,350461.38,],                
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
                    format: '{value:%y }'+'년',
                },                                
                showFirstLabel:true,
                showLastLabel:true,
                min:Date.UTC(2018), //차트 시작 년도                
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
                data: [[Date.UTC(2018, 01,01),20000],[Date.UTC(2018, 11,30),16600],[Date.UTC(2018, 12,28),17200],[Date.UTC(2019, 01,31),14500],[Date.UTC(2019, 02,28),15000],[Date.UTC(2019, 03,29),19250],[Date.UTC(2019, 04,30),17450],[Date.UTC(2019, 05,31),14550],[Date.UTC(2019, 06,28),16750],[Date.UTC(2019, 07,31),12950],[Date.UTC(2019, 08,30),12200],[Date.UTC(2019, 09,30),11350],[Date.UTC(2019, 10,31),12150],[Date.UTC(2019, 11,29),11300],[Date.UTC(2019, 12,30),12400],[Date.UTC(2020, 01,31),11200],[Date.UTC(2020, 02,28),10050],[Date.UTC(2020, 03,31),7750],[Date.UTC(2020, 04,29),10650],[Date.UTC(2020, 05,29),13350],[Date.UTC(2020, 06,30),12200],[Date.UTC(2020, 07,31),12850],[Date.UTC(2020, 08,31),12700],[Date.UTC(2020, 09,29),13200],[Date.UTC(2020, 10,30),12600],[Date.UTC(2020, 11,30),12000],[Date.UTC(2020, 12,30),13750],[Date.UTC(2021, 01,29),16500],[Date.UTC(2021, 02,26),16600],[Date.UTC(2021, 03,31),16350],[Date.UTC(2021, 04,30),16600],[Date.UTC(2021, 05,31),15850],[Date.UTC(2021, 06,30),16200],[Date.UTC(2021, 07,30),15700],[Date.UTC(2021, 08,31),14700],[Date.UTC(2021, 09,30),13500],[Date.UTC(2021, 10,29),12750],[Date.UTC(2021, 11,30),12100],[Date.UTC(2021, 12,30),24700],[Date.UTC(2022, 01,28),24300],[Date.UTC(2022, 02,28),26000]],                
                yAxis: 0,
                tooltip: {
                    headerFormat: '<span style="color:{series.color};">{series.name}</span> : {point.x:%Y-%m-%d}' + '  ',
                    pointFormat: '<strong>{point.y}</strong></span> 점',
                },
            }, {
                name: '순이익지수[우]',
                data: [[Date.UTC(2007, 03),1000],[Date.UTC(2007, 06),10000],[Date.UTC(2017, 06),10000],[Date.UTC(2019, 01,31),14500],[Date.UTC(2019, 02,28),15000],[Date.UTC(2022, 01,28),24300],[Date.UTC(2022, 02,28),26000]],
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
                        allowOverlap : true,
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
});