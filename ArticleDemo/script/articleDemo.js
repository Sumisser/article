(function(window){
  //新手指引
  window.Guide = function(guide1,guide2,next,close) {
      this.guide1 = guide1;
      this.guide2 = guide2;
      this.nextPg = next;
      this.close = close;
  };
  Guide.prototype.start = function(){
          var guideDom1 = document.getElementById(this.guide1);
          var guideDom2 = document.getElementById(this.guide2);
          function nextPage(){
              guideDom1.style.display = 'none';
              guideDom2.style.display = 'block';
          };
          function closePage(){
              guideDom2.style.display = 'none';
          };
          //利用localStorage做新手指引页面的展示判断
          if (!localStorage.hasRead){
              guideDom1.style.display = 'block';// 默认为隐藏
              localStorage.hasRead = true;

          }
          document.getElementById(this.nextPg).onclick = nextPage;
          document.getElementById(this.close).onclick = closePage;
  }

  //浏览文章
  window.Read =function (container,article,myRange,count){
      this.container = container;
      this.article = article;
      this.myRange = myRange;
      this.count = count;
  };
  Read.prototype.init = function (){
      var articleDom = document.getElementById(this.article);
      var countDom = document.getElementById(this.count);
      //获取文章内容高度
      var articleH = document.getElementById(this.article).clientHeight;
      //获取显示盒子高度
      var boxH = document.getElementById(this.container).clientHeight;
      //若文章高度没有超过显示盒子高度，下方横向滚动条则不显示
      if (articleH <= boxH) {
          document.getElementById(this.myRange).style.display = 'none';
      }
      var range = document.getElementById(this.myRange);

      //定义一个方法，改变文章显示的上下区域和右侧挂件的计数
      function handleChange(){
          var val = range.value;
          //根据文章高度和盒子高度的差值，计算出滑块滑动百分比对应的具体值
          articleDom.style.top = -val*0.01*(articleH-boxH) + "px";
          //改变右侧计数挂件的值
          count.innerHTML = val+"%";
      };
      //滑动栏事件绑定
      range.onclick = handleChange;
      range.onmousemove = handleChange;
      range.ontouchmove = handleChange;
      range.onchange = handleChange;
  };
})(window)


window.onload = function(){
    //新手指引方法实例的调用
    var guide = new Guide('guide1','guide2','next','close');
    guide.start();
    //浏览方法实例的调用
    var read = new Read('container','article','myRange','count');
    read.init();
}
