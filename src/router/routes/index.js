import { GridOutline, SettingsOutline } from '@vicons/ionicons5'

const PUBLIC_ROUTES = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('@/views/public/HomeView.vue'),
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/about',
    name: 'AboutView',
    component: () => import('@/views/public/AboutView.vue'),
    meta: {
      title: 'About Us'
    }
  }
]

const EXCEPTION_ROUTES = [
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/exceptions/404View.vue'),
    meta: {
      title: 'Not Found'
    }
  },
  // 401
  {
    path: '/401',
    name: '401',
    component: () => import('@/views/exceptions/401View.vue'),
    meta: {
      title: 'Unauthorized'
    }
  }
]

export const PRIVATE_ROUTES = [
  {
    path: '/dashboard',
    name: 'DashboardView',
    component: () => import('@/views/private/DashboardView.vue'),
    meta: {
      title: 'Dashboard',
      showOnSidebar: true,
      label: 'Dashboard',
      icon: GridOutline
    }
  },
  {
    path: '/settings',
    name: 'SettingsView',
    component: () => import('@/views/private/SettingsView.vue'),
    meta: {
      title: 'Settings',
      showOnSidebar: true,
      label: 'Settings',
      icon: SettingsOutline
    }
  }
]

export const AUTH_ROUTES = [
  {
    path: '/login',
    name: 'LoginView',
    component: () => import('@/views/public/LoginView.vue'),
    meta: {
      title: 'Login'
    }
  },
  {
    path: '/signup',
    name: 'SignUpView',
    component: () => import('@/views/public/SignUpView.vue'),
    meta: {
      title: 'Sign Up'
    }
  },
  {
    path: '/password-reset',
    name: 'PasswordResetView',
    component: () => import('@/views/public/PasswordResetView.vue'),
    meta: {
      title: 'Password Reset'
    }
  }
]

export const ROUTES = [
  [
    {
      path: '/dashboard',
      name: 'PrivateLayout',
      meta: {
        isAuth: true
      },
      component: () => import('@/layouts/PrivateLayout.vue'),
      children: PRIVATE_ROUTES
    },
    {
      path: '/',
      name: 'PublicLayout',
      component: () => import('@/layouts/PublicLayout.vue'),
      children: [...PUBLIC_ROUTES, ...AUTH_ROUTES]
    },
    {
      path: '/exceptions',
      name: 'ExceptionsLayout',
      children: EXCEPTION_ROUTES
    }
  ]
]
