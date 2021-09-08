// config.js
module.exports = {
    github: {
        username: 'Mehedi2024', // Your GitHub org/user name. (Required)
        sortBy: 'stars', // stars | updated
        limit: 8, // How many projects to display.
        exclude: {
            forks: false, // Forked projects will not be displayed if set to true.
            projects: [] // These projects will not be displayed. example: ['my-project1', 'my-project2']
        }
    },
    social: {
        linkedin: 'Mehdi Hasan',
        twitter: 'Mehdi_hasan24',
        facebook: 'https://www.facebook.com/Mahdihasanneloy/',
        upwork: 'https://www.upwork.com/o/profiles/users/~0162aa0475fbfa12b6/',
        fiverr: 'https://www.fiverr.com/mehdihasan20?up_rollout=true',
        medium: '',
        devto: '',
        website: 'https://arifszn.github.io',
        phone: '',
        email: 'contact@arifszn.com'
    },
    skills: [
        'JavaScript',
        'React.js',
        'Jquery',
        'MySQL',
        'Git',
        'CSS',
        'Tailwind',
        'Bootstrap',
    ],
    experiences: [
        { 
            company: 'Monstarlab Bangladesh',
            position: 'Software Engineer',
            from: 'September 2021',
            to: 'Present'
        },
        { 
            company: 'Orangetoolz - My Offer 360 Degree',
            position: 'Jr. Full Stack Engineer',
            from: 'July 2019',
            to: 'August 2021'
        },
        { 
            company: 'Techvillage',
            position: 'Jr. Software Engineer',
            from: 'January 2019',
            to: ' June 2019'
        }
    ],
    education: [
        { 
            institution: 'University Of Liberal Arts',
            degree: 'Bachelor of Science',
            from: '2016',
            to: '202'
        },
        { 
            institution: 'Adamjhee Cantonment College',
            degree: 'Higher Secondary Certificate (HSC)',
            from: '2012',
            to: '2014',
        },
        { 
            institution: 'Dhanmondi Government Boys High School',
            degree: 'Secondary School Certificate (SSC)',
            from: '2002',
            to: '2012'
        }
    ],
    blog: {
        // Display blog posts from your medium or dev.to account. (Optional)
        source: 'dev.to', // medium | dev.to
        username: 'arifszn',
        limit: 2 // How many posts to display. Max is 10.
    },
    googleAnalytics: {
        // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
        id: 'G-WLLB5E14M6' // Please remove this and use your own tag id
    },
    themeConfig: {
        default: 'light',

        // Hides the switch in the navbar
        // Useful if you want to support a single color mode
        disableSwitch: false,

        // Should we use the prefers-color-scheme media-query,
        // using user system preferences, instead of the hardcoded default
        respectPrefersColorScheme: true,

        // Available themes. To remove any theme, exclude from here.
        themes: [
            'light',
            'dark',
            'cupcake',
            'bumblebee',
            'emerald',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula'
        ]
    }
}