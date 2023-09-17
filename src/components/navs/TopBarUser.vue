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
            <n-button class="!px-3" type="primary" tertiary>
              <template #icon>
                <n-icon><NotificationsOutline /></n-icon>
              </template>
            </n-button>
          </n-badge>
        </template>
        <ul>
          <li v-for="notification in notifications" :key="notification.id">
            <div class="px-2 py-2 rounded hover:bg-gray-100 hover:shadow mb-2 cursor-pointer">
              <b>{{ notification.title }}</b>
              <p class="text-sm text-neutral-400">{{ notification.description }}</p>
            </div>
          </li>
        </ul>
      </n-popover>
    </div>
  </nav>
</template>

<script setup>
import { Moon, NotificationsOutline, Sunny } from '@vicons/ionicons5'
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
