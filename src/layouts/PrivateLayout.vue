<template>
  <main class="min-h-screen">
    <n-layout has-sider position="absolute">
      <n-layout-sider
        content-style="padding: 10px 0px;height: 100%;display: flex;flex-direction: column;"
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="220"
        :collapsed="collapsed"
        :native-scrollbar="false"
        show-trigger
        @collapse="collapsed = true"
        @expand="collapsed = false"
      >
        sidebar
      </n-layout-sider>

      <n-layout
        content-style="padding: 26px;"
        :native-scrollbar="false"
        class="!bg-slate-100/[0.4]"
      >
        <RouterView />
      </n-layout>
    </n-layout>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const collapsed = ref(true)
</script>
