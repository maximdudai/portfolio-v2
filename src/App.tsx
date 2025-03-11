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
import { Link } from 'react-router';

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
        const hash = window.location.hash.slice(1);
        if (hash) {
            setActiveSection(hash);
        }

        const handleScroll = () => {
            checkVisibleSections();
        };

        window.addEventListener('scroll', handleScroll);

        // Function to check which sections are visible and select the most appropriate one
        const checkVisibleSections = () => {
            // Special case for top of page - always select aboutme
            if (window.scrollY < 150) {
                setActiveSection('aboutme');
                return;
            }

            // Special case for bottom of page - always select education
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 150) {
                const lastSectionName = sections[sections.length - 1].name.toLowerCase().replace(/\s+/g, '');
                setActiveSection(lastSectionName);
                return;
            }

            // Get all section elements
            const sectionElements = sections.map(section => {
                const sectionName = section.name.toLowerCase().replace(/\s+/g, '');
                return {
                    name: sectionName,
                    element: document.getElementById(sectionName)
                };
            }).filter(section => section.element !== null);

            // Calculate visibility for each section
            const visibleSections = sectionElements.map(section => {
                const rect = section.element!.getBoundingClientRect();
                const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

                // Calculate how much of the section is visible
                const visibleTop = Math.max(0, rect.top);
                const visibleBottom = Math.min(viewportHeight, rect.bottom);
                const visibleHeight = Math.max(0, visibleBottom - visibleTop);

                // Calculate visibility as a ratio of the section's height
                const visibilityRatio = visibleHeight / rect.height;

                // Calculate position in viewport (0 = top, 1 = bottom)
                const positionInViewport = (rect.top + rect.bottom) / (2 * viewportHeight);

                return {
                    name: section.name,
                    visibilityRatio,
                    positionInViewport,
                    top: rect.top,
                    element: section.element
                };
            });

            // Filter to sections that are actually visible
            const actuallyVisible = visibleSections.filter(section => section.visibilityRatio > 0);

            if (actuallyVisible.length === 0) return;

            // First priority: Section that's completely visible (or most visible)
            const mostVisible = actuallyVisible.sort((a, b) => b.visibilityRatio - a.visibilityRatio)[0];

            if (mostVisible.visibilityRatio > 0.7) {
                setActiveSection(mostVisible.name);
                return;
            }

            // Second priority: Section closest to the center of the viewport
            const centerSection = actuallyVisible.sort((a, b) =>
                Math.abs(a.positionInViewport - 0.5) - Math.abs(b.positionInViewport - 0.5)
            )[0];

            setActiveSection(centerSection.name);
        };

        // Initial check
        setTimeout(checkVisibleSections, 200);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const formatSectionName = (name: string) => {
        return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase().replace(/\s+/g, '');
    };

    return (
        <div className="container-fluid flex flex-col lg:flex-row justify-between items-start p-5 xl:p-20">
            <header className="w-full lg:w-1/3 flex lg:justify-center items-center my-10">
                <div className="container lg:fixed lg:max-w-[25rem] top-20 lg:left-32 xl:left-1/5 flex flex-col justify-between md:items-start lg:justify-center">
                    <div className="personalInformations my-5 md:my-0 w-full flex flex-col">
                        <h1 className="text-4xl xl:text-5xl font-semibold tracking-wider text-white">Maxim Dudai</h1>
                        <h3 className="text-lg md:text-xl xl:text-[1.7rem] uppercase font-semibold text-slate-500">Software Developer</h3>
                    </div>
                    <ul className="hidden w-full lg:block uppercase mt-20 max-w-38  text-sm text-left list-none">
                        {sections.map((section) => (
                            <Link
                                key={formatSectionName(section.name)}
                                to={`#${formatSectionName(section.name).toLocaleLowerCase()}`}
                                onClick={() => setActiveSection(formatSectionName(section.name))}
                            >
                                <li
                                    className={`${activeSection === formatSectionName(section.name).toLocaleLowerCase()
                                        ? 'text-white'
                                        : 'text-slate-500'
                                        } group mb-3 relative flex items-center hover:text-white`}
                                >
                                    <span
                                        className={`nav-indicator mr-4 h-px ${activeSection === formatSectionName(section.name).toLocaleLowerCase() ? 'w-16' : 'w-8'
                                            } bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none`}
                                    ></span>
                                    <span>
                                        {section.name.charAt(0).toUpperCase() + section.name.slice(1)}
                                    </span>
                                </li>
                            </Link>
                        ))}
                    </ul>
                    <div className="socialMedia flex lg:items-center gap-5 lg:mt-40">
                        <div className="linkedIn">
                            <Link to="https://www.linkedin.com/in/maximdudai/" target="_blank" rel="noopener noreferrer">
                                <SlSocialLinkedin className="w-6 h-6 text-slate-500 hover:text-slate-300" />
                            </Link>
                        </div>
                        <div className="github">
                            <Link to="https://www.github.com/maximdudai" target="_blank" rel="noopener noreferrer">
                                <FaGithub className="w-6 h-6 text-slate-500 hover:text-slate-300" />
                            </Link>
                        </div>
                        <div className="instagram">
                            <Link to="https://www.instagram.com/dudai1101/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="w-6 h-6 text-slate-500 hover:text-slate-300" />
                            </Link>
                        </div>
                        <div className="twitch">
                            <Link to="https://www.twitch.tv/max__dev" target="_blank" rel="noopener noreferrer">
                                <FaTwitch className="w-6 h-6 text-slate-500 hover:text-slate-300" />
                            </Link>
                        </div>
                        <div className="twitter">
                            <Link to="https://www.twitter.com/maximdudai11" target="_blank" rel="noopener noreferrer">
                                <FaXTwitter className="w-6 h-6 text-slate-500 hover:text-slate-300" />
                            </Link>
                        </div>
                        <div className="discord">
                            <Link to="https://discord.com/users/325921764016128011" target="_blank" rel="noopener noreferrer">
                                <FaDiscord className="w-6 h-6 text-slate-500 hover:text-slate-300" />
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
            <main className="w-full lg:w-1/2 flex flex-col mt-20 lg:mt-0 mr-20 gap-30 text-justify">
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
