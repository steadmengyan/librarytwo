import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Index from '../components/index'
import Wenwen from '../components/wenwen'
import Data from '../components/data'
import User from '../components/user'
import Login from '../components/login'
import Restpwd from '../components/restpwd'
import Register from '../components/register'
import Loginvip from '../components/loginvip'
import Ktvip from '../components/ktvip'
import Rgreement from '../components/agreement'
import Textlist from '../components/textlist'
import Textdetail from '../components/textdetail'
import Sharedetail from '../components/sharedetail'
import Wenwenlist  from '../components/wenwenlist'
import Looklist  from '../components/looklist'
import Lookdetail  from '../components/lookdetail'
import Activity  from '../components/activity'
import Updinfo from '../components/updinfo'
import Record  from '../components/record'
import Wenlist from '../components/wenlist'
import Textvideo from  '../components/textvideo' 
import Test from '../components/test'
import Actdetail from '../components/actdetail'
import Sharelist from '../components/sharelist'
import Collect from '../components/collect'
import Notice from '../components/notice'
import Wendetail from '../components/wendetail'
import Wentidetail from '../components/wentidetail'
import Notedetail from '../components/notedetail'
import Noticedetail from '../components/noticedetail'
import Credit from '../components/credit'
import Note from '../components/note'
import Help from '../components/help'
import Helpdetail from '../components/helpdetail'
import Myfk from '../components/myfk'
import Helplist from '../components/helplist'
import Dati from '../components/dati'
import Search from '../components/search'
import Promoters from '../components/promoters'








 






Vue.use(Router)


export default new Router({
  mode:"hash",
  routes: [
    {path:'/',component:Home,children:[
      {path:'',name:"index",component:Index},
      {path:'/wenwen',name:"wenwen",component:Wenwen},
      {path:'/data',name:"data",component:Data},
      {path:'/user',name:"user",component:User}
    ]},
    { path: '/login', name:"login",component: Login },
    { path: '/restpwd', name:"restpwd",component: Restpwd },
    { path: '/register', name:"register",component: Register },
    {path:'/loginvip',name:'loginvip',component:Loginvip},
    {path:'/ktvip',name:'ktvip',component:Ktvip},
    {path:'/agreement',name:'agreement',component:Rgreement},
    {path:'/textlist',name:'textlist',component:Textlist},
    {path:'/textdetail',name:'textdetail',component:Textdetail},
    {path:'/sharedetail',name:'sharedetail',component:Sharedetail},
    {path:'/wenwenlist',name:'wenwenlist',component:Wenwenlist},
    {path:'/looklist',name:'looklist',component:Looklist},
    {path:'/lookdetail',name:'lookdetail',component:Lookdetail},
    {path:'/activity',name:'activity',component:Activity},
    {path:'/updinfo',name:'updinfo',component:Updinfo},
    {path:'/record',name:'record',component:Record},
    {path:'/wenlist',name:'wenlist',component:Wenlist},
    {path:'/textvideo',name:'textvideo',component:Textvideo},
    {path:'/test',name:'test',component:Test},
    {path:'/actdetail',name:'actdetail',component:Actdetail},
    {path:'/sharelist',name:'sharelist',component:Sharelist},
    {path:'/collect',name:'collect',component:Collect},
    {path:'/notice',name:'notice',component:Notice},
    {path:'/wendetail',name:'wendetail',component:Wendetail},
    {path:'/wentidetail',name:'wentidetail',component:Wentidetail},
    {path:'/notedetail',name:'notedetail',component:Notedetail},
    {path:'/noticedetail',name:'noticedetail',component:Noticedetail},
    {path:'/credit',name:'credit',component:Credit},
    {path:'/note',name:'note',component:Note},
    {path:'/help',name:'help',component:Help},
    {path:'/helpdetail',name:'helpdetail',component:Helpdetail},
    {path:'/myfk',name:'myfk',component:Myfk},
    {path:'/helplist',name:'helplist',component:Helplist},
    {path:'/dati',name:'dati',component:Dati},
    {path:'/search',name:'search',component:Search},
       {path:'/promoters',name:'promoters',component:Promoters}
   

 
    







  ]

})
