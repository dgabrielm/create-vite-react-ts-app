import React, { MouseEventHandler } from 'react'
import styles from './styles.module.scss'

interface ButtonProps {
  label: string
  handleClick: MouseEventHandler
}

function Button({ label, handleClick }: ButtonProps) {
  return (
    <button
      className={styles.button}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

export default Button
export type { ButtonProps }
