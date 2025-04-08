<script setup>
import { ElCard, ElProgress, ElTable, ElTableColumn, ElTag } from 'element-plus'

const years = ['2020', '2021', '2022', '2023', '2024']
const revenueData = [40, 53, 67, 80, 100]

const riskData = [
  {
    factor: 'Market Volatility',
    probability: 'High',
    impact: 'Medium',
    level: 'High',
  },
  {
    factor: 'Interest Rate Changes',
    probability: 'Medium',
    impact: 'High',
    level: 'High',
  },
  {
    factor: 'Regulatory Changes',
    probability: 'Low',
    impact: 'High',
    level: 'Medium',
  },
  {
    factor: 'Competitive Pressure',
    probability: 'Medium',
    impact: 'Medium',
    level: 'Medium',
  },
  {
    factor: 'Technology Disruption',
    probability: 'Medium',
    impact: 'High',
    level: 'High',
  },
]

function getRiskTagType(level) {
  switch (level) {
    case 'High': return 'danger'
    case 'Medium': return 'warning'
    case 'Low': return 'success'
    default: return 'info'
  }
}
</script>

<template>
  <div>
    <h2 class="content-title">
      Trend and Risk Identification
    </h2>

    <div class="content-description">
      <p>
        Identify financial trends and potential risks based on historical data and market conditions to support
        strategic decision-making.
      </p>
    </div>

    <div class="task-content">
      <h2 class="section-title">
        TASK OVERVIEW
      </h2>

      <ElCard class="task-card">
        <div class="task-description">
          <p>
            In this advanced task, you will analyze historical financial data to identify trends and
            patterns. You will also assess potential risks and opportunities that may impact the company's
            financial performance in the future.
          </p>

          <h3 class="mt-4">
            Key Areas of Focus
          </h3>
          <div class="trend-analysis">
            <div class="trend-chart">
              <h4>Revenue Growth Trend (2020-2024)</h4>
              <ElProgress
                v-for="(year, index) in years" :key="index" :percentage="revenueData[index]"
                color="#4cd3a5" :stroke-width="20"
                :format="() => `${year}: $${(revenueData[index] * 10).toFixed(1)}M`"
                class="revenue-bar"
              />
            </div>

            <div class="risk-assessment">
              <h4>Risk Assessment Matrix</h4>
              <ElTable :data="riskData" style="width: 100%">
                <ElTableColumn prop="factor" label="Risk Factor" />
                <ElTableColumn prop="probability" label="Probability" />
                <ElTableColumn prop="impact" label="Impact" />
                <ElTableColumn prop="level" label="Risk Level">
                  <template #default="scope">
                    <ElTag :type="getRiskTagType(scope.row.level)">
                      {{ scope.row.level }}
                    </ElTag>
                  </template>
                </ElTableColumn>
              </ElTable>
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

.trend-analysis {
    margin-top: 20px;
}

.trend-chart {
    margin-bottom: 30px;
}

.trend-chart h4,
.risk-assessment h4 {
    font-size: 16px;
    margin-bottom: 15px;
    text-align: center;
}

.revenue-bar {
    margin-bottom: 10px;
}

/* Utility Classes */
.mt-4 {
    margin-top: 20px;
}

/* Custom Element Plus Styles */
:deep(.el-card__body) {
    padding: 20px;
}

:deep(.el-progress-bar__outer) {
    border-radius: 4px;
}

:deep(.el-progress-bar__inner) {
    border-radius: 4px;
}

:deep(.el-table th) {
    background-color: #f5f7fa;
}

:deep(.el-tag--danger) {
    background-color: #fef0f0;
    border-color: #fde2e2;
    color: #f56c6c;
}

:deep(.el-tag--warning) {
    background-color: #fdf6ec;
    border-color: #faecd8;
    color: #e6a23c;
}

:deep(.el-tag--success) {
    background-color: #f0f9eb;
    border-color: #e1f3d8;
    color: #67c23a;
}
</style>
