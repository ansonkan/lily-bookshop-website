// Note: This is not a `tsx` file because that doesn't seem to be working with `windi`
import 'windi.css'
import '@styles/global.css'

import { Toolbar } from '@components'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Toolbar />

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
