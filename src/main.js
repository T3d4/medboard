/* eslint-disable vue/no-reserved-component-names */
/* eslint-disable vue/multi-word-component-names */
import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'primeicons/primeicons.css'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faGear } from '@fortawesome/free-solid-svg-icons'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/lara-light-indigo/theme.css'

import Menu from 'primevue/menu'
import Chip from 'primevue/chip'
import Divider from 'primevue/divider'
import Dialog from 'primevue/dialog'
import Calendar from 'primevue/calendar'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'

library.add(faGear)

const app = createApp(App)

app.use(PrimeVue)
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
app.component('Menu', Menu)
app.component('Chip', Chip)
app.component('Divider', Divider)
app.component('Dialog', Dialog)
app.component('Calendar', Calendar)
app.component('InputText', InputText)
app.component('Button', Button)
