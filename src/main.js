import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

import PrimeVue from 'primevue/config'
import OverlayPanel from 'primevue/overlaypanel';

library.add(faUserSecret)

const app = createApp(App)

app.use(PrimeVue)
app.use(router)

app.component('OverlayPanel', OverlayPanel)
app.component('font-awesome-icon', FontAwesomeIcon,).mount('#app')
