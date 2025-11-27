import { getPostBySlug } from '@/lib/actions'
import { RichText } from '@graphcms/rich-text-react-renderer'

export default async function BlogDetailsPage({ params }) {
  const { slug } = await params

  const { title, summary, content, createdBy } = await getPostBySlug(slug)

  return (
    <div className="blog-details-container">
      <div className="blog-details-grid">
        <article className="blog-main-content">
          <h1 className="blog-title">{title}</h1>
          <div className="blog-meta">
            <p>By {createdBy.name}</p>
          </div>
          <div className="blog-sumary">
            <p className="text-lg font-bold">{summary}</p>
          </div>
          <div className="blog-content">
            <RichText
              content={content.raw}
              renderers={{
                h4: ({ children }) => <h4 className="my-4">{children}</h4>,
              }}
            />
          </div>
        </article>

        {/* Sidebar - right side */}
        <div className="blog-sidebar">
          <div className="sidebar-card">
            <h3 className="sidebar-title">More Posts by {createdBy.name}</h3>
            <div className="sidebar-links">
              <p>add more author posts here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
