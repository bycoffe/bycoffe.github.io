import Link from 'next/link'

export default function SocialLink({ href, children }) {
  return (
    <Link 
      href={href}
      className="px-4 py-2 rounded-md bg-gray-100 text-blue-600 hover:bg-gray-200 transition-colors"
      target={href.startsWith('http') ? "_blank" : undefined}
      rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  )
}