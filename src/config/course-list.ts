import { ICourse } from "@/types"

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