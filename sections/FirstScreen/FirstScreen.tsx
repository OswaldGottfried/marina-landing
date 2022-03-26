import Image from 'next/image'

import { CTAButton } from 'components/CTAButton/CTAButton'
import { DesktopContentWrapper } from 'components/DesktopContentWrapper'

import style from './FirstScreen.module.css'

export const FirstScreen: React.FC = () => (
  <section className={style.wrapper}>
    <DesktopContentWrapper as="div" className={style.actionContainer}>
      <div className={style.inline}>
        <div>
          <h1 className={style.actionText}>
            <span>Маркетолог,</span>
            Которого
            <br />
            Мы
            <br />
            Заслужили
          </h1>
          <CTAButton className={style.button} />
        </div>
        <div className={style.image}>
          <Image
            src="/Marina.webp"
            alt="Марина Молитвина"
            width={500}
            height={900}
          ></Image>
        </div>
      </div>
    </DesktopContentWrapper>
  </section>
)
