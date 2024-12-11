"use client";
import BlurFade from "@/components/ui/blur-fade";
import cloudAres from "@/public/cloud_ares.jpg";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import cloudAresRobots from "@/public/cloud_ares_robots.jpg";
import cloudTeam from "@/public/cloud_team.jpg";
import { useState } from "react";
import { motion } from "framer-motion";
import { SingleCard } from "./components/LinearCard";
import { FlipWords } from "@/components/ui/flip-words";
import NumberTicker from "@/components/ui/number-ticker";
import Globe from "@/components/ui/globe";
import Virginia from "./components/Virginia";

export default function Home() {
  const router = useRouter();
  const [currentTab, setCurrentTab] = useState(0);

  return (
    <main className="w-full min-h-screen dark:bg-gradient-to-b from-background via-[#141414] to-background overflow-x-hidden relative">
      {/* Hero Section */}
      <div className="w-full h-[100vh] flex flex-col justify-center items-center px-4 sm:px-12 overflow-hidden relative top-0 left-0">
        <div className="flex flex-col w-full from-gray-100 dark:from-gray-800 via-transparent to-transparent p-8 rounded-lg">
          <BlurFade delay={0.25} inView className="">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl xl:text-5xl text-gray-500 dark:text-white text-center sm:text-left">
              The Next Generation of Engineers
            </h2>
          </BlurFade>
          <BlurFade delay={0.5} inView>
            <span className="text-xl text-pretty tracking-tighter sm:text-2xl xl:text-4xl text-center sm:text-left">
              Enginotic 6 Robotics, Non-Profit Virignia Robotics Organization
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
      <section className="min-h-screen py-[30vh] w-full flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-transparent dark:via-[#080808] via-gray-200 to-transparent">
        {/* Mission Title */}
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          whileInView={{
            opacity: [0, 1, 1],
            y: [0, 0, -100],
          }}
          transition={{
            duration: 2,
            times: [0, 0.3, 1],
            ease: "easeInOut",
          }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-2 relative  "
        >
          <motion.hr
            transition={{ duration: 0.75, delay: 1 }}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            className="w-[50vw] border-gray-700 mb-16"
          />
          <h1 className="text-5xl font-bold">Our Mission</h1>
        </motion.div>

        {/* Rotating Circle Animation */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[25%] -translate-y-1/2 py-36 flex justify-center items-center">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            className="pointer-events-none size-[40vw] "
            initial={{ opacity: 0, rotate: 0 }}
            viewport={{ once: true }}
            whileInView={{
              opacity: [0, 1, 1, 0],
              rotate: [0, 0, 360, 360],
            }}
            style={{
              strokeDasharray: 5,
              strokeDashoffset: 5,
            }}
            transition={{
              duration: 3,
              times: [0, 0.1, 0.7, 1],
              ease: "easeInOut",
            }}
          >
            <circle
              className="stroke-black/50 stroke-1 dark:stroke-white/20"
              cx="50%"
              cy="50%"
              r="15vw"
              fill="none"
            />
          </motion.svg>
        </div>

        {/* Mission Content */}
        <motion.div
          transition={{ duration: 0.75, delay: 1.5 }}
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center max-w-6xl px-4 md:px-8"
        >
          <p className="text-lg text-gray-500 dark:text-gray-300 tracking-wide text-center mb-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus velit
            enim ex cumque molestias iure possimus, necessitatibus nesciunt
            harum commodi itaque odio rem tempore provident animi voluptatum
            deserunt, sunt praesentium. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facilis similique aliquam iste quasi odit,
            deleniti velit fugit dicta libero nulla adipisci nemo aspernatur
            voluptatum repudiandae reprehenderit distinctio cum est blanditiis!
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            <div className="flex flex-col items-center">
              <NumberTicker
                value={50}
                className="text-5xl md:text-6xl font-bold"
                delay={1.5}
              />
              <h2 className="text-xl md:text-2xl font-bold text-gray-400 mt-2">
                Members
              </h2>
            </div>
            <div className="flex flex-col items-center">
              <NumberTicker
                value={7}
                className="text-5xl md:text-6xl font-bold"
                delay={1.5}
              />
              <h2 className="text-xl md:text-2xl font-bold text-gray-400 mt-2">
                Years
              </h2>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <NumberTicker
                  value={15}
                  className="text-5xl md:text-6xl font-bold"
                  delay={1.5}
                />
                <span className="text-5xl md:text-6xl font-bold">+</span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-400 mt-2">
                Community Events
              </h2>
            </div>
          </div>

          <hr className="w-full max-w-3xl border-gray-700 mb-16" />

          {/* Additional Content */}
          <div className="flex flex-col items-center max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-center mb-6">
              Programs
            </h2>
            <p className="text-center text-gray-700 dark:text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
              adipisci est, culpa odio perferendis voluptatum velit rem maiores
              excepturi aperiam ipsam provident explicabo, aliquam nulla harum,
              non dolor corporis omnis?
            </p>
          </div>
        </motion.div>
        <div className="flex flex-col md:flex-row w-[70vw] mt-24 border-y border-gray-700 min-h-[40vh] max-h-[55vh]">
          <motion.div
            transition={{ duration: 0.75, delay: 1.5 }}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center w-full md:w-1/2 px-4 md:px-8 py-12 border-t md:border-t-0 border-r border-gray-700"
          >
            <div className="relative translate-y-1/3 top-1/4 text-center w-full">
              <h3 className="text-2xl font-bold">Valuable life skills.</h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                Vex Robotics teaches students hireable skills such as: how to
                problem solve, work in a team, document their work, communicate
                properly, lead, program, and more.
              </p>
            </div>

            <Globe
              className="relative top-1/2 [mask-image:linear-gradient(to_bottom,black_0%,transparent_50%)] cursor-pointer"
              config={{
                width: 200,
                height: 200,
                dark: 1,
                baseColor: [0.4, 0.4, 0.4],
                glowColor: [0.7, 0.7, 0.7],
                markerColor: [0.1, 0.8, 1],
                phi: 0,
                theta: 0,
                mapSamples: 16000,
                mapBrightness: 6,
                markers: [],
                onRender: () => {},
                devicePixelRatio: 2,
                diffuse: 1.2,
              }}
            />

            {/*}
            <SingleCard
              src={Google}
              title="Google Robotics Workshop "
              category="Google Robotics Workshop to teach kids about robotics."
              content={
                <>
                  Example content which can include any HTML elements or React
                  Components. Literally put whatever you want in here.
                </>
              }
              className="grayscale hover:grayscale-0 hover:duration-500 h-[400px] mt-12 border-gray-700 border"
            />*/}
          </motion.div>
          <motion.div
            transition={{ duration: 0.75, delay: 1.75 }}
            whileInView={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            viewport={{ once: true }}
            className="flex group flex-col items-center justify-center w-full md:w-1/2 px-4 md:px-8 py-12 border-b md:border-b-0 border-gray-700"
          >
            <div className=" h-4/12 text-center">
              <h3 className="text-2xl font-bold mb-4">
                Community, leadership, and responsibility.
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-300">
                Vex Robotics is a great way to spark a passion for engineering
                in Middle School and High School students.
              </p>
            </div>
            <div className="flex items-center justify-center w-[75%] duration-300 transition-all relative bottom-10 h-2/3">
              {/*<AnimatePresence custom={direction}>
                <button
                  aria-label="Previous Slide"
                  className="p-2 px-4 hidden z-[40] group-hover:block absolute -left-24 top-1/2 transform -translate-y-1/2 rounded-full border aspect-square mx-2 text-center hover:bg-blue-500 hover:text-white transition-colors duration-300 cursor-pointer"
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
                  className="p-2 px-4 hidden group-hover:block absolute -right-24 top-1/2 transform -translate-y-1/2 rounded-full border aspect-square mx-2 text-center hover:bg-blue-500 hover:text-white transition-colors duration-300 cursor-pointer"
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
              </AnimatePresence>*/}
              <div className="relative top-1/2 translate-y-1/3 left-1/2">
                <Virginia className="[mask-image:linear-gradient(to_bottom,black_0%,transparent_30%)] mb-24" />
              </div>
            </div>
          </motion.div>
        </div>
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
      <div className="relative min-h-[30vw] w-full bg-neutral-950 flex flex-col items-center justify-center overflow-hidden">
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Neutral and zinc gradient glow effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[500px] w-full bg-gradient-to-r from-transparent via-zinc-800/30 to-transparent" />
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[500px] w-full bg-gradient-to-r from-transparent via-neutral-800/20 to-transparent rotate-180" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="text-6xl font-bold tracking-wide text-center w-full">
            Life Long
            <div className="relative inline-block">
              <FlipWords
                className="text-6xl font-bold tracking-wide text-center"
                words={["Experiences", "Impact", "Friends"]}
              />
            </div>
            <br />
          </h1>
          <p className="mt-6 text-lg text-neutral-400">
            Get in contact with us to learn more about how to join or sponsor
            us.
          </p>
          <div className="flex gap-4 mt-8 justify-center h-full">
            <Button variant="default" className="shadow-lg text-lg  py-5 px-4">
              Our teams.
            </Button>
            <Button
              className="shadow-lg  text-lg  py-5 px-4"
              variant="secondary"
              onClick={() => router.push("#more-info")}
            >
              Talk to us.
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
