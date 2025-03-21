import { parseISO, format } from 'date-fns';

interface PortfolioItemProps {
  title: string;
  url: string;
  linkTitle: string;
  thumbnail: string;
  date: string;
}

function formatDate (date:string):string {
  const parsed = parseISO(date);
  return format(parsed, 'MMMM yyyy');
}

export default function PortfolioItem({ title, url, linkTitle, thumbnail, date }: PortfolioItemProps) {
  return (
    <a 
      href={url} 
      className="portfolio-item group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl bg-white mb-2 block"
      target="_blank" 
      rel="noopener noreferrer"
      aria-label={`View "${title}" project`}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={`/images/${thumbnail}`} 
          alt={`Thumbnail showing a part of the ${title} interactive project`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h2 className="text-white text-xl font-semibold mb-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{title}</h2>
        <time dateTime={date} className="text-gray-200 text-sm mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
          {formatDate(date)}
        </time>
        <span 
          className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 delay-150 hover:bg-white/30"
        >
          {linkTitle}
        </span>
      </div>
      <div className="p-5 bg-white transition-opacity duration-300 group-hover:opacity-0">
        <h2 className="text-gray-800 text-lg font-semibold mb-2">{title}</h2>
        <time dateTime={date} className="text-gray-500 text-sm block mb-2">
          {formatDate(date)}
        </time>
      </div>
    </a>
  )
}
