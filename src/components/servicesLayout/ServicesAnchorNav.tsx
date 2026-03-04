const anchorTabs = [
    { id: 'compliance', label: 'Compliance' },
    { id: 'audit', label: 'Audit & Assurance' },
    { id: 'grc', label: 'GRC' },
    { id: 'virtual-exec', label: 'Virtual Executive' },
    { id: 'cybersecurity', label: 'Cybersecurity' },
    { id: 'it-ot', label: 'IT & OT Security' },
    { id: 'digital-engineering', label: 'Digital Engineering' },
];

function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

export default function ServicesAnchorNav() {
    return (
        <div className="sticky top-16 z-40 bg-(--color-background)/95 backdrop-blur-sm border-b border-(--color-border)">
            <div className="container-max px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap justify-center gap-2 py-3">
                    {anchorTabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => scrollToSection(tab.id)}
                            className="
                                px-3 sm:px-4 py-1.5
                                rounded-full text-xs sm:text-sm font-medium
                                border border-(--color-border)
                                text-(--color-text-muted)
                                hover:border-(--color-primary) hover:text-(--color-primary)
                                hover:bg-(--color-primary)/5
                                transition-all duration-150 whitespace-nowrap
                                cursor-pointer
                            "
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}