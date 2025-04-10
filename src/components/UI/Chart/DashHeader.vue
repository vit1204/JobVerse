<script setup lang="ts">
defineProps<{
  username: string
}>()
</script>

<template>
  <div class="dashboard-header">
    <div class="profile-alert">
      <span class="info-icon">i</span>
      <div class="alert-content">
        <p>Your profile is missing important information</p>
        <p class="alert-subtitle">
          Update your profile to stay up to date with the latest jobs and opportunities.
        </p>
      </div>
      <button class="update-btn">
        Update now
      </button>
    </div>
    <h1 class="greeting">
      Cheerio, {{ username }}
    </h1>
  </div>
</template>

<style lang="scss" scoped>
.dashboard-header {
    padding: 20px 0;

    .profile-alert {
        background-color: #f8fdff;
        border: 1px solid #e1f4ff;
        border-radius: 8px;
        padding: 16px 24px;
        display: flex;
        align-items: center;
        margin-bottom: 24px;

        .info-icon {
            background-color: #e1f4ff;
            color: #0066cc;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-style: italic;
            margin-right: 16px;
        }

        .alert-content {
            flex: 1;

            p {
                margin: 0;

                &.alert-subtitle {
                    color: #666;
                    font-size: 14px;
                }
            }
        }

        .update-btn {
            background-color: transparent;
            color: #0066cc;
            border: 1px solid #0066cc;
            border-radius: 4px;
            padding: 8px 16px;
            cursor: pointer;

            &:hover {
                background-color: #f0f7ff;
            }
        }
    }

    .greeting {
        font-size: 28px;
        color: #1a1f36;
        margin: 0;
    }
}
</style>
