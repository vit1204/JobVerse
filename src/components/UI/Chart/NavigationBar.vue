<script setup lang="ts">
const navItems = [
  { icon: '🎓', label: 'Progress', route: '/progress' },
  { icon: '🏆', label: 'Achievements', route: '/achievements', active: true },
  { icon: '📝', label: 'Apply', route: '/apply' },
  { icon: '💡', label: 'Forage Tips', route: '/tips' },
]
</script>

<template>
  <nav class="navigation">
    <div v-for="item in navItems" :key="item.label" class="nav-item" :class="[{ active: item.active }]">
      <span class="icon">{{ item.icon }}</span>
      <span class="label">{{ item.label }}</span>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
.navigation {
    display: flex;
    justify-content: space-around;
    padding: 16px 0;
    border-bottom: 1px solid #e5e7eb;
    margin-bottom: 24px;

    .nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #6b7280;
        cursor: pointer;

        &.active {
            color: #2563eb;

            .icon {
                background-color: #eff6ff;
            }
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 8px;
            transition: background-color 0.2s;
        }

        .label {
            font-size: 14px;
        }

        &:hover {
            color: #2563eb;

            .icon {
                background-color: #eff6ff;
            }
        }
    }
}
</style>
