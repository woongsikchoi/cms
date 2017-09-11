import Vue from 'vue'
import Router from 'vue-router'
import Container from '@/components/container'
import Table from '@/components/table'
import Form from '@/components/form'
import Flot from '@/components/flot'
import Morris from '@/components/morris'
import PanelsWells from '@/components/panels-wells'
import Buttons from '@/components/buttons'
import Notifications from '@/components/notifications'
import Typography from '@/components/typography'
import Icons from '@/components/icons'
import Grid from '@/components/grid'
import ContentAdd from '@/components/content/add'
import ContentList from '@/components/content/list'
import ContentUpdate from '@/components/content/update'
import RuleList from '@/components/rule/list'
import MenuList from '@/components/menu/list'
import Item from '@/components/menu/item'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Container',
      component: Container
    },
    {
      path: '/table',
      component: Table
    },
    {
      path: '/form',
      component: Form
    },
    {
      path: '/flot',
      component: Flot
    },
    {
      path: '/morris',
      component: Morris
    },
    {
      path: '/panels-wells',
      component: PanelsWells
    },
    {
      path: '/buttons',
      component: Buttons
    },
    {
      path: '/notifications',
      component: Notifications
    },
    {
      path: '/typography',
      component: Typography
    },
    {
      path: '/icons',
      component: Icons
    },
    {
      path: '/grid',
      component: Grid
    },
    {
      path: '/content-add',
      component: ContentAdd
    },
    {
      path: '/content-list',
      component: ContentList
    },
    {
      name: 'contentUpdate',
      path: '/content-update/:id',
      component: ContentUpdate
    },
    {
      name: 'RuleList',
      path: '/rule-list/',
      component: RuleList
    },
    {
      path: '/menu-list',
      component: MenuList
    },
    {
      path: '/item',
      component: Item
    }
  ]
})
