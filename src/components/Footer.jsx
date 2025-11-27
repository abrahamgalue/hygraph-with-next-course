export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-content">
          <p className="copyright">
            © {currentYear} GameZone. All rights reserved. Built for gamers, by gamers.
          </p>
        </div>
      </div>
    </footer>
  );
}