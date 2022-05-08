import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
  children: ReactNode;
  apparance: 'primary' | 'white' | 'transparent';
  color?: 'white' | "blue"
}