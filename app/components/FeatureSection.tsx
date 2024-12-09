import { GoProject } from "react-icons/go";
import { BsPeople } from "react-icons/bs";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { IoStatsChartOutline } from "react-icons/io5";
import { FeatureCard } from "./FeatureCard";

const features = [
  {
    icon: BsPeople,
    title: "Smarter Scouting",
    description:
      "Our platform gives your robotics team the edge you need to dominate every match.",
  },
  {
    icon: GoProject,
    title: "Data-Driven Insights",
    description:
      "Turn competition data into actionable strategies. Visualize trends and make smarter decisions with real-time analytics.",
  },
  {
    icon: AiOutlineFundProjectionScreen,
    title: "Team Collaboration",
    description:
      "Share data effortlessly and stay connected during the heat of competition.",
  },
  {
    icon: IoStatsChartOutline,
    title: "Performance Tracking",
    description:
      "Monitor your team’s progress throughout the season. Set goals, evaluate metrics, and celebrate milestones with ease.",
  },
];

export function FeatureSection() {
  return (
    <div className=" py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
