import { storeToRefs } from 'pinia'
import ROUTER from '..'
import { useAppConfig } from '@/stores/app-config'

const usePageTitleGuard = () => {
  const appConfig = useAppConfig()
  const { getAppInfo } = storeToRefs(appConfig)

  ROUTER.afterEach((to) => {
    if (to.meta && to.meta.title) {
      const title = to.meta.title
      document.title = `${title} | ${getAppInfo.value.name || ''}`
    } else {
      document.title = getAppInfo.value.name || ''
    }
  })
}

export default usePageTitleGuard
