import { createApp } from 'vue'
import './styles/main.css'
import App from './App.vue'
import router from './router'
import pinia from './store'
import 'vue-material-design-icons/styles.css';

const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount('#app');
