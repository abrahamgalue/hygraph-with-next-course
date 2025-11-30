import PostList from '@/components/PostList'
import { getPosts } from '@/lib/actions'

export default async function HomePage() {
  const { posts, pageInfo } = await getPosts()

  return (
    <div>
      <h1 className="page-title">Welcome.</h1>
      <p className="page-description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla
        delectus, illum maiores unde nihil iste facilis accusamus quibusdam
        voluptates reiciendis aliquam libero amet blanditiis porro ullam
        explicabo error? Deleniti impedit laudantium dolores autem eius incidunt
        modi eveniet aliquam possimus assumenda voluptatum veniam, sapiente
        nulla magnam quidem atque pariatur quo excepturi cupiditate.
      </p>

      <section className="homepage-blog-section">
        <div className="homepage-blog-container">
          <PostList initialPosts={posts} initialPageInfo={pageInfo} />
        </div>
      </section>
    </div>
  )
}
