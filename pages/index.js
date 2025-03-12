import Head from 'next/head'
import SocialLink from '../components/SocialLink'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-br from-white to-gray-100">
      <Head>
        <title>Aaron Bycoffe</title>
        <meta name="description" content="Aaron Bycoffe's personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full max-w-xl p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold mb-8">
          Aaron Bycoffe
        </h1>

        <div className="flex flex-col space-y-4 w-full max-w-xs">
          <SocialLink href="mailto:bycoffe@gmail.com">
            bycoffe@gmail.com
          </SocialLink>
          
          <SocialLink href="https://www.linkedin.com/in/aaron-bycoffe/">
            LinkedIn
          </SocialLink>
          
          <SocialLink href="http://twitter.com/bycoffe">
            @bycoffe
          </SocialLink>
        </div>
      </main>
    </div>
  )
}