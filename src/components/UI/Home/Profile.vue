<script setup>
import { ref } from 'vue'
import Viruss from '@/assets/img/Phao.jpg'
import Ngockem from '@/assets/img/Ngockem.jpg'
import BanNam from '@/assets/img/QuocHan.jpg'

// Set activeIndex to null initially (no card is active)
const activeIndex = ref(null)

const testimonials = [
  {
    name: 'Nguyen Minh Anh',
    university: 'University of Melbourne (Australia)',
    package: 'Marketing Executive',
    quote: 'I used to feel lost about my future career because I didn\'t know what jobs were really like. Then I tried the \'Marketing Executive\' package on your Jobverse. I learn how to plan a campaign and analyze customer feedback was so eye-opening! It sharpened my problem-solving skills and sparked my passion for marketing. Thanks to that, I confidently applied for Business and got accepted!',
    image: BanNam,
    universityLogo: 'https://placehold.co/60x60/003366/ffffff?text=UoM',
  },
  {
    name: 'Tran Hoang Nam',
    university: 'National University of Singapore (NUS)',
    package: 'Software Engineer',
    quote: 'I thought coding was just boring typing until I tried the \'Software Engineer\' package. Building a mini-project and fixing bugs felt challenging but exciting, especially with the gamified levels keeping me hooked. The step-by-step guidance made everything clear. That experience pushed me to pursue Computer Science, and now I\'ve been admitted to the National University of Singapore!',
    image: Ngockem,
    universityLogo: 'https://placehold.co/60x60/003d7c/ffffff?text=NUS',
  },
  {
    name: 'Pham Thi Linh Chi',
    university: 'University College London (UCL, UK)',
    package: 'Data Analyst',
    quote: 'What I loved most about Jobverse was teaming up in the \'Data Analyst\' package. We analyzed fake datasets and pitched ideas together—it felt so real! My teamwork and critical thinking skills leveled up fast. Inspired by this, I aimed for Economics and just got accepted into University College London. This platform really prepared me for the future!',
    image: 'https://kenh14cdn.com/203336854389633024/2025/3/24/3858351396416098421832443872712626632236039n-1742810388179-17428103882671823712163.jpg',
    universityLogo: 'https://placehold.co/60x60/b5006a/ffffff?text=UCL',
  },
]
</script>

<template>
  <div class="testimonials-container">
    <div class="testimonials-header">
      <h2 class="title">
        Success Stories
      </h2>
      <p class="subtitle">
        See how Jobverse helped these students achieve their dreams
      </p>
    </div>

    <div class="testimonials-grid">
      <div
        v-for="(testimonial, index) in testimonials" :key="index" class="testimonial-card"
        :class="{ active: activeIndex === index }" @mouseenter="activeIndex = index"
        @mouseleave="activeIndex = null"
      >
        <div class="card-inner">
          <div class="card-front">
            <div class="image-container">
              <img :src="testimonial.image" :alt="testimonial.name" class="student-image">
              <div class="university-badge">
                <img
                  :src="testimonial.universityLogo" :alt="testimonial.university"
                  class="university-logo"
                >
              </div>
            </div>
            <div class="student-info">
              <h3 class="student-name">
                {{ testimonial.name }}
              </h3>
              <p class="university">
                Admitted to {{ testimonial.university }}
              </p>
              <div class="package-tag">
                {{ testimonial.package }}
              </div>
            </div>
          </div>

          <div class="card-back">
            <div class="quote-container">
              <div class="quote-icon">
                <!-- <img src="../../assets/icons/Quote.svg" alt="" srcset=""> -->
              </div>
              <p class="quote">
                {{ testimonial.quote }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.testimonials-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 1.5rem;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.testimonials-header {
    text-align: center;
    margin-bottom: 3rem;
}

.title {
    font-size: 2.5rem;
    font-weight: 700;
    color: #1a2b6d;
    margin-bottom: 0.5rem;
    background: linear-gradient(90deg, #1a2b6d 0%, #2a5298 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.subtitle {
    font-size: 1.2rem;
    color: #64748b;
    max-width: 600px;
    margin: 0 auto;
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.testimonial-card {
    height: 450px;
    perspective: 1000px;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
}

.testimonial-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
}

.card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
}

.testimonial-card.active .card-inner {
    transform: rotateY(180deg);
}

.card-front,
.card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 16px;
    overflow: hidden;
}

.card-front {
    background-color: white;
    display: flex;
    flex-direction: column;
}

.card-back {
    background: linear-gradient(135deg, #1a2b6d 0%, #2a5298 100%);
    color: white;
    transform: rotateY(180deg);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
}

.image-container {
    position: relative;
    height: 65%;
    overflow: hidden;
}

.student-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.testimonial-card:hover .student-image {
    transform: scale(1.05);
}

.university-badge {
    position: absolute;
    bottom: -20px;
    right: 20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 3px solid white;
    overflow: hidden;
}

.university-logo {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.student-info {
    padding: 1.5rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}

.student-name {
    font-size: 1.2rem;
    font-weight: 600;
    color: #1a2b6d;
    margin: 0 0 0.25rem 0;
}

.university {
    font-size: 0.9rem;
    color: #64748b;
    margin: 0 0 1rem 0;
}

.package-tag {
    display: inline-block;
    background-color: #e9f5ff;
    color: #2a5298;
    font-size: 0.8rem;
    font-weight: 500;
    padding: 0.4rem 0.8rem;
    border-radius: 20px;
    margin-top: auto;
}

.quote-container {
    position: relative;
}

.quote-icon {
    position: absolute;
    top: -30px;
    left: 0;
    color: rgba(255, 255, 255, 0.2);
    transform: scale(2);
}

.quote {
    font-size: 1rem;
    line-height: 1.6;
    font-style: italic;
    color: azure;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .testimonials-grid {
        grid-template-columns: 1fr;
        max-width: 400px;
        margin: 0 auto;
    }

    .testimonial-card {
        height: 400px;
    }

    .title {
        font-size: 2rem;
    }

    .subtitle {
        font-size: 1rem;
    }
}
</style>
