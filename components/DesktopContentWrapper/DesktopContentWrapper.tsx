import { createElement, ReactHTML } from 'react'

import clsx from 'clsx'

import style from './DesktopContentWrapper.module.css'

type Props = {
  className?: string
  as?: keyof ReactHTML
}

export const DesktopContentWrapper: React.FC<Props> = ({
  as = 'div',
  children,
  className,
}) => createElement(as, { className: clsx(style.root, className) }, children)
