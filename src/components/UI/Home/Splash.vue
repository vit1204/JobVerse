<script setup lang="ts">
import logo from '@/assets/img/headerImage.png'
</script>

<template>
  <div class="hero">
    <div class="content">
      <h1 class="title">
        Your future starts here. Your success begins with us.
      </h1>
      <p class="subtitle">
        Unleash your potential and explore career paths through immersive job simulations. Build essential skills and
        gain real-world insights to prepare for your dream major.
      </p>
      <button class="button">
        Get Started →
      </button>
    </div>
    <div class="illustration">
      <img id="logo" :src="logo" alt="" srcset="">
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 6rem;
  background: white;
  min-height: 80vh;
  gap: 2rem;
}

.content {
  flex: 1;
  max-width: 700px;
}

.title {
  font-size: 44.0px;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  color: var(--color-primary);
  font-weight: 700;
}

.subtitle {
  font-size: 1.25rem;
  line-height: 1.6;
  color: var(--color-gray-dark);
  margin-bottom: 2rem;
  max-width: 540px;
}

.button {
  background-color: var(--color-secondary);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: var(--color-primary);
  }
}

.illustration {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 500px;
}

@media (max-width: 1024px) {
  .hero {
    padding: 3rem 2rem;
    flex-direction: column;
    text-align: center;
  }

  .content {
    max-width: 100%;
  }

  .subtitle {
    margin-left: auto;
    margin-right: auto;
  }

  .illustration {
    margin-top: 2rem;
    max-width: 100%;
  }
}
</style>
