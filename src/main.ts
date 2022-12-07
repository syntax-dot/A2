import { createApp } from 'vue'
import { router } from './app/router/index'
import App from './app/App.vue'

createApp(App)
  .use(router)
  .mount('#app')
