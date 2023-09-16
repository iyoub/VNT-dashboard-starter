import usePermissionsGuard from './permissions'
import usePageTitleGuard from './title'

export default function useSetupRouterGuards() {
  usePermissionsGuard()
  usePageTitleGuard()
}
