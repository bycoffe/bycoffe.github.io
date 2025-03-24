import Head from 'next/head';
import SocialLink from '../components/SocialLink';
import type { NextPage } from 'next';
import { HiMail } from 'react-icons/hi';
import { BsFileEarmarkText } from 'react-icons/bs';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Home: NextPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-24 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <Head>
        <title>Aaron Bycoffe</title>
        <meta name="description" content="Aaron Bycoffe's personal website" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <header className="w-full max-w-[1200px] mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-1 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
          Aaron Bycoffe
        </h1>
      </header>

      <main className="w-full max-w-[1200px] px-4">
        <div className="flex flex-col items-center space-y-6 w-full">
          <SocialLink href="mailto:bycoffe@gmail.com" icon={<HiMail />}>
            bycoffe@gmail.com
          </SocialLink>

          <SocialLink href="/portfolio/" icon={<BsFileEarmarkText />}>
            Portfolio
          </SocialLink>
          
          <SocialLink href="https://www.linkedin.com/in/aaron-bycoffe/" icon={<FaLinkedin />}>
            LinkedIn
          </SocialLink>

          <SocialLink href="https://github.com/bycoffe/" icon={<FaGithub />}>
            GitHub
          </SocialLink>
        </div>
      </main>
    </div>
  );
};

export default Home;
