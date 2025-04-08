<script setup>
import { computed, ref } from 'vue'
import { ElButton, ElRate, ElTabPane, ElTabs } from 'element-plus'
import { RouterLink } from 'vue-router'
import 'element-plus/dist/index.css'

import Tasks from '@/components/UI/TabContents/Tasks.vue'

const activeName = ref('overview')
</script>

<template>
  <!-- Full width header section -->
  <div class="header-section-wrapper">
    <div class="header-section">
      <div class="title-content">
        <h1>Banker</h1>
        <p>
          Step into the shoes of a banker, analyze financial data, and make informed decisions in
          this interactive simulation course.
        </p>
      </div>
      <RouterLink to="/Simulation">
        <ElButton type="warning" class="start-button">
          Start Simulation
        </ElButton>
      </RouterLink>
    </div>
  </div>

  <!-- Full width tabs section -->
  <div class="tabs-wrapper">
    <div class="tabs-container">
      <ElTabs v-model="activeName" class="custom-tabs">
        <ElTabPane label="Overview" name="overview" />
        <ElTabPane label="About Us" name="about" />
        <ElTabPane label="Tasks" name="tasks" />
        <ElTabPane label="Reviews" name="reviews" />
      </ElTabs>
    </div>
  </div>

  <!-- Main content container -->
  <div class="content-wrapper">
    <div class="content-container">
      <!-- Overview Tab Content -->
      <div v-if="activeName === 'overview'" class="overview-content">
        <h2>Course Overview</h2>
        <p>
          This interactive simulation places you in the role of a junior financial analyst tasked with evaluating a
          potential investment. You will work through a series of modules designed to build practical skills in
          financial analysis.
        </p>

        <div class="section">
          <h3>Learning Objectives:</h3>

          <p>Understand and interpret key financial statements.</p>
          <p>Calculate and analyze essential financial ratios.</p>
          <p>Identify financial trends and risks.</p>
          <p>Benchmark company performance against industry standards.</p>
          <p>Prepare a concise financial analysis report.</p>

          <h3>Target Audience:</h3>
          <p>
            Students interested in finance, business, economics, or related fields. Anyone looking to gain
            practical experience in financial analysis.
          </p>

          <h3>Prerequisites:</h3>
          <p>
            Basic understanding of business concepts is helpful, but not strictly required. The course modules
            provide necessary background information.
          </p>
        </div>
      </div>

      <!-- About Us Tab Content -->
      <div v-if="activeName === 'about'" class="about-content">
        <h2>About JobVerse</h2>
        <p>
          JobVerse is a platform dedicated to bridging the gap between academic learning and real-world job skills.
          Our interactive simulations provide hands-on experience, helping students explore careers and prepare for
          their future majors with confidence.
        </p>
        <p>
          Our mission is to empower learners by providing accessible, practical, and engaging educational tools.
        </p>
      </div>

      <!-- Tasks Tab Content -->
      <div v-if="activeName === 'tasks'" class="tasks-view">
        <Tasks />
      </div>

      <!-- Reviews Tab Content -->
      <div v-if="activeName === 'reviews'" class="reviews-content">
        <h2>Course Reviews</h2>
        <div class="review-item">
          <div class="review-header">
            <ElRate disabled text-color="#ff9900" />
            <span class="reviewer-name">Jane D.</span>
          </div>
          <p class="review-text">
            "A very practical simulation! Helped me understand the day-to-day tasks of an
            analyst much better than just reading textbooks. The sequential unlocking kept me focused."
          </p>
        </div>

        <div class="review-item">
          <div class="review-header">
            <ElRate disabled text-color="#ff9900" />
            <span class="reviewer-name">John S.</span>
          </div>
          <p class="review-text">
            "Excellent course. The final report task really tied everything together. Wish
            there were more simulations like this! The step-by-step progression felt natural."
          </p>
        </div>

        <p class="more-reviews">
          More reviews will appear here...
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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

  .title-content {
    flex: 1;

    h1 {
      font-size: 28px;
      color: #2e7d6e;
      margin-bottom: 12px;
      font-weight: 600;
    }

    p {
      font-size: 16px;
      color: #666;
      max-width: 600px;
      line-height: 1.5;
    }
  }

}
.start-button {
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  background-color: var(--color-secondary);
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: #236458;
  }
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

  :deep(.el-tabs__header) {
    margin-bottom: 0;
  }

  :deep(.el-tabs__nav-wrap::after) {
    height: 1px;
    background-color: #e4e7ed;
  }

  :deep(.el-tabs__item) {
    font-size: 16px;
    padding: 0 20px;
    height: 50px;
    line-height: 50px;
    color: #666;

    &.is-active {
      color: #2e7d6e;
      font-weight: 500;
    }
  }

  :deep(.el-tabs__active-bar) {
    background-color: #2e7d6e;
    height: 3px;
  }
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

  h2 {
    font-size: 24px;
    color: var(--color-secondary);
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
}

/* Tasks view styling to match the second image */
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

  &:last-child {
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

  h3 {
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

  &.active {
    .task-status-circle {
      border-color: #2e7d6e;
    }

    h3 {
      color: #2e7d6e;
      font-weight: 600;
    }
  }

  &.completed {
    .task-status-circle {
      background-color: #e0e0e0;
      border-color: #e0e0e0;
    }
  }
}

.task-content {
  flex: 1;
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 30px;
  border: 1px solid #e0e0e0;

  h2 {
    font-size: 24px;
    color: #2e7d6e;
    margin-bottom: 20px;
    font-weight: 600;
  }

  .content-section {
    margin-bottom: 25px;

    h3 {
      font-size: 18px;
      color: #444;
      margin-bottom: 10px;
      font-weight: 500;
    }

    p {
      color: #666;
      line-height: 1.6;
    }
  }
}

.review-item {
  margin-bottom: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }

  .review-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;

    .reviewer-name {
      font-weight: 500;
      color: #333;
    }
  }

  .review-text {
    color: #666;
    font-style: italic;
  }
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

    .start-button {
      width: 100%;
    }
  }

  .content-container {
    padding: 20px 16px;
  }

  .task-content {
    padding: 20px;
  }
}
</style>
