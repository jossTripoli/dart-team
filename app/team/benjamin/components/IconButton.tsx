
 
import { Button } from "@/components/ui/button"
export function IconButton({link, logo}) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
  <Button variant="outline" size="icon">
    {logo}
  </Button>
</a>
  )
}