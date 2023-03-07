import "bootstrap/dist/css/bootstrap.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faEllipsis, faCircle as faCircleSolid, faCircleXmark as  faCircleXmarkSolid, faCirclePlus as faCirclePlusSolid, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCircle as faCircleRegular, faCircleXmark as  faCircleXmarkRegular } from "@fortawesome/free-regular-svg-icons";
import mitt from 'mitt';
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

library.add(faEllipsis, faCircleRegular, faCircleSolid, faCircleXmarkRegular, faCircleXmarkSolid, faCirclePlusSolid, faPlus);

const emitter = mitt();

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .provide('eventBus', emitter)
    .mount('#app')
