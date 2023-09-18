<template>
  <nav class="border-b border-gray-100 dark:border-gray-100/20 flex justify-between align-center py-4 px-2">
    <h1 class="text-xl text-gray-500 font-semibold">{{ $route.meta.label }}</h1>

    <div class="flex gap-3 mr-3">
      <!-- themes -->
      <ThemeSwitchButton />
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
          <p class="text-gray-500 text-sm text-center">@{{ getUser.username }}</p>
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
import ThemeSwitchButton from '@/components/buttons/ThemeSwitchButton.vue'
import { ChevronDown, NotificationsOutline } from '@vicons/ionicons5'
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'

const userStore = useUserStore()
const { getUser } = storeToRefs(userStore)

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
  @apply px-2 py-2 rounded hover:bg-gray-100 hover:shadow mb-2 cursor-pointer dark:hover:bg-gray-800;
}
</style>
