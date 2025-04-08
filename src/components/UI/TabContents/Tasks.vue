<script setup>
import { ref } from 'vue'

// Define tasks data
const tasks = ref([
  {
    id: 'intro',
    title: 'Intro & Scenario',
    time: '5 min',
    isIntro: true,
    next: '1',
    content: `Welcome! In this simulation, you'll step into the role of a junior financial analyst at a reputable investment bank. Your team is evaluating a potential investment opportunity in a mid-sized tech company, 'Innovate Solutions'.`,
  },
  {
    id: '1',
    title: 'Financial Statement Analysis',
    time: '45 min',
    learn: 'Understanding the structure and purpose of the Income Statement, Balance Sheet, and Cash Flow Statement.',
    do: 'Analyze revenue streams, expenses, and profitability to assess the company\'s financial performance.',
    next: '2',
  },
  {
    id: '2',
    title: 'Financial Ratio Calculation',
    time: '60 min',
    learn: 'Key financial metrics such as Return on Equity (ROE), Debt-to-Equity Ratio, and Current Ratio.',
    do: 'Calculate and interpret these ratios to evaluate the company\'s efficiency, profitability, and liquidity.',
    next: '3',
  },
  {
    id: '3',
    title: 'Trend and Risk Identification',
    time: '40 min',
    learn: 'Methods to identify financial trends and potential risks.',
    do: 'Examine historical data to detect growth patterns, cost fluctuations, and financial risks.',
    next: '4',
  },
  {
    id: '4',
    title: 'Competitor Benchmarking',
    time: '50 min',
    learn: 'Techniques for comparing the target company with industry peers.',
    do: 'Assess market position and performance relative to competitors.',
    next: '5',
  },
  {
    id: '5',
    title: 'Financial Report Preparation',
    time: '75 min',
    learn: 'How to structure and present financial findings.',
    do: 'Compile your analysis and recommendations into a clear, professional financial report.',
    next: 'finish',
  },
  {
    id: 'finish',
    title: 'Finish Line',
    time: '15 min',
    isFinish: true,
    content: 'Course Summary: You\'ve successfully analyzed Innovate Solutions\' financials, benchmarked its performance, and prepared a recommendation report.',
  },
])

// Active tab state
const currentTask = ref(tasks.value[0])

function selectTask(task) {
  currentTask.value = task
}
</script>

<template>
  <div class="tasks-list">
    <div
      v-for="task in tasks" :key="task.id" class="task-item" :class="{ active: currentTask.id === task.id }"
      @click="selectTask(task)"
    >
      <div class="task-status-circle">
        <div v-if="currentTask.id === task.id" class="inner-circle" />
      </div>
      <div class="task-details">
        <h3>{{ task.title }}</h3>
        <div class="task-duration">
          <span class="clock-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round"
              />
            </svg>
          </span>
          <span>{{ task.time }}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Task Content -->
  <div class="task-content">
    <h2>{{ currentTask.title }}</h2>
    <div v-if="currentTask.isIntro || currentTask.isFinish" class="content-section">
      <p>{{ currentTask.content }}</p>
    </div>
    <div v-else>
      <div class="content-section">
        <h3>What You'll Learn:</h3>
        <p>{{ currentTask.learn }}</p>
      </div>
      <div class="content-section">
        <h3>What You'll Do:</h3>
        <p>{{ currentTask.do }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Full width header styles */
.header-section-wrapper {
  width: 100%;
  background-color: #f9f9f9;
  padding: 20px 0;
  border-bottom: 1px solid #e4e7ed;
}

.header-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.title-content {
  flex: 1;
}

.title-content h1 {
  font-size: 28px;
  color: #2e7d6e;
  margin-bottom: 12px;
  font-weight: 600;
}

.title-content p {
  font-size: 16px;
  color: #666;
  max-width: 600px;
  line-height: 1.5;
}

.start-button {
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  background-color: #2e7d6e;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.start-button:hover {
  background-color: #236458;
}

/* Full width tabs styles */
.tabs-wrapper {
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #e4e7ed;
}

.tabs-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.tab-list {
  display: flex;
  border-bottom: 1px solid #e4e7ed;
}

.tab-button {
  font-size: 16px;
  padding: 0 20px;
  height: 50px;
  line-height: 50px;
  color: #666;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
}

.tab-button.active {
  color: #2e7d6e;
  font-weight: 500;
}

.tab-button.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #2e7d6e;
}

/* Main content container */
.content-wrapper {
  width: 100%;
  background-color: #fff;
}

.content-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
}

/* Common content styles */
.overview-content,
.about-content,
.reviews-content {
  display: flex;
  flex-direction: column;
}

h2 {
  font-size: 24px;
  color: #2e7d6e;
  margin-bottom: 20px;
  font-weight: 600;
}

h3 {
  font-size: 18px;
  color: #444;
  margin: 20px 0 10px;
  font-weight: 600;
}

p {
  color: #666;
  line-height: 1.6;
  max-width: 800px;
}

.section {
  display: flex;
  flex-direction: column;
}

/* Tasks view styling */
.tasks-view {
  display: flex;
  gap: 30px;
}

.tasks-list {
  flex: 0 0 350px;
}

.task-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
  cursor: pointer;
}

.task-item:last-child {
  border-bottom: none;
}

.task-status-circle {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.inner-circle {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #2e7d6e;
}

.task-details {
  flex: 1;
}

.task-item h3 {
  font-size: 16px;
  color: #333;
  margin: 0 0 5px 0;
  font-weight: 500;
}

.task-duration {
  display: flex;
  align-items: center;
  gap: 5px;
  color: #888;
  font-size: 14px;
}

.clock-icon {
  display: flex;
  align-items: center;
  color: #888;
}

.task-item.active .task-status-circle {
  border-color: #2e7d6e;
}

.task-item.active h3 {
  color: #2e7d6e;
  font-weight: 600;
}

.task-content {
  flex: 1;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 30px;
  border: 1px solid #e0e0e0;
}

.content-section {
  margin-bottom: 25px;
}

/* Reviews styling */
.review-item {
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #eee;
}

.review-item:last-child {
  border-bottom: none;
}

.review-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
}

.stars {
  color: #ff9900;
}

.reviewer-name {
  font-weight: 500;
  color: #333;
}

.review-text {
  color: #666;
  font-style: italic;
}

.more-reviews {
  color: #999;
  font-style: italic;
  text-align: center;
  margin-top: 20px;
}

@media (max-width: 900px) {
  .tasks-view {
    flex-direction: column;
  }

  .tasks-list {
    flex: 0 0 auto;
  }
}

@media (max-width: 768px) {
  .header-section {
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
  }

  .start-button {
    width: 100%;
  }

  .content-container {
    padding: 20px 16px;
  }

  .task-content {
    padding: 20px;
  }
}
</style>
