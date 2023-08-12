import { createApp } from 'vue';
import App from './App.vue';
import router from './routers';
import { createApp } from 'vue';
import Notifications from '@kyvg/vue3-notification';
const app = createApp(App).use(router).mount('#app')
app.use(Notifications)
