export interface Resource {
  title: string
  description: string
  url: string
  categories: string[]
}

export interface Category {
  name: string
  resources: Resource[]
}
