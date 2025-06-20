import experience from './experience.json';
import { SiReaddotcv } from "react-icons/si";
import { GoLinkExternal } from "react-icons/go";

import { Link } from 'react-router';

export default function Experience() {
    return (
        <div id="experience">
            <div className="experienceList flex flex-col gap-5">
                {experience.map((exp, index) => (
                    <div key={index} className="experienceItem flex flex-col lg:flex-row hover:bg-slate-500/10 transition-all duration-100 ease-in-out p-2 rounded-lg cursor-pointer">

                        <div className="startEndDate my-3 md:my-0 md:w-1/3">
                            <h2 className="text-xl font-semibold">{exp.title}</h2>
                            <div className='flex flex-col items-start gap-1'>
                                <span className="text-sm text-slate-500">{exp.endDate} {exp.endMonth}</span>
                                <span className="text-xs text-slate-500">{exp.startDate} {exp.startMonth}</span>
                            </div>
                        </div>

                        <div className="w-full flex flex-col items-start">
                            {
                                exp.company &&
                                <h3 className="text-xl font-semibold text-slate-500">
                                    {exp.companyUrl ? (
                                        <Link to={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-slate-200 transition-all duration-100 ease-in-out flex items-center">
                                            {exp.company}
                                            <span className="ml-2">
                                                <GoLinkExternal />
                                            </span>
                                        </Link>
                                    ) : (
                                        exp.company
                                    )}
                                </h3>
                            }
                            {
                                exp.description &&
                                <ul className="description list-disc list-inside">
                                    {
                                        exp.description.map((desc, descIndex) => (
                                            <li key={descIndex} className="text-slate-500 py-1">
                                                {desc}
                                            </li>
                                        ))
                                    }
                                </ul>
                            }
                            {
                                exp.technologies &&
                                <div className="technologies flex flex-wrap gap-2 mt-2">
                                    {exp.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="text-xs text-emerald-500 bg-emerald-900/35 px-5 py-1 rounded-md">{tech}</span>
                                    ))}
                                </div>
                            }
                        </div>

                    </div>
                ))}

            </div>
            <div className="viewFullResume mt-10">
                <Link
                    className='text-sm border-b-[1px] border-b-slate-500 hover:bg-slate-500/20 transition-all duration-100 ease-in-out py-2 hover:rounded-md hover:px-1 flex items-center'
                    to="/file/maximdudai-cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Full Resume
                    <span className="ml-2">
                        <SiReaddotcv />
                    </span>
                </Link>
            </div>
        </div>
    )
}