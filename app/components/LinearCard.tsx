"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Image, { ImageProps, StaticImageData } from "next/image";
import { cn } from "@/lib/utils";

interface SingleCardProps {
  src: StaticImageData;
  title: string;
  category: string;
  content: React.ReactNode;
  className?: string;
}

export function SingleCard({
  src,
  title,
  category,
  content,
  className,
}: SingleCardProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        handleClose();
      }
    }

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 h-screen z-50 overflow-auto">
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
              onClick={handleClose}
            />

            {/* Expanded Content */}
            <motion.div
              ref={containerRef}
              className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit z-[60] my-10 p-4 sm:p-6 md:p-8 lg:p-10 rounded-3xl font-sans relative"
              layoutId={`card-${title}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <button
                className="sticky top-4 h-8 w-8 right-0 ml-auto bg-black dark:bg-white rounded-full flex items-center justify-center"
                onClick={handleClose}
              >
                <X className="h-6 w-6 text-neutral-100 dark:text-neutral-900" />
              </button>
              <motion.p
                layoutId={`category-${title}`}
                className="text-base font-medium text-black dark:text-white"
                layout
              >
                {category}
              </motion.p>
              <motion.p
                layoutId={`title-${title}`}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white"
                layout
              >
                {title}
              </motion.p>
              <div className="py-6 sm:py-8 md:py-10">{content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Collapsed Card */}
      <motion.button
        onClick={handleOpen}
        layoutId={`card-${title}`}
        className={cn(
          "rounded-3xl bg-gray-100 dark:bg-neutral-900 aspect-square w-full overflow-hidden flex flex-col items-start justify-start relative z-10",
          className
        )}
        layout
      >
        <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-30 pointer-events-none" />
        <div className="relative z-40 p-4 sm:p-6 md:p-8">
          <motion.p
            layoutId={`category-${title}`}
            className="text-white text-sm sm:text-base md:text-lg font-medium font-sans text-left"
            layout
          >
            {category}
          </motion.p>
          <motion.p
            layoutId={`title-${title}`}
            className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold max-w-xs text-left [text-wrap:balance] font-sans mt-2"
            layout
          >
            {title}
          </motion.p>
        </div>
        <BlurImage
          src={src}
          alt={title}
          fill
          className="object-cover absolute z-10 inset-0"
        />
        <a className="p-2 px-4 z-[99] rounded-full border aspect-square mx-2 text-center bg-neutral-700 hover:bg-neutral-800 hover:text-white transition-colors duration-300 hover:cursor-pointer absolute bottom-4 right-4">
          <div className="duration-300 transition-all">{"+"}</div>
        </a>
      </motion.button>
    </>
  );
}

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      className={cn(
        "transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className
      )}
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Card background"}
      {...rest}
    />
  );
};
