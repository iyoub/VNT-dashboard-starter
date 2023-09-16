import { defineStore } from 'pinia'

export const useAppConfig = defineStore('app-config', {
  state: () => ({
    appInfo: {
      name: 'App Name',
      description: 'App Description'
    }
  }),

  getters: {
    getAppInfo() {
      return this.appInfo
    }
  }
})
