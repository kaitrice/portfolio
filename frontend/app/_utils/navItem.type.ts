import { ReactNode } from "react"

export type NavItem = {
  item: {
    url: string
    name: ReactNode
  }
  className?: string
}