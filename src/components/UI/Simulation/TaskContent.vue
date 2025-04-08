<script setup>
import { computed } from 'vue'

// import Chatbot from './Chatbot.vue'
import Task2Content from './tasks/Task2Content.vue'
import Task3Content from './tasks/Task3Content.vue'
import ChatMessage from '@/components/ChatMessage.vue'

const props = defineProps({
  taskId: String,
})

const currentTaskComponent = computed(() => {
  switch (props.taskId) {
    case 'task1': return Task2Content
    case 'task2': return ChatMessage
    case 'task3': return Task3Content
    default: return null
  }
})

// const showChatbot = computed(() => props.taskId === 'task1')
</script>

<template>
  <div>
    <component :is="currentTaskComponent" v-if="!showChatbot" />
    <Chatbot v-if="showChatbot" :visible="true" />
  </div>
</template>
