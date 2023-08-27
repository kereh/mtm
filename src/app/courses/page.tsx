import CourseMain from "@/components/courses/course-main"

export default function page() {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-2xl flex flex-col gap-6 p-6">
        <div className="space-y-3 text-center">
          <h1 className="text-2xl font-extrabold">LPK Aurora</h1>
          <p className="text-muted-foreground">We also have several courses.
            Select your favorite course below.</p>
        </div>
        <CourseMain />
      </div>
    </div>
  )
}