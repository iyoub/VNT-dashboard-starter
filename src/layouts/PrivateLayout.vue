<template>
  <main class="min-h-screen">
    <n-layout has-sider position="absolute">
      <!-- sidebar -->
      <n-layout-sider
        content-style="padding: 10px 0;height: 100%;display: flex;flex-direction: column;"
        bordered
        collapse-mode="width"
        :collapsed-width="sidebarProps.collapsedWidth"
        :width="sidebarProps.width"
        :collapsed="sidebarProps.collapsed"
        :native-scrollbar="false"
        show-trigger
        @collapse="toggleSidebar"
        @expand="toggleSidebar"
      >
        <SideBar
          :collapsed="sidebarProps.collapsed"
          :collapsed-width="sidebarProps.collapsedWidth"
          :collapsed-icon-width="sidebarProps.collapsedIconWidth"
        />
      </n-layout-sider>
      <n-layout class="px-8 py-2" :native-scrollbar="false">
        <!-- bar info -->
        <TopBarUser />

        <!-- main view -->
        <RouterView />
      </n-layout>
    </n-layout>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import SideBar from '@/components/navs/SideBar.vue'
import TopBarUser from '@/components/navs/TopBarUser.vue'

const sidebarProps = ref({
  width: 240,
  collapsed: false,
  collapsedWidth: 64,
  collapsedIconWidth: 20
})

const toggleSidebar = () => {
  sidebarProps.value.collapsed = !sidebarProps.value.collapsed
}
</script>
