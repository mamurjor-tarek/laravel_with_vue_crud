import './bootstrap';

// import { createApp } from "vue";

// import app from './layouts/app.vue';
// import router from './router';
// import VueAxios from 'vue-axios';
// import axios from 'axios';

// // createApp(app)
// //     .use(router,VueAxios,axios)
// //     .mount('#app');

import { createApp } from "vue";
import App from './layouts/app.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';

const app = createApp(App);

// Use Vue Router
app.use(router);

// Use VueAxios with Axios
app.use(VueAxios, axios);

app.mount('#app');
