interface ProjectCardProps {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  className = "",
  children,
}) => {
  return (
    <div
      tabIndex={0}
      className={`hover:bg-neutral-800 focus-visible:outline-2 focus-visible:outline-gray-300 cursor-pointer bg-neutral-900 rounded-lg  z-10 text-white w-96 border border-gray-700 p-8 ${className}`}
    >
      <h2 className="text-2xl font-bold mb-4 font-marcellus">{title}</h2>
      <p>{description}</p>
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
};

export default ProjectCard;
