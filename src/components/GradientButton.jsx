import Link from 'next/link';

export default function GradientButton({ href, children, className = '' }) {
  const ChevronRight = () => (
    <svg 
      className="gradient-button-icon" 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M9 5l7 7-7 7" 
      />
    </svg>
  );

  return (
    <Link 
      href={href}
      className={`gradient-button ${className}`}
    >
      {children}
      <ChevronRight />
    </Link>
  );
}