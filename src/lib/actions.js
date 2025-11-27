'use server'

import { QUERIES } from '@/lib/hygraph'

export async function getAboutPage() {
  const res = await QUERIES.aboutPage.send()

  return res.page
}
