import { Button as MantineButton, createStyles, rem } from '@mantine/core'
import { type ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<'button'> & {
  /**
   * @default normal
   */
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'normal'
  /**
   * @default m
   */
  size?: 's' | 'm' | 'l'
}

const useStyles = createStyles(() => ({
  button: {
    root: {
      height: rem(40),
      color: 'green',
      backgroundColor: 'white'
    }
  }
}))

export const Button = (props: Props) => {
  // const { variant = 'normal', size = 'm' } = props

  const { classes, cx } = useStyles()
  return (
    <MantineButton className={cx(classes)}>button</MantineButton>
  )
}
