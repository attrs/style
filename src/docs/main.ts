import { createApp } from 'vue';
import App from '@/App.vue';
import 'inter-ui/inter.css';
import './registerServiceWorker';
import '../helper';
import './css/index.css';
import { router } from './router';

const app = createApp(App);

app.use(router);
app.mount('#app');
