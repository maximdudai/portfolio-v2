import projects from './projects.json';

import { GoLinkExternal } from "react-icons/go";
import { AiFillCode } from "react-icons/ai";
import { Link } from 'react-router';

interface Project {
    name: string;
    logo: string;
    description: string;
    technologies: string[];
    url?: string;
}

const typedProjects: Project[] = projects;
const images = import.meta.glob('./imgs/*.{png,jpg,jpeg,gif}', { eager: true });
const logoMap: Record<string, string> = {};

typedProjects.forEach((project) => {
    const imageName = project.logo.split('/').pop();
    const imagePath = `./imgs/${imageName}`;
    if (images[imagePath]) {
        logoMap[project.name] = (images[imagePath] as { default: string }).default;
    }
});

export default function Projects() {
    return (
        <div id="projects" className="w-full flex flex-col">
            {typedProjects.map((project) => (
                <div key={project.name} className="group mb-5 flex flex-col gap-5 lg:gap-0 lg:flex-row items-start lg:items-center cursor-pointer hover:bg-slate-600/20 rounded-md lg:p-2">
                    <div className="projectLogo md:w-1/3">
                        <img
                            className="lg:w-30 h-auto rounded-md group-hover:border-[2px] group-hover:border-slate-600"
                            src={logoMap[project.name]}
                            alt={`${project.name} logo`}
                        />
                    </div>
                    <div className="projectDetails w-full text-slate-500 group-hover:text-slate-200 transition-all duration-100 ease-in-out">
                        <h4 className="text-xl font-semibold flex items-center">
                            {project.name}
                            {project.url && (
                                <Link to={project.url} target="_blank" rel="noopener noreferrer">
                                    <GoLinkExternal className='ml-2' />
                                </Link>
                            )}
                        </h4>
                        <p className="text-slay-600">{project.description}</p>
                        <div className="technologies flex flex-wrap gap-3">
                            {project.technologies.map((tech) => (
                                <span key={tech} className="text-sm text-emerald-500 bg-emerald-900/35 px-5 py-1 rounded-md">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
            <div className="viewFullResume mt-5">
                <Link className='text-sm border-b-[1px] border-b-slate-500 hover:bg-slate-500/20 transition-all duration-100 ease-in-out py-2 hover:rounded-md hover:px-1 flex items-center' to="/archive">
                    View Projects Archive
                    <span className="ml-2">
                        <AiFillCode />
                    </span>
                </Link>
            </div>
        </div>
    );
}