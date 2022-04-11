import { useRouter } from 'next/router'
import { Nullable } from '@tryghost/content-api'
import Image from 'next/image'

import Arrow from 'public/icons/arrow.svg'
import { DesktopContentWrapper } from 'components/DesktopContentWrapper'
import style from './Post.module.css'

type Props = {
  title?: string
  __html: string
  slug: string
  featureImage?: Nullable<string> | undefined
}

export const Post: React.FC<Props> = ({
  __html,
  title,
  slug,
  featureImage,
}) => {
  const { back } = useRouter()

  return (
    <main className="inner">
      <header className="article-header gh-canvas">
        <button
          type="button"
          aria-label="Назад"
          className={style.backButton}
          onClick={() => back()}
        >
          <Arrow className={style.icon} /> Назад
        </button>
        <h1 className={style.title}>{title}</h1>
      </header>
      {featureImage && (
        <figure className="article-header gh-canvas">
          <Image
            src={featureImage}
            alt={title}
            height={50}
            width={50}
            // layout="fill"
            // objectFit="contain"
            sizes={`
              (max-width: 350px) 350px,
              (max-width: 530px) 530px,
              (max-width: 710px) 710px,
              (max-width: 1170px) 1170px,
              (max-width: 2110px) 2110px, 2000px
            `}
          />
        </figure>
      )}
      <article
        className={`post-full gh-content gh-canvas ${style.post}`}
        dangerouslySetInnerHTML={{ __html }}
      />
    </main>
  )
}
