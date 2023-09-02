import { courses } from "@/config/site"
import CourseCard from "@/components/courses/course-card"

export default function CourseMain() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 items-center gap-6 my-10">
      {courses.map((course, index) => (
        <CourseCard
          key={index}
          name={course.name}
          description={course.description}
          amount={course.amount}
          per={course.per}
          benefits={course.benefits}
        />
      ))}
    </div>
  )
}