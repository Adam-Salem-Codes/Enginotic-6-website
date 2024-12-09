
const RobotOutlineSVG = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 400 400"
            fill="none"
            stroke="black"
            strokeWidth="2"
        >
            {/* Base Frame */}
            <rect x="50" y="200" width="300" height="30" rx="5" />

            {/* Vertical Supports */}
            <line x1="70" y1="200" x2="70" y2="100" />
            <line x1="330" y1="200" x2="330" y2="100" />

            {/* Arm / Mechanism */}
            <path d="M100 100 L200 50 L300 100" stroke="black" strokeWidth="2" />
            <path d="M150 100 L150 160" stroke="black" strokeWidth="2" />
            <path d="M250 100 L250 160" stroke="black" strokeWidth="2" />

            {/* Wheels */}
            <circle cx="100" cy="230" r="20" stroke="black" strokeWidth="2" />
            <circle cx="300" cy="230" r="20" stroke="black" strokeWidth="2" />

            {/* Labels / Decorative Features */}
            <text x="150" y="190" fontSize="12" fill="black">
                WOODBRIDGE, VIRGINIA
            </text>
            <text x="170" y="250" fontSize="16" fill="red" fontWeight="bold">
                2072A
            </text>

            {/* Decorative diagonal lines */}
            <line x1="50" y1="100" x2="100" y2="50" stroke="black" strokeWidth="1" />
            <line x1="300" y1="100" x2="350" y2="50" stroke="black" strokeWidth="1" />
        </svg>
    );
};

export default RobotOutlineSVG;
