resetful 网站的本质就是提供资源访问
url 跟资源的一一对应关系
？queryString1=a&queryString2=b
backend 来做 路由规则 route rules
以前在后端中，一般是mvc，会负责解析url，映射一个route，跟后端脚本对应的controller
/book/123456(以前)
/api（现在）
fontend 接管一切
前端跟服务器相关性问题
后端开发方式：
url=>资源 缺点：http协议，资源跳转需要点击资源（herf），每次点击都会导致刷新页面。用户体验太差
pc时代可以忍受，移动时代不能忍受
https://m.taobao.com/#index 前端url 标记首页
https://m.taobao.com/#home  标记小家
html5 historyAPI 不会跳转页面，当你点击之后会触发一个事件，然后用ajax动态获取数据
