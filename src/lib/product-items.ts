interface IProducts {
  title: string
  img: string,
  link: string
}

export const products: Array<IProducts> = [
  {
    title: "Photography",
    img: "/img/photography.jpg",
    link: "https://www.armandoloho.com"
  },
  {
    title: "Videography - Film",
    img: "/img/videography.jpg",
    link: "https://www.aurorafilm.id"
  },
  {
    title: "Web Developer",
    img: "/img/webdev.jpg",
    link: "/"
  }
]