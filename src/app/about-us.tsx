"use client";
import { Typography } from "@material-tailwind/react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="py-16 px-8 flex items-center justify-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 md:mr-8">
        <Image
            src="/suraj.jpeg"
            alt="Picture of Suraj"
            width={1000}
            height={1000}
            className="h-[24rem] w-full rounded-xl object-contain"
        />
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            <center>About Me</center>
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-5">
            I&apos;m Suraj Kumar Tellakula
          </Typography>
          <Typography variant="body1" className="mb-6">
          🎓 An aspiring computer science professional, excelling in academics and extracurriculars. Aiming to cultivate practical work experience, leveraging strong technical skills in software applications 💻, adept at tackling challenging tasks 💪, and possessing exceptional time management ⏰ and communication abilities 🗣️. Known for a disciplined yet empathetic approach, adept at analyzing and resolving complex issues 🤝🔍.
          </Typography>
          <Typography variant="body1" className="mb-6">
          I excel in Java, particularly in crafting efficient data structures. 🚀 With a balanced proficiency in various web development frameworks, I am adept at creating dynamic web applications. 💻 Additionally, I am highly skilled in Python, leveraging its power for data science and analysis as a dedicated student in this field. 🐍
        </Typography>
        </div>
      </div>
    </section>
  );
}
