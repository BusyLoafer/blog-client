export type StoreAction = {
  type: string,
  value: any
}

export type Article = {
  id: number | undefined,
  title: string,
  text: string,
  published: boolean
}

// ? Contactss

export type Group = {
  id?: number,
  title: string,
  description: string
}

export type Contact = {
  id?: number,
  title: string,
  description: string
}

export type Person = {
  id?: number,
  firstName: string,
  secondName: string,
  lastName: string,
  description: string,
  gender: boolean,
  date?: string | null,
  group: Group | null
}

// ? Food

export type Product = {
  id?: number,
  title: string,
  description: string
}

export type Dish = {
  id?: number,
  title: string,
  description: string,
  resipe: string,
  products: Product[]
}

export type Meal = {
  
}
