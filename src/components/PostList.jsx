'use client'

import { useState } from 'react'
import { getPosts } from '@/lib/actions'

import GradientButton from './GradientButton'
import Image from 'next/image'

export default function PostList({ initialPosts, initialPageInfo }) {
  const [posts, setPosts] = useState(initialPosts)
  const [pageInfo, setPageInfo] = useState(initialPageInfo)

  async function handleLoadMore() {
    const data = await getPosts(pageInfo.endCursor)

    setPosts((oldPosts) => [...oldPosts, ...data.posts])
    setPageInfo(data.pageInfo)
  }

  return (
    <div>
      {posts.map(({ post }) => (
        <article
          key={post.slug}
          className="blog-card-gradient-border blog-card"
        >
          <Image
            src={post.thumbnail?.url || 'https://placehold.co/150x150'}
            width={150}
            height={150}
            alt={`Thumbnail for ${post.title}`}
            className="blog-card-image"
          />
          <div className="blog-card-content">
            <h3 className="blog-card-title">{post.title}</h3>
            <p className="blog-card-summary">{post.summary}</p>

            <GradientButton
              href={`/blog/${post.slug}`}
              className="blog-card-button"
            >
              Read More
            </GradientButton>
          </div>
        </article>
      ))}

      {pageInfo.hasNextPage && (
        <div className="text-center mt-8">
          <button
            onClick={handleLoadMore}
            className="py-2 px-4 bg-gray-200 rounded-sm cursor-pointer"
          >
            Load More...
          </button>
        </div>
      )}
    </div>
  )
}
