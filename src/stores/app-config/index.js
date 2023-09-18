import { defineStore } from 'pinia'

export const useAppConfig = defineStore('app-config', {
  state: () => ({
    appInfo: {
      name: 'App Name',
      description: 'App Description'
    },
    theme: JSON.parse(localStorage.getItem('theme')) || null
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
        document.documentElement.classList.add('dark')
        localStorage.setItem('theme', JSON.stringify(theme))
      } else {
        document.documentElement.classList.remove('dark')
        localStorage.removeItem('theme')
      }

      this.theme = theme
    }
  }
})
