import { useMessageStore } from '@/store/messages'
import { ChatForm } from './ChatForm'
import { Message } from './Message'

export function Chat () {
  const messages = useMessageStore(state => state.messages)

  return (
    <main className='flex flex-col h-full flex-1 pl-64 chatResponsive messagesResponsive'>
      <div className='messageContainer flex flex-col'>
        {
          messages.map((message) => {
            return (
              <Message key={message.id} {...message} />
            )
          })
        }
        <div />
      </div>
      <ChatForm />
    </main>
  )
}
