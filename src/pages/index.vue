<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Course from '@/components/UI/Home/Course.vue'
import Something from '@/components/UI/Home/Something.vue'
import Splash from '@/components/UI/Home/Splash.vue'
import Step from '@/components/UI/Home/Step.vue'
import Profile from '@/components/UI/Home/Profile.vue'
import EndingPage from '@/components/UI/Home/EndingPage.vue'

// Track if all animations have been completed
const animationsCompleted = ref(false)
const sectionsAnimated = ref(0)
const totalSections = 5 // Number of sections excluding Hero

// Create a custom directive for scroll animations that only run once
const vScrollAnimate = {
  mounted(el, binding) {
    // If animations are already completed, immediately show the element
    if (animationsCompleted.value) {
      el.classList.add('scroll-animate')
      el.classList.add(binding.value || 'fade-up')
      el.classList.add('animate')
      return
    }

    const animationClass = binding.value || 'fade-up'
    el.classList.add('scroll-animate')
    el.classList.add(animationClass)

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !el.classList.contains('animate')) {
          // Add a small delay based on the argument to create a staggered effect
          setTimeout(() => {
            el.classList.add('animate')

            // Increment the counter of animated sections
            sectionsAnimated.value++

            // Check if all sections have been animated
            if (sectionsAnimated.value >= totalSections)
              animationsCompleted.value = true

            // Unobserve after animation is triggered
            observer.unobserve(el)
          }, binding.arg ? Number.parseInt(binding.arg) : 0)
        }
      })
    }, {
      threshold: 0.15, // Trigger when 15% of the element is visible
      rootMargin: '0px 0px -100px 0px', // Trigger a bit before the element enters the viewport
    })

    observer.observe(el)

    // Store the observer on the element for cleanup
    el._scrollObserver = observer
  },
  unmounted(el) {
    if (el._scrollObserver)
      el._scrollObserver.disconnect()
  },
}

// Track if the page has loaded
const pageLoaded = ref(false)

onMounted(() => {
  // Set pageLoaded to true after a short delay to allow initial animations
  setTimeout(() => {
    pageLoaded.value = true

    // Check if we should run animations at all (e.g., if page was refreshed and scroll position is not at top)
    if (window.scrollY > window.innerHeight) {
      // If user has already scrolled down, mark all animations as completed
      animationsCompleted.value = true
      sectionsAnimated.value = totalSections

      // Force all sections to be visible immediately
      document.querySelectorAll('.scroll-animate').forEach((el) => {
        el.classList.add('animate')
      })
    }
  }, 100)
})
</script>

<template>
  <div class="scroll-container" :class="{ 'loaded': pageLoaded, 'animations-completed': animationsCompleted }">
    <!-- Hero doesn't need animation as it's visible on load -->
    <div class="section hero-section">
      <Splash />
    </div>

    <div v-scroll-animate:200="'slide-up'" class="section">
      <Step />
    </div>

    <div v-scroll-animate:400="'slide-up'" class="section">
      <Course />
    </div>

    <div v-scroll-animate:600="'fade-in'" class="section">
      <Something />
    </div>

    <div v-scroll-animate:800="'slide-up'" class="section">
      <Profile />
    </div>

    <div v-scroll-animate:1000="'fade-in'" class="section">
      <EndingPage />
    </div>
  </div>
</template>

<style>
.scroll-container {
  overflow-x: hidden;
  /* Prevent horizontal scrolling from animations */
}

.section {
  margin: 60px 0;
}

.hero-section {
  margin-top: 0;
}

/* Base styles for animated elements */
.scroll-animate {
  opacity: 0;
  transition: all 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
}

/* When animations are completed, ensure all elements are visible */
.animations-completed .scroll-animate:not(.animate) {
  opacity: 1 !important;
  transform: none !important;
}

/* Animation types */
.fade-in {
  opacity: 0;
}

.fade-in.animate {
  opacity: 1;
}

.fade-up {
  opacity: 0;
  transform: translateY(40px);
}

.fade-up.animate {
  opacity: 1;
  transform: translateY(0);
}

.slide-up {
  opacity: 0;
  transform: translateY(80px);
}

.slide-up.animate {
  opacity: 1;
  transform: translateY(0);
}

.slide-left {
  opacity: 0;
  transform: translateX(-80px);
}

.slide-left.animate {
  opacity: 1;
  transform: translateX(0);
}

.slide-right {
  opacity: 0;
  transform: translateX(80px);
}

.slide-right.animate {
  opacity: 1;
  transform: translateX(0);
}

.zoom-in {
  opacity: 0;
  transform: scale(0.9);
}

.zoom-in.animate {
  opacity: 1;
  transform: scale(1);
}

/* Initial load animation for hero section */
.scroll-container:not(.loaded) .hero-section {
  animation: heroFadeIn 1s ease-out forwards;
}

@keyframes heroFadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .section {
    margin: 40px 0;
  }
}
</style>
