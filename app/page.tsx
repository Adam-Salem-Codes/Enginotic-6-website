"use client";
import GradualSpacing from "@/components/ui/gradual-spacing";
import Image from "next/image";

import config from "./siteconfig";
import BlurFade from "@/components/ui/blur-fade";
import cloudAres from "@/public/cloud_ares.jpg";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import cloudAresRobots from "@/public/cloud_ares_robots.jpg";
import stratusQuo from "@/public/stratusquo.jpeg";
import cloudTeam from "@/public/cloud_team.jpg";
import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FeatureSection } from "./components/FeatureSection";
import { SingleCard } from "./components/LinearCard";
import { FlipWords } from "@/components/ui/flip-words";
import EnginoticLogo from "@/public/enginotic-logo-small.svg";
import NumberTicker from "@/components/ui/number-ticker";
const variants = {
  initial: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 100 : -100,
    filter: "blur(10px)",
  }),
  animate: { opacity: 1, x: 0, filter: "blur(0px)" },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -100 : 100,
    filter: "blur(10px)",
    position: "absolute",
  }),
};

export default function Home() {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const steps = [0, 1, 2, 3]; // Define the number of steps (screens)
  const changeTab = (newTab: number) => {
    setDirection(newTab > currentTab ? 1 : -1);
    setCurrentTab(newTab);
  };

  return (
    <main className="w-full min-h-screen dark:bg-gradient-to-b from-background via-[#141414] to-background overflow-x-hidden relative">
      {/* Hero Section */}
      <div className="w-full h-[100vh] flex flex-col justify-center items-center px-4 sm:px-12 overflow-hidden relative top-0 left-0">
        <div className="flex items-start flex-col w-full">
          <BlurFade delay={0.25} inView>
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-6xl text-gray-500 dark:text-white text-center sm:text-left">
              Leading the next generation of engineers
            </h2>
          </BlurFade>
          <BlurFade delay={0.5} inView>
            <span className="text-xl text-pretty tracking-tighter sm:text-2xl xl:text-4xl text-center sm:text-left">
              The leading vex robotics team in Virginia.
            </span>
          </BlurFade>
          <BlurFade delay={0.75} inView>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button variant="default" className="w-full sm:w-auto">
                Learn More
              </Button>
              <Button
                variant="secondary"
                className="w-full sm:w-auto shadow-lg"
                onClick={() => router.push("#more-info")}
              >
                Opportunities
              </Button>
            </div>
          </BlurFade>
        </div>
        <div className="hidden md:block w-full mt-8">
          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
              "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
              "inset-x-[30%] skew-y-12"
            )}
          />
        </div>
      </div>
      <section className="h-[100vh] w-full bg-gradient-to-b from-transparent dark:via-[#080808] via-gray-200 to-transparent flex justify-center items-center relative overflow-hidden">
        <motion.h1
          initial={{ opacity: 0, y: 0 }}
          whileInView={{
            opacity: [0, 1, 1], // 0 → 1 → 1 means: start invisible, become visible, stay visible
            y: [0, 0, -300], // 0 → 0 → -400 means: start not moved, stay in place, then move up
          }}
          transition={{
            duration: 3,
            times: [0, 0.3, 1],
            ease: "easeInOut",
          }}
          className="text-5xl text-center font-bold absolute"
        >
          <motion.hr
            transition={{ duration: 0.75, delay: 2 }}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            className="w-[50vw] border-gray-700 mb-[5vh]"
          />
          Our Mission
        </motion.h1>

        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none size-[50vw] absolute"
          initial={{ opacity: 0, rotate: 0 }}
          whileInView={{
            opacity: [0, 1, 1, 0], // Appears, stays visible, then fades out at the end
            rotate: [0, 0, 360, 360],
            // Rotate stays at 0 initially, jumps to 360 at 66%,
            // so it spins once while visible, then remains at 360 when fading out.
          }}
          style={{
            strokeDasharray: 5,
            strokeDashoffset: 5,
          }}
          transition={{
            duration: 3,
            times: [0, 0.1, 0.7, 1],
            // Explanation:
            // 0% → opacity=0, rotate=0 (invisible)
            // 10% → opacity=1, rotate=0 (visible, not yet spun)
            // 70% → opacity=1, rotate=360 (after ~2 seconds, it has completed a rotation)
            // 100% → opacity=0, rotate=360 (at the end, it fades out)
            ease: "easeInOut",
          }}
        >
          <circle
            className="stroke-black/10 stroke-1 dark:stroke-white/10"
            cx="50%"
            cy="50%"
            r="20vw"
            fill="none"
          />
        </motion.svg>
        <motion.div
          transition={{ duration: 0.75, delay: 2 }}
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="flex flex-col justify-center items-center mt-24"
        >
          <p className="w-full px-[25vw] dark:text-gray-300 text-gray-500 tracking-wide text-lg indent-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus velit
            enim ex cumque molestias iure possimus, necessitatibus nesciunt
            harum commodi itaque odio rem tempore provident animi voluptatum
            deserunt, sunt praesentium. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facilis similique aliquam iste quasi odit,
            deleniti velit fugit dicta libero nulla adipisci nemo aspernatur
            voluptatum repudiandae reprehenderit distinctio cum est blanditiis!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            laborum consequuntur, expedita, maiores est debitis vel veritatis
            perferendis velit harum consequatur, unde ad natus aut eum incidunt
            consectetur atque? Ratione.
          </p>

          <div className="w-[50vw] h-[30vh] grid grid-cols-3 place-items-center">
            <div className="flex-col">
              <NumberTicker
                value={50}
                className="text-6xl font-bold"
                delay={2}
              />
              <h1 className="text-2xl font-bold text-center text-gray-400">
                Members
              </h1>
            </div>
            <div className="flex-col">
              <NumberTicker
                value={5}
                className="text-6xl font-bold"
                delay={2}
              />
              <h1 className="text-2xl font-bold text-center text-gray-400">
                Years
              </h1>
            </div>
            <div className="flex-col">
              <NumberTicker
                value={10}
                className="text-6xl font-bold"
                delay={2}
              />
              <h1 className="text-2xl font-bold text-center text-gray-400">
                Community Events
              </h1>
            </div>
          </div>

          <hr className="w-[50vw] border-gray-700" />
        </motion.div>
      </section>

      {/* More Info Section */}
      {/*<section
        className="min-h-screen w-full flex flex-col md:flex-row"
        id="more-info"
      >
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 px-4 md:px-12">
          <h2 className="text-xl font-bold tracking-wide text-center">
            The Mission
          </h2>
          <h1 className="text-4xl font-bold tracking-wide text-center mb-8">
            Our Vision for the Future
          </h1>
          <p className="text-left w-full md:w-[80%] text-gray-500 dark:text-white indent-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ultrices lorem quis lacus aliquam, ut egestas quam tristique.
            Phasellus eget dui feugiat, tempus ipsum vel, rutrum nisl. Nullam eu
            metus feugiat, pharetra justo ac, egestas velit. Maecenas odio
            lectus, ultrices id consectetur eget, eleifend egestas ipsum.
            Maecenas at ornare tellus. Nunc at erat bibendum, rutrum erat eget,
            egestas ligula.
          </p>
        </div>

        <div className="w-full md:w-1/2 flex flex-col items-center justify-center relative px-4 md:px-12 mt-8 md:mt-0">
          <div className="group flex items-center justify-center w-full md:w-[66%] duration-300 transition-all relative">
            <AnimatePresence custom={direction}>
              <button
                aria-label="Previous Slide"
                className="p-2 px-4 hidden z-[40] md:block absolute -left-24 top-1/2 transform -translate-y-1/2 rounded-full border aspect-square mx-2 text-center hover:bg-blue-500 hover:text-white transition-colors duration-300 cursor-pointer"
                onClick={() =>
                  changeTab(
                    currentTab === 0 ? steps.length - 1 : currentTab - 1
                  )
                }
              >
                <div className="transform duration-300 transition-all">
                  {"<"}
                </div>
              </button>
              {steps.map(
                (step, index) =>
                  currentTab === index && (
                    <motion.div
                      key={`tab-${step}`}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={variants}
                      custom={direction}
                      transition={{ duration: 0.5 }}
                      className="h-auto w-full flex justify-center items-center"
                    >
                      <Image
                        src={
                          step === 0
                            ? cloudAres
                            : step === 1
                            ? cloudAresRobots
                            : step === 2
                            ? stratusQuo
                            : cloudTeam
                        }
                        alt={`Slide ${step + 1} Image`}
                        className="object-cover rounded-xl shadow-xl border w-full h-auto max-h-96"
                        layout="responsive"
                      />
                    </motion.div>
                  )
              )}
              <button
                aria-label="Next Slide"
                className="p-2 px-4 hidden md:block absolute -right-24 top-1/2 transform -translate-y-1/2 rounded-full border aspect-square mx-2 text-center hover:bg-blue-500 hover:text-white transition-colors duration-300 cursor-pointer"
                onClick={() =>
                  changeTab(
                    currentTab === steps.length - 1 ? 0 : currentTab + 1
                  )
                }
              >
                <div className="transform duration-300 transition-all">
                  {">"}
                </div>
              </button>
            </AnimatePresence>
          </div>

          <div className="flex space-x-2 mt-4">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => {
                  changeTab(index);
                  setDirection(index > currentTab ? 1 : -1);
                }}
                className={`h-2 w-2 max-sm:h-3 max-sm:w-3 rounded-full transition-colors duration-300 focus:outline-none ${
                  currentTab === index
                    ? "bg-blue-500"
                    : "bg-gray-500 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Cards Section */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center px-4 sm:px-12 py-8">
        <div className="mb-24 flex justify-center items-center">
          <h1 className="text-4xl font-bold tracking-wide text-center w-1/4">
            Life Long
            <div className="relative inline-block w-[150px]">
              <FlipWords
                className="text-4xl font-bold tracking-wide text-center"
                words={["Experiences", "Impact", "Friends"]}
              />
            </div>
            <br />
          </h1>
          <p className="text-center text-gray-500 dark:text-white w-1/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            ultrices lorem quis lacus aliquam, ut egestas quam tristique.
            Phasellus eget dui feugiat, tempus ipsum vel, rutrum nisl. Nullam eu
            metus feugiat, pharetra justo ac, egestas velit.
          </p>
        </div>
        <div className="w-[80%] h-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <SingleCard
            src={cloudAres}
            title="Mall of America"
            category="Summary of MOA 2024-2025"
            content={
              <>
                Example content which can include any HTML elements or React
                Components. Literally put whatever you want in here.
              </>
            }
            className="grayscale hover:grayscale-0 hover:duration-500"
          />
          <SingleCard
            src={cloudAresRobots}
            title="Google Robotics Workshop"
            category="Group photo with Ares and Cloud"
            content={
              <>
                Example content which can include any HTML elements or React
                Components. Literally put whatever you want in here.
              </>
            }
            className="grayscale hover:grayscale-0 hover:duration-500"
          />
          <SingleCard
            src={cloudTeam}
            title="Cloudelicous"
            category="Review of MOA from Cloud's perspective"
            content={
              <>
                Example content which can include any HTML elements or React
                Components. Literally put whatever you want in here.
              </>
            }
            className="grayscale hover:grayscale-0 hover:duration-500"
          />
        </div>
      </section>
      <section className="w-full h-[30vh] flex flex-col justify-center items-center px-4 sm:px-12 border-t border-b mt-24 mb-1">
        <h1 className="text-2xl md:text-4xl font-bold text-center mt-4 sm:mt-0">
          <FlipWords
            words={[
              "Make an Impact.",
              "Join a community.",
              "Build the future.",
              "Learn something new.",
            ]}
          />
          <div className="flex items-center justify-center gap-4 mt-12">
            <Button variant="default" className="w-full sm:w-auto">
              Learn More
            </Button>
            <Button
              variant="secondary"
              className="w-full sm:w-auto shadow-lg"
              onClick={() => router.push("#more-info")}
            >
              Opportunities
            </Button>
          </div>
        </h1>
      </section>
    </main>
  );
}
