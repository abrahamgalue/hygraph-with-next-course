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
		query Posts($cursor: String) {
      postsConnection(orderBy: publishedAt_DESC, first: 3, after: $cursor) {
        posts: edges {
          cursor
          post: node {
            slug
            summary
            title
						thumbnail {
              url
            }
            content {
              html
            }
          }
        }
        pageInfo {
          endCursor
          hasNextPage
        }
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
  postsByAuthor: hygraphClient.gql`
		query PostsByAuthor($name: String!) {
			posts(first: 3, where: {updatedBy: {name: $name}}) {
				slug
				title
			}
		}
	`,
}
