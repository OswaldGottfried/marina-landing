import React from 'react'

import Link from 'next/link'

type Props = {
  link: string
}

export const SideMenuItem: React.FC<Props> = ({ link, children }) => {
  return (
    // TODO: add active link
    <Link href={link}>{children}</Link>
  )
}
