import { Footer } from 'components/Footer/Footer'
import { Header } from 'components/Header/Header'
import clsx from 'clsx'

import style from './Template.module.css'

type Props = {
  className?: string
}

const Template: React.FC<Props> = ({ children, className }) => (
  <>
    <Header />
    <main className={clsx(style.main, className)}>{children}</main>
    <Footer />
    {/* <div className={style.background}></div> */}
  </>
)

export default Template
