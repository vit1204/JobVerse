<script setup>
import { defineAsyncComponent, ref } from 'vue'
import 'element-plus/dist/index.css'

import SidebarMenu from '@/components/UI/Simulation/SidebarMenu.vue'
import IntroductionContent from '@/components/UI/Simulation/IntroductionCotent.vue'
import TaskContent from '@/components/UI/Simulation/TaskContent.vue'
import {driver} from "driver.js"
import { onMounted } from 'vue'

const activeTask = ref('intro')
const activeSubTask = ref('company')


function setActiveTask(task) {
  activeTask.value = task
  if (task === 'intro')
    activeSubTask.value = 'company'
}

function setActiveSubTask(subTask) {
  activeSubTask.value = subTask
}
</script>

<template>
  <div class="app-container">
    <!-- Sidebar -->
    <div class="sidebar">
      <h2 class="sidebar-title">
        Financial Analyst
      </h2>
      <SidebarMenu id="sidebar-menu"
        :active-task="activeTask" :active-sub-task="activeSubTask" @set-active-task="setActiveTask"
        @set-active-sub-task="setActiveSubTask"
      />
    </div>

    <!-- Main Content -->
    <div class="main-content">
      <IntroductionContent
        v-if="activeTask === 'intro'" :active-sub-task="activeSubTask"
        @set-active-sub-task="setActiveSubTask"
      />

      <TaskContent v-if="activeTask !== 'intro'" :task-id="activeTask" />
    </div>
  </div>
</template>

<route lang="yaml">
 meta:
  layout: auth
</route>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

.app-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

/* Sidebar Styles */
.sidebar {
  width: 320px;
  background-color: #f5f5f5;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.sidebar-title {
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  border-bottom: 1px solid #e0e0e0;
}

/* Main Content Styles */
.main-content {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}
</style>
