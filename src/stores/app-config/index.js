import { defineStore } from 'pinia'

export const useAppConfig = defineStore('app-config', {
  state: () => ({
    appInfo: {
      name: 'App Name',
      description: 'App Description'
    },
    theme: localStorage.getItem('theme') || 'light'
  }),

  getters: {
    getAppInfo() {
      return this.appInfo
    },
    getTheme() {
      return this.theme
    }
  },

  actions: {
    setTheme({ theme }) {
      if (theme) {
        localStorage.setItem('theme', theme)
        document.documentElement.classList.add('dark')
      } else {
        localStorage.removeItem('theme')
        document.documentElement.classList.remove('dark')
      }

      this.theme = theme
    }
  }
})
