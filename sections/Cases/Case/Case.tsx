import Image from 'next/image'
import style from './Case.module.css'
import Link from 'next/link'
import clsx from 'clsx'

type Props = {
  className?: string
  title?: string
  excerpt?: string
  image?: string | null
  slug: string
}

export const Case: React.FC<Props> = ({
  className,
  image,
  slug,
  excerpt,
  title,
}) => {
  return (
    <Link href={`/post/${slug}`}>
      <a
        href={`/post/${slug}`}
        className={clsx(className, style.case, {
          [style.withImage]: image,
        })}
      >
        {image && (
          <Image
            className={style.image}
            layout="fill"
            objectFit="cover"
            src={image}
            quality={40}
            alt={title}
          />
        )}
        <h3>{title}</h3>
        {excerpt && <p>{excerpt}</p>}
      </a>
    </Link>
  )
}
