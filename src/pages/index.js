import { Avatar } from '@/components/Avatar'
import { ChatGPTLogo, PlusIcon, SendIcon } from '@/components/Icons'
import { TypingEffect } from '@/components/TypingEffect'
import Head from 'next/head'

function Layout ({ children }) {
  return (
    <>
      <Head>
        <title>ChatGPT</title>
      </Head>
      <div className='w-full relative bg-chatgptgray h-screen '>
        <Aside />
        {children}
      </div>
    </>
  )
}

function Aside () {
  return (
    <aside className='bg-chatgptdarkgray fixed flex w-64 h-screen flex-col'>
      <nav className='flex h-full flex-1 flex-col space-y-1 p-2'>
        <button className='flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-2 flex-shrink-0 border border-white/20'>
          <PlusIcon /> New chat
        </button>
      </nav>
    </aside>
  )
}

function UserAvatar () {
  return (
    <img src='https://media.licdn.com/dms/image/C4D03AQFth6dW_GVUtQ/profile-displayphoto-shrink_200_200/0/1642895466352?e=1681948800&v=beta&t=SLtr9RRFVSihKAGidziQcfRvT2kpZMXqr6FHbWf_ma4' alt='Imagen Avatar' />
  )
}

function Message ({ ia, message }) {
  const avatar = ia ? <ChatGPTLogo /> : <UserAvatar />
  const textElement = ia ? <TypingEffect text={message} /> : message

  return (
    <div className={`text-gray-100  ${ia ? 'bg-chatgptligthgray shadow-lg' : 'bg-chatgptgray'}`}>
      <article className='flex gap-4 p-6 m-auto max-w-3xl'>
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

function Chat () {
  const messages = [
    {
      id: 1,
      ia: false,
      message: 'Hola dime algo sobre uruguay'
    },
    {
      id: 2,
      ia: true,
      message: '¡Hola! Uruguay es un país ubicado en América del Sur, limitando al este con Brasil, al oeste y al norte con Argentina, y al sur con el Océano Atlántico. Su capital y ciudad más poblada es Montevideo, donde vive aproximadamente la mitad de la población del país. Uruguay es conocido por tener una de las tasas de alfabetización más altas del continente, así como por su sistema educativo público y gratuito'
    }
  ]

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

function ChatForm () {
  return (
    <section className='absolute ml-32 bottom-0 w-full left-0 right-0'>
      <form className='flex flex-row max-w-3xl m-auto pt-6 mb-6'>
        <div className='relative flex flex-col flex-grow w-full px-4 py-3 text-white border rounded-md shadow-lg bg-chatgptligthgray border-gray-900/50'>
          <textarea className='w-full h-[24px] resize-none bg-transparent m-0 boder-0 outline-none' />
          <button className='absolute p-1 rounded-md bottom-2.5 right-2.5'><SendIcon /></button>
        </div>
      </form>
    </section>
  )
}

export default function Home () {
  return (
    <Layout>
      <Chat />
    </Layout>
  )
}
