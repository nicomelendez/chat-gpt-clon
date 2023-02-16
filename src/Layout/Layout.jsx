const { Aside } = require('@/components/Aside')
const { default: Head } = require('next/head')

export function Layout ({ children }) {
  return (
    <>
      <Head>
        <title>ChatGPT</title>
      </Head>
      <div className='w-full relative bg-chatgptgray h-screen asideResponsive'>
        <Aside />
        {children}
      </div>
    </>
  )
}
