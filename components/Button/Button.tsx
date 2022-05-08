import React from 'react'
import s from './Button.module.scss'
import cn from 'classnames'
import {ButtonProps} from './Button.props'

export const Button = ({apparance, color = 'white', children, className, ...props}:ButtonProps):JSX.Element => { 
  return <button
  className={cn(s.btn, className, {
          [s.primary]: apparance=='primary',
          [s.white]: apparance=='white',
          [s.transparent]: apparance=='transparent',
          [s.colorWhite]: color=='white',
          [s.colorBlue]: color=='blue',

  })}
  {...props}
  >
          {children}
  </button>
} 