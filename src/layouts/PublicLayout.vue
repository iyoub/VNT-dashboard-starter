<template>
  <main class="bg-slate-100 min-h-screen">
    <TopBar />
    <div class="container mx-auto py-12 px-6">
      <RouterView />
    </div>
  </main>
</template>

<script setup>
import TopBar from '@/components/navs/TopBar.vue'
</script>
