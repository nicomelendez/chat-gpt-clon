import { useMessageStore } from '@/store/messages'
import { ChatForm } from './ChatForm'
import { Message } from './Message'

export function Chat () {
  const messages = useMessageStore(state => state.messages)

  return (
    <main className='flex flex-col h-full flex-1 pl-64'>
      {
        messages.map((message) => {
          return (
            <Message key={message.id} {...message} />
          )
        })
      }
      <ChatForm />
    </main>
  )
}
