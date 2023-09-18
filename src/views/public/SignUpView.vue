<template>
  <div class="max-w-lg mx-auto">
    <h1 class="text-2xl mb-8 font-bold">Welcome to {{ getAppInfo.name }}!</h1>

    <n-form ref="formRef" :model="signupForm" :rules="signupRules">
      <!-- Full Name -->
      <n-form-item path="fullName" label="Full Name">
        <n-input size="large" v-model:value="signupForm.fullName" placeholder="John Doe" @keydown.enter.prevent>
          <template #prefix>
            <n-icon :component="PersonOutline" />
          </template>
        </n-input>
      </n-form-item>

      <!-- email -->
      <n-form-item path="email" label="Email">
        <n-input size="large" v-model:value="signupForm.email" placeholder="john@example.com" @keydown.enter.prevent>
          <template #prefix>
            <n-icon :component="AtSharp" />
          </template>
        </n-input>
      </n-form-item>

      <!-- username -->
      <n-form-item path="username" label="Username">
        <n-input size="large" v-model:value="signupForm.username" placeholder="johdoe" @keydown.enter.prevent>
          <template #prefix>
            <n-icon :component="AtSharp" />
          </template>
        </n-input>
      </n-form-item>

      <!-- password -->
      <n-form-item path="password" label="Password">
        <n-input
          size="large"
          v-model:value="signupForm.password"
          type="password"
          show-password-on="click"
          placeholder="Enter your password"
          @keydown.enter.prevent
        >
          <template #prefix>
            <n-icon :component="LockClosedOutline" />
          </template>
        </n-input>
      </n-form-item>

      <n-button @click="handleValidation" type="primary" size="large" strong block class="!mt-4"> Sign Up </n-button>
    </n-form>

    <p class="text-gray-500 text-center text-[12px] mt-4">
      Already have an account?
      <RouterLink :to="{ name: 'LoginView' }">
        <n-button type="primary" text> Login </n-button>
      </RouterLink>
    </p>
  </div>
</template>

<script setup>
import { useMessage } from 'naive-ui'
import { ref } from 'vue'
import { AtSharp, PersonOutline, LockClosedOutline } from '@vicons/ionicons5'
import { useAppConfig } from '@/stores/app-config'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const appConfig = useAppConfig()
const { getAppInfo } = storeToRefs(appConfig)
const userStore = useUserStore()

const message = useMessage()
const router = useRouter()

const formRef = ref(null)
const signupForm = ref({
  fullName: null,
  email: null,
  username: null,
  password: null
})
const signupRules = {
  fullName: [
    {
      required: true,
      message: 'Please enter your full name',
      trigger: ['input', 'blur']
    }
  ],
  email: [
    {
      required: true,
      message: 'Please enter your email',
      trigger: ['input', 'blur']
    }
  ],
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
    handleSignup()
  })
}

// TODOl CONTINUE ADDING THE SING UP FUNCTIONALITY
const handleSignup = async () => {
  // const { error, success } = await userStore. ({ user: signupForm.value })
  // if (error) {
  //   message.error(`Failed to signup. ${error}`)
  //   return
  // }
  // if (success) {
  //   message.success(`Welcome aboard, ${signupForm.value.username}!`)
  //   router.push({ name: 'DashboardView' })
  // }
}
</script>
