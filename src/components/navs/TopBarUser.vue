<template>
  <nav class="border-b border-gray-100 flex justify-between align-center py-4 px-2">
    <h1 class="text-xl text-neutral-500 font-semibold">{{ $route.meta.label }}</h1>

    <div class="flex gap-3 mr-3">
      <!-- themes -->
      <n-button-group>
        <n-button class="!px-3" :tertiary="theme === 'dark'" type="primary" @click="handleThemeChange('light')">
          <template #icon>
            <n-icon><Sunny /></n-icon>
          </template>
        </n-button>
        <n-button class="!px-3" :tertiary="theme === 'light'" type="primary" @click="handleThemeChange('dark')">
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
            <n-avatar round size="small" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" class="mr-1" />
            <n-icon :depth="4" size="large">
              <ChevronDown />
            </n-icon>
          </n-button>
        </template>
        <ul>
          <p class="text-center block text-gray-400 pb-2">@johndoe</p>
          <hr class="border-gray-100" />
          <li>
            <RouterLink :to="{ name: 'SettingsView' }" class="popover-item block"> Settings </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'SettingsView' }" class="popover-item block"> Settings </RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'SettingsView' }" class="popover-item block"> Settings </RouterLink>
          </li>
        </ul>
      </n-popover>
    </div>
  </nav>
</template>

<script setup>
import { ChevronDown, Moon, NotificationsOutline, Sunny } from '@vicons/ionicons5'
import { ref } from 'vue'

const theme = ref('light')

const handleThemeChange = value => {
  theme.value = value
  document.documentElement.setAttribute('data-theme', value)
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
