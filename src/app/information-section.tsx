"use client";
import { Typography, Button } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  CheckCircleIcon,
  FireIcon,
} from "@heroicons/react/24/solid";

import InfoCard from "@/components/info-card";

const EDUCATION = [
  {
    icon: AcademicCapIcon,
    title: "Matriculation | SSC - Dr. Kadam Gurukul, Indapur",
    date: "2019",
    children:
      "Studied subjects such as Hindi, English, Mathematics, Science, and Social Studies.",
  },
  {
    icon: AcademicCapIcon,
    title: "Intermediate | MPC - Dr. Kadam Gurukul, Indapur",
    date: "2019-2021",
    children:
      "Completed intermediate education with a focus on Mathematics, Physics, and Chemistry.",
  },
  {
    icon: AcademicCapIcon,
    title: "B.Tech in Computer Science & Engineering - K L University, Guntur",
    date: "2021-2025",
    children:
      "Currently pursuing a Bachelor's degree in Computer Science & Engineering with a specialization in Data Science and Big Data Analytics.",
  },
];

const EXPERIENCE = [
  {
    icon: BriefcaseIcon,
    title: "Research Intern",
    date: "2023",
    children:
      "Working as a Research Intern under Prof. Dr. Suryakanth V. Gangashetty and Developed ML algorithms for precise weed and pesticide detection",
  },
];

const CERTIFICATIONS = [
  {
    icon: CheckCircleIcon,
    title: "AWS Cloud Practitioner (CLF-CO1)",
    children:
      "Demonstrated understanding of AWS Cloud services and their deployment, helping drive efficient and scalable cloud solutions.",
    button: <Button color="gray" onClick={() => window.open("https://www.credly.com/badges/0ed869c2-88b5-494b-a6f0-bae9bb680470/public_url", '_blank')} className="mt-2">Verify</Button>,
  },
  {
    icon: CheckCircleIcon,
    title: "RedHat Certified Enterprise Application Developer (EX-183)",
    children:
      "Led the development of enterprise applications using Red Hat technologies, contributing to robust and secure software solutions.",
    button : <Button color="gray" onClick={() => window.open("https://www.credly.com/badges/e912c03a-29c1-4f4a-858f-e221e9b1e268/public_url", '_blank')} className="mt-2">Verify</Button>,
  },
  {
    icon: CheckCircleIcon,
    title: "NPTEL - Python for Data Science (IIT Madras)",
    children:
      "Mastered Python programming for data science applications, enabling advanced data analysis and machine learning implementations.",
    button : <Button color="gray" onClick={() => window.open("https://drive.google.com/file/d/13irQgUjOV0kW8B53FVc10GIoRcVY_okz/view", '_blank')} className="mt-2">Verify</Button>,
  },
  {
    icon: CheckCircleIcon,
    title: "Business English Certificate",
    children:
      "Achieved proficiency in business English, enhancing communication skills for professional settings.",
    button : <Button color="gray" onClick={() => window.open("https://drive.google.com/file/d/1F8wqHauIsAtAyf8W26_Oz14E7C5rq2Qq/view", '_blank')} className="mt-2">Verify</Button>,
  },
];

const SKILLS = [
  {
    icon: FireIcon,
    title: "Programming Languages",
    date: "Technical Skills",
    children:
      "Proficient in C, Java, and Python for developing various types of applications, including web, desktop, and data science projects.",
  },
  {
    icon: FireIcon,
    title: "Python Web Frameworks",
    date: "Technical Skills",
    children:
      "Experienced in using Django, a high-level Python web framework, for developing robust and scalable web applications.",
  },
  {
    icon: FireIcon,
    title: "Enterprise Java Frameworks",
    date: "Technical Skills",
    children:
      "Familiar with Spring Boot and Hibernate, a popular Java framework, for building enterprise-level applications with ease and efficiency.",
  },
  {
    icon: FireIcon,
    title: "Front-End Web Technologies",
    date: "Technical Skills",
    children:
      "Knowledgeable in HTML,CSS & JS for creating the structure of web pages and enhancing user experience.",
  },
  {
    icon: FireIcon,
    title: "Machine Learning Algorithms",
    date: "Technical Skills",
    children:
      "Skilled in implementing machine learning algorithms in Python for tasks such as classification, regression, and clustering.",
  },
];


export function InformationSection() {
  return (
    <section className="pb-28 px-8">
      <div className="grid xl:grid-cols-2 md:grid-cols-1 container gap-20 mx-auto items-start">
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold">
              Education
            </Typography>
            <Typography variant="lead" className="!text-gray-500">
              See my education history.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
            {EDUCATION.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold">
              Experience
            </Typography>
            <Typography variant="lead" className="!text-gray-500">
            See my experience as a developer.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
            {EXPERIENCE.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
      <div className="container gap-20 mt-36 mx-auto items-center">
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold">
            Certifications
            </Typography>
            <Typography variant="lead" className="!text-gray-500">
            Proof of ongoing professional growth.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12 lg:grid-cols-2">
          {CERTIFICATIONS.map((props, idx) => (
              <div key={idx}>
                <InfoCard {...props} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container gap-20 mt-36 mx-auto items-center">
        <div>
          <div className="mb-10">
            <Typography color="blue-gray" className="mb-2 text-3xl font-bold">
              Skills
            </Typography>
            <Typography variant="lead" className="!text-gray-500">
              Check out my technical and soft skills.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12 lg:grid-cols-2">
            {SKILLS.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InformationSection;
