import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

library.add(faEllipsis);

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount('#app')
