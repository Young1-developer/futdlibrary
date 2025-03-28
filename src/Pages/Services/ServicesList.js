// Services data
const services = [
    {
        category: 'Research Support',
        icon: 'fas fa-search',
        description: 'Comprehensive research assistance and consultation services for students, faculty, and staff.',
        services: [
            {
                name: 'Research Consultations',
                description: 'One-on-one meetings with subject specialists to discuss research strategies and resources.',
                icon: 'fas fa-users',
                details: {
                    duration: '30-60 minutes',
                    availability: 'In-person or virtual',
                    booking: 'Online scheduling available'
                }
            },
            {
                name: 'Literature Reviews',
                description: 'Assistance with conducting comprehensive literature reviews and systematic reviews.',
                icon: 'fas fa-book-open',
                details: {
                    support: 'Database selection, search strategies',
                    tools: 'Citation management software',
                    collaboration: 'Faculty partnership available'
                }
            },
            {
                name: 'Data Services',
                description: 'Support for finding, managing, analyzing, and visualizing research data.',
                icon: 'fas fa-chart-bar',
                details: {
                    tools: 'SPSS, R, Python support',
                    storage: 'Data repository assistance',
                    training: 'Regular workshops'
                }
            }
        ]
    },
    {
        category: 'Digital Scholarship',
        icon: 'fas fa-laptop-code',
        description: 'Advanced digital tools and support for scholarly projects and digital humanities initiatives.',
        services: [
            {
                name: 'Digital Publishing',
                description: 'Support for creating and maintaining digital scholarly publications.',
                icon: 'fas fa-globe',
                details: {
                    platforms: 'OJS, WordPress, Omeka',
                    training: 'Platform workshops',
                    support: 'Ongoing technical assistance'
                }
            },
            {
                name: 'Multimedia Production',
                description: 'Resources and support for creating academic multimedia content.',
                icon: 'fas fa-video',
                details: {
                    equipment: 'Recording studio access',
                    software: 'Adobe Creative Suite',
                    formats: 'Video, audio, graphics'
                }
            },
            {
                name: 'Digital Archives',
                description: 'Digitization and preservation of scholarly materials and special collections.',
                icon: 'fas fa-archive',
                details: {
                    scanning: 'High-resolution scanning',
                    metadata: 'Professional cataloging',
                    access: 'Online repository'
                }
            }
        ]
    },
    {
        category: 'Teaching & Learning',
        icon: 'fas fa-chalkboard-teacher',
        description: 'Educational support services and resources for faculty and students.',
        services: [
            {
                name: 'Information Literacy',
                description: 'Course-integrated instruction on research skills and information literacy.',
                icon: 'fas fa-graduation-cap',
                details: {
                    format: 'Workshops and tutorials',
                    customization: 'Subject-specific instruction',
                    assessment: 'Learning outcomes evaluation'
                }
            },
            {
                name: 'Course Reserves',
                description: 'Management of course materials and readings for faculty.',
                icon: 'fas fa-book',
                details: {
                    types: 'Print and electronic materials',
                    access: '24/7 online availability',
                    copyright: 'Compliance assistance'
                }
            },
            {
                name: 'Academic Technology',
                description: 'Support for integrating technology into teaching and learning.',
                icon: 'fas fa-desktop',
                details: {
                    tools: 'Learning management systems',
                    support: 'Technical consultations',
                    innovation: 'Emerging technology exploration'
                }
            }
        ]
    },
    {
        category: 'Circulation & Access',
        icon: 'fas fa-exchange-alt',
        description: 'Core library services for accessing and borrowing materials.',
        services: [
            {
                name: 'Borrowing Services',
                description: 'Check-out and return of library materials.',
                icon: 'fas fa-hand-holding',
                details: {
                    items: 'Books, devices, equipment',
                    duration: 'Flexible loan periods',
                    renewals: 'Online renewal system'
                }
            },
            {
                name: 'Interlibrary Loan',
                description: 'Access to materials from other libraries worldwide.',
                icon: 'fas fa-shuttle-van',
                details: {
                    scope: 'Global library network',
                    delivery: 'Physical and digital items',
                    speed: 'Express processing available'
                }
            },
            {
                name: 'Study Spaces',
                description: 'Various spaces for individual and group study.',
                icon: 'fas fa-door-open',
                details: {
                    types: 'Individual and group rooms',
                    technology: 'Smart boards, displays',
                    booking: 'Online reservation system'
                }
            }
        ]
    }
];


export default services