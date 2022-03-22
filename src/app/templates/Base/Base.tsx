import React from "react";
import Navigation from '../../components/Navigation'
import Head from '@components/Head'

import { BaseTypes } from './Base.types'

const Base = ({ pageTitle, pagePath, children }: BaseTypes) => {

  return (
    <>
    <Head pageTitle={pageTitle} pagePath={pagePath} />
    <main>
      {children}
      <Navigation />
    </main>
    </>
  )
}

export default Base
