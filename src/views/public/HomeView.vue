<template>
  <div class="text-center">
    <h1 className="text-3xl font-semibold mb-4">Welcome to {{ getAppInfo.name }}</h1>
    <p class="text-gray-800 text-lg max-w-2xl mx-auto mb-8">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia cupiditate nisi magnam earum rerum enim expedita vitae pariatur
      repellendus.
    </p>

    <n-button size="large" type="primary" class="!px-8"> Get Started </n-button>
  </div>
</template>

<script setup>
import { useAppConfig } from '@/stores/app-config'
import { storeToRefs } from 'pinia'

const appConfig = useAppConfig()
const { getAppInfo } = storeToRefs(appConfig)
</script>
