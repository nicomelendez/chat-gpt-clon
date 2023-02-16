import { useMessageStore } from '@/store/messages'
import { useRef } from 'react'
import { SendIcon } from '../utils/Icons'

export function ChatForm () {
  const sendPrompt = useMessageStore(state => state.sendPrompt)
  const textAreaRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    const { value } = textAreaRef.current
    sendPrompt({ prompt: value })
    textAreaRef.current.value = ''
  }

  const handleChange = () => {
    const elemento = textAreaRef.current
    const scrollHeight = elemento.scrollHeight
    elemento.style.height = scrollHeight + 'px'
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit()
    }
  }

  return (
    <section className='fixed ml-32 formChatresponsive bottom-0 w-full left-0 right-0 reponsiveForm'>
      <form onKeyDown={handleKeyDown} onSubmit={handleSubmit} className='flex flex-row max-w-3xl m-auto pt-6 mb-6'>
        <div className='relative flex flex-col flex-grow w-full px-4 py-3 text-white border rounded-md shadow-lg bg-chatgptligthgray border-gray-900/50'>
          <textarea rows={1} tabIndex={0} autoFocus defaultValue='' onChange={handleChange} ref={textAreaRef} className='w-full h-[24px] resize-none bg-transparent m-0 boder-0 outline-none' />
          <button className='absolute p-1 rounded-md bottom-2.5 right-2.5'><SendIcon /></button>
        </div>
      </form>
    </section>
  )
}
