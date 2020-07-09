/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import getShareImage from "@jlengstorf/get-share-image"

function SEO({ lang, title, pathname, description }) {
  console.log("SEO -> title", title)
  console.log("SEO -> description", description)
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null

  const socialImage = getShareImage({
    title: title,
    tagline: description,
    cloudName: "martin-cartledge-blog",
    imagePublicID: "martin-blog-template_oashlq",
    titleFont: "montserrat",
    taglineFont: "montserrat",
    titleExtraConfig: "_bold",
    textColor: "232129",
  })

  console.log("SEO -> socialImage", socialImage)

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={
        canonical
          ? [
              {
                rel: "canonical",
                href: canonical,
              },
            ]
          : []
      }
    >
      <title>{title}</title>
      <meta name="description" content={title} />
      <meta name="image" content={socialImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={site.siteMetadata.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={title} />
      <meta name="twitter:image" content={socialImage} />
    </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
