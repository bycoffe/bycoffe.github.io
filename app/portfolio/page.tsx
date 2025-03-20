import { getPortfolioData } from '../../components/PortfolioData';
import SocialLink from '../../components/SocialLink'
import PortfolioItem from '../../components/PortfolioItem';

export const metadata = {
  title: 'Aaron Bycoffe - Portfolio',
  description: "Aaron Bycoffe's portfolio of interactive data projects",
};

export default async function PortfolioPage() {
  // This function is called at build time on the server
  const items = await getPortfolioData();

  return (
    <div className="min-h-screen flex flex-col items-center py-24 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <header className="w-full max-w-[1200px] mb-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600">
          Aaron Bycoffe
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-5">Portfolio</p>
        <SocialLink href="mailto:bycoffe@gmail.com">
          bycoffe@gmail.com
        </SocialLink>
      </header>
      <div>
      </div>

      <main className="w-full max-w-[1200px] px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 xl:gap-12">
          {items.map((item, i) => (
            <PortfolioItem 
              key={i} 
              title={item.title} 
              url={item.url} 
              linkTitle={item.linkTitle} 
              thumbnail={item.thumbnail}
              date={item.date}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
