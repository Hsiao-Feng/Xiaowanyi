// ==UserScript==
// @name         OPAC Analy
// @namespace    http://hsiaofeng.com/plugin/opac-analy/
// @version      0.1
// @description  用 ECharts 替换汇文图书查询系统的“借阅趋势” Flash 图表。
// @author       Hsiao Feng
// @match        http://SYSTEM.DOMAIN/opac/item.php?marc_no=*
// @icon         #
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/echarts@5.3.0/dist/echarts.min.js
// ==/UserScript==

//***请将上面的 “match” 和下方第 26 行的 “request.open” 中的 “SYSTEM.DOMAIN” 替换成你的汇文系统的域名。

(function() {
    'use strict';
    let oldGraph = document.querySelector('#graph-2');
    let newGraph = document.createElement('div');
    let bookId = marc_no.value; //图书 ID
    let bookRentData = null;
    newGraph.id = 'graph-2';
    newGraph.style.height = '300px';
    oldGraph.parentNode.replaceChild(newGraph, oldGraph);

    let request = new XMLHttpRequest();
    request.open('GET', 'http://SYSTEM.DOMAIN/opac/ajax_lend_trend.php?id='+bookId);
    request.onload = function() {
        bookRentData = request.response;
        bookRentData = JSON.parse(bookRentData);
        var dom = document.getElementById("graph-2");
        var myChart = echarts.init(dom);
        var app = {};
        var option;
        option = {
            xAxis: {
                type: 'category',
                data: [bookRentData[0]['year'], bookRentData[1]['year'], bookRentData[2]['year'], bookRentData[3]['year'], bookRentData[4]['year'], bookRentData[5]['year'], bookRentData[6]['year'], bookRentData[7]['year'], bookRentData[8]['year'], bookRentData[9]['year']]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [bookRentData[0]['y'], bookRentData[1]['y'], bookRentData[2]['y'], bookRentData[3]['y'], bookRentData[4]['y'], bookRentData[5]['y'], bookRentData[6]['y'], bookRentData[7]['y'], bookRentData[8]['y'], bookRentData[9]['y']],
                    type: 'line',
                    smooth: true
                }
            ]
        };

        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
    };
    request.send();
})();