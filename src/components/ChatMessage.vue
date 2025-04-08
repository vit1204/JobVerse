<script setup lang="ts">
// Component logic can be added here if needed
</script>

<template>
  <div class="chat-message fixed bottom-4 right-4 bg-gray-100 rounded-lg shadow-lg p-4 max-w-md">
    <div class="flex items-start space-x-3">
      <div class="flex-shrink-0">
        <img class="h-10 w-10 rounded-full" src="https://via.placeholder.com/40" alt="Team Leader avatar">
      </div>
      <div>
        <div class="font-medium">
          Brian - Team Leader
        </div>
        <p class="text-gray-700 mt-1">
          Hey Lily, I just forwarded you an email from the partner regarding the financial statement analysis. Can you check and let me know your approach?
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chat-message {
  max-width: 400px;
}
</style>
