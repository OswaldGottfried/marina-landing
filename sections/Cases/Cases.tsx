import { DesktopContentWrapper } from 'components/DesktopContentWrapper'
import style from './Cases.module.css'
import { PostOrPage } from '@tryghost/content-api'
import { Case } from './Case/Case'

type Props = {
  cases: PostOrPage[]
}

export const Cases: React.FC<Props> = ({ cases }) => {
  let title = []
  for (let index = 0; index < 8; index++) {
    title.push('Кейсы?')
    title.push('А что ты делаешь?')
    title.push('Что по проектам?')
    title.push('SMM?')
    title.push('Упаковка страниц?')
  }

  const half = Math.ceil(cases.length / 2)

  const firstColumn = cases.slice(0, half)
  const secondColumn = cases.slice(-half)

  return (
    <>
      <div className={style.marquee}>
        <h2 className={style.marqueeText}>
          {title.map((text, index) => (
            <span key={index}>{text}</span>
          ))}
        </h2>
      </div>
      <DesktopContentWrapper as="section" className={style.cases}>
        <div className={style.column}>
          {firstColumn.map(
            ({ id, title, slug, excerpt, feature_image: featureImage }) => (
              <Case
                key={id}
                image={featureImage}
                title={title}
                slug={slug}
                excerpt={excerpt}
              />
            ),
          )}
        </div>
        <div className={style.column}>
          {secondColumn.map(({ id, title, slug, excerpt }) => (
            <Case key={id} title={title} slug={slug} excerpt={excerpt} />
          ))}
        </div>
      </DesktopContentWrapper>
    </>
  )
}
