// Note: This is not a `tsx` file because that doesn't seem to be working with `windi`

import '../styles/globals.css'
import 'windi.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp