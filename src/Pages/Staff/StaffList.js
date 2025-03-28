// Staff data
const staffMembers = [
    {
        id:1,
        name: 'Habibu Sani',
        rank:'Library Officer 1',
        title: '',
        image: require('../../images/staff/Habibu Sani.jpg'),
        email: 'hsnadede@gmail.com',
        staff_no: 'Not Provided',
        phone:'',
        social: {
            linkedin: '#',
            twitter: '#'
        }
    },
    {
        id:2,
        name: 'Abdulkareem Khalil Ahmad',
        rank:'Computer Engineer Contiss 8 step 2',
        title: '',
        image: require('../../images/staff/Abdulkareem Khalil Ahmad.jpg'),
        email: 'Abdulkareemkhalil33@gmail.com',
        staff_no: 'E24/SS/174',
        phone:'',
        social: {
            linkedin: '#',
            twitter: '#'
        }
    },
    {
        id:3,
        name: 'Abdumumini Salisu',
        rank:'Head Reader Service Unit',
        title: '',
        image: require('../../images/staff/Abdulmumini Salisu.jpg'),
        email: 'asdaura09@gmail.com',
        staff_no: 'E24/SS/017',
        phone:'',
        social: {
            linkedin: '#',
            twitter: '#'
        }
    },
    {
        id:4,
        name: 'Abdulrazaq Yahaya',
        rank: 'System Analyst Contiss 7 step 2',
        title: '',
        image: require('../../images/staff/Abdulrazaq Yahaya.jpg'),
        email: 'abdulrasaqyahaya9@gmail.com',
        staff_no:'E24/SS/203',
        phone:'+234 8060895190',
        social: {
            linkedin: '#',
            twitter: '#'
        }
    },
    {
        id:5,
        name: 'Ahmad Abubakar Wakili',
        rank: 'Hgher Library Officer',
        title: '',
        image: require('../../images/staff/Ahmad Abubakar Wakili.jpg'),
        email: 'ahmadabdubakarwkl1@gmail.com',
        staff_no: 'E24/SS/167',
        phone:'',
        social: {
            linkedin: '#',
            twitter: '#'
        }
    },
    {
        id:6,
        name: 'Ahmad salihu sulaiman',
        rank:'Assistant Library Officer',
        title: '',
        image: require('../../images/staff/Ahmad salihu sulaiman.jpg'),
        email: 'sambosjr@gmail.com',
        staff_no: 'E24/SS/132',
        phone:'',
        social: {
            linkedin: '#',
            twitter: '#'
        }
    },
    {
        id:7,
        name: 'Aminu Garba',
        rank:'Library Officer',
        title: '',
        image: require('../../images/staff/Aminu Garba.jpg'),
        email: '02aminugarba@gmail.com',
        staff_no: 'E24/SS/124',
        phone:'',
        social: {
            linkedin: '#',
            twitter: '#'
        }
    },
    {
        id:8,
        name: 'Halliru Sani Salihu',
        rank:'Library Officer',
        title: 'Head of Information Resources Processing Unit',
        image: require('../../images/staff/Halliru sani salihu.jpg'),
        email: 'hallirusanie@gmail.com',
        staff_no: 'E24/SS/134',
        phone:'',
        social: {
            linkedin: '#',
            twitter: '#'
        }
    },
    {
        id:9,
        name: 'Hassan Halliru',
        rank:'Library Officer',
        title: '',
        image: require('../../images/staff/Hassan Halliru.jpg'),
        email: 'hassanhalliru1@gmail.com',
        staff_no: 'E24/SS/158',
        phone: '',
        social: {
            linkedin: '#',
            twitter: '#'
        }
    },
    {
        id:10,
        name: "Hauwa'u Haruna",
        rank:'Higher Library Officer',
        title: '',
        image: require('../../images/staff/Hauwau Haruna.jpg'),
        email: 'hauwahharu65@gmail.com',
        staff_no: 'E24/SS/193',
        phone:'',
        social: {
            linkedin: '#',
            twitter: '#'
        }
    },
    {
        id:11,
        name: 'Jamu Saidu Tafida',
        rank: 'Assitant Library Officer',
        title: '',
        image: require('../../images/staff/Jamu saidu tafida.jpg'),
        email: 'khalifahtafida@gmail.com',
        staff_no: 'E24/SS/183',
        phone: '',
        social: {
            linkedin: '#',
            twitter: '#'
        }
    },
    {
        id:12,
        name: 'Kabiru Aliyu',
        rank: 'Library Officer 2',
        title: '',
        image: require('../../images/staff/Kabiru Aliyu.jpg'),
        email: 'aliyukabiru326@gmail.com',
        staff_no: 'E24/SS/166',
        phone: '',
        social: {
            linkedin: '#',
            twitter: '#'
        }
    },
    {
        id:13,
        name: 'Mubarak Saminu',
        rank: 'Library Officer',
        title: '',
        image: require('../../images/staff/Mubarak Saminu.jpg'),
        email: 'mubaraksaminudauraa@gmail.com',
        staff_no: 'E24/SS/210',
        phone: '',
        social: {
            linkedin: '#',
            twitter: '#'
        }
    },
    {
        id:14,
        name: 'Muhammad Isiyaku',
        rank: 'Library Officer',
        title: '',
        image: require('../../images/staff/Muhammad Isiyaku.jpg'),
        email: 'misiyaku0@gmail.com',
        staff_no: 'E24/SS/040',
        phone: '',
        social: {
            linkedin: '#',
            twitter: '#'
        }
    },
    {
        id:15,
        name: 'Mujittaba Saidu Baure',
        rank:'Assitant Chief Library Officer',
        title: '',
        image: require('../../images/staff/Mujittaba saidu baure.jpg'),
        email: 'mujittababaure80@gmail.com',
        staff_no: 'E24/SS/041',
        phone: '',
        social: {
            linkedin: '#',
            twitter: '#'
        }
    },
    {
        id:16,
        name: 'Musa Abubakar Suleiman',
        rank: 'Library Officer',
        title: '',
        image: require('../../images/staff/Musa Abubakar suleiman.jpg'),
        email: 'musaabubakarsuleiman2@gmail.com',
        staff_no: 'E24/SS/149',
        phone: '',
        social: {
            linkedin: '#',
            twitter: '#'
        }
    },
    {
        id:17,
        name: 'Musa Shuaibu',
        rank:'Library Officer',
        title: 'Head of Shift',
        image: require('../../images/staff/Musa Shuaibu.jpg'),
        email: 'musashuaibu882@gmail.com',
        staff_no: 'E24/SS/068',
        phone: '',
        social: {
            linkedin: '#',
            twitter: '#'
        }
    },
    {
        id:18,
        name: 'Mustapha Abdullahi Garba',
        rank:'Library Officer',
        title: '',
        image: require('../../images/staff/Mustapha Abdullahi Garba.jpg'),
        email: 'mustaphaag7@gmail.com',
        staff_no: 'E24/SS/245',
        phone: '',
        social: {
            linkedin: '#',
            twitter: '#'
        }
    },
    {
        id:19,
        name: 'Ummar Muhammad Adam',
        rank:'Library Officer',
        title: '',
        image: require('../../images/staff/Ummar Muhammad Adam.jpg'),
        email: 'muhammadadamummar@gmail.com',
        staff_no: 'Not Provided',
        phone:'',
        social: {
            linkedin: '#',
            twitter: '#'
        }
    },
    {
        id:20,
        name: 'Tukur Abduljalal',
        rank:'Library Officer',
        title: '',
        image: require('../../images/staff/Tukur Abduljalal.png'),
        email: 'muhammedtukurabduljalal@gmail.com',
        staff_no: 'E24/SS/063',
        phone:'',
        social: {
            linkedin: '#',
            twitter: '#'
        }
    },
    {
        id:21,
        name: 'Saidu Isyaku Abdullahi',
        rank: 'Library Officer',
        title: 'Head of Bindery Section',
        image: require('../../images/staff/Saidu Isyaku Abdullahi.jpg'),
        email: 'sdanwanka@gmail.com',
        staff_no: 'Not Provided',
        phone:'',
        social: {
            linkedin: '#',
            twitter: '#'
        }
    },
    {
        id:22,
        name: 'Lubna Abba Abdullahi',
        rank: 'Library Officer',
        title: '',
        image: require('../../images/staff/Lubna Abba Abdullahi.jpg'),
        email: 'abdullahilubna10@gmail.com',
        staff_no: 'Not Provided',
        phone:'',
        social: {
            linkedin: '#',
            twitter: '#'
        }
    }
];


export default staffMembers