import 'styles/variables.css'
import 'styles/ghost/global.css'
import 'styles/ghost/screen.css'
import type { AppProps } from 'next/app'

import style from './_app.module.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Component {...pageProps} />
    <div className={style.background}></div>
  </>
)

export default MyApp
