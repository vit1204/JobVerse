<script setup>
defineProps({
  task: Object,
  isActive: Boolean,
})
</script>

<template>
  <div class="menu-item" :class="{ active: isActive }">
    <div class="menu-icon">
      <div class="circle" :class="{ 'circle-icon': isActive }">
        <span v-if="isActive">{{ task.icon }}</span>
      </div>
    </div>
    <div class="menu-content">
      <div class="menu-header">
        <h3>{{ task.title }}</h3>
      </div>

      <div class="menu-footer">
        <div class="rating">
          <template v-for="i in 3" :key="i">
            <span class="star" :class="{ filled: i <= task.stars }">★</span>
          </template>
          <span class="difficulty">{{ task.difficulty }}</span>
        </div>
        <div class="time">
          <span class="clock">🕒</span>
          <span>{{ task.time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

.menu-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    color: #888;
}

.rating,
.time {
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

.difficulty,
.clock {
    color: #888;
    font-size: 12px;
}
</style>
