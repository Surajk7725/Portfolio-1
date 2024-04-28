"use client";

import { ProjectCard } from "@/components/project-card";
import { Typography, Button} from "@material-tailwind/react";
import {ArrowRightIcon} from "@heroicons/react/24/solid";

const PROJECTS = [
  {
    img: "/image/prjct-1.png",
    title: "Simple Landing Page",
    desc: "Responsive landing page crafted with HTML and CSS, engaging users with captivating visuals.",
    github: "https://landing-page-surajk7725s-projects.vercel.app/",
  },
  {
    img: "/image/prjct-7.png",
    title: "Login & Signup in React",
    desc: "Secure, user-friendly login, signup and forget password system expertly crafted with React.",
    github: "https://github.com/Surajk7725/React_Login",
  },
  {
    img: "/image/prjct-8.png",
    title: "Rent Us!",
    desc: "Online platform for renting services, enabling seamless transactions between users and providers with Django.",
    github: "http://sk7ayanokoji.pythonanywhere.com/",
  },
  {
    img: "/image/prjct-6.png",
    title: "AcademeX",
    desc: "Academic management system for schools or institutions using Springboot Framework",
    github: "https://github.com/Surajk7725/SDP_JFSD",
  },
  {
    img: "/image/prjct-5.png",
    title: "URL Shortener",
    desc: " Web service to shorten long URLs for easier sharing and tracking of links.",
    github: "https://github.com/Surajk7725/urlshortener",
  },
  {
    img: "/image/prjct-2.png",
    title: "Road Accident Dashboard",
    desc: "Used Tableau to display trends related to road accidents.",
    github: "https://github.com/Surajk7725/Road-Accident-Dashboard",
  },
  {
    img: "/prjct-4.png",
    title: "OpenCV Image Conversion",
    desc: "Image processing tool converting images between different formats.",
    github: "https://github.com/Surajk7725/OpenCV_Color",
  },
  {
    img: "/prjct-3.png",
    title: "Object Detection",
    desc: "Implementation of CV techniques to identify and locate objects in images.",
    github: "https://github.com/Surajk7725/Object_Detection",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
        >
          Skilled in web development, Python, and ML, I create captivating digital solutions. 
          Need a mobile app or website upgrade? I&apos;m here to turn your digital
          dreams into reality.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
      <div className="mt-16" />
      <center>
      <Button
  variant="text"
  color="gray"
  className="flex items-center gap-2"
  onClick={() => window.open('https://github.com/Surajk7725?tab=repositories', '_blank')}
>
  view more
  <ArrowRightIcon
    strokeWidth={3}
    className="h-3.5 w-3.5 text-gray-900"
  />
</Button>

  </center>
    </section>
  );
}

export default Projects;
