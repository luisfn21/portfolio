"use client";

import Image from "next/image";
import React from "react";
import portrait from "@/public/portrait.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 ">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={portrait}
              alt="luis portrait"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-white shadow-xl"
            />{" "}
          </motion.div>
          <motion.span
            className="absolute text-4xl bottom-0 right-0"
            role="img"
            aria-label="Waving hand emoji"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffnes: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">¡Hola! Soy Luis</span>, Soy un{" "}
        <span className="font-bold">frontend developer </span>
        apasionado por crear
        <span className="italic"> páginas y aplicaciones</span> con{" "}
        <span className="underline">React y Next.js.</span> Este es mi espacio
        para compartir proyectos, aprender y seguir creciendo.{" "}
        <span className="font-bold">¡Gracias por visitar!</span>
      </motion.p>

      <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 tex-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1
        }}
      >
        <Link
          href="#contact"
          className=" group bg-gray-900 px-7 py-3 text-gray-50 flex items-center gap-2 rounded-full outlene-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
        >
          {" "}
          Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />{" "}
        </Link>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] hover:bg-gray-200"
          href="https://www.linkedin.com/in/luisfn21/"
        >
          <FaLinkedin />{" "}
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.40rem] hover:bg-gray-200"
          href="https://www.linkedin.com/in/luisfn21/"
        >
          <FaGithubSquare />{" "}
        </a>
      </motion.div>
    </section>
  );
}
