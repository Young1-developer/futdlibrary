// Division data



const divisions = [
    {
        name: 'Technical Services',
        icon: 'fas fa-cogs',
        description: 'Responsible for acquiring, organizing, and maintaining library materials in all formats to support teaching, learning, and research.',
        stats: {
            staff: 15,
            collections: '500K+',
            projects: 25
        },
        services: [
            'Cataloging & Metadata',
            'Acquisitions',
            'Digital Collections',
            'Preservation'
        ],
        teamMembers: [
            require('../../images/staff/Abdulkareem Khalil Ahmad.jpg'),
            require('../../images/staff/Abdulmumini Salisu.jpg'),
            require('../../images/staff/Abdulrazaq Yahaya.jpg')
        ],
        totalTeamMembers: 15,
        contact: {
            head: 'Abdulkareem Khalil Ahmad',
            email: 'tech.services@library.university.edu',
            phone: '(555) 123-4567'
        }
    },
    {
        name: 'Research & Instruction',
        icon: 'fas fa-graduation-cap',
        description: 'Provides research assistance, information literacy instruction, and curriculum support to faculty, students, and staff.',
        stats: {
            staff: 20,
            workshops: '200+',
            consultations: '1000+'
        },
        services: [
            'Research Consultations',
            'Information Literacy',
            'Course Support',
            'Data Services'
        ],
        teamMembers: [
            require('../../images/staff/Aminu Garba.jpg'),
            require('../../images/staff/Habibu Sani.jpg'),
            require('../../images/staff/Ahmad salihu sulaiman.jpg')
        ],
        totalTeamMembers: 20,
        contact: {
            head: 'Aminu Garba',
            email: 'research@library.university.edu',
            phone: '(555) 123-4568'
        }
    },
    {
        name: 'Digital Initiatives',
        icon: 'fas fa-laptop-code',
        description: 'Leads innovation in digital library services, web development, and technology integration across library systems.',
        stats: {
            staff: 12,
            applications: 30,
            digitalAssets: '1M+'
        },
        services: [
            'Web Development',
            'Digital Preservation',
            'Systems Integration',
            'Innovation Lab'
        ],
        teamMembers: [
            require('../../images/staff/Hauwau Haruna.jpg'),
            require('../../images/staff/Hassan Halliru.jpg'),
            require('../../images/staff/Halliru sani salihu.jpg')
        ],
        totalTeamMembers: 12,
        contact: {
            head: 'Hauwau Haruna',
            email: 'digital@library.university.edu',
            phone: '(555) 123-4569'
        }
    },
    {
        name: 'Special Collections',
        icon: 'fas fa-archive',
        description: 'Preserves and provides access to rare books, manuscripts, archives, and other unique materials.',
        stats: {
            staff: 10,
            collections: '100K+',
            exhibitions: 12
        },
        services: [
            'Archival Research',
            'Exhibitions',
            'Conservation',
            'Digitization'
        ],
        teamMembers: [
            require('../../images/staff/Lubna Abba Abdullahi.jpg'),
            require('../../images/staff/Jamu saidu tafida.jpg'),
            require('../../images/staff/Musa Shuaibu.jpg')
        ],
        totalTeamMembers: 10,
        contact: {
            head: 'Lubna Abba Abdullahi',
            email: 'special.collections@library.university.edu',
            phone: '(555) 123-4570'
        }
    }
];



export default divisions