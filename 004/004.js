$(function(){
    // $('input').bind('click', function (e) {
    //     alert('我将要使用模拟用户操作来触发');
    // });
    // 模拟用户行为
    // $('input').trigger('click');

    // $('input').bind('click', function(e){
    //     alert('我将要使用模拟用户操作来触发');
    // }).trigger('click');

    // $('input').bind('click', function(e, data){
    //     alert(data);
    // }).trigger('click', 'abc');

    // $('input').bind('click', function(e, data1, data2){
    //     alert(data1 + '|' + data2);
    // }).trigger('click', ['123', 'abc']);

    // $('input').bind('click', function(e, data1, data2, data3, data4){
    //     alert(data1 + '|' + data2 + '|' + data3 + '|' + data4);
    // }).trigger('click', [123, 456, 890, [1,2,3,4,5]]);

    // $('input').bind('click', {'name':'张三', 'age':18}, function(e, data1, data2){
    //     alert(data1 + '|' + data2 + '|' + e.data.name);
    // }).trigger('click', ['上海', {'sex':'男', 'job':'sex'}]);

    // $('input').bind('click', function(e){
    //     alert('模拟用户行为!');
    // }).click();

    // $('input').bind('myEvent', function(e){
    //     alert('自定义事件模拟用户行为');
    // }).trigger('myEvent');

    // $('input').bind('click', function(e){
    //     alert('模拟用户行为');
    // }).triggerHandler('click');

    // trigger()方法不会阻止事件的默认行为
    // $('form').trigger('submit');
    // $('form').bind('submit', function (e) {
    //     alert('提交');
    // }).trigger('submit');

    // $('form').submit(function(e){
    //     alert('提交');
    //     e.preventDefault();
    // }).trigger('submit');

    // triggerHandler()方法会阻止事件的默认行为
    // $('form').bind('submit', function(e){
    //     alert('提交');
    // }).triggerHandler('submit');

    // trigger()会影响匹配到大所有元素
    // $('input').click(function(e){
    //     alert('模拟用户操作!');
    // }).trigger('click');

    // triggerHandler()只会影响匹配到的第一个元素
    // $('input').bind('click', function(e){
    //     alert('模拟用户操作');
    // }).triggerHandler('click');

    // trigger()方法返回的是一个jQuery对象,方便链式连缀调用
    // alert($('input').bind('click', function(e){
    //     alert('模拟用户操作');
    // }).trigger('click'));

    // $('input').bind('click', function(e){
    //     alert('模拟用户操作');
    // }).trigger('click').css('color', 'blue');

    // triggerHandler()方法返回当前事件执行的返回值,如果没有返回值则返回undefined
    // alert($('input').bind('click', function(e){
    //     alert('模拟用户操作');
    //     return '高级事件';
    // }).triggerHandler('click'));

    // 事件流描述的是页面接受事件的顺序，当几个都具有事件的元素层叠在一起的时候，点击其中一个元素，并不是只有当前被点击的元素才会触发事件，
    // 而是层叠在点击范围内的所有元素都会触发事件
    // var index = 0;
    // $('div').bind('myEvent', function(e){
    //     alert('模拟用户操作, 当前触发的是第' + index + '个元素');
    //     index++;
    // });
    // $('.div3').trigger('myEvent');
    // $('div').triggerHandler('myEvent');

    // $('input').bind('click', function(e){
    //     alert('abc');
    // });
    // $('input').bind('click', function(e){
    //     alert('xyz');
    // });
    // 移除所有的click事件
    // $('input').unbind('click');

    // $('input').bind('click.abc', function(e){
    //     alert('abc');
    // });
    // $('input').bind('click.xyz', function(e){
    //     alert('xyz');
    // });
    // $('input').bind('mouseover.abc', function(e){
    //     alert('鼠标移入');
    // });
    // 移除指定命名空间的事件
    // $('input').unbind('.abc');
    // $('input').trigger('click.abc');
    // $('input').trigger('click');

    // 事件委托
    // 通过事件冒泡的特性，将子元素绑定的事件冒泡到父元素(或祖先元素上)，然后再做相关处理即可。
    // $('.button').bind('click', function(e){
    //     alert('事件不委托:' + e.type);
    // });

    // .live()原理就是把元素绑定事件冒泡到祖先元素$(document)上，而只需要给$(document)绑定一次即可
    // $('.button').live('click', function(e){
    //     alert('事件委托!');
    // });

    // .bind无法动态绑定事件
    // $('input').bind('click', function(e){
    //     // appendTo()将指定元素插入到指定元素内部后面
    //     $(this).clone().appendTo($('#box'));
    // });

    // $('input').bind('click', function(e){
    //     $(this).clone(true).appendTo($('#box'));
    // });

    // .live具备动态绑定功能
    // $('input').live('click', function(e){
    //     $(this).clone().appendTo($('#box'));
    // });

    // $('.button').live('click', function(e){
    //     $(this).clone().appendTo($('#box'));
    // });
    // 停止事件委托
    // $('.button').die('click');

    // 事件委托
    // $('#box').delegate('.button', 'click', function(e){
    //     $(this).clone().appendTo($('#box'));
    // });

    // 停止委托
    // $('#box').undelegate('.button', 'click');

    // 普通绑定.bind
    // 普通解绑.unbind

    // 事件委托.live .delegate
    // 解除委托.die .undelegate

    // 新方法绑定.on
    // 新方法解绑.off
    // $('.button').on('click', function(e){
    //     alert('替代bind');
    // });

    // 事件绑定，替代bind方式，并使用额外数据和事件对象
    // $('.button').on('click', {'name':'shanghai', 'age':18}, function(e){
    //     alert(e.data.name);
    // });

    // 替代bind方式，并绑定多个事件
    // $('.button').on('mouseover mouseout', function(e){
    //     alert('移入移出');
    // });

    // 替代bind方式，并以对象模式绑定多个事件
    // $('.button').on({
    //     'mouseover': function(){
    //         alert('鼠标移入');
    //     },
    //     'mouseout':function(){
    //         alert('鼠标移出');
    //     }
    // });

    // 替代bind，阻止默认行为并取消事件冒泡
    // $('form').on('submit', function(e){
    //     alert('提交');
    //     return false;
    // });

    // $('form').on('submit', false);

    // 替代bind，阻止默认行为
    // $('form').on('submit', function(e){
    //     e.preventDefault();
    // });

    // 替代bind，取消事件冒泡
    // $('form').on('submit', function(e){
    //     e.stopPropagation();
    // });

    // 替代unbind，移除事件
    // $('input').on('click', function(){
    //     alert('点击');
    // });
    // $('input').off('click');

    // $('input').on('click.abc', function(e){
    //     alert('abc');
    // });

    // $('input').on('click.xyz', function(e){
    //     alert('xyz');
    // });

    // $('input').on('mouseover.abc', function(e){
    //     alert('鼠标移入');
    // });

    // $('input').off('click.abc');
    // $('input').off('.abc');

    // 事件委托
    // $('#box').on('click', '.button', function(e){
    //     $(this).clone().appendTo($('#box'));
    // });

    // 解除委托
    // $('#box').off('click', '.button');

    // 绑定元素执行完毕后自动移除事件
    // 类似于bind，仅触发一次
    // $('.button').one('click', function(e){
    //     alert('one仅触发一次');
    // })

    // 类似于delegate，只触发一次
    // $('#box').one('click', '.button', {'name':'shanghai', 'age':18}, function (e) {
    //     alert('仅触发一次' + e.data.age);
    // });
});


