export interface CoreUiNavLinksPresentation {
  navLinks: {
    name: string,
    title: string,
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

