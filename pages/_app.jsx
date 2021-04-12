import Head from 'next/head'
import React, { useState } from 'react'
import { GeistProvider, CssBaseline, Page } from '@geist-ui/react'
import PageHeader from '@/components/Header'
import PageFooter from '@/components/Footer'
import Navbar from '@/components/Navbar/Navbar'


function MyApp({ Component, pageProps }) {
  const [themeType, setThemeType] = useState('light')

  const switchTheme = () => setThemeType((last) => (last === 'dark' ? 'light' : 'dark'))

  // TODO put Page style in global.css

  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <div style={{ width: '100%'}}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
      <Page style={{ paddingTop: '1rem', width: '100%' }}>
        <PageHeader />
        <Page.Content>
          <Component {...pageProps} />
        </Page.Content>
        <PageFooter/>
      </Page>
      </div>
    </GeistProvider>
  )
}

export default MyApp
