/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useRef, useEffect, useState } from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { connect, dispatch } from "react-redux"
import StyleSwitcher from "./StyleSwitcher/StyleSwitcher"

const SEO = ({
  description,
  lang,
  meta,
  title,
  data,
  color,
  footer,
  mode,
  changeColorRedux,
  changeFooterRedux,
  changeLayoutRedux,
}) => {
  const getLocalStyle = () => {
    const localColor = localStorage.getItem("color")
    const localLayout = localStorage.getItem("layout")
    const localFooter = localStorage.getItem("footer")
    if (localColor) {
      changeColorRedux(localColor)
    }
    if (localLayout) {
      changeLayoutRedux(localLayout)
      const body = document.getElementsByTagName("BODY")[0]
      if (body) body.className = localLayout
    }
    if (localFooter) {
      changeFooterRedux(localFooter)
    }
  }
  const change = () => {
    changeColorRedux("pink")
  }
  useEffect(() => {
    getLocalStyle()
  })
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang,
        }}
        title={title}
        titleTemplate={`%s | ${site.siteMetadata.title}`}
        meta={[
          {
            name: `description`,
            content: metaDescription,
          },
          {
            property: `og:title`,
            content: title,
          },
          {
            property: `og:description`,
            content: metaDescription,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: site.siteMetadata.author,
          },
          {
            name: `twitter:title`,
            content: title,
          },
          {
            name: `twitter:description`,
            content: metaDescription,
          },
        ].concat(meta)}
      >
        <link
          rel="stylesheet"
          id="skinCSS"
          type="text/css"
          href={`skins/${color}.css`}
        />
      </Helmet>
    </>
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
const mapStateToProps = ({ color, footer, mode }) => {
  return { color, footer, mode }
}
const mapDispatchToProps = dispatch => {
  return {
    changeFooterRedux: footer =>
      dispatch({ type: `CHANGE_FOOTER`, footer: footer }),
    changeColorRedux: color => dispatch({ type: `CHANGE_COLOR`, color: color }),
    changeLayoutRedux: mode => dispatch({ type: `CHANGE_LAYOUT`, mode: mode }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SEO)
