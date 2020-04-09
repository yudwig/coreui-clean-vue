export interface CoreUiNavLinksPresentation {
  navLinks: {
    name: string,
    to: string,
    icon: string,
    badge?: {
      variant?: string
    },
    attributes?: {
      class?: string
    }
  }[]
}

