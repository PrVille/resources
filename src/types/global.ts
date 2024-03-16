export type CategoryName =
  | "Favorites"
  | "AI and Machine Learning"
  | "Animation"
  | "APIs and Data"
  | "Cloud Services and Infrastructure"
  | "Code Snippets and Cheatsheets"
  | "Coding Practice and Challenges"
  | "Community"
  | "Cybersecurity and Privacy"
  | "Design and UI"
  | "Development Tools and Extensions"
  | "Documentation and Reference"
  | "Frameworks and Libraries"
  | "Game Development"
  | "Icons and Images"
  | "Inspiration"
  | "Interview and Career"
  | "Learning and Tutorials"
  | "Python"
  | "Resources"
  | "YouTube"

export interface Resource {
  title: string
  description: string
  url: string
  categories: Exclude<CategoryName, "Favorites">[]
}

export interface Category {
  name: CategoryName
  resources: Resource[]
}
