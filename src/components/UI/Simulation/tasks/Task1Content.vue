<script setup>
import { ref } from 'vue'
import { ElCard, ElCollapse, ElCollapseItem } from 'element-plus'

const activeObjectives = ref(['objectives'])

const resources = [
  {
    icon: '📄',
    title: 'Company Financial Statements (2022-2024)',
    description: 'PDF Document - 15 pages',
  },
  {
    icon: '📊',
    title: 'Financial Analysis Template',
    description: 'Excel Spreadsheet',
  },
  {
    icon: '📚',
    title: 'Financial Analysis Guide',
    description: 'PDF Document - 8 pages',
  },
]
</script>

<template>
  <div>
    <h2 class="content-title">
      Financial Statement Analysis
    </h2>

    <div class="content-description">
      <p>
        Analyze financial statements to evaluate the company's performance, financial health, and identify trends
        and areas for improvement.
      </p>
    </div>

    <div class="task-content">
      <h2 class="section-title">
        TASK OVERVIEW
      </h2>

      <ElCard class="task-card">
        <div class="task-description">
          <p>
            In this task, you will analyze the company's financial statements including the income statement,
            balance sheet, and cash flow statement. You will identify key financial metrics and trends to
            provide insights into the company's financial performance.
          </p>

          <h3 class="mt-4">
            Key Objectives
          </h3>
          <ElCollapse v-model="activeObjectives">
            <ElCollapseItem name="objectives">
              <ul class="task-objectives">
                <li>Analyze the income statement to identify revenue trends and profitability</li>
                <li>
                  Review the balance sheet to assess the company's assets, liabilities, and equity
                </li>
                <li>Examine the cash flow statement to understand the company's cash position</li>
                <li>Identify areas of financial strength and weakness</li>
                <li>Prepare a summary report with key findings and recommendations</li>
              </ul>
            </ElCollapseItem>
          </ElCollapse>

          <div class="task-resources mt-4">
            <h3>Resources</h3>
            <div class="resources-list">
              <ElCard v-for="(resource, index) in resources" :key="index" class="resource-item">
                <div class="resource-icon">
                  {{ resource.icon }}
                </div>
                <div class="resource-details">
                  <h4>{{ resource.title }}</h4>
                  <p>{{ resource.description }}</p>
                </div>
              </ElCard>
            </div>
          </div>
        </div>
      </ElCard>
    </div>
  </div>
</template>

<style scoped>
.content-title {
    font-size: 24px;
    margin-bottom: 20px;
}

.content-description {
    background-color: #4cd3a5;
    padding: 20px;
    border-radius: 8px;
    margin-bottom: 30px;
    color: #fff;
    font-size: 18px;
    text-align: center;
}

.section-title {
    font-size: 22px;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
    font-weight: bold;
}

.task-content {
    max-width: 1000px;
    margin: 0 auto;
}

.task-description {
    line-height: 1.6;
}

.task-objectives {
    padding-left: 20px;
    margin: 15px 0;
}

.task-objectives li {
    margin-bottom: 10px;
}

.task-resources {
    margin-top: 30px;
}

.resources-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 15px;
}

.resource-item {
    display: flex;
    align-items: center;
}

.resource-icon {
    font-size: 24px;
    margin-right: 15px;
}

.resource-details h4 {
    font-size: 16px;
    margin-bottom: 5px;
}

.resource-details p {
    color: #666;
    font-size: 14px;
}

/* Utility Classes */
.mt-4 {
    margin-top: 20px;
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

:deep(.el-card__body) {
    padding: 20px;
}
</style>
