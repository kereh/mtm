import { IMenu, ISite, ICourse, IGalleryImagesList } from "@/types"

export const productAndMenu: Array<IMenu> = [
  {
    title: "Photography",
    link: "/photography",
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

export const courses: Array<ICourse> = [
  {
    name: "Computer Courses",
    description: "Computer Courses for Beginners",
    amount: 500000,
    per: "week",
    benefits: [
      { benefit: "Instruktur Berkualitas" },
      { benefit: "Komunitas Belajar" },
      { benefit: "Sertifikat Kelulusan" },
    ],
  },
  {
    name: "English Courses",
    description: "English Courses for Beginners",
    amount: 900000,
    per: "month",
    benefits: [
      { benefit: "Instruktur Berkualitas" },
      { benefit: "Komunitas Belajar" },
      { benefit: "Sertifikat Kelulusan" },
    ],
  }
]

export const site: ISite = {
  title: "MTM - Manguni Teknik Multimedia",
  description: "We are a creative team that ventures high in delivering extraordinary visuals and digital experiences. As a company focused on videography, photography and web development, we combine technical expertise with artistic imagination to create engaging content and innovative digital solutions.",
  keywords: [
    "Web Designer",
    "Web Developer",
    "Photography",
    "Photographer",
    "Videography",
    "Videographer",
  ],
  site: "https://mtm-kereh.vercel.app/",
  authors: [
    { name: "Ronaldo Kereh", url: "https://www.github.com/kereh" },
    { name: "Armando Loho", url: "https://www.instagram.com/armandoloho" }
  ],
  images: ["/img/og/mtm.png"],
  locale: "id_ID",
  type: "website"
}

export const galleryImagesList: IGalleryImagesList = {
  images: [
    {
      url: "/img/gallery/01.jpg",
      urlto: "https://www.instagram.com/p/CH9rjFVAnwq/"
    },
    {
      url: "/img/gallery/02.jpg",
      urlto: "https://www.instagram.com/p/CF4eufRgSOW/"
    },
    {
      url: "/img/gallery/03.jpg",
      urlto: "https://www.instagram.com/p/CYdu7rolEGx/"
    },
    {
      url: "/img/gallery/04.jpg",
      urlto: "https://www.instagram.com/p/CJpvo-QA16B/"
    },
    {
      url: "/img/gallery/05.jpg",
      urlto: "https://www.instagram.com/p/B9-fyK3AGoW/"
    },
    {
      url: "/img/gallery/06.jpg",
      urlto: "https://www.instagram.com/p/B9oUm-UAYaC/"
    },
    {
      url: "/img/gallery/07.jpg",
      urlto: "https://www.instagram.com/p/BtFpBXHA3ws/"
    },
    {
      url: "/img/gallery/08.jpg",
      urlto: "https://www.instagram.com/p/By64lqmgzen/"
    },
    {
      url: "/img/gallery/09.jpg",
      urlto: "https://www.instagram.com/p/BhEU2IdBLXW/"
    },
    {
      url: "/img/gallery/10.jpg",
      urlto: "https://www.instagram.com/p/BXxAujYhIC3/"
    },
  ]
}