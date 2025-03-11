import { Link } from "react-router";

export default function AboutMe() {

    const cronologicTime = [
        {
            title: "Born in Ungheni, Republic of Moldova",
            date: "2003",
        },
        {
            title: "First Computer",
            date: "2009",
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
    <div id="aboutme" className="w-full">
            <div className="personalInformations">
                <h1 className="text-3xl md:text-5xl font-semibold tracking-wider text-slate-200">About Me</h1>
                <p className="mb-4">
                    Hi, I'm Maxim Dudai, a passionate and dedicated self-taught developer with a strong foundation in Web Application. <br />
                    My journey in technology began in 2019, evolving from a deep curiosity about how software works into a hands-on exploration of programming.
                    Through online resources, personal projects, and a lot of trial and error,
                    I’ve built interactive web applications, Android apps, full-stack platforms, and even multiplayer games—always pushing my skills further
                </p>
                <p className="mb-4">
                    In 2023, I took a major step forward by enrolling in the Higher Professional Technical Course in Information Systems Programming at
                    <Link className="mx-1 text-slate-200 font-semibold tracking-wide" to={'https://www.ipleiria.pt/curso/tesp-de-programacao-de-sistemas-de-informacao/'} target="_blank">Politécnico de Leiria</Link>
                    <br />This academic pursuit has helped me refine my technical abilities, strengthen my problem-solving skills,
                    and gain practical experience in developing efficient and scalable software solutions.

                </p>
                <p className="mb-4">
                    Looking forward, I’m eager to put my skills to work professionally. I love solving problems through tech and building solutions that matter.
                    My goal? Join a team where I can grow, contribute to impactful projects, and keep pushing the boundaries of what I can create.
                </p>
                <p>
                    When I’m not coding, you can find me exploring the outdoors, reading about technology and programming,
                    playing video games, watching movies, listening to music, or spending time with my family and friends.
                    I’m always looking for new challenges and
                    opportunities to grow as a developer, and I’m excited to see where my journey takes me next.
                </p>
            </div>
            <div className="cronologicTime">
                <div className="w-full flex flex-wrap justify-between items-start mt-10">
                    {cronologicTime.map((item, idx) => (
                        <div key={idx} className="relative my-5 md:my-0 flex flex-col items-center">
                            <div className="w-10 h-10 rounded-full bg-gray-800 border-4 border-gray-300 flex items-center justify-center">
                                <div className="w-5 h-5 rounded-full bg-gray-500">
                                    {/* inside circle */}
                                </div>
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