<script lang="ts" setup>
import TalentNetwork from '@/components/UI/Chart/TalentNetwork.vue';
import NavigationBar from '@/components/UI/Chart/NavigationBar.vue';
import AchieveSection from '@/components/UI/Chart/AchieveSection.vue';
import DashHeader from '@/components/UI/Chart/DashHeader.vue';
</script>




<template>
<div class="app-container">
    <DashHeader username="Mai" />
    <TalentNetwork 
      company="Talent Network" 
      :isOpenAllYear="true" 
    />
    <NavigationBar />
    <AchieveSection />
  </div>
</template>


<route lang="yaml">
 meta:
  layout: auth
</route>