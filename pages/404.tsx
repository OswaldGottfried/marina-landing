import Link from 'next/link'
import React from 'react'

import style from './404.module.css'

const Default404 = () => (
  <div className={style.default404}>
    <h1>
      <span>Упс! Страница не найдена</span>
    </h1>
    <p>Запрашиваемая страница не найдена.</p>
    <Link href="/">
      <a href={'/'}>
        <p>Вернуться на главную</p>
      </a>
    </Link>
  </div>
)

export default Default404
