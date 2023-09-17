<template>
  <aside>
    <RouterLink :to="{ name: 'HomeView' }" class="flex justify-center">
      <n-button type="primary" quaternary class="!font-semibold"> Logo </n-button>
    </RouterLink>
    <hr class="my-4 mx-3 border-gray-100" />
    <n-menu
      :collapsed="props.collapsed"
      :collapsed-width="props.collapsedWidth"
      :collapsed-icon-size="props.collapsedIconWidth"
      :options="sidebarOptions"
      v-model:value="activeRoute"
    />
  </aside>
</template>

<script setup>
import { PRIVATE_ROUTES } from '@/router/routes'
import { NIcon } from 'naive-ui'
import { computed, h } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

const props = defineProps({
  collapsed: {
    type: Boolean,
    required: true
  },
  collapsedWidth: {
    type: Number,
    required: true
  },
  collapsedIconWidth: {
    type: Number,
    required: true
  }
})

const router = useRouter()

const activeRoute = computed({
  get: () => router.currentRoute.value.name,
  set: value => router.push({ name: value })
})

const renderIcon = icon => {
  return () => h(NIcon, null, { default: () => h(icon) })
}

// showing only routes that have showOnSidebar: true in their meta
const sidebarOptions = PRIVATE_ROUTES.map(route => ({
  label: () =>
    h(
      RouterLink,
      {
        to: {
          name: route.name
        },
        class: 'font-semibold'
      },
      { default: () => route.meta.label }
    ),
  key: route.name,
  icon: renderIcon(route.meta.icon)
}))
</script>

<style>
/* menu */
.n-menu-item-content {
  padding-left: 20px !important;
}
.n-menu .n-menu-item-content::before {
  left: 6px !important;
  right: 6px !important;
}
.n-menu-item-content.n-menu-item-content--selected::before {
  left: 0 !important;
}
/* active menu link */
.n-menu-item-content.n-menu-item-content--selected::after {
  content: '';
  position: absolute;
  left: 0;
  right: auto;
  width: 4px;
  top: 0;
  bottom: 0;
  background-color: var(--n-item-text-color-active);
}
.n-layout-toggle-button {
  width: 28px !important;
  height: 36px !important;
  border-radius: 0 !important;
}
</style>
