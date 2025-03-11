import { Link } from 'react-router'
import education from './education.json'

export default function Education() {
    return (
        <div id="education" className="w-full flex mb-10 flex-col">
            <div className="educationList flex flex-col gap-5">
                {education.map((edu, index) => (
                    <div key={index} className="educationItem flex flex-col gap-5 lg:gap-0 lg:flex-row hover:bg-slate-500/10 transition-all duration-100 ease-in-out p-2 rounded-lg cursor-pointer">
                        <div className="startEndDate lg:w-1/2">
                            <span className="text-sm text-slate-500">{edu.startDate} &mdash; {edu.endDate}</span>
                            <h2 className="text-lg font-semibold">{edu.title}</h2>
                            {
                                edu.subtitle &&
                                <h5 className="text-sm text-slate-500">{edu.subtitle}</h5>
                            }
                        </div>
                        <div className="w-full flex flex-col items-start">
                            {
                                edu.institution &&
                                <h3 className="text-xl font-semibold">
                                    {edu.institutionUrl ? (
                                        <Link to={edu.institutionUrl} target="_blank" rel="noopener noreferrer" className="transition-all duration-100 ease-in-out flex items-center">
                                            {edu.institution}
                                        </Link>
                                    ) : (
                                        edu.institution
                                    )}
                                </h3>
                            }
                            {
                                edu.description &&
                                <div className="description">
                                    <ul className='list-none'>
                                        {
                                            edu.description.map((desc, descIndex) => (
                                                <li key={descIndex} className="text-md text-justify text-slate-500 lg:text-sm my-2">
                                                    {desc}
                                                </li>
                                            ))
                                        }
                                    </ul>

                                </div>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}