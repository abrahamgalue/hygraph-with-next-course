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
					html
				}
			}
		}
	`,
}
