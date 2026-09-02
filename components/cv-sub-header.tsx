import { Button } from "@/components/ui/button"

export const CV_SECTIONS = [
  { id: "about", label: "About" },
  { id: "education", label: "Education" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Publications" },
  { id: "skills", label: "Skills" },
  { id: "teaching", label: "Teaching" },
  { id: "organizations", label: "Organizations" },
]

export function CvSubHeader() {
  return (
    <div className="sticky top-16 z-40 hidden border-b bg-background lg:block">
      <div className="mx-auto flex max-w-5xl items-center px-6 py-2">
        <nav className="flex min-w-0 flex-nowrap items-center gap-0.5">
          {CV_SECTIONS.map((section) => (
            <Button
              key={section.id}
              variant="ghost"
              size="sm"
              nativeButton={false}
              render={<a href={`#${section.id}`} />}
            >
              {section.label}
            </Button>
          ))}
        </nav>
      </div>
    </div>
  )
}
