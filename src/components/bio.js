/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import profilePic from "../images/profile-avatar.jpg"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <Link to="/">
        <img src={profilePic} alt={`Pero Wong`} className="bio-avatar" />
      </Link>
      {author?.name && (
        <p>
          Personal blog by {` `}
          <a
            href={`https://twitter.com/${social?.twitter || ``}`}
            target="_blank"
            rel="noreferrer"
          >
            <strong>{author.name}</strong>
          </a>
          .
          <br />
          {author?.summary || null}
        </p>
      )}
    </div>
  )
}

export default Bio
