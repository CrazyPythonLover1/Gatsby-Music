import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import data from "../data/artist.json"
import Artist from "../components/artist"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Artist band={data.allDataJson.edges[0].node.Bayside} />
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  {
    allDataJson {
      edges {
        node {
          Bayside {
            Origin 
            Genre
            Biography
          }
        }
      }
    }
  }
`
