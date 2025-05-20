import { ReactNode } from "react"

export type NavLinkProps = {
  item: {
    url: string
    name: ReactNode
  }
  className?: string
}