import { HTMLAttributes } from 'react';
import { DetailedHTMLProps } from 'react';
export interface LogoProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: 'black' | 'white'
}