window.onload = function(){
    //定义文章显示页面方法
    (function() {
        //获取文章内容高度
        var articleH = document.querySelector("#container div").clientHeight;
        //获取显示盒子高度
        var boxH = document.querySelector("#container").clientHeight;
        //若文章高度没有超过显示盒子高度，下方横向滚动条则不显示
        if (articleH <= boxH) {
            document.querySelector('footer input[type = range]').style.display = 'none';
        }
        var myRange = document.querySelector("#myRange");
        var next = document.querySelector('.guide1 .next');
        var close = document.querySelector('.guide2 .close');

        //定义一个方法，改变文章显示的上下区域和右侧挂件的计数
        function handleChange(){
            var val = myRange.value;
            //根据文章高度和盒子高度的差值，计算出滑块滑动百分比对应的具体值
            document.querySelector("#container div").style.top = -val*0.01*(articleH-boxH) + "px";
            //改变右侧计数挂件的值
            document.querySelector("#count").innerHTML = val+"%";
        }
        //定义新手指引“下一页”方法
        function nextPage(){
            document.querySelector('.guide1').style.display = 'none';
            document.querySelector('.guide2').style.display = 'block';
        };
        //定义新手指引“关闭”方法
        function closePage(){
            document.querySelector('.guide2').style.display = 'none';
        };

        //方法调用
        myRange.onclick = handleChange;
        myRange.onmousemove = handleChange;
        myRange.ontouchmove = handleChange;
        myRange.onchange = handleChange;
        next.onclick = nextPage;
        close.onclick = closePage;
    }());
}
