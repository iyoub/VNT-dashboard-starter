import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: JSON.parse(localStorage.getItem('user')) || null
  }),

  getters: {
    getUser() {
      return this.user
    }
  },

  actions: {
    setUser({ user }) {
      // updating the user object
      this.user = {
        fullName: user.fullName || null,
        email: user.email || null,
        username: user.username || null,
        password: user.password || null,
        avatar: user.avatar || 'https://i.pravatar.cc/300'
      }
      // updating the localStorage
      localStorage.setItem('user', JSON.stringify(this.user))
    },

    useLogin({ payload }) {
      // checking if user exists in localStorage to login
      const user = JSON.parse(localStorage.getItem('user'))
      if (user && user.username === payload.username && user.password === payload.password) {
        this.setUser({ user })

        return {
          success: true,
          error: null
        }
      }
      // if user doesn't exist in localStorage, return error
      return {
        success: false,
        error: 'Invalid username or password'
      }
    },

    useSignup({ payload }) {
      console.log('user', payload)

      // checking if user exists in localStorage to register
      const user = JSON.parse(localStorage.getItem('user'))
      if (user && user.username === payload.username) {
        return {
          success: false,
          error: 'Username already exists'
        }
      }
      // if user doesn't exist in localStorage, register
      this.setUser({ user: payload })

      return {
        success: true,
        error: null
      }
    }
  }
})
