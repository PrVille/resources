export interface Resource {
  title: string
  description: string
  url: string
}

export interface Category {
  name: string
  resources: Resource[]
}
