<template>
  <nav class="p-4 shadow-mlg backdrop-blur-xl bg-white/80 sticky top-0 right-0 left-0">
    <div class="flex items-center justify-between">
      <RouterLink :to="{ name: 'HomeView' }" class="font-bol nav-link">Logo</RouterLink>

      <ul class="inline-flex">
        <li class="mr-3">
          <RouterLink :to="{ name: 'AboutView' }" class="nav-link">About</RouterLink>
        </li>
        <li class="mr-3">
          <RouterLink :to="{ name: 'LoginView' }" class="nav-link">Login</RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'SignUpView' }" class="nav-link">Register</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script></script>

<style>
.nav-link {
  @apply p-2 px-4 bg-gray-200;
}
</style>
