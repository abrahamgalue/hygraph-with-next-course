import { Graffle } from 'graffle'

const hygraphClient = Graffle.create().transport({
  url: process.env.HYGRAPH_ENDPOINT,
})

export const QUERIES = {
  aboutPage: hygraphClient.gql`
		query AboutPage {
			page(where: {slug: "about"}) {
				title
				content {
					raw
				}
			}
		}
	`,
  posts: hygraphClient.gql`
		query Posts {
			posts(orderBy: publishedAt_DESC) {
				title
				summary
				thumbnail {
					url
				}
				slug
			}
		}
	`,
  postBySlug: hygraphClient.gql`
		query PostBySlug($slug: String!) {
			post(where: {slug: $slug}) {
				title
				summary
				content {
					raw
				}
				createdBy {
					name
				}
			}
		}
	`,
}
