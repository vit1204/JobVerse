<script setup>
import { nextTick, ref, watch } from 'vue'
import { ElIcon, ElMessage } from 'element-plus'
import { Document, Message, UploadFilled } from '@element-plus/icons-vue'
import { ArrowLeft } from 'lucide-vue-next'
import { postChatbot, uploadFilePdf } from '@/api/chatbot'

// Replace with your actual API URL

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['update:visible', 'close', 'navigateToDesktop'])

const dialogVisible = ref(props.visible)
const userInput = ref('')
const messages = ref([
  {
    role: 'assistant',
    content: 'Hello! I\'m your financial assistant. How can I help you today?',
    timestamp: new Date(),
  },
])
const loading = ref(false)
const showUpload = ref(false)
const selectedFile = ref(null)
const uploading = ref(false)
const messagesContainer = ref(null)

// Watch for changes in the visible prop
watch(
  () => props.visible,
  (newVal) => {
    dialogVisible.value = newVal
  },
)

// Watch for changes in the dialog visibility
watch(dialogVisible, (newVal) => {
  emit('update:visible', newVal)
  if (!newVal)
    emit('close')
})

// Watch for new messages to scroll to bottom
watch(
  messages,
  () => {
    scrollToBottom()
  },
  { deep: true },
)

async function scrollToBottom() {
  await nextTick()
  if (messagesContainer.value)
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
}

function formatTime(timestamp) {
  const date = new Date(timestamp)
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

async function sendMessage() {
  if (!userInput.value.trim() || loading.value)
    return

  const userMessage = {
    role: 'user',
    content: userInput.value,
    timestamp: new Date(),
  }

  messages.value.push(userMessage)
  const messageText = userInput.value
  userInput.value = ''
  loading.value = true

  try {
    const response = await postChatbot(messageText)

    messages.value.push({
      role: 'assistant',
      content: response || 'I processed your request.',
      timestamp: new Date(),
    })
  }
  catch (error) {
    console.error('Error sending message:', error)
    messages.value.push({
      role: 'assistant',
      content:
        'Sorry, I encountered an error processing your request. Please try again.',
      timestamp: new Date(),
    })
    ElMessage.error('Failed to get response from the assistant')
  }
  finally {
    loading.value = false
  }
}

function toggleUpload() {
  showUpload.value = !showUpload.value
  selectedFile.value = null
}

function handleFileChange(file) {
  console.log('Selected file:', file)
  selectedFile.value = file.raw
}

async function uploadPdf() {
  if (!selectedFile.value) {
    ElMessage.warning('Please select a PDF file first')
    return
  }
  uploading.value = true

  try {
    messages.value.push({
      role: 'user',
      content: `Uploading file: ${selectedFile.value.name}`,
      timestamp: new Date(),
    })

    const response = await uploadFilePdf(selectedFile.value)

    messages.value.push({
      role: 'assistant',
      content:
        response.answer
        || 'I\'ve processed your PDF file. What would you like to know about it?',
      timestamp: new Date(),
    })

    showUpload.value = false
  }
  catch (error) {
    console.error('Error uploading PDF:', error)
    messages.value.push({
      role: 'assistant',
      content:
        'Sorry, I encountered an error processing your PDF. Please try again.',
      timestamp: new Date(),
    })
    ElMessage.error('Failed to upload and process the PDF')
  }
  finally {
    uploading.value = false
  }
}
</script>

<template>
  <div v-show="visible" class="chat-interface">
    <div class="chat-header">
      <div class="contact-info">
        <div class="avatar" />
        <div class="contact-details">
          <ElIcon @click="navigateToDesktop">
            <ArrowLeft />
          </ElIcon>
          <h2>AI Assistant</h2>
        </div>
      </div>
    </div>

    <div class="chat-body">
      <div class="contacts-sidebar">
        <div class="sidebar-header">
          <h3>Contacts</h3>
        </div>

        <div class="contacts-list">
          <div class="contact active">
            <div class="contact-avatar" />
            <div class="contact-name">
              <h4>AI Assistant</h4>
              <p>Financial Analyst Bot</p>
            </div>
          </div>

          <div class="contact">
            <div class="contact-avatar" />
            <div class="contact-name">
              <h4>Brian - Team Leader</h4>
              <p>Financial Team</p>
            </div>
          </div>

          <div class="contact">
            <div class="contact-avatar" />
            <div class="contact-name">
              <h4>Anna - Manager</h4>
              <p>Financial Department</p>
            </div>
          </div>

          <div class="contact">
            <div class="contact-avatar" />
            <div class="contact-name">
              <h4>Bert - Colleague</h4>
              <p>Financial Analyst</p>
            </div>
          </div>
        </div>
      </div>

      <div class="messages-area">
        <div ref="messagesContainer" class="messages-container">
          <div v-for="(message, index) in messages" :key="index" class="message-wrapper">
            <div class="message" :class="[message.role === 'user' ? 'user-message' : 'bot-message']">
              <div class="message-content">
                {{ message.content }}
              </div>
              <div class="message-time">
                {{ formatTime(message.timestamp) }}
              </div>
            </div>
          </div>

          <div v-if="loading" class="message-wrapper">
            <div class="message bot-message">
              <div class="message-content">
                <el-skeleton :rows="2" animated />
              </div>
            </div>
          </div>
        </div>

        <div class="message-input-area">
          <div v-if="showUpload" class="upload-container">
            <el-upload
              class="pdf-upload" drag action="#" :auto-upload="false" :on-change="handleFileChange" :limit="1"
              accept=".pdf"
            >
              <ElIcon class="el-icon--upload">
                <UploadFilled />
              </ElIcon>
              <div class="el-upload__text">
                Drop PDF file here or <em>click to upload</em>
              </div>
              <template #tip>
                <div class="el-upload__tip">
                  PDF files only
                </div>
              </template>
            </el-upload>

            <div class="upload-actions">
              <el-button type="primary" :loading="uploading" @click="uploadPdf">
                Upload and Process
              </el-button>
              <el-button @click="showUpload = false">
                Cancel
              </el-button>
            </div>
          </div>

          <div v-else class="input-container">
            <div class="message-tools">
              <el-button circle @click="toggleUpload">
                <ElIcon>
                  <Document />
                </ElIcon>
              </el-button>
              <el-button circle>
                <ElIcon>
                  <picture />
                </ElIcon>
              </el-button>
              <el-button circle>
                <ElIcon>
                  <more />
                </ElIcon>
              </el-button>
            </div>

            <div class="message-input">
              <el-input
                v-model="userInput" placeholder="Text to AI Assistant" :disabled="loading"
                @keyup.enter="sendMessage"
              />
            </div>

            <div class="send-button">
              <el-button circle type="primary" :disabled="!userInput.trim() || loading" @click="sendMessage">
                <ElIcon>
                  <Message />
                </ElIcon>
              </el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.chat-interface {
  display: flex;
  flex-direction: column;
  height: 700px;
  width: 100%;
  background-color: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
}

.chat-header {
  background-color: #1a237e;
  color: white;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.contact-info {
  display: flex;
  align-items: center;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 12px;
  background-color: #fff;
}

.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.contact-details h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 500;
}

.chat-body {
  display: flex;
  flex: 1;
  overflow: hidden;
}

.contacts-sidebar {
  width: 280px;
  background-color: #f0f0f0;
  border-right: 1px solid #e0e0e0;
  display: flex;
  flex-direction: column;
}

.sidebar-header {
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
}

.sidebar-header h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 500;
}

.contacts-list {
  flex: 1;
  overflow-y: auto;
}

.contact {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  border-bottom: 1px solid #e0e0e0;
  transition: background-color 0.2s;
}

.contact:hover {
  background-color: #e8e8e8;
}

.contact.active {
  background-color: #e3f2fd;
}

.contact-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 12px;
  background-color: #ddd;
}

.contact-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.contact-name h4 {
  margin: 0;
  font-size: 14px;
  font-weight: 500;
}

.contact-name p {
  margin: 4px 0 0;
  font-size: 12px;
  color: #666;
}

.messages-area {
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
}

.messages-container {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.message-wrapper {
  display: flex;
  flex-direction: column;
  max-width: 70%;
}

.user-message {
  align-self: flex-end;
  background-color: #e3f2fd;
  color: #333;
  border-radius: 18px 18px 4px 18px;
  margin-left: auto;
}

.bot-message {
  align-self: flex-start;
  background-color: #1a237e;
  color: white;
  border-radius: 18px 18px 18px 4px;
}

.message {
  padding: 12px 16px;
  position: relative;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.message-content {
  margin-bottom: 4px;
  word-break: break-word;
}

.message-time {
  font-size: 10px;
  opacity: 0.7;
  text-align: right;
}

.message-input-area {
  padding: 16px;
  border-top: 1px solid #e0e0e0;
  background-color: white;
}

.upload-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.upload-actions {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}

.input-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.message-tools {
  display: flex;
  gap: 4px;
}

.message-input {
  flex: 1;
}

:deep(.el-input__inner) {
  border-radius: 20px;
  padding-left: 16px;
  height: 40px;
}

:deep(.el-upload-dragger) {
  width: 100%;
}

/* Responsive styles */
@media (max-width: 768px) {
  .contacts-sidebar {
    display: none;
  }
}
</style>
