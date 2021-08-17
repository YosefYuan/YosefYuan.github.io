# Senior_FE

---
框架使用
## vue响应式原理
- 什么叫响应式
  
  1、组件data的数据一旦变化，立刻出发视图的更新
  
  2、实现数据驱动视图的第一步

- 实现响应式的核心API

  Object.defineProperty（vue3.0利用 proxy）

- Object.defineProperty 基础用法（通过get set 用法来实现）

- Object.defineProperty 实现响应式

  1、监听对象、监听数组
  https://juejin.cn/post/6859543089741037576

  2、复杂对象，深度监听

  3、几个缺点

  4、使用proxy的优点

## vue的diff算法？
https://juejin.cn/post/6844903607913938951
## vue优化方案
https://juejin.cn/post/6844903976509374478
## vue3的进步与使用
https://segmentfault.com/a/1190000021270387
https://juejin.cn/post/6850418112878575629
## Vue项目打包压缩的实现

## Reflect用过没有？干嘛的？
## vue3为什么改用Proxy?
---
打包构建
## webpack loader和plugin区别？
  https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/308

  一、webpack的打包原理

  识别入口文件
  通过逐层识别模块依赖(Commonjs、amd或者es6的import，webpack都会对其进行分析，来获取代码的依赖)
  webpack做的就是分析代码，转换代码，编译代码，输出代码
  最终形成打包后的代码

  二、什么是loader

  loader是文件加载器，能够加载资源文件，并对这些文件进行一些处理，诸如编译、压缩等，最终一起打包到指定的文件中

  处理一个文件可以使用多个loader，loader的执行顺序和配置中的顺序是相反的，即最后一个loader最先执行，第一个loader最后执行

  第一个执行的loader接收源文件内容作为参数，其它loader接收前一个执行的loader的返回值作为参数，最后执行的loader会返回此模块的JavaScript源码

  三、什么是plugin

  在webpack运行的生命周期中会广播出许多事件，plugin可以监听这些事件，在合适的时机通过webpack提供的API改变输出结果。

  四、loader和plugin的区别

  对于loader，它是一个转换器，将A文件进行编译形成B文件，这里操作的是文件，比如将A.scss转换为A.css，单纯的文件转换过程

  plugin是一个扩展器，它丰富了webpack本身，针对是loader结束后，webpack打包的整个过程，它并不直接操作文件，而是基于事件机制工作，会监听webpack打包过程中的某些节点，执行广泛的任务
## webpack 常见loader?如何自定义loader?
https://segmentfault.com/a/1190000021980124
## webpack 常见plugin?如何自定义plugin?
https://juejin.cn/post/6844904095774408711
## webpack tree shaking目的是什么？怎么实现的？
https://juejin.cn/post/6844903687412776974
## webpack code spliting目的是什么？怎么实现的？
https://segmentfault.com/a/1190000011435407
https://zhuanlan.zhihu.com/p/26710831
## webpack模块化原理-commonjs?
https://segmentfault.com/a/1190000010349749
## webpack模块化原理-ES module?
https://segmentfault.com/a/1190000010955254
## webpack执行过程？源码？
https://juejin.cn/post/6844903976563900430
## webpack打包出来的js文件分别是干嘛的？里面包括什么？
## webpack如何减少打包体积？如何提高打包速度？如何加快首屏速度？
https://juejin.cn/post/6844904174937718792

---
数据结构
## 数组和链表的区别？内存上的区别？
https://segmentfault.com/a/1190000019823552
---
JS基础
## 闭包坏处？常见垃圾泄漏操作？
https://segmentfault.com/a/1190000039132414
## 垃圾回收机制？v8 垃圾回收机制？
https://juejin.cn/post/6844904016325902344
## let const的局部作用域和暂时性死区
https://segmentfault.com/a/1190000015603779
## 手写promise
## promise报错怎么办，走err=>{}还是catch?
https://juejin.cn/post/6844903830409183239
## generate-yield实现原理？
https://zhuanlan.zhihu.com/p/216060145
## async-await实现原理？
https://zhuanlan.zhihu.com/p/115112361
## Reflect用过没有？干嘛的？
https://zhuanlan.zhihu.com/p/92700557

---
NODE
## 请介绍一下 node 里面的模块是什么
https://segmentfault.com/a/1190000010965172
## 请介绍一下 require 的模块加载机制
https://segmentfault.com/a/1190000023828613
## 我们知道 node 导出模块有两种方式，一种是 exports.xxx=xxx 和 Module.exports={}有什么区别吗
## 请介绍一下 Node 事件循环的流程
## 在每个 tick 的过程中，如何判断是否有事件需要处理呢？
## 请描述一下整个异步 I/O 的流程
## node 的多进程架构
https://www.wwwbuild.net/FrontDev/40343.html
https://www.cnblogs.com/tugenhua0707/p/11141076.html
## 创建子进程的方法有哪些，简单说一下它们的区别
## 请问实现一个 node 子进程被杀死，然后自动重启代码的思路
## 如何实现进程间的状态共享，或者数据共享
## 如果使用过 koa、egg 这两个 Node 框架，请简述其中的中间件原理，最好用代码表示一下
https://www.php.cn/js-tutorial-479685.html

---
V8引擎
## V8 ToPrimitve 函数相关面试题系列 ({}+[[]][[]])...
## v8垃圾回收机制
## 如何查看 V8 内存使用情况
## V8 的内存限制是多少，为什么 V8 这样设计
## V8 的内存分代和回收算法请简单讲一讲
## 哪些情况会造成 V8 无法立即回收内存
## 请谈一下内存泄漏是什么，以及常见内存泄漏的原因，和排查的方法


---
Buffer 模块
## 新建 Buffer 会占用 V8 分配的内存吗
## Buffer.alloc 和 Buffer.allocUnsafe 的区别
## Buffer 的内存分配机制
https://segmentfault.com/a/1190000021295052
## Buffer 乱码问题
## stream的问题
https://segmentfault.com/a/1190000020112581###
---
websocket
## webSocket 与传统的 http 有什么优势
https://www.ruanyifeng.com/blog/2017/05/websocket.html
## webSocket 协议升级是什么，能简述一下吗？
## https 用哪些端口进行通信，这些端口分别有什么用
## 七层网络协议
## tcp 队头阻塞 滑动窗口
https://www.huaweicloud.com/articles/736eef13dc3e4d73b10d155557bb93c5.html
---

浏览器底层原理
## 从输入url到看到页面发生了什么
https://zhuanlan.zhihu.com/p/133906695
## 有一个100M大小的字符串，是放在栈里还是堆里？为什么？
https://www.zhihu.com/question/61105131
## http 1 1.1 2 3区别
## webSocket 与传统的 http 有什么优势?
## webSocket 协议升级是什么，能简述一下吗？
## 浏览器缓存原理
https://www.debugger.wiki/article/html/1565502376358922
## https加密过程？证书目的是什么？
## 常见网络攻击
https://www.secrss.com/articles/29803
## 如何通过目标域名将请求发送到真实目标主机的网卡上？
粗略版：dns lookup\ tcp协议 \ ip寻址 \ arp广播

---
## 页面加载过程
dom cssom 布局树 reflow redraw 分层 分块 光栅化 合成 后缓冲区 前缓冲区

---
css
## rem em px转换
## 移动端 1px 问题
## 上下左右居中
## 盒子模型
## BFC
## 介绍flex及其属性
## 外边距溢出，合并
## css动画、js动画、jquery动画、requestAnimateFrame动画性能对比

---
小程序
## 微信底层怎么执行代码的?
https://developers.weixin.qq.com/community/develop/article/doc/0008a4c4f28f30fe3eb863b2750813
## taro\uni-app怎么做到一套代码跨平台用的
https://cloud.tencent.com/developer/article/1740871
<!-- todo read -->
https://cloud.tencent.com/developer/article/1728155
## electron是什么？
https://juejin.cn/post/6844903777720336392
---
架构
## 什么是前端架构
https://www.zhihu.com/question/26646855
https://juejin.cn/post/6844903853859536903#heading-11
https://segmentfault.com/a/1190000023276852
## 什么是大前端
## 什么是前端模块化
## 抽取公共组件的原则
## 拆分代码和模块的目的与原则
https://juejin.cn/post/6844903767108747278
## 如何选择合适的语言、框架、插件
https://cloud.tencent.com/developer/article/1030379
## SSH 原理
https://www.jianshu.com/p/33461b619d53
## BDD、TDD、自动化测试
## 自动化部署jenkins、gitlab ci、nginx、docker
## 如何code review
## git分支管理
## node常用来做什么？

## ES2015 模块语法的静态结构是指？
## Tree-Shaking 和ES6 module
https://www.jianshu.com/p/51885485a790