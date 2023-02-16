import { TypingEffect } from '../TypingEffect.jsx'
import { ChatGPTLogo } from '../utils/Icons'
import { Avatar } from '../utils/Avatar'
import Image from 'next/image.js'
import { useEffect, useRef } from 'react'

function UserAvatar () {
  return (
    <Image width={100} height={100} src='/assets/avatar-user.jpg' alt='Imagen Avatar' />
  )
}
export function Message ({ ia, message }) {
  const messagesRef = useRef(null)

  useEffect(() => {
    // hace scroll hacia arriba al agregar un nuevo mensaje
    messagesRef.current.scrollTop = messagesRef.current.scrollHeight
  }, [message])

  const avatar = ia ? <ChatGPTLogo /> : <UserAvatar />
  const textElement = ia ? <TypingEffect text={message} /> : message

  return (
    <div ref={messagesRef} className={`text-gray-100  ${ia ? 'bg-chatgptligthgray shadow-lg' : 'bg-chatgptgray'}`}>
      <article className='flex gap-4 p-6 m-auto max-w-3xl messageresponsive'>
        <Avatar>
          {avatar}
        </Avatar>
        <div className='min-h-[20px] flex  flex-1 flex-col items-start gap-4 whitespace-pre-wrap'>
          <div className='markdown prose.invert w-full break-words'>
            <p>{textElement}</p>
          </div>
        </div>
      </article>
    </div>
  )
}
