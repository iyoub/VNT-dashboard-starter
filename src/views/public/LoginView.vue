<template>
  <div class="max-w-lg mx-auto">
    <h1 class="text-2xl mb-8 font-bold">Welcome back!</h1>

    <n-form ref="formRef" :model="logingForm" :rules="loginRules">
      <!-- username -->
      <n-form-item path="username" label="Username">
        <n-input size="large" v-model:value="logingForm.username" placeholder="Enter your username" @keydown.enter.prevent>
          <template #prefix>
            <n-icon :component="AtSharp" />
          </template>
        </n-input>
      </n-form-item>

      <!-- password -->
      <n-form-item path="password" label="Password">
        <div class="flex flex-col w-full">
          <n-input
            size="large"
            v-model:value="logingForm.password"
            type="password"
            show-password-on="click"
            placeholder="Enter your password"
            @keydown.enter.prevent
          >
            <template #prefix>
              <n-icon :component="LockClosedOutline" />
            </template>
          </n-input>

          <RouterLink :to="{ name: 'PasswordResetView' }" tabindex="-1">
            <n-button type="primary" text class="!font-semibold !w-full !justify-end"> Forgot Password? </n-button>
          </RouterLink>
        </div>
      </n-form-item>

      <n-button @click="handleValidation" type="primary" size="large" strong block class="!mt-4"> Login </n-button>
    </n-form>
  </div>
</template>

<script setup>
import { useMessage } from 'naive-ui'
import { ref } from 'vue'
import { AtSharp, LockClosedOutline } from '@vicons/ionicons5'

const message = useMessage()

const formRef = ref(null)
const logingForm = ref({
  username: null,
  password: null
})
const loginRules = {
  username: [
    {
      required: true,
      message: 'Please enter your username',
      trigger: ['input', 'blur']
    }
  ],
  password: [
    {
      required: true,
      message: 'Please enter your password',
      trigger: ['input', 'blur']
    }
  ]
}

function handleValidation(e) {
  e.preventDefault()

  formRef.value?.validate(errors => {
    // form validation failed
    if (errors) {
      message.error('Some fields are not filled correctly')
      return
    }

    // form validation passed
    message.success('Form validation passed')
  })
}
</script>
