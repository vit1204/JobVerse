<script setup>
import { ElRate } from 'element-plus'

const reviews = [
  {
    id: 1,
    name: 'Jane D.',
    rating: 4,
    comment: 'A very practical simulation! Helped me understand the day-to-day tasks of an analyst much better than just reading textbooks. The sequential unlocking kept me focused.',
  },
  {
    id: 2,
    name: 'John S.',
    rating: 5,
    comment: 'Excellent course. The final report task really tied everything together. Wish there were more simulations like this! The step-by-step progression felt natural.',
  },
]
</script>

<template>
  <div class="prose max-w-none">
    <h2 class="text-xl md:text-2xl font-bold text-primary mb-4">
      Course Reviews
    </h2>
    <div v-for="review in reviews" :key="review.id" class="border-b border-border pb-4 mb-4">
      <div class="flex items-center mb-1">
        <ElRate v-model="review.rating" disabled text-color="#ff9900" />
        <span class="ml-2 text-sm font-medium text-text">{{ review.name }}</span>
      </div>
      <p class="text-muted-foreground text-sm">
        "{{ review.comment }}"
      </p>
    </div>
    <p class="text-muted-foreground italic">
      More reviews will appear here...
    </p>
  </div>
</template>
