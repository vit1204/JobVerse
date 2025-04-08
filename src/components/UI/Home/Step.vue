<script setup>
import { ref } from 'vue'
import { ElButton, ElStep, ElSteps } from 'element-plus'
</script>

<template>
  <div class="jobverse-steps-container">
    <h1>
      JobVerse is the bridge connecting your everyday life to the career you've always dreamed of
    </h1>
    <p>
      Our job simulations stand out by focusing on building essential skills through hands-on roles and projects
      tailored for students.
      By joining us, you'll gain practical experience, sharpen your abilities, and confidently step into your
      future major.
    </p>

    <ElSteps class="custom-steps" :active="5" align-center>
      <ElStep title="Create Profile" description="Create a profile and share background details." />
      <ElStep title="Build Foundation" description="Build a strong foundation for the job simulation." />
      <ElStep title="Simulate & Sharpen" description="Engage in realistic simulations to sharpen skills." />
      <ElStep title="Get Feedback" description="Receive scores and feedback for improvement." />
      <ElStep title="Compete & Advance" description="Join competitions or continue upskilling." />
    </ElSteps>
  </div>
</template>

<style lang="scss" scoped>
.jobverse-steps-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 1090px;
  margin: 0 auto;
  padding: 40px 20px;

  h1 {
    font-size: 24px;
    color: #333;
    max-width: 530px;
    margin-bottom: 16px;
  }

  p {
    font-size: 15px;
    color: #666;
    max-width: 900px;
    margin-bottom: 40px;
  }
}

/* Custom styling for Element Plus Steps */
:deep(.custom-steps) {
  width: 100%;
  margin-top: 30px;

  /* Style for the step circles */
  .el-step__head.is-process,
  .el-step__head.is-finish {
        color: var(--color-gray) !important;
          /* Green color for all circles */
    /* Green color for the circles */
    border-color: var(--color-secondary) !important;
  }

  .el-step__head.is-wait {
    color: #c0c4cc !important;
  }

  /* Style for the step icons */
  .el-step__icon.is-text,
  .el-step__icon-inner {
    background-color: var(--color-gray)!important;
    color: white !important;
  }

  .el-step__head.is-finish .el-step__icon.is-text,
  .el-step__head.is-finish .el-step__icon-inner {
    background-color: var(--color-secondary)!important;
    color: white !important;
  }

  /* Style for the lines connecting steps */
  .el-step__line {
    background-color: black !important;
  }

  .el-step__line.is-finish {
    background-color: black!important;
  }

  /* Style for the titles and descriptions */
  .el-step__title {
    font-size: 16px;
    font-weight: 600;
    color: #333 !important;
    /* Black color for titles */
  }

  .el-step__title.is-process,
  .el-step__title.is-finish {
    color: #333 !important;
    /* Keep titles black even when active/finished */
  }

  .el-step__description {
    font-size: 14px;
    color: #666 !important;
    /* Gray color for descriptions */
    margin-top: 5px;
  }

  .el-step__description.is-process,
  .el-step__description.is-finish {
    color: #666 !important;
    /* Keep descriptions gray even when active/finished */
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .jobverse-steps-container {
    padding: 20px 15px;
  }

  :deep(.custom-steps) {
    .el-step__title {
      font-size: 14px;
    }

    .el-step__description {
      font-size: 12px;
    }
  }
}
</style>
