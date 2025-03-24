import Link from 'next/link';
import { ReactNode } from 'react';

interface SocialLinkProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
};

export default function SocialLink({ href, children, icon }: SocialLinkProps) {
  return (
    <Link 
      href={href}
      className="px-4 py-2 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800 transition-colors flex items-center gap-2"
      target={href.startsWith('http') ? "_blank" : undefined}
      rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </Link>
  );
}
