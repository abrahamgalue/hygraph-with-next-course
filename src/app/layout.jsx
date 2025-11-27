import "./globals.css"
import Header from "../components/Header"
import Footer from "../components/Footer"

export const metadata = {
  title: "GameZone - Your Ultimate Gaming Experience",
  description: "Modern gaming blog with latest gaming news, reviews, and insights",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="main-content">
          <div className="container">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  )
}
