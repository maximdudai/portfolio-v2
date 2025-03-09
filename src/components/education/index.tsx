import education from './education.json'

export default function Education() {
    return (
        <div id="education" className="w-full flex mb-10 flex-col">
            <div className="educationList flex flex-col gap-5">
                {education.map((edu, index) => (
                    <div key={index} className="educationItem flex hover:bg-slate-500/10 transition-all duration-100 ease-in-out p-2 rounded-lg cursor-pointer">
                        <div className="startEndDate w-1/2">
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
                                <h3 className="text-xl font-semibold text-slate-500">
                                    {edu.institutionUrl ? (
                                        <a href={edu.institutionUrl} target="_blank" rel="noopener noreferrer" className="hover:text-slate-200 transition-all duration-100 ease-in-out flex items-center">
                                            {edu.institution}
                                        </a>
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
                                                <li key={descIndex} className="text-xs my-2">
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