import React from 'react'

import cn from 'clsx'

import style from './Button.module.css'

export type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: (e: React.MouseEvent) => void
  variant?: 'primary' | 'secondary' | 'transparent'
  className?: string
  size?: 'medium' | 'large'
}

export const Button: React.FC<Props> = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  type = 'button',
  size = 'large',
  ...props
}) => (
  <button
    className={cn(
      className,
      style.button,
      style[variant],
      style[size],
      style[size],
    )}
    onClick={onClick}
    type={type}
    {...props}
  >
    {children}
  </button>
)
