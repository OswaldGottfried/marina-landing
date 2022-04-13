import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import style from './PostCard.module.css'

type Props = {
  className?: string
  title?: string
  excerpt?: string
  image?: string | null
  slug: string
}

export const PostCard: React.FC<Props> = ({
  className,
  image,
  slug,
  excerpt,
  title,
}) => {
  return (
    <article
      className={clsx(className, style.postCard, {
        [style.backgroundColor]: !image,
        [style.withImage]: image,
      })}
    >
      <Link href={`/post/${slug}`}>
        <a href={`/post/${slug}`}>
          {image && (
            <Image
              objectFit="cover"
              className={style.image}
              height={300}
              width={600}
              src={image}
              quality={40}
              alt={title}
            />
          )}
          <div className={style.description}>
            <h3 className={style.title}>{title}</h3>
            {excerpt && <p>{excerpt}</p>}
          </div>
        </a>
      </Link>
    </article>
  )
}
