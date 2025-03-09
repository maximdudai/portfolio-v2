import { useEffect, useState } from 'react';
import './index.css';

import AboutMe from "./components/about"
import Experience from "./components/experience";

import { SlSocialLinkedin } from "react-icons/sl";
import { FaGithub, FaInstagram, FaTwitch, FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import Abilities from './components/skills';
import Projects from './components/projects';
import Education from './components/education';
import Certificates from './components/certificate';

interface Section {
    name: string;
}
const sections: Section[] = [
    { name: 'About Me' },
    { name: 'Experience' },
    { name: 'Abilities' },
    { name: 'Projects' },
    { name: 'Certificates' },
    { name: 'Education' },
];
function LandingPage() {
    const [activeSection, setActiveSection] = useState<string>('aboutme');

    useEffect(() => {
        const options = {
            root: null,
            threshold: 0.25, // Trigger when 50% of the section is visible
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach((section) => {
            const element = document.getElementById(section.name.toLowerCase());
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);


    return (
        <div className="container-fluid flex justify-between items-start mt-20">
            <header className="w-1/3 flex justify-center items-center">
                <div className="container fixed max-w-[25rem] top-20 left-1/5 flex flex-col justify-center">
                    <h1 className="text-5xl font-semibold tracking-wider">Maxim Dudai</h1>
                    <h3 className="text-[1.7rem] uppercase font-semibold">Software Developer</h3>
                    <ul className="uppercase mt-20 max-w-38  text-sm text-left list-none">
                        {sections.map((section) => (
                            <a
                                key={section.name}
                                href={`#${section.name.toLowerCase()}`}
                                onClick={() => setActiveSection(section.name.toLowerCase())}
                            >
                                <li
                                    className={`${activeSection === section.name.toLowerCase()
                                            ? 'text-white'
                                            : 'text-slate-500'
                                        } group mb-3 relative flex items-center hover:text-white`}
                                >
                                    <span
                                        className={`nav-indicator mr-4 h-px ${activeSection === section.name.toLowerCase() ? 'w-16' : 'w-8'
                                            } bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
                                    ></span>
                                    <span>
                                        {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
                                    </span>
                                </li>
                            </a>
                        ))}
                    </ul>
                    <div className="socialMedia flex items-center gap-5 mt-40">
                        <div className="linkedIn">
                            <a href="https://www.linkedin.com/in/maximdudai/" target="_blank" rel="noopener noreferrer">
                                <SlSocialLinkedin className="w-6 h-6 text-slate-500 hover:text-slate-300" />
                            </a>
                        </div>
                        <div className="github">
                            <a href="https://www.github.com/maximdudai" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="w-6 h-6 text-slate-500 hover:text-slate-300" />
                            </a>
                        </div>
                        <div className="instagram">
                            <a href="https://www.instagram.com/dudai1101/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="w-6 h-6 text-slate-500 hover:text-slate-300" />
                            </a>
                        </div>
                        <div className="twitch">
                            <a href="https://www.twitch.tv/max__dev" target="_blank" rel="noopener noreferrer">
                                <FaTwitch className="w-6 h-6 text-slate-500 hover:text-slate-300" />
                            </a>
                        </div>
                        <div className="twitter">
                            <a href="https://www.twitter.com/maximdudai11" target="_blank" rel="noopener noreferrer">
                                <FaXTwitter className="w-6 h-6 text-slate-500 hover:text-slate-300" />
                            </a>
                        </div>
                        <div className="discord">
                            <a href="https://discord.com/users/325921764016128011" target="_blank" rel="noopener noreferrer">
                                <FaDiscord className="w-6 h-6 text-slate-500 hover:text-slate-300" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <main className="w-1/2 flex flex-col mr-20 gap-30 text-justify">
                <AboutMe />
                <Experience />
                <Abilities />
                <Projects />
                <Certificates />
                <Education />
            </main>
        </div>
    )
}

export default LandingPage
