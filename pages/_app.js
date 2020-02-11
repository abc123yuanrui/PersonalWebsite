import '../styles.css'
import App from 'next/app'

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}