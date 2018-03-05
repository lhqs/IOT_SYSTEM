## 物联网管理系统前端

* 用于显示接收传感器节点传输数据与管理用户权限，此外，也包含节点数据可视化，萤石摄像监控录像，数据导出至Excel，系统运行环境监测等必要功能；
* 此项目基于Vue.js + Element UI + ECharts + axios + Nginx构建；

## 关联项目

* 物联完管理系统后台接口服务(https://github.com/lhqs/plant-rest):SpringMVC + Spring + MyBatis + MySql + RESTful + Tomcat + 七牛云对象存储；
*	接收数据程序(https://github.com/lhqs/data_transmission)：基于UDP + Netty构建；

## 项目构建

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```


## 项目运行页面

* 节点管理：
![](http://qiniu.lhqs1314.cn/msg_node.png)
* 用户管理：
![](http://qiniu.lhqs1314.cn/msg_user.png)
