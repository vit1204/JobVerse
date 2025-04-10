<script setup lang="ts">
import Sologan from "@/assets/img/logo.png"
defineProps<{
  company: string
  isOpenAllYear?: boolean
  description?: string
}>()
</script>

<template>
  <div class="talent-network">
    <div class="tag">
      TALENT NETWORK
    </div>
    <div class="content">
      <img :src="Sologan" alt="BCG" class="company-logo">
      <button class="close-btn">
        ×
      </button>
      <h3>{{ company }}</h3>
      <p v-if="isOpenAllYear" class="year-info"s>
        <span class="calendar-icon">📅</span> Open all year
      </p>
      <p class="description">
        {{ description || "Be the first to know about upcoming job opportunities and exclusive recruiting events" }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.talent-network {
    background: white;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    overflow: hidden;
    margin: 20px 0;

    .tag {
        background-color: #f3f4f6;
        color: #6b7280;
        font-size: 12px;
        padding: 4px 8px;
    }

    .content {
        padding: 16px;
        position: relative;

        .company-logo {
            width: 48px;
            height: 48px;
            margin-bottom: 12px;
        }

        .close-btn {
            position: absolute;
            right: 16px;
            top: 16px;
            background: none;
            border: none;
            font-size: 24px;
            color: #9ca3af;
            cursor: pointer;
            padding: 0;

            &:hover {
                color: #4b5563;
            }
        }

        h3 {
            margin: 0 0 8px;
            font-size: 18px;
            color: #1f2937;
        }

        .year-info {
            display: flex;
            align-items: center;
            color: #6b7280;
            font-size: 14px;
            margin: 8px 0;

            .calendar-icon {
                margin-right: 8px;
            }
        }

        .description {
            color: #6b7280;
            font-size: 14px;
            line-height: 1.5;
            margin: 0;
        }
    }
}
</style>
