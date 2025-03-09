
export default function AboutMe() {

    const cronologicTime = [
        {
            title: "Born in Ungheni, Republic of Moldova",
            date: "Jan 2003",
        },
        {
            title: "First Computer",
            date: "Sept 2009",
        },
        {
            title: "First Interaction with Programming",
            date: "2016",
        },
        {
            title: "First Landing page",
            date: "2020",
        },
        {
            title: "Started Learning Web Development",
            date: "2021",
        },
        {
            title: "Joined CTeSP Information Systems Programming",
            date: "2023",
        },
    ];

    return (
        <div id="aboutme">
            <div className="personalInformations">
                <h1 className="text-5xl font-semibold tracking-wider">About Me</h1>
                <p className="mb-4">
                    I’m a developer passionate about crafting accessible, pixel-perfect user interfaces that blend
                    thoughtful design with robust engineering. My favorite work lies at the intersection of design and
                    development, creating experiences that not only look great but are meticulously built for
                    performance and usability.
                </p>
                <p className="mb-4">
                    I’m a strong advocate for open source and the power of community. I believe that sharing knowledge
                    and collaborating with others is key to driving innovation and creating better products. I’m always
                    eager to learn from others and contribute to projects that make a difference.
                </p>
                <p className="mb-4">
                    I’m currently focused on building my skills in TypeScript and React, and I’m excited to explore the
                    latest advancements in web development. I’m also interested in learning more about design systems
                    and how they can help create consistent, user-friendly experiences across different platforms.
                </p>
                <p>
                    When I’m not coding, you can find me exploring the outdoors, reading about technology and design,
                    or spending time with my family and friends. I’m always looking for new challenges and
                    opportunities to grow as a developer, and I’m excited to see where my journey takes me next.
                </p>
            </div>
            <div className="cronologicTime w-full">
                <div className="w-full flex justify-between items-start mt-10">
                    {cronologicTime.map((item, idx) => (
                        <div key={idx} className="relative flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-800 border-4 border-gray-300 flex items-center justify-center">
                                <div className="w-5 h-5 rounded-full bg-gray-500"></div>
                            </div>
                            <div className="mt-3 text-center max-w-[120px]">
                                <p className="font-semibold text-sm">{item.date}</p>
                                <p className="text-xs text-gray-400">{item.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}