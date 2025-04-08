<script setup>
import { onMounted, ref } from 'vue'
import {
  ArrowLeft,
  Box,
  Calendar,
  Connection,
  Delete,
  DocumentChecked,
  Folder,
  Grid,
  Headset,
  HomeFilled,
  List,
  Message,
  Microphone,
  PartlyCloudy,
  Search,
  Setting,
  VideoCamera,
} from '@element-plus/icons-vue'
import { ElButton, ElDropdown, ElDropdownItem, ElDropdownMenu, ElIcon, ElInput } from 'element-plus'
import Chatbot from '@/components/UI/Simulation/Chatbot.vue'

const showEmail = ref(false)
const showChatBubble = ref(false)
const showAnnotation = ref(false)
const showPopupMenu = ref(false)
const showChatbot = ref(false)
const currentView = ref('desktop') // 'desktop' or 'chatbot'

// Selected icons for the popup menu
const popupIcons = [
  { name: 'VideoCamera', icon: VideoCamera },
  { name: 'Grid', icon: Grid },
  { name: 'Delete', icon: Delete },
  { name: 'DocumentChecked', icon: DocumentChecked },
  { name: 'Message', icon: Message },
  { name: 'Email', icon: null, custom: true }, // Custom email icon
]

function toggleEmail() {
  showEmail.value = !showEmail.value
}

function togglePopupMenu() {
  showPopupMenu.value = !showPopupMenu.value
}

function handleCommand(command) {
  if (command === 'Delete')
    navigateToChatbot()
}

// Function to navigate to chatbot view
function navigateToChatbot() {
  currentView.value = 'chatbot'
  showChatbot.value = true
}

// Function to navigate back to desktop view
function navigateToDesktop() {
  currentView.value = 'desktop'
  showChatbot.value = false
}

onMounted(() => {
  // Show annotation with delay
  setTimeout(() => {
    showAnnotation.value = true
  }, 500)

  // Show chat bubble with delay
  setTimeout(() => {
    showChatBubble.value = true
  }, 3000)
})
</script>

<template>
  <div class="app-container">
    <!-- Desktop View -->
    <div v-if="currentView === 'desktop'" class="desktop-container">
      <!-- Desktop Icons -->
      <div class="desktop-icons">
        <!-- Popup Menu Trigger Icon -->
        <div class="icon-group">
          <div class="desktop-icon popup-trigger" @click="togglePopupMenu">
            <div class="popup-icon">
              <span>+</span>
            </div>
          </div>
        </div>

        <!-- Popup Menu - Horizontal Layout -->
        <transition name="popup-fade">
          <div v-if="showPopupMenu" class="popup-menu-horizontal">
            <transition-group name="popup-items">
              <div
                v-for="(item, index) in popupIcons" :key="item.name" class="desktop-icon popup-item"
                :style="{ animationDelay: `${index * 0.05}s` }" @click="item.custom ? toggleEmail() : null"
              >
                <ElIcon v-if="!item.custom">
                  <component :is="item.icon" />
                </ElIcon>
                <div v-else class="email-svg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
              </div>
            </transition-group>
          </div>
        </transition>

        <!-- Calendar Icon -->
        <div class="icon-group">
          <div class="desktop-icon calendar-icon">
            <ElIcon>
              <Calendar />
            </ElIcon>
          </div>
        </div>

        <!-- Settings Icon - Now navigates to chatbot view -->
        <div class="icon-group settings-group">
          <div class="desktop-icon settings-icon" @click="navigateToChatbot">
            <ElIcon>
              <Setting />
            </ElIcon>
          </div>
        </div>

        <!-- Folder Icon -->
        <div class="icon-group">
          <div class="desktop-icon folder-icon">
            <ElIcon @click="handleCommand('Delete')">
              <Folder />
            </ElIcon>
          </div>
        </div>
      </div>

      <!-- Email Popup -->
      <div v-if="showEmail" class="email-popup">
        <div class="email-header">
          <div class="sender-info">
            <div class="sender-avatar">
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="50" fill="#555" />
                <circle cx="50" cy="38" r="18" fill="#999" />
                <path d="M50 100c15 0 28-12 28-28H22c0 16 13 28 28 28z" fill="#999" />
              </svg>
            </div>
            <div class="sender-details">
              <h3>Daehyun Kim <span class="sender-badge">★</span></h3>
              <p class="sender-address">
                to me ▼
              </p>
            </div>
          </div>
        </div>

        <div class="email-body">
          <p>Dear Team,</p>
          <p>I hope this message finds you well.</p>
          <p>
            As part of our ongoing efforts to optimize financial performance and support strategic decisions, I am
            assigning a financial analysis task to be conducted. Please ensure that you gather all relevant data,
            perform
            in-depth analysis, and prepare the necessary reports for review.
          </p>
          <p>
            We will be focusing on quarterly performance, cost optimization, revenue growth, and I expect the analysis
            to
            be completed by Friday.
          </p>
          <p>Feel free to reach out to the guidance if you need any clarifications or support.</p>
          <p>Thank you for your continued effort and dedication.</p>
          <div class="email-signature">
            <p>Chris Kim</p>
          </div>
        </div>
      </div>

      <!-- Chat Bubble -->
      <div v-if="showChatBubble" class="chat-bubble">
        <div class="chat-header">
          <div class="chat-avatar">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="50" fill="#ff9090" />
              <circle cx="50" cy="38" r="18" fill="#fff" />
              <path d="M50 100c15 0 28-12 28-28H22c0 16 13 28 28 28z" fill="#fff" />
            </svg>
          </div>
          <div class="chat-name">
            Brian - Team Leader
          </div>
        </div>
        <div class="chat-message">
          Hey Lily, I just forwarded you an email from the partner regarding the financial statement analysis. Can you
          check and let me know your approach?
        </div>
      </div>

      <!-- Bottom Navigation Bar -->
      <div class="bottom-nav">
        <div class="nav-left">
          <ElButton circle class="home-button">
            <ElIcon>
              <HomeFilled />
            </ElIcon>
          </ElButton>
          <div class="search-bar">
            <ElInput placeholder="Search..." prefix-icon="search" />
          </div>
        </div>

        <div class="nav-right">
          <div class="system-icons">
            <ElIcon>
              <Microphone />
            </ElIcon>
            <ElIcon>
              <Connection />
            </ElIcon>
            <ElIcon>
              <PartlyCloudy />
            </ElIcon>
          </div>
          <div class="time-display">
            <div class="time">
              3:47 PM
            </div>
            <div class="date">
              3/5/2025
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Chatbot View -->
    <div v-else-if="currentView === 'chatbot'" class="chatbot-page">
      <!-- Back button to return to desktop -->

      <!-- Chatbot Component -->
      <Chatbot v-model:visible="showChatbot" @navigate-to-desktop="navigateToDesktop" />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  width: 100%;
  height: 800px;
  position: relative;
  overflow: hidden;
}

.desktop-container {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("../../../../assets/img/space.jpg");
  background-size: cover;
  background-position: center;
  overflow: hidden;
  animation: fadeIn 0.3s ease-out;
}

/* Chatbot Page Styles */
.chatbot-page {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  animation: fadeIn 0.3s ease-out;
  display: flex;
  flex-direction: column;
}

.back-button {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background-color: #1a237e;
  color: white;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.2s;
}

.back-button:hover {
  background-color: #303f9f;
}

/* Desktop Icons */
.desktop-icons {
  position: absolute;
  top: 20px;
  left: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.icon-group {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
}

.desktop-icon {
  width: 40px;
  height: 40px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.2s;
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
}

.desktop-icon:hover {
  background-color: rgba(0, 0, 0, 0.7);
  transform: scale(1.05);
}

/* Popup Menu Specific Styles */
.popup-trigger {
  background-color: rgba(0, 128, 255, 0.6);
  z-index: 10;
}

.popup-icon {
  font-size: 24px;
  font-weight: bold;
}

/* Horizontal Popup Menu Styles */
.popup-menu-horizontal {
  position: absolute;
  top: 20px;
  left: 70px;
  display: flex;
  flex-direction: row;
  gap: 15px;
  z-index: 5;
}

.popup-item {
  animation: slideRight 0.3s ease forwards;
  opacity: 0;
  transform: translateX(-20px);
}

@keyframes slideRight {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.popup-fade-enter-active,
.popup-fade-leave-active {
  transition: opacity 0.3s;
}

.popup-fade-enter-from,
.popup-fade-leave-to {
  opacity: 0;
}

.popup-items-enter-active {
  transition: all 0.3s ease;
}

.popup-items-leave-active {
  transition: all 0.3s ease;
}

.popup-items-enter-from,
.popup-items-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

/* Popup Annotation */
.popup-annotation {
  position: absolute;
  top: -40px;
  left: 60px;
  width: 180px;
  color: white;
  z-index: 50;
}

.annotation-text {
  font-size: 16px;
  font-weight: bold;
  color: white;
  position: absolute;
  top: 10px;
  left: 0;
}

.annotation-arrow {
  position: absolute;
  top: 20px;
  left: 70px;
  width: 80px;
  height: 0;
  border-top: 3px solid white;
}

.annotation-arrow:after {
  content: '';
  position: absolute;
  right: -10px;
  top: -10px;
  width: 0;
  height: 0;
  border-left: 15px solid white;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
}

.annotation-circle {
  position: absolute;
  top: -10px;
  left: 155px;
  width: 60px;
  height: 60px;
  border: 3px solid white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  line-height: 1.2;
}

.email-icon {
  background-color: rgba(0, 0, 0, 0.6);
}

.email-svg {
  color: white;
}

/* Settings Icon Styles */
.settings-group {
  position: relative;
}

.settings-icon {
  background-color: rgba(50, 50, 50, 0.6);
}

.calendar-icon {
  background-color: rgba(50, 100, 50, 0.6);
}

.folder-icon {
  background-color: rgba(100, 80, 0, 0.6);
}

/* Email Popup */
.email-popup {
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  animation: slideDown 0.5s ease-out;
  z-index: 100;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateX(-50%) translateY(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}

.email-header {
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
  background-color: #f9f9f9;
}

.sender-info {
  display: flex;
  align-items: center;
}

.sender-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 12px;
  background-color: #555;
}

.sender-details h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
}

.sender-badge {
  font-size: 12px;
  color: #888;
  margin-left: 5px;
}

.sender-address {
  margin: 4px 0 0;
  font-size: 12px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
}

.email-body {
  padding: 20px;
  line-height: 1.6;
}

.email-body p {
  margin-bottom: 12px;
  color: #333;
}

.email-signature {
  margin-top: 20px;
  padding-top: 10px;
  border-top: 1px solid #f0f0f0;
  font-weight: 500;
}

/* Chat Bubble */
.chat-bubble {
  position: absolute;
  bottom: 100px;
  right: 30px;
  width: 350px;
  background-color: #f0f0f0;
  border-radius: 20px;
  padding: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  animation: fadeIn 0.5s ease-out;
}

.chat-header {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.chat-avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
  background-color: #ff9090;
}

.chat-name {
  font-weight: 500;
  font-size: 14px;
}

.chat-message {
  font-size: 14px;
  line-height: 1.5;
}

/* Bottom Navigation Bar */
.bottom-nav {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background-color: rgba(200, 200, 255, 0.7);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.nav-left {
  display: flex;
  align-items: center;
  gap: 15px;
}

.home-button {
  background-color: transparent;
  border: none;
  font-size: 24px;
}

.search-bar {
  width: 300px;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.system-icons {
  display: flex;
  gap: 15px;
  font-size: 18px;
}

.time-display {
  text-align: right;
}

.time {
  font-weight: bold;
  font-size: 16px;
}

.date {
  font-size: 14px;
}

/* Media queries for responsive layout */
@media (max-width: 768px) {
  .email-popup {
    width: 90%;
  }

  .chat-bubble {
    width: 80%;
    right: 10%;
  }

  .search-bar {
    width: 200px;
  }

  .popup-menu-horizontal {
    flex-wrap: wrap;
    max-width: 150px;
  }
}

@media (max-width: 480px) {
  .popup-annotation {
    display: none;
  }
}
</style>
