
// Resources data structure
const resourcesData = {
    quickLinks: [
        { text: 'Research Databases', icon: 'fas fa-database', link:'https://en.wikipedia.org/wiki/Transport_Research_International_Documentationn'},
        { text: 'E-Journals', icon: 'fas fa-journal-whills', link:'https://guides.library.charlotte.edu/transportation' },
        { text: 'Citation Tools', icon: 'fas fa-quote-right',link:'https://www.zotero.org/' },
        { text: 'Research Guides', icon: 'fas fa-compass', link:'https://guides.library.charlotte.edu/transportation' },
        { text: 'Technical Standards', icon: 'fas fa-clipboard-check', link:'https://www.asce.org/publications-and-news/codes-and-standards' },
        { text: 'Patent Database', icon: 'fas fa-file-contract', link:'https://www.maxval.com/blog/5-free-patent-search-engines-and-databases/' }
    ],
    categories: [
        {
            category: 'Engineering Resources',
            icon: 'fas fa-cogs',
            description: 'Access comprehensive engineering databases, journals, and technical resources.',
            resources: [
                {
                    name: 'Engineering Village',
                    description: 'Comprehensive engineering database covering various engineering disciplines.',
                    icon: 'fas fa-database',
                    link:'https://www.elsevier.com/products/engineering-village/databases?utm_source=chatgpt.com',
                    details: {
                        'Coverage': 'All engineering fields',
                        'Content Type': 'Articles, conference papers, technical reports',
                        'Update Frequency': 'Daily',
                        'Features': 'Advanced search, citation export, alerts'
                    }
                },
                {
                    name: 'IEEE Xplore',
                    description: 'Digital library of technology and engineering research papers.',
                    icon: 'fas fa-microchip',
                    link:'https://ieeexplore.ieee.org/?utm_source=chatgpt.com',
                    details: {
                        'Coverage': 'Electrical engineering, computer science',
                        'Content Type': 'Journals, conferences, standards',
                        'Update Frequency': 'Weekly',
                        'Features': 'Full-text search, personalization'
                    }
                },
                {
                    name: 'ASME Digital Collection',
                    description: 'Mechanical engineering publications and conference proceedings.',
                    icon: 'fas fa-wrench',
                    link:'https://asmedigitalcollection.asme.org/',
                    details: {
                        'Coverage': 'Mechanical engineering',
                        'Content Type': 'Journals, conference papers, e-books',
                        'Update Frequency': 'Monthly',
                        'Features': 'Mobile access, citation tools'
                    }
                }
            ]
        },
        {
            category: 'Technology Resources',
            icon: 'fas fa-laptop-code',
            description: 'Explore technology databases, programming resources, and digital tools.',
            resources: [
                {
                    name: 'ACM Digital Library',
                    description: 'Computing and information technology research database.',
                    icon: 'fas fa-code',
                    link:'https://dl.acm.org/?utm_source=chatgpt.com',
                    details: {
                        'Coverage': 'Computer science, IT',
                        'Content Type': 'Journals, proceedings, magazines',
                        'Update Frequency': 'Daily',
                        'Features': 'Code snippets, author profiles'
                    }
                },
                {
                    name: 'O\'Reilly Learning',
                    link:'https://www.oreilly.com/',
                    description: 'Technology and business learning platform.',
                    icon: 'fas fa-book-reader',
                    details: {
                        'Coverage': 'Programming, IT, business',
                        'Content Type': 'E-books, videos, tutorials',
                        'Update Frequency': 'Continuous',
                        'Features': 'Interactive learning, certificates'
                    }
                },
                {
                    name: 'SciTech Premium Collection',
                    description: 'Comprehensive science and technology research database.',
                    icon: 'fas fa-atom',
                    link:'https://about.proquest.com/en/products-services/pq_scitech/',
                    details: {
                        'Coverage': 'Science, technology',
                        'Content Type': 'Articles, dissertations',
                        'Update Frequency': 'Weekly',
                        'Features': 'Cross-database searching'
                    }
                }
            ]
        },
        {
            category: 'Transportation Resources',
            icon: 'fas fa-truck-plane',
            description: 'Access transportation engineering and logistics resources.',
            resources: [
                {
                    name: 'Transportation Research Board',
                    description: 'Transportation research and policy database.',
                    icon: 'fas fa-road',
                    link:'https://www.nationalacademies.org/trb/transportation-research-board',
                    details: {
                        'Coverage': 'All transportation modes',
                        'Content Type': 'Research reports, journals',
                        'Update Frequency': 'Monthly',
                        'Features': 'Policy documents, statistics'
                    }
                },
                {
                    name: 'SAE Mobilus',
                    description: 'Automotive and aerospace engineering standards and papers.',
                    icon: 'fas fa-car',
                    link:'https://saemobilus.sae.org/standards?utm_source=chatgpt.com',
                    details: {
                        'Coverage': 'Automotive, aerospace',
                        'Content Type': 'Technical papers, standards',
                        'Update Frequency': 'Weekly',
                        'Features': 'Standards development tracking'
                    }
                },
                {
                    name: 'TRID Database',
                    description: 'Transportation research information services.',
                    icon: 'fas fa-train',
                    link:'https://highways.dot.gov/safety/data-analysis-tools/rsdp/rsdp-tools/transportation-research-information-services-tris',
                    details: {
                        'Coverage': 'Transportation infrastructure',
                        'Content Type': 'Research records, projects',
                        'Update Frequency': 'Bi-weekly',
                        'Features': 'Global coverage, abstracts'
                    }
                }
            ]
        }
    ],
    guides: [
        {
            title: 'Engineering Design Process',
            author: 'TechEngineering',
            link:'https://www.teachengineering.org/populartopics/designprocess',
            lastUpdated: '2024-01-15',
            image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12',
            tags: ['Design', 'Engineering', 'Methodology'],
            views: 2500
        },
        {
            title: 'Transportation Systems Analysis',
            author: 'Prof. Tom V. Mathew',
            link:'https://www.civil.iitb.ac.in/tvm/nptel/101_TptnIntro/web/web.html',
            lastUpdated: '2024-01-10',
            image: 'https://images.unsplash.com/photo-1494522358652-f30e61a60313',
            tags: ['Transportation', 'Systems', 'Analysis'],
            views: 1800
        },
        {
            title: 'Emerging Technologies in IoT',
            author: 'Smarter Technologies',
            link:'https://smartertechnologies.com/blog/iot-emerging-technologies/',
            lastUpdated: '2024-01-20',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
            tags: ['IoT', 'Technology', 'Innovation'],
            views: 3200
        }
    ]
};



export default resourcesData