import { StoreSystem } from '@/systems/StoreSystem';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/set-username', name: "SetUsername", component: async () => import("../views/SetUsername.vue"), alias: '/' },
  { path: '/set-chat-name', name: "SetChatName", component: async () => import("../views/SetChatName.vue"), meta: { requiresUsername: true } },
  { path: '/chat', name: "Chat", component: async () => import("../views/Chat.vue"), meta: { requiresUsername: true, requiresChatName: true } },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async (to, from, next): Promise<void> => {
  const requiresUsername = to.matched.some((x) => x.meta.requiresUsername);
  const requiresChatName = to.matched.some((x) => x.meta.requiresChatName);
  const userState = StoreSystem.state.userState;

  if (requiresUsername && !userState.username) return next('/')
  if (requiresChatName && !userState.chatName) return next('/')
  next();
});

export default router
