import { useModalsContext, Modals } from 'utils/context'

import { Button, Props as ButtonProps } from '../Button/Button'

type Props = Omit<ButtonProps, 'onClick'> & {
  className?: string
}

export const CTAButton: React.FC<Props> = ({ className, ...props }) => {
  const { showModal } = useModalsContext(Modals.form)

  const handleButtonClick = () => {
    showModal()
  }

  return (
    <Button className={className} onClick={handleButtonClick} {...props}>
      Связаться со мной
    </Button>
  )
}
