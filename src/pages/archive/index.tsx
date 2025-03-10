import { Link } from 'react-router';
import projects from './projects.json';

import { TiArrowBackOutline } from "react-icons/ti";
import { TbSourceCode } from "react-icons/tb";
import { MdPreview } from "react-icons/md";


export default function Archive() {
    return (
        <div className="archivePage w-full flex justify-center gap-10 my-20 p-3 md:p-0">
            <div className="container">
                <Link to="/" className="text-emerald-500 text-lg font-bold mb-5">
                    <TiArrowBackOutline className="inline mr-2" />
                    Maxim Dudai
                </Link>
                <h2 className="text-5xl font-bold text-slate-500">All Projects</h2>
                <div className="projects w-full mt-10">
                    <table className='w-full'>
                        <thead>
                            <tr className='text-left'>
                                <th className="text-slate-600">Project</th>
                                <th className="text-slate-600">Category</th>
                                <th className="text-slate-600">Techonolgies</th>
                                <th className="text-slate-600">Source</th>
                                <th className="text-slate-600">Preview</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project, index) => (
                                <tr key={index} className="mb-5 md:mb-0 lg:h-20 border-b-[1px] border-b-slate-500/20">
                                    <td className="text-slate-300">{project.name}</td>
                                    <td className="text-slate-500">{project.purpose}</td>
                                    
                                    <td className="flex flex-wrap lg:min-h-[5rem] items-center">
                                        {project.technologies.map((technology, index) => (
                                            <span key={index} className="text-emerald-500 text-sm bg-emerald-900/35 py-1 px-2 rounded-md mr-2">{technology}</span>
                                        ))}
                                    </td>

                                    <td className="text-slate-500">
                                        <a href={project.src} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 hover:underline">
                                            <TbSourceCode className="inline text-xl" />
                                        </a>
                                    </td>
                                    {
                                        project.url &&
                                        <td className="text-slate-500">
                                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 hover:underline">
                                                <MdPreview className="inline text-xl" />
                                            </a>
                                        </td>
                                    }
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>

        </div>
    )
}