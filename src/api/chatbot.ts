import axios from 'axios'

const API_URL = import.meta.env.VITE_APP_KEY

export async function postChatbot(content: string) {
  try {
    const response = await axios.post(`${API_URL}rag/chat`, {
      messages: [
        {
          role: 'user',
          content,
        },
      ],
    })
    console.log('Response from server:', response.data)

    return response.data
  }
  catch (error) {
    console.error('Error fetching chatbot response:', error)
    throw error
  }
}

export async function uploadFilePdf(pdfFile: File) {
  try {
    const formData = new FormData()
    formData.append('pdfFile', pdfFile)

    const response = await axios.post(`${API_URL}rag/query-with-pdf`, formData)
    console.log('Response from server:', response.data)
    return response.data
  }
  catch (error) {
    console.log(error)
    throw error
  }
}

// async function uploadFilePath(filePath: string) {
//   try {
//     // Gửi file path dưới dạng JSON trong body request
//     const response = await axios.post(`${API_URL}rag/query-with-file`, {
//       filePath,
//     })

//     console.log('Response from server:', response.data)
//     return response.data
//   }
//   catch (error) {
//     console.log(error)
//     throw error
//   }
// }
