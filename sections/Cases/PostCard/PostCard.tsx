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
  showImage?: boolean
}

export const PostCard: React.FC<Props> = ({
  className,
  image,
  slug,
  excerpt,
  title,
  showImage = false,
}) => {
  const isImage = image && showImage
  return (
    <article
      className={clsx(className, style.postCard, {
        [style.backgroundColor]: !isImage,
        [style.withImage]: image,
      })}
    >
      <Link href={`/post/${slug}`}>
        <a href={`/post/${slug}`}>
          {isImage && (
            <Image
              className={style.image}
              layout="fill"
              objectFit="cover"
              src={image}
              quality={40}
              alt={title}
            />
          )}
          <h3 className={style.title}>{title}</h3>
          {excerpt && <p>{excerpt}</p>}
        </a>
      </Link>
    </article>
  )
}
