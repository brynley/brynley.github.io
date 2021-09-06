import React from "react";
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router-dom'

const Head = () => {
  const page = useLocation().pathname
  const pageName = page.replace('/', '').replace(/^[a-zA-Z]/gm, (firstCharacter) => {
    return firstCharacter.toUpperCase()
  })

  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{page ==='/' ? 'Brynley Langman' : pageName}</title>
      <link rel="canonical" href={`https://bryn.cc/${pageName}`} />
    </Helmet>
  )
}

export default Head
