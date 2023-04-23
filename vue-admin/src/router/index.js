import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


/* Layout */
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Layout,
        children: [{
            path: '',
            component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue'),
            name: 'home'
        }]
    },

    {
        path: '/updateUser',
        component: Layout, // 修改为 Layout 组件
        children: [{
            path: '',
            component: () => import(/* webpackChunkName: "about" */ '../views/updateUser.vue'),
            name: 'updateUser'
        }]
    },

    {
        path: '/correctPassword',
        component: Layout, // 修改为 Layout 组件
        children: [{
            path: '',
            component: () => import(/* webpackChunkName: "about" */ '../views/correctPassword.vue'),
            name: 'correctPassword'
        }]
    },

    {
        path: '/about',
        component: Layout, // 修改为 Layout 组件
        children: [
            {
                path: '',
                component: () => import( '../views/AboutView.vue'),
                name: 'about'
            }
        ]
    },

    {
        path: '/register',
        component: Layout, // 修改为 Layout 组件
        children: [
            {
                path: '',
                component: () => import( '../views/Register.vue'),
                name: 'register'
            }
        ]
    },

    {
        path: '/find',
        component: Layout, // 修改为 Layout 组件
        children: [
            {
                path: '',
                component: () => import( '../views/FindPassword.vue'),
                name: 'findPwd'
            }
        ]
    },

    {
        path: '/Login',
        name: 'login',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
    },

    {
        path: '/rbac',
        component: Layout,
        children: [/*{
            path: 'user/list',
            component: () => import(/!* webpackChunkName: "about" *!/ '../views/User/List.vue')
        },*/
            {
                path: 'user/add',
                component: () => import(/* webpackChunkName: "about" */ '../views/User/Add.vue')
            },

        ]
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
