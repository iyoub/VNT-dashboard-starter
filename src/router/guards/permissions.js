// import { useUserStore } from '@/stores/modules/user';
import ROUTER from '..'
// import { AUTH_ROUTES, PRIVATE_ROUTES } from '../routes';

const usePermissionsGuard = () => {
  ROUTER.beforeEach((to, from, next) => {
    // const userStore = useUserStore();
    // const token = userStore.getToken;

    // redirect to login page if not logged in and trying to access a restricted page
    // if (!token && to.meta.auth) {
    //   next({ path: '/login' });
    //   return;
    // }

    // // redirect to dashboard if logged in and trying to access AUTH_ROUTES
    // AUTH_ROUTES.map((route) => {
    //   if (token && route.name === to.name) {
    //     next({ path: '/dashboard' });
    //     return;
    //   }
    // });

    // // redirect to login if logged in and trying to access PRIVATE_ROUTES
    // PRIVATE_ROUTES.map((route) => {
    //   if (!token && route.name === to.name) {
    //     next({ path: '/login' });
    //     return;
    //   }
    // });

    next()
  })
}

export default usePermissionsGuard
