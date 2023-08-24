interface IMenu {
  title: string
  link: string
  desc?: string
}

export const menus: Array<IMenu> = [
  {
    title: "Photography",
    link: "/products",
    desc: "We have professional photographers"
  },
  {
    title: "Videography - Film",
    link: "/videography-film",
    desc: "We also do videography and film"
  },
  {
    title: "Web Developer",
    link: "/web",
    desc: "We Also Provide a Profesionals Web Developers"
  }
]