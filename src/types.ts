export interface IBuyCourse {
  name: string,
  amount: string
}

export interface ICourseSheet {
  formattedAmount: string
  name: string
  per: string
}

export interface ICourse {
  name: string
  description: string
  amount: number
  per: "week" | "month" | "year"
  benefits: Array<{ benefit: string }>
}

export interface ICurrency {
  amount: number
  code: string
}

export interface IMessage {
  course: string
  customer: string
  address: string
  phone: string
}

export interface IProductCard {
  title: string
  img: string
  link: string
}

export interface IMenu {
  title: string
  link: string
  desc: string
  img: string
}

export interface ISite {
  title: string
  description: string
  keywords: Array<string>
  site: string
  authors: Array<{
    name: string
    url: string
  }>
  type: string
  locale: string
  images: Array<string>
}