// Note: This is not a `tsx` file because that doesn't seem to be working with `windi`
import 'windi.css'
import '@styles/global.scss'

import { Toolbar } from '@components'

function MyApp({ Component, pageProps }) {
  return (
    <div className="root">
      <Toolbar />

      <main className="page">
        <Component {...pageProps} />
      </main>

      {/* Footer */}
    </div>
  )
}

export default MyApp
