import { useRouter } from 'next/router'

import Arrow from 'public/icons/arrow.svg'
import { DesktopContentWrapper } from 'components/DesktopContentWrapper'
import style from './Post.module.css'

type Props = {
  title?: string
  __html: string
}

export const Post: React.FC<Props> = ({ __html, title }) => {
  const { back } = useRouter()

  return (
    <DesktopContentWrapper>
      <button
        type="button"
        aria-label="Назад"
        className={style.backButton}
        onClick={() => back()}
      >
        <Arrow className={style.icon} /> Назад
      </button>
      <h1>{title}</h1>
      <article className={style.post} dangerouslySetInnerHTML={{ __html }} />
    </DesktopContentWrapper>
  )
}
