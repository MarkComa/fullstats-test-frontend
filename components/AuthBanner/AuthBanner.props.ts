import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface AuthBannerProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  banner?: string
}