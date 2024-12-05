"use client"
import GradualSpacing from "@/components/ui/gradual-spacing";
import Image from "next/image";
import { NextSeo } from 'next-seo';
import config from "./siteconfig";
import BlurFade from "@/components/ui/blur-fade";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <NextSeo
        title={config.siteName}
        description={config.siteDescription}
      />
      <div>
        <BlurFade delay={0.25} inView>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
            Enginotic 6 Robotics.
          </h2>
        </BlurFade>
        <BlurFade delay={0.25 * 2} inView>
          <span className="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none">
            The leading vex robotics team in virginia.
          </span>
        </BlurFade>

      </div>
    </div>
  );
}
