import fs from 'fs';
import path from 'path';

export interface PortfolioItem {
  title: string;
  url: string;
  linkTitle: string;
  thumbnail: string;
  date: string;
}

export async function getPortfolioData(): Promise<PortfolioItem[]> {
  // Read the JSON file
  const filePath = path.join(process.cwd(), 'data', 'portfolio.json');
  const fileContents = fs.readFileSync(filePath, 'utf8');
  
  // Parse the JSON data
  const portfolioItems: PortfolioItem[] = JSON.parse(fileContents);
  
  // Sort by date (newest first)
  return portfolioItems.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}