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
// $(function(){
//     $('#box').nextUntil('p').css('color', 'blue').css('font-size', '22px').css('font-weight', 'bold');
// });

// $(function(){
//     $('#box').prevAll('p').css('color', 'blue');
//     $('#box').nextAll('p').css('color', 'blue');
// });

// 同级上下所有元素选定
// $(function(){
//     $('#box').siblings('p').css('color', 'red').css('font-size', '33px').css('font-weight', 'bold');
// });

// $(document).ready(function(){
//     $('#box').siblings('*').css('color', 'green').css('font-size', '34px').css('font-weight', 'bold');
// });


// $(function(){
//     $('#box p').css('color', 'blue');
// });

// $(function(){
//     $('p', '#box').css('color', 'green');
// });

// 子选择器
// $(function(){
//     $('#box').children('p').css('color', 'cyan').css('font-size', '25px');
// });

// 后代选择器
// $(function(){
//     $('#box').find('p').css('color', 'red');
// });

// jQuery内部会将这条语句转为$('#box').find('p')
// $(function(){
//     $('p', $('#box')).css('color', 'blue').css('font-size', '18px').css('font-weight', 'bold');
// });

// $(function(){
//     $('#box p').css('color', 'cyan');
// });

// 获取具有title属性的DOM对象
// $(function(){
//     $('a[title]').css('text-decoration', 'none').css('color', 'blue').css('font-size', '30px').css('font-weight', 'bold');
// });

// 获取具有这个属性且开头属性值匹配的DOM对象
// $(function(){
//     $('a[title^=num]').css('text-decoration', 'none').css('color', 'green').css('font-size', '30px').css('font-weight', 'bold');
// });

// 获取具有这个属性且等于属性值或开头属性值匹配后面跟一个"-"号的DOM对象
// $(function(){
//     $('a[title|=num]').css('text-decoration', 'none').css('color', 'green').css('font-size', '25px').css('font-weight', 'bold');
// });

// 获取具有这个属性且属性值包含一个指定字符串的DOM对象
// $(function(){
//     $('a[href*=baidu]').css('color', 'cyan').css('text-decoration', 'none');
// });

// $(function(){
//     $('a[title*=num]').css('font-size', '33px').css('text-decoration', 'none');
// });

// 获取具有这个属性的DOM对象
// $(function(){
//     $('a[title]').css('color', 'red').css('text-decoration', 'none').css('font-size', '25px').css('font-weight', 'bold');
// });

// 获取具有这个属性且等于属性值的DOM对象
// $(function(){
//     $('a[title=num]').css('color', 'cyan').css('font-size', '25px').css('font-weight', 'bold');
// });

// 获取具有这个属性且不等于属性值的DOM对象
// $(function(){
//     $('a[title!=num]').css('color', 'blue').css('text-decoration', 'none').css('font-size', '25px').css('font-weight', 'bold');
// });

// 获取具有这个属性且属性值是一个以空格分隔的列表，其中包含这个属性值的DOM对象
// $(function(){
//     $('a[title~=num]').css('color', 'red');
// });

// 获取具有多个属性且属性值匹配的DOM对象
// $(function(){
//     $('a[bbb][title=num]');
//     $('a[title=num]');
// });























// 基础DOM和CSS操作
// $(function(){
//     // 获取元素中HTML内容
//     alert($('#box').html());
//     // 设置元素中HTML内容
//     $('#box').html('<strong>上海市东方明珠</strong>');
//     $('#box').html($('#box').html() + '<em>南京路外滩路</em>');
// });

// $(function(){
//     // 获取元素中的文本内容
//     alert($('#box').text());
//     // 设置元素中的文本内容
//     $('#box').text('<strong>上海-东方明珠</strong>');
// });

// $(function(){
//     // 获取表单中的文本内容
//     alert($('#box').val());
//     // 设置表单中的文本内容
//     $('input').val('手机号');
// });

// $(function(){
//     // 获取表单中的文本内容
//     alert($('input').val());
//     // 设置表单中的文本内容
//     $('input').val('女');
// });

// 如果想设置多个选项的选定状态，可以传递数组操作
// $(function(){
//     $('input').val(["男", "中性"]);
// });

// 元素属性操作
$(function(){
    // 获取某个元素key属性的属性值
    // alert($('input').attr('type'));
    // 获取某个元素key属性的属性值
    // alert($('input').attr('value'));
    // 设置某个元素key属性的属性值
    // $('input').attr('type', 'radio');
    // 设置某个元素多个key属性的属性值
    // $('input').attr({'type':'radio', 'value':'男性'});
    // 通过匿名函数设置某个元素key属性的属性值
    // $('input').attr('type', function(){
    //     return 'radio';
    // });
    // 通过匿名函数设置某个元素key属性的属性值
    // $('input').attr('checked', function () {
    //     return 'checked';
    // });
    // 设置某个元素key属性的属性值
    // $("div").attr('title', '我是域名');
    // 设置某个元素多个key属性的属性值
    // $('div').attr({
    //     'title':'我是域名',
    //     'class':'red',
    //     'data':'123'
    // });
    // 通过匿名函数设置某个元素key属性的属性值
    // 可以不带参数
    // $('div').attr('title', function(){
    //     return '上海';
    // });
    // 可以只带一个参数index，表示操作的是第几个元素
    // $('div').attr('title', function(index){
    //     return '我是' + index + '号div';
    // });
    // // 可以带两个参数，第一个参数index，表示操作的是第几个元素，第二个参数value，表示属性原本的值
    // $('div').attr('title', function(index, value){
    //     return '原来的title是:' + value + '，现在的title是:我是' + (index + 1) + '号域名';
    // });

    // $('div').html(function(){
    //     return '我是Div';
    // });

    // $('div').html(function(index, value){
    //     return '我是第' + (index + 1) + '号div:' + value;
    // });

    // 移除某个元素key属性
    // $('div').removeAttr('title');
});

// 元素样式操作
$(function(){
    // 获取某个元素行内CSS样式
    // alert($('div').css('color'));
    // 获取某个元素行内多个CSS样式
    // var box = $('div').css(['color', 'width', 'height']);
    // for (var i in box) {
    //     alert(i + ':' + box[i]);
    // }

    // $.each(box, function(attr, value){
    //     alert(attr + ':' + value);
    // });

    // jQuery对象的数组遍历
    // $('div').each(function(index, element){
    //     alert(index + ':' + element);
    // });

    // 设置某个元素行内CSS样式
    // $('div').css('color', 'blue');
    // 设置某个元素行内多个CSS样式
    // $('div').css({'color':'cyan', 'font-size':'25px', 'font-weight':'bold'});
    // 通过匿名函数设置某个元素行内CSS样式

    // 通过匿名函数设置某个元素行内CSS样式
    // $('div').css('color', function(index, value){
    //     alert(index + ':' + value);
    // });

    // 设置某个元素行内CSS样式
    // $('div').css('background-color', 'blue');
    // $('div').css(({
    //     'text-align':'center',
    //     'width':'200px',
    // }));
    //
    // $('div').css('width', function(index, value){
    //     return parseInt(value) + 100 + 'px';
    // });

    // 给某个元素增加一个CSS类
    // setTimeout(function(){
    //     $('div').addClass('red');
    // }, 5000);

    // 给某个元素增加多个CSS类
    // setTimeout(function(){
    //     $('div').addClass('red bg size');
    // }, 5000);

    // 删除某个元素的一个CSS类
    // setTimeout(function(){
    //     $('div').removeClass('red');
    // }, 8000);

    // 删除某个元素的多个CSS类
    // setTimeout(function(){
    //     $('div').removeClass('red bg size');
    // }, 6000);

    // 来回切换默认样式和指定样式
    $('div').click(function(){
        $(this).toggleClass('green bg');
    });

});