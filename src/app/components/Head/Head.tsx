import React from "react";
import { Helmet } from 'react-helmet'
import { HeadProps } from './Head.types'

const Head = ({pageTitle, pagePath}: HeadProps) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{pageTitle}</title>
      <link rel="canonical" href={`https://bryn.cc/${pagePath}`} />
    </Helmet>
  )
}

export default Head
