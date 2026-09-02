import { Badge } from "@/components/ui/badge"

type SkillsGroupProps = {
  areas: string[]
  technologies: string[]
}

function SkillColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="font-heading text-base font-medium text-foreground">
        {title}
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <Badge
            key={item}
            variant="secondary"
            className="text-xs leading-relaxed"
          >
            {item}
          </Badge>
        ))}
      </div>
    </div>
  )
}

export function SkillsGroup({ areas, technologies }: SkillsGroupProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      <SkillColumn title="Areas" items={areas} />
      <SkillColumn title="Technologies" items={technologies} />
    </div>
  )
}
