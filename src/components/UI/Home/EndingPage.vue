<template>
  <div class="container">
    <h1>Are you interested in being our partner to prepare for your students or promote your majors?</h1>
    <button>
      Find us there
    </button>
  </div>
  <div class="banner-container">
    <div class="content-section">
      <h1 class="heading">
        We want to build a world where candidates are considered equally on their merits.
      </h1>
      <p class="subheading">
        We're here to ensure that your skills, grit, and drive are recognized and rewarded.
      </p>
      <button class="enroll-button">
        Enroll Now
      </button>
    </div>
    <div class="graphic-section">
      <div class="checkmark-graphic">
        <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M160 0C180 20 190 50 190 80C190 110 180 140 160 160L80 80L160 0Z" fill="#2D4B94" />
          <path d="M80 80L0 160C20 180 50 190 80 190C110 190 140 180 160 160L80 80Z" fill="#2D4B94" />
          <path d="M120 40L60 100L40 80L20 100L60 140L140 60L120 40Z" fill="#5DC389" />
          <path d="M60 100L40 80L20 100L60 140L60 100Z" fill="#5DC389" fill-opacity="0.5" />
          <path d="M120 40L60 100L60 140L140 60L120 40Z" fill="#5DC389" fill-opacity="0.7" />
        </svg>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container{
    display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 800px;
        height: 500px;
        margin: 0 auto;
        padding: 20px;

         h1{
            font-size: 24px;
            color: var(--color-gray-darker);

        }
                button {
                    background-color: var(--color-secondary);
                    color: white;
                    border: none;
                    border-radius: 2rem;
                    padding: 0.8rem 1.5rem;
                    font-size: 1rem;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.2s ease;
                    display: flex;
                    align-items: center;
                    margin-top: 1rem;
                }
}
.banner-container {
    height: 100%;
    display: flex;
    background-color: #edf4ff;
    padding: 4rem 5rem;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.content-section {
    flex: 1;
    max-width: 600px;
    z-index: 2;
}

.heading {
    font-size: 2.5rem;
    font-weight: 700;
    color: #2D4B94;
    line-height: 1.2;
    margin: 0 0 1.5rem 0;
}

.subheading {
    font-size: 1.25rem;
    color: #4A5568;
    line-height: 1.5;
    margin: 0 0 2rem 0;
}

.enroll-button {
    background-color: #2563EB;
    color: white;
    font-size: 1rem;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    transition: all 0.2s ease;
}

.enroll-button:hover {
    background-color: #1E40AF;
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(37, 99, 235, 0.2);
}

.arrow {
    margin-left: 0.5rem;
}

.graphic-section {
    position: absolute;
    right: 5rem;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
}

.checkmark-graphic {
    width: 220px;
    height: 220px;
}

/* Responsive styles */
@media (max-width: 1024px) {
    .banner-container {
        padding: 3rem;
    }

    .heading {
        font-size: 2rem;
    }

    .subheading {
        font-size: 1.1rem;
    }

    .graphic-section {
        right: 2rem;
    }

    .checkmark-graphic {
        width: 180px;
        height: 180px;
    }
}

@media (max-width: 768px) {
    .banner-container {
        flex-direction: column;
        padding: 2.5rem 2rem;
    }

    .content-section {
        max-width: 100%;
    }

    .heading {
        font-size: 1.8rem;
    }

    .graphic-section {
        position: relative;
        right: auto;
        top: auto;
        transform: none;
        margin-top: 2rem;
        align-self: center;
    }
}

@media (max-width: 480px) {
    .banner-container {
        padding: 2rem 1.5rem;
    }

    .heading {
        font-size: 1.5rem;
    }

    .subheading {
        font-size: 1rem;
    }

    .checkmark-graphic {
        width: 150px;
        height: 150px;
    }
}
</style>
