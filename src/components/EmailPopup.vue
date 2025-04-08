<script setup lang="ts">
// Component logic can be added here if needed
</script>

<template>
  <div class="email-popup bg-white rounded-lg shadow-lg p-6 max-w-2xl">
    <div class="flex items-start mb-4">
      <div class="flex-shrink-0">
        <img class="h-10 w-10 rounded-full" src="https://via.placeholder.com/40" alt="User avatar">
      </div>
      <div class="ml-3 flex-1">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-lg font-medium text-gray-900">
              Daehyun Kim
            </h3>
            <p class="text-sm text-gray-500">
              to me
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-4">
      <p class="text-gray-700">
        Dear Team,
      </p>
      <p class="text-gray-700">
        I hope this message finds you well.
      </p>
      <p class="text-gray-700">
        As part of our ongoing efforts to optimize financial performance and support strategic decisions, I am assigning a financial
        analysis task to be conducted. Please ensure that you gather all relevant data, perform in-depth analysis, and prepare the
        necessary reports for review.
      </p>
      <p class="text-gray-700">
        We will be focusing on quarterly performance, cost optimization, revenue growth, and I expect the analysis to be completed by
        Friday.
      </p>
      <p class="text-gray-700">
        Feel free to reach out to the guidance if you need any clarifications or support.
      </p>
      <p class="text-gray-700">
        Thank you for your continued effort and dedication.
      </p>

      <div class="mt-4">
        <p class="text-gray-700">
          Chris Kim
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.email-popup {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
}
</style>
