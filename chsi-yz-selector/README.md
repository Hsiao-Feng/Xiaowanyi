# 中国研究生招生信息网—硕士专业目录便捷选择器
## 简介
中国研究生招生信息网的[硕士专业目录查询页面](https://yz.chsi.com.cn/zsml/queryAction.do)中，“学科类别”一项数量繁多，不便选择查询。本插件可将 `selector` 更换为 `input` + `datalist` 的模式，便于选择。
## 使用方法
本插件为 Tampermonkey 设计，在浏览器安装 Tampermonkey 后打开 https://hsiao-feng.github.io/Xiaowanyi/chsi-yz-selector/main.js 即可。

如果您无法打开上述页面，也可将本仓库内 [main.js](./main.js/) 内容复制到 Tampermonkey 的“添加新脚本...”中。
## 已知问题
不知为何，在选择主页面，会一直判定未选择“学科类别”。为解决该问题，插件删除了前端的选择判定。请记住查询规则——**学科类别为必选项，其他至少填写一项。**

本插件还存在可能大量请求网络的问题。