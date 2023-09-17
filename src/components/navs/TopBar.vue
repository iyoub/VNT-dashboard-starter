<template>
  <nav class="p-4 shadow-lg backdrop-blur-xl bg-white/80 sticky top-0 right-0 left-0">
    <div class="flex items-center justify-between">
      <RouterLink :to="{ name: 'HomeView' }">
        <n-button type="primary" quaternary class="!font-semibold"> Logo </n-button>
      </RouterLink>

      <ul class="inline-flex">
        <li class="mr-3">
          <RouterLink :to="{ name: 'AboutView' }">
            <n-button type="primary" quaternary class="!font-semibold"> About </n-button>
          </RouterLink>
        </li>
        <li class="mr-3">
          <RouterLink :to="{ name: 'LoginView' }">
            <n-button type="primary" quaternary class="!font-semibold"> Login </n-button>
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'SignUpView' }">
            <n-button type="primary" quaternary class="!font-semibold"> Sign Up </n-button>
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script></script>

<style></style>
