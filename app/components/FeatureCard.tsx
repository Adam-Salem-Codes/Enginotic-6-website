import { IconType } from "react-icons";

interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="flex flex-col items-start p-6">
      <div className="p-2 rounded-lg bg-neutral-900">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="mt-4 text-lg font-semibold dark:text-white">{title}</h3>
      <p className="mt-2 text-gray-400 dark:text-white">{description}</p>
    </div>
  );
}
