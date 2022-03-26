import { DesktopContentWrapper } from 'components/DesktopContentWrapper'
import { LINK } from 'constants/'
import style from './Footer.module.css'

export const MARINA_OFFICIAL = `(с) ${new Date().getFullYear()} Марина Молитвина`

export const Footer: React.FC = () => (
  <DesktopContentWrapper as="footer" className={style.footer}>
    <p className={style.links}>
      <a href={LINK.INSTAGRAM}>Instagram</a>
      <a href={LINK.VK}>VK</a>
      <a href={LINK.TELEGRAM}>Telegram</a>
    </p>
    <p>{MARINA_OFFICIAL}</p>
  </DesktopContentWrapper>
)
