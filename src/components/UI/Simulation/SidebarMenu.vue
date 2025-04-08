<script setup>
import { computed, ref } from 'vue'
import { ElCollapse, ElCollapseItem } from 'element-plus'
import TaskMenuItem from './TaskMenuItem.vue'

const props = defineProps({
  activeTask: String,
  activeSubTask: String,
})

// eslint-disable-next-line unused-imports/no-unused-vars
const emit = defineEmits(['set-active-task', 'set-active-sub-task'])

// Auto-expand the intro collapse when intro is active
const introCollapse = computed(() => {
  return props.activeTask === 'intro' ? ['intro'] : []
})

// Task data
const tasks = [
  {
    id: 'task1',
    title: 'Task 1: Financial Statement Analysis',
    icon: '📊',
    difficulty: 'Intermediate',
    stars: 2,
    time: '2-3 hours',
  },
  {
    id: 'task2',
    title: 'Task 2: Financial Ratio Calculation',
    icon: '🧮',
    difficulty: 'Intermediate',
    stars: 2,
    time: '2-3 hours',
  },
  {
    id: 'task3',
    title: 'Task 3: Trend and Risk Identification',
    icon: '📈',
    difficulty: 'Advanced',
    stars: 3,
    time: '3-4 hours',
  },
]
</script>

<template>
  <div class="sidebar-menu">
    <!-- Introduction with dropdown -->
    <div class="menu-item" :class="{ active: activeTask === 'intro' }" @click="$emit('set-active-task', 'intro')">
      <div class="menu-icon">
        <div class="circle" :class="{ 'circle-icon': activeTask === 'intro' }">
          <span v-if="activeTask === 'intro'">▶</span>
        </div>
      </div>
      <div class="menu-content">
        <div class="menu-header">
          <h3>Introduction</h3>
          <p class="menu-description">
            Background context and your project team
          </p>
        </div>

        <ElCollapse v-if="activeTask === 'intro'" v-model="introCollapse">
          <ElCollapseItem name="intro" class="custom-collapse">
            <div class="submenu">
              <div
                class="submenu-item"
                :class="{ active: activeSubTask === 'company' }"
                @click.stop="$emit('set-active-sub-task', 'company')"
              >
                About your company
              </div>
              <div
                class="submenu-item"
                :class="{ active: activeSubTask === 'market' }"
                @click.stop="$emit('set-active-sub-task', 'market')"
              >
                About the market
              </div>
              <div
                class="submenu-item"
                :class="{ active: activeSubTask === 'team' }"
                @click.stop="$emit('set-active-sub-task', 'team')"
              >
                About your team
              </div>
              <div
                class="submenu-item"
                :class="{ active: activeSubTask === 'situation' }"
                @click.stop="$emit('set-active-sub-task', 'situation')"
              >
                About the situation
              </div>
            </div>
          </ElCollapseItem>
        </ElCollapse>

        <div class="menu-footer">
          <div class="rating">
            <span class="star filled">★</span>
            <span class="star">★</span>
            <span class="star">★</span>
            <span class="difficulty">Introductory</span>
          </div>
          <div class="time">
            <span class="clock">🕒</span>
            <span>15-30 mins</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Task Items -->
    <TaskMenuItem
      v-for="task in tasks"
      :key="task.id"
      :task="task"
      :is-active="activeTask === task.id"
      @click="$emit('set-active-task', task.id)"
    />
  </div>
</template>

<style scoped>
.sidebar-menu {
  display: flex;
  flex-direction: column;
  padding: 0;
  position: relative;
}

/* Vertical line connecting menu items */
.sidebar-menu::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 40px;
  width: 2px;
  background-color: #4cd3a5;
  z-index: 0;
}

/* Menu Item Styles */
.menu-item {
  display: flex;
  position: relative;
  padding: 15px 0;
  cursor: pointer;
}

.menu-icon {
  width: 80px;
  display: flex;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #4cd3a5;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.circle-icon {
  width: 30px;
  height: 30px;
  background-color: #4cd3a5;
  color: white;
  border: none;
  transform: scale(1.2);
}

.menu-content {
  flex: 1;
  padding-right: 20px;
}

.menu-header {
  cursor: pointer;
  margin-bottom: 10px;
}

.menu-header h3 {
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 4px;
}

.menu-description {
  font-size: 14px;
  color: #666;
}

.submenu {
  margin-bottom: 10px;
}

.submenu-item {
  padding: 8px;
  font-size: 14px;
  color: #333;
  margin-bottom: 2px;
  border-radius: 4px;
  background-color: #e9e9e9;
  cursor: pointer;
}

.submenu-item.active {
  background-color: #4cd3a5;
  color: white;
}

.menu-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #888;
}

.rating, .time {
  display: flex;
  align-items: center;
  gap: 4px;
}

.star {
  color: #ddd;
}

.star.filled {
  color: #4cd3a5;
}

.difficulty, .clock {
  color: #888;
  font-size: 12px;
}

/* Custom Element Plus Styles */
:deep(.el-collapse) {
  border: none;
}

:deep(.el-collapse-item__header) {
  display: none;
}

:deep(.el-collapse-item__wrap) {
  border: none;
}

:deep(.el-collapse-item__content) {
  padding: 0;
}
</style>
