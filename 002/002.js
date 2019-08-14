// 只需要等待页面中的DOM结构加载完毕，就能执行包裹的代码
// $(function(){
//     $('#box').css('color', 'red');
// });

// jQuery(function(){
//     jQuery('#box').css('color', 'blue');
// });

// $(function(){
//     // jQuery对象方法内部
//     alert($)
//     // jQuery对象返回的对象，还是jQuery
//     alert($());
//     alert($('#box'));
//     alert($('#box').css('color', 'blue'));
// });

// $(function(){
//     $('#box').css('color', 'red').css('font-size', '50px').css('font-weight', 'bold');
// });

// 可执行多次，不会被覆盖
// $(document).ready(function(){
//     alert('1');
// });
// $(document).ready(function(){
//     alert('2');
// });

// $(function(){
//     // 获取指定id元素的节点
//     alert(document.getElementById('box'));
//     alert($('#box').get(0));
//     // 返回jQuery对象
//     alert($(document.getElementById('box')));
//     $(document.getElementById('box')).css('color', 'blue').css('font-size', '50px').css('font-weight', 'bold');
// });

// 当页面完全加载后在window上触发，或当框架集加载完毕后在框架集上触发
// window.onload = function() {
//     alert('1');
// }

$(function(){

});