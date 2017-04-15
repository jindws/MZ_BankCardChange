import Vue from 'vue'

//elemeUI
import { Steps,Step,Upload,Dialog } from 'element-ui'
Vue.use(Steps)
Vue.use(Step)
Vue.use(Upload)
Vue.use(Dialog)

// // import Checkbox from 'iview/src/components/checkbox';
// import iView from 'iview'
// import 'iview/dist/styles/iview.css'
// Vue.use(iView);

//router
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Index from '../pages/Index'
import Main from '../pages/Main'

const routes = [
  { path: '/', component: Index },
  { path: '/main', component: Main },
]

const router = new VueRouter({
  routes
})


new Vue({
  router
}).$mount('#container');

// new Vue({
//   el: '#container',
//   render: h => h(router)
// })
