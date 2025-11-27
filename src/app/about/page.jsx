import { getAboutPage } from '@/lib/actions'

export default async function AboutPage() {
  const { title, content, summary } = await getAboutPage()

  return (
    <div>
      <h1 className="page-title">{title}</h1>
      <div className="page-summary">
        <p className="text-lg font-bold">{summary}</p>
      </div>
      <section className="page-content">
        <div dangerouslySetInnerHTML={{ __html: content.html }}></div>
      </section>
    </div>
  )
}
