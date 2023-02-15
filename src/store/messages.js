import { create } from 'zustand'

export const useMessageStore = create((set, get) => {
  return {
    messages: [],
    error: null,
    sendPrompt: async ({ prompt }) => {
      const messageIAid = get().messages.length + 1
      set(state => ({
        messages: [
          ...state.messages,
          {
            id: state.messages.length,
            ia: false,
            message: prompt
          },
          {
            id: state.messages.length + 1,
            ia: true,
            message: ''
          }
        ]
      }))

      try {
        const response = await fetch('api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ prompt })
        })

        const json = await response.json()
        set(state => ({
          messages: state.messages.map(entry => {
            if (entry.id === messageIAid) {
              return {
                ...entry,
                message: json.response
              }
            }
            return entry
          })
        }))
      } catch (error) {
        console.error(error)
      }
    }
  }
})
