$(function(){
    // 显示
    // $('.show').on('click', function(){
    //     $('#box').show();
    // });

    // 隐藏
    // $('.hide').on('click', function(){
    //     $('#box').hide();
    // });

    // $('.show').bind('click', function(e){
    //     $('#box').show(1000);
    // });

    // $('.hide').bind('click', function(e){
    //     $('#box').hide(1000);
    // });

    // $('.show').bind('click', function(){
    //     $('#box').show('fast');
    // });

    // $('.hide').bind('click', function(){
    //     $('#box').hide('fast');
    // });

    // $('.show').bind('click', function(){
    //     $('#box').show('slow', function(){
    //         alert('显示完毕');
    //     });
    // });

    // $('.hide').bind('click', function(){
    //     $('#box').hide('slow', function(){
    //         alert('隐藏完毕');
    //     });
    // });

    // 同步动画
    // 显示
    // $('.show').bind('click', function(){
    //     $('.test').show('slow');
    // });

    // 隐藏
    // $('.hide').bind('click', function(){
    //     $('.test').hide('slow');
    // });

    // 列队显示
    // $('.show').bind('click', function(){
    //     $('div').first().show('slow', function showText(){
    //         $(this).next().show('slow', showText);
    //     });
    // });

    // 列队隐藏
    // $('.hide').bind('click', function(){
    //     $('div').last().hide('slow', function hideText(){
    //         $(this).prev('.test').hide('slow', hideText);
    //     });
    // });

    // $('.toggle').bind('click', function(){
    //     $('#box').toggle('slow');
    // });

    // 滑动、卷动
    // 向上卷动
    // $('.up').bind('click', function(){
    //     $('#box').slideUp('slow');
    // });
    // 向下滑动
    // $('.down').bind('click', function(){
    //     $('#box').slideDown('slow');
    // });
    // 来回切换
    // $('.toggle').bind('click', function(){
    //     $('#box').slideToggle('slow');
    // });

    // 淡入、淡出
    // 淡入
    // $('.in').bind('click', function(){
    //     $('#box').fadeIn('slow');
    // });
    // 淡出
    // $('.out').bind('click', function(){
    //     $('#box').fadeOut('slow');
    // });
    // 切换
    // $('.toggle').bind('click', function(){
    //     $('#box').fadeToggle('slow');
    // });
    // 透明度到
    // $('.to').bind('click', function(){
    //     $('#box').fadeTo('slow', 0.5);
    // });

    // 自定义动画
    // $('.button').bind('click', function(){
    //     $('#box').animate({
    //         'width': '300px',
    //         'height': '200px',
    //         'opacity': '0.5',
    //         'font-size':'50px'
    //     });
    // });

    // $('.button').bind('click', function(){
    //     $('#box').animate({
    //         'width':'300px',
    //         'height':'200px',
    //         'opacity':'0.5',
    //         'font-size':'50px'
    //     }, 'slow');
    // });

    // $('.button').bind('click', function(){
    //     $('#box').animate({
    //         'width':'300px',
    //         'height':'200px',
    //         'opacity':'0.5',
    //         'font-size':'50px'
    //     }, 2000, function(){
    //         alert('动画执行完毕');
    //     });
    // });

    // $('.button').bind('click', function(){
    //     $('#box').animate({
    //         'left': '500px'
    //     });
    // });

    // $('.button').bind('click', function(){
    //     $('#box').animate({
    //         'left':'300px',
    //         'top':'200px'
    //     }, '2000', function(){
    //         alert('动画执行完毕');
    //     });
    // });

    // $('.button').bind('click', function(){
    //     $('#box').animate({
    //         'left': '+=100px'
    //     }, 'slow');
    // });

    // 自定义队列动画的实现方式
    // 在动画完成的回调函数中再执行另一个动画
    // $('.button').bind('click', function(){
    //     $('#box').animate({
    //         'width':'300px'
    //     }, 'slow', function(){
    //         $('#box').animate({
    //             'height':'200px'
    //         }, 'slow', function(){
    //             $('#box').animate({
    //                 'opacity':'0.5'
    //             }, 'slow', function(){
    //                 $('#box').animate({
    //                     'font-size':'55px'
    //                 }, 'slow');
    //             });
    //         });
    //     });
    // });

    // 通过连缀或顺序来实现队列动画(必须是同一个元素,否则就会实现同步动画)
    // 通过顺序实现队列动画
    // $('.button').bind('click', function(){
    //     $('#box').animate({'width':'300px'}, 'slow');
    //     $('#box').animate({'height':'200px'}, 'slow');
    //     $('#box').animate({'opacity':'0.5'}, 'slow');
    //     $('#box').animate({'font-size':'55px'}, 'slow');
    // });

    // box的第一条和第三条是队列动画
    // pox的第二条和第四条是队列动画
    // box的第一条和pox的第二条是同步动画
    // box的第三条和pox的第四条是同步动画
    // $('.button').bind('click', function(){
    //     $('#box').animate({'width':'300px'}, 2000);
    //     $('#pox').animate({'height':'200px'}, 2000);
    //     $('#box').animate({'opacity':'0.5'}, 2000);
    //     $('#pox').animate({'font-size':'50px'}, 2000);
    // });

    // 通过连缀实现队列动画
    // $('.button').bind('click', function(){
    //     $('#box').animate({'width':'300px'}, 2000)
    //              .animate({'height':'200px'}, 2000)
    //              .animate({'opacity':'0.5'}, 2000)
    //              .animate({'font-size':'55px'});
    // });

    // 队列动画
    // CSS不是动画方法，会在一开始传入列队之前
    // $('.button').bind('click', function(){
    //     $('#box').slideUp('slow').slideDown('slow').css('background', 'orange');
    // });

    // 使用回调函数，强行将CSS方法排队到slideDown之后
    // $('.button').bind('click', function(){
    //     $('#box').slideUp('slow').slideDown('slow', function(){
    //         $(this).css('background', 'orange');
    //     });
    // });

    // queue方法模拟动画方法跟随在动画方法之后
    // $('.button').bind('click', function(){
    //     $('#box').slideUp('slow').slideDown('slow').queue(function(){
    //         $(this).css('background', 'blue');
    //     });
    // });

    // $('.button').bind('click', function(){
    //     $('#box').slideUp('slow').slideDown('slow').queue(function(next){
    //         $(this).css('background', 'green');
    //         next();
    //     }).hide('slow');
    // });

    // dequeue执行下一个元素列队中的函数
    // $('.button').bind('click', function(){
    //     $('#box').slideUp('slow').slideDown('slow').queue(function(){
    //         $(this).css('background', 'blue');
    //         $(this).dequeue();
    //     }).hide(2000);
    // });

    // 使用顺序调用的列对，逐个执行
    // $('.button').bind('click', function(){
    //     // 向上卷动
    //     $('#box').slideUp(2000);
    //     // 向下滑动
    //     $('#box').slideDown(2000);
    //     $('#box').queue(function(){
    //         $(this).css('background','yellow');
    //         $(this).dequeue();
    //     });
    //     $('#box').hide(2000);
    // });

    // 获取当前列队的长度
    // $('.button').bind('click', function(){
    //     $('#box').slideUp(2000, function(){
    //         // 获取当前列队的长度
    //         // alert(count());
    //     });
    //     $('#box').slideDown(2000, function(){
    //         // alert(count());
    //     });
    //     $('#box').queue(function(){
    //         // alert(count());
    //         $(this).css('background', 'yellow');
    //         // 执行下一个元素列对中的函数
    //         $(this).dequeue();
    //     });
    //     $('#box').hide(2000);
    // });

    // 清理动画列队
    // $('.button').bind('click', function(){
    //     $('#box').slideUp(2000);
    //     $('#box').slideDown(2000);
    //     $('#box').queue(function(){
    //         $(this).css({'background':'blue', 'font-size':'55px'});
    //         // 清理动画
    //         // $(this).clearQueue();
    //         // 执行下一个元素队列中的函数
    //         $(this).dequeue();
    //     });
    //     $('#box').hide(2000);
    // });

    // 列队动画
    // $('.button').bind('click', function(){
    //     $('#box').animate({
    //         'left':'300px'
    //     }, 2000);
    //     $('#box').animate({
    //         'bottom':'200px'
    //     }, 2000);
    //     $('#box').animate({
    //         'width':'300px'
    //     }, 2000);
    //     $('#box').animate({
    //         'height':'300px'
    //     }, 2000);
    //     $('#box').animate({
    //         'font-size':'55px'
    //     }, 2000);
    // });

    // 停止动画
    // $('.stop').bind('click', function(){
    //     $('#box').stop();
    // });

    // 停止动画
    // 第一个参数动画停止后是否取消后面的列队动画，默认为false
    // 第二个参数动画停止后是否立即到达动画末尾，默认为false
    // $('.stop').bind('click', function(){
    //     $('#box').stop(true, false);
    // });

    // 停止动画
    // $('.stop').bind('click', function(){
    //     $('#box').stop(true, true);
    // });

    // 延迟动画，可以在动画之前设置延迟，也可以在列队动画中间设置延迟
    // $('.button').bind('click', function(){
    //     $('#box').delay(1000).animate({'left':'300px'});
    //     $('#box').animate({'bottom':'200px'});
    //     $('#box').animate({'width':'300px'}).delay(2000);
    //     $('#box').animate({'height':'300px'});
    //     $('#box').animate({'font-size':'55px'});
    // });

    // 递归执行动画
    // $('#box').slideToggle(2000, function(){
    //     $(this).slideToggle(2000, arguments.callee);
    // });

    // 选择正在执行动画的元素,并且将元素背景色设置为blue
    // $('.animated').bind('click', function(){
    //     $(':animated').css('background', 'blue');
    // });

    // 停止正在执行动画的元素，并设置元素背景色
    // $('.animated').bind('click', function(){
    //     // 选择正在执行动画的元素
    //     $('div:animated').stop().css('background', 'yellow');
    // });

    // 动画全局属性
    // 设置每秒运行的帧数，默认为13毫秒
    // $.fx.interval = 2000;
    // jQuery.fx.interval = 3;
    // $('.button').bind('click', function(){
    //     $('#box').toggle(1000);
    // });

    // 关闭页面上的所有动画
    // $.fx.off = true;
    // $('.button').bind('click', function(){
    //     $('#box').toggle(1000);
    // });

    // $('.button').bind('click', function(){
    //     $('#box').animate({'left':'800px'}, 'slow', 'swing');
    //     $('#pox').animate({'left':'800px'}, 'slow', 'swing');
    // });

    // swing:动画先慢后快
    // linear:动画匀速
    // $('.button').bind('click', function(){
    //     $('#box').animate({'left':'800px'}, 5000, 'swing');
    //     $('#pox').animate({'left':'800px'}, 5000, 'linear');
    // });

});

// 获取当前列队的长度，fx是默认列队的参数
function count() {
    return $('#box').queue('fx').length;
}