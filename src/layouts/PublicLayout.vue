<template>
  <main class="bg-gradient-to-b from-slate-100/80 from-40% via-slate-400/20 via-60% to-slate-700/20 to-90% min-h-screen">
    <!-- navbar -->
    <TopBar />
    <!-- main vie -->
    <div class="container mx-auto py-12 px-6">
      <RouterView />
    </div>
  </main>
</template>

<script setup>
import TopBar from '@/components/navs/TopBar.vue'
</script>
