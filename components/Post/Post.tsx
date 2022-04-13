import { useRouter } from 'next/router'
import { Nullable } from '@tryghost/content-api'
import Image from 'next/image'

import Arrow from 'public/icons/arrow.svg'
import style from './Post.module.css'

type Props = {
  title?: string
  __html: string
  featureImage?: Nullable<string> | undefined
}

export const Post: React.FC<Props> = ({ __html, title, featureImage }) => {
  const { back } = useRouter()

  return (
    <main className={style.post}>
      <div className="container large">
        <button
          type="button"
          aria-label="Назад"
          className={style.backButton}
          onClick={() => back()}
        >
          <Arrow className={style.icon} /> Назад
        </button>
      </div>
      <header className="gh-canvas post-header container large">
        <h1 className="post-title">{title}</h1>
      </header>
      {featureImage && (
        <figure className="post-media container large">
          <Image
            src={featureImage}
            alt={title}
            height={50}
            width={50}
            objectFit="cover"
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
        className="post-content gh-content kg-canvas"
        dangerouslySetInnerHTML={{ __html }}
      />
    </main>
  )
}
