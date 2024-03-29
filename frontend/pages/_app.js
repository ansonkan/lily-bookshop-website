// Note: This is not a `tsx` file because that doesn't seem to be working with `windi`
import 'windi.css'
import '@styles/global.scss'
import Head from 'next/head'

import { Toolbar } from '@components'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <div>
        <Toolbar />

        <main className="page">
          <Component {...pageProps} />
        </main>

        {/* Footer */}
        <div className="footer">
          <div className="title">Lily Bookshop</div>
        </div>
      </div>
    </>
  )
}

export default MyApp
