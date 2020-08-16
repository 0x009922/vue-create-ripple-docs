import { createApp } from 'vue';
import App from './App.vue';
import VCode from './components/VCode.vue';
import VA from './components/VA.vue';
import VIcon from './components/VIcon.vue';
import { Ripple } from 'vue-create-ripple';
import './tailwind.css';

createApp(App)
  .component('VCode', VCode)
  .component('VA', VA)
  .component('VIcon', VIcon)
  .directive('ripple', Ripple)
  .mount('#app')
