import { CTAButton } from 'components/CTAButton/CTAButton'
import { DesktopContentWrapper } from 'components/DesktopContentWrapper'

import style from './FirstScreen.module.css'

export const FirstScreen: React.FC = () => (
  <section className={style.wrapper}>
    <DesktopContentWrapper as="div" className={style.actionContainer}>
      <h1 className={style.actionText}>
        Помогаю
        <br />
        Бизнесам
        <br />
        <span>Зарабатывать</span>
      </h1>
      <CTAButton className={style.button} />
    </DesktopContentWrapper>
  </section>
)
