import { createRef, RefObject, useCallback, useEffect, useState } from 'react'

import cn from 'clsx'

import Burger from 'public/icons/burger.svg'

import { DesktopContentWrapper } from '../DesktopContentWrapper'

import style from './Header.module.css'
import { SideMenu } from './SideMenu/SideMenu'

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isStickyHeader, setIsStickyHeader] = useState(false)
  const ref: RefObject<HTMLElement> = createRef()

  const stickyHeader = () => {
    if (!ref.current) return

    if (window.scrollY > ref.current.offsetHeight) {
      setIsStickyHeader(true)
    } else {
      setIsStickyHeader(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', stickyHeader)
    window.addEventListener('resize', stickyHeader)

    return () => {
      window.removeEventListener('scroll', stickyHeader)
      window.removeEventListener('resize', stickyHeader)
    }
  })

  const switchMenu = useCallback(() => {
    setIsMenuOpen(!isMenuOpen)
  }, [isMenuOpen])

  const headerContent = () => (
    <DesktopContentWrapper className={style.contentContainer}>
      <button
        type="button"
        aria-label="Открыть меню"
        onClick={switchMenu}
        className={style.burger}
      >
        <Burger className={style.icon} />
      </button>
      <h1>
        <span>Маркетолог</span> Марина
      </h1>
    </DesktopContentWrapper>
  )

  return (
    <>
      <SideMenu open={isMenuOpen} onClose={switchMenu} />
      <header
        className={cn(style.stickyHeader, {
          [style.stickyHeaderVisible]: isStickyHeader,
        })}
        ref={ref}
      >
        {headerContent()}
      </header>
      <header className={style.header} ref={ref}>
        {headerContent()}
      </header>
    </>
  )
}
