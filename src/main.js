import './assets/css/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import ROUTER, { setupRouter } from './router'
import setupNaive from './plugins/naive'
import setupPiniaStore from './stores'

async function initApp() {
  const app = createApp(App)

  setupPiniaStore(app)
  setupNaive(app)
  setupRouter(app)

  await ROUTER.isReady()

  // https://www.naiveui.com/en-US/os-theme/docs/style-conflict#About-Tailwind's-Preflight-Style-Override
  const meta = document.createElement('meta')
  meta.name = 'naive-ui-style'
  document.head.appendChild(meta)

  app.mount('#app')
}

initApp()
