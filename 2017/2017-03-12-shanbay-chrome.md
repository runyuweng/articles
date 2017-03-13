# Shanbay chrome
## 开发过程中碰到的一些问题
以下问题按遇到的时间排序，以此可以清晰的了解到这个chrome插件开发的过程。

1. popup.js background.js 以及 myscript.js 三个运行在不通同地方的js之间如何进行信息的传递？
2. 选中内容后出现弹窗的位置如何确定？
3. 按照视口大小分页如何实现？（虽然基本实现此功能但仍有很大改进的余地）
4. 页面安全政策禁止audio的播放，如何解决？

## 解决方案（与问题相对应）
1. 使用chrome自带的chrome.runtime以及chrome.extension接口，  
runtime可以是content script和background通信，  
而extension可以使background和popup通信。
2. 先获取到select的range，然后使用``getBoundingClientRect()``方法获取选中部分的位置和宽高。
3. 通过高度来切割窗口，但是还存在的问题是分页可能将文字上下分开。
4. 在background中播放音频。
