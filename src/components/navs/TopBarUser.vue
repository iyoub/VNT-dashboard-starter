<template>
  <nav class="border-b border-gray-100 flex justify-between align-center py-4 px-2">
    <h1 class="text-xl text-neutral-500 font-semibold">{{ $route.meta.label }}</h1>

    <div class="flex gap-3 mr-3">
      <!-- themes -->
      <n-button-group>
        <n-button class="!px-3" :tertiary="isThemeDark" type="primary" @click="handleThemeChange">
          <template #icon>
            <n-icon><Sunny /></n-icon>
          </template>
        </n-button>
        <n-button class="!px-3" :tertiary="!isThemeDark" type="primary" @click="handleThemeChange">
          <template #icon>
            <n-icon><Moon /></n-icon>
          </template>
        </n-button>
      </n-button-group>
      <!-- notification -->
      <n-popover trigger="click">
        <template #trigger>
          <n-badge :value="3" :max="10">
            <n-button class="!px-2" type="primary" tertiary>
              <template #icon>
                <n-icon><NotificationsOutline /></n-icon>
              </template>
            </n-button>
          </n-badge>
        </template>
        <ul>
          <li v-for="notification in notifications" :key="notification.id">
            <div class="popover-item">
              <b>{{ notification.title }}</b>
              <p class="text-sm text-neutral-400">{{ notification.description }}</p>
            </div>
          </li>
        </ul>
      </n-popover>
      <!-- notification -->
      <n-popover trigger="click" width="200">
        <template #trigger>
          <n-button quaternary icon-placement="right" class="!px-1">
            <n-avatar round size="small" :src="getUser.avatar" class="mr-1" />
            <n-icon :depth="4" size="large">
              <ChevronDown />
            </n-icon>
          </n-button>
        </template>
        <template #header>
          <p class="text-gray-400 text-sm text-center">@{{ getUser.username }}</p>
        </template>
        <ul>
          <li>
            <RouterLink :to="{ name: 'SettingsView' }" class="popover-item block !mn-0"> Profile </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'SettingsView' }" class="popover-item block"> Settings </RouterLink>
          </li>
        </ul>
        <template #footer>
          <n-button text block class="!my-1"> Log Out </n-button>
        </template>
      </n-popover>
    </div>
  </nav>
</template>

<script setup>
import { ChevronDown, Moon, NotificationsOutline, Sunny } from '@vicons/ionicons5'
import { computed, ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { darkTheme } from 'naive-ui'
import { useAppConfig } from '@/stores/app-config'

const userStore = useUserStore()
const { getUser } = storeToRefs(userStore)
const appConfigStore = useAppConfig()
const { getTheme } = storeToRefs(appConfigStore)

const isThemeDark = computed(() => {
  return getTheme.value?.name === darkTheme.name
})

const handleThemeChange = () => {
  if (isThemeDark.value) {
    appConfigStore.setTheme({ theme: null })
    return
  }

  appConfigStore.setTheme({ theme: darkTheme })
}

const notifications = ref([
  {
    id: 123,
    title: 'New order received',
    description: 'You have received a new order from John Doe'
  },
  {
    id: 456,
    title: 'Payment received',
    description: 'You have received a payment of $50 from Jane Smith'
  },
  {
    id: 789,
    title: 'New message',
    description: 'You have a new message from support'
  }
])
</script>

<style>
.popover-item {
  @apply px-2 py-2 rounded hover:bg-gray-100 hover:shadow mb-2 cursor-pointer;
}
</style>
