import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {
      fullName: 'John Doe',
      email: 'john@example.com',
      username: 'johndoe',
      avatar: 'https://i.pravatar.cc/300'
    }
  }),

  getters: {
    getUser() {
      return this.user
    }
  },

  actions: {
    setUser({ user }) {
      this.user = user
    }
  }
})
