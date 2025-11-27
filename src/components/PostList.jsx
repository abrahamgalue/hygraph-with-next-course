'use client'

import { useState } from 'react'

import GradientButton from './GradientButton'
import Image from 'next/image'

export default function PostList({ initialPosts }) {
  const [posts, setPosts] = useState(initialPosts)

  return (
    <div>
      {posts.map((post) => (
        <article
          key={post.slug}
          className="blog-card-gradient-border blog-card"
        >
          <Image
            src="https://placehold.co/150x150"
            width={150}
            height={150}
            alt={`Thumbnail for ${post.title}`}
            className="blog-card-image"
            unoptimized
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

      <div className="text-center mt-8">
        <button className="py-2 px-4 bg-gray-200 rounded-sm cursor-pointer">
          Load More...
        </button>
      </div>
    </div>
  )
}
