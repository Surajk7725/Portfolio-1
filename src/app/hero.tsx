"use client";
import Link from 'next/link';
import { IconButton, Typography, Button} from "@material-tailwind/react";
const EMAIL = "surajkumar.ayanokoji.7@gmail.com";


function Hero() {
  return (
    <div className="relative w-full">
      <div className="grid place-items-center min-h-[92vh] px-8">
        <div className="container mx-auto grid place-items-center h-max text-center">
          <Typography variant="h1" color="blue-gray">
          Suraj Kumar Portfolio
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className="mt-4 mb-12 w-full md:max-w-full lg:max-w-4xl"
          >
            Welcome to my professional portfolio! Below, you&apos;ll find a
            comprehensive overview of my skills, qualifications, and experience
            in the field of computer science.
          </Typography>
          <div className="gap-20 lg:flex">
          <Button color="gray" onClick={() => window.open('https://drive.google.com/file/d/1pov2u1hWYTVkvIjnYNbgfHr6cL_uw0-_/view?usp=sharing', '_blank')}>Resume</Button>
          <Button color="gray" onClick={() => window.location.href = `mailto:${EMAIL}`}>Message me</Button>
          </div>
          <Typography className="mt-12 mb-4 text-blue-gray-900 font-medium uppercase">
            Connect me on:
          </Typography>
          <div className="gap-2 lg:flex">
            <Link href="https://www.linkedin.com/in/surajkumar25/" target="_blank">
              <IconButton variant="text" color="gray">
                <i className="fa-brands fa-linkedin text-lg" />
              </IconButton>
            </Link>
            <Link href="https://github.com/Surajk7725" target="_blank">
              <IconButton variant="text" color="gray">
                <i className="fa-brands fa-github text-lg" />
              </IconButton>
            </Link>
            <Link href="https://www.credly.com/users/suraj-kumar.0e647258" target="_blank">
              <IconButton variant="text" color="gray">
                <img src="/credly.png" alt="Credly Logo" className="w-6 h-6" />
              </IconButton>
            </Link>
            <Link href="https://bento.me/surajkumar7725" target="_blank">
              <IconButton variant="text" color="gray">
                <img src="/bento.png" alt="Bento Logo" className="w-6 h-6" />
              </IconButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
