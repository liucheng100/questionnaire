import { createRouter, createWebHashHistory } from "vue-router";
import { getToken } from "@/utils/auth";

const routes = [
	{
		path: "/",
		component: () => import("@/views/home.vue"),
		meta: {
			title: "主页",
			requireAuth: true,
		},
	}
	
];

const router = createRouter({
	history: createWebHashHistory(),
	routes: routes,
	scrollBehavior: () => ({ top: 0 }),
});
router.beforeEach(async (to, from, next) => {
	next();
	return;
	let token = getToken();
	if (to.meta.requireAuth && !token) {
		next({
			path: "/login",
			query: {
				from: to.path,
			},
		});
	} else {
		window.document.title =
			to.meta.title == undefined
				? "天津大学2022年度辅导员个人测评系统"
				: `${to.meta.title} - 天津大学2022年度辅导员个人测评系统`;
		next();
	}
});
export default router;
