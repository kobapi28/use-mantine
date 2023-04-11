import { Button as MantineButton, createStyles, rem } from '@mantine/core'
import { type ButtonHTMLAttributes } from 'react'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
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
    color: 'white',
    ':hover': {
      backgroundColor: 'black'
    }
  }
}))

export const Button = (props: Props) => {
  const { variant = 'normal', size = 'm' } = props

  const { classes } = useStyles()
  return (
    <MantineButton styles={() => ({
      root: {
        backgroundColor: variant === 'danger' ? 'red' : 'green',
        height: size === 's' ? rem(20) : rem(40)
      }
    })} className={classes.button}>button</MantineButton>
  )
}
