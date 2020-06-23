import Vue from 'vue'
import Router from 'vue-router'
import FirstStep from '../components/FirstStep'
import SecondStep from '../components/SecondStep'
import ThirdStep from '../components/ThirdStep'
Vue.use(Router)
const router = new Router({
  routes: [
 {
 path: '/',
 name: 'FirstStep',
 component: FirstStep
 },
 {
 path: '/secondstep',
 name: 'SecondStep',
 component: SecondStep
 },
 {
 path: '/thirdstep',
 name: 'ThirdStep',
 component: ThirdStep
 } 
  ]
})
export default router