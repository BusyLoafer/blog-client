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