interface IMenu {
  title: string
  link: string
  desc: string
}

export const menus: Array<IMenu> = [
  {
    title: "Photography",
    link: "https://www.armandoloho.com",
    desc: "We have professional photographers"
  },
  {
    title: "Videography - Film",
    link: "https://www.aurorafilm.id",
    desc: "We also do videography and film"
  },
  {
    title: "Web Developer",
    link: "/",
    desc: "We Also Provide a Profesionals Web Developers"
  }
]