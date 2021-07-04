import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: { name: 'SetUsername' } },
  { path: '/set-chat-name', name: "SetChatName", component: async () => import("../views/SetChatName.vue") },
  { path: '/chat', name: "Chat", component: async () => import("../views/Chat.vue") },
  { path: '/set-username', name: "SetUsername", component: async () => import("../views/SetUsername.vue") },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
