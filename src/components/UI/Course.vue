<script setup>
import { computed, onMounted, ref } from 'vue'
import { ArrowUpRight, Briefcase, Building, Clock, Code, Scale, Users } from 'lucide-vue-next'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Function to get the appropriate icon based on tag type
function getTagIcon(type) {
  switch (type) {
    case 'banking':
      return Briefcase
    case 'software':
      return Code
    case 'law':
      return Scale
    case 'client':
      return Users
    default:
      return Building
  }
}

// Responsive slides per view
const windowWidth = ref(window.innerWidth)
const slidesPerView = computed(() => {
  if (windowWidth.value < 640)
    return 1
  if (windowWidth.value < 1024)
    return 2
  if (windowWidth.value < 1280)
    return 3
  return 4
})

// Swiper breakpoints for responsive design
const swiperBreakpoints = {
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1280: {
    slidesPerView: 4,
    spaceBetween: 20,
  },
}

// Update window width on resize
onMounted(() => {
  window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth
  })
})

// Sample job data
const jobs = ref([
  {
    company: 'HSBC',
    title: 'Global Banking & Markets',
    image: 'https://placehold.co/600x400/cc3232/ffffff',
    logo: 'https://placehold.co/200x100/ffffff/cc3232?text=HSBC',
    tags: [
      { type: 'banking', label: 'Banking & Financial Services' },
    ],
    careerPath: true,
    level: 3,
    levelText: 'Advanced',
    hours: '4-5 hours',
  },
  {
    company: 'Goldman Sachs',
    title: 'Operations',
    image: 'https://placehold.co/600x400/e6d7a8/ffffff',
    logo: 'https://placehold.co/200x100/ffffff/000000?text=Goldman+Sachs',
    tags: [
      { type: 'banking', label: 'Banking & Financial Services' },
    ],
    careerPath: false,
    level: 2,
    levelText: 'Intermediate',
    hours: '1-2 hours',
  },
  {
    company: 'Orrick USA',
    title: 'Commercial Law',
    image: 'https://placehold.co/600x400/6b4c9a/ffffff',
    logo: 'https://placehold.co/200x100/ffffff/6b4c9a?text=Orrick',
    tags: [
      { type: 'law', label: 'Law' },
    ],
    careerPath: false,
    level: 0,
    levelText: '',
    hours: '5-6 hours',
  },
  {
    company: 'Electronic Arts',
    title: 'Software Engineering',
    image: 'https://placehold.co/600x400/2196f3/ffffff',
    logo: 'https://placehold.co/200x100/ffffff/2196f3?text=EA',
    tags: [
      { type: 'software', label: 'Software Engineering' },
    ],
    careerPath: true,
    level: 2,
    levelText: 'Intermediate',
    hours: '5-6 hours',
  },
  {
    company: 'Bloomberg',
    title: 'Client Service',
    image: 'https://placehold.co/600x400/f5f5f5/000000',
    logo: 'https://placehold.co/200x100/ffffff/000000?text=Bloomberg',
    tags: [
      { type: 'client', label: 'Client Service' },
    ],
    careerPath: false,
    level: 2,
    levelText: 'Intermediate',
    hours: '3-4 hours',
  },
])
</script>

<template>
  <div class="talent-network-container">
    <Swiper
      :modules="[Navigation, Pagination, A11y]" :slides-per-view="slidesPerView" :space-between="20"
      :navigation="true" :pagination="{ clickable: true }" :breakpoints="swiperBreakpoints" class="talent-swiper"
    >
      <SwiperSlide v-for="(job, index) in jobs" :key="index">
        <div class="job-card">
          <div class="card-banner">
            TALENT NETWORK OPEN
          </div>
          <div class="card-content">
            <div class="card-image" :style="{ backgroundImage: `url(${job.image})` }">
              <img :src="job.logo" alt="Company logo" class="company-logo">
            </div>

            <div class="card-details">
              <h3 class="company-name">
                {{ job.company }}
              </h3>

              <h2 class="job-title">
                {{ job.title }}
              </h2>

              <div class="job-tags">
                <div v-for="(tag, tagIndex) in job.tags" :key="tagIndex" class="tag">
                  <component :is="getTagIcon(tag.type)" class="tag-icon" />
                  <span>{{ tag.label }}</span>
                </div>
              </div>

              <div class="job-meta">
                <div v-if="job.careerPath" class="career-path">
                  <ArrowUpRight class="career-path-icon" />
                  <span>Part of Career Path</span>
                </div>

                <div class="job-level">
                  <div class="level-dots">
                    <span class="dot" :class="{ 'dot-filled': job.level >= 1 }" />
                    <span class="dot" :class="{ 'dot-filled': job.level >= 2 }" />
                    <span class="dot" :class="{ 'dot-filled': job.level >= 3 }" />
                  </div>
                  <span class="level-text">{{ job.levelText }}</span>
                </div>

                <div class="job-hours">
                  <Clock class="hours-icon" />
                  <span>{{ job.hours }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
.talent-network-container {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

.talent-swiper {
    padding: 10px 30px 40px;
}

/* Make sure all swiper slides have the same height */
:deep(.swiper-slide) {
    height: auto;
    display: flex;
}

.job-card {
    width: 100%;
    height: 380px;
    /* Fixed height for all cards */
    max-width: 280px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: white;
    transition: transform 0.2s, box-shadow 0.2s;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

.job-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.card-banner {
    background-color: #f0f4f8;
    color: #64748b;
    font-size: 12px;
    font-weight: 600;
    padding: 6px 12px;
    text-align: right;
    flex-shrink: 0;
}

.card-image {
    height: 120px;
    background-size: cover;
    background-position: center;
    position: relative;
    flex-shrink: 0;
}

.company-logo {
    position: absolute;
    left: 15px;
    bottom: 15px;
    max-width: 100px;
    max-height: 40px;
    object-fit: contain;
}

.card-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;
}

.card-details {
    padding: 16px;
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow: hidden;
}

.company-name {
    font-size: 14px;
    color: #64748b;
    margin: 0 0 8px 0;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.job-title {
    font-size: 18px;
    font-weight: 600;
    color: #1e293b;
    margin: 0 0 16px 0;
    line-height: 1.3;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    height: 48px;
    /* Fixed height for job title */
}

.job-tags {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 16px;
    overflow: hidden;
    flex-shrink: 0;
}

.tag {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    color: #64748b;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.tag-icon {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
}

.job-meta {
    margin-top: auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-shrink: 0;
}

.career-path {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    color: #f59e0b;
    font-weight: 500;
}

.career-path-icon {
    width: 14px;
    height: 14px;
    color: #f59e0b;
    flex-shrink: 0;
}

.job-level {
    display: flex;
    align-items: center;
    gap: 8px;
}

.level-dots {
    display: flex;
    gap: 2px;
    flex-shrink: 0;
}

.dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #e2e8f0;
}

.dot-filled {
    background-color: #64748b;
}

.level-text {
    font-size: 13px;
    color: #64748b;
}

.job-hours {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 13px;
    color: #64748b;
}

.hours-icon {
    width: 14px;
    height: 14px;
    flex-shrink: 0;
}

/* Customize Swiper navigation buttons */
:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
    color: #64748b;
    background-color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
    background-color: #f8fafc;
}

:deep(.swiper-button-next:after),
:deep(.swiper-button-prev:after) {
    font-size: 18px;
    font-weight: bold;
}

:deep(.swiper-pagination-bullet-active) {
    background-color: #64748b;
}

/* Responsive styles */
@media (max-width: 639px) {
    .talent-swiper {
        padding: 10px 10px 40px;
    }

    .job-card {
        max-width: 100%;
    }
}
</style>
