<template>
  <nav class="py-5 px-4 shadow-lg backdrop-blur-xl bg-white/80 dark:bg-slate-400/60 sticky top-0 right-0 left-0">
    <div class="flex items-center justify-between">
      <RouterLink :to="{ name: 'HomeView' }">
        <n-button type="primary" quaternary class="!font-semibold dark:!text-gray-200"> Logo </n-button>
      </RouterLink>

      <ul class="inline-flex">
        <li class="mr-2">
          <RouterLink :to="{ name: 'AboutView' }">
            <n-button type="primary" quaternary class="!font-semibold dark:!text-gray-200"> About </n-button>
          </RouterLink>
        </li>
        <li class="mr-2">
          <RouterLink :to="{ name: 'LoginView' }">
            <n-button type="primary" quaternary class="!font-semibold dark:!text-gray-200"> Login </n-button>
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'SignUpView' }">
            <n-button type="primary" quaternary class="!font-semibold dark:!text-gray-200"> Sign Up </n-button>
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script></script>

<style></style>
