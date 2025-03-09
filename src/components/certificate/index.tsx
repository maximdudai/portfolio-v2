import ceacCertificate from './imgs/ceac.png'
import htmlcssCertificate from './imgs/htmlcss.png'
import typescriptCertificate from './imgs/typescript.png'
import udemyCertificate from './imgs/udemy.png'

import ceacPdf from './files/ceacwebdev.pdf';
import htmlcssPdf from './files/htmlcss.pdf';
import typescriptPdf from './files/typescript.pdf';
import udemyPdf from './files/udemy.pdf';

import { GoLinkExternal } from "react-icons/go";


interface Certificate {
    name: string;
    url: string;
    pdf: string;
}
const certificates: Certificate[] = [
    {
        name: 'HTML & CSS',
        url: htmlcssCertificate,
        pdf: htmlcssPdf,

    },
    {
        name: 'Typescript',
        url: typescriptCertificate,
        pdf: typescriptPdf,
    },
    {
        name: 'Full Stack Web Development',
        url: udemyCertificate,
        pdf: udemyPdf,
    },
    {
        name: 'Full Stack Web Development',
        url: ceacCertificate,
        pdf: ceacPdf,
    }
];

export default function Certificates() {

    return (
        <div id="certificates" className="w-full flex flex-col">
            <div className="flex gap-5">
                {certificates.map((certificate, index) => (
                    <div
                        key={index}
                        className="w-56 flex hover:bg-slate-500/10 transition-all duration-100 ease-in-out p-2 rounded-lg cursor-pointer"
                    >
                        <div className="flex flex-col justify-between items-start gap-2">
                            {/* Image container with fixed dimensions */}
                            <div className="w-full h-40 overflow-hidden">
                                <img
                                    src={certificate.url}
                                    alt={certificate.name}
                                    className="h-full object-contain"
                                />
                            </div>
                            {/* Link to the certificate */}
                            <a
                                href={certificate.pdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-xs font-semibold hover:text-slate-200 transition-all duration-100 ease-in-out"
                            >
                                {certificate.name}
                                <GoLinkExternal className='ml-2' />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}