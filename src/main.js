import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


/* import icons */
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'


/* add icons to the library */
library.add(fab, fas, far)


createApp(App)
  .use(store)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
