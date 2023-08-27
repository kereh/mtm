interface IMenu {
  title: string
  link: string
  desc: string
  img: string
}

export const productAndMenu: Array<IMenu> = [
  {
    title: "Photography",
    link: "https://www.armandoloho.com",
    desc: "We have professional photographers",
    img: "/img/photography.jpg",
  },
  {
    title: "Videography - Film",
    link: "https://www.aurorafilm.id",
    desc: "We also do videography and film",
    img: "/img/videography.jpg",
  },
  {
    title: "Web Developer",
    link: "/",
    desc: "We Also Provide a Profesionals Web Developers",
    img: "/img/webdev.jpg",
  }
]