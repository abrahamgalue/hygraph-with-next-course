import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="header-content">
          <Link href="/" className="header-title-container">
            <h1 className="site-title">GameZone</h1>
            <span className="tagline">The Ultimate Gaming Blog</span>
          </Link>
          <nav>
            <Link href="/about">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}