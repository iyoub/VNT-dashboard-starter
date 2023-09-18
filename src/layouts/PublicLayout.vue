<template>
  <main class="min-h-screen dark:bg-slate-800 dark:!text-slate-100 bg-slate-100/80">
    <!-- navbar -->
    <TopBar />
    <!-- main vie -->
    <div class="container mx-auto py-12 px-6">
      <RouterView />
    </div>

    <div class="fixed left-6 right-auto bottom-6 shadow-lg shadow-black/30 rounded-md">
      <ThemeSwitchButton />
    </div>
  </main>
</template>

<script setup>
import ThemeSwitchButton from '@/components/buttons/ThemeSwitchButton.vue'
import TopBar from '@/components/navs/TopBar.vue'
</script>
