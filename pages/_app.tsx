import 'styles/globals.css'
import type { AppProps } from 'next/app'

import style from './_app.module.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <div className={style.background}></div>
  </>
)

export default MyApp
