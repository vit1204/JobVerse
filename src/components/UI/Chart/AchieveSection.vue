<script setup lang="ts">
import Sologan from "@/assets/img/logo.png"
const achievements = [
  { icon: '📄', label: 'RESUME SNIPPETS', completed: true },
  { icon: '💡', label: 'INTERVIEW TIPS', completed: true },
  { icon: '📜', label: 'CERTIFICATES', completed: true },
  { icon: '⚔️', label: 'SKILLS', completed: true },
]

const sections = [
  {
    title: 'Showcase yourself',
    items: [
      { icon: '📜', label: 'Certificate', link: '/certificate' },
      { icon: '⚔️', label: 'Skills', link: '/skills' },
    ],
  },
  {
    title: 'Prep for the job',
    items: [
      { icon: '📄', label: 'Resume Snippet', link: '/resume' },
      { icon: '💡', label: 'Interview Tips', link: '/interview' },
    ],
  },
]
</script>

<template>
  <div class="achievements">
    <h2>Achievements</h2>

    <div class="achievement-icons">
      <div v-for="achievement in achievements" :key="achievement.label" class="achievement-item">
        <div class="icon-wrapper">
          <span class="icon">{{ achievement.icon }}</span>
          <span v-if="achievement.completed" class="check">✓</span>
        </div>
        <span class="label">{{ achievement.label }}</span>
      </div>
    </div>

    <div class="program-card">
      <div class="program-header">
        <img :src="Sologan" alt="BCG X" class="program-logo">
        <h3>GenAI</h3>
        <span class="status">COMPLETED</span>
      </div>
    </div>

    <div v-for="section in sections" :key="section.title" class="section">
      <h4>{{ section.title }}</h4>
      <div class="section-items">
        <div v-for="item in section.items" :key="item.label" class="section-item">
          <span class="icon">{{ item.icon }}</span>
          <span class="label">{{ item.label }}</span>
          <span class="arrow">→</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.achievements {
    padding: 20px;

    h2 {
        font-size: 24px;
        color: #1f2937;
        margin-bottom: 24px;
    }

    .achievement-icons {
        display: flex;
        justify-content: space-around;
        margin-bottom: 32px;

        .achievement-item {
            display: flex;
            flex-direction: column;
            align-items: center;

            .icon-wrapper {
                position: relative;
                background-color: #e8faf1;
                width: 48px;
                height: 48px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 8px;

                .check {
                    position: absolute;
                    bottom: -2px;
                    right: -2px;
                    background-color: #34d399;
                    color: white;
                    border-radius: 50%;
                    width: 20px;
                    height: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 12px;
                }
            }

            .label {
                font-size: 12px;
                color: #6b7280;
                text-align: center;
            }
        }
    }

    .program-card {
        background: white;
        border-radius: 8px;
        padding: 16px;
        margin-bottom: 24px;
        border: 1px solid #e5e7eb;

        .program-header {
            display: flex;
            align-items: center;
            gap: 12px;

            .program-logo {
                width: 32px;
                height: 32px;
            }

            h3 {
                margin: 0;
                flex: 1;
            }

            .status {
                font-size: 12px;
                color: #059669;
                background-color: #ecfdf5;
                padding: 4px 8px;
                border-radius: 4px;
            }
        }
    }

    .section {
        margin-bottom: 24px;

        h4 {
            color: #6b7280;
            font-size: 14px;
            margin-bottom: 16px;
        }

        .section-items {
            display: grid;
            gap: 12px;

            .section-item {
                background: white;
                border: 1px solid #e5e7eb;
                border-radius: 8px;
                padding: 16px;
                display: flex;
                align-items: center;
                cursor: pointer;

                &:hover {
                    background-color: #f9fafb;
                }

                .icon {
                    margin-right: 12px;
                }

                .label {
                    flex: 1;
                    color: #1f2937;
                }

                .arrow {
                    color: #9ca3af;
                }
            }
        }
    }
}
</style>
