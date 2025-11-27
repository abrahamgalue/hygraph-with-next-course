import { RichText } from '@graphcms/rich-text-react-renderer'

export default async function BlogDetailsPage({ params }) {
  const { slug } = await params

  return (
    <div className="blog-details-container">
      <div className="blog-details-grid">
        <article className="blog-main-content">
          <h1 className="blog-title">Title for {slug}</h1>
          <div className="blog-meta">
            <p>By Author</p>
          </div>
          <div className="blog-sumary">
            <p className="text-lg font-bold">Summary</p>
          </div>
          <div className="blog-content">Content</div>
        </article>

        {/* Sidebar - right side */}
        <div className="blog-sidebar">
          <div className="sidebar-card">
            <h3 className="sidebar-title">More Posts by Author</h3>
            <div className="sidebar-links">
              <p>add more author posts here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
