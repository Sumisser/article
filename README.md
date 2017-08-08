### 文章超出屏幕高度，显示底部滑动栏
    和浏览器默认的处理方式相反，默认情况下，文章高度超出，浏览器默认显示方式为overflow:auto,即出现侧边的竖向滚动条。
    我的处理方式是：
    将文章内容放在固定高度的容器中，设置overflow:hidden,文章超出的部分就会被隐藏，就不会出现竖向滚动条。
    屏幕下方的横向滚动条我采用的是HTML5中的“range”表单项模拟滚动条。

### 滑动栏样式
    浏览器中默认的“range”表单项样式不够美观，我在网上查找了设置其样式的方法，改变轨道和滑块样式，提高用户体验。

### 滑动滑块实现文章上下滚动
    range表单项的value值默认是0~100的数字，我利用这一点，动态获取到value值，将获取到的值和文章超出盒子的实际高度做一个绑定，通过这个值设置文章所在容器的position的top值，实现需求效果。

### 文章滚动的过渡效果
    为了提高用户体验，防止文章内容切换过于突兀，我设置了文章容器的transition属性的是过渡时间为1s。

### 事件绑定的选择
    要实现滑动栏的文章内容的绑定，必须要给滑动栏添加一个事件。
    我开始想到的是onchange事件，虽然在整体上能够实现效果，但只有滑动停止才会开始触发事件函数，无法做到实时的文章滚动，用户体验不是很理想。
    改进之后我将事件改成了onmousemove，基本能实现需求效果，只是当用户点击滑块而不是拖动时就会有一点问题，因此最后我绑定了onmousemove和onclick两个事件。

### 计数挂件的实现
    我使用的是绝对定位，top值设置为50%，margin-top再减去元素高度的一半实现了垂直居中。同时标签内部的值通过innerHTML将range表单项的内容动态显示在标签内部，这样便实现了进度的同步更新。

### 响应式
    为了实现不同设备的正常显示，容器的宽高和内外边距尽量都采用百分比设置，对于小屏幕设备显示效果不理想的地方，利用媒体查询，为小屏幕设备重新定义了部分样式，实现不同设备的正常显示效果。

### 兼容性
    目前样式只做到兼容webkit内核浏览器。

### 新手指引
    利用蒙层创建了两个新手指引页面。利用localStorage判断用户是否为首次访问，如果不是首次访问，则不显示。

### 基于面向对象的封装
    对新手指引和浏览文章分别做了封装。
    在window对象上定义类，将声明的参数作为自己的属性保存。在类原型上进行方法的拓展。在调用时，new出实例，在实例上进行原型方法的调用。
