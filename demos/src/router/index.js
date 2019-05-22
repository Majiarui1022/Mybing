import Vue from 'vue'
import Router from 'vue-router'
import layout from '../../src/components/tanguan/layout/layout'

import layouts from '../components/plc/layout/layout'
import autotest from '../view/plc/autoTest/autoTest'


Vue.use(Router)

export default new Router({
  linkActiveClass:'router-link-active',
  routes: [

    {
      path: '/',
      name: 'layouts',
      component: layouts,
      redirect:'/autotest',
      children:[
        {
          path:'/autotest',
          name:'autotest',
          component:autotest
        },
        {
          path:'/mapping',
          name:'mapping',
          component:() => import('@/view/plc/mapping/mapping')
        },
        {
          path:'/timing',
          name:'timing',
          component:() => import('@/view/plc/timing/timing')
        },
        {
          path:'/operand',
          name:'operand',
          component:() => import('@/view/plc/Operand/Operand')
        },
        {
          path:'/Manual',
          name:'Manual',
          component:() => import('@/view/plc/Manual/Manual')
        },
      ]
    },

    //plc
    {
      path:"/ShowData",
      name: 'ShowData',
      component:() => import('@/view/tanguan/showData/ShowData'),
    },
    {
      path: '/layout',
      name: 'layout',
      redirect:'Configure',
      component: layout,
      children:[
        {
          path: '/Configure',
          name: 'Configure',
          component:() => import('@/view/tanguan/Configure/Configure'),
        },
        {
          path: '/DBCAnalysis',
          name: 'DBCAnalysis',
          component:() => import('@/view/tanguan/DBCAnalysis/DBCAnalysis'),
          children:[
            {
              path: '/DBCAnalysisMain',
              name: 'DBCAnalysisMain',
              component:() => import('@/view/tanguan/DBCAnalysis/DBCAnalysisMain'),
            },
          ]
        },
      ]
    },
    {
      path:'/ceshi',
      name:'ceshi',
      component:() => import('@/view/tanguan/ceshi')
    },

    //Tools
    {
      path:'/KFToolsLayout',
      name:'KFToolsLayout',
      redirect:'/CKWLTS',
      component:() => import('../components/KFtools/layout/KFToolsLayout'),
      children:[
        {
          path:'/CKWLTS',
          name:'CKWLTS',
          component:() => import('@/view/KFtools/CKWLTS/CKWLTS'),
        }
      ]
    }

  ]
})
