import Link from 'next/link';
interface Project {
  id: string;
  title: string;
  description: string;
  date: string;
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
              <h2 className="text-xl font-bold text-black">{project.title}</h2><p className='text-gray-400 '>({project.date})</p>

              <p className='text-black'>{project.description}</p>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectsList;
