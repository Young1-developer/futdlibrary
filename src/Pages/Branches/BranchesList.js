// Branch data
const branches = [
    {
        name: 'Main Library',
        type: 'Central Library',
        image: 'https://images.unsplash.com/photo-1568667256549-094345857637',
        description: 'Our flagship location featuring extensive collections across all disciplines, study spaces, and special collections.',
        address: '123 University Drive, Campus, ST 12345',
        phone: '(555) 123-4567',
        email: 'main@library.university.edu',
        hours: [
           { day: 'Monday-Thursday', time: '7:00 AM - 2:00 AM'},
           { day: 'Friday', time: '7:00 AM - 9:00 PM'},
           { day: 'Saturday', time: '9:00 AM - 9:00 PM'},
           {day: 'Sunday', time: '10:00 AM - 2:00 AM'}
        ],
        features: [
            { icon: 'fas fa-wifi', text: 'Free Wi-Fi' },
            { icon: 'fas fa-laptop', text: 'Computer Lab' },
            { icon: 'fas fa-print', text: 'Printing Services' },
            { icon: 'fas fa-coffee', text: 'Café' },
            { icon: 'fas fa-users', text: 'Study Rooms' }
        ],
        coordinates: '12.973431941915656, 8.348078547130925'
    },
    {
        name: 'Science & Engineering Library',
        type: 'Subject Library',
        image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66',
        description: 'Specialized collections in science, technology, engineering, and mathematics with advanced research facilities.',
        address: '456 Tech Way, Campus, ST 12345',
        phone: '(555) 123-4568',
        email: 'science@library.university.edu',
        hours: [
            {day:'Monday-Thursday', time: '8:00 AM - 11:00 PM'},
            {day:'Friday', time: '8:00 AM - 7:00 PM'},
           { day:'Saturday', time: '10:00 AM - 6:00 PM'},
           { day: 'Sunday', time: '12:00 PM - 11:00 PM'}
        ],
        features: [
            { icon: 'fas fa-wifi', text: 'Free Wi-Fi' },
            { icon: 'fas fa-microscope', text: 'Research Lab' },
            { icon: 'fas fa-desktop', text: 'Technical Workstations' },
            { icon: 'fas fa-print', text: '3D Printing' }
        ],
        coordinates: '12.973421486940948, 8.34756356304621'
    },
    {
        name: 'Medical Library',
        type: 'Health Sciences Library',
        image: 'https://images.unsplash.com/photo-1518156677180-95a2893f3e9f',
        description: 'Supporting medical education and research with comprehensive health sciences resources.',
        address: '789 Medical Center Blvd, Campus, ST 12345',
        phone: '(555) 123-4569',
        email: 'medical@library.university.edu',
        hours: [
             {day:'Monday_Thursday', time: '7:00 AM - 12:00 AM'},  
             { day:'Friday', time: '7:00 AM - 8:00 PM'},
             {day:'Saturday', time: '9:00 AM - 8:00 PM'},
             {day: 'Sunday', time: '9:00 AM - 12:00 AM'}
    ],
        features: [
            { icon: 'fas fa-wifi', text: 'Free Wi-Fi' },
            { icon: 'fas fa-book-medical', text: 'Medical Journals' },
            { icon: 'fas fa-users', text: 'Study Rooms' },
            { icon: 'fas fa-database', text: 'Clinical Databases' }
        ],
        coordinates: '12.973421486940948, 8.34756356304621'
    }
];



export default branches