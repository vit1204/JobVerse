<script setup>
import { nextTick, ref, watch } from 'vue'
import { ElIcon, ElMessage } from 'element-plus'
import { Document, Message, UploadFilled } from '@element-plus/icons-vue'
import { ArrowLeft } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import { postChatbot, uploadFilePdf } from '@/api/chatbot'
import Manager from '@/assets/img/Manager.png'
import You from '@/assets/img/You.png'
import Leader from '@/assets/img/Leader.png'
// Replace with your actual API URL

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['update:visible', 'close', 'navigate-to-desktop'])
const dialogVisible = ref(props.visible)
const userInput = ref('')
const messages = ref([
  {
    role: 'assistant',
    content: 'Hello! I\'m your financial assistant. How can I help you today?',
    timestamp: new Date(),
  },
])

// User-specific chat history
const brianMessages = ref([
  {
    role: 'user',
    content: 'Hi Lily, I need you to analyze the quarterly financial report by Friday.',
    timestamp: new Date(new Date().setHours(new Date().getHours() - 3)),
  },
  {
    role: 'assistant',
    content: 'I\'ll work on that, Brian.Do you have any specific areas you want me to focus on?',
    timestamp: new Date(new Date().setHours(new Date().getHours() - 3)),
  },
  {
    role: 'user',
    content: 'Please focus on the cost optimization and revenue growth sections.',
    timestamp: new Date(new Date().setHours(new Date().getHours() - 2)),
  },
])

const annaMessages = ref([
  {
    role: 'user',
    content: 'Lily, have you seen the new budget proposal?',
    timestamp: new Date(new Date().setHours(new Date().getHours() - 5)),
  },
  {
    role: 'assistant',
    content: 'Yes, Anna. I\'\'ve reviewed it and have some suggestions regarding the Q3 allocation.',
    timestamp: new Date(new Date().setHours(new Date().getHours() - 5)),
  },
])

const bertMessages = ref([
  {
    role: 'user',
    content: 'Could you help me with the variance analysis for the last quarter?',
    timestamp: new Date(new Date().setHours(new Date().getHours() - 8)),
  },
])

const loading = ref(false)
const showUpload = ref(false)
const selectedFile = ref(null)
const uploading = ref(false)
const messagesContainer = ref(null)
const activeContact = ref('assistant') // Default to AI Assistant

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

// Watch for active contact change
watch(activeContact, (newContact) => {
  // Switch message history based on selected contact
  switch (newContact) {
    case 'brian':
      messages.value = [...brianMessages.value]
      break
    case 'anna':
      messages.value = [...annaMessages.value]
      break
    case 'bert':
      messages.value = [...bertMessages.value]
      break
    default:
      // Default AI Assistant messages
      messages.value = [
        {
          role: 'assistant',
          content: 'Hello! I\'m your financial assistant. How can I help you today?',
          timestamp: new Date(),
        },
      ]
  }
  scrollToBottom()
})

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

  // Save message to the appropriate chat history
  if (activeContact.value === 'brian')
    brianMessages.value.push(userMessage)
  else if (activeContact.value === 'anna')
    annaMessages.value.push(userMessage)
  else if (activeContact.value === 'bert')
    bertMessages.value.push(userMessage)

  try {
    const response = await postChatbot(messageText)

    const assistantMessage = {
      role: 'assistant',
      content: response || 'I processed your request.',
      timestamp: new Date(),
    }

    messages.value.push(assistantMessage)

    // Save assistant message to the appropriate chat history
    if (activeContact.value === 'brian')
      brianMessages.value.push(assistantMessage)
    else if (activeContact.value === 'anna')
      annaMessages.value.push(assistantMessage)
    else if (activeContact.value === 'bert')
      bertMessages.value.push(assistantMessage)
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

function switchContact(contact) {
  activeContact.value = contact
}
</script>

<template>
  <div v-show="visible" class="chat-interface">
    <div class="chat-header">
      <div class="contact-info">
        <ElIcon style="cursor: pointer;" @click="emit('navigate-to-desktop')">
          <ArrowLeft />
        </ElIcon>
       
      </div>
    </div>

    <div class="chat-body">
      <div class="contacts-sidebar">
        <div class="sidebar-header">
          <h3>Contacts</h3>
        </div>

        <div class="contacts-list">
      
          <div class="contact" :class="{ active: activeContact === 'brian' }" @click="switchContact('brian')">
            <div class="contact-avatar" >
              <img :src="Leader" alt="Leader" />
            </div>
            <div class="contact-name">
              <h4>Brian - Team Leader</h4>
              <p>Financial Team</p>
            </div>
          </div>

          <div class="contact" :class="{ active: activeContact === 'anna' }" @click="switchContact('anna')">
            <div class="contact-avatar" >
              <img :src="Manager" alt="Manager" />
            </div>
            <div class="contact-name">
              <h4>Anna - Manager</h4>
              <p>Financial Department</p>
            </div>
          </div>

          <div class="contact" :class="{ active: activeContact === 'bert' }" @click="switchContact('bert')">
            <div class="contact-avatar" >
              <img :src="You" alt="You" />
            </div>
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
                v-model="userInput"
                :placeholder="`Text to ${activeContact === 'brian' ? 'Brian' : activeContact === 'anna' ? 'Anna' : activeContact === 'bert' ? 'Bert' : 'AI Assistant'}`"
                :disabled="loading" @keyup.enter="sendMessage"
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
  position: relative;
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

.contact-name {
  flex: 1;
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

.unread-indicator {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #1a237e;
  color: white;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
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
