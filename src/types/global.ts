export interface Resource {
  title: string
  description: string
  url: string
}

export interface Subcategory {
  name: string
  resources: Resource[]
}

export interface Category {
  name: string
  subcategories: Subcategory[]
}
