import { DesktopContentWrapper } from 'components/DesktopContentWrapper'
import style from './Cases.module.css'
import { CASES } from './casesFixture'
import { TextWithImageBlock } from 'components/TextWithImageBlock/TextWithImageBlock'

export const Cases = () => {
  let title = []
  for (let index = 0; index < 10; index++) {
    title.push('Кейсы?')
    title.push('А что ты делаешь?')
    title.push('Что по проектам?')
  }

  return (
    <>
      <div className={style.marquee}>
        <h2 className={style.marqueeText}>
          {title.map((text, index) => (
            <span key={index}>{text}</span>
          ))}
        </h2>
      </div>
      <DesktopContentWrapper as="section">
        {CASES.map(({ title, description, result }, index) => (
          <TextWithImageBlock
            key={index}
            title={title}
            description={description}
            result={result}
          />
        ))}
      </DesktopContentWrapper>
    </>
  )
}
