
import Vue from 'vue'
// import App from '@/App'
import VueRouter from 'vue-router'

const routes = [
	{ path: '/', redirect: 'home' },
	{ path: '*', redirect: '/home' },
	{
		path: '/home',
		name: 'home',
		component: () => import('@/views/home'),
		meta: { title: '首页' }
	},
	{
		path: '/javascript',
		name: 'javascript',
		component: () => import('@/views/javascript'),
		meta: { title: 'javascript' }
	},
	{
		path: '/typescript',
		name: 'typescript',
		component: () => import('@/views/typescript'),
		meta: { title: 'typescript' }
	},
	{
		path: '/vue',
		name: 'vue',
		component: () => import('@/views/vue'),
		meta: { title: 'vue' }
	},
	{
		path: '/webpack',
		name: 'webpack',
		component: () => import('@/views/webpack'),
		meta: { title: 'webpack' }
	}

]



Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: routes,
	base: process.env.BASE_URL,
	props: true
})

export default router