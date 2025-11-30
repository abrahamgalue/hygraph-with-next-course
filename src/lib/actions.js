'use server'

import { QUERIES } from './hygraph'

export async function getAboutPage() {
  const res = await QUERIES.aboutPage.send()

  return res.page
}

export async function getPosts(cursor = null) {
  const res = await QUERIES.posts.send({ cursor })

  const { posts, pageInfo } = res.postsConnection

  return { posts, pageInfo }
}

export async function getPostBySlug(slug) {
  const res = await QUERIES.postBySlug.send({ slug })

  return res.post
}
