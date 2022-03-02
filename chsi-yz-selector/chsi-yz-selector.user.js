// ==UserScript==
// @name         中国研究生招生信息网—硕士专业目录便捷选择器
// @namespace    https://hsiaofeng.com/plugin/chsi-yz-selector/
// @version      0.3
// @description  将学科类别选择的下拉框替换为搜索框。
// @author       Hsiao Feng
// @match        https://yz.chsi.com.cn/zsml/*
// @icon         https://t1.chei.com.cn/yz/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let selector = document.querySelector('#yjxkdm');   //选择“学科”下拉框
    let submit = null;
    if(submit = document.querySelector('.ch-btn-big')){ //当位于首页时，删除“查询”按钮的判断功能
        submit.removeAttribute('onclick');
        submit.setAttribute('type', 'submit');
    }

    let newInput = document.createElement('input');     //新建“学科”输入框
    newInput.oninput = handleInput;                     //当“学科”输入框发生更改时，调用 handleInput() 函数

    let datalist = document.createElement('datalist');  //新建“学科”的数据表
    datalist.innerHTML = selector.innerHTML;            //复制“学科”下拉框的内容到“学科”数据表

    newInput.setAttribute('class', 'ch-select');        //复制“学科”下拉框的属性到“学科”输入框
    newInput.setAttribute('name', 'yjxkdm');
    newInput.setAttribute('id', 'yjxkdm');
    newInput.setAttribute('max-length', '40');
    newInput.setAttribute('list', 'dl');                //把“学科”输入框的数据源设为 #dl
    datalist.setAttribute('id', 'dl');                  //把“学科”数据表的 id 设为 dl

    selector.parentNode.insertBefore(newInput, selector);//将“学科”输入框添加到“学科”下拉框的前面
    selector.parentNode.insertBefore(datalist, selector);//将“学科”数据表添加到“学科”下拉框的前面
    selector.setAttribute('hidden', '');                 //隐藏“学科”下拉框

    function handleInput(e) {                            //当“学科”输入框发生更改时
        let value = e.target.value;                      //获取“学科”输入框的值（学科代码）
        selector.setAttribute('value', value);           //把该代码传给下拉框
        if(value.length == 4) {                          //如果“学科”输入框的值长度为 4，即为学科代码
            initZy();                                    //查询该学科专业，使“专业”下拉框更新
        }
    }

})();