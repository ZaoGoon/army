import Vue from "vue";
import VueRouter from "vue-router";

//引入组件
import home from "../views/home.vue";
import demo from "../views/demo.vue";
import classify from "../views/classify.vue";
import allorders from "../views/allorders.vue";
import dispatching from "../views/dispatching.vue";
import Shopping from "../views/Shopping.vue";
import ordercpl from "../views/ordercpl.vue";
import my from "../views/my.vue";
import AddShopping from "../views/AddShopping.vue";

//要告诉vue使用vueRouter
Vue.use(VueRouter);

const routes = [{
		path: "/", //默认访问路径
		component: home //组件名称
	},
	{
		path: "/home", //访问路径
		component: home //组件名称
	},
	{
		path: "/demo", //访问路径
		component: demo //组件名称
	},
	{
		path: "/classify", //访问路径
		component: classify //组件名称
	},
	{
		path: "/allorders", //访问路径
		component: allorders //组件名称
	},
	{
		path: "/Shopping", //访问路径
		component: Shopping //组件名称
	},
	{
		path: "/ordercpl", //访问路径
		component: ordercpl //组件名称
	},
	{
		path: "/my", //访问路径
		component: my //组件名称
	},
	{
		path: "/AddShopping", //访问路径
		component: AddShopping //组件名称
	},
	{
		path: "/dispatching", //访问路径
		component: dispatching //组件名称
	}
]

var router = new VueRouter({
	routes
})
export default router;
