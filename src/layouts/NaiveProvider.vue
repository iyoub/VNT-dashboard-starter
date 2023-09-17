<template>
  <n-config-provider :theme-overrides="themeOverrides" :theme="getTheme">
    <n-dialog-provider>
      <n-notification-provider>
        <!-- see https://www.naiveui.com/en-US/os-theme/components/message > MessageProvider Props -->
        <n-message-provider :duration="5000" :max="5" :keepAliveOnHover="true">
          <slot name="default"></slot>
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<script setup>
import { useAppConfig } from '@/stores/app-config'
import { storeToRefs } from 'pinia'

const appConfigStore = useAppConfig()
const { getTheme } = storeToRefs(appConfigStore)

const themeOverrides = {
  common: {
    primaryColor: '#007cfeFF'
  },
  Button: {
    colorPrimary: '#007cfeFF',
    colorHoverPrimary: '#006DE0FF',
    colorPressedPrimary: '#005EC1FF',
    colorFocusPrimary: '#0058B5FF',
    colorDisabledPrimary: '#87C1FEFF',
    rippleColorPrimary: '#0058B5FF',
    borderPrimary: '#0058B5FF',
    borderRadiusLarge: '6px',
    borderRadiusMedium: '6px',
    borderRadiusSmall: '4px',
    borderRadiusTiny: '4px',
    paddingTiny: '0 8px',
    paddingSmall: '0 12px',
    paddingMedium: '0 16px',
    paddingLarge: '0 20px'
  },
  Menu: {
    itemHeight: '46px'
  }
  // TODO: CUSTOMIZE OTHER COMPONENTS
}
</script>
