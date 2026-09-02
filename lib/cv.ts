import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

export function getCv() {
  const raw = fs.readFileSync(path.join(process.cwd(), "content/cv.md"), "utf8")
  return matter(raw)
}
