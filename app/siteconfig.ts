

// README: This file contains all of the major configuration for the website
// It does NOT contain content that is on the landing page and team pages,
// that will most likely be hardcoded or have a seperate config file for each team.

type Component = {
    title: string;
    href: string;
    description: string;
};

type NavItem = {
    label: string;
    path: string;
    navMenuItems: Component[];
};

type Team = {
    teamNumber: string;
    teamName: string;
    description: string;
};

type Config = {
    siteName: string;
    siteDescription: string;
    siteUrl: string;
    teams: Team[];
    navItems: NavItem[];
    logo: string;
    icon: string;
    social: {
        twitter: string;
        github: string;
        linkedin: string;
    };
    theme: {
        primaryColor: string;
        secondaryColor: string;
        fontFamily: string;
    };
    defaultSeo: {
        title: string;
        titleTemplate: string;
        description: string;
        openGraph: {
            type: string;
            locale: string;
            site_name: string;
        };
    };
};

const config: Config = {
    // Site metadata
    siteName: 'Enginotic 6 Robotics',
    siteDescription: 'The official website of the Enginotic 6 Robotics Organization',
    siteUrl: '', // TODO: Add the site URL
    teams: [
        {
            teamNumber: "2072A",
            teamName: "Ares",
            description: "",
        },
        {
            teamNumber: "2072U",
            teamName: "Ubernimbus",
            description: "",
        },
        {
            teamNumber: "2072X",
            teamName: "Cloudelicous",
            description: "",
        },
        {
            teamNumber: "2072C",
            teamName: "Stratus Quo",
            description: "",
        },
    ],

    // Navigation items for full modification view in the Navbar.tsx file
    navItems: [
        {
            label: 'Teams',
            path: '/teams',
            navMenuItems: [
                ...[
                    {
                        teamNumber: "2072A",
                        teamName: "Ares",
                        description: "",
                    },
                    {
                        teamNumber: "2072U",
                        teamName: "Ubernimbus",
                        description: "",
                    },
                    {
                        teamNumber: "2072X",
                        teamName: "Cloudelicous",
                        description: "",
                    },
                    {
                        teamNumber: "2072C",
                        teamName: "Stratus Quo",
                        description: "",
                    },
                ].map(team => ({
                    title: `${team.teamName} (${team.teamNumber})`,
                    href: `/teams/${team.teamNumber.toLowerCase()}`,
                    description: team.description || "No description available.",
                })),
            ] as Component[],
        },
        {
            label: 'Sponsors',
            path: '/sponsors',
            navMenuItems: [
                {
                    title: "Be the first to sponsor!",
                    href: "/sponsors",
                    description:
                        "We are always looking for new sponsors to help us continue to lead Virginia Robotics.",
                },
            ] as Component[],
        },
        {
            label: 'Oppertunities',
            path: '/oppertunities',
        },
        {
            label: 'Contact',
            path: '/contact',
        },

    ] as NavItem[],
    // Branding
    logo: '/enginotic-logo.svg',
    icon: '/images/favicon.ico',

    // Social media
    social: {
        twitter: 'https://twitter.com/username',
        github: 'https://github.com/username',
        linkedin: 'https://linkedin.com/in/username'
    },

    // Theme configuration
    theme: {
        primaryColor: '#007bff',
        secondaryColor: '#6c757d',
        fontFamily: 'system-ui, -apple-system, sans-serif'
    },

    // SEO defaults
    defaultSeo: {
        title: 'Enginotic 6 Robotics',
        titleTemplate: '%s | My Site',
        description: 'The largest virginia private robotics organization.',
        openGraph: {
            type: 'website',
            locale: 'en_US',
            site_name: 'My Site'
        }
    }
}
export default config