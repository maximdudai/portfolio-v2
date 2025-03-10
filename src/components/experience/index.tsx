import experience from './experience.json';
import { SiReaddotcv } from "react-icons/si";
import { GoLinkExternal } from "react-icons/go";

import personalCurricum from './file/maximdudai-cv.pdf';

export default function Experience() {
    return (
        <div id="experience">
            <div className="experienceList flex flex-col gap-5">
                {experience.map((exp, index) => (
                    <div key={index} className="experienceItem flex flex-col lg:flex-row hover:bg-slate-500/10 transition-all duration-100 ease-in-out p-2 rounded-lg cursor-pointer">

                        <div className="startEndDate md:w-1/3">
                            <span className="text-sm text-slate-500">{exp.startDate} &mdash; {exp.endDate}</span>
                            <h2 className="text-xl font-semibold">{exp.title}</h2>
                        </div>

                        <div className="w-full flex flex-col items-start">
                            {
                                exp.company && 
                                <h3 className="text-xl font-semibold text-slate-500">
                                    {exp.companyUrl ? (
                                        <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-slate-200 transition-all duration-100 ease-in-out flex items-center">
                                            {exp.company}
                                            <span className="ml-2">
                                                <GoLinkExternal />
                                            </span>
                                        </a>
                                    ) : (
                                        exp.company
                                    )}
                                </h3>
                            }
                            {
                                exp.description &&
                                <div className="description">
                                    {
                                        exp.description.map((desc, descIndex) => (
                                            <p key={descIndex} className="text-slate-500">
                                                {desc}
                                            </p>
                                        ))
                                    }
                                </div>
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
                <a href={personalCurricum} target="_blank" rel="noopener noreferrer">
                    <button className="text-sm bg-slate-500/10 hover:bg-slate-500/20 transition-all duration-100 ease-in-out px-5 py-2 rounded-md flex items-center">
                        View Full Resume
                        <span className="ml-2">
                            <SiReaddotcv />
                        </span>
                    </button>
                </a>
            </div>
        </div>
    )
}