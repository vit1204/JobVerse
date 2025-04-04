<script setup>
// No additional script needed for this component
</script>

<template>
  <div class="banner-container">
    <div class="content-section">
      <div class="statistics">
        <div class="stat-item">
          <h2 class="stat-heading">
            3.3x more likely
          </h2>
          <p class="stat-description">
            to land a job after participating in a job simulation
          </p>
        </div>

        <div class="stat-item">
          <h2 class="stat-heading">
            Over 300 job simulations
          </h2>
          <h2 class="stat-heading">
            and 125+ employers
          </h2>
          <p class="stat-description">
            across diverse industries and careers
          </p>
        </div>

        <div class="stat-item">
          <h2 class="stat-heading">
            5M+ students
          </h2>
          <p class="stat-description">
            have signed up to Forage
          </p>
        </div>

        <div class="cta-container">
          <button class="cta-button">
            Get ready!
          </button>
        </div>
      </div>
    </div>
    <img
      width="900" style="object-fit: contain;" src="../../assets/img/Viruss.jpeg" alt="" srcset=""
    >
  </div>
</template>

<style scoped>
.banner-container {
    display: flex ;
    background-color: #1e3a70;
    color: #a3e0d0;
    min-height: 500px;
    width: 100%;
    overflow: hidden;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.content-section {
    flex: 1;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.statistics {
    max-width: 600px;
}

.stat-item {
    margin-bottom: 2.5rem;
}

.stat-heading {
    font-size: 2.5rem;
    font-weight: 600;
    margin: 0;
    line-height: 1.2;
    color: #a3e0d0;
}

.stat-description {
    font-size: 1.1rem;
    margin-top: 0.5rem;
    color: #ffffff;
    font-weight: 400;
    line-height: 1.4;
}

.cta-container {
    margin-top: 1rem;
}

.cta-button {
    background-color: white;
    color: #1e3a70;
    border: none;
    border-radius: 2rem;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
}

.cta-button:hover {
    background-color: #f0f0f0;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.arrow {
    margin-left: 0.5rem;
    font-size: 1.2rem;
}

.image-section {
    flex: 1;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
}

.student-image {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center;
}

/* Responsive styles */
@media (max-width: 1024px) {
    .stat-heading {
        font-size: 2.2rem;
    }
}

@media (max-width: 768px) {
    .banner-container {
        flex-direction: column;
    }

    .content-section {
        padding: 2rem;
    }

    .image-section {
        min-height: 400px;
    }

    .stat-heading {
        font-size: 2rem;
    }
}

@media (max-width: 480px) {
    .content-section {
        padding: 1.5rem;
    }

    .stat-heading {
        font-size: 1.8rem;
    }

    .stat-description {
        font-size: 1rem;
    }
}
</style>
