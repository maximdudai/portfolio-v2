import { Link } from 'react-router';
import projects from './projects.json';

import { TiArrowBackOutline } from "react-icons/ti";
import { TbSourceCode } from "react-icons/tb";
import { MdPreview } from "react-icons/md";
import { GoLinkExternal } from "react-icons/go";
import { useEffect } from 'react';

export default function Archive() {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="w-full flex justify-center gap-10 my-20 p-3 lg:p-0" autoFocus={true}>
            <div className="container">
                <Link to="/" className="text-emerald-500 text-lg font-bold mb-5">
                    <TiArrowBackOutline className="inline mr-2" />
                    Maxim Dudai
                </Link>
                <h2 className="text-5xl font-bold text-slate-500">All Projects</h2>
                <div className="projects w-full mt-10">
                    <table className='w-full'>
                        <thead>
                            <tr className='text-left text-slate-600'>
                                <th>Project</th>
                                <th className=" w-min-[10rem]">Category</th>
                                <th className=" hidden lg:table-cell">Techonolgies</th>
                                <th className=" hidden lg:table-cell">Source</th>
                                <th className=" hidden lg:table-cell">Preview</th>
                            </tr>
                        </thead>
                        <tbody>
                            {projects.map((project, index) => (
                                <tr key={index} className="mb-5 md:mb-0 h-10 lg:h-20 border-b-[1px] border-b-slate-500/20">
                                        <td className="text-slate-300">
                                            <Link to={`${project.src}`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 hover:underline flex items-center">
                                                {project.name}
                                                <GoLinkExternal className='inline lg:hidden ml-2' />
                                            </Link>
                                        </td>
                                        <td className="text-slate-500">{project.purpose}</td>

                                        <td className="hidden min-h-[5rem] lg:table-cell">
                                            {project.technologies.map((technology, index) => (
                                                <span key={index} className="text-emerald-500 text-sm bg-emerald-900/35 p-2 rounded-md mr-2">{technology}</span>
                                            ))}
                                        </td>


                                    <td className="text-slate-500 hidden lg:table-cell">
                                        <Link to={`${project.src}`} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 hover:underline">
                                            <TbSourceCode className="inline text-xl" />
                                        </Link>
                                    </td>
                                    {
                                        project.url &&
                                        <td className="text-slate-500 hidden lg:table-cell">
                                            <Link to={project.url} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 hover:underline">
                                                <MdPreview className="inline text-xl" />
                                            </Link>
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