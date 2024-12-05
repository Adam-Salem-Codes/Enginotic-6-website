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
            label: 'Contact',
            path: '/contact',
            navMenuItems: [
                {
                    title: "Alert Dialog",
                    href: "/docs/primitives/alert-dialog",
                    description:
                        "A modal dialog that interrupts the user with important content and expects a response.",
                },
                {
                    title: "Hover Card",
                    href: "/docs/primitives/hover-card",
                    description:
                        "For sighted users to preview content available behind a link.",
                },
                {
                    title: "Progress",
                    href: "/docs/primitives/progress",
                    description:
                        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
                },
                {
                    title: "Scroll-area",
                    href: "/docs/primitives/scroll-area",
                    description: "Visually or semantically separates content.",
                },
                {
                    title: "Tabs",
                    href: "/docs/primitives/tabs",
                    description:
                        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
                },
                {
                    title: "Tooltip",
                    href: "/docs/primitives/tooltip",
                    description:
                        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
                },
            ] as Component[],
        }
    ] as NavItem[],
    // Branding
    logo: '/enginotic-logo.png',
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
        title: 'My Site',
        titleTemplate: '%s | My Site',
        description: 'A description of my site',
        openGraph: {
            type: 'website',
            locale: 'en_US',
            site_name: 'My Site'
        }
    }
}
export default config