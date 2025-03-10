import skillData from './skills.json';

export default function Abilities() {

    const { skills } = skillData;

    return (
        <div className="w-full flex flex-col gap-5" id="abilities">
            {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className='flex flex-col md:flex-row'>
                    <div className="skillType w-1/3">
                        <span className="text-emerald-500 bg-emerald-900/35 px-5 py-1 rounded-md">{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                    </div>
                    <div className="skillList ml-1.5 w-full">
                        <ul className='list-none flex flex-wrap my-2 md:my-0 items-center gap-2'>
                            {skillList.map((skill) => (
                                // add comma after each skill except the last one
                                <li key={skill}>
                                    {skill}
                                    {skill !== skillList[skillList.length - 1] && <span className="text-slate-500">,</span>}
                                </li>                                
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    )
}