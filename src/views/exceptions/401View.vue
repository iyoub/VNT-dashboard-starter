<template>
  <div
    class="bg-gradient-to-b from-slate-100/80 from-40% via-slate-400/20 via-60% to-slate-700/20 to-90% min-h-screen flex flex-col justify-center"
  >
    <div class="text-center max-w-lg mx-auto">
      <h1 class="text-8xl font-bold mb-8">401</h1>
      <p class="text-2xl font-semibold mb-4">Unauthorized</p>
      <p class="mb-6">You are not authorized to access this page.</p>
      <RouterLink :to="{ name: 'HomeView' }">
        <n-button size="large" type="primary" block> Go Home </n-button>
      </RouterLink>
    </div>
  </div>
</template>
