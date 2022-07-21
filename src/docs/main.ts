import { createApp } from 'vue';
import App from '@/App.vue';
import 'inter-ui/inter.css';
import '../helper';
import './css/index.css';
import SmoothCorners from '../worklets/smooth-corners.worklet.js?url';
import { router } from './router';

window.CSS && CSS.paintWorklet && CSS.paintWorklet.addModule && CSS.paintWorklet.addModule(SmoothCorners);

const app = createApp(App);

app.use(router);
app.mount('#app');
