export default function Certificates() {
    const certificates = import.meta.glob('./files/*.pdf', { eager: true });
    const certificateList = Object.entries(certificates).map(([path, module]) => {
        const name = path.split('/').pop()?.split('.')[0];
        return {
            name: name,
            url: (module as { default: string }).default,
        };
    });

    return (
        <div id="certificates" className="w-full flex flex-col">
            <h2 className="text-2xl font-semibold mb-5">Certificates</h2>
            <div className="flex flex-col gap-5">
                {certificateList.map((cert, index) => (
                    <a key={index} href={cert.url} target="_blank" rel="noopener noreferrer" className="hover:bg-slate-500/10 transition-all duration-100 ease-in-out p-2 rounded-lg cursor-pointer">
                        <h3 className="text-xl font-semibold">{cert.name}</h3>
                    </a>
                ))}
            </div>
        </div>
    );
}