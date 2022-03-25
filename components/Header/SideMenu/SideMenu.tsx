import React, { useRef, useEffect, memo } from 'react'
import Image from 'next/image'

import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'
import cn from 'clsx'

import { PHONE_NUMBER } from 'constants/'

import style from './SideMenu.module.css'
import { SideMenuItem } from './SideMenuItem'

type SideMenuProps = {
  open: boolean
  onClose: () => void
}

export const SideMenu = memo<SideMenuProps>(({ open, onClose }) => {
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (menuRef.current) {
      if (open) {
        disableBodyScroll(menuRef.current)
      } else {
        enableBodyScroll(menuRef.current)
      }
    }
  }, [open])

  return (
    <menu
      ref={menuRef}
      className={cn(style.menuWrapper, { [style.menuOpen]: open })}
    >
      <div className={style.menu}>
        <div className={style.firstLine}>
          <div className={style.items}>
            {/* {Object.values(PageLinks).map((page) => (
              <SideMenuItem key={page} link={page as PageLinks}>
                {PAGES_TITLE[page as PageLinks]}
              </SideMenuItem>
            ))} */}
          </div>
          <button
            type="button"
            aria-label="Закрыть"
            className={style.icon}
            onClick={onClose}
          >
            <Image
              src="/icons/close.svg"
              alt="Закрыть меню"
              className={style.phoneIcon}
              width={20}
              height={20}
            />
          </button>
        </div>
        <div className={style.grow} />
        <div className={style.menuFooter}>
          <a
            aria-label={`Позвонить по телефону ${PHONE_NUMBER}`}
            className={style.menuPhone}
            href={`tel:${PHONE_NUMBER}`}
          >
            <Image
              src="/icons/phone.svg"
              alt={PHONE_NUMBER}
              width={20}
              height={20}
            />{' '}
            {PHONE_NUMBER}
          </a>
          <div className={style.menuLabel}>СТАНЬТЕ ПРО</div>
        </div>
      </div>
    </menu>
  )
})

SideMenu.displayName = 'SideMenu'
