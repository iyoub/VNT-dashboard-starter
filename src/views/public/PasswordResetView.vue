<template>
  <div class="max-w-lg mx-auto">
    <h1 class="text-2xl mb-8 font-bold">Reset your password</h1>

    <n-form ref="formRef" :model="resetForm" :rules="resetRules">
      <!-- email -->
      <n-form-item path="email" label="Email">
        <n-input size="large" v-model:value="resetForm.email" placeholder="Enter your email" @keydown.enter.prevent>
          <template #prefix>
            <n-icon :component="AtSharp" />
          </template>
        </n-input>
      </n-form-item>

      <n-button @click="handleValidation" type="primary" size="large" strong block class="!mt-4"> Send Email </n-button>
    </n-form>
  </div>
</template>

<script setup>
import { useMessage } from 'naive-ui'
import { ref } from 'vue'
import { AtSharp } from '@vicons/ionicons5'

const message = useMessage()

const formRef = ref(null)
const resetForm = ref({
  email: null
})
const resetRules = {
  email: [
    {
      required: true,
      message: 'Please enter your email',
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
