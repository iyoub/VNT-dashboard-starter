<template>
  <n-button-group>
    <n-button class="!px-3" primary :type="isThemeDark ? 'default' : 'primary'" @click="handleThemeChange('light')">
      <template #icon>
        <n-icon :color="isThemeDark ? 'white' : 'yellow'"><Sunny /></n-icon>
      </template>
    </n-button>
    <n-button class="!px-3" primary :type="isThemeDark ? 'primary' : 'default'" @click="handleThemeChange('dark')">
      <template #icon>
        <n-icon :color="!isThemeDark ? 'navy' : 'yellow'"><Moon /></n-icon>
      </template>
    </n-button>
  </n-button-group>
</template>

<script setup>
import { computed } from 'vue'
import { Moon, Sunny } from '@vicons/ionicons5'
import { darkTheme } from 'naive-ui'
import { useAppConfig } from '@/stores/app-config'
import { storeToRefs } from 'pinia'

const appConfigStore = useAppConfig()
const { getTheme } = storeToRefs(appConfigStore)

const isThemeDark = computed(() => {
  return getTheme.value?.name === darkTheme.name
})

const handleThemeChange = theme => {
  if (theme === 'light') {
    // if theme is already light, set theme to null
    getTheme.value && appConfigStore.setTheme({ theme: null })
  } else {
    // if theme is not dark, set theme to dark
    getTheme.value?.name !== darkTheme.name && appConfigStore.setTheme({ theme: darkTheme })
  }
}
</script>
