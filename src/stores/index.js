import { createPinia } from 'pinia'

const store = createPinia()

function setupPiniaStore(app) {
  app.use(store)
}

export default setupPiniaStore
