<script setup>
import { computed } from 'vue'
import SituationTab from './tabs/SituationTab.vue'
import MarketTab from './tabs/MarketTab.vue'
import CompanyTab from './tabs/CompanyTab.vue'
import TeamTab from './tabs/TeamTab.vue'

const props = defineProps({
  activeSubTask: String,
})

const currentComponent = computed(() => {
  switch (props.activeSubTask) {
    case 'situation': return SituationTab
    case 'market': return MarketTab
    case 'company': return CompanyTab
    case 'team': return TeamTab
    default: return TeamTab
  }
})
</script>

<template>
  <div>
    <component :is="currentComponent" />
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

.content-tabs {
    margin-top: 20px;
}

/* Custom Element Plus Styles */
:deep(.el-tabs__item) {
    font-size: 16px;
    padding: 0 20px;
    height: 40px;
    line-height: 40px;
}

:deep(.el-tabs__item.is-active) {
    color: #4cd3a5;
}

:deep(.el-tabs__active-bar) {
    background-color: #4cd3a5;
    height: 3px;
}

:deep(.el-tabs__content) {
    padding: 20px 0;
}
</style>
