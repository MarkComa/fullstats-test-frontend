import React from 'react'
import { AuthBannerProps } from './AuthBanner.props'
import Logo from '../../assets/images/logo.svg'

export const AuthBanner = ({banner,className, ...props}: AuthBannerProps) => {
  return (
    <div {...props}>
      <img src={Logo.src} alt='logo' />
      <span>FullStats</span>
      {banner && <img src={banner} alt='banner' />}
    </div>
  )
}
