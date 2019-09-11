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
    // $('div').click(function(){
    //     $(this).toggleClass('green bg');
    // });

    // 鼠标事件：页面所有元素均可触发
    // click：单击鼠标按钮或按下回车键触发
    // dblclick：双击鼠标按钮时触发
    // mousedown：按下鼠标按键还未弹起时触发
    // mouseup：释放鼠标按键时触发
    // mouseover：鼠标移到元素上方时触发
    // mouseout：鼠标从元素上方移除时触发
    // mousemove：鼠标指针在元素上移动时触发

    // 键盘事件
    // keydown：按下键盘上的任意键触发，如果按住不放会持续触发
    // keypress：按下键盘上的字符键触发，如果按住不放会持续触发
    // keyup：释放键盘上的键触发

    // HTML事件
    // load：当页面完全加载后在windows上触发，或当框架集加载完毕后在框架集上触发
    // unload：当页面完全卸载后在windows上触发，或当框架集卸载完毕后在框架集上触发
    // change：当文本框内容改变且失去焦点后触发
    // select：当选择文本框的一个或多个字符时触发
    // focus：当页面或元素获得焦点时在windows或相关元素上触发
    // blur：当页面或元素失去焦点时在windows或相关元素上触发
    // scroll：当滚动带滚动条的元素时触发
    // resize：当页面或框架尺寸变化时在windows或框架集上触发
    // error：当脚本执行错误时触发

});

$(function(){
    // $('div').bind('click', function(index){
    //     alert('下标:' + index);
    // });

    // $('div').bind('mouseover mouseout', function(){
    //     alert('1');
    // });
});

$(function(){
    // $('input').bind('click', function(){
    //     alert('点击');
    // });

    // $('input').bind('click', fn);

    // $('input').bind('mouseover mouseout', function(){
    //     $('div').html(function(index, value){
    //         return value + index;
    //     });
    // });

    // 通过对象键值对绑定多个事件
    // $('input').bind({
    //     'mouseover': function(){
    //         alert('移入');
    //     },
    //     'mouseout': function(){
    //         alert('移出');
    //     }
    // });

    // $('input').bind('click', fn);
    // $('input').bind('click', fn1);
    // $('input').unbind('click', fn);
    // $('input').unbind('click');
    // 删除全部事件
    // $('input').unbind();

    // $('input').bind('dblclick', function(){
    //     alert('双击!');
    // });
    // $('input').unbind('dblclick');

    // $('input').bind('mousedown', function(){
    //     alert('按下鼠标按钮还未弹起时触发');
    // });

    // $('input').bind('mouseup', function(){
    //     alert('释放鼠标按钮时触发');
    // });

    // $('window').bind('unload', function () {
    //     alert('当页面完全卸载后在windows上触发或当框架集卸载完毕后在框架集上触发');
    // });
});

function fn() {
    alert('处理函数');
}

function fn1() {
    alert('处理函数1');
}

$(function(){
    // 当选择文本框的一个或多个字符时触发
    // $('input').select(function(){
    //     alert('选择文本');
    // });

    // 当文本框内容改变且失去焦点时触发
    // $('input').change(function(){
    //     alert('文本框内容改变');
    // });

    // 点击提交按钮时在form元素上触发
    // $('form').submit(function () {
    //     alert('点击提交按钮时在form元素上触发');
    // });

    // mouseover:鼠标移到元素上方时触发
    // mouseout:鼠标从元素上方移除时触发
    // $('div').mouseover(function(){
    //     $(this).css('background', 'red');
    // }).mouseout(function(){
    //     $(this).css('background', 'green');
    // });

    // mouseenter、mouseleave:鼠标穿入穿出时触发
    // $('div').mouseenter(function(){
    //     $(this).css('background', 'red');
    // }).mouseleave(function(){
    //     $(this).css('background', 'green');
    // });

    // 鼠标移入的时候触发
    // $('div').mouseover(function(){
    //     $('strong').html(function(index, value){
    //         return value + '1';
    //     });
    // });

    // 鼠标移出的时候触发
    // $('div').mouseout(function(){
    //     $('strong').html(function(index, value){
    //         return value + '1';
    //     });
    // });

    // 鼠标穿入的时候触发
    // $('div').mouseenter(function(){
    //     $('strong').html(function(index, value){
    //         return value + '1';
    //     });
    // });

    // 鼠标穿出的时候触发
    // $('div').mouseleave(function(){
    //     $('strong').html(function(index, value){
    //         return value + '1';
    //     });
    // });

    // 按下键盘上任意键触发，如果按住不放会重复触发
    // $('input').keydown(function(e){
    //     alert(e.keyCode);
    // });

    // 按下键盘上字符键触发，如果按住不放会重复触发
    // $('input').keypress(function(e){
    //     alert(e.charCode);
    // });

    // 释放键盘上的任意键触发，如果按住不放会重复触发
    // $('input').keyup(function(e){
    //     alert(e.keyCode);
    // });

    // 光标激活(当页面或元素获得焦点时，在window及相关元素上触发)
    // $('input').focus(function(){
    //     alert('1');
    // });

    // 光标丢失(当页面或元素失去焦点时，在window及相关元素上触发)
    // $('input').blur(function(){
    //     alert('1');
    // });

    // focus:光标激活，blur:光标失去，操作对象必须是当前元素
    // $('input').focus(function(){
    //     alert('光标激活');
    // });

    // $('input').blur(function(){
    //     alert('光标丢失');
    // });

    // focusin:光标激活，focusout：光标丢失，操作对象可以是当前元素，也可以是子元素
    // $('div').focusin(function(){
    //     alert('光标激活!');
    // });

    // $('div').focusout(function(){
    //     alert('光标丢失!');
    // });

    // hover:鼠标移入的时候触发第一个函数，鼠标移出的时候触发第二个函数
    // $('div').hover(function(){
    //     $(this).css('background', 'green');
    // }, function(){
    //     $(this).css('background', 'chartreuse');
    // });

    // toggle:当鼠标点击触发第一个函数，再点击触发第二个函数，依次类推
    // $('div').toggle('slow');

    // $('div').toggle(function(){
    //     $(this).css('background', 'red');
    // }, function(){
    //     $(this).css('background', 'green');
    // }, function () {
    //     $(this).css('background', 'blue');
    // });

    // var flag = 1;
    // $('div').click(function(){
    //     if (flag == 1) {
    //         $(this).css('background', 'red');
    //         flag = 2;
    //     } else if (flag == 2) {
    //         $(this).css('background', 'green');
    //         flag = 3;
    //     } else if (flag == 3) {
    //         $(this).css('background', 'blue');
    //         flag = 1;
    //     }
    // });
});

// 事件对象
$(function(){
    // 获取这个事件的事件类型
    // $('input').bind('click', function(e){
    //     alert(e.type);
    // });

    // 获取绑定事件的DOM元素
    // $('div').bind('click', function(e){
    //     alert(e.target);
    // });

    // 获取监听元素的DOM
    // $('div').bind('click', function(e){
    //     alert(e.currentTarget);
    // });

    // 获取移入移出目标点离开或进入的那个DOM元素
    // $('div').bind('mouseover', function(e){
    //     alert(e.relatedTarget);
    // });

    // $('span').bind('mouseout', function(e){
    //     alert(e.relatedTarget);
    // });

    // currentTarget获取监听的元素
    // $('div').bind('click', function(e){
    //     alert(this == e.currentTarget);
    // });

    // target获取点击的元素
    // $('div').bind('click', function(e){
    //     alert(this == e.target);
    // });

    // data获取事件调用时的额外数据
    // $('input').bind('click', 123, function(e){
    //     alert(e.data);
    // });

    // $('input').bind('click', [1, 2, 3], function(e){
    //     alert(e.data);
    // });

    // 获取事件调用时的额外数据
    // $('input').bind('click', {'name':'张三', 'sex':'男', 'age':20}, function(e){
    //     alert(e.data);
    // });

    // $('input').bind('click', 'abc', function(e){
    //     alert(e.data);
    // });

    // 获取元素相对于页面原点的水平/垂直坐标
    // $('div').bind('click', function(e){
    //     alert('pageX:' + e.pageX + ', pageY:' + e.pageY);
    // });

    // 获取显示器屏幕位置的水平/垂直坐标
    // $('div').bind('click', function(e){
    //     alert('screenX:' + e.screenX + ',screenY:' + e.screenY);
    // });

    // 获取相对于页面视口的水平/垂直坐标
    // $('div').bind('click', function(e){
    //     alert('clientX:' + e.clientX + ',clientY:' + e.clientY);
    // });

    // 事件流描述的是从页面接受事件的顺序，当几个都具有事件的元素层叠在一起的时候，点击其中一个元素，并不是只有当前被点击的元素会被触发事件，而是层叠在点击范围的所有元素都会触发事件
    // 事件流包括事件冒泡和事件捕获
    // 事件冒泡:事件从里往外逐个触发
    // 事件捕获:事件从外往里逐个触发
    // $('input').bind('click', function(e){
    //     alert('按钮被触发了!');
    // });

    // $('div').bind('click', function(e){
    //     alert('Div被触发了!');
    // });

    // $(document).bind('click', function(e){
    //     alert('document被触发了!')
    // });

    // $('input').click(function(e){
    //     alert('按钮被触发了!');
    // });

    // $('div').click(function(e){
    //     alert('div被触发了!')
    // });

    // $(document).click(function(e){
    //     alert('document被点击了!');
    // });

    //  type获取这个事件的事件类型
    // $('div').bind('click', function(e){
    //     alert(e.type);
    // });

    // target获取点击的DOM元素
    // $('div').bind('click', function(e){
    //     alert(e.target);
    // });

    // currentTarget获取监听事件的DOM元素
    // $('div').bind('click', function(e){
    //     alert(e.currentTarget);
    // });

    // relatedTarget获取移入移出目标点离开或进入的那个DOM元素
    // $('div').bind('mouseover', function(e){
    //     alert(e.relatedTarget);
    // });

    // result获取上一个相同事件的返回值
    // $('div').bind('click', function(e){
    //     return 1243;
    // });

    // $('div').bind('click', function(e){
    //     alert(e.result);
    // });

    // timeStamp获取事件触发的时间
    // $('div').bind('click', function(e){
    //     alert(e.timeStamp);
    // });

    // which获取鼠标左中右键(123)或获取键盘按键
    // $('div').bind('mousedown', function(e){
    //     alert(e.which);
    // });

    // $('input').bind('keydown', function(e){
    //    alert(e.which);
    // });

    // altKey、shiftKey、ctrlKey、metaKey判断是否按下了alt键、shift键、ctrl键、meta键
    // $('input').bind('keydown', function(e){
    //     alert(e.shiftKey);
    // });

    // $('input').bind('keydown', function(e){
    //     alert(e.ctrlKey);
    // });

    // $('input').bind('keydown', function(e){
    //     alert(e.altKey);
    // });

    // $('input').bind('keydown', function(e){
    //     alert(e.metaKey);
    // });

    // preventDefault()阻止事件的默认行为
    // $('a').bind('click', function(e){
    //     alert('百度');
    //     e.preventDefault();
    // });

    // 禁止提交表单跳转
    // $('input').bind('click', function(e){
    //     e.preventDefault();
    //     alert(e.type);
    // });

    // 禁止表单提交
    // $('form').bind('submit', function(e){
    //     alert('1');
    //     e.preventDefault();
    // });

    // $('a').bind('click', function(e){
    //     alert('a被触发了');
    //     e.preventDefault();
    //     e.stopPropagation();
    // });

    // $('div').bind('click', function(e){
    //     alert('Div被触发了');
    // });

    // $(document).bind('click', function(e){
    //     alert('Document被触发了')
    // });

    // $('a').bind('click', function(e){
    //     alert('a链接被触发了');
    //     return false;
    // });

    // $('div').bind('click', function(e){
    //     alert('div被触发了');
    // });

    // $(document).bind('click', function(e){
    //     alert('document被触发了');
    // });

    // $('a').bind('click', function(e){
    //     e.preventDefault();
    //     e.stopPropagation();
    //     alert(e.isDefaultPrevented());
    //     alert(e.isPropagationStopped());
    //     alert('a');
    // });

    // $('div').bind('click', function(e){
    //     alert('div');
    // });

    // $(document).bind('click', function(e){
    //     alert('document');
    // });

    // $('a').bind('click', function (e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     alert('a');
    // });

    // $('a').bind('click', function (e) {
    //     alert(e.isDefaultPrevented());
    //     alert(e.isPropagationStopped());
    // });

    // $('div').bind('click', function (e) {
    //     alert('div');
    // });

    // $(document).bind('click', function (e) {
    //     alert('document');
    // });

    // 取消事件冒泡，并取消该事件的后续事件处理函数
    // $('a').bind('click', function (e) {
    //     e.stopImmediatePropagation();
    //     alert(e.isImmediatePropagationStopped());
    //     alert('a1');
    // });

    // $('a').bind('click', function (e) {
    //     alert('a2');
    // });

    // $('div').bind('click', function(e){
    //     alert('div');
    // });

    // $(document).bind('click', function (e) {
    //     alert('document')
    // });
});