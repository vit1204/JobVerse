<script>
import FileUploadButton from '@/components/UI/FileUploadButton.vue'

export default {
  name: 'TestFileUpload',
  components: {
    FileUploadButton,
  },
  data() {
    return {
      selectedFilePath: null,
    }
  },
  methods: {
    handleFileSelected(event) {
      const file = event.target.files[0]
      console.log(file)
      if (file)

        this.selectedFilePath = file
    },
  },
}
</script>

<template>
  <div class="test-container">
    <h2>Test File Upload</h2>
    <FileUploadButton v-model="selectedFilePath" @file-selected="handleFileSelected" />
    <div v-if="selectedFilePath" class="file-info">
      <p>Selected file path: {{ selectedFilePath }}</p>
    </div>
  </div>
</template>

<style scoped>
.test-container {
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
}

.file-info {
  margin-top: 20px;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 4px;
}
</style>
