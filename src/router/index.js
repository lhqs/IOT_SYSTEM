import Vue from 'vue'

import Router from 'vue-router'

// import Home from '@/components/home'
// const Foo = () => import('./Foo.vue')
const Home = ()  => import ('@/components/home');

// import PictureTable from '@/components/test/PictureTable'
const PictureTable = ()  => import ('@/components/test/PictureTable');
import CookieTest from '@/components/test/CookieTest'
import StoreTest from '@/components/test/StoreTest'
import LogIn from '@/components/LogIn'
import App from '@/App'
// import NotFound from '@/components/NotFound'
const NotFound = ()  => import ('@/components/NotFound');
// import LayoutTest from '@/components/test/LayoutTest'
const LayoutTest = ()  => import ('@/components/test/LayoutTest');
// import TerminalController from '@/components/page/TerminalController'
const TerminalController = ()  => import ('@/components/page/TerminalController');

// 正式版
// import RuntimeStatus from '@/components/page/RuntimeStatus'
const RuntimeStatus = ()  => import ('@/components/page/RuntimeStatus');
// import OperatorLog from '@/components/page/OperatorLog'
const OperatorLog = ()  => import ('@/components/page/OperatorLog');
// sensor
// import SensorOne from '@/components/page/SensorOne'
const SensorOne = ()  => import ('@/components/page/SensorOne');
// user manger
// import UserEdit from '@/components/page/UserEdit'
const UserEdit = ()  => import ('@/components/page/UserEdit');

// Org page
import Org from '@/Org'
import MainOrg from '@/components/MainOrg'

// import MonitorPage from '@/components/page/MonitorPage'
const MonitorPage = ()  => import ('@/components/page/MonitorPage');

// import NodeOne from '@/components/page/NodeOne'
const NodeOne = ()  => import ('@/components/page/NodeOne');
// import NodeTwo from '@/components/page/NodeTwo'
const NodeTwo = ()  => import ('@/components/page/NodeTwo');
// import NodeThree from '@/components/page/NodeThree'
const NodeThree = ()  => import ('@/components/page/NodeThree');

// import UploadFile from '@/components/test/UploadFile'
const UploadFile = ()  => import ('@/components/test/UploadFile');


Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      component: LogIn,
      name: '',
      hidden: true
    },
    {
      path: '/login',
      component: LogIn,
      name: '',
      hidden: true
    },
    {
      path: '/',
      component: App,
      name: '导航一',
      children: [
        { path: '/home', component: Home, name: '主页', hidden: true },

        { path: '/nodeOne', component: NodeOne, name: '节点一' },
        { path: '/nodeTwo', component: NodeTwo, name: '节点二' },
        { path: '/nodeThree', component: NodeThree, name: '节点三' },

        { path: '/userEdit', component: UserEdit, name: '用户管理' },
        { path: '/cameraMonitor', component: MonitorPage, name: '监控摄像' },

        { path: '/terminalController', component: TerminalController, name: '终端控制' },

        { path: '/layoutTest', component: LayoutTest, name: 'Test' },
        { path: '/uploadFile', component: UploadFile, name: 'upload_Test' },
      ]
    },
    {
      path: '/',
      component: App,
      name: '导航二',
      // iconCls: 'fa fa-id-card-o',
      children: [
        { path: '/runtimeStatus', component: RuntimeStatus, name: '系统运行环境' },
        { path: '/operatorLog', component: OperatorLog, name: '操作日志' },

        { path: '/pictureDemo', component: PictureTable, name: 'picdemo' },
        { path: '/cookie', component: CookieTest, name: 'cookie' },
        { path: '/store', component: StoreTest, name: 'StoreTest' }
      ]
    },{
      path: '/',
      component:Org,
      name: '企业用户',
      children: [
        {
          path: '/org',
          component:MainOrg,
          name: '企业用户page_one',
          children: [
            {path: '/org', component: SensorOne, name: 'home_dir'},
            {path: '/monitor', component: MonitorPage, name: '监控节点'},
          ]
        },
        { path: '/orgNodeOne', component: NodeOne, name: 'org节点一' },
        { path: '/orgNodeTwo', component: NodeTwo, name: 'org节点二' },
        { path: '/orgNodeThree', component: NodeThree, name: 'org节点三' }
      ]
    },{
      path: '/404',
      component: NotFound,
      name: '',
      hidden: true
    },
    {
      path: '*',
      hidden: true,
      redirect: { path: '/404' }
    }
  ]
})
