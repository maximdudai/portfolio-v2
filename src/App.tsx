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
        // Set initial active section based on URL hash or default to aboutme
        const hash = window.location.hash.slice(1);
        if (hash) {
            setActiveSection(hash);
        }

        // Track scroll position
        const handleScroll = () => {
            // Force check on each scroll event
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
            
            // If a section is significantly visible (>70%), select it
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
        <div className="container-fluid flex justify-between items-start mt-20">
            <header className="w-1/3 flex justify-center items-center">
                <div className="container fixed max-w-[25rem] top-20 left-1/5 flex flex-col justify-center">
                    <h1 className="text-5xl font-semibold tracking-wider">Maxim Dudai</h1>
                    <h3 className="text-[1.7rem] uppercase font-semibold">Software Developer</h3>
                    <ul className="uppercase mt-20 max-w-38  text-sm text-left list-none">
                        {sections.map((section) => (
                            <a
                                key={formatSectionName(section.name)}
                                href={`#${formatSectionName(section.name).toLocaleLowerCase()}`}
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
