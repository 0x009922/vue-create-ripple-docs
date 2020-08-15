import { createApp } from 'vue';
import App from './App.vue';
import VCode from './components/VCode.vue';
import { Ripple } from 'vue-create-ripple';
import './tailwind.css';

createApp(App)
  .component('VCode', VCode)
  .directive('ripple', Ripple)
  .mount('#app')
