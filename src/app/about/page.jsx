import { RichText } from '@graphcms/rich-text-react-renderer'
import { getAboutPage } from '@/lib/actions'

export default async function AboutPage() {
  const { title, content } = await getAboutPage()

  return (
    <div>
      <h1 className="page-title">{title}</h1>
      <section className="page-content">
        <RichText
          content={content.raw}
          renderers={{
            h3: ({ children }) => (
              <h3 className="my-6 pb-4 border-b-1 border-gray-200">
                {children}
              </h3>
            ),
            blockquote: ({ children }) => (
              <blockquote className="mx-12 my-8 pl-4 py-2 border-l-4 border-gray-400">
                {children}
              </blockquote>
            ),
            a: ({ children, href }) => {
              if (href.startsWith('http'))
                return (
                  <a
                    href={href}
                    target="_blank"
                    className="text-indigo-500 underline"
                  >
                    {children}
                  </a>
                )
              return (
                <Link href={href} className="text-indigo-500 underline">
                  {children}
                </Link>
              )
            },
          }}
        />
      </section>
    </div>
  )
}
