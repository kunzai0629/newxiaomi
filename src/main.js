import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

window.localStorage.token = "30b816c83d66ab6f55761e82430f2a7d" // token令牌

createApp(App).use(router).mount('#app')