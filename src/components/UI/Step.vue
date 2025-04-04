<script setup>
import { ref } from 'vue'
import { ElButton, ElStep, ElSteps } from 'element-plus'

</script>

<template>
  <div class="jobverse-steps-container">
    <h1>JobVerse is the bridge connecting your everyday life to the career you've always dreamed of</h1>
    <p>
      Our job simulations stand out by focusing on building essential skills through hands-on roles and projects
      tailored for students.
      By joining us, you'll gain practical experience, sharpen your abilities, and confidently step into your
      future major.
    </p>

    <ElSteps class="custom-steps" style=" margin-top: 20px;" :space="500" :active="5" align-center finish-status="finish">
      <ElStep title="Create your profile on Jobverse and share a little about your background" />
      <ElStep title=" Build a strong foundation and prepare yourself for job sim" />
      <ElStep title="Experience a simplified yet realistic job simulation to sharpen your skills" />
      <ElStep title="Get scores and feedback on your performance to help you grow and improve" />
      <ElStep
        title="Join our competitions for exciting prizes or continue upskilling to advance
"
      />
    </ElSteps>
  </div>
</template>

<style lang="scss"  scoped>
.jobverse-steps-container {
      display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 1090px;
        height: 500px;
        margin: 0 auto;
        padding: 20px;

        h1{
          font-size: 24px;
            color: var(--color-gray-darker);

        }
        p{
          font-size: 15px;
        }

      }
</style>
