import clsx from 'clsx'

import { CTAButton } from 'components/CTAButton/CTAButton'
import Image from 'next/image'

import style from './TextWithImageBlock.module.css'

type Props = {
  className?: string
  title: string
  description: string
  result: string
}

export const TextWithImageBlock: React.FC<Props> = ({
  className,
  title,
  description,
  result,
}) => {
  return (
    <div className={clsx(className, style.root)}>
      <div className={style.imageColumn}>
        <Image objectFit="cover" layout="fill" src="/case.webp" alt={`Кейс`} />
      </div>

      <div className={style.descriptionColumn}>
        <h3>{title}</h3>
        <div>
          <h4>Описание:</h4>
          <p>{description}</p>
        </div>
        <div>
          <h4>Результаты:</h4>
          <p>{result}</p>
        </div>

        {/* <hr className={style.hr} />
        {textList.map(({ title, text }) => list(title, text))} */}
        <CTAButton className={style.button} size="medium" variant="secondary" />
      </div>
    </div>
  )
}
