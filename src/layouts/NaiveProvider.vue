<template>
  <n-config-provider>
    <n-dialog-provider>
      <n-notification-provider>
        <!-- see https://www.naiveui.com/en-US/os-theme/components/message > MessageProvider Props -->
        <n-message-provider :duration="5000" :max="5" :keepAliveOnHover="true">
          <slot name="default"></slot>
        </n-message-provider>
      </n-notification-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<script setup></script>
