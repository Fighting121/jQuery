// 只需要等待页面的DOM结构加载完毕，就能执行包裹的代码
// id选择器
// $(function(){
//     $('#box').css('color', 'cyan').css('font-size', '50px').css('font-weight', 'bold');
// });

// 元素选择器
// $(function(){
//     $('div').css('color', 'cyan').css('font-size', '50px').css('font-weight', 'bold');
// });

// class选择器
// $(function(){
//     $('.pox').css('color', 'cyan').css('font-size', '50px').css('font-weight', 'bold');
// });

// $(function() {
//     // alert($('#box').length);
//     // alert($('div').length);
//     $('#box').css('color', 'cyan').css('font-size', '50px').css('font-weight', 'bold');
// });

// $(function(){
//     // alert($('.pox').length);
//     // $('.pox').css('color', 'blue').css('font-size', '50px').css('font-weight', 'bold');
//     // $('.pox').eq(1).css('color', 'blue').css('font-size', '50px').css('font-weight', 'bold');
// });

// $(function(){
//     $('#box > p').css('color', 'cyan').css('font-size', '50px').css('font-weight', 'bold');
// });

// $(function(){
//     $('#box p').css('color', 'green').css('font-size', '50px').css('font-weight', 'bold');
// });

// $(function(){
//     // $('#box').css('color', 'red');
//     // document.getElementById('box').style.color = 'red';
//     // if (document.getElementById('box')) {
//     //     document.getElementById('box').style.color = 'red';
//     // }
//
//     // if ($('#box').length > 0) {
//     //     $('#box').css('color', 'blue');
//     // }
//
//     // if ($('#box').get(0)) {
//     //     $('#box').css('color', 'blue').css('font-size', '50px').css('font-weight', 'bold');
//     // }
//
//     // if ($('#pox')[0]) {
//     //     $('#pox').css('color', 'green').css('font-size', '50px').css('font-weight', 'bold');
//     // }
// });

// $(function(){
//     $('div, p, strong').css('color', 'green').css('font-size', '50px').css('font-weight', 'bold');
// });

// $(function(){
//     $('#box, .pox, strong').css('color', 'yellow').css('font-size', '50px').css('font-weight', 'bold');
// });

// $(function(){
//     $('ul li a').css('color', 'red').css('font-size', '20px');
//     $('a').css('text-decoration', 'none');
// });

// $(function(){
//     $('*').css('color', 'green').css('font-size', '30px').css('font-weight', 'bold').css('text-decoration', 'none');
//     alert($('*').length);
//     alert($('*')[0].nodeName);
// });

// $(function(){
//     $('ul li a, ul li em, ul li strong').css('color', 'blue').css('font-size', '50px').css('font-weight', 'bold').css('text-decoration', 'none');
// });

// $(function(){
//     $('ul li').css('color', 'blue');
// });

// $(function(){
//     $('ul li, ul li a').css('color', 'blue').css('font-size', '50px').css('font-weight', 'bold').css('text-decoration', 'none');
// });

// $(function(){
//     $('ul li *').css('color', 'blue').css('font-size', '50px').css('font-weight', 'bold').css('text-decoration', 'none');
//     alert($('ul li *').length);
// });

// $(function(){
//     $('.box').css('color', 'cyan').css('font-size', '50px').css('font-weight', 'bold');
// });

// 选择器越复杂，字符串解析就越慢
// $(function(){
//     $('.box.pox').css('color', 'darkgreen');
// });

// 后代选择器
// $(function(){
//     $('#box p').css('color', 'darkgreen').css('font-size', '30px').css('font-weight', 'bold');
// });

// 后代选择器
// $(function(){
//     // alert($('#box').find('p').length);
//     $('#box').find('p').css('color', 'green').css('font-size', '30px').css('font-weight', 'bold');
// });

// 子选择器
// $(function(){
//     $('#box > p').css('color', 'darkcyan').css('font-size', '22px').css('font-weight', 'bold');
// });

// 子选择器
// $(function(){
//     $('#box').children('p').css('color', 'darkgreen').css();
// });

// 相邻兄弟选择器
// $(function(){
//     $('#box + p').css('color', 'blue').css('font-size', '50px').css('font-weight', 'bold');
// });

// 相邻兄弟选择器
// $(function(){
//     $('#box').next('p').css('color', 'red').css('font-size', '50px').css('font-weight', 'bold');
// });

// 普通兄弟选择器
// $(function(){
//     $('#box ~ p').css('color', 'blue');
// });

// 普通兄弟选择器
// $(function(){
//     $('#box').nextAll('p').css('color', 'blue').css('font-size', '50px').css('font-weight', 'bold');
// });

// $(function(){
//     $('#box').next().css('color', 'green');
// });

// 同级上一个元素
// $(function(){
//     $('#box').prev('p').css('color', 'blue').css('font-size', '50px').css('font-weight', 'bold');
// });

// 同级所有上面的元素
// $(function(){
//     $('#box').prevAll('p').css('color', 'blue').css('font-weight', 'bold');
// });

// 上下所有同级元素
// $(function(){
//     $('#box').siblings('p').css('color', 'blue').css('font-weight', 'bold');
// });

// 同级上非指定元素选定，遇到则停止
// $(function(){
//     $('#box').prevUntil('p').css('color', 'blue').css('font-size', '30px').css('font-weight', 'bold');
// });

// 同级下非指定元素选定，遇到则停止
$(function(){
    $('#box').nextUntil('p').css('color', 'blue').css('font-size', '22px').css('font-weight', 'bold');
});