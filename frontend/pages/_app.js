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
      </Head>

      <div className="root">
        <Toolbar />

        <main className="page">
          <Component {...pageProps} />
        </main>

        {/* Footer */}
      </div>
    </>
  )
}

export default MyApp
