import Link from 'next/link';
interface Project {
  id: string;
  title: string;
  description: string;
}

interface ProjectsListProps {
  projects: Project[];
}

const ProjectsList: React.FC<ProjectsListProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <div key={project.id} className="border p-4 cursor-pointer hover:shadow-lg transition duration-300">
          <Link legacyBehavior href={`/projects/${project.id}`}>
            <a>
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p>{project.description}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
