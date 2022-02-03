import ProjectItem from "../projectItem"
import { Stack } from "@chakra-ui/react"

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Food Truck Web Application",
      description:
        "A food truck application that allows users to create and manage their own food trucks."
    },
    {
      id: 2,
      name: "Contacts Application for Android",
      description:
        "A contacts application that allows users to create and manage their network."
    }
  ]
  return (
    <Stack spacing={12} w="100%" mt={32}>
      {projects.map(project => (
        <ProjectItem key={project.id} {...project} />
      ))}
    </Stack>
  )
}

export default Projects
