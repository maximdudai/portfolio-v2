import projects from './projects.json';

import { GoLinkExternal } from "react-icons/go";
import { AiFillCode } from "react-icons/ai";

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
                <div key={project.name} className="group mb-5 flex items-center cursor-pointer hover:bg-slate-600/20 rounded-md p-2">
                    <div className="projectLogo w-1/3">
                        <img
                            className="w-30 h-auto rounded-md group-hover:border-[2px] group-hover:border-slate-600"
                            src={logoMap[project.name]}
                            alt={`${project.name} logo`}
                        />
                    </div>
                    <div className="projectDetails w-full text-slate-500 group-hover:text-slate-200 transition-all duration-100 ease-in-out">
                        <h4 className="text-xl font-semibold flex items-center">
                            {project.name}
                            {project.url && (
                                <a href={project.url} target="_blank" rel="noopener noreferrer">
                                    <GoLinkExternal className='ml-2' />
                                </a>
                            )}
                        </h4>
                        <p className="text-slay-600">{project.description}</p>
                        <div className="technologies flex gap-3">
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
                <a href="/archive" rel="noopener noreferrer">
                    <button className="text-sm bg-slate-500/10 hover:bg-slate-500/20 transition-all duration-100 ease-in-out px-5 py-2 rounded-md flex items-center">
                        View Projects Archive
                        <span className="ml-2">
                            <AiFillCode />
                        </span>
                    </button>
                </a>
            </div>
        </div>
    );
}